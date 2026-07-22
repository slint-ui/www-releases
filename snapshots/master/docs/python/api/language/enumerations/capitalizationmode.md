---
title: "CapitalizationMode"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import CapitalizationMode
```

This enum describes the auto-capitalization behavior that the input method
 (e.g. a soft keyboard) should apply while text is entered in a `TextInput`.

## Values

- **`none`** — No auto-capitalization.
- **`sentences`** — Capitalize the first character of each sentence.
- **`words`** — Capitalize the first character of each word.
- **`characters`** — Capitalize all characters.