import {activeReferral} from './data/affiliate-links.js';
import { discovery as d } from './data/discovery.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(route,label,cls='text-link')=>'<a class="'+cls+'" href="#'+esc(route)+'" data-route="'+esc(route)+'">'+esc(label)+'</a>';
const sourceLink=(url,label='查看来源 ↗')=>'<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+'</a>';
const model=id=>d.models.find(m=>m.id===id);
const task=id=>d.tasks.find(t=>t.id===id);
const header=(eyebrow,title,desc)=>'<div class="discovery-heading"><span class="eyebrow">'+esc(eyebrow)+'</span><h1>'+esc(title)+'</h1><p>'+esc(desc)+'</p></div>';
const section=(title,desc,route,body)=>'<section class="section discovery-section"><div class="section-head"><div><h2>'+esc(title)+'</h2><p>'+esc(desc)+'</p></div>'+link(route,'查看全部 →')+'</div>'+body+'</section>';
export const quoteCost=(q,inputM,outputM)=>q.input*inputM+q.output*outputM;
export const offerExpired=(o,now=new Date())=>Boolean(o.endsAt&&now.toISOString().slice(0,10)>o.endsAt);
export const activeOffers=(now=new Date())=>d.offers.filter(o=>!offerExpired(o,now));
const money=n=>'$'+Number(n.toFixed(6)).toLocaleString('en-US',{maximumFractionDigits:6});
export function sortedQuotes(id,inputM=1,outputM=.2){return d.quotes.filter(q=>q.model===id).sort((a,b)=>quoteCost(a,inputM,outputM)-quoteCost(b,inputM,outputM)||a.channel.localeCompare(b.channel));}
function modelCard(m){return '<article class="discovery-card"><div class="discovery-card-top"><span class="eyebrow">MODEL SHORTLIST</span><span class="tag">编辑候选</span></div><h3>'+esc(m.name)+'</h3><p>'+esc(m.desc)+'</p><div class="tag-row">'+m.tasks.map(t=>'<span class="tag">'+esc(task(t).name)+'</span>').join('')+'</div><div class="discovery-card-foot">'+link('model/'+m.id,'查看模型与渠道 →')+'</div></article>';}
function offerCard(o){
 const relay=o.scope==='relay',ref=relay?activeReferral({id:'relay-'+o.relayRank}):null;
 return '<article class="discovery-card"><div class="discovery-card-top"><span class="tag">'+esc(o.category)+'</span><span class="mini-meta">'+(offerExpired(o)?'已结束':o.endsAt?'至 '+esc(o.endsAt):'截止未公布')+'</span></div><h3>'+esc(o.title)+'</h3><p>'+esc(o.desc)+'</p>'+(relay?'<p class="mini-meta">'+esc(o.modelScope)+'</p>':'')+'<details><summary>领取条件与适用范围</summary><p>'+esc(o.terms)+'</p></details>'+(relay?'<p class="mini-meta">'+esc(o.checkedAt)+' · '+esc(o.evidence)+'</p>':'')+'<div class="discovery-card-foot">'+sourceLink(o.source,relay?'查看站方领取说明 ↗':'查看官方规则 ↗')+(ref?' · '+sourceLink(ref,'前往领取（推广链接）↗'):'')+'</div></article>';
}
function newsCard(n){return '<article class="discovery-card"><div class="discovery-card-top"><span class="tag">'+esc(n.label)+'</span><time>'+esc(n.date)+'</time></div><h3>'+esc(n.title)+'</h3><p>'+esc(n.desc)+'</p><div class="discovery-card-foot">'+sourceLink(n.source,'阅读官方公告 ↗')+'</div></article>';}
function articleCard(a,featured=false){return '<article class="story-card '+(featured?'story-featured':'')+'"><span class="eyebrow">'+esc(a.category)+' · '+esc(a.difficulty)+'</span><h3>'+link('read/'+a.id,a.title,'story-title')+'</h3><p>'+esc(a.summary)+'</p><div class="story-meta"><span>'+esc(a.author)+'</span><span>约 '+a.minutes+' 分钟 · '+a.date+'</span></div>'+link('read/'+a.id,'阅读全文 ↗')+'</article>';}
function industryCard(i){return '<a class="industry-card" href="#industry/'+i.id+'" data-route="industry/'+i.id+'"><span class="eyebrow">'+esc(i.tag)+'</span><h3>'+esc(i.name)+' <span>↗</span></h3><p>'+esc(i.desc)+'</p></a>';}
function quoteTable(id,inputs=1,outputs=.2,compact=false){
 const rows=sortedQuotes(id,inputs,outputs);
 return '<div class="price-table-wrap"><table class="price-table"><caption>'+esc(model(id)?.name||id)+' · USD / 百万 Token · '+d.checkedAt+' 核验</caption><thead><tr><th scope="col">渠道</th><th scope="col">输入</th><th scope="col">输出</th><th scope="col">估算费用</th><th scope="col">下一步</th></tr></thead><tbody>'+rows.map(q=>'<tr><th scope="row">'+esc(q.channel)+'</th><td>'+money(q.input)+'</td><td>'+money(q.output)+'</td><td class="quote-total" data-quote-id="'+q.id+'">'+money(quoteCost(q,inputs,outputs))+'</td><td>'+(compact?link('boards/price/'+id,'比较 →'): '<button class="small-action" data-estimate="'+q.id+'">带入计算器</button> '+sourceLink(q.source,'来源 ↗'))+'</td></tr>').join('')+'</tbody></table></div>';
}


export function freeOffers(group='all',now=new Date()){
 return activeOffers(now).filter(o=>o.type==='free'&&(group==='all'||(group==='relay'?o.scope==='relay':group==='other'?o.scope!=='relay':o.scope==='relay'&&o.benefitKind===group)));
}
function trialBoard(group='all',compact=false){
 const rows=freeOffers(group);

 const review=d.relayFreeReview;
 const nav=tabs([['all','全部试用与福利'],['relay','中转站 API 试用'],['trial','注册试用'],['conditional','条件领取'],['other','官方与聚合平台']],group,'boards/trials/');
 const intro='<div class="notice">免费模型与试用余额不同。本次中转站条目均为有限试用额度，不代表模型长期零价。按领取条件展示，不按站内余额面值排名。</div>';
 const block=(title,items)=>'<section class="section"><div class="section-head"><h2>'+title+' · '+items.length+'</h2></div><div class="discovery-grid two">'+items.map(offerCard).join('')+'</div></section>';
 let body=group==='all'?block('中转站免费 API 试用',rows.filter(o=>o.scope==='relay'))+block('官方与聚合平台免费资源',rows.filter(o=>o.scope!=='relay')):block(group==='other'?'官方与聚合平台免费资源':'中转站免费 API 试用',rows);
 const audit='<details class="notice"><summary>核查范围与未入榜说明</summary><p>目录 '+review.catalogCount+' 条，关键词筛出 '+review.leadsCount+' 条线索，确认 '+review.confirmedCount+' 家站方试用说明。'+esc(review.method)+'</p>'+review.pending.map(p=>'<p><strong>'+esc(p.name)+'</strong>：'+esc(p.reason)+' '+sourceLink(p.source,'站方页面 ↗')+'</p>').join('')+'</details>';
 return nav+intro+body+audit;
}

const freeCaps=[['all','全部用途'],['text','文本对话'],['vision','识图 / OCR'],['image','生图'],['audio','音频'],['embedding','向量检索'],['rerank','重排'],['tools','工具调用'],['reasoning','推理'],['safety','安全检测']];
export function rankedFreeModels(platform='all',cap='all',query='',sort='name'){
 const q=query.trim().toLowerCase();
 return d.freeModels.filter(m=>!offerExpired(m)&&(platform==='all'||m.platform===platform)&&(cap==='all'||m.capabilities.includes(cap))&&(!q||(m.name+' '+m.modelId+' '+m.platform+' '+d.freeModelPlatforms.find(p=>p.id===m.platform)?.name).toLowerCase().includes(q))).sort((a,b)=>(sort==='context'?(b.context||0)-(a.context||0):0)||a.name.localeCompare(b.name)||a.platform.localeCompare(b.platform));
}
function freeModelCard(m){
 const platform=d.freeModelPlatforms.find(p=>p.id===m.platform);
 return '<article class="discovery-card free-model-card"><div class="discovery-card-top"><span class="eyebrow">'+esc(platform.name)+'</span><span class="tag">'+(m.freeType==='zero'?'模型零价':'免费计划额度')+'</span></div><h3>'+esc(m.name)+'</h3><p class="free-model-id">'+esc(m.modelId)+'</p>'+(m.availability?'<p><strong>'+esc(m.availability)+'</strong></p>':'')+(m.groupNames?'<p class="mini-meta">免费分组：'+esc(m.groupNames.join(' / '))+'</p>':'')+(m.endsAt?'<p class="mini-meta">目录截止：'+esc(m.endsAt)+'</p>':'')+'<div class="tag-row">'+m.capabilities.map(c=>'<span class="tag">'+esc(freeCaps.find(x=>x[0]===c)?.[1]||c)+'</span>').join('')+'</div><p>上下文：'+(m.context?m.context.toLocaleString('en-US')+' tokens':'当前来源未核实')+'</p>'+(m.inputModalities?'<p class="mini-meta">输入：'+esc(m.inputModalities.join(' / '))+' → 输出：'+esc(m.outputModalities.join(' / '))+'</p>':'')+'<details><summary>免费条件与调用限制</summary><p>'+esc(m.limits)+'</p></details><p class="mini-meta">'+esc(m.checkedAt)+' · 公开目录 / 价格已核验，未实测调用</p><div class="discovery-card-foot">'+sourceLink(m.url,'查看模型入口 ↗')+' · '+sourceLink(m.source,'价格证据 ↗')+'</div></article>';
}
function freeBoard(platform='all',compact=false,cap='all',query='',sort='name',pageIndex=1){
 if(platform==='relay'||platform==='other')platform='all';
 if(['trial','conditional'].includes(platform))return trialBoard(platform);
 const rows=rankedFreeModels(platform,cap,query,sort);
 const pages=Math.max(1,Math.ceil(rows.length/24)),currentPage=Math.max(1,Math.min(pages,Number(pageIndex)||1)),visibleRows=rows.slice((currentPage-1)*24,currentPage*24);
 if(compact)return '<p>按平台与具体模型整理，已核验 '+rankedFreeModels().length+' 个免费调用条目。</p><div class="discovery-grid three">'+rankedFreeModels('openrouter').slice(0,6).map(freeModelCard).join('')+'</div>'+link('boards/free','查看全部免费模型 →');
 const path=(p,c)=>'boards/free/'+p+'/'+c+'/'+encodeURIComponent(query)+'/'+sort;
 const platforms=tabs([['all','全部平台 · '+rankedFreeModels().length],...d.freeModelPlatforms.map(p=>[p.id,p.name+' · '+rankedFreeModels(p.id).length])],platform,'boards/free/');
 const caps='<nav class="discovery-tabs" aria-label="免费模型用途">'+freeCaps.map(([c,label])=>'<a href="#'+esc(path(platform,c))+'" data-route="'+esc(path(platform,c))+'" '+(c===cap?'aria-current="page"':'')+'>'+esc(label)+'</a>').join('')+'</nav>';
 const form='<form id="freeModelSearch" class="hero-search" data-platform="'+esc(platform)+'" data-cap="'+esc(cap)+'"><input id="freeModelQuery" aria-label="搜索免费模型" placeholder="搜索模型名称或完整 ID" value="'+esc(query)+'"><button>搜索</button></form><div class="price-controls"><label>排序<select id="freeModelSort"><option value="name" '+(sort==='name'?'selected':'')+'>模型名称</option><option value="context" '+(sort==='context'?'selected':'')+'>上下文从大到小</option></select></label></div>';
 const pagination='<nav class="discovery-tabs" aria-label="免费模型分页">'+(currentPage>1?link(path(platform,cap)+'/'+(currentPage-1),'← 上一页'):'')+'<span>第 '+currentPage+' / '+pages+' 页</span>'+(currentPage<pages?link(path(platform,cap)+'/'+(currentPage+1),'下一页 →'):'')+'</nav>';
 const policies=d.freeModelPlatforms.filter(p=>platform==='all'||p.id===platform).map(p=>'<p><strong>'+esc(p.name)+'</strong>：'+esc(p.coverage)+' '+sourceLink(p.rules,'免费规则 ↗')+'</p>').join('');
 const audit='<details class="notice"><summary>核查范围与待核实平台</summary><p>'+esc(d.freeModelAudit.scope)+'</p>'+d.freeModelAudit.pending.map(p=>'<p>'+sourceLink(p.url,p.name)+'：'+esc(p.reason)+'</p>').join('')+'</details>';
 return '<h2>免费模型榜</h2><p>每条对应一个平台上的具体模型。零价模型与免费计划额度分别标注；注册赠额请看 '+link('boards/trials/relay','API 试用区')+'。</p>'+platforms+caps+form+'<p role="status">找到 '+rows.length+' 个平台 × 模型条目 · '+(sort==='context'?'按公开上下文长度排序，未知值置后':'按模型名称排序')+'，不代表质量排名。</p><div class="discovery-grid three">'+(rows.length?visibleRows.map(freeModelCard).join(''):'<p class="empty">没有符合条件的已核验模型，请切换平台或用途。</p>')+'</div>'+pagination+'<details class="notice"><summary>各平台收录范围与免费规则</summary>'+policies+'<p>同一模型在不同平台分别计数。零价不代表无限量或永久可用。只收录明确模型 ID，不将自动路由、开源下载、网页免费聊天或注册赠额作为免费模型。</p></details>'+audit;
}

export const boardItems=[['price','同模型比价'],['free','免费模型'],['trials','API 试用'],['text','生文成本'],['code','编程成本'],['image','生图成本'],['video','视频成本'],['audio','配音成本'],['knowledge','知识库成本'],['picks','任务候选']];
export function taskQuotes(id){
 if(['text','code'].includes(id))return d.models.filter(m=>m.tasks.includes(id)).map(m=>{const q=sortedQuotes(m.id)[0];return q?{...q,model:m.id,cost:quoteCost(q,1,.2),spec:'100 万输入 + 20 万输出 Token',unit:'组'}:null}).filter(Boolean).sort((a,b)=>a.cost-b.cost||a.model.localeCompare(b.model));
 return d.mediaQuotes.filter(q=>q.task===id).sort((a,b)=>a.cost-b.cost||a.model.localeCompare(b.model));
}
function rankedTable(rows){
 return '<div class="price-table-wrap"><table class="price-table"><caption>USD · '+rows.length+' 个样本 · '+d.checkedAt+' 来源核验</caption><thead><tr><th>费用序位</th><th>模型 / 渠道</th><th>固定规格</th><th>估算费用</th><th>计费说明与证据</th></tr></thead><tbody>'+rows.map((q,i)=>'<tr><td>'+ (rows.findIndex(x=>x.cost===q.cost)+1)+'</td><th scope="row">'+link('model/'+q.model,model(q.model).name)+'<div class="mini-meta">'+esc(q.channel)+'</div></th><td>'+esc(q.spec)+'</td><td>'+money(q.cost)+' / '+esc(q.unit)+'</td><td><p>'+esc(q.note)+'</p>'+sourceLink(q.source)+'<div class="mini-meta">'+esc(q.checkedAt)+'</div></td></tr>').join('')+'</tbody></table></div>';
}
function taskBoard(id){
 const title={text:'生文成本榜',code:'编程成本榜',image:'生图输出成本榜',video:'视频生成成本榜',audio:'配音成本榜',knowledge:'知识库向量化成本榜'}[id];
 const context={text:'只比较固定 Token 用量；各模型分词与回答长度可能不同。',code:'编程候选按文本费用排序，不代表修复率、工具能力或代码质量。',image:'固定 1024×1024 文生图。Gemini 行只计图像输出费，输入与文本输出另计；不是完整账单排名。',video:'固定 720p、8 秒、含音频。不同型号的生成质量和功能仍需另行验证。',audio:'固定文本与音频 Token 用量，不将 Token 换成未经验证的分钟数。',knowledge:'只比较标准文本向量化付费价，不抵扣试用额度；不同分词器、维度与检索质量需另评。'}[id];
 return '<section class="board-panel"><h2>'+title+'</h2><p>'+context+'</p>'+rankedTable(taskQuotes(id))+'<p class="mini-meta">费用升序、同价并列，仅覆盖已收录样本。来源报价已核对，未进行付费推理或质量实测。</p></section>';
}

function boardPreview(tab='price'){
 if(d.tasks.some(t=>t.id===tab))return taskBoard(tab);
 if(tab==='free')return freeBoard('all',true);
 if(tab==='picks')return '<div class="discovery-grid three">'+d.models.slice(0,3).map(modelCard).join('')+'</div>';
 return quoteTable('flash',1,.2,true)+'<p class="mini-meta">同模型标准文本报价；聚合渠道为目录起价。按输入 100 万、输出 20 万 Token 估算；同价不分高低，附加费用另计。</p>';
}
export function homeDiscovery(){
 return section('先选任务，再选模型','从你的实际需求出发，找到模型、接入方式和上手路径。','models','<div class="task-grid">'+d.tasks.map(t=>'<a href="#models/'+t.id+'" data-route="models/'+t.id+'" class="task-card"><span class="task-symbol" aria-hidden="true">'+esc(t.icon)+'</span><h3>'+esc(t.name)+'</h3><p>'+esc(t.desc)+'</p><span class="task-arrow" aria-hidden="true">↗</span></a>').join('')+'</div>')+
 section('榜单与选型','透明的价格样本，清楚的筛选条件。质量榜待统一实测后开放。','boards/price','<div class="board-panel"><div class="discovery-tabs" role="group" aria-label="首页榜单">' +boardItems.map(([id,label])=>'<button data-board-tab="'+id+'" aria-pressed="'+(id==='price')+'">'+label+'</button>').join('')+'</div><div id="home-board-content">'+boardPreview()+'</div></div>')+
 section('免费与限时福利','先看资格、范围和有效期，再决定是否领取。','offers','<div class="discovery-grid four">'+activeOffers().slice(0,4).map(offerCard).join('')+'</div>')+
 section('模型动态与预告','保留官方来源与事件日期，区分预览、上线和生命周期变化。','news','<div class="discovery-grid three">'+d.news.map(newsCard).join('')+'</div>')+
 section('你的行业，怎样用 AI','从具体交付物出发，把模型、API 和教程连成方案。','industries','<div class="discovery-grid four">'+d.industries.map(industryCard).join('')+'</div>')+
 section('从选择，到第一次成功调用','接入、对比和预算，继续使用你熟悉的工具。','apps','<div class="tool-links">'+link('explore','01 / 找 API 平台','tool-link')+link('compare','02 / 对比供应商','tool-link')+link('calculator','03 / 估算调用成本','tool-link')+link('apps','04 / 匹配应用','tool-link')+'</div>')+
 '<section class="section covibe-home"><div class="section-head"><div><span class="eyebrow">LEARN · BUILD · SHARE</span><h2 class="covibe-wordmark">CoVibe<span>一起，把 AI 用起来。</span></h2><p>选模型、找限免、选 API。把经验变成下一次更好的选择。</p></div>'+link('covibe','进入 CoVibe →')+'</div><div class="story-layout">'+articleCard(d.articles[0],true)+'<div class="story-stack">'+d.articles.slice(1,4).map(a=>articleCard(a)).join('')+'</div></div></section>';
}
function tabs(items,current,prefix){return '<div class="discovery-tabs" aria-label="分类筛选">'+items.map(([id,label])=>'<a href="#'+prefix+id+'" data-route="'+prefix+id+'" '+(id===current?'aria-current="page"':'')+'>'+esc(label)+'</a>').join('')+'</div>';}
function modelPage(m){
 const quotes=d.quotes.filter(q=>q.model===m.id);
 return header('MODEL GUIDE',m.name,m.desc)+'<p class="model-id">模型 ID：'+esc(m.modelId)+'</p>'+'<div class="tag-row">'+m.tasks.map(t=>link('models/'+t,task(t).name,'tag')).join('')+'</div><div class="notice">编辑候选，不是质量排名。能力按来源资料整理；渠道实际功能仍需接入验证。资料核验 '+d.checkedAt+' · '+sourceLink(m.source)+'</div>'+
 '<section class="section"><div class="section-head"><h2>报价与接入</h2>'+link('boards/'+(d.mediaQuotes.find(q=>q.model===m.id)?.task||'price/'+m.id),'查看比价 →')+'</div>'+(quotes.length?quoteTable(m.id):d.mediaQuotes.some(q=>q.model===m.id)?rankedTable(d.mediaQuotes.filter(q=>q.model===m.id)):'<div class="empty"><b>标准化报价待补齐</b>该模态还需对齐尺寸、时长等规格。'+sourceLink(m.source,'查看官方规格 ↗')+'</div>')+(m.provider?'<button class="soft-btn" data-discover-provider="'+m.provider+'">查看接入平台</button>':sourceLink(m.source,'查看接入与计费说明 ↗'))+'</section>'+
 section('相关教程','先理解工作流，再开始调用。','covibe','<div class="discovery-grid two">'+d.articles.filter(a=>a.models.includes(m.id)||a.tasks.some(t=>m.tasks.includes(t))).slice(0,2).map(a=>articleCard(a)).join('')+'</div>');
}
export function searchDiscovery(query,providers=[]){
 const q=query.trim().toLowerCase();
 return {models:q?d.models.filter(m=>(m.name+' '+m.desc+' '+m.tasks.map(t=>task(t).name).join(' ')).toLowerCase().includes(q)):[],
 providers:q?providers.filter(p=>(p.name+' '+p.desc).toLowerCase().includes(q)).slice(0,12):[],
 articles:q?d.articles.filter(a=>(a.title+' '+a.summary+' '+a.category).toLowerCase().includes(q)):[]};
}
export function renderDiscovery(route,providers=[]){
 const [page,arg,value,freeCap,freeQuery,freeSort,freePage]=route.split('/');
 let body='';
 if(page==='models'){
 const current=arg||'all';
 body=header('MODEL DISCOVERY','按任务找到模型','候选按编辑顺序展示，不代表实测质量排名。')+tabs([['all','全部'],...d.tasks.map(t=>[t.id,t.name])],current,'models/')+'<div class="discovery-grid three">'+d.models.filter(m=>current==='all'||m.tasks.includes(current)).map(modelCard).join('')+'</div>';
 }else if(page==='model'){body=model(arg)?modelPage(model(arg)):header('NOT FOUND','模型未收录','请返回模型列表。')+link('models','查看全部模型');}
 else if(page==='boards'){
 const kind=arg||'price',id=model(value)?value:'flash';
 body=header('COMPARE WITH CONTEXT','榜单与选型','价格、免费条件和任务候选分别看。排名仅覆盖已收录样本，不代表全网最低。')+tabs(boardItems,kind,'boards/');
 if(d.tasks.some(t=>t.id===kind))body+=taskBoard(kind);
 else if(kind==='free')body+=freeBoard(value||'all',false,freeCap||'all',decodeSafe(freeQuery||''),freeSort==='context'?'context':'name',freePage);
 else if(kind==='trials')body+=trialBoard(value||'all');
 else if(kind==='picks')body+='<div class="discovery-grid three">'+d.models.map(modelCard).join('')+'</div>';
 else body+='<div class="board-panel"><div class="price-controls"><label>选择同一模型<select id="priceModel">'+d.models.filter(m=>m.id===id||d.quotes.some(q=>q.model===m.id)).map(m=>'<option value="'+m.id+'" '+(m.id===id?'selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select></label><label>输入量（百万 Token）<input id="priceInput" type="number" min="0" max="1000000" step="0.1" value="1"></label><label>输出量（百万 Token）<input id="priceOutput" type="number" min="0" max="1000000" step="0.1" value="0.2"></label></div><div id="priceResults">'+(d.quotes.some(q=>q.model===id)?quoteTable(id):'<div class="empty"><b>暂无可比报价</b>正在补齐同规格数据，暂不生成排名。'+sourceLink(model(id).source,'查看模型规格 ↗')+'</div>')+'</div><p class="mini-meta">按估算文本费用升序排列。同价并列；渠道费用可能不同。USD，不换算人民币。此处缓存命中按 0 计算。</p>'+d.quotes.filter(q=>q.model===id).map(q=>'<p class="mini-meta">'+esc(q.channel)+'：'+esc(q.note)+'</p>').join('')+'</div>';
 }else if(page==='offers'){
 const kind=arg||'all';body=header('FREE & LIMITED','免费与限时福利','免费、付费促销与邀请奖励分开展示。有效期以官方规则为准。')+tabs([['all','有效活动'],['free','免费'],['promo','付费优惠'],['reward','邀请奖励'],['expired','已结束']],kind,'offers/');
 const rows=d.offers.filter(o=>kind==='expired'?offerExpired(o):!offerExpired(o)&&(kind==='all'||o.type===kind));
 body+=rows.length?'<div class="discovery-grid two">'+rows.map(offerCard).join('')+'</div>':'<div class="empty"><b>这个分类暂时没有活动</b>可以查看其他分类。</div>';
 }else if(page==='news'){
 const kind=arg||'all';body=header('MODEL RADAR','模型动态与预告','核验日期 '+d.checkedAt+'。信息快照，不是自动更新的实时新闻流。')+tabs([['all','全部'],['live','已上线'],['preview','预览'],['upcoming','预告']],kind,'news/');
 const rows=d.news.filter(n=>kind==='all'||n.status===kind);
 body+='<div class="discovery-grid three">'+rows.map(newsCard).join('')+'</div>';
 }else if(page==='industries'){body=header('BUILT FOR YOUR WORK','按行业找到使用方案','这是工作流建议，不代表模型厂商对特定行业的认证。')+'<div class="discovery-grid two">'+d.industries.map(industryCard).join('')+'</div>';}
 else if(page==='industry'){
 const i=d.industries.find(x=>x.id===arg);
 body=i?header('INDUSTRY PLAYBOOK',i.name,i.desc)+'<div class="industry-steps">'+i.steps.map(([title,desc,id],n)=>'<article class="discovery-card"><span class="step-number">0'+(n+1)+'</span><h2>'+esc(title)+'</h2><p>'+esc(desc)+'</p>'+link('model/'+id,model(id).name+' →')+'</article>').join('')+'</div><div class="notice">'+esc(i.budget)+'</div><div class="tool-links">'+link('calculator','估算文本成本','tool-link')+link('apps','选择接入工具','tool-link')+link('read/'+i.article,'阅读配套教程','tool-link')+'</div>':header('NOT FOUND','方案未收录','请返回行业列表。')+link('industries','行业方案');
 }else if(page==='covibe'){
 const cat=arg?decodeSafe(arg):'全部';body=header('LEARN · BUILD · SHARE','CoVibe','一起选好模型，把 AI 真正用起来。')+tabs(['全部',...new Set(d.articles.map(a=>a.category))].map(x=>[encodeURIComponent(x),x]),encodeURIComponent(cat),'covibe/')+'<div class="discovery-grid two">'+d.articles.filter(a=>cat==='全部'||a.category===cat).map(a=>articleCard(a)).join('')+'</div>';
 }else if(page==='read'){
 const a=d.articles.find(x=>x.id===arg);
 body=a?'<article class="reading-page">'+link('covibe','← 返回 CoVibe')+header(a.category,a.title,a.summary)+'<div class="reading-meta">'+esc(a.author)+' · '+a.date+' 更新 · '+a.difficulty+' · 约 '+a.minutes+' 分钟 <button class="small-action" id="shareArticle">复制文章链接</button><span id="shareStatus" role="status"></span></div><p class="mini-meta">'+esc(a.evidence)+'</p><nav class="reading-toc" aria-label="文章目录">'+a.sections.map(([h],i)=>'<button data-reading-section="'+i+'">'+esc(h)+'</button>').join('')+'</nav>'+a.sections.map(([h,p],i)=>'<section id="reading-'+i+'" class="reading-section"><h2>'+esc(h)+'</h2><p>'+esc(p)+'</p></section>').join('')+'<section class="reading-section"><h2>参考资料</h2><ul>'+a.sources.map(([name,url])=>'<li>'+sourceLink(url,name)+'</li>').join('')+'</ul></section><section class="reading-section"><h2>继续探索</h2><div class="tool-links">'+a.models.map(id=>link('model/'+id,model(id).name,'tool-link')).join('')+[...new Set(a.models.map(id=>model(id).provider).filter(Boolean))].map(id=>'<button class="tool-link" data-discover-provider="'+id+'">'+(id==='official-gemini'?'Google 官方接入':'OpenRouter 接入')+' →</button>').join('')+'</div>'+link('covibe','阅读更多经验与教程 →')+'</section></article>':header('NOT FOUND','文章未找到','请返回 CoVibe 选择文章。')+link('covibe','返回 CoVibe');
 }else if(page==='search'){
 const q=decodeSafe(arg||''),results=searchDiscovery(q,providers);
 body=header('ONE SEARCH','搜索模型、API 与教程',q?'搜索「'+q+'」':'输入关键词开始探索。')+'<form id="discoverySearch" class="hero-search"><input aria-label="搜索关键词" id="discoverySearchQ" value="'+esc(q)+'" placeholder="例如 Gemini、免费、API"><button>搜索</button></form>';
 body+=section('模型','按名称与任务匹配。','models',results.models.length?'<div class="discovery-grid three">'+results.models.map(modelCard).join('')+'</div>':'<p class="empty">没有匹配模型。</p>');
 body+=section('API 平台','最多显示 12 个匹配结果。','explore','<div class="search-provider-list">'+(results.providers.length?results.providers.map(p=>'<button data-discover-provider="'+esc(p.id)+'"><strong>'+esc(p.name)+'</strong><span>'+esc(p.type)+' ↗</span></button>').join(''):'<p>没有匹配平台。</p>')+'</div>');
 body+=section('CoVibe 教程','选型与使用经验。','covibe',results.articles.length?'<div class="discovery-grid two">'+results.articles.map(a=>articleCard(a)).join('')+'</div>':'<p class="empty">没有匹配文章。</p>');
 }else return null;
 return '<div class="page discovery-page">'+body+'<p class="discovery-footnote">资料核验 '+d.checkedAt+' · 报价与活动可能调整，请以来源页面为准。</p></div>';
}
function decodeSafe(s){try{return decodeURIComponent(s)}catch{return s}}
export function relatedTutorials(p){const ids=p.id==='official-gemini'?['first-api','free-credits']:['choose-model','read-prices'];return '<div class="detail-block" style="margin-top:16px"><h4>CoVibe · 相关教程</h4>'+ids.map(id=>link('read/'+id,d.articles.find(a=>a.id===id).title)).join('<br>')+'</div>';}
export function bindDiscovery({navigate,openProvider,estimate}){
 document.querySelectorAll('[data-discover-provider]').forEach(el=>el.onclick=()=>openProvider(el.dataset.discoverProvider));
 document.querySelectorAll('[data-board-tab]').forEach(el=>el.onclick=()=>{
 document.querySelectorAll('[data-board-tab]').forEach(x=>x.setAttribute('aria-pressed',String(x===el)));
 document.querySelector('#home-board-content').innerHTML=boardPreview(el.dataset.boardTab);
 document.querySelectorAll('#home-board-content [data-route]').forEach(a=>a.onclick=e=>{e.preventDefault();navigate(a.dataset.route)});
 });
 const freeForm=document.querySelector('#freeModelSearch');
 const navigateFree=()=>navigate('boards/free/'+freeForm.dataset.platform+'/'+freeForm.dataset.cap+'/'+encodeURIComponent(document.querySelector('#freeModelQuery').value.trim())+'/'+document.querySelector('#freeModelSort').value);
 freeForm?.addEventListener('submit',e=>{e.preventDefault();navigateFree();});
 document.querySelector('#freeModelSort')?.addEventListener('change',navigateFree);
 document.querySelector('#priceModel')?.addEventListener('change',e=>navigate('boards/price/'+e.target.value));
 const update=()=>{
 const id=document.querySelector('#priceModel')?.value;
 const input=Math.max(0,Math.min(1e6,Number(document.querySelector('#priceInput')?.value)||0)),output=Math.max(0,Math.min(1e6,Number(document.querySelector('#priceOutput')?.value)||0));
 if(id&&d.quotes.some(q=>q.model===id)){document.querySelector('#priceResults').innerHTML=quoteTable(id,input,output);bindEstimate();}
 };
 function bindEstimate(){document.querySelectorAll('[data-estimate]').forEach(el=>el.onclick=()=>{const q=d.quotes.find(x=>x.id===el.dataset.estimate);estimate(q,Math.max(0,Math.min(1e6,Number(document.querySelector('#priceInput')?.value??1)||0)),Math.max(0,Math.min(1e6,Number(document.querySelector('#priceOutput')?.value??.2)||0)));});}
 bindEstimate();
 document.querySelector('#priceInput')?.addEventListener('input',update);document.querySelector('#priceOutput')?.addEventListener('input',update);
 document.querySelector('#discoverySearch')?.addEventListener('submit',e=>{e.preventDefault();navigate('search/'+encodeURIComponent(document.querySelector('#discoverySearchQ').value.trim()));});
 document.querySelectorAll('[data-reading-section]').forEach(el=>el.onclick=()=>document.querySelector('#reading-'+el.dataset.readingSection).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}));
 document.querySelector('#shareArticle')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);document.querySelector('#shareStatus').textContent='链接已复制';}catch{document.querySelector('#shareStatus').textContent='请复制浏览器地址分享';}});
}
