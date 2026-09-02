---
title: "Component"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Component
```

Component is the base class for all instances of Slint components. Use the member functions to show or hide the
window, or spin the event loop.

## Methods

### show

<Signature symbol="slint.Component.show">show() -&gt; <XRef to="None" plain /></Signature>

Shows the window on the screen.

### hide

<Signature symbol="slint.Component.hide">hide() -&gt; <XRef to="None" plain /></Signature>

Hides the window from the screen.

### run

<Signature symbol="slint.Component.run">run() -&gt; <XRef to="None" plain /></Signature>

Shows the window, runs the event loop, hides it when the loop is quit, and returns.