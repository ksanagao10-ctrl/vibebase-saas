import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

let commit = process.env.CF_PAGES_COMMIT_SHA || process.env.WORKERS_CI_COMMIT_SHA || process.env.GITHUB_SHA;
if (!commit) {
  try { commit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); }
  catch { commit = 'local'; }
}
const paths = ['operations.js','data/operations.js','radar.js', 'data/radar-sources.js', 'index.html', 'styles.css', 'app.js', 'data/providers.js', 'data/relays.json', 'data/affiliate-programs.js', 'data/affiliate-links.js', 'discovery.js', 'data/discovery.js', 'data/industry-workflows.js', 'live-prices.js', 'price-picker.js', 'data/price-catalog.js', 'relay-compare.js', 'delivery-cost.js', 'experience.js', 'data/delivery-rates.js', 'data/experience-meta.js'];
const assets = Object.fromEntries(paths.map(path => [path, createHash('sha256').update(readFileSync(`dist/${path}`)).digest('hex')]));
const manifest = { commit, builtAt: new Date().toISOString(), rawCatalogEntries: JSON.parse(readFileSync('dist/data/relays.json', 'utf8')).sites.length, assets };
writeFileSync('dist/release.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Release manifest generated for ${commit}`);
