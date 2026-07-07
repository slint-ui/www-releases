---
title: "Keys"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Keys
```

Represents a key binding created by the `@keys(...)` macro in Slint.

This is an opaque type. Use <XRef to="str" /> to get a platform-native representation
of the key binding (e.g. "Ctrl+A" on Linux/Windows, "⌘A" on macOS).

## Methods

### from_parts

<Signature symbol="slint.slint.Keys.from_parts">from_parts(parts: <XRef to="list" plain />[<XRef to="str" plain />]) -&gt; <XRef to="Keys" plain /></Signature>