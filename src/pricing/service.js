import {sources,FRESH_SECONDS,RETAIN_SECONDS,SCHEMA_VERSION} from './sources.js';
import {priceModels} from './models.js';
import {normalize} from './adapters.js';
const pending=new Map(),failures=new Map();
const MAX_BYTES=8*1024*1024;
async function readJSON(response){
 if(!response.ok)throw Error('来源返回 HTTP '+response.status);
 if(!response.headers.get('content-type')?.toLowerCase().includes('json'))throw Error('来源没有返回 JSON 价格目录');
 if(Number(response.headers.get('content-length'))>MAX_BYTES)throw Error('来源数据超过大小限制');
 const reader=response.body.getReader(),chunks=[];let size=0;
 try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>MAX_BYTES)throw Error('来源数据超过大小限制');chunks.push(value);}}
 finally{await reader.cancel().catch(()=>{});}
 const buffer=new Uint8Array(size);let offset=0;for(const value of chunks){buffer.set(value,offset);offset+=value.length;}
 return JSON.parse(new TextDecoder().decode(buffer));
}
export async function loadSource(source,{fetcher=fetch,cache,origin='https://vibebase.vip',now=Date.now()}={}){
 const key=new Request(origin+'/__price_cache/v'+SCHEMA_VERSION+'/'+source.id);
 let previous=null;
 try{const hit=await cache?.match(key);if(hit)previous=await hit.json();}catch{}
 const age=previous?(now-Date.parse(previous.fetchedAt))/1000:Infinity;
 if(previous&&age>=0&&age<FRESH_SECONDS)return {...previous,cached:true,stale:false};
 const fail=failures.get(source.id);
 if(fail&&now-fail.at<45000){
  if(previous&&age<RETAIN_SECONDS)return {...previous,cached:true,stale:true,error:fail.reason};
  throw Error(fail.reason);
 }
 if(pending.has(source.id))return pending.get(source.id);
 const job=(async()=>{
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
  try{
   const response=await fetcher(source.url,{headers:{Accept:'application/json','User-Agent':'VibeBase-PriceBot/1.0 (+https://vibebase.vip)'},signal:controller.signal,redirect:'manual'});
   const payload=await readJSON(response);
   if(!Array.isArray(payload?.data)||source.adapter==='newapi'&&payload.success!==true)throw Error('来源目录格式已变化或需要登录');
   const entry={payload,fetchedAt:new Date(now).toISOString()};
   if(cache)try{await cache.put(key,new Response(JSON.stringify(entry),{headers:{'Content-Type':'application/json','Cache-Control':'public, max-age='+RETAIN_SECONDS}}));}catch{}
   failures.delete(source.id);return {...entry,cached:false,stale:false};
  }catch(e){
   const reason=controller.signal.aborted?'获取价格超时':String(e.message||'获取失败').slice(0,180);
   failures.set(source.id,{at:now,reason});
   if(previous&&age>=0&&age<RETAIN_SECONDS)return {...previous,cached:true,stale:true,error:reason};
   throw Error(reason);
  }finally{clearTimeout(timer);pending.delete(source.id);}
 })();
 pending.set(source.id,job);return job;
}
export function parseQuery(url){
 const id=url.searchParams.get('model')||'sol56',model=priceModels.find(m=>m.id===id||m.aliases.includes(id));
 if(!model)throw Error('请选择已收录的具体模型版本');
 const raw=url.searchParams.get('inputTokens')??'4000';
 if(!/^\d+$/.test(raw)||Number(raw)<1||Number(raw)>2000000)throw Error('单次输入长度需在 1–2000000 Token');
 const requested=url.searchParams.get('sources')?.split(',')||sources.map(s=>s.id);
 if(requested.length>sources.length||requested.some(id=>!sources.some(s=>s.id===id)))throw Error('不支持的报价来源');
 return {model,inputTokens:Number(raw),selected:sources.filter(s=>requested.includes(s.id))};
}
export async function collectPrices(query,deps={}){
 const now=deps.now??Date.now(),results=new Array(query.selected.length);let next=0;
 async function consume(){while(next<query.selected.length){const index=next++,source=query.selected[index];try{
  const entry=await loadSource(source,{...deps,now});
  const parsed=normalize(entry.payload,source,query.model,{inputTokens:query.inputTokens,now:new Date(now)});
  results[index]={id:source.id,name:source.name,url:source.url,status:entry.stale?'stale':parsed.quotes.length?'ok':parsed.matched?'unsupported':'not_listed',fetchedAt:entry.fetchedAt,cached:entry.cached,error:entry.error,
   quotes:parsed.quotes.map(q=>({...q,fetchedAt:entry.fetchedAt,stale:entry.stale})),issues:parsed.issues.slice(0,100)};
 }catch(e){results[index]={id:source.id,name:source.name,url:source.url,status:'error',error:String(e.message).slice(0,180),quotes:[],issues:[]};}}}
 await Promise.all(Array.from({length:Math.min(4,query.selected.length)},consume));
 return {schemaVersion:SCHEMA_VERSION,model:{id:query.model.id,name:query.model.name,aliases:query.model.aliases},inputTokens:query.inputTokens,checkedAt:new Date(now).toISOString(),cacheSeconds:FRESH_SECONDS,sources:results};
}
// Test hook keeps request coalescing/backoff deterministic without a production control endpoint.
export function resetRuntimeState(){pending.clear();failures.clear();}

