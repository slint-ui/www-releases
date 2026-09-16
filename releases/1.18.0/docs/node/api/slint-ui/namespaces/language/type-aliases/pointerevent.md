---
title: "PointerEvent"
---
> **PointerEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:563

Represents a Pointer event sent by the windowing system.
This structure is passed to the `pointer-event` callback of the `TouchArea` element.

## Properties

### button

> **button**: [`PointerEventButton`](/1.18.0/docs/node/api/slint-ui/namespaces/language/type-aliases/pointereventbutton/)

Defined in: api/node/typescript/generated/language.ts:567

The button that was pressed or released

***

### kind

> **kind**: [`PointerEventKind`](/1.18.0/docs/node/api/slint-ui/namespaces/language/type-aliases/pointereventkind/)

Defined in: api/node/typescript/generated/language.ts:571

The kind of the event

***

### modifiers

> **modifiers**: [`KeyboardModifiers`](/1.18.0/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

Defined in: api/node/typescript/generated/language.ts:575

The keyboard modifiers pressed during the event

***

### touch\_finger\_id

> **touch\_finger\_id**: `number`

Defined in: api/node/typescript/generated/language.ts:579

The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).