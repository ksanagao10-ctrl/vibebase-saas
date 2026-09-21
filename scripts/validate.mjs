import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {providers} from '../dist/data/providers.js';
import {affiliatePrograms, ownedReferrals} from '../dist/data/affiliate-programs.js';
import {activeReferral, affiliateFor, providerDestination} from '../dist/data/affiliate-links.js';
import './discovery.test.mjs';
execFileSync(process.execPath,['--test','scripts/pricing.test.mjs'],{stdio:'inherit'});
for(const f of ['dist/discovery.js','dist/live-prices.js','dist/price-picker.js','dist/data/price-catalog.js','dist/data/discovery.js','dist/data/industry-workflows.js','src/worker.js','src/pricing/service.js','src/pricing/adapters.js','src/pricing/models.js','src/pricing/sources.js'])execFileSync(process.execPath,['--check',f]);
for(const f of ['dist/app.js','dist/data/providers.js','dist/data/affiliate-programs.js','dist/data/affiliate-links.js'])execFileSync(process.execPath,['--check',f]);
const html=readFileSync('dist/index.html','utf8');
assert(html.includes('charset="UTF-8"')&&html.includes('VibeBase'));
for(const f of ['dist/styles.css','dist/app.js','dist/data/providers.js','dist/data/relays.json'])assert(readFileSync(f,'utf8').length>0);
const js=readFileSync('dist/app.js','utf8');
assert(!/fetch\s*\(\s*['"]https?:/.test(js),'Catalog must load from this site');
const data=JSON.parse(readFileSync('dist/data/relays.json','utf8'));assert(data.sites.length>=800);
assert.equal(providers.filter(p=>p.official).length,37);
assert.equal(affiliatePrograms.length,data.sites.length+37);
assert.equal(new Set(affiliatePrograms.map(r=>r.id)).size,affiliatePrograms.length);
assert.deepEqual(affiliatePrograms.filter(r=>r.scope==='relay').map(r=>r.rank).sort((a,b)=>a-b),data.sites.map(r=>r.rank).sort((a,b)=>a-b));
for(const p of providers.filter(p=>p.official))assert(affiliateFor(p),`Missing affiliate review: ${p.id}`);
for(const r of affiliatePrograms){
  for(const key of ['url','entryUrl','sourceUrl']){
    const u=new URL(r[key]);
    assert(['https:','http:'].includes(u.protocol));
    assert(!u.username&&!u.password);
    assert(!/[?&](aff|ref|referral|invite|code)=/i.test(u.search),'Do not import third-party referral codes');
  }
  assert(!JSON.stringify(r).includes('ksanagao10'),'Application identity must stay private');
  if(ownedReferrals[r.id])assert(activeReferral(r),`Inactive referral: ${r.id}`);
}
const program=affiliatePrograms.find(r=>r.id==='relay-47');
const owned={url:'https://example.com/?ref=owned-test',status:'active',ownerConfirmed:true,publicSharingReview:'permitted',reviewedAt:'2026-09-20'};
assert.equal(activeReferral(program,{[program.id]:owned}),owned.url);
for(const change of [{status:'pending'},{ownerConfirmed:false},{publicSharingReview:'blocked'},{url:'javascript:alert(1)'},{url:'https://user:password@example.com/'},{reviewedAt:''}]){
  assert.equal(activeReferral(program,{[program.id]:{...owned,...change}}),null);
}
assert.equal(activeReferral({id:'official-cerebras'},{'official-cerebras':owned}),null);
assert.equal(affiliateFor({id:'relay-47-volt',rank:47}).id,'relay-47');
assert.equal(providerDestination({id:'relay-10-seed',rank:10,url:'https://example.com/?aff=someone-else'}).url,'https://88api.ai/');
console.log(`Validated VibeBase: ${data.sites.length} raw catalog entries; all static assets present.`);
