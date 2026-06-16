---
title: "slint::blocking_invoke_from_event_loop"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">auto</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">blocking_invoke_from_event_loop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Functor</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> f</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">) -> </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">invoke_result_t</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">&#x3C; </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">Functor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4"> ></span></span></code></pre>

Blocking version of [invoke\_from\_event\_loop()](../invoke-from-event-loop/)

Just like [invoke\_from\_event\_loop()](../invoke-from-event-loop/), this will run the specified functor from the thread running the slint event loop. But it will block until the execution of the functor is finished, and return that value.

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