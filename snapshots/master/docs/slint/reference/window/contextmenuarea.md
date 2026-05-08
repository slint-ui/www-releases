---
title: "ContextMenuArea"
description: "ContextMenuArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

Use the non-visual `ContextMenuArea` element to declare an area where the user can show a context menu.

The context menu is shown if the user right-clicks on the area covered by the `ContextMenuArea` element,
or if the user presses the "Menu" key on their keyboard while a `FocusScope` within the `ContextMenuArea` has focus.
On Android, the menu is shown with a long press.
Call the `show()` function on the `ContextMenuArea` element to programmatically show the context menu.

One of the children of the `ContextMenuArea` must be a `Menu` element, which defines the menu to be shown.
There can be at most one `Menu` child, all other children must be of a different type and will be shown as regular visual children.
Define the structure of the menu by placing `MenuItem` or `Menu` elements inside that `Menu`.

## Function

### show(Point)

Call this function to programmatically show the context menu at the given position relative to the `ContextMenuArea` element.

## close()

Close the context menu if it's currently open.

### enabled

<SlintProperty propName="enabled" typeName="bool" defaultValue="true">
When disabled, the `Menu` is not showing.
</SlintProperty>

## Example

```slint
export component Example {
    ContextMenuArea {
        Menu {
            MenuItem {
                title: @tr("Cut");
                activated => { debug("Cut"); }
            }
            MenuItem {
                title: @tr("Copy");
                activated => { debug("Copy"); }
            }
            MenuItem {
                title: @tr("Paste");
                activated => { debug("Paste"); }
            }
            MenuSeparator {}
            Menu {
                title: @tr("Find");
                MenuItem {
                    title: @tr("Find Next");
                }
                MenuItem {
                    title: @tr("Find Previous");
                }
            }
        }
    }
}
```