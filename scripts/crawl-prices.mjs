import {writeFileSync} from 'node:fs';
import {parseQuery,collectPrices} from '../src/pricing/service.js';
import {sources} from '../src/pricing/sources.js';
const args=Object.fromEntries(process.argv.slice(2).map(arg=>{const [key,...v]=arg.replace(/^--/,'').split('=');return [key,v.join('=')];}));
const url=new URL('https://vibebase.vip/api/prices');
url.searchParams.set('model',args.model||'sol56');
url.searchParams.set('inputTokens',args['input-tokens']||'4000');
const selected=args.sources?args.sources.split(','):sources.map(s=>s.id);
let result;
for(let i=0;i<selected.length;i+=8){
 url.searchParams.set('sources',selected.slice(i,i+8).join(','));
 const batch=await collectPrices(parseQuery(url));
 if(!result)result={...batch,sources:[]};result.sources.push(...batch.sources);
 console.error(batch.sources.map(s=>s.name+': '+s.status+' ('+s.quotes.length+' rows)').join('\n'));
}
if(args.output)writeFileSync(args.output,JSON.stringify(result,null,2)+'\n');else console.log(JSON.stringify(result,null,2));
if(result.sources.every(s=>s.status==='error'))process.exitCode=1;
