---
title: "slint::select_bundled_translation"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">bool</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> slint</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA">select_bundled_translation</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">(</span><a href="https://en.cppreference.com/w/cpp/string/basic_string_view" class="api-link"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">std</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">::</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0">string_view</span></a><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE"> language</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4">)</span></span></code></pre>

Select the current translation language when using bundled translations. This function requires that the application's `.slint` file was compiled with bundled translations. It must be called after creating the first component.

The language string is the locale, which matches the name of the folder that contains the `LC_MESSAGES` folder. An empty string or `"en"` will select the default language.

Returns true if the language was selected; false if the language was not found in the list of bundled translations.