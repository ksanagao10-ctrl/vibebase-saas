export const providers = [
  {
    id:'openrouter',name:'OpenRouter',short:'OR',type:'国际 Router',region:'全球',verified:true,featured:true,
    desc:'统一接口连接大量模型与上游 Provider，适合多模型、自动回退与开发者集成。',
    models:['GPT','Claude','Gemini','DeepSeek','Qwen','Llama'],protocols:['OpenAI'],payments:['Card','Crypto'],china:false,
    modelCount:'500+',providerCount:'80+',pricing:'平台费 5.5%',affiliate:'暂无公开现金返佣',affiliateState:'neutral',
    appMatches:12,android:true,saas:true,endpoint:'https://openrouter.ai/api/v1',risk:'平台为聚合路由，实际数据策略与可用性还取决于所选上游 Provider。',fresh:'2026-09-17',url:'https://openrouter.ai/'
  },
  {
    id:'302ai',name:'302.AI',short:'302',type:'国内聚合',region:'中国',verified:true,featured:true,
    desc:'按量付费的 AI 聚合平台，覆盖聊天、图片、视频、语音与多类工具。',
    models:['GPT','Claude','Gemini','DeepSeek','Qwen','GLM'],protocols:['OpenAI'],payments:['支付宝','微信'],china:true,
    modelCount:'700+',providerCount:'多源',pricing:'按量 / 按次',affiliate:'邀请返现（比例需登录核验）',affiliateState:'ok',
    appMatches:10,android:true,saas:true,endpoint:'https://api.302.ai/v1',risk:'第三方聚合平台；调用链、退款与上游来源应按实际产品页面核验。',fresh:'2026-09-17',url:'https://302.ai/'
  },
  {
    id:'aihubmix',name:'AIHubMix',short:'AH',type:'国内聚合',region:'中国/全球',verified:true,featured:true,
    desc:'多模型统一 API，覆盖文本、图像、视频、TTS、STT、Embedding 与 Rerank。',
    models:['GPT','Claude','Gemini','DeepSeek','Qwen'],protocols:['OpenAI'],payments:['支付宝','Card'],china:true,
    modelCount:'800+',providerCount:'多源',pricing:'按模型计费',affiliate:'应用生态合作',affiliateState:'ok',
    appMatches:14,android:true,saas:true,endpoint:'https://aihubmix.com/v1',risk:'模型与供应渠道随时间变化，生产使用前建议核验具体模型的上游与数据条款。',fresh:'2026-09-17',url:'https://aihubmix.com/'
  },
  {
    id:'zenmux',name:'ZenMux',short:'ZM',type:'多协议 Router',region:'全球',verified:true,featured:true,
    desc:'同时面向 OpenAI、Anthropic、Gemini 协议做统一路由，适合 Coding Agent 与多 SDK 场景。',
    models:['GPT','Claude','Gemini','DeepSeek'],protocols:['OpenAI','Anthropic','Gemini'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'多源',pricing:'按模型计费',affiliate:'合资格新用户奖励 $5 Credits',affiliateState:'ok',
    appMatches:9,android:true,saas:true,endpoint:'https://zenmux.ai/api/v1',risk:'推荐奖励有资格条件；活动与额度政策可能变化，应以实时规则为准。',fresh:'2026-09-17',url:'https://zenmux.ai/'
  },
  {
    id:'siliconflow',name:'硅基流动',short:'SF',type:'推理云',region:'中国',verified:true,featured:true,
    desc:'国内推理服务平台，覆盖国产与开源模型，并提供文本、图像、语音、视频等能力。',
    models:['DeepSeek','Qwen','GLM','Kimi','MiniMax','Llama'],protocols:['OpenAI'],payments:['支付宝','微信'],china:true,
    modelCount:'60+',providerCount:'自营/合作',pricing:'按模型计费',affiliate:'待商务核验',affiliateState:'warn',
    appMatches:11,android:true,saas:true,endpoint:'https://api.siliconflow.cn/v1',risk:'更接近推理服务商而非纯中转；不同模型由不同算力与部署渠道提供。',fresh:'2026-09-17',url:'https://siliconflow.cn/'
  },
  {
    id:'dmxapi',name:'DMXAPI',short:'DX',type:'国内中转',region:'中国',verified:true,featured:false,
    desc:'提供 OpenAI / Anthropic / Gemini SDK 兼容接入，适合已有 SDK 快速切换 Base URL。',
    models:['GPT','Claude','Gemini','DeepSeek'],protocols:['OpenAI','Anthropic','Gemini'],payments:['支付宝','微信'],china:true,
    modelCount:'多模型',providerCount:'多源',pricing:'按模型计费',affiliate:'待核验',affiliateState:'warn',
    appMatches:8,android:true,saas:true,endpoint:'https://www.dmxapi.cn/v1',risk:'第三方中转；建议对上游来源、数据保留和故障赔付做额外核验。',fresh:'2026-09-17',url:'https://www.dmxapi.cn/'
  },
  {
    id:'cubence',name:'Cubence',short:'CU',type:'多线路中转',region:'全球',verified:true,featured:false,
    desc:'覆盖主流闭源与国产模型，并提供多网络 Endpoint，适合对线路和协议有要求的开发者。',
    models:['GPT','Claude','Gemini','DeepSeek','GLM','Kimi','Qwen'],protocols:['OpenAI','Anthropic','Gemini'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'多源',pricing:'按模型计费',affiliate:'待核验',affiliateState:'warn',
    appMatches:8,android:true,saas:true,endpoint:'https://api.cubence.com/v1',risk:'不同网络入口的稳定性、地域可达性可能不同，需按用户所在地实测。',fresh:'2026-09-17',url:'https://cubence.com/'
  },
  {
    id:'cometapi',name:'CometAPI',short:'CO',type:'国际聚合',region:'全球',verified:true,featured:false,
    desc:'Unified AI API 聚合平台，提供 OpenAI-compatible 接入和多模型调用。',
    models:['GPT','Claude','Gemini','DeepSeek'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'多源',pricing:'按模型计费',affiliate:'商务合作待核验',affiliateState:'warn',
    appMatches:8,android:true,saas:true,endpoint:'https://api.cometapi.com/v1',risk:'第三方统一接口，生产接入前应确认所需模型的 SLA 与数据处理条款。',fresh:'2026-09-17',url:'https://www.cometapi.com/'
  },
  {
    id:'requesty',name:'Requesty',short:'RQ',type:'AI Gateway',region:'全球',verified:true,featured:false,
    desc:'面向团队的模型 Gateway，提供路由、缓存、fallback、BYOK 与可观测性。',
    models:['GPT','Claude','Gemini','Llama'],protocols:['OpenAI','Anthropic'],payments:['Card'],china:false,
    modelCount:'600+',providerCount:'多源',pricing:'PAYG + 5%',affiliate:'商务合作待核验',affiliateState:'warn',
    appMatches:7,android:false,saas:true,endpoint:'https://router.requesty.ai/v1',risk:'主要面向开发团队与生产工作负载，不等同于普通充值型中转站。',fresh:'2026-09-17',url:'https://www.requesty.ai/'
  },
  {
    id:'litellm',name:'LiteLLM',short:'LL',type:'开源网关',region:'自建',verified:true,featured:false,
    desc:'开源统一 LLM Gateway，可把多家 Provider 接到一个兼容接口，适合企业与自建中转。',
    models:['GPT','Claude','Gemini','DeepSeek','Qwen','Llama'],protocols:['OpenAI'],payments:['自建'],china:true,
    modelCount:'100+',providerCount:'100+',pricing:'开源 / 自建成本',affiliate:'无',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'自定义部署 /v1',risk:'稳定性、安全与合规由部署者负责，需要自行维护密钥、日志和上游账户。',fresh:'2026-09-17',url:'https://www.litellm.ai/'
  },
  {
    id:'proaiapi',name:'ProAI API',short:'PA',type:'国内中转',region:'中国',verified:false,featured:false,
    desc:'国内多模型中转样本，公开价格采集目录显示覆盖模型数量较多。',
    models:['GPT','Claude','Gemini','DeepSeek'],protocols:['OpenAI'],payments:['支付宝','微信'],china:true,
    modelCount:'800*',providerCount:'待核',pricing:'按模型计费',affiliate:'待核验',affiliateState:'warn',
    appMatches:7,android:true,saas:true,endpoint:'以平台控制台为准',risk:'未完成官方资料逐项核验；当前仅作为导航数据库种子，不建议仅凭本站信息充值。',fresh:'2026-09-17',url:'https://proaiapi.tech/'
  },
  {
    id:'poloapi',name:'PoloAPI',short:'PO',type:'国内中转',region:'中国',verified:false,featured:false,
    desc:'国内多模型中转样本，适合纳入价格与支付方式持续监测。',
    models:['GPT','Claude','Gemini','DeepSeek'],protocols:['OpenAI'],payments:['支付宝','微信'],china:true,
    modelCount:'500+*',providerCount:'待核',pricing:'按模型计费',affiliate:'待核验',affiliateState:'warn',
    appMatches:7,android:true,saas:true,endpoint:'以平台控制台为准',risk:'未完成官方资料逐项核验；需要继续核对主体、上游与退款规则。',fresh:'2026-09-17',url:'https://poloapi.top/'
  },
  {
    id:'official-openai',name:'OpenAI API',short:'OA',type:'官方模型 API',region:'全球',verified:true,official:true,featured:true,
    desc:'OpenAI 官方开发者 API，覆盖 Responses、Chat、Realtime、图像、音频、Embedding、Batch 等能力。',
    models:['GPT'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:18,android:true,saas:true,endpoint:'https://api.openai.com/v1',risk:'官方 API；具体模型、地区可用性与账户要求以官方控制台为准。',fresh:'2026-09-17',url:'https://platform.openai.com/',source:'官方文档',sourceUrl:'https://platform.openai.com/docs/api-reference'
  },
  {
    id:'official-anthropic',name:'Anthropic Claude API',short:'AN',type:'官方模型 API',region:'全球',verified:true,official:true,featured:true,
    desc:'Anthropic 官方 Claude API，核心为 Messages API，并提供 Batch、Files、Agent 等能力。',
    models:['Claude'],protocols:['Anthropic'],payments:['Card'],china:false,
    modelCount:'Claude 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:16,android:true,saas:true,endpoint:'https://api.anthropic.com',risk:'官方 API；地区支持与账户资格以 Anthropic 最新政策为准。',fresh:'2026-09-17',url:'https://platform.claude.com/',source:'官方文档',sourceUrl:'https://platform.claude.com/docs/en/api/overview'
  },
  {
    id:'official-gemini',name:'Google Gemini API',short:'GM',type:'官方模型 API',region:'全球',verified:true,official:true,featured:true,
    desc:'Google AI for Developers 官方 Gemini API，支持文本、多模态、图像、工具调用、实时交互与 Interactions API。',
    models:['Gemini'],protocols:['Gemini'],payments:['Card'],china:false,
    modelCount:'Gemini 系列',providerCount:'官方',pricing:'免费层 / 官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:15,android:true,saas:true,endpoint:'https://generativelanguage.googleapis.com',risk:'官方 API；不同模型与地区的配额、计费层级不同。',fresh:'2026-09-17',url:'https://ai.google.dev/gemini-api',source:'官方文档',sourceUrl:'https://ai.google.dev/api'
  },
  {
    id:'official-xai',name:'xAI API',short:'xAI',type:'官方模型 API',region:'全球',verified:true,official:true,featured:true,
    desc:'xAI 官方 Grok API，REST 接口兼容 OpenAI，覆盖 Responses、Chat、图片、视频、语音、Files、Batch 等。',
    models:['Grok'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'Grok 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:15,android:true,saas:true,endpoint:'https://api.x.ai',risk:'官方 API；部分能力、区域端点和模型支持范围不同。',fresh:'2026-09-17',url:'https://console.x.ai/',source:'官方文档',sourceUrl:'https://docs.x.ai/developers/rest-api-reference/inference'
  },
  {
    id:'official-deepseek',name:'DeepSeek API',short:'DS',type:'官方模型 API',region:'中国/全球',verified:true,official:true,featured:true,
    desc:'DeepSeek 官方 API，同时支持 OpenAI 与 Anthropic 兼容格式，适合聊天、Responses、Agent 与编码工具。',
    models:['DeepSeek'],protocols:['OpenAI','Anthropic'],payments:['人民币','Card'],china:true,
    modelCount:'DeepSeek 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:18,android:true,saas:true,endpoint:'https://api.deepseek.com',risk:'官方 API；模型名称和价格会更新。',fresh:'2026-09-17',url:'https://platform.deepseek.com/',source:'官方文档',sourceUrl:'https://api-docs.deepseek.com/'
  },
  {
    id:'official-mistral',name:'Mistral AI API',short:'MI',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'Mistral 官方 Studio API，提供 Chat、Agents、Document AI、OCR、Audio、Embedding 等能力。',
    models:['Mistral'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'Mistral 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'https://api.mistral.ai/v1',risk:'官方 API。',fresh:'2026-09-17',url:'https://console.mistral.ai/',source:'官方文档',sourceUrl:'https://docs.mistral.ai/api'
  },
  {
    id:'official-cohere',name:'Cohere API',short:'CH',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'Cohere 官方 API，覆盖 Command、Aya、Chat、Embed、Rerank、文档解析与企业检索。',
    models:['Cohere','Aya'],protocols:['Cohere'],payments:['Card'],china:false,
    modelCount:'Command / Aya',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.cohere.com/v2',risk:'官方 API。',fresh:'2026-09-17',url:'https://dashboard.cohere.com/',source:'官方文档',sourceUrl:'https://docs.cohere.com/'
  },
  {
    id:'official-perplexity',name:'Perplexity API',short:'PX',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'Perplexity 官方开发者 API，重点面向联网问答、搜索增强与 Sonar 系列模型。',
    models:['Sonar'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'Sonar 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.perplexity.ai',risk:'官方 API。',fresh:'2026-09-17',url:'https://www.perplexity.ai/settings/api',source:'官方文档',sourceUrl:'https://docs.perplexity.ai/'
  },
  {
    id:'official-qwen',name:'阿里云百炼 · Qwen',short:'QW',type:'官方云模型平台',region:'中国/全球多地域',verified:true,official:true,featured:true,
    desc:'阿里云百炼官方模型平台，以千问为核心，同时提供多家第三方模型；支持 OpenAI 与 Anthropic 兼容端点和多地域部署。',
    models:['Qwen','DeepSeek','Kimi','GLM','MiniMax'],protocols:['OpenAI','Anthropic'],payments:['支付宝','企业账户'],china:true,
    modelCount:'大量模型',providerCount:'官方云平台',pricing:'官方云计费',affiliate:'云市场/渠道体系',affiliateState:'neutral',
    appMatches:18,android:true,saas:true,endpoint:'https://dashscope.aliyuncs.com/compatible-mode/v1',risk:'不同地域 Base URL 与 API Key 绑定；生产建议使用业务空间专属域名。',fresh:'2026-09-17',url:'https://bailian.console.aliyun.com/',source:'官方文档',sourceUrl:'https://help.aliyun.com/zh/model-studio/base-url'
  },
  {
    id:'official-zhipu',name:'智谱 BigModel · GLM',short:'GLM',type:'官方模型 API',region:'中国',verified:true,official:true,featured:true,
    desc:'智谱官方开放平台，提供 GLM 系列文本、多模态、搜索、Agent 与工具调用能力。',
    models:['GLM'],protocols:['OpenAI'],payments:['支付宝','企业账户'],china:true,
    modelCount:'GLM 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:15,android:true,saas:true,endpoint:'https://open.bigmodel.cn/api/paas/v4',risk:'官方 API；模型版本持续更新。',fresh:'2026-09-17',url:'https://open.bigmodel.cn/',source:'官方文档',sourceUrl:'https://docs.bigmodel.cn/'
  },
  {
    id:'official-kimi-cn',name:'Kimi API · 中国',short:'KM',type:'官方模型 API',region:'中国',verified:true,official:true,featured:true,
    desc:'月之暗面 Kimi 中国开放平台，兼容 OpenAI API，支持长上下文、视觉、视频输入、工具调用与搜索。',
    models:['Kimi'],protocols:['OpenAI'],payments:['支付宝','企业账户'],china:true,
    modelCount:'Kimi 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:16,android:true,saas:true,endpoint:'https://api.moonshot.cn/v1',risk:'中国与国际开放平台账户、Key 不互通。',fresh:'2026-09-17',url:'https://platform.kimi.com/',source:'官方文档',sourceUrl:'https://www.kimi.com/help/kimi-api/api-troubleshooting'
  },
  {
    id:'official-kimi-global',name:'Kimi API · Global',short:'KMI',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'Moonshot AI 国际开放平台，提供 Kimi 系列模型的官方 API。',
    models:['Kimi'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'Kimi 系列',providerCount:'官方',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:14,android:true,saas:true,endpoint:'https://api.moonshot.ai/v1',risk:'国际与中国平台账户、Key 独立。',fresh:'2026-09-17',url:'https://platform.kimi.ai/',source:'官方文档',sourceUrl:'https://www.kimi.ai/help/kimi-api/api-overview'
  },
  {
    id:'official-minimax',name:'MiniMax API',short:'MM',type:'官方模型 API',region:'全球',verified:true,official:true,featured:true,
    desc:'MiniMax 官方开放平台，覆盖文本、语音、图像、视频、音乐，并提供 OpenAI 与 Anthropic 兼容接口。',
    models:['MiniMax','Hailuo'],protocols:['OpenAI','Anthropic'],payments:['Card'],china:false,
    modelCount:'多模态系列',providerCount:'官方',pricing:'PAYG / Token Plan',affiliate:'Developer Program',affiliateState:'neutral',
    appMatches:16,android:true,saas:true,endpoint:'https://api.minimax.io/v1',risk:'不同套餐 Key 与按量 Key 可能不互通。',fresh:'2026-09-17',url:'https://platform.minimax.io/',source:'官方文档',sourceUrl:'https://platform.minimax.io/docs/api-reference/text-openai-api'
  },
  {
    id:'official-doubao',name:'火山方舟 · 豆包',short:'DB',type:'官方云模型平台',region:'中国',verified:true,official:true,featured:true,
    desc:'字节跳动火山方舟官方模型平台，豆包 Seed、Seedance 等模型通过统一 Ark API 提供推理。',
    models:['Doubao','Seedance'],protocols:['OpenAI'],payments:['企业账户'],china:true,
    modelCount:'豆包/视频系列',providerCount:'官方云平台',pricing:'官方云计费',affiliate:'火山渠道体系',affiliateState:'neutral',
    appMatches:14,android:true,saas:true,endpoint:'https://ark.cn-beijing.volces.com/api/v3',risk:'部分模型需创建接入点或按地域配置。',fresh:'2026-09-17',url:'https://console.volcengine.com/ark/',source:'官方文档',sourceUrl:'https://www.volcengine.com/docs/82379/1795150'
  },
  {
    id:'official-hunyuan',name:'腾讯混元 API',short:'HY',type:'官方模型 API',region:'中国',verified:true,official:true,featured:false,
    desc:'腾讯混元官方 API，支持文本、Embedding、翻译、生图等，并提供 OpenAI/Anthropic 兼容接入。',
    models:['Hunyuan'],protocols:['OpenAI','Anthropic'],payments:['企业账户'],china:true,
    modelCount:'混元系列',providerCount:'官方',pricing:'官方云计费',affiliate:'腾讯云渠道体系',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'https://api.hunyuan.cloud.tencent.com/v1',risk:'腾讯文档提示能力正逐步迁移至 TokenHub，新购模型以最新入口为准。',fresh:'2026-09-17',url:'https://cloud.tencent.com/product/hunyuan',source:'官方文档',sourceUrl:'https://cloud.tencent.com/document/product/1729/111007'
  },
  {
    id:'official-qianfan',name:'百度千帆 API',short:'BD',type:'官方云模型平台',region:'中国',verified:true,official:true,featured:false,
    desc:'百度智能云千帆官方 API，提供模型推理、Responses、Agent、搜索、语音、图像、视频与 OCR 等能力。',
    models:['ERNIE','Qwen','DeepSeek'],protocols:['OpenAI'],payments:['企业账户'],china:true,
    modelCount:'多模型',providerCount:'官方云平台',pricing:'官方云计费',affiliate:'百度云渠道体系',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'https://qianfan.baidubce.com/v2',risk:'千帆同时提供自研与第三方模型，需区分具体模型供应方。',fresh:'2026-09-17',url:'https://console.bce.baidu.com/qianfan/',source:'官方文档',sourceUrl:'https://cloud.baidu.com/doc/qianfan-api/s/Dmba8k71y'
  },
  {
    id:'official-spark',name:'讯飞星火 API',short:'SP',type:'官方模型 API',region:'中国',verified:true,official:true,featured:false,
    desc:'讯飞星火官方 HTTP API，兼容 OpenAI SDK，并提供推理、知识库、语音及多类企业 AI 能力。',
    models:['Spark'],protocols:['OpenAI'],payments:['企业账户'],china:true,
    modelCount:'Spark 系列',providerCount:'官方',pricing:'官方计费',affiliate:'讯飞开放平台生态',affiliateState:'neutral',
    appMatches:12,android:true,saas:true,endpoint:'https://spark-api-open.xf-yun.com/v1',risk:'不同版本可能使用不同路径，例如 X2 使用 /x2/。',fresh:'2026-09-17',url:'https://www.xfyun.cn/services/sparkapi',source:'官方文档',sourceUrl:'https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html'
  },
  {
    id:'official-sensenova',name:'商汤 SenseNova API',short:'SN',type:'官方模型 API',region:'中国',verified:true,official:true,featured:false,
    desc:'商汤日日新官方 API，覆盖融合模态、实时交互、文生图和角色模型。',
    models:['SenseNova'],protocols:['SenseNova'],payments:['企业账户'],china:true,
    modelCount:'SenseNova 系列',providerCount:'官方',pricing:'官方计费',affiliate:'商务合作',affiliateState:'neutral',
    appMatches:8,android:true,saas:true,endpoint:'https://api.sensenova.cn/v1',risk:'官方 API。',fresh:'2026-09-17',url:'https://platform.sensenova.cn/',source:'官方文档',sourceUrl:'https://platform.sensenova.cn/product/APIService/document'
  },
  {
    id:'official-mimo',name:'Xiaomi MiMo API',short:'XM',type:'官方模型 API',region:'中国',verified:true,official:true,featured:false,
    desc:'小米 MiMo 官方开放平台，兼容 OpenAI 与 Anthropic 两套主流 API 格式。',
    models:['MiMo'],protocols:['OpenAI','Anthropic'],payments:['人民币'],china:true,
    modelCount:'MiMo 系列',providerCount:'官方',pricing:'按量付费',affiliate:'—',affiliateState:'neutral',
    appMatches:12,android:true,saas:true,endpoint:'https://api.xiaomimimo.com/v1',risk:'官方 API；Anthropic 兼容端点为 /anthropic。',fresh:'2026-09-17',url:'https://mimo.mi.com/',source:'官方文档',sourceUrl:'https://mimo.mi.com/docs/zh-CN/quick-start/summary/first-api-call'
  },
  {
    id:'official-nvidia-nim',name:'NVIDIA NIM API',short:'NV',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'NVIDIA 官方 NIM 托管 API 与可自部署推理微服务，覆盖大量开放模型，支持 OpenAI 兼容接口。',
    models:['Llama','DeepSeek','Qwen','Mistral'],protocols:['OpenAI','Anthropic'],payments:['Card','Enterprise'],china:false,
    modelCount:'大量开放模型',providerCount:'NVIDIA',pricing:'官方平台计费',affiliate:'NVIDIA Partner',affiliateState:'neutral',
    appMatches:14,android:true,saas:true,endpoint:'https://integrate.api.nvidia.com/v1',risk:'托管 API 与自部署 NIM 的计费、数据路径不同。',fresh:'2026-09-17',url:'https://build.nvidia.com/',source:'官方文档',sourceUrl:'https://docs.api.nvidia.com/nim/re/reference/llm-apis'
  },
  {
    id:'official-groq',name:'GroqCloud API',short:'GQ',type:'官方推理平台',region:'全球',verified:true,official:true,featured:true,
    desc:'Groq 官方云推理 API，主打低延迟，并提供 OpenAI-compatible Chat、Responses、Audio、Batch 等接口。',
    models:['Llama','GPT-OSS','Whisper'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'Groq',pricing:'官方计费',affiliate:'生态合作',affiliateState:'neutral',
    appMatches:15,android:true,saas:true,endpoint:'https://api.groq.com/openai/v1',risk:'托管的是多家开放模型，不等同模型原厂 API。',fresh:'2026-09-17',url:'https://console.groq.com/',source:'官方文档',sourceUrl:'https://console.groq.com/docs/api-reference'
  },
  {
    id:'official-cerebras',name:'Cerebras Inference',short:'CB',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'Cerebras 官方云推理服务，提供 OpenAI 风格的高速 Chat/Completions API。',
    models:['GPT-OSS','Llama'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'多模型',providerCount:'Cerebras',pricing:'官方计费',affiliate:'—',affiliateState:'neutral',
    appMatches:12,android:true,saas:true,endpoint:'https://api.cerebras.ai/v1',risk:'推理平台，不等同开放模型的模型原厂。',fresh:'2026-09-17',url:'https://cloud.cerebras.ai/',source:'官方文档',sourceUrl:'https://inference-docs.cerebras.ai/quickstart'
  },
  {
    id:'official-together',name:'Together AI',short:'TG',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'Together AI 官方推理平台，提供开放模型推理、微调、Embedding、图像等 API。',
    models:['Llama','Qwen','DeepSeek','Mistral'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'大量开放模型',providerCount:'Together',pricing:'官方计费',affiliate:'Startup / Partner',affiliateState:'neutral',
    appMatches:14,android:true,saas:true,endpoint:'https://api.together.xyz/v1',risk:'托管多家开放模型，具体模型所有者不同。',fresh:'2026-09-17',url:'https://api.together.ai/',source:'官方文档',sourceUrl:'https://docs.together.ai/'
  },
  {
    id:'official-fireworks',name:'Fireworks AI',short:'FW',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'Fireworks 官方推理与部署平台，覆盖语言、图像、Embedding、专属部署和模型管理。',
    models:['Llama','Qwen','DeepSeek','Mistral'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'大量开放模型',providerCount:'Fireworks',pricing:'官方计费',affiliate:'Partner Network',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'https://api.fireworks.ai/inference/v1',risk:'托管多家开放模型，模型与部署方式需分别确认。',fresh:'2026-09-17',url:'https://fireworks.ai/',source:'官方文档',sourceUrl:'https://docs.fireworks.ai/api-reference/introduction'
  },
  {
    id:'official-huggingface',name:'Hugging Face Inference Providers',short:'HF',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'Hugging Face 官方统一 Inference Providers，通过一个 HF Token 调用多家推理供应商和数百个模型。',
    models:['Llama','Qwen','DeepSeek','GLM','Mistral','Cohere'],protocols:['OpenAI'],payments:['Card'],china:false,
    modelCount:'数百模型',providerCount:'多 Provider',pricing:'Provider 原价体系',affiliate:'HF 生态',affiliateState:'neutral',
    appMatches:15,android:true,saas:true,endpoint:'https://router.huggingface.co/v1',risk:'这是统一代理层，实际推理由所选 Provider 完成。',fresh:'2026-09-17',url:'https://huggingface.co/docs/inference-providers/index',source:'官方文档',sourceUrl:'https://huggingface.co/docs/inference-providers/index'
  },
  {
    id:'official-bedrock',name:'Amazon Bedrock',short:'AWS',type:'官方云模型平台',region:'全球多地域',verified:true,official:true,featured:true,
    desc:'AWS 官方生成式 AI 模型平台，通过 bedrock-runtime 统一调用 Anthropic、Amazon、Meta、OpenAI、DeepSeek、Qwen、Mistral、xAI 等模型。',
    models:['Claude','Llama','DeepSeek','Qwen','Mistral','Grok'],protocols:['Bedrock','OpenAI','Anthropic'],payments:['AWS'],china:false,
    modelCount:'大量模型',providerCount:'AWS Marketplace',pricing:'AWS 计费',affiliate:'AWS Partner',affiliateState:'neutral',
    appMatches:11,android:false,saas:true,endpoint:'bedrock-runtime.{region}.amazonaws.com',risk:'区域与模型可用性差异明显，需 AWS IAM 与区域配置。',fresh:'2026-09-17',url:'https://aws.amazon.com/bedrock/',source:'官方文档',sourceUrl:'https://docs.aws.amazon.com/bedrock/latest/userguide/apis.html'
  },
  {
    id:'official-foundry',name:'Microsoft Foundry',short:'MS',type:'官方云模型平台',region:'全球多地域',verified:true,official:true,featured:true,
    desc:'Microsoft 官方模型与 Agent 平台，OpenAI v1-compatible 路由可访问 Azure OpenAI 及由 Azure 销售的多家模型。',
    models:['GPT','Claude','DeepSeek','Llama','Grok'],protocols:['OpenAI','Anthropic'],payments:['Azure'],china:false,
    modelCount:'大量模型',providerCount:'Microsoft / Partners',pricing:'Azure 计费',affiliate:'Microsoft Partner',affiliateState:'neutral',
    appMatches:12,android:false,saas:true,endpoint:'https://<resource>.openai.azure.com/openai/v1',risk:'需要 Azure 资源和模型部署；不同区域可用模型不同。',fresh:'2026-09-17',url:'https://ai.azure.com/',source:'官方文档',sourceUrl:'https://learn.microsoft.com/en-us/azure/foundry/how-to/integrate-with-other-apps'
  },
  {
    id:'official-vertex',name:'Google Vertex AI',short:'VX',type:'官方云模型平台',region:'全球多地域',verified:true,official:true,featured:false,
    desc:'Google Cloud 官方企业 AI 平台，可部署 Gemini 与 Model Garden 中的多家开放/合作模型。',
    models:['Gemini','Llama','Mistral','开放模型'],protocols:['Vertex','OpenAI'],payments:['Google Cloud'],china:false,
    modelCount:'大量模型',providerCount:'Google Cloud',pricing:'GCP 计费',affiliate:'Google Cloud Partner',affiliateState:'neutral',
    appMatches:11,android:false,saas:true,endpoint:'区域化 Vertex AI Endpoint',risk:'需要 GCP 项目、区域与 IAM 配置。',fresh:'2026-09-17',url:'https://cloud.google.com/vertex-ai',source:'官方文档',sourceUrl:'https://cloud.google.com/vertex-ai/generative-ai/docs'
  },
  {
    id:'official-replicate',name:'Replicate API',short:'RP',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'Replicate 官方托管推理平台，按模型运行文本、图像、视频、音频等开源和商业模型。',
    models:['开放模型','Image','Video','Audio'],protocols:['Replicate'],payments:['Card'],china:false,
    modelCount:'大量模型',providerCount:'Replicate / Model authors',pricing:'按运行计费',affiliate:'—',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.replicate.com/v1',risk:'不同模型由不同作者/版本提供，接口与价格并非完全统一。',fresh:'2026-09-17',url:'https://replicate.com/',source:'官方平台',sourceUrl:'https://replicate.com/docs/reference/http'
  },
  {
    id:'official-deepinfra',name:'DeepInfra',short:'DI',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'DeepInfra 官方推理云，提供开放模型、Embedding、图像等服务，并提供 OpenAI-compatible API。',
    models:['Llama','Qwen','DeepSeek','Mistral'],protocols:['OpenAI'],payments:['Card','Crypto'],china:false,
    modelCount:'大量开放模型',providerCount:'DeepInfra',pricing:'官方平台计费',affiliate:'—',affiliateState:'neutral',
    appMatches:13,android:true,saas:true,endpoint:'https://api.deepinfra.com/v1/openai',risk:'托管开放模型，不等同模型原厂。',fresh:'2026-09-17',url:'https://deepinfra.com/',source:'官方平台',sourceUrl:'https://deepinfra.com/docs'
  },
  {
    id:'official-sambanova',name:'SambaNova Cloud',short:'SV',type:'官方推理平台',region:'全球',verified:true,official:true,featured:false,
    desc:'SambaNova 官方云推理平台，为多种开放权重模型提供高性能 API。',
    models:['Llama','Qwen','DeepSeek'],protocols:['OpenAI'],payments:['Card','Enterprise'],china:false,
    modelCount:'多模型',providerCount:'SambaNova',pricing:'官方平台计费',affiliate:'商务合作',affiliateState:'neutral',
    appMatches:10,android:true,saas:true,endpoint:'https://api.sambanova.ai/v1',risk:'托管开放模型，不等同模型原厂。',fresh:'2026-09-17',url:'https://cloud.sambanova.ai/',source:'官方平台',sourceUrl:'https://docs.sambanova.ai/'
  }
,
  {
    id:'official-ai21',name:'AI21 Studio · Jamba',short:'A21',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'AI21 Labs 官方 API，提供 Jamba 系列语言模型与企业 AI 能力。',
    models:['Jamba'],protocols:['OpenAI'],payments:['Card','Enterprise'],china:false,
    modelCount:'Jamba 系列',providerCount:'AI21 Labs',pricing:'官方计费',affiliate:'商务合作',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.ai21.com/studio/v1',risk:'模型版本与弃用计划会更新，生产使用应锁定明确版本。',fresh:'2026-09-17',url:'https://www.ai21.com/',source:'官方文档',sourceUrl:'https://docs.ai21.com/'
  },
  {
    id:'official-writer',name:'WRITER API · Palmyra',short:'WR',type:'官方模型 API',region:'全球',verified:true,official:true,featured:false,
    desc:'WRITER 官方 API，提供 Palmyra 系列企业语言模型及 Agent 平台能力。',
    models:['Palmyra'],protocols:['OpenAI'],payments:['Enterprise'],china:false,
    modelCount:'Palmyra 系列',providerCount:'WRITER',pricing:'官方计费',affiliate:'商务合作',affiliateState:'neutral',
    appMatches:8,android:true,saas:true,endpoint:'https://api.writer.com/v1',risk:'企业产品与模型版本更新较快，需以当前 API 文档为准。',fresh:'2026-09-17',url:'https://writer.com/',source:'官方文档',sourceUrl:'https://dev.writer.com/'
  },
  {
    id:'official-naver-clova',name:'NAVER CLOVA Studio',short:'NV',type:'官方模型 API',region:'韩国/亚洲',verified:true,official:true,featured:false,
    desc:'NAVER Cloud 官方 HyperCLOVA 系列 API 平台，提供生成、调优、Router 等 REST API。',
    models:['HyperCLOVA X'],protocols:['CLOVA'],payments:['NAVER Cloud'],china:false,
    modelCount:'HyperCLOVA 系列',providerCount:'NAVER Cloud',pricing:'官方云计费',affiliate:'NAVER Cloud Partner',affiliateState:'neutral',
    appMatches:6,android:true,saas:true,endpoint:'https://clovastudio.stream.ntruss.com/',risk:'区域、账号和服务申请要求需按 NAVER Cloud 当前规则确认。',fresh:'2026-09-17',url:'https://www.ncloud.com/product/aiService/clovaStudio',source:'官方文档',sourceUrl:'https://api.ncloud-docs.com/docs/en/ai-naver-clovastudio-summary'
  },
  {
    id:'official-upstage',name:'Upstage API · Solar',short:'UP',type:'官方模型 API',region:'韩国/全球',verified:true,official:true,featured:false,
    desc:'Upstage 官方 API，提供 Solar 语言模型以及文档解析、抽取、Embedding 等能力。',
    models:['Solar'],protocols:['OpenAI'],payments:['Card','Enterprise'],china:false,
    modelCount:'Solar + Document AI',providerCount:'Upstage',pricing:'官方计费',affiliate:'商务合作',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.upstage.ai/v1',risk:'不同产品 Endpoint 和计费单位不同，需按具体服务核验。',fresh:'2026-09-17',url:'https://www.upstage.ai/',source:'官方平台',sourceUrl:'https://console.upstage.ai/api-keys'
  },
  {
    id:'official-01ai',name:'01.AI API · Yi',short:'01',type:'官方模型 API',region:'中国/全球',verified:true,official:true,featured:false,
    desc:'零一万物官方 Yi 系列 API 平台，提供 OpenAI-compatible Chat Completions 与模型列表接口。',
    models:['Yi'],protocols:['OpenAI'],payments:['平台账户'],china:true,
    modelCount:'Yi 系列',providerCount:'01.AI',pricing:'官方计费',affiliate:'待核',affiliateState:'neutral',
    appMatches:10,android:true,saas:true,endpoint:'https://api.01.ai/v1',risk:'模型与平台商业策略可能变化，使用前核验当前可用模型。',fresh:'2026-09-17',url:'https://platform.01.ai/',source:'官方文档',sourceUrl:'https://platform.01.ai/docs'
  },
  {
    id:'official-baichuan',name:'百川智能 API',short:'BC',type:'官方模型 API',region:'中国',verified:true,official:true,featured:false,
    desc:'百川智能官方开放平台 API，提供 Chat Completions、文件、知识库等接口。',
    models:['Baichuan'],protocols:['OpenAI'],payments:['人民币充值'],china:true,
    modelCount:'Baichuan 系列',providerCount:'百川智能',pricing:'官方计费',affiliate:'待核',affiliateState:'neutral',
    appMatches:9,android:true,saas:true,endpoint:'https://api.baichuan-ai.com/v1',risk:'当前可用模型及速率限制需以官方开放平台实时文档为准。',fresh:'2026-09-17',url:'https://platform.baichuan-ai.com/',source:'官方文档',sourceUrl:'https://platform.baichuan-ai.com/docs/api'
  }

]

export const apps = [
  {id:'android-byok',name:'VibeKey Android',icon:'VK',platform:'Android',desc:'VibeBase 规划中的通用 BYOK 客户端：自定义 Base URL、Key、模型列表。',protocols:['OpenAI','Anthropic','Gemini'],features:['Chat','Vision','Search','Prompt'],status:'规划内'},
  {id:'chatbox',name:'Chatbox',icon:'CB',platform:'Android / Desktop',desc:'适合连接 OpenAI-compatible API 的聊天客户端。',protocols:['OpenAI'],features:['Chat','Vision','BYOK'],status:'第三方'},
  {id:'lobechat',name:'LobeChat',icon:'LB',platform:'Web / PWA',desc:'开源聊天与模型前端，可用于多模型与自托管场景。',protocols:['OpenAI'],features:['Chat','Agents','Plugins'],status:'开源'},
  {id:'nextchat',name:'NextChat',icon:'NC',platform:'Web / PWA',desc:'轻量开源聊天前端，适合快速绑定兼容 API。',protocols:['OpenAI'],features:['Chat','Prompt','BYOK'],status:'开源'},
  {id:'dify',name:'Dify',icon:'DF',platform:'SaaS / Self-host',desc:'用于 Workflow、Agent、知识库与多模型应用开发。',protocols:['OpenAI','Anthropic'],features:['Workflow','RAG','Agent'],status:'SaaS'},
  {id:'openwebui',name:'Open WebUI',icon:'OW',platform:'Web / Self-host',desc:'可自托管的 AI 前端，可统一接入兼容模型服务。',protocols:['OpenAI'],features:['Chat','RAG','Tools'],status:'开源'},
  {id:'n8n',name:'n8n',icon:'n8',platform:'SaaS / Self-host',desc:'自动化与 Agent 工作流，可通过 HTTP 或模型节点连接 API。',protocols:['OpenAI','Anthropic'],features:['Workflow','Agent','Automation'],status:'SaaS'},
  {id:'coze',name:'Coze / 扣子',icon:'CZ',platform:'SaaS',desc:'Bot 与 Agent 平台，适合工作流、插件和知识库场景。',protocols:['Platform'],features:['Agent','Workflow','RAG'],status:'SaaS'}
]

export const affiliateRows = [
  {name:'302.AI',type:'邀请返现',reward:'比例需登录核验',cash:'可能',state:'ok',note:'帮助中心仍保留邀请返现入口；历史曾公布最高 10%，当前比例需重新核验。'},
  {name:'ZenMux',type:'推荐奖励',reward:'$5 Credits',cash:'额度',state:'ok',note:'符合条件的新用户推荐活动；以实时资格条款为准。'},
  {name:'AIHubMix',type:'应用生态',reward:'合作 / 折扣',cash:'合作',state:'ok',note:'更适合 APP 生态与渠道合作，不等同普通现金 CPS。'},
  {name:'OpenRouter',type:'生态合作',reward:'暂无公开现金 Affiliate',cash:'—',state:'neutral',note:'适合做模型/应用生态导流；现金推广需另行核验。'},
  {name:'CometAPI',type:'待核验',reward:'商务确认',cash:'待核',state:'warn',note:'作为招商线索进入待核验池。'},
  {name:'OhMyGPT',type:'Referral',reward:'公开信息冲突',cash:'暂停/待核',state:'warn',note:'历史 Referral 与“奖励暂停”信息同时存在，必须实时核验后展示。'}
]
