// Turn reviewed local probe JSON and optional matching billing evidence into an import file.
import {readFileSync,writeFileSync} from 'node:fs';
import {priceCatalog} from '../dist/data/price-catalog.js';
const args=Object.fromEntries(process.argv.slice(2).map(x=>{const [k,...v]=x.replace(/^--/,'').split('=');return [k,v.join('=')];}));
if(!args.file||!args.sql)throw Error('Use --file=runs.json --sql=reviewed.sql [--billing=billing.json]');
const runs=JSON.parse(readFileSync(args.file)),billing=args.billing?JSON.parse(readFileSync(args.billing)):[];
if(!Array.isArray(runs)||runs.length>100||!Array.isArray(billing))throw Error('Invalid records');
for(const r of runs){
 if(!priceCatalog.sources.some(s=>s.id===r.sourceId)||!['catalog','inference'].includes(r.kind)||!/^[-a-f0-9]{36}$/.test(r.id))throw Error('Invalid source, kind or run ID');
 if(!Number.isInteger(r.requests)||r.requests<1||r.requests>20||!Number.isInteger(r.successes)||r.successes<0||r.successes>r.requests)throw Error('Invalid request counts');
 if(!Array.isArray(r.observations)||r.observations.length!==r.requests)throw Error('Preserve per-request observations');
 if(r.observations.filter(o=>o.success===true).length!==r.successes)throw Error('Success count disagrees with observations');
 if(r.kind==='catalog'&&(r.model!==null||r.ttft?.samples!==0||r.billing?.amount!=null))throw Error('Catalog samples cannot carry inference metrics or billing');
 for(const key of ['startedAt','endedAt'])if(!Number.isFinite(Date.parse(r[key])))throw Error('Invalid timestamp');
 const match=billing.filter(b=>b.runId===r.id);if(match.length>1)throw Error('Duplicate billing evidence');
 if(match.length){const b=match[0];if(r.kind!=='inference'||typeof b.amount!=='number'||!Number.isFinite(b.amount)||b.amount<0||!['USD','CNY','CREDIT'].includes(b.currency)||typeof b.evidence!=='string'||b.evidence.length<8||b.evidence.length>500)throw Error('Billing needs an inference run, amount, currency and redacted ledger reference');r.billing={amount:b.amount,currency:b.currency,evidence:'运营者核对账单：'+b.evidence};}
 if(!r.billing)r.billing={amount:null,currency:null,evidence:null};
}
const quote=s=>"'"+String(s).replaceAll("'","''")+"'";
writeFileSync(args.sql,runs.map(r=>'INSERT INTO probe_runs(id,source_id,kind,started_at,payload) VALUES ('+[r.id,r.sourceId,r.kind,r.startedAt,JSON.stringify(r)].map(quote).join(',')+') ON CONFLICT(id) DO UPDATE SET payload=excluded.payload;').join('\n')+'\n');
console.log('Prepared '+runs.length+' reviewed records; apply this SQL through the site operator’s D1 credentials.');
