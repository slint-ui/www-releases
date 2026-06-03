---
title: "slint::platform::WindowAdapter Class"
---
```cpp
class WindowAdapter;
```

```cpp
#include <slint-platform.h>
```

Base class for the layer between a [slint::Window](../../window/) and the windowing system specific window type, such as a Win32 `HWND` handle or a `wayland_surface_t`.

Re-implement this class to establish the link between the two, and pass messages in both directions:

- When receiving messages from the windowing system about state changes, such as the window being resized, the user requested the window to be closed, input being received, etc. you need to call the corresponding event functions on the [Window](../../window/), such as [Window::dispatch\_resize\_event()](../../window/#dispatch_resize_event), Window::dispatch\_mouse\_press\_event(), or [Window::dispatch\_close\_requested\_event()](../../window/#dispatch_close_requested_event).
- Slint sends requests to change visibility, position, size, etc. via virtual functions such as [set\_visible()](./#set_visible), [set\_size()](./#set_size), [set\_position()](./#set_position), or [update\_window\_properties()](./#update_window_properties). Re-implement these functions and delegate the requests to the windowing system.

If the implementation of this bi-directional message passing protocol is incomplete, the user may experience unexpected behavior, or the intention of the developer calling functions on the [Window](../../window/) API may not be fulfilled.

Your [WindowAdapter](./) subclass must hold a renderer (either a [SoftwareRenderer](../softwarerenderer/) or a [SkiaRenderer](../skiarenderer/)). In the [renderer()](./#renderer) method, you must return a reference to it.

### Example

```cpp
class MyWindowAdapter : public slint::platform::WindowAdapter {
    slint::platform::SoftwareRenderer m_renderer;
    NativeHandle m_native_window; // a handle to the native window
public:
    void request_redraw() override { m_native_window.refresh(); }
    slint::PhysicalSize size() const override {
       return slint::PhysicalSize({m_native_window.width, m_native_window.height});
    }
    slint::platform::AbstractRenderer &renderer() override { return m_renderer; }
    void set_visible(bool v) override {
        if (v) {
            m_native_window.show();
        } else {
            m_native_window.hide();
        }
    }
    // ...
    void repaint_callback();
}
```

Rendering is typically asynchronous, and your windowing system or event loop would invoke a callback when it is time to render.

```cpp
void MyWindowAdapter::repaint_callback()
{
    slint::platform::update_timers_and_animations();
    m_renderer.render(m_native_window.buffer(), m_native_window.width);
    // if animations are running, schedule the next frame
    if (window().has_active_animations())  m_native_window.refresh();
}
```

## Types
- [WindowProperties](../windowadapter-windowproperties/)

## Public Functions

### <a id="windowadapter"></a> `WindowAdapter`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">explicit</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Construct a [WindowAdapter](./).

### <a id="windowadapter-2"></a> `~WindowAdapter` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::~</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0">default</span></span></code></pre>

### <a id="set_visible"></a> `set_visible` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_visible</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

This function is called by Slint when the slint window is shown or hidden.

Re-implement this function to forward the call to show/hide the native window

When the window becomes visible, this is a good time to call [slint::Window::dispatch\_scale\_factor\_change\_event](../../window/#dispatch_scale_factor_change_event) to initialise the scale factor.

### <a id="request_redraw"></a> `request_redraw` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">request_redraw</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

This function is called when Slint detects that the window need to be repainted.

Reimplement this function to forward the call to the window manager.

You should not render the window in the implementation of this call. Instead you should do that in the next iteration of the event loop, or in a callback from the window manager.

### <a id="set_size"></a> `set_size` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="../../physicalsize/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalSize</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Request a new size for the window to the specified size on the screen, in physical or logical pixels and excluding a window frame (if present).

This is called from [slint::Window::set\_size()](../../window/#set_size).

The default implementation does nothing

This function should send the size to the Windowing system. If the window size actually changes, you should call [slint::Window::dispatch\_resize\_event](../../window/#dispatch_resize_event) to propagate the new size to the slint view.

### <a id="size"></a> `size` <small>(pure virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="../../physicalsize/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalSize</span></a><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">size</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8">0</span></span></code></pre>

Returns the actual physical size of the window.

### <a id="set_position"></a> `set_position` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">set_position</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="../../physicalposition/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalPosition</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Sets the position of the window on the screen, in physical screen coordinates and including a window frame (if present).

The default implementation does nothing

Called from [slint::Window::set\_position()](../../window/#set_position).

### <a id="position"></a> `position` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a href="https://en.cppreference.com/w/cpp/utility/optional" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">optional</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><a href="../../physicalposition/" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">PhysicalPosition</span></a><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> > </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">position</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Returns the position of the window on the screen, in physical screen coordinates and including a window frame (if present).

The default implementation returns std::nullopt.

Called from [slint::Window::position()](../../window/#position).

### <a id="update_window_properties"></a> `update_window_properties` <small>(virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">update_window_properties</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../windowadapter-windowproperties/" class="api-link">WindowProperties</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Re-implement this function to update the properties such as window title or layout constraints.

This function is called before `set_visible(true)`, and will be called again when the properties that were queried on the last call are changed. If you do not query any properties, it may not be called again.

### <a id="renderer"></a> `renderer` <small>(pure virtual)</small>

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../abstractrenderer/" class="api-link">AbstractRenderer</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">renderer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()=</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8">0</span></span></code></pre>

Re-implement this function to provide a reference to the renderer for use with the window adapter.

Your re-implementation should contain a renderer such as [SoftwareRenderer](../softwarerenderer/) or [SkiaRenderer](../skiarenderer/) and you must return a reference to it.

### <a id="window"></a> `window`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> </span><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../../window/" class="api-link">Window</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">window</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">const</span></span></code></pre>

Return the [slint::Window](../../window/) associated with this window.

Note that this function can only be called if the window was initialized, which is only the case after it has been returned from a call to [Platform::create\_window\_adapter](../platform/#create_window_adapter)

### <a id="window-2"></a> `window`

<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><a style="--shiki-light:#267F99;--shiki-dark:#4EC9B0" href="../../window/" class="api-link">Window</a><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> &#x26;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">platform</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">WindowAdapter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">window</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Overload.