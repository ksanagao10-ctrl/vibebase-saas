import {selectedPilot,collectCatalog,collectRelayCosts} from './pricing/relay-comparison.js';
import {evidenceApi} from './evidence.js';
import {parseQuery,collectPrices} from './pricing/service.js';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(['/api/probes','/api/feedback'].includes(url.pathname)){try{return await evidenceApi(request,env);}catch{return json({error:'存储服务暂时不可用，请稍后重试'},503);}}
  if(['/api/relay-catalog','/api/relay-costs'].includes(url.pathname)){
   if(request.method!=='GET')return json({error:'仅支持 GET'},405);
   try{const deps={cache:caches.default,origin:url.origin};return json(url.pathname==='/api/relay-catalog'?await collectCatalog(selectedPilot(url),deps):await collectRelayCosts(url,deps));}
   catch(e){return json({error:e.message||'获取失败'},400);}
  }
  if(url.pathname==='/api/prices'){
   if(request.method!=='GET')return json({error:'仅支持 GET'},405);
   let query;try{query=parseQuery(url);}catch(e){return json({error:e.message},400);}
   try{return json(await collectPrices(query,{cache:caches.default,origin:url.origin}));}
   catch{return json({error:'报价服务暂时不可用，请稍后重试'},503);}
  }
  if(url.pathname.startsWith('/api/'))return json({error:'接口不存在'},404);
  return env.ASSETS.fetch(request);
 }
};
