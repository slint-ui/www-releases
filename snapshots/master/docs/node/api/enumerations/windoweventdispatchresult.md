---
title: "WindowEventDispatchResult"
---
Defined in: api/node/rust-module.d.cts:516

Result of dispatching a window event through Slint's runtime.

## Enumeration Members

### Accepted

> **Accepted**: `0`

Defined in: api/node/rust-module.d.cts:521

The event was handled. For example, a key handler consumed a key press, or
the window acted on a resize or close request.

***

### Ignored

> **Ignored**: `2`

Defined in: api/node/rust-module.d.cts:528

The event was not handled by any element.

***

### Rejected

> **Rejected**: `1`

Defined in: api/node/rust-module.d.cts:526

The event was actively refused. For example, a `close-requested` callback
returned `reject` to prevent the window from closing.