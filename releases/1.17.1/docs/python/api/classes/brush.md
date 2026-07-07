---
title: "Brush"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Brush
```

## Properties

### color

<Signature symbol="slint.slint.Brush.color">color: <XRef to="slint.slint.Color" plain /></Signature>

## Methods

### is_transparent

<Signature symbol="slint.slint.Brush.is_transparent">is_transparent() -&gt; <XRef to="bool" plain /></Signature>

### is_opaque

<Signature symbol="slint.slint.Brush.is_opaque">is_opaque() -&gt; <XRef to="bool" plain /></Signature>

### brighter

<Signature symbol="slint.slint.Brush.brighter">brighter(factor: <XRef to="float" plain />) -&gt; <XRef to="Brush" plain /></Signature>

### darker

<Signature symbol="slint.slint.Brush.darker">darker(factor: <XRef to="float" plain />) -&gt; <XRef to="Brush" plain /></Signature>

### transparentize

<Signature symbol="slint.slint.Brush.transparentize">transparentize(amount: <XRef to="float" plain />) -&gt; <XRef to="Brush" plain /></Signature>

### with_alpha

<Signature symbol="slint.slint.Brush.with_alpha">with_alpha(alpha: <XRef to="float" plain />) -&gt; <XRef to="Brush" plain /></Signature>