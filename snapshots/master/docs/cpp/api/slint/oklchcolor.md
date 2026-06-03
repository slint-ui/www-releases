---
title: "slint::OklchColor Struct"
---
```cpp
struct OklchColor;
```

```cpp
#include <slint.h>
```

[OklchColor](./) stores the lightness, chroma, hue, and alpha components of a color in the Oklch color space (a perceptually uniform color space).

## Public Attributes

### <a id="lightness"></a> `lightness`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">float</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">OklchColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::lightness</span></span></code></pre>

The lightness component, between 0 (black) and 1 (white).

### <a id="chroma"></a> `chroma`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">float</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">OklchColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::chroma</span></span></code></pre>

The chroma component (saturation), typically between 0 (grayscale) and ~0.4 (vivid).

### <a id="hue"></a> `hue`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">float</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">OklchColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::hue</span></span></code></pre>

The hue component in degrees between 0 and 360.

### <a id="alpha"></a> `alpha`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">float</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">OklchColor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::alpha</span></span></code></pre>

The alpha component, between 0 and 1.