---
title: "slint::run_event_loop Function"
---
```cpp
void slint::run_event_loop(EventLoopMode mode=EventLoopMode::QuitOnLastWindowClosed)
```

Enters the main event loop. This is necessary in order to receive events from the windowing system in order to render to the screen and react to user input.

The mode parameter determines when the loop returns. The default, QuitOnLastWindowClosed, returns once the last window is closed and the last visible system tray icon is hidden.