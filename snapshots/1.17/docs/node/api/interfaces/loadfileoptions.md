---
title: "LoadFileOptions"
---
Defined in: [api/node/typescript/index.ts:241](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L241)

LoadFileOptions are used to defines different optional parameters that can be used to configure the compiler.

## Properties

### includePaths?

> `optional` **includePaths?**: `string`[]

Defined in: [api/node/typescript/index.ts:255](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L255)

Sets the include paths used for looking up `.slint` imports to the specified vector of paths.

***

### libraryPaths?

> `optional` **libraryPaths?**: `Record`\<`string`, `string`\>

Defined in: [api/node/typescript/index.ts:260](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L260)

Sets library paths used for looking up `@library` imports to the specified map of library names to paths.

***

### quiet?

> `optional` **quiet?**: `boolean`

Defined in: [api/node/typescript/index.ts:245](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L245)

If set to true warnings from the compiler will not be printed to the console.

***

### style?

> `optional` **style?**: `string`

Defined in: [api/node/typescript/index.ts:250](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L250)

Sets the widget style the compiler is currently using when compiling .slint files.