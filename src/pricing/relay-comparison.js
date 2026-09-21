import {sources} from './sources.js';
import {priceModels} from './models.js';
import {loadSource,collectPrices} from './service.js';
export const pilotSources=sources.slice(0,20);
export function selectedPilot(url){
 const ids=url.searchParams.get('sources')?.split(',')||pilotSources.map(s=>s.id);
 if(!ids.length||ids.length>20||new Set(ids).size!==ids.length||ids.some(id=>!pilotSources.some(s=>s.id===id)))throw Error('请选择首批 20 家中的渠道');
 return pilotSources.filter(s=>ids.includes(s.id));
}
export async function collectCatalog(selected,deps={}){
 let next=0;const results=new Array(selected.length);
 await Promise.all(Array.from({length:Math.min(4,selected.length)},async()=>{while(next<selected.length){const i=next++,s=selected[i];try{
  const e=await loadSource(s,deps),ids=[...new Set(e.payload.data.map(r=>s.adapter==='openrouter'?r.id:r.model_name).filter(id=>typeof id==='string'&&id.length<=200))];
  results[i]={id:s.id,name:s.name,url:s.url,status:e.stale?'stale':'ok',fetchedAt:e.fetchedAt,error:e.error,modelIds:ids,models:priceModels.filter(m=>m.aliases.some(a=>ids.includes(a))).map(m=>m.id)};
 }catch(e){results[i]={id:s.id,name:s.name,url:s.url,status:'error',error:e.message,modelIds:[],models:[]};}}}));
 return {checkedAt:new Date(deps.now??Date.now()).toISOString(),cacheSeconds:300,sources:results};
}
export function parseWorkload(url){
 const number=(k,d,min,max)=>{const raw=url.searchParams.get(k)??String(d),n=Number(raw);if(raw.trim()===''||!Number.isFinite(n)||n<min||n>max)throw Error('无效的 '+k);return n;};
 const conversations=number('quantity',1000,1,1e7),turns=number('turns',3,1,1000),inputTokens=number('inputTokens',1000,1,2e6),outputTokens=number('outputTokens',300,0,2e6);
 if(![conversations,turns,inputTokens,outputTokens].every(Number.isInteger))throw Error('请求量与 Token 数需为整数');
 return {conversations,turns,inputTokens,outputTokens,requests:conversations*turns,failure: number('failure',0,0,95),failedCharge:number('failedCharge',0,0,100)};
}
export function quoteBudget(q,w){
 if(q.stale||!['tokens','request'].includes(q.unit))return null;
 const valid=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
 if(q.unit==='tokens'&&(!valid(q.input)||!valid(q.output))||q.unit==='request'&&!valid(q.perRequest))return null;
 const base=w.requests*(q.unit==='tokens'?(w.inputTokens*q.input+w.outputTokens*q.output)/1e6:q.perRequest);
 const failureCost=base*(w.failure/100)/(1-w.failure/100)*(w.failedCharge/100);
 return {base,failureCost,total:base+failureCost,currency:q.currency,requests:w.requests,includes:'调用与预计失败扣费；充值手续费及其他费用在前台另加'};
}
export async function collectRelayCosts(url,deps={}){
 const selected=selectedPilot(url),id=url.searchParams.get('model'),model=priceModels.find(m=>m.id===id);
 if(!model)throw Error('请选择已匹配的具体模型版本');
 const workload=parseWorkload(url),result=await collectPrices({selected,model,inputTokens:workload.inputTokens},deps);
 return {...result,workload,sources:result.sources.map(s=>({...s,quotes:s.quotes.map(q=>({...q,budget:model.text?quoteBudget(q,workload):null}))}))};
}
