---
title: "Images"
description: "The image type of the Slint language."
---
{/* cSpell: ignore Farbfeld */}

import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';
import { Tabs, TabItem } from '@astrojs/starlight/components';
import LangRefLink from '@slint/common-files/src/components/LangRefLink.astro';
import SC from '@slint/common-files/src/components/SC.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';

<SC>
### image
<SlintProperty propName="image" typeName="image" defaultValue='empty image'>

An `image` is a rectangle of pixels: rows of *width* pixels each, and every
pixel a [color](/reference/property-types/colors-and-brushes/). \{#sls.type.image}

The default `image` is *no image*: it has no pixels, and its width and height
are 0. \{#sls.type.image.none}

An image is created with an `@image-url()` image literal or set by the
application. \{#sls.type.image.sources}


</SlintProperty>

An image has the fields `width` and `height`, read with the `.` operator
as in `logo.width`: \{#sls.type.image.properties}

#### width

The width of the image in pixels, as an `int`.
An image without pixels has a width of 0. \{#sls.type.image.width}

#### height

The height of the image in pixels, as an `int`.
An image without pixels has a height of 0. \{#sls.type.image.height}

```slint
export component Example inherits Window {
    in property <image> logo;
    out property <int> logo-width: logo.width;
}
```

</SC>