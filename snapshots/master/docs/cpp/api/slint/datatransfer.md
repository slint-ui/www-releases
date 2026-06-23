---
title: "slint::DataTransfer Struct"
---
```cpp
struct DataTransfer;
```

```cpp
#include <slint.h>
```

`DataTransfer` abstracts over the various ways of transferring data within an application and between applications. The details will depend on the current platform, but the common features are:

- Each `DataTransfer` contains multiple views over the same data in different formats, specified by MIME type
- The `DataTransfer` may contain an in-memory representation of the data, which can be sent and received within the current application
- Serializing to a given format may be done eagerly or lazily

## Public Functions

### `DataTransfer`

```cpp
slint::DataTransfer::DataTransfer()
```

Default constructor for `DataTransfer`

### `DataTransfer`

```cpp
explicit slint::DataTransfer::DataTransfer(const SharedString &string)
```

Constructs a `DataTransfer` whose plain text representation is *string*.

If *string* is empty, the resulting `DataTransfer` is empty (carries no plain text representation).

### `DataTransfer`

```cpp
explicit slint::DataTransfer::DataTransfer(const Image &image)
```

Constructs a `DataTransfer` whose image representation is *image*. Conversion to the relevant format is done on-demand.

If *image* is default-constructed, the resulting `DataTransfer` is empty (carries no image representation).

### `~DataTransfer`

```cpp
slint::DataTransfer::~DataTransfer()
```

Destroys this `DataTransfer`, releasing any data it holds.

### `DataTransfer`

```cpp
slint::DataTransfer::DataTransfer(const DataTransfer &other)
```

Creates a new `DataTransfer` that shares the data of *other*.

### `operator=`

```cpp
DataTransfer & slint::DataTransfer::operator=(const DataTransfer &other)
```

Assigns *other* to this `DataTransfer` and returns a reference to this.

### `DataTransfer`

```cpp
slint::DataTransfer::DataTransfer(DataTransfer &&other) noexcept
```

Move-constructs a `DataTransfer` from *other*, leaving *other* in a default-constructed state.

### `operator=`

```cpp
DataTransfer & slint::DataTransfer::operator=(DataTransfer &&other) noexcept
```

Move-assigns *other* to this `DataTransfer` and returns a reference to this.

### `set_plain_text`

```cpp
void slint::DataTransfer::set_plain_text(const SharedString &text)
```

Sets the plain text representation of this `DataTransfer`. Each `DataTransfer` can only have a single plain text representation; calling this again overwrites the previous one.

Passing an empty `text` clears the previously-set plain text instead of storing it.

### `set_image`

```cpp
void slint::DataTransfer::set_image(const Image &image)
```

Sets the image representation of this `DataTransfer`. Each `DataTransfer` can only have a single image representation; calling this again overwrites the previous one.

Passing a default-constructed `Image` clears the previously-set image instead of storing it.

### `has_plain_text`

```cpp
bool slint::DataTransfer::has_plain_text() const
```

Returns `true` if this data transfer advertises a plain text representation.

### `has_image`

```cpp
bool slint::DataTransfer::has_image() const
```

Returns `true` if this data transfer advertises an image representation.

### `is_empty`

```cpp
bool slint::DataTransfer::is_empty() const
```

Returns `true` if this `DataTransfer` carries no data: no plain text, no image, and no user data.

### `plain_text`

```cpp
std::optional<SharedString> slint::DataTransfer::plain_text() const
```

Returns the plain text representation of this `DataTransfer`, or `std::nullopt` if no plain text representation is available.

### `image`

```cpp
std::optional<Image> slint::DataTransfer::image() const
```

Returns the image representation of this `DataTransfer`, or `std::nullopt` if no image representation is available.

### `set_user_data`

```cpp
void slint::DataTransfer::set_user_data(std::any value)
```

Overload of `set_user_data()` for callers that already hold a `std::any`.

### `user_data`

```cpp
std::any slint::DataTransfer::user_data() const
```

Returns the user data, or an empty `std::any` if none is set. Use `std::any_cast` to extract the concrete value.

### `has_user_data`

```cpp
bool slint::DataTransfer::has_user_data() const
```

Returns `true` if this `DataTransfer` holds user data.

### `clear_user_data`

```cpp
void slint::DataTransfer::clear_user_data()
```

Clears the user data, if any.

## Friends

### `operator==`

```cpp
bool operator==(const DataTransfer &a, const DataTransfer &b)
```

Compare two `DataTransfer` values for equality. This will return true if `b` is an unmodified clone of `a`, but if any modification has been done to either value since cloning then this will return false even if the two values are semantically identical.