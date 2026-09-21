// Public endpoints only. No browser credentials or customer API keys are forwarded.
export const sources = [
  {id:'openrouter',name:'OpenRouter',adapter:'openrouter',url:'https://openrouter.ai/api/v1/models'},
  {id:'modelsell',name:'Modelsell',adapter:'newapi',url:'https://modelsell.com/api/pricing'},
  {id:'lietio',name:'Lietio',adapter:'newapi',url:'https://lietio.com/api/pricing'},
  {id:'apiko',name:'Apiko',adapter:'newapi',url:'https://a-piko.top/api/pricing'},
  {id:'linkapi',name:'LinkAPI',adapter:'newapi',url:'https://linkapi.ai/api/pricing'},
  {id:'zooo',name:'Zooo AI',adapter:'newapi',url:'https://zoooai.com/api/pricing'},
  {id:'gemai',name:'哈基米',adapter:'newapi',url:'https://api.gemai.cc/api/pricing'},
  {id:'dzzi',name:'大肘子',adapter:'newapi',url:'https://api.dzzi.ai/api/pricing'},
  {id:'xycai',name:'XycAi 星道智能',adapter:'newapi',url:'https://xycai.us/api/pricing'}
];
export const FRESH_SECONDS=300;
export const RETAIN_SECONDS=86400;
export const SCHEMA_VERSION=1;
