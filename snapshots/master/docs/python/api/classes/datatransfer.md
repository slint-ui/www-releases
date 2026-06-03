---
title: "DataTransfer"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import DataTransfer
```

Represents some form of type-indexed possibly-lazy data transfer.

Used for accessing the platform clipboard and drag-and-drop APIs.

## Properties

### has_plaintext

<Signature symbol="slint.slint.DataTransfer.has_plaintext">has_plaintext: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> advertises a plaintext representation.

### has_image

<Signature symbol="slint.slint.DataTransfer.has_image">has_image: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> advertises an image representation.

### is_empty

<Signature symbol="slint.slint.DataTransfer.is_empty">is_empty: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> carries no data: no plaintext, no image, and no
user data.

### user_data

<Signature symbol="slint.slint.DataTransfer.user_data">user_data: <XRef to="typing.Optional" plain />[<XRef to="object" plain />]</Signature>

Application-internal user data attached to this <XRef to="DataTransfer" />. Use this when the
drag-and-drop or clipboard operation stays inside the current Python application and you
want to avoid serializing to plaintext or an image.

Reading returns the Python object previously assigned, or <XRef to="None" /> if none was set (or the
user data was set by a non-Python binding). Assigning <XRef to="None" /> clears any previously attached
Python user data.

## Methods

### set_plaintext

<Signature symbol="slint.slint.DataTransfer.set_plaintext">set_plaintext(text: <XRef to="str" plain />) -&gt; <XRef to="None" plain /></Signature>

Sets the plaintext representation of this <XRef to="DataTransfer" />. Calling this again overwrites
the previous plaintext.

### fetch_plaintext

<Signature symbol="slint.slint.DataTransfer.fetch_plaintext">fetch_plaintext() -&gt; <XRef to="typing.Optional" plain />[<XRef to="str" plain />]</Signature>

Returns the plaintext representation of this <XRef to="DataTransfer" />, or <XRef to="None" /> if no plaintext
is available.

### set_image

<Signature symbol="slint.slint.DataTransfer.set_image">set_image(image: <XRef to="slint.slint.Image" plain />) -&gt; <XRef to="None" plain /></Signature>

Sets the image representation of this <XRef to="DataTransfer" />. Calling this again overwrites the
previous image.

### fetch_image

<Signature symbol="slint.slint.DataTransfer.fetch_image">fetch_image() -&gt; <XRef to="typing.Optional" plain />[<XRef to="slint.slint.Image" plain />]</Signature>

Returns the image representation of this <XRef to="DataTransfer" />, or <XRef to="None" /> if no image is
available.