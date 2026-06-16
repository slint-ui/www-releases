---
title: "quit_event_loop"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import quit_event_loop
```

<Signature symbol="slint.quit_event_loop">quit_event_loop() -&gt; <XRef to="None" plain /></Signature>

Quits the running event loop in the next event processing cycle. This will make an earlier call to <XRef to="run_event_loop" />
return.