import{S as N,i as w,s as B,k,q as y,a as x,l as v,m as T,r as E,c as O,h as u,b as $,F as p,G as U,u as J,I as _,O as K,H as A,e as I,g as F,t as b,d as G,f as d,N as M,P as Q,w as j,x as C,y as L,z as P,E as V}from"../../../chunks/paths-9fcfbb84.js";import{d as H}from"../../../chunks/store-b76bbb03.js";import{g as D}from"../../../chunks/navigation-95bec250.js";function W(c){let e,a=c[0].name+"",t,n,o,l,r,s,i,f,g;return{c(){e=k("li"),t=y(a),n=x(),o=k("button"),l=y("Remove"),r=x(),s=k("button"),i=y("Edit")},l(h){e=v(h,"LI",{});var m=T(e);t=E(m,a),n=O(m),o=v(m,"BUTTON",{});var S=T(o);l=E(S,"Remove"),S.forEach(u),r=O(m),s=v(m,"BUTTON",{});var q=T(s);i=E(q,"Edit"),q.forEach(u),m.forEach(u)},m(h,m){$(h,e,m),p(e,t),p(e,n),p(e,o),p(o,l),p(e,r),p(e,s),p(s,i),f||(g=[U(o,"click",c[1]),U(s,"click",c[2])],f=!0)},p(h,[m]){m&1&&a!==(a=h[0].name+"")&&J(t,a)},i:_,o:_,d(h){h&&u(e),f=!1,K(g)}}}function X(c,e,a){let{template:t}=e;const n=()=>H.deleteTemplate(t.id),o=()=>D(`${A}/template/${t.id}`);return c.$$set=l=>{"template"in l&&a(0,t=l.template)},[t,n,o]}class Y extends N{constructor(e){super(),w(this,e,X,W,B,{template:0})}}function R(c,e,a){const t=c.slice();return t[1]=e[a],t}function Z(c){let e,a,t=Object.values(c[0].templates),n=[];for(let l=0;l<t.length;l+=1)n[l]=z(R(c,t,l));const o=l=>b(n[l],1,1,()=>{n[l]=null});return{c(){e=k("ul");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){e=v(l,"UL",{});var r=T(e);for(let s=0;s<n.length;s+=1)n[s].l(r);r.forEach(u)},m(l,r){$(l,e,r);for(let s=0;s<n.length;s+=1)n[s].m(e,null);a=!0},p(l,r){if(r&1){t=Object.values(l[0].templates);let s;for(s=0;s<t.length;s+=1){const i=R(l,t,s);n[s]?(n[s].p(i,r),d(n[s],1)):(n[s]=z(i),n[s].c(),d(n[s],1),n[s].m(e,null))}for(F(),s=t.length;s<n.length;s+=1)o(s);G()}},i(l){if(!a){for(let r=0;r<t.length;r+=1)d(n[r]);a=!0}},o(l){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)b(n[r]);a=!1},d(l){l&&u(e),Q(n,l)}}}function ee(c){let e,a;return{c(){e=k("p"),a=y("There are no templates here yet")},l(t){e=v(t,"P",{});var n=T(e);a=E(n,"There are no templates here yet"),n.forEach(u)},m(t,n){$(t,e,n),p(e,a)},p:_,i:_,o:_,d(t){t&&u(e)}}}function z(c){let e,a;return e=new Y({props:{template:c[1]}}),{c(){j(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){L(e,t,n),a=!0},p(t,n){const o={};n&1&&(o.template=t[1]),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function te(c){let e,a,t,n,o;const l=[ee,Z],r=[];function s(i,f){return f&1&&(e=null),e==null&&(e=!Object.keys(i[0].templates)),e?0:1}return a=s(c,-1),t=r[a]=l[a](c),{c(){t.c(),n=I()},l(i){t.l(i),n=I()},m(i,f){r[a].m(i,f),$(i,n,f),o=!0},p(i,[f]){let g=a;a=s(i,f),a===g?r[a].p(i,f):(F(),b(r[g],1,1,()=>{r[g]=null}),G(),t=r[a],t?t.p(i,f):(t=r[a]=l[a](i),t.c()),d(t,1),t.m(n.parentNode,n))},i(i){o||(d(t),o=!0)},o(i){b(t),o=!1},d(i){r[a].d(i),i&&u(n)}}}function le(c,e,a){let t;return M(c,H,n=>a(0,t=n)),[t]}class ne extends N{constructor(e){super(),w(this,e,le,te,B,{})}}function ae(c){let e,a,t,n;return{c(){e=k("button"),a=y("Create a template")},l(o){e=v(o,"BUTTON",{});var l=T(e);a=E(l,"Create a template"),l.forEach(u)},m(o,l){$(o,e,l),p(e,a),t||(n=U(e,"click",c[0]),t=!0)},p:_,i:_,o:_,d(o){o&&u(e),t=!1,n()}}}function re(c){return[()=>D(`${A}/template`)]}class se extends N{constructor(e){super(),w(this,e,re,ae,B,{})}}function oe(c){let e,a,t,n,o;return a=new se({}),n=new ne({}),{c(){e=x(),j(a.$$.fragment),t=x(),j(n.$$.fragment),this.h()},l(l){V("svelte-p9to95",document.head).forEach(u),e=O(l),C(a.$$.fragment,l),t=O(l),C(n.$$.fragment,l),this.h()},h(){document.title="Notatnyk | Templates"},m(l,r){$(l,e,r),L(a,l,r),$(l,t,r),L(n,l,r),o=!0},p:_,i(l){o||(d(a.$$.fragment,l),d(n.$$.fragment,l),o=!0)},o(l){b(a.$$.fragment,l),b(n.$$.fragment,l),o=!1},d(l){l&&u(e),P(a,l),l&&u(t),P(n,l)}}}class fe extends N{constructor(e){super(),w(this,e,null,oe,B,{})}}export{fe as default};
