function w(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function B(){return Object.create(null)}function y(t){t.forEach(T)}function D(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null){for(const i of e)i(void 0);return w}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function pt(t,e,n,i){if(t){const s=H(t,e,n,i);return t[0](s)}}function H(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)u[c]=e.dirty[c]|s[c];return u}return e.dirty|s}return e.dirty}function bt(t,e,n,i,s,u){if(s){const r=H(e,n,i,u);t.p(r,s)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function U(){E=!0}function V(){E=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,a=(s>0&&e[n[s]].claim_order<=l?s+1:W(1,s,b=>e[n[b]].claim_order,l))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,s=Math.max(f,s)}const u=[],r=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);u.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<u.length&&r[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(r[o],a)}}function Y(t,e){t.appendChild(e)}function xt(t,e,n){const i=Z(t);if(!i.getElementById(e)){const s=O("style");s.id=e,s.textContent=n,tt(i,s)}}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function tt(t,e){return Y(t.head||t,e),e.sheet}function et(t,e){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function nt(t,e,n){t.insertBefore(e,n||null)}function wt(t,e,n){E&&!n?et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function Nt(){return C("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const it=["width","height"];function At(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&it.indexOf(i)===-1?t[i]=e[i]:L(t,i,e[i])}function Ot(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:L(t,e,n)}function Ct(t){return t.dataset.svelteH}function st(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,s=!1){rt(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const o=n(c);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const o=n(c);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ct(t,e,n,i){return R(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||u.push(c.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Lt(t,e,n){return ct(t,e,n,O)}function ot(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function St(t){return ot(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,n){t.classList.toggle(e,!!n)}function ut(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function vt(t,e){return new t(e)}let p;function m(t){p=t}function S(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){S().$$.on_mount.push(t)}function Tt(t){S().$$.after_update.push(t)}function Dt(t){S().$$.on_destroy.push(t)}const _=[],v=[];let $=[];const M=[],J=Promise.resolve();let j=!1;function q(){j||(j=!0,J.then(z))}function Ht(){return q(),J}function A(t){$.push(t)}const N=new Set;let h=0;function z(){if(h!==0)return;const t=p;do{try{for(;h<_.length;){const e=_[h];h++,m(e),lt(e.$$)}}catch(e){throw _.length=0,h=0,e}for(m(null),_.length=0,h=0;v.length;)v.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];N.has(n)||(N.add(n),n())}$.length=0}while(_.length);for(;M.length;)M.pop()();j=!1,N.clear(),m(t)}function lt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function ft(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const g=new Set;let d;function It(){d={r:0,c:[],p:d}}function Rt(){d.r||y(d.c),d=d.p}function at(t,e){t&&t.i&&(g.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(g.has(t))return;g.add(t),d.c.push(()=>{g.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function qt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function dt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),A(()=>{const u=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),s.forEach(A)}function ht(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,s,u,r=null,c=[-1]){const o=p;m(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:s,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:B(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,b,...k)=>{const P=k.length?k[0]:b;return l.ctx&&s(l.ctx[f],l.ctx[f]=P)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](P),a&&_t(t,f)),b}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){U();const f=st(e.target);l.fragment&&l.fragment.l(f),f.forEach(I)}else l.fragment&&l.fragment.c();e.intro&&at(t.$$.fragment),dt(t,e.target,e.anchor),V(),z()}m(o)}let F;typeof HTMLElement=="function"&&(F=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const i=this.$$c.$on(t,e);this.$$l_u.set(e,i)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let u;return{c:function(){u=O("slot"),s!=="default"&&L(u,"name",s)},m:function(o,l){nt(o,u,l)},d:function(o){o&&I(u)}}}};if(await Promise.resolve(),!this.$$cn)return;const e={},n=ut(this);for(const s of this.$$s)s in n&&(e[s]=[t(s)]);for(const s of this.attributes){const u=this.$$g_p(s.name);u in this.$$d||(this.$$d[u]=x(u,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const u=x(s,this.$$d[s],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,u)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const s in this.$$l)for(const u of this.$$l[s]){const r=this.$$c.$on(s,u);this.$$l_u.set(u,r)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=x(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function x(t,e,n,i){const s=n[t]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Gt(t,e,n,i,s,u){let r=class extends F{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(c=>(e[c].attribute||c).toLowerCase())}};return Object.keys(e).forEach(c=>{Object.defineProperty(r.prototype,c,{get(){return this.$$c&&c in this.$$c?this.$$c[c]:this.$$d[c]},set(o){o=x(c,o,e),this.$$d[c]=o,this.$$c?.$set({[c]:o})}})}),i.forEach(c=>{Object.defineProperty(r.prototype,c,{get(){return this.$$c?.[c]}})}),u&&(r=u(r)),t.element=r,r}class Kt{$$=void 0;$$set=void 0;$destroy(){ht(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qt as A,zt as B,dt as C,ht as D,pt as E,bt as F,gt as G,yt as H,et as I,w as J,mt as K,xt as L,G as M,Ot as N,At as O,Bt as P,Ct as Q,jt as R,Kt as S,Dt as T,Et as a,St as b,Gt as c,wt as d,Nt as e,z as f,Jt as g,Rt as h,Ft as i,at as j,I as k,Tt as l,O as m,Lt as n,Mt as o,st as p,L as q,Pt as r,$t as s,Ht as t,C as u,ot as v,kt as w,It as x,v as y,vt as z};
