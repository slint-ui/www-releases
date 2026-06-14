---
title: "PopupWindow"
description: "PopupWindow element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';

```slint playground
export component Example inherits Window {
    width: 100px;
    height: 100px;

    popup := PopupWindow {
        Rectangle { height:100%; width: 100%; background: yellow; }
        x: 20px; y: 20px; height: 50px; width: 50px;
    }

    TouchArea {
        height:100%; width: 100%;
        clicked => { popup.show(); }
    }
}
```

Use this element to show a popup window like a tooltip or a popup menu.

:::note{Note}
It isn't allowed to access properties of elements within the popup from outside of the `PopupWindow`. See [#4438](https://github.com/slint-ui/slint/issues/4438).
:::

## Properties

### close-policy
<SlintProperty propName="close-policy" typeName="enum" enumName="PopupClosePolicy" defaultValue="close-on-click">
By default, a PopupWindow closes when the user clicks. Set this to false to prevent that behavior and close it manually using the `close()` function.
</SlintProperty>

### is-open
<SlintProperty propName="is-open" typeName="bool" propertyVisibility="out">
Use this read-only property to style the element that opened the popup, for example
to rotate a ComboBox's arrow while the dropdown is open.
`true` while the popup is shown on the screen, and `false` once it is closed, for example
when dismissed by a click, by a selection, or by a programmatic `close()`.
</SlintProperty>

## Functions

### show()
Show the popup on the screen.

### close()
Closes the popup. Use this if you set the `close-policy` property to `no-auto-close`.