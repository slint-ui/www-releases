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

### `BorrowedOpenGLTextureOrigin`

```cpp
enum class BorrowedOpenGLTextureOrigin
```

| Value | Description |
| --- | --- |
| `TopLeft` | The top-left of the texture is the top-left of the texture drawn on the screen. |
| `BottomLeft` |  |

This enum describes the origin to use when rendering a borrowed OpenGL texture.

## Friends

### `operator==`

```cpp
bool operator==(const Image &a, const Image &b)
```

Returns true if *a* refers to the same image as *b*; false otherwise.

### `operator!=`

```cpp
bool operator!=(const Image &a, const Image &b)
```

Returns false if *a* refers to the same image as *b*; true otherwise.

## Public Functions

### `Image`

```cpp
slint::Image::Image()
```

### `Image`

```cpp
slint::Image::Image(SharedPixelBuffer<Rgb8Pixel> buffer)
```

Construct an image from a [SharedPixelBuffer](../sharedpixelbuffer/) of RGB pixels.

### `Image`

```cpp
slint::Image::Image(SharedPixelBuffer<Rgba8Pixel> buffer)
```

Construct an image from a [SharedPixelBuffer](../sharedpixelbuffer/) of RGBA pixels.

### `size`

```cpp
Size<uint32_t> slint::Image::size() const
```

Returns the size of the [Image](./) in pixels.

### `path`

```cpp
std::optional<slint::SharedString> slint::Image::path() const
```

Returns the path of the image on disk, if it was constructed via [Image::load\_from\_path()](./#load_from_path).

### `set_nine_slice_edges`

```cpp
void slint::Image::set_nine_slice_edges(unsigned short top, unsigned short right, unsigned short bottom, unsigned short left)
```

Sets the nine-slice edges of the image.

[Nine-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling) is a method for scaling images in such a way that the corners are not distorted. The arguments define the pixel sizes of the edges that cut the image into 9 slices.

### `to_rgb8`

```cpp
std::optional<SharedPixelBuffer<Rgb8Pixel>> slint::Image::to_rgb8() const
```

Returns the pixel buffer for the [Image](./) if available in RGB format without alpha. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

### `to_rgba8`

```cpp
std::optional<SharedPixelBuffer<Rgba8Pixel>> slint::Image::to_rgba8() const
```

Returns the pixel buffer for the [Image](./) if available in RGBA format. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

### `to_rgba8_premultiplied`

```cpp
std::optional<SharedPixelBuffer<Rgba8Pixel>> slint::Image::to_rgba8_premultiplied() const
```

Returns the pixel buffer for the [Image](./) if available in RGBA format, with the alpha channel pre-multiplied to the red, green, and blue channels. Returns nullopt if the pixels cannot be obtained, for example when the image was created from borrowed OpenGL textures.

## Public Static Functions

### `load_from_path`

```cpp
static Image slint::Image::load_from_path(const SharedString &file_path)
```

Load an image from an image file.

### `create_from_borrowed_gl_2d_rgba_texture`

```cpp
static Image slint::Image::create_from_borrowed_gl_2d_rgba_texture(uint32_t texture_id, Size<uint32_t> size, BorrowedOpenGLTextureOrigin origin=BorrowedOpenGLTextureOrigin::TopLeft)
```

Constructs a new [Image](./) from an existing OpenGL texture. The texture remains borrowed by Slint for the duration of being used for rendering, such as when assigned as source property to an `Image` element. It's the application's responsibility to delete the texture when it is not used anymore.

The texture must be bindable against the `GL_TEXTURE_2D` target, have `GL_RGBA` as format for the pixel data.

When Slint renders the texture, it assumes that the origin of the texture is at the top-left. This is different from the default OpenGL coordinate system. If you want to flip the origin, use `BorrowedOpenGLTextureOrigin::BottomLeft`.

Safety:

This function is unsafe because invalid texture ids may lead to undefined behavior in OpenGL drivers. A valid texture id is one that was created by the same OpenGL context that is current during any of the invocations of the callback set on \[`Window::set_rendering_notifier()`\]. OpenGL contexts between instances of \[`slint::Window`\] are not sharing resources. Consequently \[`slint::Image`\] objects created from borrowed OpenGL textures cannot be shared between different windows.