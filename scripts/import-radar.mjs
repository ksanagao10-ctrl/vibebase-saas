// Normalize local exports without uploading passwords or X cookies.
// Usage: node scripts/import-radar.mjs twscrape export.json output.sql
import {readFileSync,writeFileSync} from 'node:fs';
import {normalizePosts} from '../src/radar.js';
const [source,input,output]=process.argv.slice(2);
if(!['twscrape','twikit','apify'].includes(source)||!input||!output||input===output)throw Error('Usage: node scripts/import-radar.mjs twscrape export.json output.sql');
const text=readFileSync(input,'utf8');if(text.length>2000000)throw Error('File too large');
let rows;try{rows=JSON.parse(text);}catch{rows=text.trim().split('\n').map(line=>JSON.parse(line));}
const posts=normalizePosts(rows,source);if(!posts.length)throw Error('No valid recent AI posts; no SQL written');
const quoted=JSON.stringify(posts).replace(/'/g,"''");
// This explicit import replaces the current snapshot. Review before applying.
writeFileSync(output,`-- Replace radar snapshot with ${posts.length} validated posts. Review before applying.\nINSERT INTO app_config(key,value) VALUES('radar:items','${quoted}') ON CONFLICT(key) DO UPDATE SET value=excluded.value;\n`,{mode:0o600});
console.log(`Prepared ${posts.length} posts. Review the SQL before applying to D1. No credentials included.`);
