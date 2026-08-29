---
title: "ScaleFactorChangedEvent"
---
Defined in: [api/node/typescript/platform.ts:113](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L113)

The window's scale factor has changed.
This can happen for example when the display's resolution changes,
the user selects a new scale factor in the system settings,
or the window is moved to a different screen.

## See

[Window.dispatchEvent](/master/docs/node/api/interfaces/window/#dispatchevent)

## Properties

### scaleFactor

> **scaleFactor**: `number`

Defined in: [api/node/typescript/platform.ts:116](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L116)

The window system provided scale factor to map logical pixels to physical pixels.

***

### type

> **type**: `"scale-factor-changed"`

Defined in: [api/node/typescript/platform.ts:114](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L114)