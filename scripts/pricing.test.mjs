import assert from 'node:assert/strict';
import {test,beforeEach} from 'node:test';
import {readFileSync} from 'node:fs';
import {sources} from '../src/pricing/sources.js';
import {priceModels} from '../src/pricing/models.js';
import {normalizeNewApi,normalizeOpenRouter,parseTierExpression} from '../src/pricing/adapters.js';
import {loadSource,parseQuery,collectPrices,resetRuntimeState} from '../src/pricing/service.js';
import {renderLivePrices,livePricePanel} from '../dist/live-prices.js';
import {discovery} from '../dist/data/discovery.js';
const model=priceModels.find(m=>m.id==='sol56');
const source=sources.find(s=>s.id==='lietio');
const fixture=id=>JSON.parse(readFileSync(new URL('./fixtures/pricing/'+id+'.json',import.meta.url)));
const response=payload=>new Response(JSON.stringify(payload),{headers:{'Content-Type':'application/json'}});
class Cache {data=new Map();async match(key){return this.data.get(key.url)?.clone();}async put(key,res){this.data.set(key.url,res.clone());}}
beforeEach(resetRuntimeState);
test('all selectable model IDs resolve and default input satisfies its HTML step',()=>{
 for(const m of discovery.models)assert(priceModels.some(p=>p.id===m.id));
 const html=livePricePanel('sol56');assert(html.includes('step="1" value="4000"'));
});
test('real group and long-context quotes preserve exact boundary operators',()=>{
 const low=normalizeNewApi(fixture('lietio'),source,model,{inputTokens:272000}).quotes.find(q=>q.group==='【GPT】不降智分组');
 const high=normalizeNewApi(fixture('lietio'),source,model,{inputTokens:272001}).quotes.find(q=>q.group==='【GPT】不降智分组');
 assert.equal(low.input,2);assert.equal(low.output,12);assert.equal(high.input,4);assert.equal(high.output,18);
 const apiko=sources.find(s=>s.id==='apiko'),m=priceModels.find(m=>m.id==='astra6');
 const at=normalizeNewApi(fixture('apiko'),apiko,m,{inputTokens:272000}).quotes.find(q=>q.group==='Codex-pro');
 assert.equal(at.input,3.2);assert.equal(at.output,16);
 const missing=normalizeNewApi(fixture('modelsell'),sources[1],m);
 assert(missing.issues.some(i=>i.group==='default'));assert(!missing.quotes.some(q=>q.group==='default'));
});
test('expressions are parsed as a restricted grammar; never executed',()=>{
 assert.equal(parseTierExpression('globalThis.process.exit()',1),null);
 assert.equal(parseTierExpression('len <= 10 ? tier("x", p * 2 + c * 3 + evil * 1) : tier("y", p * 4 + c * 6)',1),null);
 assert.equal(parseTierExpression('len <= 10 ? tier("x", p * 2 + c * 3) : tier("y", p * 4 + c * 6)',11).output,6);
});
test('zero groups stay zero; null prices and custom group formulas never become zero',()=>{
 const payload=fixture('lietio');payload.group_ratio['【GPT】不降智分组']=0;
 assert.equal(normalizeNewApi(payload,source,model).quotes.find(q=>q.group==='【GPT】不降智分组').output,0);
 payload.group_ratio['【GPT】不降智分组']=null;
 assert(!normalizeNewApi(payload,source,model).quotes.some(q=>q.group==='【GPT】不降智分组'));
 const custom=normalizeNewApi(fixture('xycai'),sources.find(s=>s.id==='xycai'),model);
 assert(custom.issues.some(q=>q.group==='gpt-ent'));assert(!custom.quotes.some(q=>q.group==='gpt-ent'));
});
test('exact version and modality matching, no prefix or suffix guessing',()=>{
 const data=fixture('lietio');data.data[0].model_name='gpt-5.6-sol-preview';
 assert.equal(normalizeNewApi(data,source,model).matched,0);
 assert.equal(normalizeNewApi(fixture('lietio'),source,{...model,text:false}).quotes.length,0);
});
test('OpenRouter token conversion, context tiers and UTC time windows',()=>{
 const payload={data:[{id:'openai/gpt-5.6-sol',pricing:{prompt:'0.000002',completion:'0.00001',overrides:[{min_prompt_tokens:272000,prompt:'0.000004',completion:'0.000015'}]}}]};
 assert.equal(normalizeOpenRouter(payload,sources[0],model,{inputTokens:4000}).quotes[0].input,2);
 assert.equal(normalizeOpenRouter(payload,sources[0],model,{inputTokens:272000}).quotes[0].output,15);
 payload.data[0].pricing.overrides=[{utc_days:['monday'],utc_start:100,utc_end:400,prompt:'0.000004'}];
 assert.equal(normalizeOpenRouter(payload,sources[0],model,{now:new Date('2026-09-21T02:00:00Z')}).quotes[0].input,4);
 assert.equal(normalizeOpenRouter(payload,sources[0],model,{now:new Date('2026-09-21T04:00:00Z')}).quotes[0].input,2);
});
test('query validates model, source allowlist and input length before network access',()=>{
 for(const query of ['model=not-a-model','sources=https://127.0.0.1','inputTokens=-1','inputTokens=NaN','inputTokens=2000001'])assert.throws(()=>parseQuery(new URL('https://vibebase.vip/api/prices?'+query)));
 assert.equal(parseQuery(new URL('https://vibebase.vip/api/prices?model=openai/gpt-5.6-sol')).model.id,'sol56');
});
test('shared cache is reused; expired data is clearly stale and excluded after 24 hours',async()=>{
 const cache=new Cache(),now=Date.now();let count=0;
 const fetcher=async()=>{count++;return response(fixture('lietio'));};
 await loadSource(source,{cache,fetcher,now});
 const fresh=await loadSource(source,{cache,fetcher,now:now+10000});
 assert(fresh.cached&&!fresh.stale);assert.equal(count,1);
 const stale=await loadSource(source,{cache,fetcher:async()=>{throw Error('offline');},now:now+301000});
 assert(stale.stale);assert.equal(stale.fetchedAt,new Date(now).toISOString());
 await assert.rejects(loadSource(source,{cache,fetcher:async()=>{throw Error('offline');},now:now+86401000}));
});
test('in-flight requests coalesce, and one source failure leaves other quotes intact',async()=>{
 let calls=0;const fetcher=async()=>{calls++;await new Promise(r=>setTimeout(r,10));return response(fixture('lietio'));};
 await Promise.all([loadSource(source,{fetcher}),loadSource(source,{fetcher})]);assert.equal(calls,1);
 const query=parseQuery(new URL('https://vibebase.vip/api/prices?model=sol56&sources=lietio,modelsell'));
 const result=await collectPrices(query,{fetcher:async url=>{if(url.includes('modelsell'))throw Error('offline');return response(fixture('lietio'));}});
 assert(result.sources.some(s=>s.status==='error'));assert(result.sources.some(s=>s.status==='ok'));
});
test('upstream HTML/login pages and oversize documents are not prices',async()=>{
 await assert.rejects(loadSource(source,{fetcher:async()=>new Response('<html>login</html>',{headers:{'Content-Type':'text/html'}})}));
 resetRuntimeState();
 await assert.rejects(loadSource(source,{fetcher:async()=>new Response('{}',{headers:{'Content-Type':'application/json','Content-Length':'99999999'}})}));
 resetRuntimeState();
 await assert.rejects(loadSource(source,{fetcher:async(url,options)=>{assert.equal(options.redirect,'manual');return new Response('',{status:302,headers:{Location:'https://127.0.0.1'}});}}));
});
test('UI separates credits/cash/request pricing, escapes source data and excludes stale quotes',()=>{
 const q={channel:'<img onerror=bad>',source:'javascript:bad',modelId:'gpt-5.6-sol',group:'standard',currency:'USD',unit:'tokens',input:2,output:10,note:'test',fetchedAt:new Date().toISOString()};
 const data={inputTokens:4000,sources:[{id:'test',name:'test',url:'javascript:bad',status:'ok',quotes:[q,{...q,currency:'CREDIT_USD'},{...q,unit:'request',currency:'CREDIT_USD',perRequest:.3},{...q,modelId:'OLD-QUOTE',stale:true}]}]};
 const html=renderLivePrices(data);assert(!html.includes('<img'));assert(!html.includes('href="javascript:'));assert(!html.includes('OLD-QUOTE'));
 assert(html.includes('站内额度报价')&&html.includes('按次计费')&&html.includes('美元报价'));
});
