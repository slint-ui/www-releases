---
title: "Window"
description: "Window element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

`Window` is the root of the tree of elements that are visible on the screen. \{#sls.meta.window.purpose}

## Properties

### width
<SlintProperty propName="width" typeName="length" propertyVisibility="in-out">
The width of the window. \{#sls.ref.window.width}

<OnlyInSC>
The application gives the window its size when it creates the component, so this is a value the file reads,
and binding it is an error. \{#sls.ref.window.width-out}
</OnlyInSC>
</SlintProperty>

### height
<SlintProperty propName="height" typeName="length" propertyVisibility="in-out">
The height of the window. \{#sls.ref.window.height}

<OnlyInSC>
The application gives the window its size when it creates the component, so this is a value the file reads,
and binding it is an error. \{#sls.ref.window.height-out}
</OnlyInSC>
</SlintProperty>

### background
<SlintProperty propName="background" typeName="brush" defaultValue="depends on the style">
The background brush of the `Window`. It is painted first, covering the whole window. \{#sls.ref.window.background}

<OnlyInSC>
This background must be an opaque color literal.
Rendering writes every pixel of the frame buffer, and there's nothing
underneath the window for a translucent background to blend with. \{#sls.ref.window.opaque}
</OnlyInSC>
</SlintProperty>