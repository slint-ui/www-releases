---
title: "Overview"
description: "Widgets Overview."
---
import CodeSnippetMD from '@slint/common-files/src/components/CodeSnippetMD.astro';
import Link from '@slint/common-files/src/components/Link.astro';

```slint playground
import { Palette, HorizontalBox } from "std-widgets.slint";

export component MyCustomWidget {
    in property <string> text <=> label.text;

    Rectangle {
        background: Palette.control-background;

        HorizontalBox {
            label := Text {
                color: Palette.control-foreground;
            }
        }
    }
}
```


Slint provides a series of built-in widgets that can be imported from `"std-widgets.slint"`.

The widget appearance depends on the selected style.
See [Selecting a Widget Style](/master/docs/slint/reference/std-widgets/style.md) for details how to select the style and how to use the `Palette` and `StyleMetrics` properties. If no style is selected, `fluent` is the default on all platforms.


All widgets support all [properties common to builtin elements](/master/docs/slint/reference/common.md).