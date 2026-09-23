export const radarCheckedAt='2026-09-23';
export const radarSources=[
 {id:'apify',name:'Apify · X 每日采集',kind:'每月免费额度',quota:'Free 计划每月 $5，共享给整个账号',detail:'试点使用 LanceAPI X Scraper：Free 计划每个查询最多 15 条，$0.30 / 千条。每天 3 组查询；单次 Actor 费用上限 $0.03。新 Actor 尚待真实运行验证。',url:'https://apify.com/lance_api/x-tweet-scraper-api',pricing:'https://apify.com/pricing'},
 {id:'twitterapi',name:'TwitterAPI.io',kind:'一次性试用',quota:'注册赠送 $0.10，不是每月赠送',detail:'普通查询 $0.15 / 千条，空查询也可能计费。本期不启用，避免试用耗尽后产生费用。',url:'https://twitterapi.io/',pricing:'https://twitterapi.io/pricing'},
 {id:'twscrape',name:'twscrape',kind:'开源自部署',quota:'软件免费，账号会话与运行环境需自备',detail:'支持导入采集结果；本站不收集你的 X 密码或 Cookie。免费软件不等于零维护成本。',url:'https://github.com/vladkens/twscrape',pricing:'https://github.com/vladkens/twscrape'},
 {id:'twikit',name:'Twikit',kind:'开源自部署',quota:'软件免费，需自行维护登录状态',detail:'支持导入采集结果；与 twscrape 二选一即可，无需重复抓取。',url:'https://github.com/d60/twikit',pricing:'https://github.com/d60/twikit'}
];
export const radarQueries=[
 '(OpenAI OR Claude OR Gemini OR DeepSeek OR Qwen) (API OR release OR launch) -filter:retweets',
 '(OpenRouter OR 中转站 OR 模型API) (免费 OR 限免 OR 降价 OR pricing OR free) -filter:retweets',
 '(LLM OR 大模型) (tutorial OR 教程 OR workflow OR 攻略) -filter:retweets'
];
