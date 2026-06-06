---
title: "loadSource"
---
> **loadSource**(`source`, `filePath`, `options?`): `Object`

Defined in: [api/node/typescript/index.ts:683](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L683)

Loads the given Slint source code and returns an object that contains a functions to construct the exported
components of the Slint source code.

The following example loads a "Hello World" style Slint source code and changes the Text label to a new greeting:
```js
import * as slint from "slint-ui";
const source = `export component Main {
     in-out property <string> greeting <=> label.text;
     label := Text {
         text: "Hello World";
     }
}`; // The content of main.slint
let ui = slint.loadSource(source, "main.js");
let main = new ui.Main();
main.greeting = "Hello friends";
```

## Parameters

### source

`string`

The Slint source code to load.

### filePath

`string`

A path to the file to show log and resolve relative import and images.
                Relative paths are resolved against the process' current working directory.

### options?

[`LoadFileOptions`](/master/docs/node/api/interfaces/loadfileoptions/)

An optional [LoadFileOptions](/master/docs/node/api/interfaces/loadfileoptions/) to configure additional Slint compilation settings,
               such as include search paths, library imports, or the widget style.

## Returns

`Object`

Returns an object that is immutable and provides a constructor function for each exported Window component found in the `.slint` file.
         For instance, in the example above, a `Main` property is available, which can be used to create instances of the `Main` component using the `new` keyword.
         These instances offer properties and event handlers, adhering to the [ComponentHandle](/master/docs/node/api/interfaces/componenthandle/) interface.
         For further information on the available properties, refer to [Instantiating A Component](/#instantiating-a-component).

## Throws

[CompileError](/master/docs/node/api/classes/compileerror/) if errors occur during compilation.