export const operationTypes=[
 {id:'outage',name:'渠道故障与恢复',priority:0,pattern:'故障|宕机|无法访问|502|503|outage|incident|degraded|恢复服务|resolved',action:'核对官方状态页，采样相关渠道，记录错误与恢复时间',route:'probes',fields:'涉及渠道、完整型号、地区、时间、错误类型、采样请求数'},
 {id:'migration',name:'下线与接口迁移',priority:0,pattern:'下线|弃用|迁移|停用|deprecated|deprecat|sunset|breaking change|retire',action:'核对下线日期和替代版本，更新迁移教程及受影响推荐',route:'models',fields:'旧版本 ID、替代版本、截止日期、SDK 与参数变化'},
 {id:'price',name:'模型价格变化',priority:1,pattern:'降价|涨价|pricing|price|discount|计费|倍率',action:'用价格 API 复核，比较同规格交付成本，再决定更新',route:'calculator/channels',fields:'渠道、模型 ID、分组、币种、计费单位、缓存价、生效时间'},
 {id:'free',name:'免费与限免',priority:1,pattern:'免费|限免|free tier|free model|free credit|赠送|赠金',action:'核对资格与截止日期，检查免费榜及过期活动',route:'boards/free',fields:'完整型号、免费额度、地区与账号限制、截止日期'},
 {id:'release',name:'新模型与版本',priority:1,pattern:'发布|上线|新模型|release|launch|introducing|preview|new model',action:'核对厂商文档、API 型号及任务能力，检查模型目录',route:'models',fields:'厂商、完整版本、API 型号、开放时间、能力与限制'},
 {id:'channel',name:'中转站覆盖变化',priority:1,pattern:'中转站|接入|支持.*模型|openrouter|relay|base_url|兼容',action:'复核渠道模型目录与版本别名，检查匹配结果',route:'calculator/channels',fields:'渠道域名、上架型号、模型 ID、分组、接口协议'},
 {id:'tutorial',name:'使用经验与教程',priority:2,pattern:'教程|攻略|tutorial|workflow|how to|提示词|prompt',action:'整理 CoVibe 选题，补齐步骤、版本和费用，安排复现',route:'covibe',fields:'任务、素材、模型版本、渠道、参数、步骤、费用、失败边界'},
 {id:'benchmark',name:'模型对比与测评',priority:2,pattern:'测评|评测|benchmark|对比|versus|evaluation',action:'检查测试方法与样本，再评估任务推荐和行业方案',route:'industries',fields:'任务、样本量、版本、测试方法、对照条件、失败样本'},
 {id:'demand',name:'用户需求与报错',priority:2,pattern:'报错|怎么|如何|哪家|哪个|error|which model|help|does not work',action:'归纳重复需求，补充筛选、FAQ 或教程选题',route:'models',fields:'任务、环境、预期结果、实际错误、已有解决方法'},
 {id:'competitor',name:'竞品与产品机会',priority:3,pattern:'竞品|功能|feature|dashboard|directory|comparison tool',action:'记录使用场景与可验证收益，纳入每周产品评审',route:'compare',fields:'功能、用户痛点、证据、适用范围、收益指标'}
];
export const operatingSchedule=[['morning','09:00','检查过去 24 小时线索，处理故障、下线、价格和限免'],['topics','14:00','筛选最多 3 个 CoVibe 选题，补充文档与复现步骤'],['evening','18:00','复核处理结果，导出日报，标明未解决事项'],['weekly','每周一次','复盘重复需求、教程反馈及产品改进候选']];
export function beijingDay(now=new Date()){return new Date(now.getTime()+8*3600000).toISOString().slice(0,10);}
export function checklistKey(id,now=new Date()){
 const day=beijingDay(now);if(id!=='weekly')return day+':'+id;
 const d=new Date(day+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10)+':weekly';
}
export function buildOperations(posts,now=new Date()){
 const tasks=new Map();
 for(const post of posts){
  const published=Date.parse(post.publishedAt);if(!Number.isFinite(published)||published>now.getTime()+300000||now.getTime()-published>30*86400000)continue;
  let url;try{url=new URL(post.url);}catch{continue;}
  if(url.protocol!=='https:'||url.username||url.password||!['x.com','twitter.com'].includes(url.hostname)||!/^\/[\w]{1,15}\/status\/\d{15,22}$/.test(url.pathname))continue;
  const matches=operationTypes.filter(t=>new RegExp(t.pattern,'i').test(post.text));
  for(const type of matches.length?matches:[operationTypes.find(t=>t.id==='demand')]){
   const id=post.id+':'+type.id;
   tasks.set(id,{id,post,type,priority:type.priority,recent:now.getTime()-published<=86400000});
  }
 }
 return [...tasks.values()].sort((a,b)=>a.priority-b.priority||b.post.publishedAt.localeCompare(a.post.publishedAt)||a.id.localeCompare(b.id));
}
export function validateReview(value){
 const statuses=['pending','reviewing','reviewed','done','ignored'];
 if(!statuses.includes(value.status))throw Error('处理状态无效');
 if(!['community','official','channel','reproduced'].includes(value.evidence))throw Error('请选择依据类型');
 if(['reviewed','done'].includes(value.status)){
  let u;try{u=new URL(value.url);}catch{throw Error('请填写核验依据链接');}
  if(!['https:','http:'].includes(u.protocol)||u.username||u.password)throw Error('依据链接无效');
  if(value.note.trim().length<10)throw Error('请记录核验结论和适用范围（至少 10 字）');
 }
 if(value.status==='ignored'&&value.note.trim().length<2)throw Error('请填写忽略原因');
 if(value.evidence==='reproduced'&&(!value.testedAt||value.testedAt>beijingDay()||!/^\d{4}-\d{2}-\d{2}$/.test(value.testedAt)||!Number.isFinite(Date.parse(value.testedAt))||new Date(value.testedAt).toISOString().slice(0,10)!==value.testedAt))throw Error('请填写有效的实际复现日期');
 if(value.note.length>2000||value.url.length>1000)throw Error('记录过长');
 if(/sk-[a-z\d_-]{12,}|Bearer\s+\S{12,}/i.test(value.note))throw Error('请移除凭证后保存');
 return {...value,updatedAt:new Date().toISOString()};
}
export function operationDigest(tasks,reviews,now=new Date()){
 const day=beijingDay(now),today=tasks.filter(t=>t.recent),done=today.filter(t=>reviews[t.id]?.status==='done'),open=today.filter(t=>!['done','ignored'].includes(reviews[t.id]?.status));
 return `# VibeBase 运营日报 · ${day}（北京时间）\n\n过去24小时：${new Set(today.map(t=>t.post.id)).size} 条原帖，${today.length} 项建议动作；本机记录已处理 ${done.length} 项，待处理 ${open.length} 项。\n这是规则分类与本机人工记录，不代表网站内容已自动更新或全站运营统计。\n\n`+today.map(t=>`## P${t.priority} · ${t.type.name}\n- 原帖：${t.post.url}\n- 建议：${t.type.action}\n- 状态：${reviews[t.id]?.status||'pending'}\n- 人工依据：${reviews[t.id]?.url||'待补充'}\n- 人工结论：${reviews[t.id]?.note||'待核验'}\n`).join('\n');
}
