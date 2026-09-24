import {radarSources,radarCheckedAt,radarQueries} from '../dist/data/radar-sources.js';

import {collectors,sourceEnabled,requestFor,extractRows} from './radar-adapters.js';
export function safeCollectionError(error){
 const message=String(error?.message||'');
 const http=message.match(/^Upstream HTTP (\d{3})$/);
 if(http)return '上游 HTTP '+http[1];
 if(/header/i.test(message))return '请求认证头格式无效';
 if(error?.name==='TimeoutError'||error?.name==='AbortError')return '上游请求超时';
 if(error instanceof SyntaxError)return '上游返回了非 JSON 数据';
 if(/Invalid .*response|Invalid dataset|Missing run ID/.test(message))return '上游响应结构不符';
 return '服务端请求异常（'+(['TypeError','RangeError'].includes(error?.name)?error.name:'未知类型')+'）';
}
const ITEMS='radar:items', stateKey=id=>'radar:'+id+':state', itemKey=id=>'radar:'+id+':items';
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
  const handle=row.author?.userName||row.user?.username||row.user?.screen_name;
  let url;try{url=new URL(row.url||row.tweetUrl||(handle&&row.id?`https://x.com/${handle}/status/${row.id}`:''));}catch{continue;}
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
 const map=new Map();
 for(const row of [...old,...rows]){
  if(!Number.isFinite(Date.parse(row.publishedAt))||now.getTime()-Date.parse(row.publishedAt)>30*86400000)continue;
  const prev=map.get(row.id),sources=[...new Set([...(prev?.sources||[prev?.source]),...(row.sources||[row.source])].filter(Boolean))];
  map.set(row.id,{...row,sources});
 }
 return [...map.values()].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,300);
}
async function read(db,key,fallback){const row=await db.prepare('SELECT value FROM app_config WHERE key=?').bind(key).first();return row?JSON.parse(row.value):fallback;}
async function write(db,key,value){await db.prepare('INSERT INTO app_config(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key,JSON.stringify(value)).run();}
async function fetchJson(url,init={}){
 const res=await fetch(url,{...init,redirect:'error',signal:AbortSignal.timeout(20000)});
 if(!res.ok)throw Error(`Upstream HTTP ${res.status}`);
 const reader=res.body.getReader();let size=0,chunks=[];
 try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>2000000)throw Error('Response too large');chunks.push(value);}}finally{await reader.cancel().catch(()=>{});}
 const bytes=new Uint8Array(size);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length;}return JSON.parse(new TextDecoder().decode(bytes));
}
async function saveRows(env,id,rows,state,now){
 const posts=normalizePosts(rows,id,now),old=await read(env.EVIDENCE_DB,itemKey(id),[]);
 await write(env.EVIDENCE_DB,itemKey(id),mergePosts(old,posts,now));
 await write(env.EVIDENCE_DB,stateKey(id),{...state,status:'ok',count:posts.length,rejected:rows.length-posts.length,checkedAt:now.toISOString(),message:posts.length?'已采集；内容仍需核验':'没有通过校验的相关帖子，未填充演示数据'});
}
async function finishRun(env,source,state,now){
 const headers={Authorization:`Bearer ${env.APIFY_TOKEN}`};
 const run=(await fetchJson(`https://api.apify.com/v2/actor-runs/${encodeURIComponent(state.runId)}`,{headers})).data;
 if(['READY','RUNNING','TIMING-OUT','ABORTING'].includes(run.status))return;
 if(run.status!=='SUCCEEDED'){await write(env.EVIDENCE_DB,stateKey(source.id),{...state,status:'error',message:'采集任务未成功',checkedAt:now.toISOString()});return;}
 const rows=await fetchJson(`https://api.apify.com/v2/datasets/${encodeURIComponent(run.defaultDatasetId)}/items?clean=true&limit=100&format=json`,{headers});
 await saveRows(env,source.id,extractRows(source.id,rows),state,now);
}
async function collectSource(env,source,now){
 if(!sourceEnabled(source,env))return;
 const db=env.EVIDENCE_DB;let state=await read(db,stateKey(source.id),{});
 try{
  if(state.status==='running'){await finishRun(env,source,state,now);return;}
  if(source.weekly&&now.getUTCDay()!==1)return;
  const day=now.toISOString().slice(0,10),baseLock=source.id==='apify'?'radar:day:'+day:`radar:${source.id}:day:${day}`;
  // A dated operator retry remains idempotent and counts against the monthly cap.
  const retry=env.RADAR_VALIDATION_RETRY===day?':validation-retry':'';
  const lock=baseLock+retry;
  const reserved=await db.prepare('INSERT OR IGNORE INTO app_config(key,value) VALUES(?,?)').bind(lock,now.toISOString()).run();if(!reserved.meta?.changes)return;
  if(source.limit){
   const budget=await db.prepare("INSERT INTO app_config(key,value) VALUES(?, '1') ON CONFLICT(key) DO UPDATE SET value=CAST(CAST(value AS INTEGER)+1 AS TEXT) WHERE CAST(value AS INTEGER) < ?").bind(`radar:${source.id}:month:${day.slice(0,7)}`,Number(env[source.limit])).run();
   if(!budget.meta?.changes){await write(db,stateKey(source.id),{status:'budget',checkedAt:now.toISOString(),message:'本月请求额度已用完，已暂停'});return;}
  }
  state={status:'starting',day,checkedAt:now.toISOString()};await write(db,stateKey(source.id),state);
  const {url,init}=requestFor(source,env,now),result=await fetchJson(url,init);
  if(source.actor){if(!result.data?.id)throw Error('Missing run ID');await write(db,stateKey(source.id),{...state,status:'running',runId:result.data.id,message:'采集中，下一次调度检查结果'});}
  else await saveRows(env,source.id,extractRows(source.id,result),state,now);
 }catch(error){await write(db,stateKey(source.id),{...state,status:'error',message:safeCollectionError(error)+'；请检查来源控制台，今日不重复启动',checkedAt:now.toISOString()});}
}
export async function collectRadar(env,now=new Date()){
 if(!env.EVIDENCE_DB)return;
 // Isolate each provider's state and daily reservation; failure does not trigger paid fallback.
 for(const source of collectors){try{await collectSource(env,source,now);}catch{/* One storage/provider failure must not block other sources. */}}
}
export async function radarApi(request,env){
 if(new URL(request.url).pathname==='/api/radar/ingest')return ingest(request,env);
 if(request.method!=='GET')return response({error:'仅支持 GET'},405);
 if(!env.EVIDENCE_DB)return response({error:'信息存储暂时不可用'},503);
 const states=await Promise.all(radarSources.map(async s=>{
  const state=await read(env.EVIDENCE_DB,stateKey(s.id),{}),collector=collectors.find(c=>c.id===s.id),enabled=collector?sourceEnabled(collector,env):Boolean(env.RADAR_INGEST_TOKEN);
  return {id:s.id,status:enabled?(state.status||'waiting'):'unconfigured',message:enabled?(state.message||'等待首次采集或推送'):'未启用或缺少密钥 / 请求额度配置',lastCheckedAt:state.checkedAt||null,count:state.count||0};
 }));
 const snapshots=await Promise.all([read(env.EVIDENCE_DB,ITEMS,[]),...radarSources.map(s=>read(env.EVIDENCE_DB,itemKey(s.id),[]))]);
 const items=snapshots.reduce((all,rows)=>mergePosts(all,rows),[]),active=states.filter(s=>s.status!=='unconfigured'),last=states.map(s=>s.lastCheckedAt).filter(Boolean).sort().at(-1)||null;
 return response({sources:radarSources,checkedAt:radarCheckedAt,items,collectors:states,collection:{status:active.length===1?active[0].status:active.length?'mixed':'unconfigured',message:`${active.length} 个来源已配置，${states.filter(s=>s.status==='ok').length} 个来源已有成功记录；${states.filter(s=>s.status==='error').length} 个异常`,lastCheckedAt:last,count:items.length},schedule:'每日采集；V2 每周一回补；开源采集器由本地推送',budget:'各来源独立启用、独立限制。刷新页面不调用外部爬虫，不自动切换到收费来源。'});
}
async function ingest(request,env){
 if(request.method!=='POST')return response({error:'仅支持 POST'},405);
 if(!env.RADAR_INGEST_TOKEN||!env.EVIDENCE_DB)return response({error:'推送未配置'},503);
 const incoming=request.headers.get('Authorization')||'';
 const digest=async s=>new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
 const [a,b]=await Promise.all([digest(incoming),digest('Bearer '+env.RADAR_INGEST_TOKEN)]);let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];if(diff)return response({error:'无效凭证'},401);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return response({error:'需要 JSON'},415);
 let payload;try{
  const reader=request.body?.getReader();if(!reader)throw Error();let size=0,parts=[];
  try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>500000)throw Error();parts.push(value);}}finally{await reader.cancel().catch(()=>{});}
  const bytes=new Uint8Array(size);let offset=0;for(const p of parts){bytes.set(p,offset);offset+=p.length;}payload=JSON.parse(new TextDecoder().decode(bytes));
 }catch{return response({error:'JSON 无效或超过 500 KB'},400);}
 if(!['twscrape','twikit'].includes(payload?.source)||!Array.isArray(payload.items)||payload.items.length>300)return response({error:'仅接受 twscrape / twikit，单次最多 300 条'},400);
 const now=new Date(),posts=normalizePosts(payload.items,payload.source,now);if(!posts.length)return response({error:'没有有效的近期 AI 帖子，现有记录未修改'},422);
 // Push is a per-source snapshot replacement, never overwrites another collector.
 await write(env.EVIDENCE_DB,itemKey(payload.source),posts);
 await write(env.EVIDENCE_DB,stateKey(payload.source),{status:'ok',count:posts.length,checkedAt:now.toISOString(),message:'已收到本地采集快照；内容仍需核验'});
 return response({accepted:posts.length,rejected:payload.items.length-posts.length});
}
