---
title: "loadFile"
---
> **loadFile**(`filePath`, `options?`): `Object`

Defined in: [api/node/typescript/index.ts:649](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L649)

Loads the specified Slint file and returns an object containing functions to construct the exported
components defined within the Slint file.

The following example loads a "Hello World" style Slint file and changes the Text label to a new greeting:
**`main.slint`**:
```
export component Main inherits Window {
    in-out property <string> greeting <=> label.text;
    label := Text {
        text: "Hello World";
    }
}
```

**`index.js`**:
```javascript
import * as slint from "slint-ui";
let ui = slint.loadFile("main.slint");
let main = new ui.Main();
main.greeting = "Hello friends";
```

## Parameters

### filePath

`string` \| `URL`

The path to the file to load as `string` or `URL`. Relative paths are resolved against the process' current working directory.

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