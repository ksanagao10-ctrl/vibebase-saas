import {radarQueries} from '../dist/data/radar-sources.js';
export const collectors=[
 {id:'apify',key:'APIFY_TOKEN',flag:'APIFY_FREE_PLAN_CONFIRMED',actor:'lance_api~x-tweet-scraper-api',build:'1.0.22',items:45,charge:.03},
 {id:'apify-unlimited',key:'APIFY_TOKEN',flag:'APIFY_UNLIMITED_ENABLED',actor:'apidojo~twitter-scraper-lite',items:40,charge:.08},
 {id:'apify-v2',key:'APIFY_TOKEN',flag:'APIFY_V2_ENABLED',actor:'apidojo~tweet-scraper',items:50,charge:.04,weekly:true},
 {id:'twitterapi',key:'TWITTERAPI_KEY',flag:'TWITTERAPI_ENABLED',limit:'TWITTERAPI_MONTHLY_REQUEST_LIMIT'},
 {id:'x-api',key:'X_BEARER_TOKEN',flag:'X_API_ENABLED',limit:'X_API_MONTHLY_REQUEST_LIMIT'}
];
export function sourceEnabled(source,env){return Boolean(env[source.key])&&env[source.flag]==='true'&&(!source.limit||(Number.isInteger(Number(env[source.limit]))&&Number(env[source.limit])>0&&Number(env[source.limit])<=31));}
export function requestFor(source,env,now=new Date()){
 const index=Math.floor(now.getTime()/86400000)%radarQueries.length,q=radarQueries[index],since=new Date(now.getTime()-2*86400000).toISOString().slice(0,10);
 if(source.actor){
  const url=new URL(`https://api.apify.com/v2/acts/${source.actor}/runs`);
  for(const [key,value] of Object.entries({timeout:120,memory:256,maxItems:source.items,maxTotalChargeUsd:source.charge,...(source.build?{build:source.build}:{})}))url.searchParams.set(key,value);
  const input=source.id==='apify'?{searchQueries:radarQueries.map(x=>x+' since:'+since),sort:'latest',maxResults:15}:{searchTerms:[q+' since:'+new Date(now.getTime()-(source.weekly?7:2)*86400000).toISOString().slice(0,10)],sort:'Latest',maxItems:source.items};
  return {url:url.href,init:{method:'POST',headers:{Authorization:`Bearer ${env.APIFY_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify(input)}};
 }
 if(source.id==='twitterapi'){
  const url=new URL('https://api.twitterapi.io/twitter/tweet/advanced_search');url.searchParams.set('query',q+' since_time:'+Math.floor((now.getTime()-2*86400000)/1000));url.searchParams.set('queryType','Latest');
  return {url:url.href,init:{headers:{'X-API-Key':env.TWITTERAPI_KEY}}};
 }
 const url=new URL('https://api.x.com/2/tweets/search/recent');url.searchParams.set('query',q.replace('-filter:retweets','-is:retweet'));url.searchParams.set('max_results','10');url.searchParams.set('tweet.fields','created_at,author_id');url.searchParams.set('expansions','author_id');url.searchParams.set('user.fields','username');url.searchParams.set('start_time',new Date(now.getTime()-2*86400000).toISOString());
 return {url:url.href,init:{headers:{Authorization:`Bearer ${env.X_BEARER_TOKEN}`}}};
}
export function extractRows(source,payload){
 if(source==='x-api'){
  if(payload.errors?.length&&!payload.data)throw Error('X returned errors');
  if(!payload.data&&payload.meta?.result_count!==0)throw Error('Invalid X response');
  const users=new Map((payload.includes?.users||[]).map(u=>[u.id,u.username]));
  return (payload.data||[]).map(t=>({...t,url:users.has(t.author_id)?`https://x.com/${users.get(t.author_id)}/status/${t.id}`:null}));
 }
 if(source==='twitterapi'){if(!Array.isArray(payload.tweets))throw Error('Invalid TwitterAPI response');return payload.tweets;}
 if(!Array.isArray(payload))throw Error('Invalid dataset');return payload;
}
