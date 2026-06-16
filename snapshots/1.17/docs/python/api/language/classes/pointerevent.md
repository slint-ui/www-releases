---
title: "PointerEvent"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import PointerEvent
```

Represents a Pointer event sent by the windowing system.
 This structure is passed to the `pointer-event` callback of the `TouchArea` element.

## Properties

### button

<Signature symbol="slint.language.PointerEvent.button">button: <XRef to="typing.Any" plain /></Signature>

The button that was pressed or released

### kind

<Signature symbol="slint.language.PointerEvent.kind">kind: <XRef to="typing.Any" plain /></Signature>

The kind of the event

### modifiers

<Signature symbol="slint.language.PointerEvent.modifiers">modifiers: <XRef to="typing.Any" plain /></Signature>

The keyboard modifiers pressed during the event

### touch_finger_id

<Signature symbol="slint.language.PointerEvent.touch_finger_id">touch_finger_id: <XRef to="int" plain /></Signature>

The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).