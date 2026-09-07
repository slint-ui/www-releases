// Added to every page by the worker as it is served. Neither is part of the
// stored pages, so a change here takes effect everywhere at once and no content
// has to be rebuilt.

export const MATOMO = `
<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.slint.dev/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '3']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript>
<img referrerpolicy="no-referrer-when-downgrade" src="https://matomo.slint.dev/matomo.php?idsite=3&amp;rec=1" style="border:0" alt="" />
</noscript>
<!-- End Matomo Code -->
`;

// releases.slint.dev only. Everything it serves is an older release, because
// the current one redirects to docs.slint.dev.
export const BANNER = `
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const banner = document.createElement('div');
    banner.id = 'older-version';
    banner.style = 'background-color: hsl(41, 90%, 88%); box-shadow: 0px 1px 1px hsla(0, 0%, 0%, 0.06), 0px 2px 1px hsla(0, 0%, 0%, 0.06); color: hsl(41, 80%, 25%); line-height: 1.2; padding: 0.75rem 1.5rem; text-align: center;';
    banner.innerHTML = \`You are viewing contents of an older version. Switch to <a href="https://docs.slint.dev">the latest released version</a>.\`;
    document.body.insertBefore(banner, document.body.firstChild);
  });
</script>
`;
