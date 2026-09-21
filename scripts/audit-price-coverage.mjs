// Audit saved public responses without making inference calls or using account credentials.
// Usage: node scripts/audit-price-coverage.mjs /path/to/scan-directory [--update]
// Input: sources.json [{id,name,url}] and <id>.json raw public /api/pricing responses.
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {priceCatalog as catalog} from '../dist/data/price-catalog.js';
import {normalize} from '../src/pricing/adapters.js';
const folder=process.argv[2];if(!folder)throw Error('Specify a directory containing public pricing snapshots');
const scanned=JSON.parse(readFileSync(resolve(folder,'sources.json'))),payloads=new Map();
for(const source of catalog.sources){const record=scanned.find(r=>r.url===source.url);if(record)payloads.set(source.id,JSON.parse(readFileSync(resolve(folder,record.id+'.json'))));}
const report=[];
for(const model of catalog.models){
 const listed=[],comparable=[],nominal=[];
 for(const source of catalog.sources){const payload=payloads.get(source.id);if(!payload)continue;const result=normalize(payload,source,model);
  if(result.matched)listed.push(source.id);
  if(result.quotes.some(q=>q.unit!=='catalog_unit'))comparable.push(source.id);
  if(result.quotes.some(q=>q.unit==='catalog_unit'))nominal.push(source.id);
 }
 model.listedSources=listed;model.comparableSources=comparable;
 report.push({id:model.id,name:model.name,category:model.category,listed:listed.length,comparable:comparable.length,nominal:nominal.length,listedSources:listed,comparableSources:comparable});
}
for(const category of catalog.categories){const order=[...category.models];category.models.sort((a,b)=>catalog.models.find(m=>m.id===b).listedSources.length-catalog.models.find(m=>m.id===a).listedSources.length||order.indexOf(a)-order.indexOf(b));}
if(process.argv.includes('--update'))writeFileSync(new URL('../dist/data/price-catalog.js',import.meta.url),'export const priceCatalog = '+JSON.stringify(catalog,null,2)+';\n');
writeFileSync(resolve(folder,'coverage.json'),JSON.stringify({checkedAt:catalog.checkedAt,sourceCount:catalog.sources.length,models:report},null,2)+'\n');
console.log(catalog.categories.map(c=>c.name+': '+c.models.map(id=>{const r=report.find(r=>r.id===id);return r.name+' '+r.comparable+'/'+r.listed;}).join(', ')).join('\n'));
