CREATE TABLE IF NOT EXISTS app_config (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS feedback (
 id TEXT PRIMARY KEY, article_id TEXT NOT NULL, version TEXT NOT NULL, kind TEXT NOT NULL CHECK(kind IN ('correction','reproduced')),
 visitor_hash TEXT NOT NULL, model_id TEXT NOT NULL, channel_id TEXT NOT NULL,
 tested_at TEXT, scope TEXT NOT NULL, cost REAL, currency TEXT, note TEXT NOT NULL,
 created_at TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending',
 UNIQUE(article_id,version,kind,visitor_hash)
);
CREATE INDEX IF NOT EXISTS feedback_article ON feedback(article_id,version,kind);
CREATE TABLE IF NOT EXISTS feedback_rate (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS probe_runs (id TEXT PRIMARY KEY, source_id TEXT NOT NULL, kind TEXT NOT NULL, started_at TEXT NOT NULL, payload TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS probe_source ON probe_runs(source_id,started_at);
