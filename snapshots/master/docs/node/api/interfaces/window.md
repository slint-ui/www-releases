---
title: "Window"
---
Defined in: [api/node/typescript/index.ts:65](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L65)

This type represents a window towards the windowing system, that's used to render the
scene of a component. It provides API to control windowing system specific aspects such
as the position on the screen.

## Properties

### fullscreen

> **fullscreen**: `boolean`

Defined in: [api/node/typescript/index.ts:79](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L79)

Gets or sets the window's fullscreen state.

***

### logicalPosition

> **logicalPosition**: [`Point`](/master/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:67](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L67)

Gets or sets the logical position of the window on the screen.

***

### logicalSize

> **logicalSize**: [`Size`](/master/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:73](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L73)

Gets or sets the logical size of the window on the screen,

***

### maximized

> **maximized**: `boolean`

Defined in: [api/node/typescript/index.ts:82](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L82)

Gets or sets the window's maximized state.

***

### minimized

> **minimized**: `boolean`

Defined in: [api/node/typescript/index.ts:85](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L85)

Gets or sets the window's minimized state.

***

### physicalPosition

> **physicalPosition**: [`Point`](/master/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/index.ts:70](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L70)

Gets or sets the physical position of the window on the screen.

***

### physicalSize

> **physicalSize**: [`Size`](/master/docs/node/api/interfaces/size/)

Defined in: [api/node/typescript/index.ts:76](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L76)

Gets or sets the physical size of the window on the screen,

## Accessors

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [api/node/typescript/index.ts:91](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L91)

Returns the visibility state of the window. This function can return false even if you previously called show()
on it, for example if the user minimized the window.

##### Returns

`boolean`

## Methods

### dispatchEvent()

> **dispatchEvent**(`event`): [`WindowEventDispatchResult`](/master/docs/node/api/enumerations/windoweventdispatchresult/)

Defined in: [api/node/typescript/index.ts:110](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L110)

Dispatches a window event to the scene.

Returns whether the scene accepted the event, actively rejected it, or left it unhandled.

#### Parameters

##### event

[`WindowEvent`](/master/docs/node/api/slint-ui/namespaces/platform/type-aliases/windowevent/)

#### Returns

[`WindowEventDispatchResult`](/master/docs/node/api/enumerations/windoweventdispatchresult/)

***

### hide()

> **hide**(): `void`

Defined in: [api/node/typescript/index.ts:100](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L100)

Hides the window, so that it is not visible anymore.

#### Returns

`void`

***

### requestRedraw()

> **requestRedraw**(): `void`

Defined in: [api/node/typescript/index.ts:103](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L103)

Issues a request to the windowing system to re-render the contents of the window.

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [api/node/typescript/index.ts:97](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L97)

Shows the window on the screen. An additional strong reference on the
associated component is maintained while the window is visible.

#### Returns

`void`