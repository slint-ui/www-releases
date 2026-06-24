---
title: "KeyEvent"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import KeyEvent
```

This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

## Properties

### text

<Signature symbol="slint.language.KeyEvent.text">text: <XRef to="str" plain /></Signature>

The unicode representation of the key pressed.

### modifiers

<Signature symbol="slint.language.KeyEvent.modifiers">modifiers: <XRef to="typing.Any" plain /></Signature>

The keyboard modifiers active at the time of the key press event.

### repeat

<Signature symbol="slint.language.KeyEvent.repeat">repeat: <XRef to="bool" plain /></Signature>

This field is set to true for key press events that are repeated,
 i.e. the key is held down. It's always false for key release events.