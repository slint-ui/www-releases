---
title: "WindowMoveArea"
description: "WindowMoveArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

Use `WindowMoveArea` to let the user move the window by dragging a region of your UI,
such as a custom title bar in a window without native decorations (`no-frame: true`).

The move starts when the user presses the left mouse button inside the area and drags past a small threshold.
A plain click doesn't move the window, so child elements like [TouchArea](/master/docs/slint/reference/gestures/toucharea.md) stay interactive.

The windowing system performs the move.
It requires a backend and platform with support for it (winit on Windows, macOS, X11, and Wayland; Qt).
On platforms without support, the element does nothing.

When not part of a layout, its width and height default to 100% of the parent element.

```slint playground
export component Example inherits Window {
    no-frame: true;
    preferred-width: 400px;
    preferred-height: 300px;
    VerticalLayout {
        Rectangle {
            height: 32px;
            background: #444444;
            WindowMoveArea {
                HorizontalLayout {
                    Text {
                        text: "My Application";
                        color: white;
                        vertical-alignment: center;
                        horizontal-alignment: center;
                    }
                }
            }
        }
        Rectangle {
            background: white;
        }
    }
}
```

## Properties

### enabled
<SlintProperty propName="enabled" typeName="bool" defaultValue="true">
Set to `false` to stop the `WindowMoveArea` from initiating window moves.
Events still reach the child elements.
</SlintProperty>