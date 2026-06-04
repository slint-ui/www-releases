---
title: "KeyEvent"
---
> **KeyEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:510

This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

## Properties

### modifiers

> **modifiers**: [`KeyboardModifiers`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/keyboardmodifiers/)

Defined in: api/node/typescript/generated/language.ts:518

The keyboard modifiers active at the time of the key press event.

***

### repeat

> **repeat**: `boolean`

Defined in: api/node/typescript/generated/language.ts:523

This field is set to true for key press events that are repeated,
i.e. the key is held down. It's always false for key release events.

***

### text

> **text**: `string`

Defined in: api/node/typescript/generated/language.ts:514

The unicode representation of the key pressed.