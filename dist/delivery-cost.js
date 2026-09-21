import {deliveryRates,deliveryKinds} from './data/delivery-rates.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Number(n.toFixed(6)).toLocaleString('zh-CN',{maximumFractionDigits:6});
export function calculateDelivery(v){
 const n=(key,min=0,max=1e9)=>{const x=Number(v[key]);if(v[key]===''||v[key]==null||!Number.isFinite(x)||x<min||x>max)throw Error('请检查 '+key+' 的数值');return x;};
 const kind=v.kind;if(!['image','video','asr','chat'].includes(kind))throw Error('交付类型无效');
 const quantity=n('quantity',1);if(['image','chat'].includes(kind)&&!Number.isInteger(quantity))throw Error('图片数或对话次数需为整数');const yieldRate=n('yield',1,100)/100,fail=n('failure',0,95)/100,charged=n('failedCharge',0,100)/100;
 let base=0,units=0,attempts=0,formula='',generated=quantity;
 if(kind==='image'){
  generated=Math.ceil(quantity/yieldRate);const pixels=Math.ceil(n('width',64,16384)*n('height',64,16384)/1e6);
  if(!['megapixel','image'].includes(v.unit))throw Error('图片计费单位不兼容');
  units=generated*(v.unit==='megapixel'?pixels:1);attempts=generated;base=units*n('price');formula=`${generated} 张生成图 × ${v.unit==='megapixel'?pixels+' MP/张 × ':''}${n('price')}；目标 ${quantity} 张，成片率 ${yieldRate*100}%`;
 }else if(kind==='video'){
  if(v.unit!=='second')throw Error('视频需要明确每秒单价');
  const clip=n('clip',1,60);if(v.evidence==='published_price'&&v.quoteId?.startsWith('veo-')&&![4,6,8].includes(clip))throw Error('该 Veo 预设计价支持 4、6 或 8 秒片段');generated=Math.ceil(quantity*60/clip/yieldRate);units=generated*clip;attempts=generated;base=units*n('price');formula=`${generated} 段 × ${clip} 秒 × ${n('price')}/秒；目标 ${quantity} 分钟，片段采用率 ${yieldRate*100}%`;
 }else if(kind==='asr'){
  if(v.unit!=='hour')throw Error('转写需要明确每小时单价');
  const files=n('files',1,1e6);if(!Number.isInteger(files))throw Error('音频分段数需为整数');
  units=files*Math.max(quantity*60/files,n('minimumSeconds'))/3600;attempts=files;base=units*n('price');formula=`${files} 段 × max(${fmt(quantity*60/files)} 秒/段, ${n('minimumSeconds')} 秒最低计费) ÷ 3600 × ${n('price')}/小时（假设等长分段）`;
 }else{
  if(v.unit!=='tokens')throw Error('客服需要明确输入 / 输出 Token 单价');
  attempts=quantity*n('turns',1,1000);units=attempts*(n('inputTokens')+n('outputTokens'));base=attempts*(n('inputTokens')*n('inputPrice')+n('outputTokens')*n('outputPrice'))/1e6;formula=`${quantity} 次对话 × ${n('turns')} 轮 × (${n('inputTokens')} 输入 × ${n('inputPrice')} + ${n('outputTokens')} 输出 × ${n('outputPrice')}) ÷ 1000000`;
 }
 const expectedFailures=attempts*fail/(1-fail),failureCost=base*fail/(1-fail)*charged;
 const extras=n('extras'),fee=(base+failureCost+extras)*n('fee',0,100)/100,total=base+failureCost+extras+fee;
 let cny=null,upfront=null,conversion='';
 if(v.currency==='CNY'){cny=total;conversion='报价已使用人民币';}
 else if(v.currency==='CREDIT'){
  const paid=n('rechargePaid',.000001),credits=n('rechargeCredits',.000001),balance=n('balance');cny=total*paid/credits;upfront=Math.ceil(Math.max(0,total-balance)/credits)*paid;conversion=`每 ${credits} 额度实付 ¥${paid}；单位消耗 ¥${fmt(paid/credits)}，现有余额 ${balance} 额度`;
 }else if(v.currency==='USD'){
  if(v.fx!==''&&v.fx!=null){cny=total*n('fx',.000001);conversion='按你填写的美元结算汇率 '+n('fx')+' 换算';}else conversion='未填写美元结算汇率，人民币金额待确认';
 }else throw Error('币种无效');
 if(![base,failureCost,fee,total,cny,upfront].every(x=>x===null||Number.isFinite(x)))throw Error('数值超出可计算范围');
 return {base,failureCost,extras,fee,total,cny,upfront,units,attempts,expectedFailures,formula,conversion};
}
const field=(id,label,value,extra='')=>`<label>${label}<input name="${id}" type="number" min="0" step="any" value="${value}" ${extra}></label>`;
export function deliveryPage(){return `<div class="page"><div class="discovery-heading"><span class="eyebrow">DELIVERY BUDGET</span><h1>这批交付，需要多少钱？</h1><p>按实际交付量算预算。公开价格、你的报价、估算费用与实际扣费分别记录。</p></div><div class="discovery-tabs">${deliveryKinds.map(([id,name])=>`<button data-delivery-kind="${id}" aria-pressed="${id==='image'}">${name}</button>`).join('')}</div><div class="calculator-shell"><form id="deliveryForm" class="calc-panel"><div id="deliveryFields"></div><h3>重试、额外费用与结算</h3><div class="evidence-fields">${field('failure','预计请求失败率（%）',0,'max="95"')}${field('failedCharge','失败请求收费比例（%）',0,'max="100"')}${field('extras','本批工具 / 存储 / 人工等额外费用（同报价币种）',0)}${field('fee','附加费率（%）',0,'max="100"')}<label>报价币种<select name="currency"><option value="USD">现金美元 USD</option><option value="CREDIT">站内额度（需充值换算）</option><option value="CNY">人民币 CNY</option></select></label>${field('fx','美元结算汇率（人民币 / 美元，可留空）','')}<div id="rechargeFields" hidden>${field('rechargePaid','一份充值包实付人民币',100)}${field('rechargeCredits','一份充值包实得额度（含赠送）',20)}${field('balance','已有站内额度',0)}</div></div><p class="mini-meta">失败费用按成功请求同等平均消耗估算；失败率和成片率均由你填写。赠送额度需确认适用模型及到期条件。</p><button type="button" class="ghost-btn" id="saveDelivery">保存到本机</button> <button type="button" class="ghost-btn" id="exportDelivery">导出预算</button><p id="deliverySaveStatus" role="status"></p></form><div class="calc-result" id="deliveryResult" aria-live="polite"></div></div><a href="#calculator/token" data-route="calculator/token">使用原 Token 计算器 →</a></div>`;}
export function bindDelivery(){
 const form=document.querySelector('#deliveryForm');if(!form)return;let kind='image',quote=deliveryRates[0],custom=false;
 const fields=form.querySelector('#deliveryFields'),result=document.querySelector('#deliveryResult');
 function scenario(){const list=deliveryRates.filter(q=>q.kind===kind);quote=list[0];custom=false;fields.innerHTML=`<h2>交付规格</h2><label>模型与渠道<select name="quote">${list.map(q=>`<option value="${q.id}">${esc(q.name)}</option>`).join('')}<option value="custom">填写其他模型 / 中转站报价</option></select></label><div id="deliverySpec"></div>`;spec();}
 function spec(){
  fields.querySelector('#deliverySpec').innerHTML=`<p id="deliveryEvidence" class="mini-meta">${custom?'自填报价，未经本站核验':`公开价格快照 · ${quote.checkedAt} · <a href="${quote.source}" target="_blank" rel="noopener noreferrer">来源 ↗</a>`}</p><div class="evidence-fields"><label>具体模型版本<input name="modelVersion" value="${esc(custom?'':quote.model)}" required></label><label>渠道 / 分组<input name="channel" value="${esc(custom?'':quote.channel)}" required></label>${field('quantity',({image:'交付图片数',video:'交付视频总分钟数',asr:'音频总分钟数',chat:'客服对话次数'})[kind],({image:100,video:10,asr:60,chat:1000})[kind],'min="1" required')}${kind==='image'?field('width','图片宽度 px',1024)+field('height','图片高度 px',1024)+`<label>计费单位<select name="unit"><option value="megapixel">每百万像素（逐张向上取整）</option><option value="image">每张</option></select></label>`:kind==='video'?field('clip','每段生成时长（秒）',8)+`<label>分辨率<input name="resolution" value="720p"></label><label>音频规格<input name="audio" value="含生成音频"></label><input name="unit" type="hidden" value="second">`:kind==='asr'?field('files','等长音频分段数',1)+field('minimumSeconds','每段最低计费秒数',10)+`<label>转写语言 / 服务<input name="language" value="多语言转写，不含人工校对"></label><input name="unit" type="hidden" value="hour">`:field('turns','每次对话的模型请求轮数',3)+field('inputTokens','每轮平均输入 Token（含历史上下文）',1000)+field('outputTokens','每轮平均输出 Token（含思考）',300)+`<input name="unit" type="hidden" value="tokens">`}${['image','video'].includes(kind)?field('yield','成功生成结果的采用率（%）',100,'min="1" max="100"'): '<input name="yield" type="hidden" value="100">'}${kind==='chat'?field('inputPrice','每百万输入 Token 单价',custom?'':quote.input)+field('outputPrice','每百万输出 Token 单价',custom?'':quote.output):field('price','所选计费单位的单价',custom?'':quote.price)}</div><p class="mini-meta">${esc(custom?'请填写与上述规格对应的真实单价，不要直接复制单位不明的目录价格。':quote.note)}</p>`;
  form.elements.currency.value='USD';update();
 }
 function values(){const v=Object.fromEntries(new FormData(form));return {...v,kind,quoteId:quote?.id||null,evidence:custom?'user_entered':'published_price',source:custom?null:quote.source,checkedAt:custom?null:quote.checkedAt};}
 function update(){
  const v=values();form.querySelector('#rechargeFields').hidden=v.currency!=='CREDIT';form.elements.fx.closest('label').hidden=v.currency!=='USD';
  try{const r=calculateDelivery(v);result.innerHTML=`<span class="eyebrow">交付预算 · 非实际扣费</span><div class="cost"><small>${v.currency==='CNY'?'¥':v.currency==='USD'?'$':''}</small>${fmt(r.total)}</div><p>${v.currency==='CREDIT'?'站内额度消耗':'报价币种合计'} · ${custom?'自填 / 修改报价':'公开价格快照'}</p><div class="cost-breakdown"><div><b>${fmt(r.base)}</b><span>生成 / 调用基础费</span></div><div><b>${fmt(r.failureCost)}</b><span>预计失败扣费</span></div><div><b>${fmt(r.extras+r.fee)}</b><span>额外费用及附加费</span></div></div><p>${esc(r.formula)}</p><p>预计另有 ${fmt(r.expectedFailures)} 次失败请求；这是统计预算，不是调用承诺。</p><h3>${r.cny===null?'人民币金额待确认':'折合人民币 ¥'+fmt(r.cny)}</h3><p>${esc(r.conversion)}</p>${r.upfront===null?'':`<p>按整包充值，当前需新支付 <strong>¥${fmt(r.upfront)}</strong>；与本批实际消耗成本不同。</p>`}<p class="mini-meta">附加费 =（基础费 + 预计失败扣费 + 额外费用）× ${esc(v.fee)}%。未填写的费用不包含在预算内。模型效果和交付质量需自行验收。</p><a href="#probes" data-route="probes">查看渠道实测档案 →</a>`;}catch(e){result.innerHTML='<h2>请补全计费信息</h2><p>'+esc(e.message)+'</p>';}
 }
 document.querySelectorAll('[data-delivery-kind]').forEach(b=>b.onclick=()=>{kind=b.dataset.deliveryKind;document.querySelectorAll('[data-delivery-kind]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));scenario();});
 form.addEventListener('change',e=>{if(e.target.name==='quote'){custom=e.target.value==='custom';quote=deliveryRates.find(q=>q.id===e.target.value)||quote;spec();return;}update();});
 const rateFields=['price','inputPrice','outputPrice','unit','resolution','audio','minimumSeconds','modelVersion','channel','currency'];
 form.addEventListener('input',e=>{if(rateFields.includes(e.target.name)){custom=true;fields.querySelector('#deliveryEvidence').textContent='自填 / 修改报价，未经本站核验';}update();});
 form.addEventListener('submit',e=>e.preventDefault());
 document.querySelector('#saveDelivery').onclick=()=>{try{calculateDelivery(values());localStorage.setItem('vibebase-delivery-budget',JSON.stringify(values()));document.querySelector('#deliverySaveStatus').textContent='预算已保存到此浏览器，可继续编辑；未上传。';}catch(e){document.querySelector('#deliverySaveStatus').textContent=e.message;}};
 document.querySelector('#exportDelivery').onclick=()=>{try{const v=values(),r=calculateDelivery(v),a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify({createdAt:new Date().toISOString(),kind:'estimate',inputs:v,result:r},null,2)],{type:'application/json'}));a.href=url;a.download='vibebase-delivery-budget.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch(e){document.querySelector('#deliverySaveStatus').textContent=e.message;}};
 scenario();
 try{const saved=JSON.parse(localStorage.getItem('vibebase-delivery-budget'));if(saved&&deliveryKinds.some(([id])=>id===saved.kind)){kind=saved.kind;scenario();custom=true;for(const [k,v] of Object.entries(saved))if(form.elements[k]&&v!==null)form.elements[k].value=v;fields.querySelector('#deliveryEvidence').textContent='已恢复本机预算；请重新确认价格是否仍有效';document.querySelectorAll('[data-delivery-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.deliveryKind===kind)));update();}}catch{}
}
