// Public price snapshots. These are not inference tests or proof of deliverable quality.
export const deliveryRates=[
 {id:'flux',kind:'image',name:'FLUX.1 schnell · fal',model:'fal-ai/flux/schnell',channel:'fal',unit:'megapixel',price:.003,width:1024,height:1024,source:'https://fal.ai/models/fal-ai/flux/schnell',checkedAt:'2026-09-22',note:'每张图片的像素数向上取整到百万像素；文生图预算不代表商品一致性已验证。'},
 {id:'veo-lite',kind:'video',name:'Veo 3.1 Lite · Google',model:'veo-3.1-lite-generate-preview',channel:'Google 官方',unit:'second',price:.05,resolution:'720p',audio:true,clip:8,source:'https://ai.google.dev/gemini-api/docs/pricing',checkedAt:'2026-09-22',note:'720p，含生成音频；只对成功生成收费。预算不含剪辑、配乐版权或人工制作。'},
 {id:'veo-fast',kind:'video',name:'Veo 3.1 Fast · Google',model:'veo-3.1-fast-generate-preview',channel:'Google 官方',unit:'second',price:.10,resolution:'720p',audio:true,clip:8,source:'https://ai.google.dev/gemini-api/docs/pricing',checkedAt:'2026-09-22',note:'720p，含生成音频；只对成功生成收费。'},
 {id:'whisper-turbo',kind:'asr',name:'Whisper Large V3 Turbo · Groq',model:'whisper-large-v3-turbo',channel:'Groq',unit:'hour',price:.04,minSeconds:10,source:'https://console.groq.com/docs/speech-to-text',checkedAt:'2026-09-22',note:'多语言转写，不含翻译；每个请求至少按 10 秒计费。这里只估算音频转写费用。'},
 {id:'whisper',kind:'asr',name:'Whisper Large V3 · Groq',model:'whisper-large-v3',channel:'Groq',unit:'hour',price:.111,minSeconds:10,source:'https://console.groq.com/docs/speech-to-text',checkedAt:'2026-09-22',note:'多语言转写；每个请求至少按 10 秒计费。'},
 {id:'flash-lite',kind:'chat',name:'Gemini 2.5 Flash-Lite · Google',model:'gemini-2.5-flash-lite',channel:'Google 官方',unit:'tokens',input:.1,output:.4,source:'https://ai.google.dev/gemini-api/docs/pricing',checkedAt:'2026-09-22',note:'标准付费层文本输入/输出，输出包含思考 Token；未计免费额度、缓存优惠与搜索工具费。'}
];
export const deliveryKinds=[['image','100 张商品图'],['video','10 分钟视频'],['asr','1 小时转写'],['chat','1000 次客服对话']];
