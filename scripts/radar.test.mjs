import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {normalizePosts,mergePosts,radarApi,collectRadar} from '../src/radar.js';
import {makeRadarDraft} from '../dist/radar.js';
const now=new Date(),row={tweetId:'2034694288651473335',url:'https://x.com/OpenAI/status/2034694288651473335',text:'OpenAI API release and pricing announcement',createdAt:now.toISOString(),success:true};
function db(){
 const sql=new DatabaseSync(':memory:');
 sql.exec('CREATE TABLE app_config (key TEXT PRIMARY KEY,value TEXT NOT NULL)');
 return {prepare(query){return {bind(...args){return {
  first:async()=>sql.prepare(query).get(...args),
  run:async()=>({meta:{changes:Number(sql.prepare(query).run(...args).changes)}})
 };}};}};
}
test('reject errors, mocks, unsafe URLs, missing or stale dates; deduplicate valid posts',()=>{
 const rows=[row,row,{...row,isMock:true},{...row,url:'https://evil.test/OpenAI/status/2034694288651473335'},{...row,url:'javascript:alert(1)'},{...row,success:false},{...row,createdAt:'bad'},{...row,createdAt:'2020-01-01'},{...row,text:'Tweet text...'}];
 const posts=normalizePosts(rows,'apify',now);assert.equal(posts.length,1);assert.equal(posts[0].evidence,'X 原帖 · 尚未独立核验');assert.equal(posts[0].category,'价格变化');
 assert.equal(mergePosts(posts,posts,now).length,1);
});
test('reading the public feed neither fetches nor exposes secrets; writes rejected',async()=>{
 const env={EVIDENCE_DB:db(),APIFY_TOKEN:'secret-not-public',APIFY_FREE_PLAN_CONFIRMED:'true'};
 const r=await radarApi(new Request('https://example.test/api/radar'),env),text=await r.text();assert(!text.includes(env.APIFY_TOKEN));assert.equal(JSON.parse(text).collection.status,'waiting');
 assert.equal((await radarApi(new Request('https://example.test/api/radar',{method:'POST'}),env)).status,405);
});
test('missing free-plan confirmation cannot start a paid run',async()=>{
 const original=globalThis.fetch;let calls=0;globalThis.fetch=async()=>{calls++;throw Error('unexpected');};
 try{await collectRadar({EVIDENCE_DB:db(),APIFY_TOKEN:'secret'},now);assert.equal(calls,0);}finally{globalThis.fetch=original;}
});
test('daily reservation, server-side budget, pending polling and real result persistence',async()=>{
 const original=globalThis.fetch,env={EVIDENCE_DB:db(),APIFY_TOKEN:'secret',APIFY_FREE_PLAN_CONFIRMED:'true'};let starts=0;
 globalThis.fetch=async(url,init)=>{
  assert.equal(init.headers.Authorization,'Bearer secret');assert(!url.includes('secret'));
  if(init.method==='POST'){starts++;const u=new URL(url);assert.equal(u.searchParams.get('maxTotalChargeUsd'),'0.03');assert.equal(u.searchParams.get('maxItems'),'45');assert.equal(JSON.parse(init.body).maxResults,15);return Response.json({data:{id:'testrun'}});}
  if(url.includes('actor-runs'))return Response.json({data:{status:'SUCCEEDED',defaultDatasetId:'testdataset'}});
  return Response.json([row,{...row,isMock:true}]);
 };
 try{await collectRadar(env,now);await collectRadar(env,now);await collectRadar(env,now);assert.equal(starts,1);const result=await (await radarApi(new Request('https://example.test/api/radar'),env)).json();assert.equal(result.items.length,1);assert.equal(result.collection.status,'ok');}finally{globalThis.fetch=original;}
});
test('uncertain start fails closed without retrying and leaking upstream details',async()=>{
 const original=globalThis.fetch,env={EVIDENCE_DB:db(),APIFY_TOKEN:'secret',APIFY_FREE_PLAN_CONFIRMED:'true'};let starts=0;globalThis.fetch=async()=>{starts++;throw Error('credential secret');};
 try{await collectRadar(env,now);await collectRadar(env,now);assert.equal(starts,1);const r=await (await radarApi(new Request('https://example.test/api/radar'),env)).text();assert(!r.includes('credential secret'));assert.equal(JSON.parse(r).collection.status,'error');}finally{globalThis.fetch=original;}
});
test('CoVibe outline retains provenance and does not invent tested claims',()=>{
 const post=normalizePosts([row],'apify',now)[0],draft=makeRadarDraft(post);assert(draft.includes(post.url));assert(draft.includes('尚未实测'));assert(draft.includes('不调用付费生成模型'));
});

test('deduplication retains independent collector provenance, not independent evidence',()=>{
 const one=normalizePosts([row],'twitterapi',now),two=normalizePosts([row],'x-api',now);
 const combined=mergePosts(one,two,now);assert.equal(combined.length,1);assert.deepEqual(combined[0].sources,['twitterapi','x-api']);assert.equal(combined[0].evidence,'X 原帖 · 尚未独立核验');
});
test('provider request builders use correct dialects and bounded Apify inputs',async()=>{
 const {collectors,requestFor,sourceEnabled,extractRows}=await import('../src/radar-adapters.js');
 const env={X_BEARER_TOKEN:'x-secret',X_API_ENABLED:'true',X_API_MONTHLY_REQUEST_LIMIT:'2',TWITTERAPI_KEY:'t-secret'};
 assert(sourceEnabled(collectors.find(s=>s.id==='x-api'),env));assert(!sourceEnabled(collectors.find(s=>s.id==='x-api'),{...env,X_API_MONTHLY_REQUEST_LIMIT:'0'}));
 const x=requestFor(collectors.find(s=>s.id==='x-api'),env,now),url=new URL(x.url);assert.equal(url.searchParams.get('max_results'),'10');assert(url.searchParams.get('query').includes('-is:retweet'));assert(!x.url.includes('secret'));
 const t=requestFor(collectors.find(s=>s.id==='twitterapi'),env,now);assert(t.url.includes('since_time'));assert.equal(t.init.headers['X-API-Key'],'t-secret');
 for(const id of ['apify-unlimited','apify-v2']){const r=requestFor(collectors.find(s=>s.id===id),{APIFY_TOKEN:'s'},now),body=JSON.parse(r.init.body);assert.equal(body.searchTerms.length,1);assert.equal(body.sort,'Latest');assert.equal(body.maxItems,id==='apify-v2'?50:40);}
 const extracted=extractRows('x-api',{data:[{id:'2034694288651473335',author_id:'42',text:row.text,created_at:now.toISOString()}],includes:{users:[{id:'42',username:'OpenAI'}]}});assert.equal(normalizePosts(extracted,'x-api',now).length,1);assert.throws(()=>extractRows('twitterapi',{error:'bad'}));
});
test('one provider failure does not block others; monthly request reservation includes failures',async()=>{
 const original=globalThis.fetch,env={EVIDENCE_DB:db(),TWITTERAPI_KEY:'s',TWITTERAPI_ENABLED:'true',TWITTERAPI_MONTHLY_REQUEST_LIMIT:'1',X_BEARER_TOKEN:'s',X_API_ENABLED:'true',X_API_MONTHLY_REQUEST_LIMIT:'1'};
 let calls=0;globalThis.fetch=async url=>{calls++;if(url.includes('twitterapi'))throw Error('upstream failure');return Response.json({data:[{id:'2034694288651473335',author_id:'42',text:row.text,created_at:now.toISOString()}],includes:{users:[{id:'42',username:'OpenAI'}]}});};
 try{await collectRadar(env,new Date('2026-09-10'));const initial=await(await radarApi(new Request('https://example.test/api/radar'),env)).json();assert.equal(initial.collectors.find(s=>s.id==='x-api').status,'ok');assert.equal(initial.collectors.find(s=>s.id==='twitterapi').status,'error');await collectRadar(env,new Date('2026-09-11'));assert.equal(calls,2);const result=await(await radarApi(new Request('https://example.test/api/radar'),env)).json();assert.equal(result.collectors.find(s=>s.id==='x-api').status,'budget');assert.equal(result.collectors.find(s=>s.id==='twitterapi').status,'budget');}finally{globalThis.fetch=original;}
});
test('authenticated local ingestion validates input and isolates source snapshots',async()=>{
 const env={EVIDENCE_DB:db(),RADAR_INGEST_TOKEN:'test-push-secret'};
 const req=(source,token='test-push-secret',items=[row])=>new Request('https://example.test/api/radar/ingest',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify({source,items})});
 assert.equal((await radarApi(req('twscrape','wrong'),env)).status,401);
 assert.equal((await radarApi(req('x-api'),env)).status,400);
 assert.equal((await radarApi(req('twscrape'),env)).status,200);
 assert.equal((await radarApi(req('twikit'),env)).status,200);
 assert.equal((await radarApi(req('twscrape',undefined,[{...row,isMock:true}]),env)).status,422);
 const result=await(await radarApi(new Request('https://example.test/api/radar'),env)).json();assert.equal(result.items.length,1);assert.deepEqual(result.items[0].sources,['twscrape','twikit']);assert(!JSON.stringify(result).includes('test-push-secret'));
});
test('V2 only starts on weekly schedule, missing opt-in never calls Apify',async()=>{
 const original=globalThis.fetch;let calls=0;globalThis.fetch=async()=>{calls++;return Response.json({data:{id:'weekly'}});};
 const env={EVIDENCE_DB:db(),APIFY_TOKEN:'s',APIFY_V2_ENABLED:'true'};
 try{await collectRadar(env,new Date('2026-09-22'));assert.equal(calls,0);await collectRadar(env,new Date('2026-09-21'));assert.equal(calls,1);}finally{globalThis.fetch=original;}
});
