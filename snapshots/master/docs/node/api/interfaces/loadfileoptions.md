---
title: "LoadFileOptions"
---
Defined in: [api/node/typescript/index.ts:247](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L247)

LoadFileOptions are used to defines different optional parameters that can be used to configure the compiler.

## Properties

### includePaths?

> `optional` **includePaths?**: `string`[]

Defined in: [api/node/typescript/index.ts:261](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L261)

Sets the include paths used for looking up `.slint` imports to the specified vector of paths.

***

### libraryPaths?

> `optional` **libraryPaths?**: `Record`\<`string`, `string`\>

Defined in: [api/node/typescript/index.ts:266](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L266)

Sets library paths used for looking up `@library` imports to the specified map of library names to paths.

***

### quiet?

> `optional` **quiet?**: `boolean`

Defined in: [api/node/typescript/index.ts:251](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L251)

If set to true warnings from the compiler will not be printed to the console.

***

### style?

> `optional` **style?**: `string`

Defined in: [api/node/typescript/index.ts:256](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L256)

Sets the widget style the compiler is currently using when compiling .slint files.