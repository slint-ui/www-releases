---
title: "DropEvent"
---
> **DropEvent** = `object`

Defined in: api/node/typescript/generated/language.ts:354

This structure is passed to the callbacks of the `DropArea` element

## Properties

### allow\_copy

> **allow\_copy**: `boolean`

Defined in: api/node/typescript/generated/language.ts:366

Mirrors `DragArea.allow-copy`: true if the source allows the drop to copy the data.

***

### allow\_link

> **allow\_link**: `boolean`

Defined in: api/node/typescript/generated/language.ts:374

Mirrors `DragArea.allow-link`: true if the source allows the drop to link to the data.

***

### allow\_move

> **allow\_move**: `boolean`

Defined in: api/node/typescript/generated/language.ts:370

Mirrors `DragArea.allow-move`: true if the source allows the drop to move the data.

***

### data

> **data**: [`DataTransfer`](/master/docs/node/api/classes/datatransfer/)

Defined in: api/node/typescript/generated/language.ts:358

The payload set on the source `DragArea`.

***

### position

> **position**: `object`

Defined in: api/node/typescript/generated/language.ts:362

The cursor position in the `DropArea`'s local coordinates.

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### proposed\_action

> **proposed\_action**: [`DragAction`](/master/docs/node/api/slint-ui/namespaces/language/type-aliases/dragaction/)

Defined in: api/node/typescript/generated/language.ts:381

The action negotiated from current modifier state and the source's `preferred-action`,
clamped to the allowed set. Updated on every `DragMove`. The target's `can-drop`
callback can return this to honor the user's modifier choice, or override with
any other allowed action.