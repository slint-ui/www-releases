---
title: "LoadFileOptions"
---
Defined in: [api/node/typescript/index.ts:248](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L248)

LoadFileOptions are used to defines different optional parameters that can be used to configure the compiler.

## Properties

### includePaths?

> `optional` **includePaths?**: `string`[]

Defined in: [api/node/typescript/index.ts:262](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L262)

Sets the include paths used for looking up `.slint` imports to the specified vector of paths.

***

### libraryPaths?

> `optional` **libraryPaths?**: `Record`\<`string`, `string`\>

Defined in: [api/node/typescript/index.ts:267](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L267)

Sets library paths used for looking up `@library` imports to the specified map of library names to paths.

***

### quiet?

> `optional` **quiet?**: `boolean`

Defined in: [api/node/typescript/index.ts:252](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L252)

If set to true warnings from the compiler will not be printed to the console.

***

### style?

> `optional` **style?**: `string`

Defined in: [api/node/typescript/index.ts:257](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L257)

Sets the widget style the compiler is currently using when compiling .slint files.