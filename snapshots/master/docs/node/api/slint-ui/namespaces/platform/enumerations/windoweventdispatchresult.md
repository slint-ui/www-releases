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

### Rejected

> **Rejected**: `1`

Defined in: api/node/rust-module.d.cts:526

The event wasn't handled: no element consumed it, or a handler actively refused it,
such as a `close-requested` callback returning `reject` to keep the window open.