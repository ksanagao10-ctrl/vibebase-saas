import {priceCatalog} from './data/price-catalog.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeLink=(url,label)=>{try{const u=new URL(url);if(u.protocol==='https:'&&!u.username&&!u.password)return '<a href="'+esc(u.href)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>';}catch{}return esc(label);};
const amount=n=>Number.isFinite(n)?Number(n.toFixed(6)).toLocaleString('en-US',{maximumFractionDigits:6}):'—';
const time=s=>s?new Date(s).toLocaleString('zh-CN',{hour12:false}):'未取得';
export function livePricePanel(id){
 const textModel=priceCatalog.models.find(m=>m.id===id)?.text;
 return '<section id="livePricePanel" class="notice" data-price-model="'+esc(id)+'"><div class="section-head"><div><span class="eyebrow">LIVE CHANNEL PRICES</span><h2>单模型 · 中转站实时报价</h2></div><button id="refreshPrices" class="soft-btn">刷新报价</button></div><p>分批读取 '+priceCatalog.sources.length+' 个不同站点的公开价格目录，最多缓存 5 分钟。型号精确匹配，分组、上下文阶梯分别列出；抓取成功不代表 API 调用成功。</p><div class="price-controls"><label '+(textModel?'':'hidden')+'>单次输入长度（决定阶梯）<input id="liveContext" type="number" min="1" max="2000000" step="1" value="4000"></label><label '+(textModel?'':'hidden')+'>按次计费的请求数<input id="liveRequests" type="number" min="1" max="1000000" value="100"></label><label>筛选平台<select id="liveSource"><option value="all">全部平台</option></select></label></div><p id="livePriceStatus" role="status" aria-live="polite">准备获取报价…</p><div id="livePriceResults"></div><p class="mini-meta">USD 是公开美元单价；“额度美元”按 New API 标准 500,000 quota 换算，仅代表站内消耗，充值汇率与折扣未确认，不能与现金美元直接排名。所有金额均不含工具、缓存存储、重试与税费；分组权限及底层模型身份尚未实测。</p></section>';
}
export function renderLivePrices(data,{inputM=1,outputM=.2,requests=100,source='all'}={}){
 const providers=data.sources.filter(s=>source==='all'||s.id===source);
 const rows=providers.flatMap(s=>s.quotes||[]).filter(q=>!q.stale);
 const costs=q=>q.unit==='request'?q.perRequest*requests:q.input*inputM+q.output*outputM;
 const sections=[['USD','tokens','美元报价 · 每百万文本 Token'],['CREDIT_USD','tokens','站内额度报价 · 每百万文本 Token'],['CREDIT_USD','request','按次计费 · 每次请求']];
 let html=sections.map(([currency,unit,title])=>{
  const group=rows.filter(q=>q.currency===currency&&q.unit===unit).sort((a,b)=>costs(a)-costs(b)||a.channel.localeCompare(b.channel));
  if(!group.length)return '';
  return '<h3>'+title+'</h3><p class="mini-meta">'+(unit==='tokens'?'累计 '+amount(inputM)+' 百万输入 + '+amount(outputM)+' 百万输出；单次输入 '+data.inputTokens+' Token，缓存命中 0。':'按 '+amount(requests)+' 次请求估算，单次实际交付规格以渠道为准。')+'</p><div class="price-table-wrap"><table class="price-table"><thead><tr><th>平台 / 分组</th><th>输入 / 输出单价</th><th>估算消耗</th><th>条件与来源时间</th></tr></thead><tbody>'+group.map(q=>'<tr><th>'+safeLink(q.source,q.channel)+'<div class="mini-meta">'+esc(q.group||'目录路由起价')+'</div><div class="mini-meta">'+esc(q.modelId)+'</div></th><td>'+ (unit==='tokens'?amount(q.input)+' / '+amount(q.output):amount(q.perRequest)+' / 次')+'</td><td>'+amount(costs(q))+' '+(currency==='USD'?'USD':'额度美元')+'</td><td><p>'+esc(q.note)+'</p><details><summary>分组条件（站方声明）</summary><p>'+esc(q.conditions)+'</p><p>'+esc(q.identity)+'</p></details><span class="mini-meta">'+esc(time(q.fetchedAt))+'</span></td></tr>').join('')+'</tbody></table></div>';
 }).join('');
 const nominal=rows.filter(q=>q.unit==='catalog_unit');
 if(nominal.length)html+='<h3>多模态目录基础单价 · 规格待核实</h3><p>以下已取得站方公布的单价，但不同站可能按秒、字符、张数或任务扣费，暂不排序或估算总价。</p><div class="price-table-wrap"><table class="price-table"><thead><tr><th>平台 / 分组</th><th>目录基础单价（额度美元）</th><th>计费说明</th></tr></thead><tbody>'+nominal.map(q=>'<tr><th>'+safeLink(q.source,q.channel)+'<div class="mini-meta">'+esc(q.group)+'</div></th><td>'+amount(q.perRequest)+'</td><td>'+esc(q.note)+'<p class="mini-meta">'+esc(time(q.fetchedAt))+'</p></td></tr>').join('')+'</tbody></table></div>';
 if(!rows.length)html+='<p class="empty">本次没有可可靠换算的新鲜报价。请查看下方各站状态；不会以 0 元填充失败结果。</p>';
 html+='<details class="notice"><summary>各站采集状态与未纳入报价的原因</summary>'+providers.map(s=>'<section><h4>'+safeLink(s.url,s.name)+' · '+esc({ok:'报价已获取',stale:'获取失败，保留旧快照',unsupported:'已匹配，计费待适配',not_listed:'未找到此精确型号',error:'暂时获取失败'}[s.status]||s.status)+'</h4><p class="mini-meta">'+esc(s.error||'')+' '+(s.fetchedAt?'源数据时间：'+esc(time(s.fetchedAt))+(s.cached?'（缓存）':'（本次抓取）'):'')+'</p>'+(s.issues||[]).map(i=>'<p>'+esc(i.modelId)+' / '+esc(i.group||'')+'：'+esc(i.reason)+'</p>').join('')+(s.status==='stale'?'<p>旧报价未参与上方排序。请稍后重新获取，或直接查看站方。</p>':'')+'</section>').join('')+'</details>';
 return html;
}
let active=null;
export function bindLivePrices(){
 active?.abort();active=null;
 const root=document.querySelector('#livePricePanel');if(!root)return;
 const status=root.querySelector('#livePriceStatus'),results=root.querySelector('#livePriceResults'),button=root.querySelector('#refreshPrices'),context=root.querySelector('#liveContext'),select=root.querySelector('#liveSource');
 let data=null,sequence=0;
 const settings=()=>({inputM:Math.max(0,Math.min(1e6,Number(document.querySelector('#priceInput')?.value)||0)),outputM:Math.max(0,Math.min(1e6,Number(document.querySelector('#priceOutput')?.value)||0)),requests:Math.max(1,Math.min(1e6,Number(root.querySelector('#liveRequests').value)||1)),source:select.value});
 const render=()=>{if(data)results.innerHTML=renderLivePrices(data,settings());};
 async function refresh(){
  active?.abort();const controller=new AbortController();active=controller;const version=++sequence;
  if(!context.checkValidity()){context.reportValidity();return;}
  button.disabled=true;status.textContent='正在获取各站报价，通常需要数秒；个别来源超时不影响其他结果。';results.setAttribute('aria-busy','true');
  data={model:priceCatalog.models.find(m=>m.id===root.dataset.priceModel),inputTokens:Number(context.value),checkedAt:new Date().toISOString(),sources:[]};
  const all=priceCatalog.sources,batches=[];for(let i=0;i<all.length;i+=8)batches.push(all.slice(i,i+8));
  let next=0;
  select.innerHTML='<option value="all">全部平台</option>'+all.map(s=>'<option value="'+esc(s.id)+'">'+esc(s.name)+'</option>').join('');
  const report=()=>{
   if(version!==sequence||!root.isConnected)return;
   const ok=new Set(data.sources.filter(s=>s.status==='ok').map(s=>s.id)).size;
   const done=data.sources.length===all.length;
   status.textContent=data.model.name+' · 已查询 '+data.sources.length+'/'+all.length+' 家 · '+ok+' 家获得可换算报价'+(done?(ok>=20?' · 已达到 20 家报价目标。':' · 距 20 家有效报价还差 '+(20-ok)+' 家，未匹配或待适配项见下方。'):' · 继续获取中…');
   render();
  };
  async function consume(){while(next<batches.length&&!controller.signal.aborted){
   const batch=batches[next++],timeout=new AbortController(),timer=setTimeout(()=>timeout.abort(),25000);
   const signal=AbortSignal.any([controller.signal,timeout.signal]);
   try{
    const response=await fetch('/api/prices?model='+encodeURIComponent(root.dataset.priceModel)+'&inputTokens='+encodeURIComponent(context.value)+'&sources='+batch.map(s=>encodeURIComponent(s.id)).join(','),{signal});
    if(!response.ok||!response.headers.get('content-type')?.includes('application/json'))throw Error('报价服务暂时不可用');
    const value=await response.json();
    if(!Array.isArray(value.sources)||value.sources.length!==batch.length||batch.some(s=>!value.sources.some(r=>r.id===s.id)))throw Error('报价响应不完整');
    if(version!==sequence||!root.isConnected)return;
    data.sources.push(...value.sources);
   }catch(e){
    if(controller.signal.aborted||version!==sequence||!root.isConnected)return;
    data.sources.push(...batch.map(s=>({...s,status:'error',error:timeout.signal.aborted?'此批来源超时，请刷新重试':e.message,quotes:[],issues:[]})));
   }finally{clearTimeout(timer);}
   report();
  }}
  try{await Promise.all(Array.from({length:3},consume));}
  finally{if(version===sequence&&root.isConnected){button.disabled=false;results.removeAttribute('aria-busy');}}
 }
 button.addEventListener('click',refresh);context.addEventListener('change',refresh);
 for(const id of ['priceInput','priceOutput','liveRequests'])document.querySelector('#'+id)?.addEventListener('input',render);
 select.addEventListener('change',render);refresh();
}

