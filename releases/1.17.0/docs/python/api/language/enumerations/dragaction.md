---
title: "DragAction"
---
import XRef from "../../../../../components/XRef.astro";
import Signature from "../../../../../components/Signature.astro";

```python
from slint.language import DragAction
```

This enum describes the action negotiated between the source of a drag (`DragArea`)
 and its target (`DropArea`) during a drag-and-drop operation. The source declares
 which actions it permits, the target picks one in its `can-drop` callback, and the
 chosen action is reported back to the source via `drag-finished` so that, for
 example, a `move` source can remove the original data. The same enum is used for
 drags that come from another application or window once native drag-and-drop is
 in play.

## Values

- **`none`** — No action: the drag is rejected, no drop will be delivered.
- **`copy`** — The data is copied to the target; the source retains it.
- **`move`** — The data is moved to the target; the source should remove it once the
 operation completes.
- **`link`** — A link to the source data is created at the target; neither side gives
 up ownership.