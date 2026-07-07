---
title: "load_file"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import load_file
```

<Signature symbol="slint.load_file">load_file(path: <XRef to="str" plain /> | os.<XRef to="os.PathLike" plain />[<XRef to="typing.Any" plain />] | pathlib.<XRef to="pathlib.Path" plain />, quiet: <XRef to="bool" plain /> = False, style: <XRef to="typing.Optional" plain />[<XRef to="str" plain />] = None, include_paths: <XRef to="typing.Optional" plain />[<XRef to="typing.List" plain />[os.<XRef to="os.PathLike" plain />[<XRef to="typing.Any" plain />] | pathlib.<XRef to="pathlib.Path" plain />]] = None, library_paths: <XRef to="typing.Optional" plain />[<XRef to="typing.Dict" plain />[<XRef to="str" plain />, os.<XRef to="os.PathLike" plain />[<XRef to="typing.Any" plain />] | pathlib.<XRef to="pathlib.Path" plain />]] = None, translation_domain: <XRef to="typing.Optional" plain />[<XRef to="str" plain />] = None) -&gt; types.<XRef to="types.SimpleNamespace" plain /></Signature>

This function is the low-level entry point into Slint for instantiating components. It loads the `.slint` file at
the specified `path` and returns a namespace with all exported components as Python classes, as well as enums, and structs.

* `quiet`: Set to true to prevent any warnings during compilation from being printed to stderr.
* `style`: Specify a widget style.
* `include_paths`: Additional include paths used to look up `.slint` files imported from other `.slint` files.
* `library_paths`: A dictionary that maps library names to their location in the file system. This is then used to look up
   library imports, such as `import { MyButton } from "@mylibrary";`.
* `translation_domain`: The domain to use for looking up the catalogue run-time translations. This must match the
   translation domain used when extracting translations with `slint-tr-extractor`.