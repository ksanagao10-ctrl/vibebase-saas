# Free X collection pilot

Verified 2026-09-23: https://apify.com/pricing offers $5/month on Free. It is shared with other account usage. The pilot Actor https://apify.com/lance_api/x-tweet-scraper-api explicitly supports 15 results per input on Free, at $0.30/1,000 results. This is a new community Actor, not yet live-tested with the owner's credential. Its free allowance is not the same as Apify's monthly budget. Apidojo V2 is intentionally excluded because of Free/API and monitoring restrictions. TwitterAPI.io offers $0.10 signup credit, not a recurring free allowance; not enabled.

## Activation

1. Keep the Apify account on Free, with no upgrade or auto-recharge. Check remaining account usage in the Apify console. Do not use a paid-plan account for this free-only pilot.
2. Configure `APIFY_TOKEN` as a Cloudflare Worker **Secret** for `vibebase-saas`. Never put it in the frontend, git, a URL, or chat. Use a limited token where available that can run this Actor, inspect its runs, and read its datasets.
3. Set server-side `APIFY_FREE_PLAN_CONFIRMED=true` only after checking the plan. This is an operator attestation, not an automatic subscription check.
4. Existing EVIDENCE_DB / app_config is reused under `radar:*` keys; no feedback records or salt are read or changed.
5. The next 30-minute Cron starts the first daily run. Subsequent invocations poll it. Verify successful Actor run and `/api/radar`, then visit `/#radar`. Actor build 1.0.22 is pinned. If retired or incompatible, review the replacement before changing it.

## Cost controls

Three keyword groups, `maxResults:15`, max 45 items, `maxTotalChargeUsd:0.03`, timeout 120 seconds. One atomic D1 reservation per UTC day, including uncertain and failed starts. No same-day retry, pagination, account rotation, automatic upgrade, recharge, or fallback to paid providers. Public GET does not start or poll Apify. Actor charge limit is not a guarantee about all storage/platform charges; the Free account's provider-side allowance stop is required. Daily reservation keys are retained to prevent replay. Cloudflare usage follows the existing hosting plan.

First polling can take up to 30 minutes; this is daily collection, not a real-time firehose. Successful runs with zero valid items remain empty. Invalid URLs, errors, known demo markers, unrelated/stale posts are filtered. Valid structure is not proof of factual truth. Display excerpts with original links and dates. No media downloads or full-thread republication. Retain at most 300 posts within 30 days; do not claim complete X coverage.

## Stop / recovery

Remove `APIFY_FREE_PLAN_CONFIRMED` to stop new runs and polling. An already-started run may finish; cancel it in Apify if necessary. After a failed poll inspect the recorded run in Apify before attempting recovery, to avoid duplicate charges. Public responses never include token, dataset ID or run ID. Stored `radar:apify:state` includes the run ID for the operator. Provider error bodies are not published.

## Open-source export import

Use `node scripts/import-radar.mjs twscrape INPUT.json OUTPUT.sql` for an array or JSONL containing URL, text/rawContent and createdAt/date. Twikit exports should map URL/text/created_at into the same shape. No passwords or cookies are imported. Review generated SQL, then apply through Wrangler D1. It **replaces** the current 300-item snapshot; combine exports before importing if preservation is needed. This is an optional manual bridge, not an installed or active open-source crawler.

## CoVibe

The website generates an editable/downloadable Markdown **outline**, using deterministic rules and original excerpts. No LLM key is configured or called. It is not an automatically written or published tutorial. Verify model versions, price/credit conditions, authoritative documentation and actual test results before publishing. Model/channel names are not automatically matched to exact API versions.
