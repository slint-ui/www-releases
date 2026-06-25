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

### plain_text

<Signature symbol="slint.slint.DataTransfer.plain_text">plain_text: <XRef to="typing.Optional" plain />[<XRef to="str" plain />]</Signature>

The plain text representation of this <XRef to="DataTransfer" />, or <XRef to="None" /> if no plain text
is available. Assigning <XRef to="None" /> or the empty string clears any previously-set
plain text; assigning any other string overwrites it.

### has_plain_text

<Signature symbol="slint.slint.DataTransfer.has_plain_text">has_plain_text: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> advertises a plain text representation.

### image

<Signature symbol="slint.slint.DataTransfer.image">image: <XRef to="typing.Optional" plain />[<XRef to="slint.slint.Image" plain />]</Signature>

The image representation of this <XRef to="DataTransfer" />, or <XRef to="None" /> if no image is
available. Assigning <XRef to="None" /> clears any previously-set image; assigning any
other image overwrites it.

### has_image

<Signature symbol="slint.slint.DataTransfer.has_image">has_image: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> advertises an image representation.

### is_empty

<Signature symbol="slint.slint.DataTransfer.is_empty">is_empty: <XRef to="bool" plain /></Signature>

`True` if this <XRef to="DataTransfer" /> carries no data: no plain text, no image, and no
user data.

### user_data

<Signature symbol="slint.slint.DataTransfer.user_data">user_data: <XRef to="typing.Optional" plain />[<XRef to="object" plain />]</Signature>

Application-internal user data attached to this <XRef to="DataTransfer" />. Use this when the
drag-and-drop or clipboard operation stays inside the current Python application and you
want to avoid serializing to plain text or an image.

Reading returns the Python object previously assigned, or <XRef to="None" /> if none was set (or the
user data was set by a non-Python binding). Assigning <XRef to="None" /> clears any previously attached
Python user data.