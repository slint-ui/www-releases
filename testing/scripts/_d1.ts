import { execFileSync } from "node:child_process";

const DATABASE = "ui-testing";

export function d1Execute(sql: string): void {
  execFileSync(
    "npx",
    ["wrangler", "d1", "execute", DATABASE, "--remote", "--command", sql],
    { stdio: "inherit" },
  );
}

export function quoteSqlString(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}
