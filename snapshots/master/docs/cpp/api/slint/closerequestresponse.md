---
title: "slint::CloseRequestResponse Enum"
---
```cpp
enum class CloseRequestResponse
```

| Value | Description |
| --- | --- |
| `HideWindow` | The [Window](../window/) will be hidden (default action) |
| `KeepWindowShown` | The close request is rejected and the window will be kept shown. |

This enum describes whether a [Window](../window/) is allowed to be hidden when the user tries to close the window. It is the return type of the callback provided to \[[Window::on\_close\_requested](../window/#on_close_requested)\].