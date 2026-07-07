---
title: "slint::platform::AbstractRenderer Class"
---
```cpp
class AbstractRenderer;
```

```cpp
#include <slint-platform.h>
```

**Inherited by** [slint::platform::SkiaRenderer](../skiarenderer/), [slint::platform::SoftwareRenderer](../softwarerenderer/).

Internal interface for a renderer for use with the [WindowAdapter](../windowadapter/).

This class is not intended to be re-implemented. In places where this class is required, use one of the existing implementations such as [SoftwareRenderer](../softwarerenderer/) or [SkiaRenderer](../skiarenderer/).