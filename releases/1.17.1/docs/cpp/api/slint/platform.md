---
title: "slint::platform Namespace"
---
Use the types in this namespace when implementing a custom Slint platform.

Slint comes with built-in support for different windowing systems, called backends. A backend is a module that implements the [Platform](platform/) interface in this namespace, interacts with a windowing system, and uses one of Slint's renderers to display a scene to the windowing system. A typical Slint application uses one of the built-in backends. Implement your own [Platform](platform/) if you're using Slint in an environment without a windowing system, such as with microcontrollers, or you're embedding a Slint UI as plugin in other applications.

Examples of custom platform implementation can be found in the Slint repository:

- [https://github.com/slint-ui/slint/tree/master/examples/cpp/platform\_native](https://github.com/slint-ui/slint/tree/master/examples/cpp/platform_native)
- [https://github.com/slint-ui/slint/tree/master/examples/cpp/platform\_qt](https://github.com/slint-ui/slint/tree/master/examples/cpp/platform_qt)
- [https://github.com/slint-ui/slint/blob/master/api/cpp/esp-idf/slint/src/slint-esp.cpp](https://github.com/slint-ui/slint/blob/master/api/cpp/esp-idf/slint/src/slint-esp.cpp)

The entry point to re-implement a platform is the [Platform](platform/) class. Derive from [slint::platform::Platform](platform/), and call [slint::platform::set\_platform](set_platform/) to set it as the Slint platform.

Another important class to subclass is the [WindowAdapter](windowadapter/).

## Namespaces
- [key_codes](key_codes/)

## Types
- [AbstractRenderer](abstractrenderer/)
- [NativeWindowHandle](nativewindowhandle/)
- [Platform](platform/)
- [Rgb565Pixel](rgb565pixel/)
- [SkiaRenderer](skiarenderer/)
- [SoftwareRenderer](softwarerenderer/)
- [WindowAdapter](windowadapter/)

## Functions
- [set_platform](set_platform/)
- [update_timers_and_animations](update_timers_and_animations/)
- [duration_until_next_timer_update](duration_until_next_timer_update/)