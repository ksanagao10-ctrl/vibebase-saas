import assert from 'node:assert/strict';
import {discovery as d} from '../dist/data/discovery.js';
import {providers} from '../dist/data/providers.js';
import {quoteCost,sortedQuotes,offerExpired,activeOffers,renderDiscovery,searchDiscovery,homeDiscovery,taskQuotes,boardItems} from '../dist/discovery.js';

const ids=xs=>new Set(xs.map(x=>x.id));
for(const key of ['tasks','models','quotes','offers','news','industries','articles'])assert.equal(ids(d[key]).size,d[key].length,`Duplicate ${key}`);
const modelIds=ids(d.models),taskIds=ids(d.tasks),providerIds=ids(providers),articleIds=ids(d.articles);
for(const m of d.models){assert(m.provider?providerIds.has(m.provider):new URL(m.source).protocol==='https:');assert(m.modelId);for(const t of m.tasks)assert(taskIds.has(t));}
for(const t of d.tasks)assert(d.models.some(m=>m.tasks.includes(t.id)));
for(const q of d.quotes){assert(modelIds.has(q.model));assert(providerIds.has(q.provider));assert(q.input>=0&&q.output>=0);assert.equal(q.currency,'USD');assert.equal(new URL(q.source).protocol,'https:');}
for(const a of d.articles){for(const id of a.models)assert(modelIds.has(id));for(const id of a.tasks)assert(taskIds.has(id));assert(a.sections.length>0);for(const [,url] of a.sources)assert.equal(new URL(url).protocol,'https:');}
for(const i of d.industries){assert(articleIds.has(i.article));for(const [, , id] of i.steps)assert(modelIds.has(id));}
assert(Math.abs(quoteCost({input:.3,output:2.5},.2,.05)-.185)<1e-10);
const sorted=sortedQuotes('flash',1,.2);assert.equal(sorted.length,2);assert(sorted.every(q=>quoteCost(q,1,.2)===.8));
assert.deepEqual(sortedQuotes('image'),[]);
assert.equal(offerExpired({endsAt:'2026-12-31'},new Date('2026-12-31T23:59:59Z')),false);
assert.equal(offerExpired({endsAt:'2026-12-31'},new Date('2027-01-01T00:00:00Z')),true);
assert.equal(offerExpired({endsAt:null},new Date('2030-01-01')),false);
assert(!activeOffers(new Date('2027-01-01')).some(o=>o.id==='flash-promo'));
assert(searchDiscovery(' GEMINI ').models.length>0);
assert.deepEqual(searchDiscovery('  '),{models:[],providers:[],articles:[]});
const attack='<img src=x onerror=alert(1)>';
assert(!renderDiscovery('search/'+encodeURIComponent(attack)).includes(attack));
assert(renderDiscovery('search/%E0%A4%A'));
for(const route of ['models','boards/price','boards/free','boards/picks','offers/expired','news','industries','covibe',...d.models.map(m=>'model/'+m.id),...d.tasks.map(t=>'models/'+t.id),...d.articles.map(a=>'read/'+a.id),...d.industries.map(i=>'industry/'+i.id)])assert(renderDiscovery(route)?.includes('discovery-page'),route);
assert.equal(renderDiscovery('explore'),null);
assert(homeDiscovery().includes('CoVibe'));
assert.equal(d.articles.length,10);
for(const a of d.articles)assert(a.sections.length>=6);
for(const [id] of boardItems)assert(renderDiscovery('boards/'+id).includes('discovery-page'));
for(const t of d.tasks){const rows=taskQuotes(t.id);assert(rows.length>=3,t.id);assert(rows.every((r,i)=>!i||r.cost>=rows[i-1].cost));}
for(const q of d.mediaQuotes){assert(modelIds.has(q.model));assert(q.cost>=0);assert(q.spec);assert.equal(new URL(q.source).protocol,'https:');}
assert.equal(d.mediaQuotes.find(q=>q.id==='img-flux').cost,Math.ceil(1024*1024/1e6)*.003);
assert.equal(d.mediaQuotes.find(q=>q.id==='img-flash').cost,1120*60/1e6);
assert.equal(taskQuotes('video')[0].cost,.4);
assert.equal(taskQuotes('audio')[0].cost,.1005);
assert.equal(taskQuotes('knowledge')[0].cost,.02);
assert.equal(taskQuotes('audio')[1].cost,taskQuotes('audio')[2].cost);
assert(!renderDiscovery('model/flux').includes('data-discover-provider="null"'));
assert(renderDiscovery('model/image').includes('0.0672'));
assert(renderDiscovery('boards/price/sonnet').includes('value="sonnet" selected'));
assert(!renderDiscovery('boards/price/sonnet').includes('data-quote-id="google-flash"'));
console.log('Discovery: references, quote arithmetic, expiry boundaries, search escaping and routes passed.');
