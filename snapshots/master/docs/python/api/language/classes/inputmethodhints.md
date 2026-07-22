---
title: "InputMethodHints"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import InputMethodHints
```

This structure holds the hints that a `TextInput` gives to the platform's input method
 (e.g. a soft keyboard) about the expected input.
 The input method may take these hints into account, but might also ignore them.

## Properties

### capitalization

<Signature symbol="slint.language.InputMethodHints.capitalization">capitalization: <XRef to="slint.language.CapitalizationMode" plain /></Signature>

The auto-capitalization behavior that the input method should apply.
 Defaults to sentences.

### auto_correct

<Signature symbol="slint.language.InputMethodHints.auto_correct">auto_correct: <XRef to="bool" plain /></Signature>

Hint that the input method may automatically correct spelling mistakes as the user types.
 Defaults to true.

### auto_complete

<Signature symbol="slint.language.InputMethodHints.auto_complete">auto_complete: <XRef to="bool" plain /></Signature>

Hint that the input method may offer auto-completion suggestions for the entered text.
 Defaults to true.