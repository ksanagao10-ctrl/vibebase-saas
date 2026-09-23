# Operations workbench

Route: /#operations. Accessible from home Signals strip and AI radar. It reads the existing /api/radar feed; no extra external provider requests or paid inference are introduced.

Ten rules classify posts into incident/recovery, migration, pricing, free offers, release, channel coverage, tutorials, evaluations, user demand and competitor opportunities. A post can create several review actions, but original-post counts stay deduplicated. Priority P0..P3 is a keyword heuristic, not verified impact. Freshness is based on the original post date. Default queue is last 24h; 30-day view is available. Daily checklist uses Beijing date.

Each action links to the corresponding existing model, price, free model, probe, industry or CoVibe page and lists required verification fields. Source authors are not automatically labeled official. Reposts are not independent evidence. Manual reviewed/done statuses require an evidence URL and notes; reproduction additionally requires a valid date. These are operator attestations, not automatically verified findings.

No shared admin authentication exists yet: all processing notes, checklist and status are localStorage under vibebase-operations-v1, explicitly labeled local-only. Public users cannot update global model/pricing/evidence records from this UI. Clearing browser data removes local records. Saving a done record does not edit the website. A future shared workflow needs authenticated admins and audit trails.

CoVibe selects up to three distinct unprocessed source posts and generates editable source-linked outlines, without fabricated how-to steps or paid generation. The Markdown daily report covers the last 24h, independent of list filters, and distinguishes local action counts from product analytics. Topic counts are counts of source posts, not actual user counts, conversion rates, or independently corroborated claims.

This release does not increase collection frequency, configure provider credentials, automatically publish articles, expire promotions or edit prices. No timed reminders or shared site-wide analytics are installed. The 09:00 / 14:00 / 18:00 checklist is an operator workflow. Missing collection produces honest empty states.

Existing three query groups are expanded with pricing, deprecation, benchmark, outage, compatibility, error and feature terms, without increasing run or result caps. Classification covers ten categories; it does not guarantee full X coverage for each topic. Weekly checklist keys reset on Monday Beijing time.
