---
title: "slint::testing::init Function"
---
```cpp
void slint::testing::init()
```

Init the testing backend. Should be called before any other Slint function that can access the platform. Then future windows will not appear on the screen anymore