import{S as ne,i as le,s as ae,k as g,q as B,a as D,l as E,m as N,r as S,h as I,c as q,n as V,b as M,D as s,V as y,E as C,F as Y,M as oe,L as J,N as ie,O as re,w as se,x as ue,y as fe,f as K,g as he,d as _e,Q as de,t as Q,z as ce,K as be}from"./index-e16e37d1.js";import{d as G}from"./store-22961a3e.js";import{S as pe}from"./SelectObj-3415959d.js";function $(e,t,n){const a=e.slice();return a[8]=t[n],a[9]=t,a[10]=n,a}function x(e){let t,n,a,l,f,o;function _(){e[4].call(n,e[9],e[10])}function A(){e[5].call(l,e[9],e[10])}return{c(){t=g("p"),n=g("input"),a=B(`:
			`),l=g("input"),this.h()},l(d){t=E(d,"P",{});var m=N(t);n=E(m,"INPUT",{type:!0}),a=S(m,`:
			`),l=E(m,"INPUT",{type:!0}),m.forEach(I),this.h()},h(){V(n,"type","text"),V(l,"type","text")},m(d,m){M(d,t,m),s(t,n),y(n,e[8].name),s(t,a),s(t,l),y(l,e[8].value),f||(o=[C(n,"input",_),C(l,"input",A)],f=!0)},p(d,m){e=d,m&1&&n.value!==e[8].name&&y(n,e[8].name),m&1&&l.value!==e[8].value&&y(l,e[8].value)},d(d){d&&I(t),f=!1,J(o)}}}function me(e){let t,n,a,l,f,o,_,A,d,m,p,O,i,L,U,b,j,P,w=Object.values(e[0]),k=[];for(let c=0;c<w.length;c+=1)k[c]=x($(e,w,c));return{c(){t=g("section"),n=g("header"),a=B("Fields:"),l=D();for(let c=0;c<k.length;c+=1)k[c].c();f=D(),o=g("p"),_=g("label"),A=B(`field name:
			`),d=g("input"),m=D(),p=g("label"),O=B(`field value:
			`),i=g("input"),L=D(),U=g("button"),b=B("Add"),this.h()},l(c){t=E(c,"SECTION",{});var r=N(t);n=E(r,"HEADER",{});var T=N(n);a=S(T,"Fields:"),T.forEach(I),l=q(r);for(let R=0;R<k.length;R+=1)k[R].l(r);f=q(r),o=E(r,"P",{});var F=N(o);_=E(F,"LABEL",{});var H=N(_);A=S(H,`field name:
			`),d=E(H,"INPUT",{type:!0}),H.forEach(I),m=q(F),p=E(F,"LABEL",{});var u=N(p);O=S(u,`field value:
			`),i=E(u,"INPUT",{type:!0}),u.forEach(I),L=q(F),U=E(F,"BUTTON",{});var h=N(U);b=S(h,"Add"),h.forEach(I),F.forEach(I),r.forEach(I),this.h()},h(){V(d,"type","text"),V(i,"type","text"),U.disabled=e[2]},m(c,r){M(c,t,r),s(t,n),s(n,a),s(t,l);for(let T=0;T<k.length;T+=1)k[T].m(t,null);s(t,f),s(t,o),s(o,_),s(_,A),s(_,d),y(d,e[1].name),s(o,m),s(o,p),s(p,O),s(p,i),y(i,e[1].value),s(o,L),s(o,U),s(U,b),j||(P=[C(d,"input",e[6]),C(i,"input",e[7]),C(U,"click",e[3])],j=!0)},p(c,[r]){if(r&1){w=Object.values(c[0]);let T;for(T=0;T<w.length;T+=1){const F=$(c,w,T);k[T]?k[T].p(F,r):(k[T]=x(F),k[T].c(),k[T].m(t,f))}for(;T<k.length;T+=1)k[T].d(1);k.length=w.length}r&2&&d.value!==c[1].name&&y(d,c[1].name),r&2&&i.value!==c[1].value&&y(i,c[1].value),r&4&&(U.disabled=c[2])},i:Y,o:Y,d(c){c&&I(t),oe(k,c),j=!1,J(P)}}}function ve(e,t,n){let a,{container:l}=t,f={};function o(){if(a)return;const p=G.nextId(l);n(0,l[p]={id:p,...f},l),n(1,f={})}function _(p,O){p[O].name=this.value,n(0,l)}function A(p,O){p[O].value=this.value,n(0,l)}function d(){f.name=this.value,n(1,f)}function m(){f.value=this.value,n(1,f)}return e.$$set=p=>{"container"in p&&n(0,l=p.container)},e.$$.update=()=>{e.$$.dirty&2&&n(2,a=!f.name)},[l,f,a,o,_,A,d,m]}class Ae extends ne{constructor(t){super(),le(this,t,ve,me,ae,{container:0})}}function ee(e,t,n){const a=e.slice();return a[10]=t[n],a[11]=t,a[12]=n,a}function te(e){let t,n,a,l,f,o,_,A,d,m,p;function O(){e[5].call(n,e[11],e[12])}function i(b){e[6](b,e[10])}let L={container:e[3].notes,optValue:"id",optDisplay:"name"};e[10].refId!==void 0&&(L.bindTo=e[10].refId),l=new pe({props:L}),ie.push(()=>re(l,"bindTo",i,e[10].refId));function U(){return e[7](e[10])}return{c(){t=g("p"),n=g("input"),a=B(`:
			`),se(l.$$.fragment),o=D(),_=g("button"),A=B("Remove"),this.h()},l(b){t=E(b,"P",{});var j=N(t);n=E(j,"INPUT",{type:!0}),a=S(j,`:
			`),ue(l.$$.fragment,j),o=q(j),_=E(j,"BUTTON",{});var P=N(_);A=S(P,"Remove"),P.forEach(I),j.forEach(I),this.h()},h(){V(n,"type","text")},m(b,j){M(b,t,j),s(t,n),y(n,e[10].name),s(t,a),fe(l,t,null),s(t,o),s(t,_),s(_,A),d=!0,m||(p=[C(n,"input",O),C(_,"click",U)],m=!0)},p(b,j){e=b,j&1&&n.value!==e[10].name&&y(n,e[10].name);const P={};j&8&&(P.container=e[3].notes),!f&&j&1&&(f=!0,P.bindTo=e[10].refId,de(()=>f=!1)),l.$set(P)},i(b){d||(K(l.$$.fragment,b),d=!0)},o(b){Q(l.$$.fragment,b),d=!1},d(b){b&&I(t),ce(l),m=!1,J(p)}}}function ge(e){let t,n;return{c(){t=g("option"),n=B("Select a note to reference"),this.h()},l(a){t=E(a,"OPTION",{});var l=N(t);n=S(l,"Select a note to reference"),l.forEach(I),this.h()},h(){t.__value="",t.value=t.__value},m(a,l){M(a,t,l),s(t,n)},p:Y,d(a){a&&I(t)}}}function Ee(e){let t,n,a,l,f,o,_,A,d,m,p,O,i,L,U,b,j,P,w,k,c=Object.values(e[0]),r=[];for(let u=0;u<c.length;u+=1)r[u]=te(ee(e,c,u));const T=u=>Q(r[u],1,1,()=>{r[u]=null});function F(u){e[9](u)}let H={container:e[3].notes,optValue:"id",optDisplay:"name",id:"ref-add-select",$$slots:{default:[ge]},$$scope:{ctx:e}};return e[1].refId!==void 0&&(H.bindTo=e[1].refId),i=new pe({props:H}),ie.push(()=>re(i,"bindTo",F,e[1].refId)),{c(){t=g("section"),n=g("header"),a=B("References:"),l=D();for(let u=0;u<r.length;u+=1)r[u].c();f=D(),o=g("p"),_=g("label"),A=B(`reference name:
			`),d=g("input"),m=D(),p=g("label"),O=B(`reference value:
			`),se(i.$$.fragment),U=D(),b=g("button"),j=B("Add"),this.h()},l(u){t=E(u,"SECTION",{});var h=N(t);n=E(h,"HEADER",{});var R=N(n);a=S(R,"References:"),R.forEach(I),l=q(h);for(let X=0;X<r.length;X+=1)r[X].l(h);f=q(h),o=E(h,"P",{});var v=N(o);_=E(v,"LABEL",{});var z=N(_);A=S(z,`reference name:
			`),d=E(z,"INPUT",{type:!0}),z.forEach(I),m=q(v),p=E(v,"LABEL",{for:!0});var W=N(p);O=S(W,`reference value:
			`),ue(i.$$.fragment,W),W.forEach(I),U=q(v),b=E(v,"BUTTON",{});var Z=N(b);j=S(Z,"Add"),Z.forEach(I),v.forEach(I),h.forEach(I),this.h()},h(){V(d,"type","text"),V(p,"for","ref-add-select"),b.disabled=e[2]},m(u,h){M(u,t,h),s(t,n),s(n,a),s(t,l);for(let R=0;R<r.length;R+=1)r[R].m(t,null);s(t,f),s(t,o),s(o,_),s(_,A),s(_,d),y(d,e[1].name),s(o,m),s(o,p),s(p,O),fe(i,p,null),s(o,U),s(o,b),s(b,j),P=!0,w||(k=[C(d,"input",e[8]),C(b,"click",e[4])],w=!0)},p(u,[h]){if(h&9){c=Object.values(u[0]);let v;for(v=0;v<c.length;v+=1){const z=ee(u,c,v);r[v]?(r[v].p(z,h),K(r[v],1)):(r[v]=te(z),r[v].c(),K(r[v],1),r[v].m(t,f))}for(he(),v=c.length;v<r.length;v+=1)T(v);_e()}h&2&&d.value!==u[1].name&&y(d,u[1].name);const R={};h&8&&(R.container=u[3].notes),h&8192&&(R.$$scope={dirty:h,ctx:u}),!L&&h&2&&(L=!0,R.bindTo=u[1].refId,de(()=>L=!1)),i.$set(R),(!P||h&4)&&(b.disabled=u[2])},i(u){if(!P){for(let h=0;h<c.length;h+=1)K(r[h]);K(i.$$.fragment,u),P=!0}},o(u){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)Q(r[h]);Q(i.$$.fragment,u),P=!1},d(u){u&&I(t),oe(r,u),ce(i),w=!1,J(k)}}}function Te(e,t,n){let a,l;be(e,G,i=>n(3,l=i));let{container:f}=t,o={};function _(){if(a)return;const i=G.nextId(f);n(0,f[i]={id:i,...o},f),n(1,o={})}function A(i,L){i[L].name=this.value,n(0,f)}function d(i,L){e.$$.not_equal(L.refId,i)&&(L.refId=i)}const m=i=>G.deleteRef(f,i.id);function p(){o.name=this.value,n(1,o)}function O(i){e.$$.not_equal(o.refId,i)&&(o.refId=i,n(1,o))}return e.$$set=i=>{"container"in i&&n(0,f=i.container)},e.$$.update=()=>{e.$$.dirty&2&&n(2,a=!o.name||!o.refId)},[f,o,a,l,_,A,d,m,p,O]}class Ne extends ne{constructor(t){super(),le(this,t,Te,Ee,ae,{container:0})}}export{Ae as F,Ne as R};
