export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

interface TokenRow {
  token: string;
  customer: string;
  last_used_at: number | null;
}

const TOUCH_INTERVAL_S = 60;

export default {
  async fetch(
    req: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const url = new URL(req.url);

    if (url.pathname.startsWith("/_protected/")) return notFound();

    // /t/<TOK> → /t/<TOK>/ so relative hrefs in the served listing resolve
    // correctly against the customer-visible URL.
    if (/^\/t\/[^/]+$/.test(url.pathname)) {
      const target = new URL(url);
      target.pathname += "/";
      return Response.redirect(target.toString(), 301);
    }

    const m = url.pathname.match(/^\/t\/([^/]+)\/(.*)$/);
    if (!m) return env.ASSETS.fetch(req);
    const [, token, rest] = m;

    const row = await lookupToken(env.DB, token);
    if (!row) return notFound();
    touchTokenAsync(env.DB, row, ctx);

    const inner = new URL(url);
    inner.pathname = `/_protected/${rest}`;
    const r = await env.ASSETS.fetch(new Request(inner, req));

    // The asset CDN may issue redirects (e.g. /_protected/foo → /_protected/foo/)
    // whose Location would point at the internal namespace. Translate the
    // path prefix back to the customer-visible one.
    if (r.status >= 300 && r.status < 400 && r.headers.has("location")) {
      const loc = r.headers.get("location")!;
      const newLoc = loc.replace(
        /(^|\/\/[^/]+)\/_protected\//,
        `$1/t/${token}/`,
      );
      if (newLoc !== loc) {
        const headers = new Headers(r.headers);
        headers.set("location", newLoc);
        return new Response(r.body, { status: r.status, headers });
      }
    }
    return r;
  },
} satisfies ExportedHandler<Env>;

function notFound(): Response {
  return new Response("Not Found", { status: 404 });
}

async function lookupToken(
  db: D1Database,
  token: string,
): Promise<TokenRow | null> {
  if (!token) return null;
  const row = await db
    .prepare(
      "SELECT token, customer, last_used_at FROM tokens WHERE token = ? AND revoked_at IS NULL",
    )
    .bind(token)
    .first<TokenRow>();
  return row ?? null;
}

function touchTokenAsync(
  db: D1Database,
  row: TokenRow,
  ctx: ExecutionContext,
  now: number = Math.floor(Date.now() / 1000),
): void {
  if (row.last_used_at !== null && now - row.last_used_at < TOUCH_INTERVAL_S) {
    return;
  }
  ctx.waitUntil(
    db
      .prepare("UPDATE tokens SET last_used_at = ? WHERE token = ?")
      .bind(now, row.token)
      .run()
      .then(() => undefined)
      .catch((e) => {
        console.error("touchToken failed", { customer: row.customer }, e);
      }),
  );
}
