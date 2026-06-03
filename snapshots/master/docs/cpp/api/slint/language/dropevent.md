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

### <a id="allow_copy"></a> `allow_copy`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::allow_copy</span></span></code></pre>

Mirrors `DragArea.allow-copy`: true if the source allows the drop to copy the data.

### <a id="allow_move"></a> `allow_move`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::allow_move</span></span></code></pre>

Mirrors `DragArea.allow-move`: true if the source allows the drop to move the data.

### <a id="allow_link"></a> `allow_link`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::allow_link</span></span></code></pre>

Mirrors `DragArea.allow-link`: true if the source allows the drop to link to the data.

### <a id="proposed_action"></a> `proposed_action`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">DragAction </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">DropEvent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::proposed_action</span></span></code></pre>

The action negotiated from current modifier state and the source's `preferred-action`, clamped to the allowed set. Updated on every `DragMove`. The target's `can-drop` callback can return this to honor the user's modifier choice, or override with any other allowed action.