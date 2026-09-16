---
title: "slint::invoke_from_event_loop Function"
---
```cpp
void slint::invoke_from_event_loop(Functor f)
```

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

See also [blocking\_invoke\_from\_event\_loop()](../blocking_invoke_from_event_loop/) for a blocking version of this function