---
title: "ComponentHandle"
---
Defined in: [api/node/typescript/index.ts:134](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L134)

This interface describes the public API of a Slint component that is common to all instances. Use this to
show() the window on the screen, access the window and subsequent window properties, or start the
Slint event loop with run().

## Properties

### window?

> `readonly` `optional` **window?**: [`Window`](/master/docs/node/api/interfaces/window/)

Defined in: [api/node/typescript/index.ts:161](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L161)

Returns the [Window](/master/docs/node/api/interfaces/window/) associated with this component instance.
The window API can be used to control different aspects of the integration into the windowing system, such as the position on the screen.

Not present on non-windowed components such as ones inheriting from `SystemTrayIcon`.

## Methods

### hide()

> **hide**(): `void`

Defined in: [api/node/typescript/index.ts:153](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L153)

Hides the component's window, so that it is not visible anymore.

#### Returns

`void`

***

### run()

> **run**(): `Promise`\<`unknown`\>

Defined in: [api/node/typescript/index.ts:143](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L143)

Shows the window and runs the event loop. The returned promise is resolved when the event loop
is terminated, for example when the last window is closed and the last visible system tray
icon is hidden, or when [quitEventLoop](/master/docs/node/api/functions/quiteventloop/) is called.

This function is a convenience for calling [show](/master/docs/node/api/interfaces/componenthandle/#show), followed by [runEventLoop](/master/docs/node/api/functions/runeventloop/), and
[hide](/master/docs/node/api/interfaces/componenthandle/#hide) when the event loop's promise is resolved.

#### Returns

`Promise`\<`unknown`\>

***

### show()

> **show**(): `void`

Defined in: [api/node/typescript/index.ts:148](https://github.com/slint-ui/slint/blob/master/api/node/typescript/index.ts#L148)

Shows the component's window on the screen.

#### Returns

`void`