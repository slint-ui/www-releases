---
title: "DropEvent"
---
> **DropEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:521

This structure is passed to the callbacks of the `DropArea` element

## Properties

### allow\_copy

> **allow\_copy**: `boolean`

Defined in: api/node/typescript/generated/language.ts:533

Mirrors `DragArea.allow-copy`: true if the source allows the drop to copy the data.

***

### allow\_link

> **allow\_link**: `boolean`

Defined in: api/node/typescript/generated/language.ts:541

Mirrors `DragArea.allow-link`: true if the source allows the drop to link to the data.

***

### allow\_move

> **allow\_move**: `boolean`

Defined in: api/node/typescript/generated/language.ts:537

Mirrors `DragArea.allow-move`: true if the source allows the drop to move the data.

***

### data

> **data**: [`DataTransfer`](/master/docs/node/api/classes/datatransfer/)

Defined in: api/node/typescript/generated/language.ts:525

The payload set on the source `DragArea`.

***

### position

> **position**: `object`

Defined in: api/node/typescript/generated/language.ts:529

The cursor position in the `DropArea`'s local coordinates.

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### proposed\_action

> **proposed\_action**: [`DragAction`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dragaction/)

Defined in: api/node/typescript/generated/language.ts:548

The action negotiated from current modifier state, clamped to the allowed set;
when no modifier is pressed, the first allowed of move, copy, link.
Updated on every `DragMove`. The target's `can-drop` callback can return this
to honor the user's modifier choice, or override with any other allowed action.