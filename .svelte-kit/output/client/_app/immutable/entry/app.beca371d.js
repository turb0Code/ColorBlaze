import{s as q,a as B,e as d,c as U,i as w,d as h,b as j,o as W,f as z,g as F,h as G,j as D,k as m,l as H,m as J,n as K,t as M,p as I,q as E}from"../chunks/scheduler.25f84ff8.js";import{S as Q,i as X,t as p,c as L,a as g,g as P,b as v,d as O,m as R,e as y}from"../chunks/index.c592e685.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},k=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[12](null),e&&y(e,t)}}}function x(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[11](null),e&&y(e,t)}}}function ee(o){let e,n,i;var s=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),w(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){P();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[10](null),e&&y(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=G(e);n&&n.l(s),s.forEach(h),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){w(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function A(o){let e;return{c(){e=H(o[7])},l(n){e=J(n,o[7])},m(n,i){w(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(o){let e,n,i,s,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=B(),c&&c.c(),s=d()},l(a){n.l(a),i=U(a),c&&c.l(a),s=d()},m(a,u){r[e].m(a,u),w(a,i,u),c&&c.m(a,u),w(a,s,u),f=!0},p(a,[u]){let b=e;e=l(a),e===b?r[e].p(a,u):(P(),p(r[b],1,1,()=>{r[b]=null}),L(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),g(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(a){f||(g(n),f=!0)},o(a){p(n),f=!1},d(a){a&&(h(i),h(s)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;j(i.page.notify);let a=!1,u=!1,b=null;W(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),M().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,s=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,f,r,l,c,a,u,b,i,s,N,S,C]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.b96d1375.js"),["..\\nodes\\0.b96d1375.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\Button.913438f1.js","..\\chunks\\bundle-mjs.3695a85f.js","..\\chunks\\index.b531825d.js","..\\chunks\\ToolbarButton.49974347.js","..\\chunks\\exporting.216a92d7.js","..\\chunks\\color-stores.ca7386b0.js","..\\assets\\0.130e5c27.css"],import.meta.url),()=>k(()=>import("../nodes/1.7fa86be6.js"),["..\\nodes\\1.7fa86be6.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\stores.840903cd.js","..\\chunks\\singletons.dd0ea556.js","..\\chunks\\index.b531825d.js"],import.meta.url),()=>k(()=>import("../nodes/2.3a2b51a1.js"),["..\\nodes\\2.3a2b51a1.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\version3-title.f0e2534b.js","..\\chunks\\bundle-mjs.3695a85f.js","..\\chunks\\color-stores.ca7386b0.js","..\\chunks\\index.b531825d.js","..\\assets\\version3-title.79427b00.css","..\\chunks\\Button.913438f1.js","..\\chunks\\ChevronDownSolid.2dc0b9d2.js","..\\chunks\\exporting.216a92d7.js","..\\chunks\\food.b94c3116.js","..\\assets\\2.e75bd0db.css"],import.meta.url),()=>k(()=>import("../nodes/3.7f180f90.js"),["..\\nodes\\3.7f180f90.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\ToolbarButton.49974347.js","..\\chunks\\bundle-mjs.3695a85f.js","..\\chunks\\Button.913438f1.js","..\\chunks\\ChevronDownSolid.2dc0b9d2.js","..\\chunks\\index.b531825d.js","..\\chunks\\color-stores.ca7386b0.js","..\\chunks\\stores.840903cd.js","..\\chunks\\singletons.dd0ea556.js"],import.meta.url),()=>k(()=>import("../nodes/4.36ddcdc0.js"),["..\\nodes\\4.36ddcdc0.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\food.b94c3116.js","..\\chunks\\color-stores.ca7386b0.js","..\\chunks\\index.b531825d.js"],import.meta.url),()=>k(()=>import("../nodes/5.259a135b.js"),["..\\nodes\\5.259a135b.js","..\\chunks\\scheduler.25f84ff8.js","..\\chunks\\index.c592e685.js","..\\chunks\\version3-title.f0e2534b.js","..\\chunks\\bundle-mjs.3695a85f.js","..\\chunks\\color-stores.ca7386b0.js","..\\chunks\\index.b531825d.js","..\\assets\\version3-title.79427b00.css","..\\assets\\5.dcebcb25.css"],import.meta.url)],le=[],fe={"/":[2],"/example":[3],"/images":[4],"/presentation":[5]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
