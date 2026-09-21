import {priceCatalog} from './data/price-catalog.js';
const pilots=priceCatalog.sources.slice(0,20);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Number.isFinite(n)?n.toLocaleString('zh-CN',{maximumFractionDigits:6}):'—';
export function cashBudget(b,c){
 if(!b)return null;
 const n=(k,optional=false)=>{if(c[k]===''||c[k]==null){if(optional)return 0;throw Error('请补全充值或汇率');}const v=Number(c[k]);if(!Number.isFinite(v)||v<0)throw Error('请填写有效金额');return v;};
 try{
  let factor,upfront=null;const fee=n('fee',true),extra=n('extra',true);if(fee>100)return null;
  if(b.currency==='USD'){factor=n('fx');if(factor<=0)return null;}
  else if(b.currency==='CREDIT_USD'){const paid=n('paid'),credits=n('credits'),balance=n('balance',true);if(paid<=0||credits<=0)return null;factor=paid/credits;upfront=Math.ceil(Math.max(0,b.total-balance)/credits)*paid*(1+fee/100)+extra;}
  else return null;
  const cny=b.total*factor*(1+fee/100)+extra;if(!Number.isFinite(cny)||upfront!==null&&!Number.isFinite(upfront))return null;return {cny,upfront};
 }catch{return null;}
}
const num=(name,label,value='',extra='')=>`<label>${label}<input name="${name}" type="number" ${extra.includes('min=')?'':'min="0"'} ${extra.includes('step=')?'':'step="any"'} value="${value}" ${extra}></label>`;
export function relayComparePage(){return `<div class="page" id="relayCompare"><div class="discovery-heading"><span class="eyebrow">20 CHANNELS · LIVE API</span><h1>同一模型，这批任务各站花多少钱？</h1><p>首批 20 家公开 API 自动获取型号与报价，最多缓存 5 分钟。目录报价属于站方声明，不等于可调用或实际扣费。</p></div><form id="relayWorkload" class="notice"><div class="evidence-fields"><label>模型分类<select name="category">${priceCatalog.categories.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('')}</select></label><label>具体模型版本<select name="modelVersion"></select></label></div><p id="relayModelNote"></p><div id="relayTextWorkload" class="evidence-fields">${num('quantity','客服对话次数',1000,'min="1" step="1" required')}${num('turns','每次对话请求轮数',3,'min="1" step="1" required')}${num('inputTokens','每轮输入 Token（含历史）',1000,'min="1" step="1" required')}${num('outputTokens','每轮输出 Token（含思考）',300,'step="1" required')}${num('failure','预计请求失败率 %',0,'max="95" required')}${num('failedCharge','失败请求收费比例 %',0,'max="100" required')}</div><button class="primary-btn" type="submit">获取 20 家模型与报价</button><p id="relayCompareStatus" role="status">正在读取模型目录…</p></form><p class="notice">文本任务按相同请求量、上下文和输出长度比较。图像、视频、ASR、TTS 等先展示 API 报价，规格或计费单位未核实时不估算交付总价。每家充值比例分别填写；空白表示未知，不默认 1:1。分组默认展示目录第一项，不代表你有使用资格。</p><div class="section-head"><h2>渠道成本对照</h2><button id="sortRelayCash" class="ghost-btn">按已填人民币成本排序</button></div><div id="relayCostResults"></div><details class="notice"><summary>首批 20 家 · API 模型目录与采集状态</summary><p>展开某站可检索接口返回的全部模型 ID。比价选择器只展示已建立版本与计费映射的模型，未映射型号不会被猜测归类。</p><div id="relayInventories"></div></details><p><a href="#calculator">手动填写图片 / 视频 / 转写交付预算 →</a> · <a href="#probes">查看实测档案 →</a></p></div>`;}
let active;
export function bindRelayCompare(){
 active?.abort();active=null;const root=document.querySelector('#relayCompare');if(!root)return;
 const form=root.querySelector('#relayWorkload'),status=root.querySelector('#relayCompareStatus'),result=root.querySelector('#relayCostResults'),inventories=root.querySelector('#relayInventories');
 let catalog=[],data=[],settings={},groups={},sorted=false,seq=0;
 try{settings=JSON.parse(localStorage.getItem('vibebase-relay-settlement')||'{}');}catch{}
 function modelOptions(){const cat=priceCatalog.categories.find(c=>c.id===form.elements.category.value),old=form.elements.modelVersion.value;
  const available=priceCatalog.models.filter(m=>cat.models.includes(m.id)||m.category===cat.id).filter(m=>catalog.some(s=>s.models.includes(m.id)));
  form.elements.modelVersion.innerHTML=available.map(m=>`<option value="${esc(m.id)}">${esc(m.name)} · ${catalog.filter(s=>s.status==='ok'&&s.models.includes(m.id)).length} 家目录收录</option>`).join('');
  if(available.some(m=>m.id===old))form.elements.modelVersion.value=old;else if(available.some(m=>m.id==='sol56'))form.elements.modelVersion.value='sol56';
  note();
 }
 function note(){const m=priceCatalog.models.find(m=>m.id===form.elements.modelVersion.value);root.querySelector('#relayTextWorkload').hidden=!m?.text;root.querySelector('#relayModelNote').textContent=m?(m.text?'统一任务量估算；缓存命中为 0，长上下文阶梯自动匹配。':'当前模型仅比较目录报价；多模态规格与计费单位待核验。'):'此分类本次没有取得已映射模型，仍可在下方查看原始目录。';}
 async function batches(path,params,controller){const out=[];await Promise.all(Array.from({length:4},async(_,i)=>{const batch=pilots.slice(i*5,i*5+5);try{
  const query=new URLSearchParams({...params,sources:batch.map(s=>s.id).join(',')});const r=await fetch(path+'?'+query,{signal:AbortSignal.any([controller.signal,AbortSignal.timeout(28000)])});const v=await r.json();if(!r.ok||!Array.isArray(v.sources)||v.sources.length!==batch.length||batch.some(s=>!v.sources.some(x=>x.id===s.id)))throw Error(v.error||'接口返回不完整');out.push(...v.sources);
 }catch(e){if(controller.signal.aborted)throw e;out.push(...batch.map(s=>({...s,status:'error',error:e.message,quotes:[],models:[],modelIds:[]})));}}));return pilots.map(s=>out.find(x=>x.id===s.id));}
 function catalogRender(){inventories.innerHTML=catalog.map(s=>`<details class="notice"><summary>${esc(s.name)} · ${s.modelIds.length} 个模型 · ${esc(s.status==='ok'?'API 已获取':s.status==='stale'?'过期快照':'获取失败')}</summary><p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">公开 API ↗</a> · ${esc(s.fetchedAt||'')} ${esc(s.error||'')}</p><label>筛选模型 ID<input data-inventory-filter="${s.id}" placeholder="输入模型名称"></label><p data-inventory-list="${s.id}" class="relay-model-list">${s.modelIds.map(esc).join(' · ')||'无可用目录'}</p></details>`).join('');}
 const setting=id=>settings[id]||{};
 function selected(s){if(!s?.quotes?.[groups[s.id]||0])groups[s.id]=0;return s?.quotes?.[groups[s.id]||0];}
 function render(){
  const rows=data.map(s=>{const q=selected(s);return {s,q,cash:cashBudget(q?.budget,setting(s.id))};});if(sorted)rows.sort((a,b)=>(a.cash?.cny??Infinity)-(b.cash?.cny??Infinity));
  result.innerHTML=rows.map(({s,q,cash})=>{const c=setting(s.id),state={error:'接口暂不可用',not_listed:'未收录此精确版本',unsupported:'单位或规格待核验',stale:'过期报价，不参与估算',ok:'取得报价'}[s.status]||s.status;
   return `<article class="notice" data-relay-row="${s.id}"><div class="section-head"><h3>${esc(s.name)}</h3><span>${esc(state)}</span></div>${s.quotes?.length?`<label>站方分组 / 路由<select data-relay-group="${s.id}">${s.quotes.map((x,i)=>`<option value="${i}" ${i===(groups[s.id]||0)?'selected':''}>${esc(x.group||'目录路由起价')} · ${esc(x.modelId)}</option>`).join('')}</select></label><p>${q.unit==='tokens'?`输入 ${fmt(q.input)} / 输出 ${fmt(q.output)} 每百万 Token`:`目录单价 ${fmt(q.perRequest)} / ${q.unit==='request'?'请求':'单位待核验'}`} · ${q.currency==='USD'?'现金美元':'站内额度美元'}</p><p>${esc(q.note)} ${esc(q.conditions)}</p>${q.budget?`<p>本批基础消耗 ${fmt(q.budget.base)} + 预计失败扣费 ${fmt(q.budget.failureCost)} = <strong>${fmt(q.budget.total)} ${q.currency==='USD'?'USD':'额度美元'}</strong></p><div class="evidence-fields" data-settlement="${s.id}">${q.currency==='USD'?num('fx','实际美元结算汇率',esc(c.fx||'')):num('paid','一包充值实付人民币',esc(c.paid||''))+num('credits','该包实得额度美元',esc(c.credits||''))+num('balance','已有额度美元',esc(c.balance??0))}${num('fee','支付 / 充值附加费率 %',esc(c.fee??0),'max="100"')}${num('extra','本批其他费用（人民币）',esc(c.extra??0))}</div><p class="relay-cash" data-cash="${s.id}">${cashText(cash)}</p>`:'<p>未取得可用于交付估算的单价；不会按零元排序。</p>'}`:`<p>${esc(s.error||'接口没有提供此版本的可比报价')}</p>`}${s.issues?.length?`<details><summary>未换算原因（${s.issues.length}）</summary>${s.issues.map(x=>`<p>${esc(x.group)}：${esc(x.reason)}</p>`).join('')}</details>`:''}<p class="mini-meta"><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">API 来源 ↗</a> · ${esc(s.fetchedAt||'未取得更新时间')} · 站方报价，非实际扣费</p></article>`;
  }).join('');
 }
 function cashText(c){return c?`本批估算人民币 <strong>¥${fmt(c.cny)}</strong>${c.upfront===null?'':` · 按整包充值需新付 ¥${fmt(c.upfront)}`}（含填写的附加费与其他费用）`:'人民币成本待确认：请填写本渠道充值比例或结算汇率';}
 async function refresh(loadCatalog=false){
  active?.abort();const controller=new AbortController();active=controller;const version=++seq;data=[];result.innerHTML='';status.textContent='正在分批查询 20 家 API…';
  try{if(loadCatalog){catalog=await batches('/api/relay-catalog',{},controller);if(version!==seq||!root.isConnected)return;catalogRender();modelOptions();}
   const m=form.elements.modelVersion.value;if(!m){status.textContent='当前分类没有可比较的已映射型号';return;}
   const params=Object.fromEntries(new FormData(form));params.model=m;
   data=await batches('/api/relay-costs',params,controller);if(version!==seq||!root.isConnected)return;
   const valid=data.filter(s=>s.quotes?.some(q=>q.budget)).length;status.textContent=`已查询 20 家 · ${valid} 家取得可估算报价 · 各分组资格与充值条件需确认`;render();
  }catch(e){if(!controller.signal.aborted)status.textContent='获取失败，请重试：'+e.message;}
 }
 form.onsubmit=e=>{e.preventDefault();refresh(true);};
 form.elements.category.onchange=()=>{modelOptions();refresh();};form.elements.modelVersion.onchange=()=>{note();refresh();};
 form.addEventListener('input',e=>{if(e.target.type==='number'){active?.abort();seq++;data=[];result.innerHTML='';status.textContent='任务量已修改，请点击获取报价重新计算';}});
 root.addEventListener('change',e=>{if(e.target.dataset.relayGroup){groups[e.target.dataset.relayGroup]=Number(e.target.value);render();}});
 root.addEventListener('input',e=>{const parent=e.target.closest('[data-settlement]');if(parent){const id=parent.dataset.settlement;settings[id]={...setting(id),[e.target.name]:e.target.value};const q=selected(data.find(s=>s.id===id));root.querySelector(`[data-cash="${id}"]`).innerHTML=cashText(cashBudget(q?.budget,settings[id]));try{localStorage.setItem('vibebase-relay-settlement',JSON.stringify(settings));}catch{}if(sorted){sorted=false;status.textContent='结算金额已修改，请重新点击人民币排序';}}
  if(e.target.dataset.inventoryFilter){const id=e.target.dataset.inventoryFilter,s=catalog.find(x=>x.id===id);root.querySelector(`[data-inventory-list="${id}"]`).textContent=s.modelIds.filter(x=>x.toLowerCase().includes(e.target.value.toLowerCase())).join(' · ')||'没有匹配型号';}
 });
 root.querySelector('#sortRelayCash').onclick=()=>{sorted=true;render();};refresh(true);
}
