---
title: "slint::platform::Platform::Task Class"
---
```cpp
class Task;
```

```cpp
#include <slint-platform.h>
```

A task that is passed to the [Platform::run\_in\_event\_loop](../platform/#run_in_event_loop) function and needs to be run in the event loop and not in any other thread.

## Public Functions

### `~Task`

```cpp
slint::platform::Platform::Task::~Task()
```

### `Task`

```cpp
slint::platform::Platform::Task::Task(const Task &)=delete
```

### `operator=`

```cpp
Task & slint::platform::Platform::Task::operator=(const Task &)=delete
```

### `Task`

```cpp
slint::platform::Platform::Task::Task(Task &&other)
```

Move constructor. A moved from [Task](./) can no longer be run.

### `operator=`

```cpp
Task & slint::platform::Platform::Task::operator=(Task &&other)
```

Move operator.

### `run`

```cpp
void slint::platform::Platform::Task::run() &&
```

Run the task.

Can only be invoked once and should only be called from the event loop.