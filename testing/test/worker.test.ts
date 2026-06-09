import { env, SELF } from "cloudflare:test";
import { beforeEach, describe, expect, it } from "vitest";

async function issueToken(
  customer = "ACME",
  token = "tok-active",
): Promise<string> {
  await env.DB.prepare(
    "INSERT INTO tokens (token, customer, created_at) VALUES (?, ?, unixepoch())",
  )
    .bind(token, customer)
    .run();
  return token;
}

async function revokeToken(token: string): Promise<void> {
  await env.DB.prepare(
    "UPDATE tokens SET revoked_at = unixepoch() WHERE token = ?",
  )
    .bind(token)
    .run();
}

beforeEach(async () => {
  await env.DB.exec("DELETE FROM tokens");
});

describe("GET /", () => {
  it("serves the public landing page from assets", async () => {
    const r = await SELF.fetch("https://example.com/");
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Test landing page");
  });
});

describe("token gating", () => {
  it("returns 404 for an unknown token", async () => {
    const r = await SELF.fetch("https://example.com/t/nope/");
    expect(r.status).toBe(404);
  });

  it("returns 404 for a revoked token", async () => {
    await issueToken("ACME", "tok1");
    await revokeToken("tok1");
    const r = await SELF.fetch("https://example.com/t/tok1/");
    expect(r.status).toBe(404);
  });

  it("serves the root listing with a valid token", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/t/tok1/");
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Simple Package Repository");
  });

  it("serves project listings with a valid token", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/t/tok1/foo/");
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Links for foo");
  });

  it("serves package files with a valid token", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch(
      "https://example.com/t/tok1/foo/foo-1.0.whl",
    );
    expect(r.status).toBe(200);
    expect((await r.text()).trim()).toBe("fake-wheel-bytes");
  });

  it("gates file requests too", async () => {
    const r = await SELF.fetch(
      "https://example.com/t/nope/foo/foo-1.0.whl",
    );
    expect(r.status).toBe(404);
  });

  it("updates last_used_at on a valid request", async () => {
    await issueToken("ACME", "tok1");
    const before = await env.DB.prepare(
      "SELECT last_used_at FROM tokens WHERE token = ?",
    )
      .bind("tok1")
      .first<{ last_used_at: number | null }>();
    expect(before?.last_used_at).toBeNull();

    const r = await SELF.fetch("https://example.com/t/tok1/");
    expect(r.status).toBe(200);

    const after = await env.DB.prepare(
      "SELECT last_used_at FROM tokens WHERE token = ?",
    )
      .bind("tok1")
      .first<{ last_used_at: number | null }>();
    expect(after?.last_used_at).toBeTypeOf("number");
  });

  it("does not rewrite last_used_at within the throttle window", async () => {
    await issueToken("ACME", "tok1");
    const now = Math.floor(Date.now() / 1000);
    await env.DB.prepare(
      "UPDATE tokens SET last_used_at = ? WHERE token = ?",
    )
      .bind(now, "tok1")
      .run();

    const r = await SELF.fetch("https://example.com/t/tok1/");
    expect(r.status).toBe(200);

    const after = await env.DB.prepare(
      "SELECT last_used_at FROM tokens WHERE token = ?",
    )
      .bind("tok1")
      .first<{ last_used_at: number | null }>();
    expect(after?.last_used_at).toBe(now);
  });
});

describe("basic-auth gating (/simple/)", () => {
  const basic = (user: string, pass: string): Record<string, string> => ({
    authorization: `Basic ${btoa(`${user}:${pass}`)}`,
  });

  it("returns 401 with no Authorization header", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/");
    expect(r.status).toBe(401);
    expect(r.headers.get("www-authenticate")).toMatch(/^Basic /);
  });

  it("returns 401 for an unknown token", async () => {
    const r = await SELF.fetch("https://example.com/simple/", {
      headers: basic("__token__", "nope"),
    });
    expect(r.status).toBe(401);
  });

  it("returns 401 for a revoked token", async () => {
    await issueToken("ACME", "tok1");
    await revokeToken("tok1");
    const r = await SELF.fetch("https://example.com/simple/", {
      headers: basic("__token__", "tok1"),
    });
    expect(r.status).toBe(401);
  });

  it("serves the root listing with the token as the password", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/", {
      headers: basic("__token__", "tok1"),
    });
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Simple Package Repository");
  });

  it("serves project listings with a valid token", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/foo/", {
      headers: basic("__token__", "tok1"),
    });
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Links for foo");
  });

  it("serves package files with a valid token", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/foo/foo-1.0.whl", {
      headers: basic("__token__", "tok1"),
    });
    expect(r.status).toBe(200);
    expect((await r.text()).trim()).toBe("fake-wheel-bytes");
  });

  it("accepts the token as the username too (curl -u <token>:)", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/", {
      headers: basic("tok1", ""),
    });
    expect(r.status).toBe(200);
    expect(await r.text()).toContain("Simple Package Repository");
  });

  it("rewrites asset-CDN redirect Location to the /simple/ prefix", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/foo", {
      headers: basic("__token__", "tok1"),
      redirect: "manual",
    });
    expect(r.status).toBeGreaterThanOrEqual(200);
    if (r.status >= 300 && r.status < 400) {
      const loc = r.headers.get("location") ?? "";
      expect(loc).not.toContain("/_protected/");
      expect(loc).toMatch(/\/simple\/foo\/?$/);
    }
  });

  it("updates last_used_at on a valid request", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch("https://example.com/simple/", {
      headers: basic("__token__", "tok1"),
    });
    expect(r.status).toBe(200);
    const after = await env.DB.prepare(
      "SELECT last_used_at FROM tokens WHERE token = ?",
    )
      .bind("tok1")
      .first<{ last_used_at: number | null }>();
    expect(after?.last_used_at).toBeTypeOf("number");
  });
});

describe("protected namespace", () => {
  it("blocks direct access to /_protected/* paths", async () => {
    const r = await SELF.fetch("https://example.com/_protected/");
    expect(r.status).toBe(404);
    expect(await r.text()).toBe("Not Found");
  });

  it("blocks direct access to /_protected/files/* paths", async () => {
    const r = await SELF.fetch(
      "https://example.com/_protected/foo/foo-1.0.whl",
    );
    expect(r.status).toBe(404);
    expect(await r.text()).toBe("Not Found");
  });
});

describe("trailing slash", () => {
  beforeEach(async () => {
    await issueToken("ACME", "tok1");
  });

  it("redirects /t/<token> to /t/<token>/", async () => {
    const r = await SELF.fetch("https://example.com/t/tok1", {
      redirect: "manual",
    });
    expect(r.status).toBe(301);
    expect(r.headers.get("location")).toMatch(/\/t\/tok1\/$/);
  });

  it("Location from asset-CDN redirect is rewritten to public URL", async () => {
    // Requesting /t/tok1/foo (no slash) — asset CDN may redirect to /_protected/foo/.
    // The Worker must rewrite that to /t/tok1/foo/ before returning.
    const r = await SELF.fetch("https://example.com/t/tok1/foo", {
      redirect: "manual",
    });
    expect(r.status).toBeGreaterThanOrEqual(200);
    if (r.status >= 300 && r.status < 400) {
      const loc = r.headers.get("location") ?? "";
      expect(loc).not.toContain("/_protected/");
      expect(loc).toMatch(/\/t\/tok1\/foo\/?$/);
    }
  });
});

describe("path traversal", () => {
  beforeEach(async () => {
    await issueToken("ACME", "tok1");
  });

  // The WHATWG URL parser normalises `..` and `%2e%2e` segments before the
  // Worker sees the path. Anything that traverses out of /t/<TOK>/ lands
  // back in the public asset namespace — never in /_protected/.

  it("normalises literal '..' into public space", async () => {
    const r = await SELF.fetch(
      "https://example.com/t/tok1/foo/../../../index.html",
    );
    const body = await r.text();
    expect(body).not.toContain("Links for");
    expect(body).not.toContain("fake-wheel-bytes");
  });

  it("normalises percent-encoded '..' into public space", async () => {
    const r = await SELF.fetch(
      "https://example.com/t/tok1/%2e%2e/index.html",
    );
    const body = await r.text();
    expect(body).not.toContain("Links for");
    expect(body).not.toContain("fake-wheel-bytes");
  });
});

describe("HEAD requests", () => {
  it("returns 200 with no body for a valid file", async () => {
    await issueToken("ACME", "tok1");
    const r = await SELF.fetch(
      "https://example.com/t/tok1/foo/foo-1.0.whl",
      { method: "HEAD" },
    );
    expect(r.status).toBe(200);
    expect(await r.text()).toBe("");
  });
});

describe("method handling", () => {
  it("rejects POST", async () => {
    const r = await SELF.fetch("https://example.com/t/whatever/", {
      method: "POST",
    });
    expect(r.status).toBe(405);
  });
});
