---
title: "Image"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import Image
```

Image objects can be set on Slint Image elements for display. Construct Image objects from a path to an
image file on disk, using <XRef to="Image.load_from_path" />.

## Properties

### size

<Signature symbol="slint.slint.Image.size">size: <XRef to="tuple" plain />[<XRef to="int" plain />, <XRef to="int" plain />]</Signature>

### width

<Signature symbol="slint.slint.Image.width">width: <XRef to="int" plain /></Signature>

### height

<Signature symbol="slint.slint.Image.height">height: <XRef to="int" plain /></Signature>

### path

<Signature symbol="slint.slint.Image.path">path: <XRef to="typing.Optional" plain />[pathlib.<XRef to="pathlib.Path" plain />]</Signature>

## Methods

### load_from_path

<Signature symbol="slint.slint.Image.load_from_path">load_from_path(path: <XRef to="str" plain /> | os.<XRef to="os.PathLike" plain />[<XRef to="typing.Any" plain />] | pathlib.<XRef to="pathlib.Path" plain />) -&gt; <XRef to="Image" plain /></Signature>

Loads the image from the specified path. Returns None if the image can't be loaded.

### load_from_svg_data

<Signature symbol="slint.slint.Image.load_from_svg_data">load_from_svg_data(data: <XRef to="typing.Sequence" plain />[<XRef to="int" plain />]) -&gt; <XRef to="Image" plain /></Signature>

Creates a new image from a string that describes the image in SVG format.

### load_from_array

<Signature symbol="slint.slint.Image.load_from_array">load_from_array(array: <XRef to="collections.abc.Buffer" plain />) -&gt; <XRef to="slint.slint.Image" plain /></Signature>

Creates a new image from an array-like object that implements the [Buffer Protocol](https://docs.python.org/3/c-api/buffer.html).
Use this function to import images created by third-party modules such as matplotlib or Pillow.

The array must satisfy certain constraints to represent an image:

 - The buffer's format needs to be `B` (unsigned char)
 - The shape must be a tuple of (height, width, bytes-per-pixel)
 - If a stride is defined, the row stride must be equal to width * bytes-per-pixel, and the column stride must equal the bytes-per-pixel.
 - A value of 3 for bytes-per-pixel is interpreted as RGB image, a value of 4 means RGBA.

Example of importing a matplot figure into an image:
```python
import slint
import matplotlib

from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure

fig = Figure(figsize=(5, 4), dpi=100)
canvas = FigureCanvasAgg(fig)
ax = fig.add_subplot()
ax.plot([1, 2, 3])
canvas.draw()

buffer = canvas.buffer_rgba()
img = slint.Image.load_from_array(buffer)
```

Example of loading an image with Pillow:
```python
import slint
from PIL import Image
import numpy as np

pil_img = Image.open("hello.jpeg")
array = np.array(pil_img)
img = slint.Image.load_from_array(array)
```