import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const address = process.argv[2] || process.env.SITE_URL;
assert(address, 'Pass the deployed URL: npm run verify:live -- https://your-site.example');
const base = new URL(address);
assert(['http:', 'https:'].includes(base.protocol), 'SITE_URL must be HTTP(S)');
base.search = ''; base.hash = '';
if (!base.pathname.endsWith('/')) base.pathname += '/';
const expected = process.env.EXPECTED_COMMIT;
const attempts = Number(process.env.VERIFY_ATTEMPTS || 1);
assert(Number.isInteger(attempts) && attempts >= 1 && attempts <= 30);
const decoder = new TextDecoder('utf-8', { fatal: true });
async function get(path, mime) {
  const url = new URL(path, base);
  url.searchParams.set('release_check', Date.now().toString());
  const response = await fetch(url, { signal: AbortSignal.timeout(20000), headers: { 'Cache-Control': 'no-cache' } });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  assert(mime.test(response.headers.get('content-type') || ''), `${path}: wrong Content-Type`);
  const bytes = Buffer.from(await response.arrayBuffer());
  return { text: decoder.decode(bytes), hash: createHash('sha256').update(bytes).digest('hex') };
}
async function verify() {
  const manifest = JSON.parse((await get('release.json', /application\/json/i)).text);
  if (expected) assert.equal(manifest.commit, expected, 'Latest commit is not live yet');
  const results = await Promise.all([
    get('index.html', /text\/html/i), get('styles.css', /text\/css/i),
    get('app.js', /(?:javascript|ecmascript)/i), get('data/providers.js', /(?:javascript|ecmascript)/i),
    get('data/relays.json', /application\/json/i),
    get('data/affiliate-programs.js', /(?:javascript|ecmascript)/i),
    get('data/affiliate-links.js', /(?:javascript|ecmascript)/i),
    get('discovery.js', /(?:javascript|ecmascript)/i),
    get('data/discovery.js', /(?:javascript|ecmascript)/i),
    get('data/industry-workflows.js', /(?:javascript|ecmascript)/i)
  ]);
  const paths = ['index.html', 'styles.css', 'app.js', 'data/providers.js', 'data/relays.json', 'data/affiliate-programs.js', 'data/affiliate-links.js', 'discovery.js', 'data/discovery.js', 'data/industry-workflows.js'];
  results.forEach((result, index) => {
    // Cloudflare may inject analytics into HTML; other static files must match exactly.
    if (index > 0) assert.equal(result.hash, manifest.assets[paths[index]], `${paths[index]}: stale or modified asset`);
  });
  assert(results[0].text.includes('VibeBase'), 'Wrong website served');
  assert(/charset=["']?utf-8/i.test(results[0].text), 'Missing UTF-8 declaration');
  const data = JSON.parse(results[4].text);
  assert(data.sites.length >= 800, 'Missing catalog records');
  assert.equal(data.sites.length, manifest.rawCatalogEntries);
  assert(data.sites.some(site => /[\u4e00-\u9fff]/.test(site.description || '')), 'Chinese content missing');
  assert(!/fetch\s*\(\s*['"]https?:/.test(results[2].text), 'Unexpected external runtime data source');
  console.log(`PASS ${base.href}: commit ${manifest.commit}; HTML/CSS/JS/JSON, UTF-8, ${data.sites.length} catalog records and asset hashes verified.`);
}
for (let attempt = 1; attempt <= attempts; attempt++) {
  try { await verify(); break; }
  catch (error) {
    if (attempt === attempts) throw error;
    console.log(`Waiting for deployment (${attempt}/${attempts}): ${error.message}`);
    await new Promise(resolve => setTimeout(resolve, 20000));
  }
}
