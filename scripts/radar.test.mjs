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
