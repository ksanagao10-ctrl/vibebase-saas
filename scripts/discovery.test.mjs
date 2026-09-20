import assert from 'node:assert/strict';
import {discovery as d} from '../dist/data/discovery.js';
import {providers} from '../dist/data/providers.js';
import {rankedFreeModels,freeOffers,quoteCost,sortedQuotes,offerExpired,activeOffers,renderDiscovery,searchDiscovery,homeDiscovery,taskQuotes,boardItems} from '../dist/discovery.js';

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

const relayFree=freeOffers('relay');
assert.equal(relayFree.length,8);
assert.equal(freeOffers('trial').length,5);
assert.equal(freeOffers('conditional').length,3);
assert.equal(freeOffers('other').length,7);
assert.equal(new Set(relayFree.map(o=>o.relayRank)).size,8);
assert.equal(d.relayFreeReview.confirmedCount,relayFree.length);
assert(freeOffers().every(o=>o.type==='free'));
for(const o of relayFree){assert(o.terms);assert(o.modelScope);assert(o.evidence);assert.equal(new URL(o.source).protocol,'https:');}
assert(relayFree.find(o=>o.relayRank===47).terms.includes('Telegram'));
assert(renderDiscovery('boards/trials/relay').includes('https://voltapi.ai/register?aff=WPCLXQ43AQHV'));
assert(!renderDiscovery('boards/free/other').includes('WPCLXQ43AQHV'));
console.log('Free relay filters, evidence and referral routing passed.');

const freeRows=d.freeModels;
assert.equal(new Set(freeRows.map(m=>m.platform+':'+m.modelId)).size,freeRows.length);
assert.equal(rankedFreeModels('openrouter').length,21);
assert.equal(rankedFreeModels('groq').length,10);
assert.equal(rankedFreeModels('siliconflow').length,14);
assert(rankedFreeModels('openrouter').every(m=>m.modelId.endsWith(':free')&&m.priceEvidence.prompt==='0'&&m.priceEvidence.completion==='0'));
assert(!freeRows.some(m=>m.modelId==='openrouter/free'||m.modelId.startsWith('google/lyria')));
assert(rankedFreeModels('all','image').every(m=>m.capabilities.includes('image')));
assert.equal(rankedFreeModels('openrouter','text','qwen3.8').length,1);
assert.equal(rankedFreeModels('groq','image').length,0);
const contextRows=rankedFreeModels('all','all','','context');
assert(contextRows.every((m,i)=>!i||(contextRows[i-1].context||0)>=(m.context||0)));
for(const m of freeRows){assert(m.modelId);assert(m.limits);assert(m.priceEvidence);assert(['zero','quota'].includes(m.freeType));assert.equal(new URL(m.source).protocol,'https:');}
assert(!renderDiscovery('boards/free').includes('WPCLXQ43AQHV'));
assert(renderDiscovery('boards/free/openrouter').includes('nvidia/nemotron-3.5-lightning:free'));
assert(!renderDiscovery('boards/free/all/all/'+encodeURIComponent(attack)).includes(attack));
assert(renderDiscovery('boards/free/groq/image').includes('empty'));
console.log('Model-level free directory, filters, pricing evidence, separation and sorting passed.');

assert.equal(freeRows.length,160);
assert.equal(d.freeModelPlatforms.length,20);
assert(!freeRows.some(m=>['relay-5','relay-78','relay-255','relay-295'].includes(m.platform)));
assert(freeRows.filter(m=>m.platform==='relay-638').every(m=>m.groupNames.includes('\u516c\u76ca')));
assert(freeRows.filter(m=>m.platform==='relay-215').every(m=>m.limits.includes('13:30')));
assert.equal((renderDiscovery('boards/free').match(/class="discovery-card free-model-card"/g)||[]).length,24);
assert.equal((renderDiscovery('boards/free/all/all//name/7').match(/class="discovery-card free-model-card"/g)||[]).length,16);
console.log('Relay group eligibility, exclusions and pagination passed.');
