import{S as w,i as N,s as B,k,q as y,a as x,l as v,m as T,r as E,c as O,h as u,b as $,D as p,E as C,u as M,F as _,L as G,e as R,g as D,t as b,d as F,f as d,K as H,M as J,w as L,x as U,y as j,z as S,C as Q}from"../../../chunks/index-e16e37d1.js";import{d as I}from"../../../chunks/store-22961a3e.js";import{g as K}from"../../../chunks/navigation-681fdfc0.js";function V(c){let e,a=c[0].name+"",t,n,o,l,r,s,i,f,g;return{c(){e=k("li"),t=y(a),n=x(),o=k("button"),l=y("Remove"),r=x(),s=k("button"),i=y("Edit")},l(h){e=v(h,"LI",{});var m=T(e);t=E(m,a),n=O(m),o=v(m,"BUTTON",{});var q=T(o);l=E(q,"Remove"),q.forEach(u),r=O(m),s=v(m,"BUTTON",{});var P=T(s);i=E(P,"Edit"),P.forEach(u),m.forEach(u)},m(h,m){$(h,e,m),p(e,t),p(e,n),p(e,o),p(o,l),p(e,r),p(e,s),p(s,i),f||(g=[C(o,"click",c[1]),C(s,"click",c[2])],f=!0)},p(h,[m]){m&1&&a!==(a=h[0].name+"")&&M(t,a)},i:_,o:_,d(h){h&&u(e),f=!1,G(g)}}}function W(c,e,a){let{template:t}=e;const n=()=>I.deleteTemplate(t.id),o=()=>K(`/template/${t.id}`);return c.$$set=l=>{"template"in l&&a(0,t=l.template)},[t,n,o]}class X extends w{constructor(e){super(),N(this,e,W,V,B,{template:0})}}function z(c,e,a){const t=c.slice();return t[1]=e[a],t}function Y(c){let e,a,t=Object.values(c[0].templates),n=[];for(let l=0;l<t.length;l+=1)n[l]=A(z(c,t,l));const o=l=>b(n[l],1,1,()=>{n[l]=null});return{c(){e=k("ul");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){e=v(l,"UL",{});var r=T(e);for(let s=0;s<n.length;s+=1)n[s].l(r);r.forEach(u)},m(l,r){$(l,e,r);for(let s=0;s<n.length;s+=1)n[s].m(e,null);a=!0},p(l,r){if(r&1){t=Object.values(l[0].templates);let s;for(s=0;s<t.length;s+=1){const i=z(l,t,s);n[s]?(n[s].p(i,r),d(n[s],1)):(n[s]=A(i),n[s].c(),d(n[s],1),n[s].m(e,null))}for(D(),s=t.length;s<n.length;s+=1)o(s);F()}},i(l){if(!a){for(let r=0;r<t.length;r+=1)d(n[r]);a=!0}},o(l){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)b(n[r]);a=!1},d(l){l&&u(e),J(n,l)}}}function Z(c){let e,a;return{c(){e=k("p"),a=y("There are no templates here yet")},l(t){e=v(t,"P",{});var n=T(e);a=E(n,"There are no templates here yet"),n.forEach(u)},m(t,n){$(t,e,n),p(e,a)},p:_,i:_,o:_,d(t){t&&u(e)}}}function A(c){let e,a;return e=new X({props:{template:c[1]}}),{c(){L(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,n){j(e,t,n),a=!0},p(t,n){const o={};n&1&&(o.template=t[1]),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function ee(c){let e,a,t,n,o;const l=[Z,Y],r=[];function s(i,f){return f&1&&(e=null),e==null&&(e=!Object.keys(i[0].templates)),e?0:1}return a=s(c,-1),t=r[a]=l[a](c),{c(){t.c(),n=R()},l(i){t.l(i),n=R()},m(i,f){r[a].m(i,f),$(i,n,f),o=!0},p(i,[f]){let g=a;a=s(i,f),a===g?r[a].p(i,f):(D(),b(r[g],1,1,()=>{r[g]=null}),F(),t=r[a],t?t.p(i,f):(t=r[a]=l[a](i),t.c()),d(t,1),t.m(n.parentNode,n))},i(i){o||(d(t),o=!0)},o(i){b(t),o=!1},d(i){r[a].d(i),i&&u(n)}}}function te(c,e,a){let t;return H(c,I,n=>a(0,t=n)),[t]}class le extends w{constructor(e){super(),N(this,e,te,ee,B,{})}}function ne(c){let e,a,t,n;return{c(){e=k("button"),a=y("Create a template")},l(o){e=v(o,"BUTTON",{});var l=T(e);a=E(l,"Create a template"),l.forEach(u)},m(o,l){$(o,e,l),p(e,a),t||(n=C(e,"click",c[0]),t=!0)},p:_,i:_,o:_,d(o){o&&u(e),t=!1,n()}}}function ae(c){return[()=>K("/template")]}class re extends w{constructor(e){super(),N(this,e,ae,ne,B,{})}}function se(c){let e,a,t,n,o;return a=new re({}),n=new le({}),{c(){e=x(),L(a.$$.fragment),t=x(),L(n.$$.fragment),this.h()},l(l){Q("svelte-p9to95",document.head).forEach(u),e=O(l),U(a.$$.fragment,l),t=O(l),U(n.$$.fragment,l),this.h()},h(){document.title="Notatnyk | Templates"},m(l,r){$(l,e,r),j(a,l,r),$(l,t,r),j(n,l,r),o=!0},p:_,i(l){o||(d(a.$$.fragment,l),d(n.$$.fragment,l),o=!0)},o(l){b(a.$$.fragment,l),b(n.$$.fragment,l),o=!1},d(l){l&&u(e),S(a,l),l&&u(t),S(n,l)}}}class ue extends w{constructor(e){super(),N(this,e,null,se,B,{})}}export{ue as default};