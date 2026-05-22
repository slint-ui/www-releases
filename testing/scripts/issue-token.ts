import { randomBytes } from "node:crypto";
import { d1Execute, quoteSqlString } from "./_d1";

const customer = process.argv[2];
if (!customer) {
  console.error('Usage: pnpm tokens:issue "<Customer Name>"');
  process.exit(1);
}

const token = randomBytes(32).toString("base64url");

d1Execute(
  `INSERT INTO tokens (token, customer, created_at) ` +
    `VALUES (${quoteSqlString(token)}, ${quoteSqlString(customer)}, unixepoch());`,
);

const indexUrl = `https://testing.slint.dev/t/${token}/`;
console.log("");
console.log(`Customer: ${customer}`);
console.log(`Token:    ${token}`);
console.log(`Index:    ${indexUrl}`);
console.log("");
console.log("Hand the customer this — add to their pyproject.toml:");
console.log("");
console.log("  [[tool.uv.index]]");
console.log('  name = "slint-private"');
console.log(`  url = "${indexUrl}"`);
console.log("  explicit = true");
console.log("");
console.log("  [tool.uv.sources]");
console.log('  slint-testing = { index = "slint-private" }');
console.log("");
console.log("Then `uv add slint-testing`. `explicit = true` keeps PyPI as the");
console.log("default for everything else; only slint-testing routes through us.");
console.log("");
console.log("If their repo is public, put the [[index]] block in");
console.log("~/.config/uv/uv.toml instead and keep just the [tool.uv.sources]");
console.log("mapping in the committed pyproject.toml.");
