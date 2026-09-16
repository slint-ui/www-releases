---
title: "Colors and Brushes"
description: "Color literals, the Colors namespace, color functions, and gradients."
---
{/* cSpell: ignore rgbacolor */}

import SC from '@slint/common-files/src/components/SC.astro';
import Link from '@slint/common-files/src/components/Link.astro';
import CodeSnippetMD from "@slint/common-files/src/components/CodeSnippetMD.astro";
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import { Tabs, TabItem } from '@astrojs/starlight/components';
import LangRefLink from '@slint/common-files/src/components/LangRefLink.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';





<SC>

## Types

A `color` is a color with red, green, blue, and alpha channels.
The default `color` is transparent. \{#sls.type.color}

The alpha channel is the color's opacity: it decides how much of the content
underneath shows through where the color is painted, from 0 for a fully
transparent color to 255 for a fully opaque one. \{#sls.type.color.alpha}

A `brush` defines the content that an element is filled with.
The default `brush` is transparent. \{#sls.type.brush}

A `color` converts to a `brush`: the brush that fills with that single color. \{#sls.type.convert.color-to-brush}

### brush
<SlintProperty propName="brush" typeName="brush" defaultValue='transparent'>
</SlintProperty>

### color
<SlintProperty propName="color" typeName="color" defaultValue='transparent'>
</SlintProperty>
</SC>