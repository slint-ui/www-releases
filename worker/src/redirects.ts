// Redirects for each site, as [pattern, target]. The target may be a path or a
// full URL; index.ts resolves it against the incoming request. First match wins.
//
// Two redirects are not in these lists, because neither depends on the path
// alone: the quickstart one reads the query string, and the current release is
// read from versions.txt. Both live in index.ts.

export type Rule = [RegExp, (m: RegExpMatchArray) => string];

const DOCS = 'https://docs.slint.dev/latest';

export const RELEASES: Rule[] = [
  [/^\/releases\/(.*)$/, (m) => `/${m[1]}`],
  [/^\/1\.0\.2\/docs\/nodejs\/(.*)$/, (m) => `/1.0.2/docs/node/${m[1]}`],
  [/^\/latest\/(.*)$/, (m) => `${DOCS}/${m[1]}`],
  [/^\/demos\/(.*)$/, (m) => `${DOCS}/demos/${m[1]}`],
  [/^\/editor\/(.*)$/, (m) => `${DOCS}/editor/${m[1]}`],
  [/^\/docs\/(.*)$/, (m) => `${DOCS}/docs/${m[1]}`],
  [/^\/master\/(.*)$/, (m) => `https://snapshots.slint.dev/master/${m[1]}`],
];

export const SNAPSHOTS: Rule[] = [
  [/^\/snapshots\/(.*)$/, (m) => `/${m[1]}`],

  // Three numbers means a finished release, which lives on the other site.
  // Two numbers (/1.17/) is a branch snapshot and stays here.
  [/^\/1\.(\d+)\.(\d+)\/(.*)$/, (m) => `https://releases.slint.dev/1.${m[1]}.${m[2]}/${m[3]}`],
  [/^\/0\.(.*)$/, (m) => `https://releases.slint.dev/0.${m[1]}`],

  [/^\/$/, () => '/master/docs/slint/'],
  [/^\/master\/docs\/$/, () => '/master/docs/slint/'],
];
