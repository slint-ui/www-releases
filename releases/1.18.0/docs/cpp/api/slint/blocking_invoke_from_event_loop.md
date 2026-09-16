---
title: "slint::blocking_invoke_from_event_loop Function"
---
```cpp
auto slint::blocking_invoke_from_event_loop(Functor f) -> std::invoke_result_t<Functor>
```

Blocking version of [invoke\_from\_event\_loop()](../invoke_from_event_loop/)

Just like [invoke\_from\_event\_loop()](../invoke_from_event_loop/), this will run the specified functor from the thread running the slint event loop. But it will block until the execution of the functor is finished, and return that value.

This function must be called from a different thread than the thread that runs the event loop otherwise it will result in a deadlock. Calling this function if the event loop is not running will also block forever or until the event loop is started in another thread.

The following example is reading the message property from a thread

```cpp
#include "my_application_ui.h"
#include <thread>

int main(int argc, char **argv)
{
    auto ui = MyApplicationUI::create();
    ui->set_status_label("Pending");

    std::thread worker_thread([ui]{
        while (...) {
            auto message = slint::blocking_invoke_from_event_loop([ui]() {
               return ui->get_message();
            }
            do_something(message);
            ...
        });
    });
    ...
    ui->run();
    ...
}
```