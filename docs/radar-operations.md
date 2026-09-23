# X information collectors

## Multi-collector release (2026-09-24)

All six requested products are now supported; the original free LanceAPI pilot remains as a seventh source. Daily keyword polling is implemented for hosted sources, weekly batch for V2. **Native TwitterAPI webhooks, X persistent streams, and historical backfills beyond the configured lookback are not implemented in this release.** They are provider capabilities, not claims about this integration.

| Source | Server Secret | Enable flag | Extra setting / execution |
| --- | --- | --- | --- |
| LanceAPI pilot | APIFY_TOKEN | APIFY_FREE_PLAN_CONFIRMED=true | Daily, three queries, max 45 items, $0.03 Actor cap |
| Apify Unlimited | APIFY_TOKEN | APIFY_UNLIMITED_ENABLED=true | Daily, one query, max 40 items, $0.08 Actor cap |
| Apify V2 | APIFY_TOKEN | APIFY_V2_ENABLED=true | Monday UTC, one query, max 50 items, $0.04 Actor cap |
| TwitterAPI.io | TWITTERAPI_KEY | TWITTERAPI_ENABLED=true | TWITTERAPI_MONTHLY_REQUEST_LIMIT=1..31 required |
| X official API | X_BEARER_TOKEN | X_API_ENABLED=true | X_API_MONTHLY_REQUEST_LIMIT=1..31 required |
| twscrape / Twikit | RADAR_INGEST_TOKEN | Existing local session + script | Authenticated POST snapshot, max 300 rows / 500 KB |

Setting only a Secret does not enable paid collection. TwitterAPI.io sends at most one search page (documented up to 20 posts), X sends max_results=10, each once per UTC day. Monthly request reservations are atomic and include failed/uncertain requests; this is a request cap, **not an exact dollar budget**. Pricing can change; set provider-side spending caps too. TwitterAPI.io trial credits are one-time, not reset monthly. No credentials have been provisioned or real paid calls tested by this change.

Apidojo Actors may require a paid Apify plan; do not enable these on the assumption the Free account includes unrestricted API use. V2 requires queries capable of yielding at least 50 posts and is unsuitable for repeated small monitoring queries. No automatic fallback between providers. Each provider has separate snapshots, status and daily reservations. Legacy LanceAPI records are preserved. Cross-source deduplication unions source IDs; two collectors reading one post does not constitute independent corroboration.

### Local collectors

Install only the desired library in your own Python environment (`pip install twscrape` or `pip install twikit`). Configure its local account DB or cookies with the provider's documented login process. VibeBase does not generate, copy, or upload X login credentials.

```
python3 scripts/collectors/x_collect.py twscrape --session /private/path/accounts.db --output /private/path/posts.json
python3 scripts/collectors/x_collect.py twikit --session /private/path/cookies.json --output /private/path/posts.json --push
```

For `--push`, provision the same strong `RADAR_INGEST_TOKEN` in the local environment and the Worker Secret. Push always targets https://vibebase.vip/api/radar/ingest, refuses redirects, and transmits only normalized public post fields. No third-party native webhook is accepted here. Run this script using your existing local scheduler if daily collection is needed; no local scheduled job is installed automatically. Sessions must already exist; the scripts do not handle login or CAPTCHA. Local library/network execution remains untested until a valid session is available.

The POST replaces **only the named open-source collector's snapshot**, not the global feed. Empty/invalid snapshots are rejected without deleting previous data. The SQL import tool also now writes only its source snapshot; prefer authenticated push to update both data and run status. Keep exports/session files outside git.

### API references

- https://docs.twitterapi.io/api-reference/endpoint/tweet_advanced_search
- https://docs.x.com/x-api/posts/search/introduction
- https://apify.com/apidojo/twitter-scraper-lite/input-schema
- https://apify.com/apidojo/tweet-scraper/input-schema
- https://github.com/vladkens/twscrape
- https://github.com/d60/twikit

## Publishing and evidence

Posts are retained for 30 days (max 300 in each merged view), with known demos, invalid dates/URLs, and unrelated content rejected. A structurally valid post is still an unverified claim. CoVibe creates editable source-linked outlines, not LLM-written tutorials or fabricated tests. No public page can trigger remote collection. Secrets, dataset IDs and run IDs never appear in the public API. State lives in existing D1 app_config under radar:* keys; no migration is required.

To pause any hosted collector, remove its enable flag; an already-running Actor may finish and can be cancelled in Apify. A failed start consumes that day's reservation; inspect the provider console before recovery. The 30-minute cron polls asynchronous runs and starts only eligible daily/weekly work. Existing LanceAPI day reservations remain compatible.
