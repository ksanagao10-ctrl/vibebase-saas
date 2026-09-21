import {writeFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {priceCatalog} from '../dist/data/price-catalog.js';
export function percentile(values,p){if(!values.length)return null;const sorted=[...values].sort((a,b)=>a-b);return Math.round(sorted[Math.max(0,Math.ceil(sorted.length*p)-1)]);}
export function summarize(samples){const good=samples.filter(s=>s.success),times=good.map(s=>s.ttftMs).filter(Number.isFinite),errors={};for(const s of samples)if(!s.success)errors[s.error]=(errors[s.error]||0)+1;return {requests:samples.length,successes:good.length,ttft:{samples:times.length,p50:percentile(times,.5),p95:percentile(times,.95)},errors};}
export async function readInference(response,start,now=()=>performance.now()){
 if(!response.ok)return {success:false,error:response.status===429?'rate_limited':response.status===401||response.status===403?'authentication':'http_'+response.status,ttftMs:null};
 if(!response.headers.get('content-type')?.includes('text/event-stream'))return {success:false,error:'not_streaming',ttftMs:null};
 let buffer='',text='',ttftMs=null,finished=false,done=false,usage=null,bytes=0;
 const reader=response.body.getReader(),decoder=new TextDecoder();
 const process=line=>{if(!line.startsWith('data:'))return;const raw=line.slice(5).trim();if(raw==='[DONE]'){done=true;return;}if(!raw)return;const data=JSON.parse(raw);if(data.error)throw Error('upstream_error');if(data.usage)usage=data.usage;const c=data.choices?.[0];if(typeof c?.delta?.content==='string'&&c.delta.content){if(ttftMs===null)ttftMs=now()-start;text+=c.delta.content;}if(c?.finish_reason==='stop')finished=true;};
 try{while(true){const next=await reader.read();if(next.done)break;bytes+=next.value.byteLength;if(bytes>262144)throw Error('response_too_large');buffer+=decoder.decode(next.value,{stream:true});let newline;while((newline=buffer.indexOf('\n'))>=0){process(buffer.slice(0,newline).trimEnd());buffer=buffer.slice(newline+1);}}buffer+=decoder.decode();if(buffer.trim())process(buffer.trim());}
 catch(e){return {success:false,error:e.name==='AbortError'?'timeout':e.message==='response_too_large'?'response_too_large':e.message==='upstream_error'?'upstream_error':'invalid_stream',ttftMs:null};}finally{await reader.cancel().catch(()=>{});}
 if(!finished||!done)return {success:false,error:'incomplete_stream',ttftMs:null};
 if(text.trim()!=='2')return {success:false,error:'unexpected_answer',ttftMs:null};
 return {success:true,error:null,ttftMs,usage:usage?{prompt_tokens:usage.prompt_tokens,completion_tokens:usage.completion_tokens}:null};
}
export function validateProbeOptions(args){
 const samples=Number(args.samples||3);if(!Number.isInteger(samples)||samples<1||samples>20)throw Error('samples must be an integer from 1 to 20');
 if(!['catalog','inference'].includes(args.mode||'catalog'))throw Error('mode must be catalog or inference');
 if(args.mode==='inference'){
  if(args.execute!=='true')throw Error('Inference requires --execute=true after budget authorization');
  if(!args.region||!args.model)throw Error('Inference requires explicit region and model');
  for(const key of ['max-estimated-usd','input-usd-per-million','output-usd-per-million'])if(args[key]===undefined||!Number.isFinite(Number(args[key]))||Number(args[key])<=0)throw Error('Explicit positive '+key+' is required');
  // Reserve 1000 input and 32 output tokens per request. A monetary estimate, not a provider-side spend cap.
  const reserve=samples*(1000*Number(args['input-usd-per-million'])+32*Number(args['output-usd-per-million']))/1e6;
  if(reserve>Number(args['max-estimated-usd']))throw Error('Estimated reservation exceeds authorized limit');
 }
 return samples;
}
async function main(){
 const args=Object.fromEntries(process.argv.slice(2).map(v=>{const [k,...rest]=v.replace(/^--/,'').split('=');return [k,rest.join('=')];}));
 const samples=validateProbeOptions(args),kind=args.mode||'catalog';
 const selected=(args.sources||'modelsell').split(',').map(id=>{const source=priceCatalog.sources.find(s=>s.id===id);if(!source)throw Error('Unknown source '+id);return source;});
 if(new Set(selected.map(s=>s.id)).size!==selected.length)throw Error('Duplicate sources');
 if(kind==='inference'&&selected.length!==1)throw Error('Use a separate key and invocation for each provider');
 if(kind==='inference'&&!process.env.VIBEBASE_PROBE_KEY)throw Error('Set VIBEBASE_PROBE_KEY locally; never pass it as a command-line argument');
 if(kind==='inference'&&!priceCatalog.models.some(m=>m.aliases.includes(args.model)))throw Error('Exact registered model ID required');
 const runs=[];
 for(const source of selected){
  const startedAt=new Date().toISOString(),observations=[];
  for(let i=0;i<samples;i++){
   const start=performance.now(),controller=new AbortController(),timer=setTimeout(()=>controller.abort(),kind==='catalog'?12000:30000);let sample;
   try{
    if(kind==='catalog'){
     const r=await fetch(source.url,{signal:controller.signal,redirect:'manual',headers:{Accept:'application/json','User-Agent':'VibeBase-Probe/1.0'}});
     if(!r.ok)sample={success:false,error:'http_'+r.status,ttftMs:null};else{
      const body=await r.text();if(body.length>8e6)throw Error('oversized');const json=JSON.parse(body);sample={success:Array.isArray(json.data)&&json.data.length>0&&(source.adapter!=='newapi'||json.success===true),error:'invalid_catalog',ttftMs:null};
     }
    }else{
     const endpoint=new URL('/v1/chat/completions',source.url);const r=await fetch(endpoint,{method:'POST',redirect:'manual',signal:controller.signal,headers:{'Content-Type':'application/json',Authorization:'Bearer '+process.env.VIBEBASE_PROBE_KEY},body:JSON.stringify({model:args.model,messages:[{role:'user',content:'Reply with exactly the numeral 2. Do not add other text.'}],max_tokens:32,stream:true,stream_options:{include_usage:true}})});sample=await readInference(r,start);
    }
   }catch{sample={success:false,error:controller.signal.aborted?'timeout':'network_or_parse',ttftMs:null};}finally{clearTimeout(timer);}
   observations.push({...sample,at:new Date().toISOString(),elapsedMs:Math.round(performance.now()-start)});
  }
  const stats=summarize(observations),usageComplete=observations.every(s=>s.success&&Number.isFinite(s.usage?.prompt_tokens)&&Number.isFinite(s.usage?.completion_tokens));
  const estimatedUsd=kind==='inference'&&usageComplete?observations.reduce((sum,s)=>sum+(s.usage.prompt_tokens*Number(args['input-usd-per-million'])+s.usage.completion_tokens*Number(args['output-usd-per-million']))/1e6,0):null;
  runs.push({id:crypto.randomUUID(),sourceId:source.id,kind,model:kind==='inference'?args.model:null,region:args.region||'地区未提供',environment:args.environment||'运营者本机；经网络代理访问',startedAt,endedAt:new Date().toISOString(),...stats,estimatedUsd,billing:{amount:null,currency:null,evidence:null},observations});
  console.log(source.name+': '+stats.successes+'/'+stats.requests+' '+kind+' samples');
 }
 if(!args.out)throw Error('Specify --out=path to preserve the evidence');writeFileSync(args.out,JSON.stringify(runs,null,2)+'\n');
 if(args.sql){const quote=s=>"'"+String(s).replaceAll("'","''")+"'";writeFileSync(args.sql,runs.map(r=>'INSERT INTO probe_runs(id,source_id,kind,started_at,payload) VALUES ('+[r.id,r.sourceId,r.kind,r.startedAt,JSON.stringify(r)].map(quote).join(',')+');').join('\n')+'\n');}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(e=>{console.error(e.message);process.exitCode=1;});
