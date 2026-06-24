---
title: "Window"
---
Defined in: [api/node/typescript/index.ts:61](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L61)

This type represents a window towards the windowing system, that's used to render the
scene of a component. It provides API to control windowing system specific aspects such
as the position on the screen.

## Properties

### fullscreen

> **fullscreen**: `boolean`

Defined in: [api/node/typescript/index.ts:75](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L75)

Gets or sets the window's fullscreen state *

***

### logicalPosition

> **logicalPosition**: [`Point`](/1.17.0/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:63](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L63)

Gets or sets the logical position of the window on the screen.

***

### logicalSize

> **logicalSize**: [`Size`](/1.17.0/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:69](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L69)

Gets or sets the logical size of the window on the screen,

***

### maximized

> **maximized**: `boolean`

Defined in: [api/node/typescript/index.ts:78](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L78)

Gets or sets the window's maximized state *

***

### minimized

> **minimized**: `boolean`

Defined in: [api/node/typescript/index.ts:81](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L81)

Gets or sets the window's minimized state *

***

### physicalPosition

> **physicalPosition**: [`Point`](/1.17.0/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:66](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L66)

Gets or sets the physical position of the window on the screen.

***

### physicalSize

> **physicalSize**: [`Size`](/1.17.0/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:72](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L72)

Gets or sets the physical size of the window on the screen,

## Accessors

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [api/node/typescript/index.ts:87](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L87)

Returns the visibility state of the window. This function can return false even if you previously called show()
on it, for example if the user minimized the window.

##### Returns

`boolean`

## Methods

### hide()

> **hide**(): `void`

Defined in: [api/node/typescript/index.ts:96](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L96)

Hides the window, so that it is not visible anymore.

#### Returns

`void`

***

### requestRedraw()

> **requestRedraw**(): `void`

Defined in: [api/node/typescript/index.ts:99](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L99)

Issues a request to the windowing system to re-render the contents of the window.

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [api/node/typescript/index.ts:93](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L93)

Shows the window on the screen. An additional strong reference on the
associated component is maintained while the window is visible.

#### Returns

`void`