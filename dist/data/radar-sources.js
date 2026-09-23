export const radarCheckedAt='2026-09-24';
export const radarSources=[
 {id:'apify',name:'Apify · X 每日采集',kind:'每月免费额度',quota:'Free 计划每月 $5，共享给整个账号',detail:'试点使用 LanceAPI X Scraper：Free 计划每个查询最多 15 条，$0.30 / 千条。每天 3 组查询；单次 Actor 费用上限 $0.03。新 Actor 尚待真实运行验证。',url:'https://apify.com/lance_api/x-tweet-scraper-api',pricing:'https://apify.com/pricing'},
 {id:'twitterapi',name:'TwitterAPI.io',kind:'一次性试用',quota:'注册赠送 $0.10，不是每月赠送',detail:'普通查询 $0.15 / 千条，空查询也可能计费。支持每日关键词搜索；需单独启用并设置每月请求数上限。',url:'https://twitterapi.io/',pricing:'https://twitterapi.io/pricing'},
 {id:'x-api',name:'X 官方 API',kind:'按量付费',quota:'普通帖子读取 $5 / 千条；无常规免费读取额度',detail:'已接入 Recent Search，每日一次、最多 10 条；需 Bearer Token、独立启用及每月请求上限。本版未实现持续流。',url:'https://docs.x.com/x-api/posts/search/introduction',pricing:'https://docs.x.com/x-api/getting-started/pricing'},
 {id:'apify-unlimited',name:'Apify Twitter Scraper Unlimited',kind:'托管爬虫',quota:'标准查询 $0.016 / 次，约 40 条后另计',detail:'每日一个关键词组，最多 40 条、单次 Actor 上限 $0.08。Free 账号仅演示模式，实际使用需满足 Actor 套餐要求；默认关闭。',url:'https://apify.com/apidojo/twitter-scraper-lite',pricing:'https://apify.com/apidojo/twitter-scraper-lite'},
 {id:'apify-v2',name:'Apify Tweet Scraper V2',kind:'批量回补',quota:'$0.40 / 千条；每查询至少 50 条要求',detail:'每周一一个关键词组，最多 50 条、单次 Actor 上限 $0.04；低结果查询可能不满足要求。不用于高频监测，默认关闭。',url:'https://apify.com/apidojo/tweet-scraper',pricing:'https://apify.com/apidojo/tweet-scraper'},
 {id:'twscrape',name:'twscrape',kind:'开源自部署',quota:'软件免费，账号会话与运行环境需自备',detail:'支持本地采集脚本与鉴权推送；本站不收集你的 X 密码或 Cookie。免费软件不等于零维护成本。',url:'https://github.com/vladkens/twscrape',pricing:'https://github.com/vladkens/twscrape'},
 {id:'twikit',name:'Twikit',kind:'开源自部署',quota:'软件免费，需自行维护登录状态',detail:'支持已有 Cookie 的本地采集与鉴权推送；与 twscrape 二选一即可。',url:'https://github.com/d60/twikit',pricing:'https://github.com/d60/twikit'}
];
export const radarQueries=[
 '(OpenAI OR Claude OR Gemini OR DeepSeek OR Qwen) (API OR release OR launch) -filter:retweets',
 '(OpenRouter OR 中转站 OR 模型API) (免费 OR 限免 OR 降价 OR pricing OR free) -filter:retweets',
 '(LLM OR 大模型) (tutorial OR 教程 OR workflow OR 攻略) -filter:retweets'
];
