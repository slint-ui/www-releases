---
title: "slint::Timer Struct"
---
```cpp
struct Timer;
```

```cpp
#include <slint.h>
```

A [Timer](./) that can call a callback at repeated interval

Use the static single\_shot function to make a single shot timer

## Public Functions

### `Timer`

```cpp
slint::Timer::Timer()=default
```

Construct a null timer. Use the [start()](./#start) method to activate the timer with a mode, interval and callback.

### `Timer`

```cpp
slint::Timer::Timer(std::chrono::milliseconds interval, F callback)
```

Construct a timer which will repeat the callback every `interval` milliseconds until the destructor of the timer is called.

This is a convenience function and equivalent to calling `start(slint::TimerMode::Repeated, interval, callback);` on a default constructed [Timer](./).

### `Timer`

```cpp
slint::Timer::Timer(const Timer &)=delete
```

### `operator=`

```cpp
Timer & slint::Timer::operator=(const Timer &)=delete
```

### `~Timer`

```cpp
slint::Timer::~Timer()
```

### `start`

```cpp
void slint::Timer::start(TimerMode mode, std::chrono::milliseconds interval, F callback)
```

Starts the timer with the given *mode* and *interval*, in order for the *callback* to called when the timer fires. If the timer has been started previously and not fired yet, then it will be restarted.

### `stop`

```cpp
void slint::Timer::stop()
```

Stops the previously started timer. Does nothing if the timer has never been started. A stopped timer cannot be restarted with [restart()](./#restart). Use [start()](./#start) instead.

### `restart`

```cpp
void slint::Timer::restart()
```

Restarts the timer. If the timer was previously started by calling \[`Self::start()`\] with a duration and callback, then the time when the callback will be next invoked is re-calculated to be in the specified duration relative to when this function is called.

Does nothing if the timer was never started.

### `running`

```cpp
bool slint::Timer::running() const
```

Returns true if the timer is running; false otherwise.

### `interval`

```cpp
std::chrono::milliseconds slint::Timer::interval() const
```

Returns the interval of the timer. Returns 0 if the timer was never started.

## Public Static Functions

### `single_shot`

```cpp
static void slint::Timer::single_shot(std::chrono::milliseconds duration, F callback)
```

Call the callback after the given duration.