---
title: "init_translations"
---
import XRef from "../../../../components/XRef.astro";
import Signature from "../../../../components/Signature.astro";

```python
from slint import init_translations
```

<Signature symbol="slint.init_translations">init_translations(translations: <XRef to="typing.Optional" plain />[gettext.<XRef to="gettext.GNUTranslations" plain />]) -&gt; <XRef to="None" plain /></Signature>

Installs the specified translations object to handle translations originating from the Slint code.

Example:
```python
import gettext
import slint

translations_dir = os.path.join(os.path.dirname(__file__), "lang")
try:
    translations = gettext.translation("my_app", translations_dir, ["de"])
    slint.install_translations(translations)
except OSError:
    pass
```