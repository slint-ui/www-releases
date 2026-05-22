CREATE TABLE tokens (
  token        TEXT PRIMARY KEY,
  customer     TEXT NOT NULL,
  created_at   INTEGER NOT NULL,
  revoked_at   INTEGER,
  last_used_at INTEGER,
  notes        TEXT
);

CREATE INDEX idx_tokens_customer ON tokens(customer);
