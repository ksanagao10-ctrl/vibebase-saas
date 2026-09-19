import { providers, apps, affiliateRows } from './data/providers.js';

const app = document.querySelector('#app');
const modalLayer = document.querySelector('#modalLayer');
const compareDock = document.querySelector('#compareDock');
const state = {
  route:'home', appProtocol:'', compare:new Set(), page:1, pageSize:48,
  filters:{q:'',type:'all',scope:'all',verified:false,china:false,model:[],protocol:[],android:false},
  calc:{input:10,output:2,inputPrice:1,outputPrice:5,calls:1000},
  catalog:{status:'loading',relayCount:providers.filter(p=>!p.official).length,sourceDate:'',error:''}
};

const seededNames = new Set(providers.map(p=>normalizeName(p.name)));

function normalizeName(name){
  return String(name||'').toLowerCase().replace(/https?:\/\//g,'').replace(/[^a-z0-9\u4e00-\u9fff]+/g,'');
}
function safeId(name,rank){
  const ascii=String(name||'relay').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
  return `relay-${rank||0}-${ascii||Math.random().toString(36).slice(2,8)}`;
}
function inferModels(raw=[]){
  const out=[]; const text=raw.join(' ');
  const rules=[['GPT',/openai|gpt/i],['Claude',/anthropic|claude/i],['Gemini',/google|gemini/i],['DeepSeek',/deepseek/i],['Qwen',/阿里云|qwen|通义/i],['GLM',/智谱|glm/i],['Kimi',/月之暗面|kimi|moonshot/i],['MiniMax',/minimax/i],['Grok',/xai|x\.ai|grok|spacex/i],['Doubao',/bytedance|字节|豆包/i],['Hunyuan',/tencent hunyuan|混元/i],['MiMo',/xiaomi|mimo|小米/i]];
  rules.forEach(([m,re])=>{if(re.test(text))out.push(m)});
  return out.length?out:raw.slice(0,6);
}
function inferProtocols(site){
  const t=`${site.description||''} ${(site.models||[]).join(' ')}`; const out=[];
  if(/openai|兼容.*openai|base[_ ]?url/i.test(t)) out.push('OpenAI');
  if(/anthropic|claude code|claude sdk/i.test(t)) out.push('Anthropic');
  if(/gemini|google sdk/i.test(t)) out.push('Gemini');
  return [...new Set(out)];
}
function extractExternalUrl(site){
  const text=String(site.description||'');
  const urls=text.match(/https?:\/\/[^\s)<>，。]+/g)||[];
  const external=urls.find(u=>!u.includes('hvoyai.com'));
  return external||site.url||'#';
}
function normalizeRelay(site,updatedDate){
  const protocols=inferProtocols(site), payments=Array.isArray(site.paymentMethods)?site.paymentMethods:[];
  return {
    id:safeId(site.name,site.rank), name:site.name||`未命名站点 #${site.rank||''}`, short:String(site.name||'API').replace(/[^A-Za-z0-9\u4e00-\u9fff]/g,'').slice(0,3).toUpperCase()||'API',
    type:'中转站线索', region:'待验证', verified:false, official:false, featured:false, rank:site.rank||null,
    desc:(site.description||'公开索引收录的 AI API / 中转站线索。').replace(/\s+/g,' ').slice(0,220),
    models:inferModels(Array.isArray(site.models)?site.models:[]), protocols, payments, china:payments.some(x=>/微信|支付宝/.test(x)),
    modelCount:site.modelCount?String(site.modelCount):'待核', providerCount:'待核', pricing:'待验证', affiliate:'待验证', affiliateState:'warn',
    appMatches:protocols.length?6:0, android:protocols.length>0, saas:true, endpoint:'以平台控制台为准',
    risk:'全量线索库自动导入，未验证主体、上游来源、稳定性、价格、退款或数据政策；请自行复核。',
    fresh:updatedDate||'索引实时', url:extractExternalUrl(site), source:'HvoyAI 全量公开索引', sourceUrl:site.url||'',
    uptime:site.uptime, latencyMs:site.latencyMs, userRating:site.userRating, ratingCount:site.ratingCount, supportsRefund:site.supportsRefund, supportsInvoice:site.supportsInvoice
  };
}
function mergeRelaySites(sites,updatedDate){
  let added=0;
  for(const site of sites||[]){
    if(!site?.name) continue;
    const key=normalizeName(site.name);
    if(seededNames.has(key)) continue;
    const item=normalizeRelay(site,updatedDate); providers.push(item); seededNames.add(key); added++;
  }
  state.catalog.relayCount=providers.filter(p=>!p.official).length;
  state.catalog.sourceDate=updatedDate||state.catalog.sourceDate;
  return added;
}
async function loadRelayCatalog(){
  try{
    const res=await fetch('./data/relays.json');
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data=await res.json();
    if(!Array.isArray(data.sites)||data.sites.length<800) throw new Error('全量数据不完整');
    mergeRelaySites(data.sites,data.updatedDate);
    state.catalog.status='ready';state.catalog.sourceDate=data.updatedDate;render();
  }catch(err){state.catalog.status='error';state.catalog.error=String(err.message);render()}
}
const safeUrl = value => {try{const u=new URL(value);return ['http:','https:'].includes(u.protocol)?u.href:'#'}catch{return '#'}};
const matchingApps = p => apps.filter(a=>a.status!=='规划内'&&a.protocols.some(protocol=>p.protocols.includes(protocol)));

const esc = s => String(s ?? '').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const $ = (sel,root=document)=>root.querySelector(sel);
const $$ = (sel,root=document)=>[...root.querySelectorAll(sel)];

function setRoute(route){
  state.route=route||'home';
  $('.topnav').classList.remove('mobile-open'); $('#mobileMenuBtn').setAttribute('aria-expanded','false'); closeModal();
  location.hash=state.route==='home'?'home':state.route;
  render(); window.scrollTo({top:0,behavior:'smooth'});
}

function providerCard(p){
  return `<article class="provider-card">
    <div class="provider-top">
      <div class="provider-logo">${esc(p.short)}</div>
      <div class="provider-name"><h3>${esc(p.name)}</h3><p>${p.rank?`#${p.rank} · `:''}${esc(p.type)} · ${esc(p.region)}</p></div>
      <span class="badge ${p.official?'official':p.verified?'green':'orange'}">${p.official?'官方':p.verified?'已核验':'未验证'}</span>
    </div>
    <div class="provider-desc">${esc(p.desc)}</div>
    <div class="tag-row">${p.models.slice(0,5).map(m=>`<span class="tag">${esc(m)}</span>`).join('')}${p.models.length>5?`<span class="tag">+${p.models.length-5}</span>`:''}</div>
    <div class="provider-metrics">
      <div class="metric"><b>${esc(p.modelCount)}</b><span>模型规模</span></div>
      <div class="metric"><b>${p.android?'可匹配':'—'}</b><span>Android</span></div>
      <div class="metric"><b>${matchingApps(p).length}</b><span>应用匹配</span></div>
    </div>
    <div class="provider-actions">
      <button class="detail-btn" data-provider="${p.id}">查看详情</button>
      <button class="compare-btn ${state.compare.has(p.id)?'selected':''}" data-compare="${p.id}">${state.compare.has(p.id)?'已加入':'对比'}</button>
    </div>
  </article>`;
}

function home(){
  const featured=[...providers.filter(p=>p.official&&p.featured).slice(0,3),...providers.filter(p=>!p.official&&p.featured).slice(0,3)];
  return `<div class="page">
    <section class="hero">
      <div class="hero-main">
        <div class="eyebrow"><span class="eyebrow-dot"></span>AI API DISCOVERY · APPLICATION MAP · AFFILIATE</div>
        <h1>找到 API<br><span class="accent-word">马上用起来</span></h1>
        <p>全球主流官方 API + 当前公开索引可发现的中转/聚合线索，再连接真正能使用它们的 Android APP 与 SaaS。VibeBase 把“找 API”变成完整的使用与赚钱路径。</p>
        <form class="hero-search" id="heroSearch"><span class="search-icon">⌕</span><input id="heroQ" placeholder="搜索 Claude、DeepSeek、OpenRouter、支持安卓的 API…"><button>搜索 API</button></form>
        <div class="quick-tags"><button data-quick="Claude">Claude</button><button data-quick="DeepSeek">DeepSeek</button><button data-quick="OpenAI">OpenAI Compatible</button><button data-quick="Android">Android 可用</button></div>
      </div>
      <div class="hero-side">
        <div class="pulse-card"><div class="pulse-grid"></div><div class="pulse-orb"></div><div class="pulse-top"><span>API MARKET PULSE</span><span class="live-pill">● CATALOG SNAPSHOT</span></div><div class="pulse-number">${providers.length}<span style="font-size:22px;letter-spacing:-1px"> APIs</span></div><div class="pulse-label">官方 API + 中转 / Router / Gateway 全量线索</div><div class="pulse-bottom"><div class="pulse-bars">${[34,64,42,80,55,93,62,73,46,84,58,92].map(h=>`<span style="height:${h}%"></span>`).join('')}</div><div class="pulse-stats"><div><b>${providers.filter(x=>x.android).length}</b><span>ANDROID READY</span></div><div><b>${apps.length}</b><span>APP / SAAS</span></div><div><b>${affiliateRows.filter(x=>x.state==='ok').length}</b><span>PROMO LEADS</span></div></div></div></div>
      </div>
    </section>
    <section class="journey-grid">
      <button class="journey-card" data-route="explore"><span class="n">01 · DISCOVER</span><span class="arrow">↗</span><h3>我想找 API</h3><p>按模型、协议、国内直连、支付方式和平台类型筛选。</p></button>
      <button class="journey-card" data-route="apps"><span class="n">02 · USE</span><span class="arrow">↗</span><h3>我已经有 Key</h3><p>告诉我 Base URL / 协议，找到能直接用的 Android APP 与 SaaS。</p></button>
      <button class="journey-card" data-route="affiliate"><span class="n">03 · EARN</span><span class="arrow">↗</span><h3>我想推广赚钱</h3><p>集中查看返佣、推荐奖励、渠道合作与待核验机会。</p></button>
    </section>
    <section class="stat-strip"><div class="stat-item"><b>${providers.filter(p=>p.official).length}</b><span>主流官方 API / 云推理入口</span></div><div class="stat-item"><b>${state.catalog.relayCount}</b><span>中转 / 聚合 / Router 线索</span></div><div class="stat-item"><b>${apps.length}</b><span>Android 与 SaaS 集成目标</span></div><div class="stat-item"><b>${providers.length}</b><span>当前 Provider 总条目</span></div></section>
    <section class="section"><div class="section-head"><div><h2>值得先看的 API</h2><p>先把“平台是什么”讲清楚，再谈价格和返佣。</p></div><a class="text-link" href="#explore" data-route="explore">查看全部 →</a></div><div class="provider-grid">${featured.map(providerCard).join('')}</div></section>
  </div>`;
}

function filterProviders(){
  return providers.filter(p=>{
    const q=state.filters.q.toLowerCase().trim();
    const hit=!q || [p.name,p.type,p.desc,...(p.models||[]),...(p.protocols||[]),...(p.payments||[])].join(' ').toLowerCase().includes(q);
    const scope=state.filters.scope==='all'||(state.filters.scope==='official'?p.official:!p.official);
    const type=state.filters.type==='all'||p.type===state.filters.type||p.type.includes(state.filters.type);
    const verified=!state.filters.verified||p.verified;
    const china=!state.filters.china||p.china;
    const model=!state.filters.model.length||state.filters.model.some(x=>(p.models||[]).includes(x));
    const protocol=!state.filters.protocol.length||state.filters.protocol.some(x=>(p.protocols||[]).includes(x));
    return hit&&scope&&type&&verified&&china&&model&&protocol&&(!state.filters.android||p.android);
  });
}

function explore(){
  const list=filterProviders();
  const maxPage=Math.max(1,Math.ceil(list.length/state.pageSize));
  if(state.page>maxPage) state.page=maxPage;
  const pageItems=list.slice((state.page-1)*state.pageSize,state.page*state.pageSize);
  const models=['GPT','Claude','Gemini','DeepSeek','Qwen','GLM']; const protocols=['OpenAI','Anthropic','Gemini'];
  const types=[...new Set(providers.filter(p=>state.filters.scope==='all'||(state.filters.scope==='official'?p.official:!p.official)).map(p=>p.type))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  const officialCount=providers.filter(p=>p.official).length, relayCount=providers.filter(p=>!p.official).length;
  const status=state.catalog.status==='loading'?'正在载入完整中转索引…':state.catalog.status==='error'?`全量索引加载失败：${esc(state.catalog.error)}（仍可浏览内置数据）`:`已载入 ${relayCount} 条中转 / 聚合 / Router 线索${state.catalog.sourceDate?` · 索引 ${esc(state.catalog.sourceDate)}`:''}`;
  return `<div class="page">
    <div class="section-head"><div><div class="eyebrow"><span class="eyebrow-dot"></span>GLOBAL API DATABASE</div><h2 style="margin-top:14px">全球官方 API + 中转站全量线索</h2><p>官方 API 单独建库；第三方中转站按“先收全、后验证”的方式导入，不替你筛可靠性。</p></div></div>
    <div class="scope-tabs"><button class="scope-tab ${state.filters.scope==='all'?'active':''}" data-scope="all">全部 <b>${providers.length}</b></button><button class="scope-tab ${state.filters.scope==='official'?'active':''}" data-scope="official">官方 API <b>${officialCount}</b></button><button class="scope-tab ${state.filters.scope==='relay'?'active':''}" data-scope="relay">中转 / 聚合线索 <b>${relayCount}</b></button></div>
    <div class="catalog-status ${state.catalog.status}"><span class="eyebrow-dot"></span>${status}<span class="catalog-source">来源索引：HvoyAI / GitHub · 未验证条目默认标记“未验证”</span></div>
    <div class="toolbar"><div class="searchbox">⌕<input id="exploreQ" value="${esc(state.filters.q)}" placeholder="搜索平台、模型、协议、支付方式…"></div><select class="filter-select" id="typeFilter"><option value="all">全部类型</option>${types.map(x=>`<option ${state.filters.type===x?'selected':''}>${esc(x)}</option>`).join('')}</select><button class="filter-chip ${state.filters.android?'active':''}" id="androidFilter">Android 可用</button><button class="filter-chip ${state.filters.verified?'active':''}" id="verifiedFilter">✓ 仅已核验</button><button class="filter-chip ${state.filters.china?'active':''}" id="chinaFilter">国内支付/可用线索</button></div>
    <div class="explore-layout">
      <aside class="filters"><div class="filter-group"><h4>模型</h4>${models.map(m=>`<label class="check"><input type="checkbox" data-model="${m}" ${state.filters.model.includes(m)?'checked':''}> ${m}</label>`).join('')}</div><div class="filter-group"><h4>协议</h4>${protocols.map(m=>`<label class="check"><input type="checkbox" data-protocol="${m}" ${state.filters.protocol.includes(m)?'checked':''}> ${m} Compatible</label>`).join('')}</div><div class="filter-group"><h4>说明</h4><p style="font-size:11px;line-height:1.65;color:var(--muted);margin:0">“官方”表示模型厂商/云平台官方入口；“未验证”表示仅作为中转线索入库，可靠性留给后续人工核验。</p></div></aside>
      <section><div class="result-head"><span>找到 ${list.length} 个结果 · 本页 ${pageItems.length} 个</span><span>第 ${state.page} / ${maxPage} 页</span></div>${pageItems.length?`<div class="provider-grid">${pageItems.map(providerCard).join('')}</div>`:`<div class="empty"><b>没有匹配结果</b>试试减少筛选条件。</div>`}<div class="pager"><button data-page="prev" ${state.page<=1?'disabled':''}>← 上一页</button><span>${state.page} / ${maxPage}</span><button data-page="next" ${state.page>=maxPage?'disabled':''}>下一页 →</button></div></section>
    </div>
  </div>`;
}

function appsPage(){
  return `<div class="page"><div class="section-head"><div><div class="eyebrow"><span class="eyebrow-dot"></span>KEY → APP</div><h2 style="margin-top:14px">一个 Key，能在哪些地方用？</h2><p>VibeBase 的核心差异：不在 API 页面结束，而是继续连接 Android 客户端、SaaS、Agent 与工作流。</p></div></div>
    <div class="toolbar"><div class="searchbox">⌕<input id="appQ" value="${esc(state.appProtocol)}" placeholder="输入 API 协议、平台或应用名…"></div><select class="filter-select" id="appPlatform"><option>全部平台</option><option>Android</option><option>SaaS</option><option>Self-host</option></select></div>
    <div class="app-grid" id="appGrid">${apps.map(a=>appCard(a)).join('')}</div>
    <section class="section"><div class="section-head"><div><h2>连接逻辑</h2><p>能否接入主要看 API 协议，而不是品牌 Logo。</p></div></div><div class="journey-grid"><div class="journey-card"><span class="n">STEP 01</span><h3>确认协议</h3><p>OpenAI-compatible / Anthropic / Gemini / 自定义 HTTP。</p></div><div class="journey-card"><span class="n">STEP 02</span><h3>填入 Base URL</h3><p>客户端支持自定义 Endpoint 时，通常只需要替换 Base URL 和 Key。</p></div><div class="journey-card"><span class="n">STEP 03</span><h3>测试模型能力</h3><p>工具调用、视觉、流式输出、Responses API 仍需要逐项验证。</p></div></div></section>
  </div>`;
}
function appCard(a){return `<article class="app-card" data-app="${esc(a.name.toLowerCase())}" data-platform="${esc(a.platform.toLowerCase())}"><span class="platform-label">${esc(a.platform)}</span><div class="app-icon">${esc(a.icon)}</div><h3>${esc(a.name)}</h3><p>${esc(a.desc)}</p><div class="tag-row">${a.features.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div><div class="compat"><b>COMPATIBLE</b>${a.protocols.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></article>`}

function comparePage(){
  const chosen=[...state.compare].map(id=>providers.find(p=>p.id===id)).filter(Boolean);
  if(!chosen.length) chosen.push(...providers.filter(p=>p.featured).slice(0,3));
  const rows=[['类型','type'],['地区','region'],['模型规模','modelCount'],['上游规模','providerCount'],['协议',p=>p.protocols.join(' / ')],['国内直连',p=>p.china?'支持/需实测':'跨境网络'],['Android 匹配',p=>p.android?'支持':'未重点适配'],['SaaS 匹配',p=>p.saas?'支持':'—'],['支付',p=>p.payments.join(' / ')],['价格策略','pricing'],['推广机会','affiliate'],['风险摘要','risk']];
  return `<div class="page"><div class="section-head"><div><div class="eyebrow"><span class="eyebrow-dot"></span>COMPARE</div><h2 style="margin-top:14px">API 对比器</h2><p>不做模糊“好坏排名”，只把协议、服务类型、支付、价格结构和应用兼容并排给你看。</p></div></div><div class="compare-table"><div class="compare-grid" style="--cols:${chosen.length}"><div class="compare-cell label">维度</div>${chosen.map(p=>`<div class="compare-cell head">${esc(p.name)}</div>`).join('')}${rows.map(([label,key])=>`<div class="compare-cell label">${label}</div>${chosen.map(p=>`<div class="compare-cell">${esc(typeof key==='function'?key(p):p[key])}</div>`).join('')}`).join('')}</div></div><div style="margin-top:14px" class="notice">价格与活动变化快；当前目录把“平台类型 / 协议 / 兼容性 / 推广状态”作为优先字段。价格及推广条款以平台官方页面为准。</div></div>`;
}

function calculatorPage(){
  const c=state.calc; const monthly=(c.input*c.inputPrice+c.output*c.outputPrice)*c.calls/1_000_000;
  return `<div class="page"><div class="section-head"><div><div class="eyebrow"><span class="eyebrow-dot"></span>COST CALCULATOR</div><h2 style="margin-top:14px">Token 成本估算</h2><p>填写输入、输出单价与调用量，估算每月 API 成本。</p></div></div><div class="calculator-shell"><div class="calc-panel"><div class="field-grid"><div class="field"><label>每次输入 Token <span>tokens</span></label><input data-calc="input" type="number" min="0" value="${c.input}"></div><div class="field"><label>每次输出 Token <span>tokens</span></label><input data-calc="output" type="number" min="0" value="${c.output}"></div></div><div class="field-grid"><div class="field"><label>输入价格 <span>$/1M tokens</span></label><input data-calc="inputPrice" type="number" min="0" step="0.01" value="${c.inputPrice}"></div><div class="field"><label>输出价格 <span>$/1M tokens</span></label><input data-calc="outputPrice" type="number" min="0" step="0.01" value="${c.outputPrice}"></div></div><div class="field"><label>月调用次数 <span>calls</span></label><input data-calc="calls" type="number" min="0" value="${c.calls}"></div><div class="notice" style="margin-top:18px">单价请参照平台最新报价填写，计算器不会自动获取实时价格。</div></div><div class="calc-result"><div class="eyebrow"><span class="eyebrow-dot"></span>ESTIMATED MONTHLY COST</div><div class="cost"><small>$</small>${monthly.toFixed(4)}</div><div class="cost-sub">按当前输入、输出与调用次数估算，不含平台附加费、缓存、Batch、长上下文阶梯价。</div><div class="cost-breakdown"><div><b>${(c.input*c.calls/1_000_000).toFixed(2)}M</b><span>INPUT TOKENS</span></div><div><b>${(c.output*c.calls/1_000_000).toFixed(2)}M</b><span>OUTPUT TOKENS</span></div><div><b>${c.calls.toLocaleString()}</b><span>CALLS / MONTH</span></div></div><div class="calc-note">VibeBase calculator · transparent formula</div></div></div></div>`;
}

function affiliatePage(){
  return `<div class="page"><section class="affiliate-hero"><div class="aff-intro"><div class="eyebrow"><span class="eyebrow-dot"></span>VIBEBASE ALLIANCE</div><h1>把 API 流量<br>变成收入。</h1><p>聚合“邀请返现、Credits 奖励、应用生态合作、渠道商务”四类推广机会。对状态冲突的平台直接标记待核验，不把历史活动伪装成当前返佣。</p><div class="aff-flow"><span class="flow-step">内容 / SEO / GEO</span><span class="flow-arrow">→</span><span class="flow-step">VibeBase 导航</span><span class="flow-arrow">→</span><span class="flow-step">API 注册</span><span class="flow-arrow">→</span><span class="flow-step">返佣 / 合作</span></div></div><div class="aff-widget"><div class="wallet-label">示例 · 你的推广收入仪表</div><div class="wallet-number"><small>¥</small> 8,420</div><div class="mini-chart">${[18,28,24,45,70,48,86,62,94,70,82,100].map(h=>`<span style="height:${h}%"></span>`).join('')}</div><div style="margin-top:18px;font-size:11px;font-weight:700">真实版接入 click_id → 注册 → 首充 → API 消费 → 佣金归因</div></div></section><section class="section"><div class="section-head"><div><h2>推广机会池</h2><p>目前先把已验证、待验证和信息冲突明确分开。</p></div></div><div class="affiliate-table"><div class="affiliate-row header"><div>平台</div><div>类型</div><div>奖励</div><div>可提现</div><div>状态</div></div>${affiliateRows.map(r=>`<div class="affiliate-row" title="${esc(r.note)}"><strong><a href="${esc(safeUrl(providers.find(p=>p.name.toLowerCase().includes(r.name.toLowerCase()))?.url))}" target="_blank" rel="noopener noreferrer">${esc(r.name)} ↗</a></strong><div>${esc(r.type)}</div><div>${esc(r.reward)}</div><div>${esc(r.cash)}</div><div><span class="aff-status ${r.state==='ok'?'ok':r.state==='warn'?'warn':''}">${r.state==='ok'?'已发现':r.state==='warn'?'待核验':'生态'}</span></div></div>`).join('')}</div></section><section class="section"><div class="section-head"><div><h2>联盟后台下一阶段</h2><p>当前目录已把收录推广机会与官方申请入口。</p></div></div><div class="journey-grid"><div class="journey-card"><span class="n">TRACK</span><h3>推广链接</h3><p>每个推广者生成 ref / click_id，记录来源、落地页与转化路径。</p></div><div class="journey-card"><span class="n">ATTRIBUTION</span><h3>充值归因</h3><p>通过回调/API/人工对账，把首充、复购与 API 消费归因到推广者。</p></div><div class="journey-card"><span class="n">PAYOUT</span><h3>佣金结算</h3><p>支持 Credits、现金 CPS、CPA、商务渠道四套结算模型。</p></div></div></section></div>`;
}

function render(){
  const route=state.route;
  app.innerHTML= route==='home'?home():route==='explore'?explore():route==='apps'?appsPage():route==='compare'?comparePage():route==='calculator'?calculatorPage():route==='affiliate'?affiliatePage():home();
  $$('.topnav a').forEach(a=>a.classList.toggle('active',a.dataset.route===route));
  bind(); renderDock(); if(route==='apps')filterApps();
}

function renderDock(){
  const chosen=[...state.compare].map(id=>providers.find(p=>p.id===id)).filter(Boolean);
  if(!chosen.length){compareDock.hidden=true;return}
  compareDock.hidden=false; compareDock.innerHTML=`<div class="dock-items">${chosen.map(p=>`<span class="dock-item">${esc(p.name)}</span>`).join('')}</div><button class="dock-clear" id="dockClear">清空</button><button class="dock-btn" id="dockCompare">对比 ${chosen.length} 家</button>`;
  $('#dockClear').onclick=()=>{state.compare.clear();render()}; $('#dockCompare').onclick=()=>setRoute('compare');
}

function bind(){
  $$('[data-route]').forEach(el=>el.onclick=e=>{e.preventDefault();setRoute(el.dataset.route)});
  $$('[data-provider]').forEach(el=>el.onclick=()=>openProvider(el.dataset.provider));
  $$('[data-compare]').forEach(el=>el.onclick=()=>toggleCompare(el.dataset.compare));
  $$('[data-scope]').forEach(el=>el.onclick=()=>{state.filters.scope=el.dataset.scope;state.filters.type='all';state.filters.verified=false;state.page=1;render()});
  $$('[data-page]').forEach(el=>el.onclick=()=>{state.page=Math.max(1,state.page+(el.dataset.page==='next'?1:-1));render();window.scrollTo({top:170,behavior:'smooth'})});
  $('#heroSearch')?.addEventListener('submit',e=>{e.preventDefault();state.filters.q=$('#heroQ').value;setRoute('explore')});
  $$('[data-quick]').forEach(el=>el.onclick=()=>{const q=el.dataset.quick; if(q==='Android'){state.filters.q='';state.filters.android=true;state.filters.china=false}else{state.filters.q=q;state.filters.android=false} setRoute('explore')});
  const search=$('#exploreQ');
  let searchTimer;
  const updateSearch=e=>{if(e.isComposing)return;const value=e.target.value,pos=e.target.selectionStart;clearTimeout(searchTimer);searchTimer=setTimeout(()=>{state.filters.q=value;state.page=1;render();const el=$('#exploreQ');el?.focus({preventScroll:true});el?.setSelectionRange(pos,pos)},100)};
  search?.addEventListener('input',updateSearch); search?.addEventListener('compositionend',updateSearch);
  $('#typeFilter')?.addEventListener('change',e=>{state.filters.type=e.target.value;state.page=1;render()});
  $('#androidFilter')?.addEventListener('click',()=>{state.filters.android=!state.filters.android;state.page=1;render()});
  $('#verifiedFilter')?.addEventListener('click',()=>{state.filters.verified=!state.filters.verified;state.page=1;render()});
  $('#chinaFilter')?.addEventListener('click',()=>{state.filters.china=!state.filters.china;state.page=1;render()});
  $$('[data-model]').forEach(el=>el.onchange=()=>{state.filters.model=el.checked?[...new Set([...state.filters.model,el.dataset.model])]:state.filters.model.filter(x=>x!==el.dataset.model);state.page=1;render()});
  $$('[data-protocol]').forEach(el=>el.onchange=()=>{state.filters.protocol=el.checked?[...new Set([...state.filters.protocol,el.dataset.protocol])]:state.filters.protocol.filter(x=>x!==el.dataset.protocol);state.page=1;render()});
  $('#appQ')?.addEventListener('input',filterApps); $('#appPlatform')?.addEventListener('change',filterApps);
  $$('[data-calc]').forEach(el=>el.oninput=()=>{state.calc[el.dataset.calc]=Math.max(0,Number(el.value)||0); const holder=document.createElement('div');holder.innerHTML=calculatorPage();$('.calc-result').innerHTML=holder.querySelector('.calc-result').innerHTML});
}
function filterApps(){const q=($('#appQ')?.value||'').toLowerCase(),p=($('#appPlatform')?.value||'全部平台').toLowerCase();$$('.app-card').forEach(c=>{const okQ=!q||c.textContent.toLowerCase().includes(q),okP=p==='全部平台'||c.dataset.platform.includes(p);c.style.display=okQ&&okP?'':'none'})}
function toggleCompare(id){if(state.compare.has(id))state.compare.delete(id);else if(state.compare.size<3)state.compare.add(id);else return toast('最多同时对比 3 家');render()}

function openProvider(id){
 const p=providers.find(x=>x.id===id); if(!p)return;
 modalLayer.classList.add('open');modalLayer.setAttribute('aria-hidden','false');
 modalLayer.innerHTML=`<div class="modal" role="dialog" aria-modal="true" aria-label="平台详情"><div class="modal-head"><div class="provider-logo">${esc(p.short)}</div><div><h2>${esc(p.name)}</h2><p>${esc(p.type)} · ${esc(p.region)} · ${p.official?'官方入口':p.verified?'已核验':'未验证线索'} · ${esc(p.fresh)}</p></div><button class="modal-close" id="modalClose">×</button></div><div class="modal-body"><div class="detail-grid"><div class="detail-block"><h4>服务定位</h4><p>${esc(p.desc)}</p></div><div class="detail-block"><h4>推广状态</h4><p>${esc(p.affiliate)}</p></div><div class="detail-block"><h4>模型家族</h4><div class="tag-row">${p.models.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></div><div class="detail-block"><h4>协议</h4><div class="tag-row">${p.protocols.map(x=>`<span class="tag">${esc(x)} compatible</span>`).join('')}</div></div><div class="detail-block"><h4>应用匹配</h4><p>${p.android?'✓ Android BYOK 客户端<br>':''}${p.saas?'✓ SaaS / Agent / Workflow':''}<br>${matchingApps(p).length} 个协议匹配应用<br>${matchingApps(p).map(a=>esc(a.name)).join(" / ") || "暂无已收录的协议匹配"}<br>实际功能需在客户端测试</p></div><div class="detail-block"><h4>支付 & 价格</h4><p>${esc(p.payments.join(' / '))}<br>${esc(p.pricing)}</p></div></div><div class="detail-block" style="margin-top:12px"><h4>API Endpoint</h4><div class="endpoint"><span>${esc(p.endpoint)}</span><button data-copy="${esc(p.endpoint)}" style="background:transparent;color:var(--accent);font-weight:800">复制</button></div></div>${p.rank||p.uptime!=null?`<div class="detail-block" style="margin-top:12px"><h4>索引附带字段</h4><p>${p.rank?`公开索引序号 #${p.rank}<br>`:''}${p.uptime!=null?`Uptime ${esc(p.uptime)}% · 延迟 ${esc(p.latencyMs??'—')}ms<br>`:''}${p.userRating!=null?`用户评分 ${esc(p.userRating)} / 5 (${esc(p.ratingCount||0)} 条)<br>`:''}${p.supportsRefund!=null?`退款：${p.supportsRefund?'有标记':'无标记'} · `:''}${p.supportsInvoice!=null?`发票：${p.supportsInvoice?'有标记':'无标记'}`:''}</p></div>`:''}<div class="notice" style="margin-top:12px"><b style="color:var(--ink)">${p.official?'使用提示':'风险提示'}：</b> ${esc(p.risk)}</div>${p.source?`<div class="source-line">数据来源：${esc(p.source)} ${p.sourceUrl?`<a href="${esc(safeUrl(p.sourceUrl))}" target="_blank" rel="noreferrer">查看来源 ↗</a>`:''}</div>`:''}<div style="display:flex;gap:10px;margin-top:16px"><a class="primary-btn" href="${esc(safeUrl(p.url))}" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;text-decoration:none">${p.official?'打开官方平台 ↗':'打开站点 / 来源 ↗'}</a><button class="soft-btn" id="modalApps">匹配应用</button><button class="soft-btn" id="modalCompare">加入对比</button></div></div></div>`;
 $('#modalApps').onclick=()=>{state.appProtocol=p.protocols[0]||'';closeModal();setRoute('apps')}; $('#modalClose').onclick=closeModal; modalLayer.onclick=e=>{if(e.target===modalLayer)closeModal()}; $('#modalCompare').onclick=()=>{toggleCompare(p.id);closeModal()}; $('[data-copy]')?.addEventListener('click',async e=>{await navigator.clipboard?.writeText(e.currentTarget.dataset.copy);toast('已复制 Endpoint')});
}
function closeModal(){modalLayer.classList.remove('open');modalLayer.setAttribute('aria-hidden','true')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function toast(msg){const t=document.createElement('div');t.textContent=msg;Object.assign(t.style,{position:'fixed',right:'20px',bottom:'90px',zIndex:200,background:'var(--ink)',color:'var(--bg)',padding:'12px 15px',borderRadius:'12px',fontSize:'12px',fontWeight:'700',boxShadow:'var(--shadow)'});document.body.appendChild(t);setTimeout(()=>t.remove(),1700)}

$('#themeBtn').onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('vibebase-theme',next)};
document.documentElement.dataset.theme=localStorage.getItem('vibebase-theme')||'';
$('#mobileMenuBtn').onclick=()=>{const open=$('.topnav').classList.toggle('mobile-open');$('#mobileMenuBtn').setAttribute('aria-expanded',String(open))};
$('#submitProviderBtn').onclick=()=>{modalLayer.classList.add('open');modalLayer.innerHTML=`<div class="modal" style="max-width:620px"><div class="modal-head"><div><h2>提交 API 平台</h2><p>生成平台资料，下载后可交给站点管理员收录。</p></div><button class="modal-close" id="modalClose">×</button></div><div class="modal-body"><div class="field"><label>平台名称</label><input placeholder="例如：Example API"></div><div class="field"><label>官网</label><input placeholder="https://"></div><div class="field"><label>类型</label><select><option>中转站</option><option>模型聚合</option><option>推理云</option><option>AI Gateway</option><option>开源自建</option></select></div><div class="field"><label>推广计划</label><input placeholder="返佣 / CPA / CPS / Credits / 商务合作"></div><button class="primary-btn" style="margin-top:18px" id="submitMock">下载平台资料</button></div></div>`;$('#modalClose').onclick=closeModal;$('#submitMock').onclick=()=>{const values=[...modalLayer.querySelectorAll('input,select')].map(el=>el.value.trim());if(!values[0]||safeUrl(values[1])==='#'){toast('请填写平台名称与有效官网');return}const blob=new Blob([JSON.stringify({name:values[0],url:values[1],type:values[2],affiliate:values[3]},null,2)],{type:'application/json;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='vibebase-provider.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);closeModal();toast('资料已下载；尚未提交到服务器')}};
$('#disclaimerBtn').onclick=()=>{modalLayer.classList.add('open');modalLayer.innerHTML=`<div class="modal" style="max-width:700px"><div class="modal-head"><div><h2>VibeBase 风险说明</h2><p>导航 ≠ 背书</p></div><button class="modal-close" id="modalClose">×</button></div><div class="modal-body"><div class="notice">第三方 API 中转与聚合平台的价格、上游来源、可用性、数据保留、退款和推广政策可能随时变化。VibeBase 应明确区分“已核验事实 / 平台自述 / 历史信息 / 待核验线索”，并保留最后核验时间。用户不应仅凭导航页进行大额充值或提交敏感 API Key。</div></div></div>`;$('#modalClose').onclick=closeModal};
window.addEventListener('hashchange',()=>{state.route=(location.hash||'#home').slice(1);render()});
state.route=(location.hash||'#home').slice(1);render();
loadRelayCatalog();
