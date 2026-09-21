import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {calculateDelivery} from '../dist/delivery-cost.js';
import {experienceMeta} from '../dist/data/experience-meta.js';
import {evidenceApi,validateFeedback} from '../src/evidence.js';
import {summarize,readInference,validateProbeOptions} from './probe-relay.mjs';
const base={kind:'image',quantity:100,yield:100,failure:0,failedCharge:0,extras:0,fee:0,currency:'USD',fx:'',unit:'megapixel',width:1024,height:1024,price:.003};
test('four delivery scenarios preserve units, rounding and dialogue turns',()=>{
 assert.equal(calculateDelivery(base).total,.6);
 assert.equal(calculateDelivery({...base,kind:'video',quantity:10,clip:8,unit:'second',price:.05}).total,30);
 assert.equal(calculateDelivery({...base,kind:'asr',quantity:60,files:1,minimumSeconds:10,unit:'hour',price:.04}).total,.04);
 assert.equal(calculateDelivery({...base,kind:'chat',quantity:1000,turns:3,inputTokens:1000,outputTokens:300,inputPrice:.1,outputPrice:.4,unit:'tokens'}).total,.66);
 assert.equal(calculateDelivery({...base,kind:'video',quantity:10,clip:8,unit:'second',price:.05,yield:80}).units,752);
 assert.equal(calculateDelivery({...base,kind:'asr',quantity:1,files:20,minimumSeconds:10,unit:'hour',price:.04}).units,200/3600);
});
test('recharge cash is distinct from consumption, fees include billed retries, missing FX remains unknown',()=>{
 const r=calculateDelivery({...base,yield:50,failure:20,failedCharge:50,extras:2,fee:10,currency:'CREDIT',rechargePaid:100,rechargeCredits:20,balance:0});
 assert(Math.abs(r.total-3.685)<1e-10);assert(Math.abs(r.cny-18.425)<1e-10);assert.equal(r.upfront,100);
 assert.equal(calculateDelivery({...base,currency:'CREDIT',rechargePaid:100,rechargeCredits:20,balance:10}).upfront,0);
 assert.equal(calculateDelivery(base).cny,null);
 assert.equal(calculateDelivery({...base,fx:7}).cny,4.2);
 for(const change of [{quantity:-1},{price:''},{price:NaN},{failure:100},{yield:0},{unit:'second'},{currency:'CREDIT',rechargePaid:100,rechargeCredits:0,balance:0}])assert.throws(()=>calculateDelivery({...base,...change}));
});
const articleId='image-budget',meta=experienceMeta[articleId];
const feedback={articleId,version:meta.version,kind:'correction',modelId:meta.models[0].id,channelId:'modelsell',scope:'测试使用范围',note:'测试反馈：请核对图片计费取整规则。'};
function storage(){const sql=new DatabaseSync(':memory:');sql.exec(readFileSync(new URL('../migrations/0001_evidence.sql',import.meta.url),'utf8'));sql.prepare('INSERT INTO app_config VALUES (?,?)').run('feedback_salt','test-only');return {sql,prepare(q){let args=[];const statement=()=>sql.prepare(q);return {bind(...v){args=v;return this;},async first(){return statement().get(...args)||null;},async all(){return {results:statement().all(...args)};},async run(){const r=statement().run(...args);return {meta:{changes:Number(r.changes)}};}};}};}
const request=(body,headers={})=>new Request('https://vibebase.vip/api/feedback',{method:'POST',headers:{Origin:'https://vibebase.vip','Content-Type':'application/json','CF-Connecting-IP':'192.0.2.1',...headers},body:JSON.stringify(body)});
test('feedback persists, duplicates do not inflate counts, public response never leaks notes',async()=>{
 const db=storage(),env={EVIDENCE_DB:db};const r=await evidenceApi(request(feedback),env);assert.equal(r.status,201);const cookie=r.headers.get('set-cookie').split(';')[0];
 assert.equal((await (await evidenceApi(request(feedback,{Cookie:cookie}),env)).json()).duplicate,true);
 const data=await (await evidenceApi(new Request('https://vibebase.vip/api/feedback?article='+articleId),env)).json();assert.equal(data.corrections,1);assert(!JSON.stringify(data).includes('图片计费'));assert.equal(data.verified,false);
 assert.equal(db.sql.prepare('SELECT COUNT(*) AS n FROM feedback').get().n,1);
 assert.equal((await evidenceApi(request(feedback,{Origin:'https://evil.example'}),env)).status,403);
 for(let i=0;i<8;i++)await evidenceApi(request(feedback),env);
 assert.equal((await evidenceApi(request(feedback),env)).status,429);db.sql.close();
});
test('reproduction requires exact article version, model/channel and a real date; unknown cost is not zero',()=>{
 const r=validateFeedback({...feedback,kind:'reproduced',testedAt:'2026-09-21',cost:'',currency:'USD'});assert.equal(r.cost,null);
 for(const patch of [{version:'old'},{modelId:'invented'},{channelId:'invented'},{kind:'reproduced',testedAt:'2026-02-30'},{kind:'reproduced',testedAt:'2999-01-01'},{note:'Bearer abcdefghijklmnopqrstuvwxyz'}])assert.throws(()=>validateFeedback({...feedback,...patch}));
});
test('first-token latency uses valid completed streams; incomplete and empty streams fail',async()=>{
 const stream=s=>new Response(s,{headers:{'Content-Type':'text/event-stream'}});
 const good='data: {"choices":[{"delta":{"content":"2"}}]}\n\ndata: {"choices":[{"delta":{},"finish_reason":"stop"}],"usage":{"prompt_tokens":10,"completion_tokens":1}}\n\ndata: [DONE]\n\n';
 const r=await readInference(stream(good),100,()=>125);assert.equal(r.success,true);assert.equal(r.ttftMs,25);
 assert.equal((await readInference(stream('data: {"choices":[{"delta":{"content":"2"}}]}\n\n'),100)).success,false);
 assert.equal((await readInference(stream(good.replace('"2"','"wrong"')),100)).error,'unexpected_answer');
 const stats=summarize([r,{success:false,error:'timeout',ttftMs:99}]);assert.equal(stats.successes,1);assert.equal(stats.ttft.samples,1);assert.equal(stats.errors.timeout,1);
 assert.throws(()=>validateProbeOptions({mode:'inference',samples:2}));
 assert.throws(()=>validateProbeOptions({mode:'inference',execute:'true',region:'test',model:'test','max-estimated-usd':.000001,'input-usd-per-million':10,'output-usd-per-million':10}));
});
