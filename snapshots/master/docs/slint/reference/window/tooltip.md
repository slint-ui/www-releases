---
title: "ToolTip"
description: "ToolTip element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';

```slint playground
import { Button } from "std-widgets.slint";

export component Example inherits Window {
    width: 280px;
    height: 160px;

    VerticalLayout {
        alignment: center;

        Button {
            text: "Hover me";

            ToolTip {
                text: "This is a tooltip";
            }
        }
    }
}
```

Place a `ToolTip` inside any element to show helpful information when hovering over it.
The tooltip appears after a short delay and hides when the pointer leaves.

Set the `text` property for a simple text tooltip,
or add a child element instead for custom content.

Each element can contain at most one `ToolTip`.

## Properties

### text
<SlintProperty propName="text" typeName="string">
The text to display in the tooltip.
Don't set this property when using custom content.
</SlintProperty>

### placement
<SlintProperty propName="placement" typeName="enum" enumName="ToolTipPlacement">
Position relative to the hovered element or pointer.
</SlintProperty>

### delay
<SlintProperty propName="delay" typeName="duration" defaultValue="500ms">
How long to wait before showing the tooltip after hover begins.
</SlintProperty>

### offset
<SlintProperty propName="offset" typeName="length" defaultValue="8px">
Space between the tooltip and the pointer or hovered element.
</SlintProperty>

## Custom Content

For richer tooltips, omit `text` and provide your own layout inside a single child element.


```slint playground
import { Button, VerticalBox, HorizontalBox } from "std-widgets.slint";

export component Example inherits Window {
    width: 320px;
    height: 200px;

    VerticalLayout {
        alignment: center;

        Button {
            text: "Custom tooltip";

            ToolTip {
                placement: above-element;

                VerticalBox {
                    padding: 10px;
                    spacing: 6px;

                    Text {
                        text: "Quick Actions";
                        font-weight: 700;
                        color: #fff;
                    }

                    Text {
                        text: "Open command palette and search settings.";
                        color: #d1d5db;
                        wrap: word-wrap;
                    }

                    HorizontalBox {
                        spacing: 6px;

                        Rectangle {
                            border-radius: 4px;
                            background: #374151;
                            HorizontalBox {
                                padding: 4px;
                                Text { text: "Ctrl"; color: #fff; }
                            }
                        }

                        Rectangle {
                            border-radius: 4px;
                            background: #374151;
                            HorizontalBox {
                                padding: 4px;
                                Text { text: "K"; color: #fff; }
                            }
                        }
                    }
                }
            }
        }
    }
}
```