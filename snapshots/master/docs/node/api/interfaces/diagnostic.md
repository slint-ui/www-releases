---
title: "Diagnostic"
---
Defined in: api/node/rust-module.d.cts:398

This structure represent a diagnostic emitted while compiling .slint code.

It is basically a message, a level (warning or error), attached to a
position in the code.

## Properties

### columnNumber

> **columnNumber**: `number`

Defined in: api/node/rust-module.d.cts:405

***

### fileName?

> `optional` **fileName?**: `string`

Defined in: api/node/rust-module.d.cts:407

The path of the source file where this diagnostic occurred.

***

### level

> **level**: [`DiagnosticLevel`](/master/docs/node/api/enumerations/diagnosticlevel/)

Defined in: api/node/rust-module.d.cts:400

The level for this diagnostic.

***

### lineNumber

> **lineNumber**: `number`

Defined in: api/node/rust-module.d.cts:404

The line number in the .slint source file. The line number starts with 1.

***

### message

> **message**: `string`

Defined in: api/node/rust-module.d.cts:402

Message for this diagnostic.