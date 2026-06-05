---
title: "PointerScrollEvent"
---
> **PointerScrollEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:486

Represents a Pointer scroll (or wheel) event sent by the windowing system.
This structure is passed to the `scroll-event` callback of the `TouchArea` element.

## Properties

### delta\_x

> **delta\_x**: `number`

Defined in: api/node/typescript/generated/language.ts:490

The amount of pixel in the horizontal direction

***

### delta\_y

> **delta\_y**: `number`

Defined in: api/node/typescript/generated/language.ts:494

The amount of pixel in the vertical direction

***

### modifiers

> **modifiers**: [`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

Defined in: api/node/typescript/generated/language.ts:498

The keyboard modifiers pressed during the event