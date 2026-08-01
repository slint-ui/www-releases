---
title: "PointerScrolledEvent"
---
Defined in: [api/node/typescript/platform.ts:49](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L49)

The wheel button of a mouse was rotated to initiate scrolling.

## See

[Window.dispatchEvent](/master/docs/node/api/interfaces/window/#dispatchevent)

## Properties

### deltaX

> **deltaX**: `number`

Defined in: [api/node/typescript/platform.ts:54](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L54)

The amount of logical pixels to scroll in the horizontal direction.

***

### deltaY

> **deltaY**: `number`

Defined in: [api/node/typescript/platform.ts:56](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L56)

The amount of logical pixels to scroll in the vertical direction.

***

### position

> **position**: [`Point`](/master/docs/node/api/interfaces/point/)

Defined in: [api/node/typescript/platform.ts:52](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L52)

The position of the pointer when the scroll occurred.

***

### type

> **type**: `"pointer-scrolled"`

Defined in: [api/node/typescript/platform.ts:50](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L50)