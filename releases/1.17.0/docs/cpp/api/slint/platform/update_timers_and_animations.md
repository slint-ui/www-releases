---
title: "slint::platform::update_timers_and_animations Function"
---
```cpp
void slint::platform::update_timers_and_animations()
```

Call this function at each iteration of the event loop to call the timer handler and advance the animations. This should be called before the rendering or processing input events