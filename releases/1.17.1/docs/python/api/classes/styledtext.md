---
title: "StyledText"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import StyledText
```

Python wrapper for Slint's `styled-text` type.

## Methods

### from_plain_text

<Signature symbol="slint.slint.StyledText.from_plain_text">from_plain_text(text: <XRef to="str" plain />) -&gt; <XRef to="StyledText" plain /></Signature>

Creates styled text from plain text.

### from_markdown

<Signature symbol="slint.slint.StyledText.from_markdown">from_markdown(markdown: <XRef to="str" plain />) -&gt; <XRef to="StyledText" plain /></Signature>

Parses markdown and returns a StyledText object.

Raises:
    ValueError: If the markdown contains unsupported syntax.