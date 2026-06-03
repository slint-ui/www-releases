---
title: "set_xdg_app_id"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import set_xdg_app_id
```

<Signature symbol="slint.set_xdg_app_id">set_xdg_app_id(app_id: <XRef to="str" plain />) -&gt; <XRef to="None" plain /></Signature>

Sets the application id for use on Wayland or X11 with [xdg](https://specifications.freedesktop.org/desktop-entry-spec/latest/)
compliant window managers. This id must be set before the window is shown; it only applies to Wayland or X11.