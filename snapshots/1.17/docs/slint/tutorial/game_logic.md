---
title: "Game Logic"
description: "Game Logic"
---
import { Tabs, TabItem } from '@astrojs/starlight/components';
import { extractLines } from '@slint/common-files/src/utils/utils.ts';
import { Code } from '@astrojs/starlight/components';
import LangRefLink from '@slint/common-files/src/components/LangRefLink.astro';


This step implements the rules of the game in your coding language of choice.

Slint's general philosophy is that you implement the user interface in Slint and the business logic in your favorite programming
language.

The game rules enforce that at most two tiles have their curtain open. If the tiles match, then the game
considers them solved and they remain open. Otherwise, the game waits briefly so the player can memorize
the location of the icons, and then closes the curtains again.

<Tabs syncKey="dev-language">
<TabItem label="C++">

Add the following code inside the <span class="hljs-title">MainWindow</span> component to signal to the C++ code when the user clicks on a tile.


```slint
    export component MainWindow inherits Window {
        width: 326px;
        height: 326px;

        callback check_if_pair_solved(); // Added
        in property <bool> disable_tiles; // Added

        in-out property <[TileData]> memory_tiles: [
           { image: @image-url("icons/at.png") },
```

This change adds a way for the <span class="hljs-title">MainWindow</span> to call to the C++ code that it should
check if a player has solved a pair of tiles. The Rust code needs an additional property to toggle to disable further
tile interaction, to prevent the player from opening more tiles than allowed. No cheating allowed!

The last change to the code is to act when the <span class="hljs-title">MemoryTile</span> signals that a player clicked it.

Add the following handler in the <span class="hljs-title">MainWindow</span> `for` loop `clicked` handler:

```slint
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
                // old: tile.image_visible = !tile.image_visible;
                // new:
                if (!root.disable_tiles) {
                    tile.image_visible = true;
                    root.check_if_pair_solved();
                }
            }
        }
```


On the C++ side, you can now add a handler to the `check_if_pair_solved` callback, that checks if a player opened two tiles.
If they match, the code sets the `solved` property to true in the model. If they don't
match, start a timer that closes the tiles after one second. While the timer is running, disable every tile so
a player can't click anything during this time.

Insert this code before the `main_window->run()` call:


```cpp
    main_window->on_check_if_pair_solved(
            [main_window_weak = slint::ComponentWeakHandle(main_window)] {
                auto main_window = *main_window_weak.lock();
                auto tiles_model = main_window->get_memory_tiles();
                int first_visible_index = -1;
                TileData first_visible_tile;
                for (int i = 0; i < tiles_model->row_count(); ++i) {
                    auto tile = *tiles_model->row_data(i);
                    if (!tile.image_visible || tile.solved)
                        continue;
                    if (first_visible_index == -1) {
                        first_visible_index = i;
                        first_visible_tile = tile;
                        continue;
                    }
                    bool is_pair_solved = tile == first_visible_tile;
                    if (is_pair_solved) {
                        first_visible_tile.solved = true;
                        tiles_model->set_row_data(first_visible_index,
                                                  first_visible_tile);
                        tile.solved = true;
                        tiles_model->set_row_data(i, tile);
                        return;
                    }
                    main_window->set_disable_tiles(true);

                    slint::Timer::single_shot(std::chrono::seconds(1),
                        [=]() mutable {
                            main_window->set_disable_tiles(false);
                            first_visible_tile.image_visible = false;
                            tiles_model->set_row_data(first_visible_index,
                                                      first_visible_tile);
                            tile.image_visible = false;
                            tiles_model->set_row_data(i, tile);
                        });
                }
            });
```


The code uses a <LangRefLink lang="cpp" relpath="api/slint/componentweakhandle/">`ComponentWeakHandle`</LangRefLink> pointer of the `main_window`. This is
important because capturing a copy of the `main_window` itself within the callback handler would result in circular ownership.
The `MainWindow` owns the callback handler, which itself owns a reference to the `MainWindow`, which must be weak
instead of strong to avoid a memory leak.

</TabItem>
<TabItem label="NodeJS">

Change the contents of `memory.slint` to signal to the JavaScript code when the user clicks on a tile.

```slint
    export component MainWindow inherits Window {
        width: 326px;
        height: 326px;

        callback check_if_pair_solved(); // Added
        in property <bool> disable_tiles; // Added

        in-out property <[TileData]> memory_tiles: [
           { image: @image-url("icons/at.png") },
```

This change adds a way for the <span class="hljs-title">MainWindow</span> to call to the JavaScript code that it should
check if a player has solved a pair of tiles. The Rust code needs an additional property to toggle to disable further
tile interaction, to prevent the player from opening more tiles than allowed. No cheating allowed!

The last change to the code is to act when the <span class="hljs-title">MemoryTile</span> signals that a player clicked it.

Add the following handler in the <span class="hljs-title">MainWindow</span> `for` loop `clicked` handler:

```slint
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
                // old: tile.image_visible = !tile.image_visible;
                // new:
                if (!root.disable_tiles) {
                    tile.image_visible = true;
                    root.check_if_pair_solved();
                }
            }
        }
```

On the JavaScript side, now add a handler to the `check_if_pair_solved` callback, that checks if a player opened two tiles. If they match, the code sets the `solved` property to true in the model. If they don't
match, start a timer that closes the tiles after one second. While the timer is running, disable every tile so
a player can't click anything during this time.

Insert this code before the `mainWindow.run()` call:


```js
mainWindow.check_if_pair_solved = function () {
    const flipped_tiles = [];
    tiles.forEach((tile, index) => {
        if (tile.image_visible && !tile.solved) {
            flipped_tiles.push({
                index,
                tile,
            });
        }
    });

    if (flipped_tiles.length === 2) {
        const { tile: tile1, index: tile1_index } = flipped_tiles[0];

        const { tile: tile2, index: tile2_index } = flipped_tiles[1];

        const is_pair_solved = tile1.image.path === tile2.image.path;
        if (is_pair_solved) {
            tile1.solved = true;
            model.setRowData(tile1_index, tile1);
            tile2.solved = true;
            model.setRowData(tile2_index, tile2);
        } else {
            mainWindow.disable_tiles = true;
            setTimeout(() => {
                mainWindow.disable_tiles = false;
                tile1.image_visible = false;
                model.setRowData(tile1_index, tile1);
                tile2.image_visible = false;
                model.setRowData(tile2_index, tile2);
            }, 1000);
        }
    }
};
```
</TabItem>

<TabItem label="Rust">

Add the following code inside the <span class="hljs-title">MainWindow</span> component to signal to the Rust code when the user clicks on a tile.

```slint
    export component MainWindow inherits Window {
        width: 326px;
        height: 326px;

        callback check_if_pair_solved(); // Added
        in property <bool> disable_tiles; // Added

        in-out property <[TileData]> memory_tiles: [
           { image: @image-url("icons/at.png") },
```

This change adds a way for the <span class="hljs-title">MainWindow</span> to call to the Rust code that it should
check if a player has solved a pair of tiles. The Rust code needs an additional property to toggle to disable further
tile interaction, to prevent the player from opening more tiles than allowed. No cheating allowed!

The last change to the code is to act when the <span class="hljs-title">MemoryTile</span> signals that a player clicked it.

Add the following handler in the <span class="hljs-title">MainWindow</span> `for` loop `clicked` handler:

```slint
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
                // old: tile.image_visible = !tile.image_visible;
                // new:
                if (!root.disable_tiles) {
                    tile.image_visible = true;
                    root.check_if_pair_solved();
                }
            }
        }
```

On the Rust side, you can now add a handler to the `check_if_pair_solved` callback, that checks if a player opened two tiles.
If they match, the code sets the `solved` property to true in the model. If they don't
match, start a timer that closes the tiles after one second. While the timer is running, disable every tile so
a player can't click anything during this time.

Add this code before the `main_window.run().unwrap();` call:

```rust
    let main_window_weak = main_window.as_weak();
    main_window.on_check_if_pair_solved(move || {
        let mut flipped_tiles =
            tiles_model.iter().enumerate().filter(|(_, tile)| tile.image_visible && !tile.solved);

        if let (Some((t1_idx, mut t1)), Some((t2_idx, mut t2))) =
            (flipped_tiles.next(), flipped_tiles.next())
        {
            let is_pair_solved = t1 == t2;
            if is_pair_solved {
                t1.solved = true;
                tiles_model.set_row_data(t1_idx, t1);
                t2.solved = true;
                tiles_model.set_row_data(t2_idx, t2);
            } else {
                let main_window = main_window_weak.unwrap();
                main_window.set_disable_tiles(true);
                let tiles_model = tiles_model.clone();
                slint::Timer::single_shot(std::time::Duration::from_secs(1), move || {
                    main_window.set_disable_tiles(false);
                    t1.image_visible = false;
                    tiles_model.set_row_data(t1_idx, t1);
                    t2.image_visible = false;
                    tiles_model.set_row_data(t2_idx, t2);
                });
            }
        }
    });
```

The code uses a <LangRefLink lang="rust-slint" relpath="struct.Weak">Weak</LangRefLink> pointer of the `main_window`. This is
important because capturing a copy of the `main_window` itself within the callback handler would result in circular ownership.
The `MainWindow` owns the callback handler, which itself owns a reference to the `MainWindow`, which must be weak
instead of strong to avoid a memory leak.

</TabItem>

<TabItem label="Python">

Change the contents of `memory.slint` to signal to the Python code when the user clicks on a tile.

```slint
    export component MainWindow inherits Window {
        width: 326px;
        height: 326px;

        callback check_if_pair_solved(); // Added
        in property <bool> disable_tiles; // Added

        in-out property <[TileData]> memory_tiles: [
           { image: @image-url("icons/at.png") },
```

This change adds a way for the <span class="hljs-title">MainWindow</span> to call to the Python code that it should
check if a player has solved a pair of tiles. The Rust code needs an additional property to toggle to disable further
tile interaction, to prevent the player from opening more tiles than allowed. No cheating allowed!

The last change to the code is to act when the <span class="hljs-title">MemoryTile</span> signals that a player clicked it.

Add the following handler in the <span class="hljs-title">MainWindow</span> `for` loop `clicked` handler:

```slint
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
                // old: tile.image_visible = !tile.image_visible;
                // new:
                if (!root.disable_tiles) {
                    tile.image_visible = true;
                    root.check_if_pair_solved();
                }
            }
        }
```

On the Python side, now add a handler to the `check_if_pair_solved` callback, that checks if a player opened two tiles. If they match, the code sets the `solved` property to true in the model. If they don't
match, start a timer that closes the tiles after one second. While the timer is running, disable every tile so
a player can't click anything during this time.

Insert this function in the `MainWindow` class, annotated with `@slint.callback` to associated it with `check_if_pair_solved`:


```python
class MainWindow(slint.loader.ui.app_window.MainWindow):
    def __init__(self):
        super().__init__()
        initial_tiles = self.memory_tiles
        tiles = slint.ListModel(
            itertools.chain(
                map(copy.copy, initial_tiles), map(copy.copy, initial_tiles)
            )
        )
        random.shuffle(tiles)
        self.memory_tiles = tiles

    @slint.callback
    def check_if_pair_solved(self):
        flipped_tiles = [
            (index, copy.copy(tile))
            for index, tile in enumerate(self.memory_tiles)
            if tile.image_visible and not tile.solved
        ]
        if len(flipped_tiles) == 2:
            tile1_index, tile1 = flipped_tiles[0]
            tile2_index, tile2 = flipped_tiles[1]
            is_pair_solved = tile1.image.path == tile2.image.path
            if is_pair_solved:
                tile1.solved = True
                self.memory_tiles[tile1_index] = tile1
                tile2.solved = True
                self.memory_tiles[tile2_index] = tile2
            else:
                self.disable_tiles = True

                def reenable_tiles():
                    self.disable_tiles = False
                    tile1.image_visible = False
                    self.memory_tiles[tile1_index] = tile1
                    tile2.image_visible = False
                    self.memory_tiles[tile2_index] = tile2

                slint.Timer.single_shot(datetime.timedelta(seconds=1), reenable_tiles)
```
</TabItem>
</Tabs>

These were the last changes and running the code opens a window that allows a player to play the game by the rules.