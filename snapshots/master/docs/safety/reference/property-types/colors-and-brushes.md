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
<NotInSC>
A brush is a special type that can be either initialized from a `color` or a `gradient`.

<Tabs syncKey="dev-language">
<TabItem label="Rust" icon="seti:rust">
In Rust, properties or struct fields of the brush type are mapped to <LangRefLink lang="rust-slint" relpath="enum.Brush.html">`slint::Brush`</LangRefLink>.
</TabItem>
<TabItem label="C++" icon="seti:cpp">
In C++, properties or struct fields of the brush type are mapped to <LangRefLink lang="cpp" relpath="api/slint/brush/">`slint::Brush`</LangRefLink>.
</TabItem>
<TabItem label="NodeJS" icon="node">
In JavaScript, properties or struct fields of the brush type are mapped to an object that implements the <LangRefLink lang="nodejs" relpath="api/interfaces/brush/">Brush interface</LangRefLink>.
</TabItem>
<TabItem label="Python" icon="seti:python">
In Python, properties or struct fields of the brush type are mapped to <LangRefLink lang="python" relpath="api/classes/brush/">`Brush`</LangRefLink>.
</TabItem>
</Tabs>
</NotInSC>
</SlintProperty>

### color
<SlintProperty propName="color" typeName="color" defaultValue='transparent'>
<NotInSC>
RGB color with an alpha channel, with 8 bit precision for each channel. CSS color names as well as the hexadecimal color encodings are supported, such as #RRGGBBAA or #RGB.

<Tabs syncKey="dev-language">
<TabItem label="Rust" icon="seti:rust">
In Rust, properties or struct fields of the color type are mapped to <LangRefLink lang="rust-slint" relpath="struct.Color.html">`slint::Color`</LangRefLink>.
</TabItem>
<TabItem label="C++" icon="seti:cpp">
In C++, properties or struct fields of the color type are mapped to <LangRefLink lang="cpp" relpath="api/slint/color/">`slint::Color`</LangRefLink>.
</TabItem>
<TabItem label="NodeJS" icon="node">
In JavaScript, properties or struct fields of the color type are mapped to an object that implements the <LangRefLink lang="nodejs" relpath="api/interfaces/rgbacolor/">RgbaColor interface</LangRefLink>.
</TabItem>
<TabItem label="Python" icon="seti:python">
In Python, properties or struct fields of the color type are mapped to <LangRefLink lang="python" relpath="api/classes/color/">`Color`</LangRefLink>.
</TabItem>
</Tabs>
</NotInSC>
</SlintProperty>
</SC>