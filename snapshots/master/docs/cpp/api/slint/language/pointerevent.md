---
title: "slint::language::PointerEvent Struct"
---
```cpp
struct PointerEvent;
```

```cpp
#include <slint.h>
```

Represents a Pointer event sent by the windowing system. This structure is passed to the `pointer-event` callback of the `TouchArea` element.

## Public Attributes

### <a id="button"></a> `button`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">PointerEventButton </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PointerEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::button</span></span></code></pre>

The button that was pressed or released.

### <a id="kind"></a> `kind`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">PointerEventKind </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PointerEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::kind</span></span></code></pre>

The kind of the event.

### <a id="modifiers"></a> `modifiers`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../keyboardmodifiers/" class="api-link">KeyboardModifiers</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PointerEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::modifiers</span></span></code></pre>

The keyboard modifiers pressed during the event.

### <a id="touch_finger_id"></a> `touch_finger_id`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">int32_t</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PointerEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::touch_finger_id</span></span></code></pre>

The unique ID of the touch point, indicating the finger ID. 0 means it's not a touch event (e.g., mouse).