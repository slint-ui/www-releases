---
title: "run_event_loop"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import run_event_loop
```

<Signature symbol="slint.run_event_loop">run_event_loop(main_coro: <XRef to="typing.Optional" plain />[<XRef to="collections.abc.Coroutine" plain />[None, None, None]] = None) -&gt; <XRef to="None" plain /></Signature>

Runs the main Slint event loop. If specified, the coroutine `main_coro` is run in parallel. The event loop doesn't
terminate when the coroutine finishes, it terminates when calling <XRef to="quit_event_loop" />.

Example:
```python
import slint

...
image_model: slint.ListModel[slint.Image] = slint.ListModel()
...

async def main_receiver(image_model: slint.ListModel) -> None:
    async with aiohttp.ClientSession() as session:
        async with session.get("http://some.server/svg-image") as response:
            svg = await response.read()
            image = slint.Image.from_svg_data(svg)
            image_model.append(image)

...
slint.run_event_loop(main_receiver(image_model))
```