import test from 'node:test';
import assert from 'node:assert/strict';
import {selectedPilot,pilotSources,collectCatalog,parseWorkload,quoteBudget,collectRelayCosts} from '../src/pricing/relay-comparison.js';
import {resetRuntimeState} from '../src/pricing/service.js';
import {cashBudget,relayComparePage} from '../dist/relay-compare.js';
import {priceModels} from '../src/pricing/models.js';
test('pilot API has exactly 20 distinct sources and rejects outside URLs',()=>{
 assert.equal(pilotSources.length,20);assert.equal(new Set(pilotSources.map(s=>new URL(s.url).hostname)).size,20);
 assert.throws(()=>selectedPilot(new URL('https://v.test/?sources=https://bad.test')));
 assert.throws(()=>selectedPilot(new URL('https://v.test/?sources=openrouter,openrouter')));
});
test('catalog retrieves exact model IDs; one failed provider does not erase other inventories',async()=>{
 resetRuntimeState();let i=0;const r=await collectCatalog(pilotSources.slice(0,2),{fetcher:async()=>{if(i++===1)throw Error('offline');return Response.json({data:[{id:'gpt-test'},{id:'gpt-test'},{id:'<script>x</script>'}]})}});
 assert.deepEqual(r.sources[0].modelIds,['gpt-test','<script>x</script>']);assert.equal(r.sources[1].status,'error');
});
test('task cost preserves token and request units; rejects stale or unspecified multimodal units',()=>{
 const w=parseWorkload(new URL('https://v.test/'));const q={unit:'tokens',input:1,output:2,currency:'CREDIT_USD'};
 assert.equal(quoteBudget(q,w).total,4.8);
 assert.equal(quoteBudget({...q,unit:'request',perRequest:.1},w).total,300);
 assert.equal(quoteBudget({...q,stale:true},w),null);assert.equal(quoteBudget({...q,unit:'catalog_unit'},w),null);
 const r=quoteBudget(q,{...w,failure:20,failedCharge:50});assert.equal(r.failureCost,.6);
 assert.throws(()=>parseWorkload(new URL('https://v.test/?quantity=1.2')));assert.throws(()=>parseWorkload(new URL('https://v.test/?failure=100')));
});
test('per-channel settlement distinguishes consumption from recharge and never assumes missing conversion',()=>{
 const b={total:21,currency:'CREDIT_USD'};assert.equal(cashBudget(b,{}),null);
 assert.deepEqual(cashBudget(b,{paid:100,credits:20,balance:2,fee:10,extra:3}),{cny:118.50000000000001,upfront:113.00000000000001});
 assert.equal(cashBudget(b,{paid:100,credits:0}),null);assert.equal(cashBudget({total:2,currency:'USD'},{fx:7}).cny,14);
 assert.equal(cashBudget({total:2,currency:'USD'},{}),null);assert(relayComparePage().includes('站方声明'));
});
test('same model cost endpoint uses public API normalized price and workload, including group multiplier',async()=>{
 resetRuntimeState();const m=priceModels.find(m=>m.text);const u=new URL('https://v.test/?sources=modelsell&model='+m.id);
 const r=await collectRelayCosts(u,{fetcher:async()=>Response.json({success:true,data:[{model_name:m.aliases[0],enable_groups:['default'],quota_type:0,model_ratio:.5,completion_ratio:2}],group_ratio:{default:2}})});
 assert.equal(r.sources[0].quotes[0].budget.total,9.6);assert.equal(r.sources[0].quotes[0].budget.currency,'CREDIT_USD');
});
