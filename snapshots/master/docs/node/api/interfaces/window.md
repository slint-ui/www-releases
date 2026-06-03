---
title: "Window"
---
Defined in: [api/node/typescript/index.ts:60](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L60)

This type represents a window towards the windowing system, that's used to render the
scene of a component. It provides API to control windowing system specific aspects such
as the position on the screen.

## Properties

### fullscreen

> **fullscreen**: `boolean`

Defined in: [api/node/typescript/index.ts:74](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L74)

Gets or sets the window's fullscreen state *

***

### logicalPosition

> **logicalPosition**: [`Point`](/master/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:62](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L62)

Gets or sets the logical position of the window on the screen.

***

### logicalSize

> **logicalSize**: [`Size`](/master/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:68](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L68)

Gets or sets the logical size of the window on the screen,

***

### maximized

> **maximized**: `boolean`

Defined in: [api/node/typescript/index.ts:77](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L77)

Gets or sets the window's maximized state *

***

### minimized

> **minimized**: `boolean`

Defined in: [api/node/typescript/index.ts:80](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L80)

Gets or sets the window's minimized state *

***

### physicalPosition

> **physicalPosition**: [`Point`](/master/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:65](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L65)

Gets or sets the physical position of the window on the screen.

***

### physicalSize

> **physicalSize**: [`Size`](/master/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:71](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L71)

Gets or sets the physical size of the window on the screen,

## Accessors

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [api/node/typescript/index.ts:86](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L86)

Returns the visibility state of the window. This function can return false even if you previously called show()
on it, for example if the user minimized the window.

##### Returns

`boolean`

## Methods

### hide()

> **hide**(): `void`

Defined in: [api/node/typescript/index.ts:95](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L95)

Hides the window, so that it is not visible anymore.

#### Returns

`void`

***

### requestRedraw()

> **requestRedraw**(): `void`

Defined in: [api/node/typescript/index.ts:98](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L98)

Issues a request to the windowing system to re-render the contents of the window.

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [api/node/typescript/index.ts:92](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L92)

Shows the window on the screen. An additional strong reference on the
associated component is maintained while the window is visible.

#### Returns

`void`