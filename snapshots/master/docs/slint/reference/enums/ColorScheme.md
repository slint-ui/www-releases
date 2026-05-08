---
title: "ColorScheme"
description: "ColorScheme content"
---
<!-- Generated with slint-doc-generator from internal/commons/enums.rs -->

`ColorScheme`

 This enum indicates the color scheme used by the widget style. Use this to explicitly switch
 between dark and light schemes, or choose Unknown to fall back to the system default.

* **`unknown`**:  The scheme is not known and a system wide setting configures this. This could mean that the widgets are shown in a dark or light scheme, but it could also be a custom color scheme.
* **`dark`**:  The style chooses light colors for the background and dark for the foreground.
* **`light`**:  The style chooses dark colors for the background and light for the foreground.