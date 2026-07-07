---
title: "Timer"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Timer
```

## Properties

### running

<Signature symbol="slint.slint.Timer.running">running: <XRef to="bool" plain /></Signature>

### interval

<Signature symbol="slint.slint.Timer.interval">interval: datetime.<XRef to="datetime.timedelta" plain /></Signature>

## Methods

### start

<Signature symbol="slint.slint.Timer.start">start(mode: <XRef to="slint.slint.TimerMode" plain />, interval: datetime.<XRef to="datetime.timedelta" plain />, callback: <XRef to="typing.Any" plain />) -&gt; <XRef to="None" plain /></Signature>

### single_shot

<Signature symbol="slint.slint.Timer.single_shot">single_shot(duration: datetime.<XRef to="datetime.timedelta" plain />, callback: <XRef to="typing.Any" plain />) -&gt; <XRef to="None" plain /></Signature>

### stop

<Signature symbol="slint.slint.Timer.stop">stop() -&gt; <XRef to="None" plain /></Signature>

### restart

<Signature symbol="slint.slint.Timer.restart">restart() -&gt; <XRef to="None" plain /></Signature>