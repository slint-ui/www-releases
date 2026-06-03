---
title: "Platform"
description: "Platform Namespace"
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

The **Platform** namespace contains properties that help deal with platform specific differences.

## Properties

### os
<SlintProperty propName="os" typeName="enum" enumName="OperatingSystemType" propertyVisibility="out">
This property holds the type of the operating system detected at run-time.

:::note{Note}
When running in a web browser, the value of this property is computed at run-time by querying the web browser's navigator properties.
:::

:::note{Note}
When Slint is ported to new operating systems in the future, new enum values will be added.
:::
</SlintProperty>

### style-name
<SlintProperty propName="style-name" typeName="string" propertyVisibility="out">
The name of the currently selected [widget style](/master/docs/slint/reference/std-widgets/style.md). Some widget
styles have dark and light variant suffixes, such as `fluent-light`. This property contains the
style name without the suffix. Use [Palette](/master/docs/slint/reference/std-widgets/globals/palette.md)'s `color-scheme` to
determine the currently used scheme.
</SlintProperty>

## Functions

### open-url(url: string) -> bool
Opens the specified URL in an external browser. This function invokes the platform's URL opening mechanism.
Returns `true` on success, or `false` if the platform doesn't support opening URLs or the operation failed.

```slint playground
import { Button } from "std-widgets.slint";

export component Example inherits Window {
    Button {
        text: "Open Slint Website";
        clicked => {
            Platform.open-url("https://slint.dev");
        }
    }
}
```

### bring-all-to-front()
Brings all application windows to the front of the screen.

On macOS this invokes `[NSApp arrangeInFront:]`, which raises every application window
to the top of the window stack. On other platforms this function is a no-op.

This corresponds to the standard macOS **Window › Bring All to Front** menu item.

### decimal-separator
<SlintProperty propName="decimal-separator" typeName="string" propertyVisibility="out">
The decimal separator currently used for localized float to string and vice versa conversions
For more information about localization and how to change the decimal separator see [translations page](/master/docs/slint/guide/development/translations.md).
</SlintProperty>