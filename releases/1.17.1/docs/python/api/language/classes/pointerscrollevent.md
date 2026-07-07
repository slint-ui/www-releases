---
title: "PointerScrollEvent"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import PointerScrollEvent
```

Represents a Pointer scroll (or wheel) event sent by the windowing system.
 This structure is passed to the `scroll-event` callback of the `TouchArea` element.

## Properties

### delta_x

<Signature symbol="slint.language.PointerScrollEvent.delta_x">delta_x: <XRef to="float" plain /></Signature>

The amount of pixel in the horizontal direction

### delta_y

<Signature symbol="slint.language.PointerScrollEvent.delta_y">delta_y: <XRef to="float" plain /></Signature>

The amount of pixel in the vertical direction

### modifiers

<Signature symbol="slint.language.PointerScrollEvent.modifiers">modifiers: <XRef to="typing.Any" plain /></Signature>

The keyboard modifiers pressed during the event