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

- **<span id="none">`none`</span>** — No auto-capitalization.
- **<span id="sentences">`sentences`</span>** — Capitalize the first character of each sentence.
- **<span id="words">`words`</span>** — Capitalize the first character of each word.
- **<span id="characters">`characters`</span>** — Capitalize all characters.