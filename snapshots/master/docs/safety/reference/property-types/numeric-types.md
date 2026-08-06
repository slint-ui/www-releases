---
title: "Primitive & Numeric Types"
description: "The boolean, numeric, and unit types of the Slint language."
---
import SC from '@slint/common-files/src/components/SC.astro';
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';



<SC>

## Numeric Types

</SC>














<SC>

### int
<SlintProperty propName="int" typeName="int" defaultValue='0'>
Signed integral number.
</SlintProperty>

The default `int` is zero. \{#sls.type.int}

### length
<SlintProperty propName="length" typeName="length" defaultValue='0px'>
<NotInSC>
The type used for `x`, `y`, `width` and `height` coordinates. Corresponds to a literal like `1px`, `1pt`, `1in`, `1mm`, or `1cm`. It can be converted to and from length provided the binding is run in a context where there is an access to the device pixel ratio.
</NotInSC>
</SlintProperty>

A `length` is a distance.
The default `length` is zero. \{#sls.type.length}

</SC>