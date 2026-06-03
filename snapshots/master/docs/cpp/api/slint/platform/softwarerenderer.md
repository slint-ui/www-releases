---
title: "slint::platform::SoftwareRenderer Class"
---
```cpp
class SoftwareRenderer;
```

```cpp
#include <slint-platform.h>
```

**Inherits** [slint::platform::AbstractRenderer](../abstractrenderer/).

Slint's software renderer.

To be used as a template parameter of the [WindowAdapter](../windowadapter/).

Use the [render()](./#render) function to render in a buffer

## Types
- [PhysicalRegion](../softwarerenderer-physicalregion/)
- [TargetPixelBuffer](../softwarerenderer-targetpixelbuffer/)

## Public Types

### <a id="repaintbuffertype"></a> `RepaintBufferType`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> RepaintBufferType</span></span></code></pre>

| Value | Description |
| --- | --- |
| `NewBuffer` | The full window is always redrawn. No attempt at partial rendering will be made. |
| `ReusedBuffer` |  |
| `SwappedBuffers` |  |

This enum describes which parts of the buffer passed to the [SoftwareRenderer](./) may be re-used to speed up painting.

### <a id="renderingrotation"></a> `RenderingRotation`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> RenderingRotation</span></span></code></pre>

| Value | Description |
| --- | --- |
| `NoRotation` | No rotation. |
| `Rotate90` | Rotate 90° to the left. |
| `Rotate180` | 180° rotation (upside-down) |
| `Rotate270` | Rotate 90° to the right. |

This enum describes the rotation that is applied to the buffer when rendering. To be used in [set\_rendering\_rotation()](./#set_rendering_rotation)

### <a id="drawtextureargs"></a> `DrawTextureArgs`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">cbindgen_private</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawTextureArgs </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">using</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawTextureArgs =  </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">cbindgen_private</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawTextureArgs</span></span></code></pre>

Representation of a texture to blend in the destination buffer.

### <a id="drawrectangleargs"></a> `DrawRectangleArgs`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">cbindgen_private</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawRectangleArgs </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">using</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawRectangleArgs =  </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">cbindgen_private</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::DrawRectangleArgs</span></span></code></pre>

Arguments for draw\_rectangle.

## Public Functions

### <a id="softwarerenderer"></a> `~SoftwareRenderer` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

### <a id="softwarerenderer-2"></a> `SoftwareRenderer`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./" class="api-link">SoftwareRenderer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> &#x26;)=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">delete</span></span></code></pre>

### <a id="operator"></a> `operator=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SoftwareRenderer</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">operator=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">SoftwareRenderer</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)=</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">delete</span></span></code></pre>

### <a id="softwarerenderer-3"></a> `SoftwareRenderer`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">explicit</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="./#repaintbuffertype" class="api-link">RepaintBufferType</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> buffer_type)</span></span></code></pre>

Constructs a new [SoftwareRenderer](./) with the *buffer\_type* as strategy for handling the differences between rendering buffers.

### <a id="render"></a> `render`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-physicalregion/" class="api-link">PhysicalRegion</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/container/span" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">span</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a href="../../rgb8pixel/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Rgb8Pixel</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">buffer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/types/size_t" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> pixel_stride</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Render the window scene into a pixel buffer

The buffer must be at least as large as the associated [slint::Window](../../window/)

The stride is the amount of pixels between two lines in the buffer. It is must be at least as large as the width of the window.

### <a id="render-2"></a> `render`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-physicalregion/" class="api-link">PhysicalRegion</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/container/span" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">span</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../rgb565pixel/" class="api-link">Rgb565Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">buffer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a href="https://en.cppreference.com/w/cpp/types/size_t" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">size_t</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> pixel_stride</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Render the window scene into an RGB 565 encoded pixel buffer

The buffer must be at least as large as the associated [slint::Window](../../window/)

The stride is the amount of pixels between two lines in the buffer. It is must be at least as large as the width of the window.

### <a id="render_by_line"></a> `render_by_line`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-physicalregion/" class="api-link">PhysicalRegion</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render_by_line</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Callback</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> process_line_callback</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Render the window scene, line by line. The provided Callback will be invoked for each line that needs to rendered.

The renderer uses a cache internally and will only render the part of the window which are dirty.

This function returns the physical region that was rendered considering the rotation.

The callback must be an invocable with the signature (size\_t line, size\_t begin, size\_t end, auto render\_fn). It is invoked with the line number as first parameter, and the start x and end x coordinates of the line as second and third parameter. The implementation must provide a line buffer (as [std::span](https://en.cppreference.com/w/cpp/container/span)) and invoke the provided fourth parameter (render\_fn) with it, to fill it with pixels. After the line buffer is filled with pixels, your implementation is free to flush that line to the screen for display.

The first template parameter (PixelType) must be specified and can be either [Rgb565Pixel](../rgb565pixel/) or [Rgb8Pixel](../../rgb8pixel/).

### <a id="render-3"></a> `render`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-physicalregion/" class="api-link">PhysicalRegion</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-targetpixelbuffer/" class="api-link">TargetPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../../rgb8pixel/" class="api-link">Rgb8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">*</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">buffer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Renders into the given [TargetPixelBuffer](../softwarerenderer-targetpixelbuffer/).

**Note**: This class is still experimental - its API is subject to changes and not stabilized yet. To use the class, you must enable the `SLINT_FEATURE_EXPERIMENTAL=ON` CMake option.

### <a id="render-4"></a> `render`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-physicalregion/" class="api-link">PhysicalRegion</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">render</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../softwarerenderer-targetpixelbuffer/" class="api-link">TargetPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../rgb565pixel/" class="api-link">Rgb565Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">*</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">buffer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Renders into the given [TargetPixelBuffer](../softwarerenderer-targetpixelbuffer/).

**Note**: This class is still experimental - its API is subject to changes and not stabilized yet. To use the class, you must enable the `SLINT_FEATURE_EXPERIMENTAL=ON` CMake option.

### <a id="set_rendering_rotation"></a> `set_rendering_rotation`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SoftwareRenderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_rendering_rotation</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./#renderingrotation" class="api-link">RenderingRotation</a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> rotation</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Set how the window needs to be rotated in the buffer.

This is typically used to implement screen rotation in software