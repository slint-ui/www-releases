---
title: "slint::SharedString Struct"
---
```cpp
struct SharedString;
```

```cpp
#include <slint.h>
```

A string type used by the Slint run-time.

[SharedString](./) uses implicit data sharing to make it efficient to pass around copies. When copying, a reference to the data is cloned, not the data itself.

The class provides constructors from [std::string\_view](https://en.cppreference.com/w/cpp/string/basic_string_view) as well as the automatic conversion to a [std::string\_view](https://en.cppreference.com/w/cpp/string/basic_string_view).

For convenience, it's also possible to convert a number to a string using [SharedString::from\_number(double)](./#from_number).

Under the hood the string data is UTF-8 encoded and it is always terminated with a null character.

## Public Functions

### `SharedString`

```cpp
slint::SharedString::SharedString()
```

Creates an empty default constructed string.

### `SharedString`

```cpp
slint::SharedString::SharedString(std::string_view s)
```

Creates a new [SharedString](./) from the string view *s*. The underlying string data is copied.

### `SharedString`

```cpp
slint::SharedString::SharedString(const char *s)
```

Creates a new [SharedString](./) from the null-terminated string pointer *s*. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### `SharedString`

```cpp
slint::SharedString::SharedString(const char8_t *s)
```

Creates a new [SharedString](./) from the null-terminated string pointer *s*. The underlying string data is copied.

### `SharedString`

```cpp
slint::SharedString::SharedString(std::u8string_view s)
```

Creates a new [SharedString](./) from the string view *s*. The underlying string data is copied.

### `SharedString`

```cpp
slint::SharedString::SharedString(const SharedString &other)
```

Creates a new [SharedString](./) from *other*.

### `~SharedString`

```cpp
slint::SharedString::~SharedString()
```

Destroys this [SharedString](./) and frees the memory if this is the last instance referencing it.

### `operator=`

```cpp
SharedString & slint::SharedString::operator=(const SharedString &other)
```

Assigns *other* to this string and returns a reference to this string.

### `operator=`

```cpp
SharedString & slint::SharedString::operator=(std::string_view s)
```

Assigns the string view *s* to this string and returns a reference to this string. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### `operator=`

```cpp
SharedString & slint::SharedString::operator=(const char *s)
```

Assigns null-terminated string pointer *s* to this string and returns a reference to this string. The underlying string data is copied. It is assumed that the string is UTF-8 encoded.

### `operator=`

```cpp
SharedString & slint::SharedString::operator=(SharedString &&other)
```

Move-assigns *other* to this [SharedString](./) instance.

### `operator std::string_view`

```cpp
slint::SharedString::operator std::string_view() const
```

Provides a view to the string data. The returned view is only valid as long as at least this [SharedString](./) exists.

### `data`

```cpp
auto slint::SharedString::data() const -> const char *
```

Provides a raw pointer to the string data. The returned pointer is only valid as long as at least this [SharedString](./) exists.

### `size`

```cpp
std::size_t slint::SharedString::size() const
```

[Size](../size/) of the string, in bytes. This excludes the terminating null character.

### `begin`

```cpp
const char * slint::SharedString::begin() const
```

Returns a pointer to the first character. It is only safe to dereference the pointer if the string contains at least one character.

### `end`

```cpp
const char * slint::SharedString::end() const
```

Returns a point past the last character of the string. It is not safe to dereference the pointer, but it is suitable for comparison.

### `empty`

```cpp
bool slint::SharedString::empty() const
```

**Returns:** true if the string contains no characters; false otherwise.

### `starts_with`

```cpp
bool slint::SharedString::starts_with(std::string_view prefix) const
```

**Returns:** true if the string starts with the specified prefix string; false otherwise

### `ends_with`

```cpp
bool slint::SharedString::ends_with(std::string_view prefix) const
```

**Returns:** true if the string ends with the specified prefix string; false otherwise

### `clear`

```cpp
void slint::SharedString::clear()
```

Reset to an empty string.

### `to_lowercase`

```cpp
SharedString slint::SharedString::to_lowercase() const
```

Returns the lowercase equivalent of this string, as a new [SharedString](./).

For example:

```cpp
auto str = slint::SharedString("Hello");
auto str2 = str.to_lowercase(); // creates "hello"
```

### `to_uppercase`

```cpp
SharedString slint::SharedString::to_uppercase() const
```

Returns the uppercase equivalent of this string, as a new [SharedString](./).

For example:

```cpp
auto str = slint::SharedString("Hello");
auto str2 = str.to_uppercase(); // creates "HELLO"
```

### `operator+=`

```cpp
SharedString & slint::SharedString::operator+=(std::string_view other)
```

Appends *other* to this string and returns a reference to this.

## Public Static Functions

### `from_number`

```cpp
static SharedString slint::SharedString::from_number(double n)
```

Creates a new [SharedString](./) from the given number *n*. The string representation of the number uses a minimal formatting scheme: If *n* has no fractional part, the number will be formatted as an integer.

For example:

```cpp
auto str = slint::SharedString::from_number(42); // creates "42"
auto str2 = slint::SharedString::from_number(100.5) // creates "100.5"
```

## Friends

### `operator==`

```cpp
bool operator==(const SharedString &a, const SharedString &b)
```

Returns true if *a* is equal to *b*; otherwise returns false.

### `operator!=`

```cpp
bool operator!=(const SharedString &a, const SharedString &b)
```

Returns true if *a* is not equal to *b*; otherwise returns false.

### `operator<`

```cpp
bool operator<(const SharedString &a, const SharedString &b)
```

Returns true if *a* is lexicographically less than *b*; false otherwise.

### `operator<=`

```cpp
bool operator<=(const SharedString &a, const SharedString &b)
```

Returns true if *a* is lexicographically less or equal than *b*; false otherwise.

### `operator>`

```cpp
bool operator>(const SharedString &a, const SharedString &b)
```

Returns true if *a* is lexicographically greater than *b*; false otherwise.

### `operator>=`

```cpp
bool operator>=(const SharedString &a, const SharedString &b)
```

Returns true if *a* is lexicographically greater or equal than *b*; false otherwise.

### `operator<<`

```cpp
std::ostream & operator<<(std::ostream &stream, const SharedString &shared_string)
```

Writes the *shared\_string* to the specified *stream* and returns a reference to the stream.

### `operator+`

```cpp
SharedString operator+(const SharedString &a, std::string_view b)
```

Concatenates *a* and *and* returns the result as a new [SharedString](./).

### `operator+`

```cpp
SharedString operator+(SharedString &&a, std::string_view b)
```

Move-concatenates *b* to *and* returns a reference to *a*.