---
title: "From One To Multiple Tiles"
description: "From One To Multiple Tiles"
---
import { Code } from '@astrojs/starlight/components';
import { extractLines } from '@slint/common-files/src/utils/utils';

After modeling a single tile, this step creates a grid of them. For the grid to be a game board, you need two features:

1. **A data model**: An array created as a model in code, where each element describes the tile data structure, such as:

    - URL of the image
    - Whether the image is visible
    - If the player has solved this tile.

2. A way of creating multiple instances of the tiles.

With Slint you declare an array of structures based on a model using square brackets. Use a <span class="hljs-keyword">for</span> loop
to create multiple instances of the same element.

The <span class="hljs-keyword">for</span> loop is declarative and automatically updates when
the model changes. The loop instantiates all the <span class="hljs-title">MemoryTile</span> elements and places them on a grid based on their
index with spacing between the tiles.

First, add the tile data structure definition at the top of the `ui/app-window.slint` file:


```slint
struct TileData {
    image: image,
    image_visible: bool,
    solved: bool,
}
```


Next, replace the _export component <span class="hljs-title">MainWindow</span> inherits Window \{ ... \} section at the bottom of the `ui/app-window.slint` file with the following:

```slint
export component MainWindow inherits Window {
    width: 326px;
    height: 326px;

    in property <[TileData]> memory_tiles: [
        { image: @image-url("icons/at.png") },
        { image: @image-url("icons/balance-scale.png") },
        { image: @image-url("icons/bicycle.png") },
        { image: @image-url("icons/bus.png") },
        { image: @image-url("icons/cloud.png") },
        { image: @image-url("icons/cogs.png") },
        { image: @image-url("icons/motorcycle.png") },
        { image: @image-url("icons/video.png") },
    ];
    for tile[i] in memory_tiles : MemoryTile {
        x: mod(i, 4) * 74px;
        y: floor(i / 4) * 74px;
        width: 64px;
        height: 64px;
        icon: tile.image;
        open_curtain: tile.image_visible || tile.solved;
        // propagate the solved status from the model to the tile
        solved: tile.solved;
        clicked => {
            tile.image_visible = !tile.image_visible;
        }
    }
}
```

The <code><span class="hljs-keyword">for</span> tile\[i\] <span class="hljs-keyword">in</span> memory_tiles:</code> syntax declares a variable `tile` which contains the data of one element from the `memory_tiles` array,
and a variable `i` which is the index of the tile. The code uses the `i` index to calculate the position of a tile, based on its row and column,
using modulo and integer division to create a 4 by 4 grid.

Running the code opens a window that shows 8 tiles, which a player can open individually.

<video autoplay loop muted playsinline src="https://slint.dev/blog/memory-game-tutorial/from-one-to-multiple-tiles.mp4"></video>