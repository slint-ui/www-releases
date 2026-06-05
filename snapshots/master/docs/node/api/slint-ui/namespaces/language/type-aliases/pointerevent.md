---
title: "PointerEvent"
---
> **PointerEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:464

Represents a Pointer event sent by the windowing system.
This structure is passed to the `pointer-event` callback of the `TouchArea` element.

## Properties

### button

> **button**: [`PointerEventButton`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointereventbutton/)

Defined in: api/node/typescript/generated/language.ts:468

The button that was pressed or released

***

### kind

> **kind**: [`PointerEventKind`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/pointereventkind/)

Defined in: api/node/typescript/generated/language.ts:472

The kind of the event

***

### modifiers

> **modifiers**: [`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

Defined in: api/node/typescript/generated/language.ts:476

The keyboard modifiers pressed during the event

***

### touch\_finger\_id

> **touch\_finger\_id**: `number`

Defined in: api/node/typescript/generated/language.ts:480

The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).