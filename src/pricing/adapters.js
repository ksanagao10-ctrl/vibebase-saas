// Deliberately restricted parser: upstream billing expressions are DATA, never executable code.
const number = v => (typeof v==='number'||typeof v==='string'&&v.trim()!=='')&&Number.isFinite(Number(v))&&Number(v)>=0 ? Number(v) : null;
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o||{},k);
function linear(expr){
 const result={p:0,c:0,cr:0,cc:0};
 for(const term of expr.trim().split('+')){
  const m=term.trim().match(/^(p|c|cr|cc)\s*\*\s*(\d+(?:\.\d+)?)$/);
  if(!m||own(result,'seen_'+m[1]))return null;
  result[m[1]]=Number(m[2]);result['seen_'+m[1]]=true;
 }
 if(!result.seen_p||!result.seen_c)return null;
 return {input:result.p,output:result.c};
}
export function parseTierExpression(expr,inputTokens){
 if(typeof expr!=='string'||expr.length>3000)return null;
 const m=expr.trim().match(/^len\s*(<=|<)\s*(\d+)\s*\?\s*tier\(\s*"[^"\\]{1,100}"\s*,\s*([^()]+)\)\s*:\s*tier\(\s*"[^"\\]{1,100}"\s*,\s*([^()]+)\)$/);
 if(!m)return null;
 const low=linear(m[3]),high=linear(m[4]);if(!low||!high)return null;
 const threshold=Number(m[2]),lower=m[1]==='<='?inputTokens<=threshold:inputTokens<threshold;
 return {...(lower?low:high),tier:lower?'标准上下文':'长上下文',threshold,condition:'单次输入 '+(lower?m[1]:m[1]==='<='?'>':'>=')+' '+threshold+' Token'};
}
function base(source,row,group=''){
 return {sourceId:source.id,channel:source.name,source:source.url,modelId:row.model_name||row.id,group};
}
export function normalizeNewApi(payload,source,model,{inputTokens=4000}={}){
 if(payload?.success!==true||!Array.isArray(payload.data)||payload.data.length>20000)throw Error('价格目录格式不受支持');
 const rows=payload.data.filter(r=>model.aliases.includes(r.model_name));
 const quotes=[],issues=[];
 for(const row of rows){
  const groups=Array.isArray(row.enable_groups)?row.enable_groups.filter(g=>typeof g==='string'):[];
  if(!groups.length){issues.push({modelId:row.model_name,reason:'未公布可用分组'});continue;}
  for(const group of [...new Set(groups)].slice(0,100)){
   const common=base(source,row,group);
   const fail=reason=>issues.push({...common,reason});
   const ratio=number(payload.group_ratio?.[group]);
   if(ratio===null){fail('缺少分组倍率；不默认按 1 倍估价');continue;}
   if(own(payload.group_model_ratio?.[group],row.model_name)||Array.isArray(payload.pricing_groups)&&payload.pricing_groups.length){
    fail('站点自定义分组 / 充值折扣公式待适配，未套用标准倍率');continue;
   }
   const quotaType=number(row.quota_type);
   let rates=null,unit='tokens',note='标准倍率；无缓存命中。';
   if(row.billing_mode==='tiered_expr'){
    rates=parseTierExpression(row.billing_expr,inputTokens);
    if(!rates){fail('复杂计费表达式尚不能可靠换算');continue;}
    note=rates.condition+'；当前采用'+rates.tier+'价，无缓存命中。';
   }else if(row.billing_expr||row.billing_mode&&!['ratio','price',''].includes(row.billing_mode)){
    fail('未知计费规则，未估算');continue;
   }else if(quotaType===0){
    const mr=number(row.model_ratio),cr=number(row.completion_ratio);
    if(mr===null||cr===null){fail('输入或输出倍率缺失');continue;}
    rates={input:mr*2,output:mr*cr*2};
   }else if(quotaType===1){
    const price=number(row.model_price);
    if(price===null){fail('按次价格缺失');continue;}
    rates={perRequest:price};unit='request';note='按请求收费；不推断每次对应图片数量、秒数或分辨率。';
   }else{fail('未知计费类型');continue;}
   if(unit==='tokens'&&!model.text){fail('多模态 Token / 专项计费待适配；不能当作普通文本报价');continue;}
   const details=typeof payload.usable_group?.[group]==='string'?payload.usable_group[group].slice(0,800):'分组资格需在站方账户确认';
   const output={...common,currency:'CREDIT_USD',unit,groupRatio:ratio,note,conditions:details,
    identity:'仅核对渠道声明的型号，未实测底层模型身份',input:rates.input===undefined?null:rates.input*ratio,output:rates.output===undefined?null:rates.output*ratio,perRequest:rates.perRequest===undefined?null:rates.perRequest*ratio};
   if([output.input,output.output,output.perRequest].some(v=>v!==null&&!Number.isFinite(v))){fail('异常报价数值');continue;}
   quotes.push(output);
  }
 }
 return {quotes,issues,matched:rows.length};
}
function applies(rule,tokens,now){
 const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
 if(rule.min_prompt_tokens!==undefined&&tokens<Number(rule.min_prompt_tokens))return false;
 if(rule.utc_days&&!rule.utc_days.includes(days[now.getUTCDay()]))return false;
 if(rule.utc_start!==undefined&&rule.utc_end!==undefined){
  const current=now.getUTCHours()*100+now.getUTCMinutes(),start=Number(rule.utc_start),end=Number(rule.utc_end)||2400;
  if(!(current>=start&&current<end))return false;
 }
 return true;
}
export function normalizeOpenRouter(payload,source,model,{inputTokens=4000,now=new Date()}={}){
 if(!Array.isArray(payload?.data)||payload.data.length>20000)throw Error('价格目录格式不受支持');
 const rows=payload.data.filter(r=>model.aliases.includes(r.id)),quotes=[],issues=[];
 for(const row of rows){
  let pricing={...row.pricing};
  const overrides=pricing.overrides||[];
  if(!Array.isArray(overrides)){issues.push({...base(source,row),reason:'未知阶梯结构'});continue;}
  const allowed=['min_prompt_tokens','utc_days','utc_start','utc_end','prompt','completion','input_cache_read','input_cache_write','input_cache_write_1h','image','audio','input_audio_cache'];
  if(overrides.some(r=>Object.keys(r).some(k=>!allowed.includes(k)))){issues.push({...base(source,row),reason:'新的计费阶梯需复核'});continue;}
  for(const rule of overrides)if(applies(rule,inputTokens,now))pricing={...pricing,...rule};
  const input=number(pricing.prompt),output=number(pricing.completion);
  if(input===null||output===null||!Number.isFinite(input*1e6)||!Number.isFinite(output*1e6)||!model.text){issues.push({...base(source,row),reason:'未取得可比的文本单价；多模态另核'});continue;}
  quotes.push({...base(source,row),currency:'USD',unit:'tokens',input:input*1e6,output:output*1e6,perRequest:null,
   note:'聚合目录起价，实际路由可能更贵；按当前 UTC 时段与单次输入长度选择阶梯，无缓存命中。',conditions:'工具、缓存存储、充值手续费和重试另计。',identity:'目录型号匹配，未进行推理实测'});
 }
 return {quotes,issues,matched:rows.length};
}
export function normalize(payload,source,model,options){return source.adapter==='openrouter'?normalizeOpenRouter(payload,source,model,options):normalizeNewApi(payload,source,model,options);}
