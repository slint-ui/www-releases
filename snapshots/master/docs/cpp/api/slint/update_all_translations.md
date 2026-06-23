---
title: "slint::update_all_translations Function"
---
```cpp
void slint::update_all_translations()
```

Forces all the strings that are translated with `@tr(...)` to be re-evaluated. Call this function after changing the language at run-time and when translating with either gettext or a custom translator. For bundled translations, there is no need to call this function.

Example (assuming usage of gettext):

```cpp
 my_ui->global<LanguageSettings>().on_french_selected([] {
    setenv("LANGUAGE", langs[l], true);
    slint::update_all_translations();
});
```