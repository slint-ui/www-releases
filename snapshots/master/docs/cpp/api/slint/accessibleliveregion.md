---
title: "slint::AccessibleLiveRegion"
---
<pre class="shiki shiki-themes light-plus dark-plus api-signature" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6">enum</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6"> class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0"> AccessibleLiveRegion</span></span></code></pre>

| Value | Description |
| --- | --- |
| `Off` | The element is not a live region. |
| `Polite` | Updates are announced when the user is idle. |
| `Assertive` | Updates are announced as soon as possible. |

This enum represents the different values of the `accessible-live-region` property. It indicates that an element is a live region whose content changes should be announced by assistive technologies.