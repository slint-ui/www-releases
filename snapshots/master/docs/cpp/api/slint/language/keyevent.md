---
title: "slint::language::KeyEvent Struct"
description: "This structure is generated and passed to the key press and release callbacks of the `FocusScope` element."
---
```cpp
struct KeyEvent;
```

```cpp
#include <slint.h>
```

This structure is generated and passed to the key press and release callbacks of the `FocusScope` element.

## Public Attributes

### <a id="text"></a> `text`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../sharedstring/" class="api-link">SharedString</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">KeyEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::text</span></span></code></pre>

The unicode representation of the key pressed.

### <a id="modifiers"></a> `modifiers`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../keyboardmodifiers/" class="api-link">KeyboardModifiers</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">KeyEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::modifiers</span></span></code></pre>

The keyboard modifiers active at the time of the key press event.

### <a id="repeat"></a> `repeat`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">KeyEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::repeat</span></span></code></pre>

This field is set to true for key press events that are repeated, i.e. the key is held down. It's always false for key release events.