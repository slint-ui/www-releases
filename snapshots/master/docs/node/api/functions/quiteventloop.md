---
title: "quitEventLoop"
---
> **quitEventLoop**(): `void`

Defined in: [api/node/typescript/index.ts:824](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L824)

Stops a spinning event loop. This function returns immediately, and the promise returned
from run_event_loop() will resolve in a later tick of the nodejs event loop.

## Returns

`void`