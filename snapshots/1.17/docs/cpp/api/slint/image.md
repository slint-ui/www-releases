---
title: "slint::Image Struct"
---
```cpp
struct Image;
```

```cpp
#include <slint.h>
```

An image type that can be displayed by the [Image](./) element

You can construct [Image](./) objects from a path to an image file on disk, using [Image::load\_from\_path()](./#load_from_path).

Another typical use-case is to render the image content with C++ code. For this it’s most efficient to create a new [SharedPixelBuffer](../sharedpixelbuffer/) with the known dimensions and pass the pixel pointer returned by begin() to your rendering function. Afterwards you can create an [Image](./) using the constructor taking a [SharedPixelBuffer](../sharedpixelbuffer/).

The following example creates a 320x200 RGB pixel buffer and calls a function to draw a shape into it:

```cpp
slint::SharedPixelBuffer<slint::Rgb8Pixel> pixel_buffer(320, 200);
low_level_render(pixel_buffer.width(), pixel_buffer.height(),
                 static_cast<unsigned char *>(pixel_buffer.begin()));
slint::Image image(pixel_buffer);
```

Another use-case is to import existing image data into Slint, by creating a new [Image](./) through copying of the buffer:

```cpp
slint::Image image(slint::SharedPixelBuffer<slint::Rgb8Pixel>(the_width, the_height,
    static_cast<slint::Rgb8Pixel*>(the_data));
```

This only works if the static\_cast is valid and the underlying data has the same memory layout as [slint::Rgb8Pixel](../rgb8pixel/) or [slint::Rgba8Pixel](../rgba8pixel/). Otherwise, you will have to do a pixel conversion as you copy the pixels:

```cpp
slint::SharedPixelBuffer<slint::Rgb8Pixel> pixel_buffer(the_width, the_height);
slint::Rgb8Pixel *raw_data = pixel_buffer.begin();
for (int i = 0; i < the_width * the_height; i++) {
  raw_data[i] = { bgr_data[i * 3 + 2], bgr_data[i * 3 + 1], bgr_data[i * 3] };
}
```

## Public Types

### <a id="borrowedopengltextureorigin"></a> `BorrowedOpenGLTextureOrigin`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> BorrowedOpenGLTextureOrigin</span></span></code></pre>

| Value | Description |
| --- | --- |
| `TopLeft` | The top-left of the texture is the top-left of the texture drawn on the screen. |
| `BottomLeft` |  |

This enum describes the origin to use when rendering a borrowed OpenGL texture.

## Friends

### <a id="operator"></a> `operator==`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator==</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns true if *a* refers to the same image as *b*; false otherwise.

### <a id="operator-2"></a> `operator!=`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0"> operator!=</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Returns false if *a* refers to the same image as *b*; true otherwise.

## Public Functions

### <a id="image"></a> `Image`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

### <a id="image-2"></a> `Image`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../sharedpixelbuffer/" class="api-link">SharedPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../rgb8pixel/" class="api-link">Rgb8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > buffer)</span></span></code></pre>

Construct an image from a [SharedPixelBuffer](../sharedpixelbuffer/) of RGB pixels.

### <a id="image-3"></a> `Image`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../sharedpixelbuffer/" class="api-link">SharedPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#000000;--shiki-dark:#D4D4D4" href="../rgba8pixel/" class="api-link">Rgba8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > buffer)</span></span></code></pre>

Construct an image from a [SharedPixelBuffer](../sharedpixelbuffer/) of RGBA pixels.

### <a id="size"></a> `size`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../size/" class="api-link">Size</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uint32_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the size of the [Image](./) in pixels.

### <a id="path"></a> `path`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a href="../sharedstring/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">SharedString</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">path</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the path of the image on disk, if it was constructed via [Image::load\_from\_path()](./#load_from_path).

### <a id="set_nine_slice_edges"></a> `set_nine_slice_edges`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_nine_slice_edges</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">unsigned</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> short</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> top</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">unsigned</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> short</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> right</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">unsigned</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> short</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> bottom</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">unsigned</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> short</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> left</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Sets the nine-slice edges of the image.

[Nine-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling) is a method for scaling images in such a way that the corners are not distorted. The arguments define the pixel sizes of the edges that cut the image into 9 slices.

### <a id="to_rgb8"></a> `to_rgb8`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../sharedpixelbuffer/" class="api-link">SharedPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../rgb8pixel/" class="api-link">Rgb8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">to_rgb8</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the pixel buffer for the [Image](./) if available in RGB format without alpha. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

### <a id="to_rgba8"></a> `to_rgba8`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../sharedpixelbuffer/" class="api-link">SharedPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../rgba8pixel/" class="api-link">Rgba8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">to_rgba8</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the pixel buffer for the [Image](./) if available in RGBA format. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

### <a id="to_rgba8_premultiplied"></a> `to_rgba8_premultiplied`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../sharedpixelbuffer/" class="api-link">SharedPixelBuffer</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../rgba8pixel/" class="api-link">Rgba8Pixel</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">to_rgba8_premultiplied</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Returns the pixel buffer for the [Image](./) if available in RGBA format, with the alpha channel pre-multiplied to the red, green, and blue channels. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

## Public Static Functions

### <a id="load_from_path"></a> `load_from_path`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">static</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">load_from_path</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../sharedstring/" class="api-link">SharedString</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">file_path</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Load an image from an image file.

### <a id="create_from_borrowed_gl_2d_rgba_texture"></a> `create_from_borrowed_gl_2d_rgba_texture`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">static</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./" class="api-link">Image</a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Image</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">create_from_borrowed_gl_2d_rgba_texture</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uint32_t</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> texture_id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../size/" class="api-link">Size</a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">uint32_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE">size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">, </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="./#borrowedopengltextureorigin" class="api-link">BorrowedOpenGLTextureOrigin</a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> origin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">=</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">BorrowedOpenGLTextureOrigin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">TopLeft</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Constructs a new [Image](./) from an existing OpenGL texture. The texture remains borrowed by Slint for the duration of being used for rendering, such as when assigned as source property to an `Image` element. It's the application's responsibility to delete the texture when it is not used anymore.

The texture must be bindable against the `GL_TEXTURE_2D` target, have `GL_RGBA` as format for the pixel data.

When Slint renders the texture, it assumes that the origin of the texture is at the top-left. This is different from the default OpenGL coordinate system. If you want to flip the origin, use `BorrowedOpenGLTextureOrigin::BottomLeft`.

Safety:

This function is unsafe because invalid texture ids may lead to undefined behavior in OpenGL drivers. A valid texture id is one that was created by the same OpenGL context that is current during any of the invocations of the callback set on \[`Window::set_rendering_notifier()`\]. OpenGL contexts between instances of \[`slint::Window`\] are not sharing resources. Consequently \[`slint::Image`\] objects created from borrowed OpenGL textures cannot be shared between different windows.