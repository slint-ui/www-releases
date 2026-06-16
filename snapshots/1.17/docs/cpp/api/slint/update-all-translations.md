---
title: "slint::update_all_translations"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">void</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">update_all_translations</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">()</span></span></code></pre>

Forces all the strings that are translated with `@tr(...)` to be re-evaluated. Call this function after changing the language at run-time and when translating with either gettext or a custom translator. For bundled translations, there is no need to call this function.

Example (assuming usage of gettext):

```cpp
 my_ui->global<LanguageSettings>().on_french_selected([] {
    setenv("LANGUAGE", langs[l], true);
    slint::update_all_translations();
});
```