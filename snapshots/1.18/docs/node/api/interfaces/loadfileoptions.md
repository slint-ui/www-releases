---
title: "LoadFileOptions"
---
Defined in: [api/node/typescript/index.ts:253](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L253)

LoadFileOptions are used to defines different optional parameters that can be used to configure the compiler.

## Properties

### includePaths?

> `optional` **includePaths?**: `string`[]

Defined in: [api/node/typescript/index.ts:267](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L267)

Sets the include paths used for looking up `.slint` imports to the specified vector of paths.

***

### libraryPaths?

> `optional` **libraryPaths?**: `Record`\<`string`, `string`\>

Defined in: [api/node/typescript/index.ts:272](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L272)

Sets library paths used for looking up `@library` imports to the specified map of library names to paths.

***

### quiet?

> `optional` **quiet?**: `boolean`

Defined in: [api/node/typescript/index.ts:257](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L257)

If set to true warnings from the compiler will not be printed to the console.

***

### style?

> `optional` **style?**: `string`

Defined in: [api/node/typescript/index.ts:262](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L262)

Sets the widget style the compiler is currently using when compiling .slint files.