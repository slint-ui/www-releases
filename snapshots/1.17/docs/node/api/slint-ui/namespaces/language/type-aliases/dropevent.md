---
title: "DropEvent"
---
> **DropEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:575

This structure is passed to the callbacks of the `DropArea` element

## Properties

### data

> **data**: [`DataTransfer`](/master/docs/node/api/classes/datatransfer/)

Defined in: api/node/typescript/generated/language.ts:579

The payload set on the source `DragArea`.

***

### position

> **position**: `object`

Defined in: api/node/typescript/generated/language.ts:583

The cursor position in the `DropArea`'s local coordinates.

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### proposed\_action

> **proposed\_action**: [`DragAction`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dragaction/)

Defined in: api/node/typescript/generated/language.ts:590

The action negotiated from current modifier state, clamped to the allowed set;
when no modifier is pressed, the first allowed of move, copy, link.
Updated on every `DragMove`. The target's `can-drop` callback can return this
to honor the user's modifier choice, or override with any other allowed action.