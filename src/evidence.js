import {experienceMeta} from '../dist/data/experience-meta.js';
import {priceCatalog} from '../dist/data/price-catalog.js';
const reply=(data,status=200,extra={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...extra}});
const hash=async s=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))).map(b=>b.toString(16).padStart(2,'0')).join('');
export function validateFeedback(body,now=new Date()){
 if(!body||typeof body!=='object')throw Error('反馈格式无效');
 const meta=experienceMeta[body.articleId];if(!meta||meta.version!==body.version)throw Error('文章版本已更新，请刷新后提交');
 if(!['correction','reproduced'].includes(body.kind))throw Error('反馈类型无效');
 const str=(key,min,max)=>{if(typeof body[key]!=='string'||body[key].trim().length<min||body[key].length>max)throw Error('请检查 '+key+' 字段');return body[key].trim();};
 const channelId=str('channelId',1,100),modelId=str('modelId',1,150);
 if(!meta.models.some(m=>m.id===modelId))throw Error('请选择本文关联的具体模型');
 if(![...meta.channels,...priceCatalog.sources.map(s=>s.id)].includes(channelId))throw Error('请选择已收录渠道');
 const scope=str('scope',2,500),note=str('note',body.kind==='correction'?10:2,2000);
 if(/\bsk-[A-Za-z0-9_-]{12,}|Bearer\s+\S{12,}/i.test(note+' '+scope))throw Error('请移除 API Key 或凭证后再提交');
 let testedAt=null,cost=null,currency=null;
 if(body.kind==='reproduced'){
  testedAt=str('testedAt',10,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(testedAt)||!Number.isFinite(Date.parse(testedAt))||new Date(testedAt).toISOString().slice(0,10)!==testedAt||testedAt>new Date(now.getTime()+14*3600000).toISOString().slice(0,10))throw Error('请填写有效的复现日期');
  if(body.cost!==''&&body.cost!==null&&body.cost!==undefined){cost=Number(body.cost);if(!Number.isFinite(cost)||cost<0||cost>1e7)throw Error('实际费用无效');currency=str('currency',3,10);if(!['USD','CNY','CREDIT'].includes(currency))throw Error('请选择费用币种');}
 }
 return {articleId:body.articleId,version:body.version,kind:body.kind,channelId,modelId,scope,note,testedAt,cost,currency};
}
async function boundedBody(request){const reader=request.body?.getReader();if(!reader)throw Error('缺少反馈内容');let size=0,parts=[];try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>8192)throw Error('反馈内容过长');parts.push(value);}}finally{await reader.cancel().catch(()=>{});}const bytes=new Uint8Array(size);let p=0;for(const chunk of parts){bytes.set(chunk,p);p+=chunk.length;}return JSON.parse(new TextDecoder().decode(bytes));}
export async function evidenceApi(request,env){
 const url=new URL(request.url),db=env.EVIDENCE_DB;
 if(!db)return reply({error:'反馈与档案存储暂时不可用，请稍后重试'},503);
 if(url.pathname==='/api/probes'){
  if(request.method!=='GET')return reply({error:'仅支持 GET'},405);
  const source=url.searchParams.get('source');if(source&&!priceCatalog.sources.some(s=>s.id===source))return reply({error:'未知渠道'},400);
  const rows=await db.prepare('SELECT payload FROM probe_runs '+(source?'WHERE source_id = ? ':'')+'ORDER BY started_at DESC LIMIT 100').bind(...(source?[source]:[])).all();
  return reply({runs:rows.results.map(r=>JSON.parse(r.payload)),note:'目录采样不代表模型推理测试；成功率仅适用于显示的样本。'});
 }
 if(url.pathname!=='/api/feedback')return null;
 if(request.method==='GET'){
  const id=url.searchParams.get('article'),meta=experienceMeta[id];if(!meta)return reply({error:'文章不存在'},404);
  const rows=await db.prepare("SELECT kind,COUNT(*) AS total FROM feedback WHERE article_id=? AND version=? AND status!='rejected' GROUP BY kind").bind(id,meta.version).all();
  return reply({articleId:id,version:meta.version,reproduced:rows.results.find(r=>r.kind==='reproduced')?.total||0,corrections:rows.results.find(r=>r.kind==='correction')?.total||0,verified:false});
 }
 if(request.method!=='POST')return reply({error:'仅支持 GET / POST'},405);
 if(request.headers.get('Origin')!==url.origin)return reply({error:'请从本站文章页面提交'},403);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return reply({error:'请使用 JSON 提交'},415);
 let value;try{value=validateFeedback(await boundedBody(request));}catch(e){return reply({error:e.message},400);}
 const now=new Date(),date=now.toISOString().slice(0,10);
 const saltRow=await db.prepare("SELECT value FROM app_config WHERE key='feedback_salt'").first();if(!saltRow)return reply({error:'反馈服务尚未初始化'},503);
 const ip=request.headers.get('CF-Connecting-IP')||'local',rateKey=await hash(saltRow.value+ip+date);
 const quota=await db.prepare('INSERT INTO feedback_rate(key,count,expires_at) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 WHERE count<10 RETURNING count').bind(rateKey,date).first();
 if(!quota)return reply({error:'今天提交较多，请明天再试'},429,{'Retry-After':'86400'});
 // Rotate daily network hashes; never retain raw IP addresses.
 await db.prepare('DELETE FROM feedback_rate WHERE expires_at < ?').bind(date).run();
 const candidate=request.headers.get('Cookie')?.match(/(?:^|;\s*)vb_feedback=([a-f0-9-]{36})(?:;|$)/)?.[1];
 const visitor=candidate||crypto.randomUUID(),visitorHash=await hash(saltRow.value+visitor);
 const id=crypto.randomUUID();
 const result=await db.prepare('INSERT OR IGNORE INTO feedback(id,article_id,version,kind,visitor_hash,model_id,channel_id,tested_at,scope,cost,currency,note,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,value.articleId,value.version,value.kind,visitorHash,value.modelId,value.channelId,value.testedAt,value.scope,value.cost,value.currency,value.note,now.toISOString()).run();
 const added=Boolean(result.meta.changes);
 return reply({accepted:added,duplicate:!added,message:added?'已保存到服务器。复现反馈属于用户自报；纠错进入待核对队列。':'此浏览器已提交过本版本的同类反馈，不重复计数。'},added?201:200,{'Set-Cookie':`vb_feedback=${visitor}; Path=/api/feedback; HttpOnly; SameSite=Strict; Secure; Max-Age=31536000`});
}
