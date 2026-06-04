---
title: "runEventLoop"
---
> **runEventLoop**(`args?`): `Promise`\<`unknown`\>

Defined in: [api/node/typescript/index.ts:802](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L802)

Spins the Slint event loop and returns a promise that resolves when the loop terminates.

If the event loop is already running, then this function returns the same promise as from
the earlier invocation.

## Parameters

### args?

`Function` \| \{ `quitOnLastWindowClosed?`: `boolean`; `runningCallback?`: `Function`; \}

As Function it defines a callback that's invoked once when the event loop is running.

`Function`

***

#### Type Literal

\{ `quitOnLastWindowClosed?`: `boolean`; `runningCallback?`: `Function`; \}

As Function it defines a callback that's invoked once when the event loop is running.

##### quitOnLastWindowClosed?

`boolean`

if set to `true` the loop quits once the last window is closed
                         and the last visible system tray icon is hidden; otherwise it runs until
                         [quitEventLoop](/master/docs/node/api/functions/quiteventloop/) is called. A visible SystemTrayIcon keeps the loop alive
                         on its own under the default, so set this to `false` only when an
                         application must run without any visible UI. (default true).

On Linux and macOS with Node.js,
Slint uses an efficient event loop integration that watches libuv's backend
file descriptor from a background thread.
This provides zero idle CPU usage and near-instant response to both UI and
JavaScript events.

On Windows and other runtimes (Deno),
the integration falls back to polling at 16 millisecond intervals,
which consumes a small amount of CPU when idle.

##### runningCallback?

`Function`

Optional callback that's invoked once when the event loop is running.
                        The function's return value is ignored.

## Returns

`Promise`\<`unknown`\>