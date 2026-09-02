---
title: "callback"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import callback
```

<Signature symbol="slint.callback">callback(global_name: <XRef to="typing.Callable" plain />[..., <XRef to="typing.Any" plain />] | <XRef to="str" plain /> | None = None, name: <XRef to="str" plain /> | None = None) -&gt; <XRef to="typing.Callable" plain />[..., <XRef to="typing.Any" plain />]</Signature>

Use the callback decorator to mark a method as a callback that can be invoked from the Slint component.

For the decorator to work, the method must be a member of a class that is Slint component.

Example:
```python
import slint

class AppMainWindow(slint.loader.main_window.MainWindow):

    # Automatically connected to a callback button_clicked()
    # in main_window.slint's MainWindow.
    @slint.callback()
    def button_clicked(self):
        print("Button clicked")

...
```

If your Python method has a different name from the Slint component's callback, use the `name` parameter to specify
the correct name. Similarly, use the `global_name` parameter to specify the name of the correct global singleton in
the Slint component.

**Note:** The callback decorator can also be used with async functions. They will be run as task in the asyncio event loop.
This is only supported for callbacks that don't return any value, and requires Python >= 3.13.