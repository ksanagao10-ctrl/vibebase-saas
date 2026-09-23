import {radarSources,radarCheckedAt,radarQueries} from '../dist/data/radar-sources.js';

const STATE='radar:apify:state', ITEMS='radar:items';
export const ACTOR='lance_api~x-tweet-scraper-api';
const response=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const date=value=>{const n=Date.parse(value);return Number.isFinite(n)?new Date(n).toISOString():null;};
export function normalizePosts(rows,source='apify',now=new Date()){
 if(!Array.isArray(rows))throw Error('采集结果必须是数组');
 const found=new Map();
 for(const row of rows.slice(0,1000)){
  if(!row||row.success===false||row.error||row.isMock||row.isDemo||row.mock||row.demo)continue;
  const text=String(row.text||row.full_text||row.rawContent||'').trim();
  if(text.length<15||/mock data|demo data|sample tweet|Tweet text\.\.\.|upgrade.*plan/i.test(text))continue;
  let url;try{url=new URL(row.url||row.tweetUrl);}catch{continue;}
  if(url.protocol!=='https:'||!['x.com','twitter.com','www.x.com','www.twitter.com'].includes(url.hostname)||url.username||url.password)continue;
  const match=url.pathname.match(/^\/([A-Za-z0-9_]{1,15})\/status\/(\d{15,22})\/?$/);
  if(!match||['example','username'].includes(match[1].toLowerCase()))continue;
  const publishedAt=date(row.createdAt||row.created_at||row.date);
  if(!publishedAt||Date.parse(publishedAt)>now.getTime()+300000||now.getTime()-Date.parse(publishedAt)>30*86400000)continue;
  if(!/openai|chatgpt|gpt[-\s\d]|claude|gemini|deepseek|qwen|openrouter|llm|大模型|中转站|模型|API/i.test(text))continue;
  const category=/免费|限免|free tier|free model|credits/i.test(text)?'免费与限免':/降价|pricing|price|discount/i.test(text)?'价格变化':/教程|攻略|tutorial|workflow|how to/i.test(text)?'使用经验':'模型与渠道';
  found.set(match[2],{id:match[2],url:`https://x.com/${match[1]}/status/${match[2]}`,author:match[1],text:text.slice(0,1200),publishedAt,collectedAt:now.toISOString(),source,category,evidence:'X 原帖 · 尚未独立核验'});
 }
 return [...found.values()].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
}
export function mergePosts(old,rows,now=new Date()){
 return [...new Map([...old,...rows].filter(r=>now.getTime()-Date.parse(r.publishedAt)<=30*86400000).map(r=>[r.id,r])).values()].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,300);
}
async function read(db,key,fallback){const row=await db.prepare('SELECT value FROM app_config WHERE key=?').bind(key).first();return row?JSON.parse(row.value):fallback;}
async function write(db,key,value){await db.prepare('INSERT INTO app_config(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key,JSON.stringify(value)).run();}
async function apify(env,path,init={}){
 const res=await fetch('https://api.apify.com/v2/'+path,{...init,redirect:'error',signal:AbortSignal.timeout(20000),headers:{'Authorization':`Bearer ${env.APIFY_TOKEN}`,'Content-Type':'application/json'}});
 if(!res.ok)throw Error(`Apify HTTP ${res.status}`);
 const bytes=await res.text();if(bytes.length>2000000)throw Error('Apify 响应过大');return JSON.parse(bytes);
}
async function finishRun(env,state){
 const run=(await apify(env,`actor-runs/${encodeURIComponent(state.runId)}`)).data;
 if(['READY','RUNNING','TIMING-OUT','ABORTING'].includes(run.status))return;
 if(run.status!=='SUCCEEDED'){await write(env.EVIDENCE_DB,STATE,{...state,status:'error',message:'采集任务未成功：'+run.status,checkedAt:new Date().toISOString()});return;}
 const rows=await apify(env,`datasets/${encodeURIComponent(run.defaultDatasetId)}/items?clean=true&limit=100&format=json`);
 const posts=normalizePosts(rows),old=await read(env.EVIDENCE_DB,ITEMS,[]);
 await write(env.EVIDENCE_DB,ITEMS,mergePosts(old,posts));
 await write(env.EVIDENCE_DB,STATE,{...state,status:'ok',count:posts.length,rejected:rows.length-posts.length,checkedAt:new Date().toISOString(),message:posts.length?'已采集；内容仍需核验':'本次没有通过校验的相关帖子；未填充演示数据'});
}
// Only the scheduled handler starts runs. Public reads never consume an Actor run.
export async function collectRadar(env,now=new Date()){
 const db=env.EVIDENCE_DB;
 if(!db||!env.APIFY_TOKEN||env.APIFY_FREE_PLAN_CONFIRMED!=='true')return;
 let state=await read(db,STATE,{});
 try{
  if(state.status==='running'){
   await finishRun(env,state);return;
  }
  const day=now.toISOString().slice(0,10),lock='radar:day:'+day;
  const reserved=await db.prepare('INSERT OR IGNORE INTO app_config(key,value) VALUES(?,?)').bind(lock,now.toISOString()).run();
  if(!reserved.meta?.changes)return;
  // A failed or uncertain start is not retried today: avoid duplicate billed runs.
  state={status:'starting',day,checkedAt:now.toISOString()};await write(db,STATE,state);
  const since=new Date(now.getTime()-2*86400000).toISOString().slice(0,10);
  const result=await apify(env,`acts/${ACTOR}/runs?build=1.0.22&timeout=120&memory=256&maxItems=45&maxTotalChargeUsd=0.03`,{method:'POST',body:JSON.stringify({searchQueries:radarQueries.map(q=>q+' since:'+since),sort:'latest',maxResults:15})});
  if(!result.data?.id)throw Error('缺少任务 ID');
  await write(db,STATE,{...state,status:'running',runId:result.data.id,message:'采集中，下一次调度检查结果'});
 }catch(error){await write(db,STATE,{...state,status:'error',message:/^Apify HTTP \d+$/.test(error.message)?error.message:'采集失败，请检查 Apify 控制台的余额、权限和任务记录',checkedAt:now.toISOString()});}
}
export async function radarApi(request,env){
 if(request.method!=='GET')return response({error:'仅支持 GET'},405);
 if(!env.EVIDENCE_DB)return response({error:'信息存储暂时不可用'},503);
 const [state,items]=await Promise.all([read(env.EVIDENCE_DB,STATE,{}),read(env.EVIDENCE_DB,ITEMS,[])]);
 const configured=Boolean(env.APIFY_TOKEN)&&env.APIFY_FREE_PLAN_CONFIRMED==='true';
 return response({sources:radarSources,checkedAt:radarCheckedAt,items:mergePosts([],items),collection:{status:configured?(state.status||'waiting'):'unconfigured',message:configured?(state.message||'已配置，等待首次调度'):'Apify 尚未配置服务端密钥及 Free 计划确认；当前没有启动采集',lastCheckedAt:state.checkedAt||null,count:state.count||0},schedule:'每日一批；每 30 分钟检查运行结果',budget:'每天最多一批，45 条；Actor 单次费用上限 $0.03。免费额度与同账号其他任务共享，以 Apify 账单为准。'});
}
