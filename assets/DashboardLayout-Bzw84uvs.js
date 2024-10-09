import{_ as b,x as y,W as f,X as c,$ as t,a0 as r,a1 as l,a9 as _,a3 as n,a6 as u,a2 as d,a4 as h,d as p,a5 as g,F as x,a7 as v,ab as w}from"./index-Js7Ha3yv.js";import{V as k}from"./VMain-DXqxQQoJ.js";import"./ssrBoot-CMHYjFFJ.js";class A extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",A);customElements.define("eox-layout-item",C);const L=["gap"],$={key:0,class:"bg-panel bg-surface",x:"0",y:"0",h:"12",w:"12"},E=["h","w","x","y"],M={__name:"DashboardLayout",setup(i){const a=y(f),[s]=c([a.template?.background]),o=c(a.template?.widgets);return(T,B)=>(t(),r(k,null,{default:l(()=>[_("eox-layout",{gap:n(a).template.gap??2},[n(s).component?(t(),u("eox-layout-item",$,[(t(),r(d,{suspensible:""},{default:l(()=>[(t(),r(h(n(s).component),p({id:"bg-widget"},n(s).props),null,16))]),_:1}))])):g("v-if",!0),(t(!0),u(x,null,v(n(o),(e,m)=>(t(),r(w,{key:m,name:"fade"},{default:l(()=>[e.value.component?(t(),u("eox-layout-item",{key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(t(),r(d,{suspensible:""},{default:l(()=>[(t(),r(h(e.value.component),p({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,E)):g("v-if",!0)]),_:2},1024))),128))],8,L)]),_:1}))}},I=b(M,[["__scopeId","data-v-6b134f31"]]);export{I as default};
