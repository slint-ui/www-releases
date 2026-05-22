import { parseArgs } from "node:util";
import { d1Execute, quoteSqlString } from "./_d1";

const { values } = parseArgs({
  options: {
    customer: { type: "string" },
    token: { type: "string" },
  },
});

if (!values.customer && !values.token) {
  console.error(
    'Usage: pnpm tokens:revoke --customer "<Name>" | --token <value>',
  );
  process.exit(1);
}

const where = values.token
  ? `token = ${quoteSqlString(values.token)}`
  : `customer = ${quoteSqlString(values.customer!)}`;

d1Execute(
  `UPDATE tokens SET revoked_at = unixepoch() ` +
    `WHERE ${where} AND revoked_at IS NULL;`,
);
