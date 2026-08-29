---
title: "CloseRequestedEvent"
---
Defined in: [api/node/typescript/platform.ts:140](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L140)

The user requested to close the window.

Dispatching this event invokes the `close-requested` callback of the window element,
and hides the window unless that callback returns `reject`.

## See

[Window.dispatchEvent](/master/docs/node/api/interfaces/window/#dispatchevent)

## Properties

### type

> **type**: `"close-requested"`

Defined in: [api/node/typescript/platform.ts:141](https://github.com/slint-ui/slint/blob/master/api/node/typescript/platform.ts#L141)