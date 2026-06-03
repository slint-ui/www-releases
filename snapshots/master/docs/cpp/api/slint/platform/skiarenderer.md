---
title: "slint::platform::SkiaRenderer Class"
---
```cpp
class SkiaRenderer;
```

```cpp
#include <slint-platform.h>
```

**Inherits** [slint::platform::AbstractRenderer](../abstractrenderer/).

Slint's Skia renderer.

Create the renderer when you have created a native window with a non-zero size. Call the [render()](./#render) function to render the scene into the window.

## Public Functions

### <a id="skiarenderer"></a> `~SkiaRenderer` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

### <a id="skiarenderer-2"></a> `SkiaRenderer`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">SkiaRenderer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;)=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">delete</span></span></code></pre>

### <a id="operator"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SkiaRenderer</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SkiaRenderer</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)=</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">delete</span></span></code></pre>

### <a id="skiarenderer-3"></a> `SkiaRenderer`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">explicit</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../nativewindowhandle/" class="api-link">NativeWindowHandle</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;window_handle, </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../../physicalsize/" class="api-link">PhysicalSize</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> initial_size)</span></span></code></pre>

Constructs a new Skia renderer for the given window - referenced by the provided WindowHandle - and the specified initial size.

### <a id="render"></a> `render`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SkiaRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Renders the scene into the window provided to the [SkiaRenderer](./)'s constructor.