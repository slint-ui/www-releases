---
title: "slint::quit_event_loop Function"
---
```cpp
void slint::quit_event_loop()
```

Schedules the main event loop for termination. This function is meant to be called from callbacks triggered by the UI. After calling the function, it will return immediately and once control is passed back to the event loop, the initial call to [slint::run\_event\_loop()](../run_event_loop/) will return.