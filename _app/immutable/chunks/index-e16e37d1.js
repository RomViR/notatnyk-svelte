function _(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(q)}function D(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(G(n,e))}function ot(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,l){if(r){const c=z(n,e,i,l);t.p(c,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const s=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:Q(1,r,g=>n[e[g]].claim_order,s))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const l=[],c=[];let o=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(l.push(n[u-1]);o>=u;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[u],a)}}function V(t,n){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){E&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function ht(){return j(" ")}function mt(){return j("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function bt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function gt(t){return nt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n){t.value=n??""}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Nt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function vt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function At(t,n){return new t(n)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){H().$$.on_mount.push(t)}function jt(t){H().$$.after_update.push(t)}const m=[],k=[],$=[],v=[],L=Promise.resolve();let A=!1;function O(){A||(A=!0,L.then(P))}function Tt(){return O(),L}function S(t){$.push(t)}function Ct(t){v.push(t)}const N=new Set;let x=0;function P(){const t=y;do{for(;x<m.length;){const n=m[x];x++,p(n),et(n.$$)}for(p(null),m.length=0,x=0;k.length;)k.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(m.length);for(;v.length;)v.pop()();A=!1,N.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function kt(){d.r||b(d.c),d=d.p}function it(t,n){t&&t.i&&(w.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Dt(t,n,e,i){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,i===void 0&&e(t.$$.ctx[r]))}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),l.forEach(S)}function st(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(m.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,l,c,o=[-1]){const u=y;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||u.$$.root};c&&c(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...T)=>{const C=T.length?T[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&ct(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(W)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),P()}p(u)}class Lt{$destroy(){st(this,1),this.$destroy=_}$on(n,e){if(!D(e))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Ot(t,n=_){let e;const i=new Set;function r(o){if(I(t,o)&&(t=o,e)){const u=!h.length;for(const s of i)s[1](),h.push(s,t);if(u){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(o){r(o(t))}function c(o,u=_){const s=[o,u];return i.add(s),i.size===1&&(e=n(r)||_),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:c}}export{Tt as A,Ot as B,vt as C,V as D,pt as E,_ as F,ot as G,ft as H,at as I,lt as J,ut as K,b as L,_t as M,k as N,Dt as O,D as P,Ct as Q,S as R,Lt as S,Et as T,Nt as U,$t as V,ht as a,dt as b,gt as c,kt as d,mt as e,it as f,Mt as g,W as h,Ht as i,jt as j,X as k,bt as l,Y as m,yt as n,St as o,wt as p,j as q,nt as r,I as s,qt as t,xt as u,At as v,zt as w,Bt as x,rt as y,st as z};
