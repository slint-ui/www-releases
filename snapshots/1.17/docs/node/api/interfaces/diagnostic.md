---
title: "Diagnostic"
---
Defined in: api/node/rust-module.d.cts:409

This structure represent a diagnostic emitted while compiling .slint code.

It is basically a message, a level (warning or error), attached to a
position in the code.

## Properties

### columnNumber

> **columnNumber**: `number`

Defined in: api/node/rust-module.d.cts:416

***

### fileName?

> `optional` **fileName?**: `string`

Defined in: api/node/rust-module.d.cts:418

The path of the source file where this diagnostic occurred.

***

### level

> **level**: [`DiagnosticLevel`](/master/docs/node/api/enumerations/diagnosticlevel/)

Defined in: api/node/rust-module.d.cts:411

The level for this diagnostic.

***

### lineNumber

> **lineNumber**: `number`

Defined in: api/node/rust-module.d.cts:415

The line number in the .slint source file. The line number starts with 1.

***

### message

> **message**: `string`

Defined in: api/node/rust-module.d.cts:413

Message for this diagnostic.