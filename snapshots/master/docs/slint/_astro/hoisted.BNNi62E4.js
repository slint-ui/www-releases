const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.BLmytkdT.js","_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const S=document.getElementById("starlight__sidebar"),y=S?.querySelector("sl-sidebar-state-persist"),b="sl-sidebar-state",v=()=>{let n=[];const e=y?.dataset.hash||"";try{const t=sessionStorage.getItem(b),s=JSON.parse(t||"{}");Array.isArray(s.open)&&s.hash===e&&(n=s.open)}catch{}return{hash:e,open:n,scroll:S?.scrollTop||0}},w=n=>{try{sessionStorage.setItem(b,JSON.stringify(n))}catch{}},L=()=>w(v()),x=(n,e)=>{const t=v();t.open[e]=n,w(t)};y?.addEventListener("click",n=>{if(!(n.target instanceof Element))return;const e=n.target.closest("summary")?.closest("details");if(!e)return;const t=e.querySelector("sl-sidebar-restore"),s=parseInt(t?.dataset.index||"");isNaN(s)||x(!e.open,s)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&L()});addEventListener("pageHide",L);class q extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",q);const C="modulepreload",H=function(n){return"/master/docs/slint/"+n},E={},_=function(e,t,s){let u=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");u=Promise.allSettled(t.map(l=>{if(l=H(l),l in E)return;E[l]=!0;const r=l.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":C,r||(i.as="script"),i.crossOrigin="",i.href=l,c&&i.setAttribute("nonce",c),document.head.appendChild(i),r)return new Promise((o,m)=>{i.addEventListener("load",o),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function d(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return u.then(a=>{for(const c of a||[])c.status==="rejected"&&d(c.reason);return e().catch(d)})};class A extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),d=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!u.contains(o.target))&&c()},a=o=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),o?.stopPropagation(),window.addEventListener("click",d)},c=()=>s.close();e.addEventListener("click",a),e.disabled=!1,t.addEventListener("click",c),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",d)}),window.addEventListener("keydown",o=>{(o.metaKey===!0||o.ctrlKey===!0)&&o.key==="k"&&(s.open?c():a(),o.preventDefault())});let l={};try{l=JSON.parse(this.dataset.translations||"{}")}catch{}const i=this.dataset.stripTrailingSlash!==void 0?o=>o.replace(/(.)\/(#.*)?$/,"$1$2"):o=>o;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(m=>setTimeout(m,1)))(async()=>{const{PagefindUI:m}=await _(async()=>{const{PagefindUI:g}=await import("./ui-core.BLmytkdT.js");return{PagefindUI:g}},__vite__mapDeps([0,1]));new m({element:"#starlight__search",baseUrl:"/master/docs/slint",bundlePath:"/master/docs/slint".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:l,showSubResults:!0,processResult:g=>{g.url=i(g.url),g.sub_results=g.sub_results.map(f=>(f.url=i(f.url),f))}})})})}}customElements.define("site-search",A);class P extends HTMLElement{constructor(){super();const t=typeof localStorage<"u"&&localStorage.getItem("starlight-theme")||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t==="light"?"light":"dark",this.handleMouseDown=this.handleMouseDown.bind(this)}connectedCallback(){this.addEventListener("click",this.handleMouseDown)}disconnectedCallback(){this.removeEventListener("click",this.handleMouseDown)}handleMouseDown(e){const t=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=t,localStorage.setItem("starlight-theme",t)}}customElements.define("theme-switcher",P);class O extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",t=>this.closeOnEscape(t))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",O);const R="_top";class T extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=e=>(window.requestIdleCallback||(t=>setTimeout(t,1)))(e),this.init=()=>{const e=[...this.querySelectorAll("a")],t=r=>{if(r instanceof HTMLHeadingElement){if(r.id===R)return!0;const h=r.tagName[1];if(h){const i=parseInt(h,10);if(i>=this.minH&&i<=this.maxH)return!0}}return!1},s=r=>{if(!r)return null;const h=r;for(;r;){if(t(r))return r;for(r=r.previousElementSibling;r?.lastElementChild;)r=r.lastElementChild;const i=s(r);if(i)return i}return s(h.parentElement)},u=r=>{for(const{isIntersecting:h,target:i}of r){if(!h)continue;const o=s(i);if(!o)continue;const m=e.find(g=>g.hash==="#"+encodeURIComponent(o.id));if(m){this.current=m;break}}},d=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let a;const c=()=>{a||(a=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),d.forEach(r=>a.observe(r)))};c();let l;window.addEventListener("resize",()=>{a&&(a.disconnect(),a=void 0),clearTimeout(l),l=setTimeout(()=>this.onIdle(c),200)})},this.onIdle(()=>this.init())}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,t=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+t+32,u=s+53,d=document.documentElement.clientHeight;return`-${s}px 0% ${u-d}px`}}customElements.define("starlight-toc",T);class D extends T{set current(e){super.current=e;const t=this.querySelector(".display-current");t&&(t.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const t=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",t)}),window.addEventListener("click",s=>{e.contains(s.target)||t()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const u=e.contains(document.activeElement);if(t(),u){const d=e.querySelector("summary");d&&d.focus()}}})}}customElements.define("mobile-starlight-toc",D);const k="starlight-theme",I=n=>n==="auto"||n==="dark"||n==="light"?n:"auto",M=()=>I(typeof localStorage<"u"&&localStorage.getItem(k));function N(n){typeof localStorage<"u"&&localStorage.setItem(k,n==="light"||n==="dark"?n:"")}const $=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(n){StarlightThemeProvider.updatePickers(n),document.documentElement.dataset.theme=n==="auto"?$():n,N(n)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{M()==="auto"&&p("auto")});class B extends HTMLElement{constructor(){super(),p(M()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(I(e.currentTarget.value))})}}customElements.define("starlight-theme-select",B);export{_};