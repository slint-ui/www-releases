---
title: "TouchArea"
description: "TouchArea element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import NotInSC from '@slint/common-files/src/components/NotInSC.astro';
import OnlyInSC from '@slint/common-files/src/components/OnlyInSC.astro';

Use `TouchArea` to control what happens when the region it covers is touched or interacted with
using the mouse. \{#sls.meta.toucharea.purpose}

When not part of a layout, its width or height default to 100% of the parent element. \{#sls.ref.toucharea.size}

<OnlyInSC>
Of the members of `TouchArea`, only `clicked` and the geometry properties are part of Slint SC. \{#sls.ref.toucharea.members}
</OnlyInSC>

## Callbacks

### clicked()
Invoked when clicked: A finger or the left mouse button is pressed, then released on this element. \{#sls.ref.toucharea.clicked}

<OnlyInSC>
The Touch Input chapter specifies when a press and a release count as a click. \{#sls.ref.toucharea.clicked.input}
</OnlyInSC>