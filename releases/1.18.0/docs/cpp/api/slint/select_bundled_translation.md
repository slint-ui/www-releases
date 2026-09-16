---
title: "slint::select_bundled_translation Function"
---
```cpp
bool slint::select_bundled_translation(std::string_view language)
```

Select the current translation language when using bundled translations. This function requires that the application's `.slint` file was compiled with bundled translations. It must be called after creating the first component.

The language string is the locale, which matches the name of the folder that contains the `LC_MESSAGES` folder. An empty string or `"en"` will select the default language.

Returns true if the language was selected; false if the language was not found in the list of bundled translations.