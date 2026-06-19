---
title: "slint::language::DropEvent Struct"
description: "This structure is passed to the callbacks of the `DropArea` element."
---
```cpp
struct DropEvent;
```

```cpp
#include <slint.h>
```

This structure is passed to the callbacks of the `DropArea` element.

## Public Attributes

### <a id="data"></a> `data`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../datatransfer/" class="api-link">DataTransfer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::data</span></span></code></pre>

The payload set on the source `DragArea`.

### <a id="position"></a> `position`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../logicalposition/" class="api-link">LogicalPosition</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::position</span></span></code></pre>

The cursor position in the `DropArea`'s local coordinates.

### <a id="proposed_action"></a> `proposed_action`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">DragAction </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::proposed_action</span></span></code></pre>

The action negotiated from current modifier state, clamped to the allowed set; when no modifier is pressed, the first allowed of move, copy, link. Updated on every `DragMove`. The target's `can-drop` callback can return this to honor the user's modifier choice, or override with any other allowed action.