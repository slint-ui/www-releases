---
title: "loader"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import loader
```

<Signature symbol="slint.loader">loader</Signature>

Use the global <XRef to="loader" /> object to load Slint files from the file system. It exposes two stages of attributes:
1. Any lookup of an attribute in the loader tries to match a file in `sys.path` with the `.slint` extension. For example
   `loader.my_component` looks for a file `my_component.slint` in the directories in `sys.path`.
2. Any lookup in the object returned by the first stage tries to match an exported component in the loaded file, or a
   struct, or enum. For example `loader.my_component.MyComponent` looks for an *exported* component named `MyComponent`
   in the file `my_component.slint`.

**Note:** The first entry in the module search path `sys.path` is the directory that contains the input script.

Example:
```python
import slint
# Look for a file `main.slint` in the current directory,
# #load & compile it, and instantiate the exported `MainWindow` component
main_window = slint.loader.main_window.MainWindow()
main_window.show()
...
```