---
title: "ColorScheme"
---
> **ColorScheme** = *typeof* [`ColorScheme`](/master/docs/node/api/variables/language/#colorscheme)\[keyof *typeof* [`ColorScheme`](/master/docs/node/api/variables/language/#colorscheme)\]

Defined in: api/node/typescript/generated/language.ts:422

This enum indicates the color scheme used by the widget style. Use this to explicitly switch
between dark and light schemes, or choose Unknown to fall back to the system default.

Variants:
- `language.ColorScheme.Unknown` (`"unknown"`) — The scheme is not known and a system wide setting configures this. This could mean that the widgets are shown in a dark or light scheme, but it could also be a custom color scheme.
- `language.ColorScheme.Dark` (`"dark"`) — The style chooses light colors for the background and dark for the foreground.
- `language.ColorScheme.Light` (`"light"`) — The style chooses dark colors for the background and light for the foreground.