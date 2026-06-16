---
title: "slint::invoke_from_event_loop"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">invoke_from_event_loop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Functor</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> f</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Adds the specified functor to an internal queue, notifies the event loop to wake up. Once woken up, any queued up functors will be invoked. This function is thread-safe and can be called from any thread, including the one running the event loop. The provided functors will only be invoked from the thread that started the event loop.

You can use this to set properties or use any other Slint APIs from other threads, by collecting the code in a functor and queuing it up for invocation within the event loop.

The following example assumes that a status message received from a network thread is shown in the UI:

```cpp
#include "my_application_ui.h"
#include <thread>

int main(int argc, char **argv)
{
    auto ui = NetworkStatusUI::create();
    ui->set_status_label("Pending");

    slint::ComponentWeakHandle<NetworkStatusUI> weak_ui_handle(ui);
    std::thread network_thread([=]{
        std::string message = read_message_blocking_from_network();
        slint::invoke_from_event_loop([&]() {
            if (auto ui = weak_ui_handle.lock()) {
                ui->set_status_label(message);
            }
        });
    });
    ...
    ui->run();
    ...
}
```

See also [blocking\_invoke\_from\_event\_loop()](../blocking-invoke-from-event-loop/) for a blocking version of this function