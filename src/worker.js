import {parseQuery,collectPrices} from './pricing/service.js';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export default {
 async fetch(request,env){
  const url=new URL(request.url);
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
