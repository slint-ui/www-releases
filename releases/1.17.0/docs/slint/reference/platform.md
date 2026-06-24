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
The name of the currently selected [widget style](/1.17.0/docs/slint/reference/std-widgets/style.md). Some widget
styles have dark and light variant suffixes, such as `fluent-light`. This property contains the
style name without the suffix. Use [Palette](/1.17.0/docs/slint/reference/std-widgets/globals/palette.md)'s `color-scheme` to
determine the currently used scheme.
</SlintProperty>

### decimal-separator
<SlintProperty propName="decimal-separator" typeName="string" propertyVisibility="out">
The decimal separator used when converting between `float` and `string`.
It defaults to the dot (`.`) and is determined by the locale.
See the [translations guide](/1.17.0/docs/slint/guide/development/translations.md) for details.
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

### macos-bring-all-windows-to-front()
Brings all application windows to the front of the screen.

On macOS this invokes `[NSApp arrangeInFront:]`, which raises every application window
to the top of the window stack. On other platforms this function is a no-op.

This corresponds to the standard macOS **Window › Bring All to Front** menu item.