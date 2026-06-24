---
title: "Window"
description: "Window element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

`Window` is the root of the tree of elements that are visible on the screen.

The `Window` geometry will be restricted by its layout constraints: Setting the `width` will result in a fixed width,
and the window manager will respect the `min-width` and `max-width` so the window can't be resized bigger
or smaller. The initial width can be controlled with the `preferred-width` property. The same applies to the `Window`s height.

Use the [MenuBar](/1.17.0/docs/slint/reference/window/window.md#menubar) element to declare a menu bar for the window.

## Properties

### always-on-top
<SlintProperty propName="always-on-top" typeName="bool" defaultValue="false">
Whether the window should be placed above all other windows on window managers supporting it.
</SlintProperty>

### full-screen
<SlintProperty propName="full-screen" typeName="bool" propertyVisibility="in-out" defaultValue="true if 'SLINT_FULLSCREEN' environment variable is set, otherwise false">
Whether to display the Window in full-screen mode. In full-screen mode the Window will occupy the entire screen, it will not be resizable, and it will not display the title bar.
</SlintProperty>

### minimized
<SlintProperty propName="minimized" typeName="bool" propertyVisibility="in-out">
Whether the window is minimized. Setting this to true minimizes the window.
</SlintProperty>

### maximized
<SlintProperty propName="maximized" typeName="bool" propertyVisibility="in-out">
Whether the window is maximized. Setting this to true maximizes the window.
</SlintProperty>

### background
<SlintProperty propName="background" typeName="brush" defaultValue="depends on the style">
The background brush of the `Window`.
</SlintProperty>

### default-font-family
<SlintProperty propName="default-font-family" typeName="string">
The font family to use as default in text elements inside this window, that don't have their `font-family` property set.
</SlintProperty>

### default-font-size
<SlintProperty propName="default-font-size" typeName="length" defaultValue="0">
The font size to use as default in text elements inside this window, that don't have their `font-size` property set. The value of this property also forms the basis for relative font sizes.
</SlintProperty>

### default-font-weight
<SlintProperty propName="default-font-weight" typeName="int">
The font weight to use as default in text elements inside this window, that don't have their `font-weight` property set. The values range from 100 (lightest) to 900 (thickest). 400 is the normal weight. Use the [FontWeight](/1.17.0/docs/slint/reference/global-namespaces/font-weight.md) namespace for predefined constants.
</SlintProperty>

### icon
<SlintProperty propName="icon" typeName="image">
The window icon shown in the title bar or the task bar on window managers supporting it.
</SlintProperty>

### no-frame
<SlintProperty propName="no-frame" typeName="bool" defaultValue="false">
Whether the window should be borderless/frameless or not.
</SlintProperty>

### resize-border-width
<SlintProperty propName="resize-border-width" typeName="length" defaultValue="0">
    :::caution[Caution]
    This property is `winit` only for now.
    :::
    Size of the resize border in borderless/frameless windows.
</SlintProperty>

### title
<SlintProperty propName="title" typeName="string" defaultValue="&quot;Slint Window&quot;">
The window title that is shown in the title bar.
</SlintProperty>

### safe-area-insets
<SlintProperty propName="safe-area-insets" typeName="struct" structName="Edges" propertyVisibility="out">
Some devices, such as mobile phones, allow programs to overlap the system UI. A few examples for this are the notch on iPhones, the window buttons on macOS on windows that extend their content over the titlebar and the system bar on Android. This property exposes the amount of space at the edges of the window that can be drawn to but where no interactive elements should be placed. On most devices, this is 0 for all sides.
</SlintProperty>

### virtual-keyboard-position
<SlintProperty propName="virtual-keyboard-position" typeName="struct" structName="Point" propertyVisibility="out">
On mobile devices, virtual keyboards (aka software keyboards or onscreen keyboards) are displayed on top of the application. When such a keyboard is shown, this property denotes the position of the top left boundary of the rectangle covered by it in window coordinates.
</SlintProperty>

### virtual-keyboard-size
<SlintProperty propName="virtual-keyboard-size" typeName="struct" structName="Size" propertyVisibility="out">
On mobile devices, virtual keyboards (aka software keyboards or onscreen keyboards) are displayed on top of the application. When such a keyboard is shown, this property denotes the width and height of the rectangle covered by it in window coordinates.
</SlintProperty>

## Functions

### close() -> bool
Request that the window be closed. This triggers the `close-requested` callback,
giving the application a chance to cancel the close. Returns `true` if the close
was dispatched, or `false` if the application declined.

### hide()
Hide this window. This also drops the strong reference on the window, so if this was
the last reference, the event loop will quit.

## `MenuBar`

Use the `MenuBar` element in a [Window](/1.17.0/docs/slint/reference/window/window.md) to declare the structure of a menu bar, including the actual
menus and sub-menus.

:::note{Note}
There can only be one `MenuBar` element in a `Window` and it must not be in a `for` or a `if`.
:::

The `MenuBar` doesn't have properties, but it must contain [Menu](/1.17.0/docs/slint/reference/window/contextmenuarea.md#menu) as children that represent top level entries in the menu bar.

Depending on the platform, the menu bar might be native or rendered by Slint.
This means that for example, on macOS, the menu bar will be at the top of the screen.
The `width` and `height` property of the [Window](/1.17.0/docs/slint/reference/window/window.md) define the client area, excluding the menu bar.
The `x` and `y` properties of `Window` children are also relative to the client area.

### Example

```slint
export component Example inherits Window {
    MenuBar {
        Menu {
            title: @tr("File");
            MenuItem {
                title: @tr("New");
                activated => { file-new(); }
                shortcut: @keys(Control + N);
            }
            MenuItem {
                title: @tr("Open");
                activated => { file-open(); }
                shortcut: @keys(Control + O);
            }
        }
        Menu {
            title: @tr("Edit");
            MenuItem {
                title: @tr("Copy");
            }
            MenuItem {
                title: @tr("Paste");
            }
            MenuSeparator {}
            Menu {
                title: @tr("Find");
                MenuItem {
                    title: @tr("Find in document...");
                }
                MenuItem {
                    title: @tr("Find Next");
                }
                MenuItem {
                    title: @tr("Find Previous");
                }
            }
        }
    }

    callback file-new();
    callback file-open();

    // ... actual window content goes here
}
```

### visible
<SlintProperty propName="visible" typeName="bool" defaultValue="true">
Whether this menu bar should be visible.  If the menu bar is not visible, the menu bar will not take up any space but shortcuts will still function.
</SlintProperty>