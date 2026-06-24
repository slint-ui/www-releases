---
title: "Window"
description: "Window element api."
---
import SlintProperty from '@slint/common-files/src/components/SlintProperty.astro';
import Link from '@slint/common-files/src/components/Link.astro';

`Window` is the root of the tree of elements that are visible on the screen.

The `Window` geometry will be restricted by its layout constraints: Setting the `width` will result in a fixed width,
and the window manager will respect the `min-width` and `max-width` so the window can't be resized bigger
or smaller. The initial width can be controlled with the `preferred-width` property. The same applies to the `Window`s height.

Use the [MenuBar](/1.17.0/docs/safety/reference/window/window.md#menubar) element to declare a menu bar for the window.