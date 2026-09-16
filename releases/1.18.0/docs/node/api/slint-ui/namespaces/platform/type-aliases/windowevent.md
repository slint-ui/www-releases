---
title: "WindowEvent"
---
> **WindowEvent** = [`PointerPressedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/pointerpressedevent/) \| [`PointerReleasedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/pointerreleasedevent/) \| [`PointerMovedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/pointermovedevent/) \| [`PointerScrolledEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/pointerscrolledevent/) \| [`PointerExitedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/pointerexitedevent/) \| [`KeyPressedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/keypressedevent/) \| [`KeyPressRepeatedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/keypressrepeatedevent/) \| [`KeyReleasedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/keyreleasedevent/) \| [`ScaleFactorChangedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/scalefactorchangedevent/) \| [`ResizedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/resizedevent/) \| [`CloseRequestedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/closerequestedevent/) \| [`WindowActiveChangedEvent`](/1.18.0/docs/node/api/slint-ui/namespaces/platform/interfaces/windowactivechangedevent/)

Defined in: api/node/typescript/generated/window-event.ts:203

An event that describes user input or a windowing system change.

The `type` field selects the variant and determines which other fields apply.
Dispatch an event to a window with `Window.dispatchEvent`,
which reports whether the scene accepted or rejected it.

## Example

```js
import * as slint from "slint-ui";

const result = window.dispatchEvent({
    type: "pointer-pressed",
    position: { x: 51, y: 51 },
    button: "left",
});

if (result === slint.platform.WindowEventDispatchResult.Accepted) {
    console.log("the scene handled the press");
}
```