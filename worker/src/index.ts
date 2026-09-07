// Serves releases.slint.dev and snapshots.slint.dev out of R2.
//
// Three things have no equivalent in the stored files and are done per request
// instead: the Matomo tag, the older-version banner, and resolving addresses
// whose capitals do not match.

import { MATOMO, BANNER } from './snippets';
import { RELEASES, SNAPSHOTS, type Rule } from './redirects';

interface Site {
  bucket: 'RELEASES' | 'SNAPSHOTS';
  head: string | null;
  rules: Rule[];
  // releases.slint.dev hands the current release over to docs.slint.dev.
  // snapshots has its own rule for those addresses, so only releases needs it.
  bounceCurrentRelease: boolean;
}

const RELEASES_SITE: Site = {
  bucket: 'RELEASES',
  head: BANNER,
  rules: RELEASES,
  bounceCurrentRelease: true,
};

const SNAPSHOTS_SITE: Site = {
  bucket: 'SNAPSHOTS',
  head: null,
  rules: SNAPSHOTS,
  bounceCurrentRelease: false,
};

// The -test names are the staging deploy. They read the same buckets, so
// redirects between the two sites still point at the live names.
const SITES: Record<string, Site> = {
  'releases.slint.dev': RELEASES_SITE,
  'snapshots.slint.dev': SNAPSHOTS_SITE,
  'releases-test.slint.dev': RELEASES_SITE,
  'snapshots-test.slint.dev': SNAPSHOTS_SITE,
};

const TYPES: Record<string, string> = {
  html: 'text/html; charset=utf-8',
  css: 'text/css',
  js: 'text/javascript',
  mjs: 'text/javascript',
  json: 'application/json',
  map: 'application/json',
  svg: 'image/svg+xml',
  png: 'image/png',
  webp: 'image/webp',
  ico: 'image/x-icon',
  woff: 'font/woff',
  woff2: 'font/woff2',
  ttf: 'font/ttf',
  txt: 'text/plain; charset=utf-8',
  md: 'text/markdown; charset=utf-8',
  xml: 'application/xml',
  // Required: the docs search calls WebAssembly.instantiateStreaming(), which
  // refuses anything else.
  wasm: 'application/wasm',
  apk: 'application/vnd.android.package-archive',
  webmanifest: 'application/manifest+json',
};

interface Found {
  object: R2ObjectBody;
  key: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const site = SITES[url.hostname];
    if (!site) return new Response('Unknown host', { status: 404 });

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', {
        status: 405,
        headers: { Allow: 'GET, HEAD' },
      });
    }

    const hit = redirectFor(url, site, env);
    if (hit) return hit;

    const bucket = env[site.bucket];

    const found = await lookup(bucket, url.pathname);
    if (!found) return notFound(bucket);

    return serve(found, url.pathname, site);
  },
} satisfies ExportedHandler<Env>;

// The current release is handed to docs.slint.dev rather than served here.
// LATEST_RELEASE is a wrangler variable: CI passes the first line of
// versions.txt at deploy time, so publishing a release sets it.
function redirectFor(url: URL, site: Site, env: Env): Response | null {
  if (site.bounceCurrentRelease) {
    const latest: string = env.LATEST_RELEASE;
    if (latest && url.pathname.startsWith(`/${latest}/`)) {
      const rest = url.pathname.slice(latest.length + 2);
      return Response.redirect(`https://docs.slint.dev/latest/${rest}`, 302);
    }
  }

  // /<version>/docs/quickstart/<language>?qs=<language>
  //   -> /<version>/docs/<qs>/<language>
  const quick = url.pathname.match(/^\/([^/]+)\/docs\/quickstart\/([^/]+)\/?$/);
  const qs = url.searchParams.get('qs');
  if (quick && qs && /^[A-Za-z0-9_-]+$/.test(qs)) {
    return Response.redirect(new URL(`/${quick[1]}/docs/${qs}/${quick[2]}`, url).toString(), 301);
  }

  for (const [pattern, target] of site.rules) {
    const m = url.pathname.match(pattern);
    if (m) return Response.redirect(new URL(target(m), url).toString(), 301);
  }
  return null;
}

// Every object is stored under a lowercase name and looked up in lowercase, so
// both spellings of an address reach the same object. Addresses in the wild are
// lowercase -- struct.Image.html has been published as struct.image for years --
// while the files themselves have capitals. Safe because no two files differ
// only by capitals.
async function lookup(bucket: R2Bucket, pathname: string): Promise<Found | null> {
  let key = decodeURIComponent(pathname).replace(/^\/+/, '').toLowerCase();
  if (key === '' || key.endsWith('/')) key += 'index.html';
  if (key.includes('..')) return null;

  for (const candidate of [key, `${key}.html`, `${key}/index.html`]) {
    const object = await bucket.get(candidate);
    if (object) return { object, key: candidate };
  }
  return null;
}

async function notFound(bucket: R2Bucket): Promise<Response> {
  const page = await bucket.get('404.html');
  return new Response(page ? page.body : 'Not found', {
    status: 404,
    headers: { 'Content-Type': TYPES.html as string },
  });
}

function serve({ object, key }: Found, pathname: string, site: Site): Response {
  const ext = key.split('.').pop() ?? '';
  const isHtml = ext === 'html';

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Content-Type', TYPES[ext] ?? 'application/octet-stream');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Credentials', 'false');
  headers.set('Cache-Control', cacheFor(pathname));
  headers.set('ETag', object.httpEtag);

  // Rewriting the body changes its length, so let the response be chunked.
  if (isHtml) headers.delete('Content-Length');

  const response = new Response(object.body, { headers });
  if (!isHtml) return response;

  // Injected per request, so the stored pages need no build step.
  return new HTMLRewriter()
    .on('head', {
      element(e) {
        if (site.head) e.append(site.head, { html: true });
      },
    })
    .on('body', {
      element(e) {
        e.append(MATOMO, { html: true });
      },
    })
    .transform(response);
}

function cacheFor(pathname: string): string {
  // A finished release never changes again.
  if (/^\/\d+\.\d+\.\d+\//.test(pathname)) return 'public, max-age=31536000, immutable';
  // master is rebuilt continuously; branch snapshots move far less often.
  if (pathname.startsWith('/master/')) return 'public, max-age=300, must-revalidate';
  if (/^\/\d+\.\d+\//.test(pathname)) return 'public, max-age=3600';
  return 'public, max-age=300';
}
