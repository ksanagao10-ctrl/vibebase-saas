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
 const html=livePricePanel('sol56');assert(html.includes('step="1" value="4000"'));assert(!html.includes('data-model='));assert(html.includes('data-price-model='));
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

test('six top-ten categories resolve exact routes, rank by coverage and count distinct stations',async()=>{
 const {priceCatalog:c}=await import('../dist/data/price-catalog.js');
 const {pickerRows}=await import('../dist/price-picker.js');
 const {renderDiscovery}=await import('../dist/discovery.js');
 assert.equal(c.categories.length,6);assert.equal(c.sources.length,80);
 assert.equal(new Set(c.sources.map(s=>new URL(s.url).hostname)).size,80);
 assert.equal(new Set(c.models.map(m=>m.id)).size,c.models.length);
 for(const category of c.categories){
  assert.equal(category.models.length,10);assert.equal(new Set(category.models).size,10);
  let previous=Infinity;
  for(const id of category.models){
   assert(!id.includes('/'));
   const m=c.models.find(m=>m.id===id);assert(m);assert(m.listedSources.length>0);
   assert(m.listedSources.length<=previous);previous=m.listedSources.length;
   assert.equal(new Set(m.listedSources).size,m.listedSources.length);
   assert(m.comparableSources.every(s=>m.listedSources.includes(s)));
   assert(renderDiscovery('boards/price/'+id).includes('data-price-model="'+id+'"'));
  }
  assert.equal((pickerRows(category.id).match(/data-price-choice=/g)||[]).length,10);
 }
 assert(pickerRows('asr','NO-SUCH-MODEL').includes('没有匹配模型'));
 assert(pickerRows('text','GPT').includes('GPT-6 Astra'));
});
test('large provider inventories are bounded per request and distinct groups never inflate source count',()=>{
 const query=parseQuery(new URL('https://vibebase.vip/api/prices'));
 assert.equal(query.selected.length,20);
 assert.throws(()=>parseQuery(new URL('https://vibebase.vip/api/prices?sources='+sources.slice(0,21).map(s=>s.id).join(','))));
 const q=parseQuery(new URL('https://vibebase.vip/api/prices?sources=lietio,lietio'));
 assert.equal(q.selected.length,1);
});
test('fixed expressions cannot execute code and multimodal base prices never masquerade as per-request totals',()=>{
 const payload={success:true,group_ratio:{default:1},data:[{model_name:'sora-2',enable_groups:['default'],quota_type:1,model_price:.4,billing_mode:'tiered_expr',billing_expr:'tier("standard", fixed(0.4))'}]};
 const m=priceModels.find(m=>m.id==='sora-2');
 const r=normalizeNewApi(payload,source,m);assert.equal(r.quotes[0].unit,'catalog_unit');assert.equal(r.quotes[0].perRequest,.4);
 const html=renderLivePrices({sources:[{...source,status:'unsupported',quotes:r.quotes}]});
 assert(html.includes('目录基础单价'));assert(!html.includes('估算消耗'));
 payload.data[0].billing_expr='tier("standard", fixed(process.exit()))';
 assert.equal(normalizeNewApi(payload,source,m).quotes.length,0);
});

test('Fable 5.1 explicitly matches dotted and hyphenated versions without merging variant suffixes',()=>{
 const model=priceModels.find(m=>m.id==='fable51');
 assert(model.aliases.includes('claude-fable-5-1'));
 for(const id of ['claude-fable-5','claude-fable-5-1-max','claude-fable-5-1-thinking','anthropic/claude-fable-5.1:batch'])assert(!model.aliases.includes(id));
 const source={id:'sample',name:'Sample',url:'https://example.com/api/pricing'};
 const row=id=>({model_name:id,enable_groups:['default'],quota_type:0,model_ratio:5,completion_ratio:5});
 const result=normalizeNewApi({success:true,data:[row('claude-fable-5-1'),row('claude-fable-5.1'),row('claude-fable-5'),row('claude-fable-5-1-max')],group_ratio:{default:1}},source,model);
 assert.equal(result.matched,2);assert.equal(result.quotes.length,2);assert.equal(result.quotes[0].input,10);assert.equal(result.quotes[0].output,50);
});
test('single-tier billing parses known cache terms but never executes unknown expressions',()=>{
 const r=parseTierExpression('tier("base", p * 10 + c * 50 + cr * 0.25 + cc * 12.5 + cc1h * 20)',1000);
 assert.equal(r.input,10);assert.equal(r.output,50);
 for(const e of ['tier("x", p * 10 + c * 50 + unknown * 2)','tier("x", p * 10 + c * 50 + p * 2)','tier("x", p * 10 + c * 50 + fetch("https://bad"))'])assert.equal(parseTierExpression(e,1000),null);
 const r2=parseTierExpression('len <= 200000 ? tier("a", p * 10 + c * 50 + cc1h * 20) : tier("b", p * 20 + c * 75 + cc1h * 30)',200001);assert.equal(r2.input,20);
});
