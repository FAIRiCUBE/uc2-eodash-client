import{at as Ft}from"./index-Js7Ha3yv.js";var ot={exports:{}};(function(O){(function(){function st(t,n,e){return t.call.apply(t.bind,arguments)}function rt(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,i),t.apply(n,o)}}return function(){return t.apply(n,arguments)}}function v(t,n,e){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st:rt,v.apply(null,arguments)}var x=Date.now||function(){return+new Date};function at(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var ft=!!window.FontFace;function A(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&(o=="style"?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function I(t,n,e){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,r=0;r<i.length;r+=1)if(n[o]===i[r]){s=!0;break}s||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(s=!1,r=0;r<e.length;r+=1)if(i[o]===e[r]){s=!0;break}s||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function P(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function ct(t){return t.o.location.hostname||t.a.location.hostname}function B(t,n,e){function i(){a&&o&&s&&(a(r),a=null)}n=A(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,r=null,a=e||null;ft?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout(function(){o=!0,i()},0),I(t,"head",n)}function b(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var s=A(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(r=!0,e&&e(null),s.onload=s.onreadystatechange=null,s.parentNode.tagName=="HEAD"&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){r||(r=!0,e&&e(Error("Script load timeout")))},i||5e3),s}return null}function k(){this.a=0,this.c=null}function D(t){return t.a++,function(){t.a--,$(t)}}function L(t,n){t.c=n,$(t)}function $(t){t.a==0&&t.c&&(t.c(),t.c=null)}function q(t){this.a=t||"-"}q.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)};function p(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function ht(t){return H(t)+" "+(t.f+"00")+" 300px "+z(t.c)}function z(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");i.indexOf(" ")!=-1||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function l(t){return t.a+t.f}function H(t){var n="normal";return t.a==="o"?n="oblique":t.a==="i"&&(n="italic"),n}function ut(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function lt(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new q("-"),this.j=n.events!==!1,this.g=n.classes!==!1}function pt(t){t.g&&d(t.f,[t.a.c("wf","loading")]),w(t,"loading")}function M(t){if(t.g){var n=P(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),d(t.f,e,i)}w(t,"inactive")}function w(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,l(e)):t.h[n]())}function gt(){this.c={}}function vt(t,n,e){var i=[],o;for(o in n)if(n.hasOwnProperty(o)){var s=t.c[o];s&&i.push(s(n[o],e))}return i}function _(t,n){this.c=t,this.f=n,this.a=A(this.c,"span",{"aria-hidden":"true"},this.f)}function T(t){I(t.c,"body",t.a)}function S(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+z(t.c)+";"+("font-style:"+H(t)+";font-weight:"+(t.f+"00")+";")}function G(t,n,e,i,o,s){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=s||void 0}G.prototype.start=function(){var t=this.c.o.document,n=this,e=x(),i=new Promise(function(r,a){function f(){x()-e>=n.f?a():t.fonts.load(ht(n.a),n.h).then(function(c){1<=c.length?r():setTimeout(f,25)},function(){a()})}f()}),o=null,s=new Promise(function(r,a){o=setTimeout(a,n.f)});Promise.race([s,i]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};function K(t,n,e,i,o,s,r){this.v=t,this.B=n,this.c=e,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new _(this.c,this.s),this.h=new _(this.c,this.s),this.j=new _(this.c,this.s),this.m=new _(this.c,this.s),t=new p(this.a.c+",serif",l(this.a)),t=S(t),this.g.a.style.cssText=t,t=new p(this.a.c+",sans-serif",l(this.a)),t=S(t),this.h.a.style.cssText=t,t=new p("serif",l(this.a)),t=S(t),this.j.a.style.cssText=t,t=new p("sans-serif",l(this.a)),t=S(t),this.m.a.style.cssText=t,T(this.g),T(this.h),T(this.j),T(this.m)}var E={D:"serif",C:"sans-serif"},N=null;function R(){if(N===null){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||parseInt(t[1],10)===536&&11>=parseInt(t[2],10))}return N}K.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=x(),V(this)};function U(t,n,e){for(var i in E)if(E.hasOwnProperty(i)&&n===t.f[E[i]]&&e===t.f[E[i]])return!0;return!1}function V(t){var n=t.g.a.offsetWidth,e=t.h.a.offsetWidth,i;(i=n===t.f.serif&&e===t.f["sans-serif"])||(i=R()&&U(t,n,e)),i?x()-t.A>=t.w?R()&&U(t,n,e)&&(t.u===null||t.u.hasOwnProperty(t.a.c))?F(t,t.v):F(t,t.B):mt(t):F(t,t.v)}function mt(t){setTimeout(v(function(){V(this)},t),50)}function F(t,n){setTimeout(v(function(){j(this.g.a),j(this.h.a),j(this.j.a),j(this.m.a),n(this.a)},t),0)}function W(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}var C=null;W.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,l(t).toString(),"active")],[n.a.c("wf",t.c,l(t).toString(),"loading"),n.a.c("wf",t.c,l(t).toString(),"inactive")]),w(n,"fontactive",t),this.m=!0,X(this)},W.prototype.h=function(t){var n=this.a;if(n.g){var e=P(n.f,n.a.c("wf",t.c,l(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,l(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,l(t).toString(),"inactive")),d(n.f,i,o)}w(n,"fontinactive",t),X(this)};function X(t){--t.f==0&&t.j&&(t.m?(t=t.a,t.g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),w(t,"active")):M(t.a))}function J(t){this.j=t,this.a=new gt,this.h=0,this.f=this.g=!0}J.prototype.load=function(t){this.c=new at(this.j,t.context||this.j),this.g=t.events!==!1,this.f=t.classes!==!1,wt(this,new lt(this.c,t),t)};function dt(t,n,e,i,o){var s=--t.h==0;(t.f||t.g)&&setTimeout(function(){var r=o||null,a=i||null||{};if(e.length===0&&s)M(n.a);else{n.f+=e.length,s&&(n.j=s);var f,c=[];for(f=0;f<e.length;f++){var h=e[f],u=a[h.c],g=n.a,y=h;if(g.g&&d(g.f,[g.a.c("wf",y.c,l(y).toString(),"loading")]),w(g,"fontloading",y),g=null,C===null)if(window.FontFace){var y=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),Nt=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);C=y?42<parseInt(y[1],10):!Nt}else C=!1;C?g=new G(v(n.g,n),v(n.h,n),n.c,h,n.s,u):g=new K(v(n.g,n),v(n.h,n),n.c,h,n.s,r,u),c.push(g)}for(f=0;f<c.length;f++)c[f].start()}},0)}function wt(t,n,e){var o=[],i=e.timeout;pt(n);var o=vt(t.a,e,t.c),s=new W(t.c,n,i);for(t.h=o.length,n=0,e=o.length;n<e;n++)o[n].load(function(r,a,f){dt(t,s,r,a,f)})}function Q(t,n){this.c=t,this.a=n}Q.prototype.load=function(t){function n(){if(s["__mti_fntLst"+i]){var r=s["__mti_fntLst"+i](),a=[],f;if(r)for(var c=0;c<r.length;c++){var h=r[c].fontfamily;r[c].fontStyle!=null&&r[c].fontWeight!=null?(f=r[c].fontStyle+r[c].fontWeight,a.push(new p(h,f))):a.push(new p(h))}t(a)}else setTimeout(function(){n()},50)}var e=this,i=e.a.projectId,o=e.a.version;if(i){var s=e.c.o;b(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(o?"?v="+o:""),function(r){r?t([]):(s["__MonotypeConfiguration__"+i]=function(){return e.a},n())}).id="__MonotypeAPIScript__"+i}else t([])};function Y(t,n){this.c=t,this.a=n}Y.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},r=new k;for(n=0,e=i.length;n<e;n++)B(this.c,i[n],D(r));var a=[];for(n=0,e=o.length;n<e;n++)if(i=o[n].split(":"),i[1])for(var f=i[1].split(","),c=0;c<f.length;c+=1)a.push(new p(i[0],f[c]));else a.push(new p(i[0]));L(r,function(){t(a,s)})};function yt(t,n){t?this.c=t:this.c=xt,this.a=[],this.f=[],this.g=n||""}var xt="https://fonts.googleapis.com/css";function jt(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");o.length==3&&t.f.push(o.pop());var s="";o.length==2&&o[1]!=""&&(s=":"),t.a.push(o.join(s))}}function _t(t){if(t.a.length==0)throw Error("No fonts to load!");if(t.c.indexOf("kit=")!=-1)return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function Tt(t){this.f=t,this.a=[],this.c={}}var Z={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},St={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Et={i:"i",italic:"i",n:"n",normal:"n"},Ct=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function At(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),s=["n4"];if(2<=i.length){var r,a=i[1];if(r=[],a)for(var a=a.split(","),f=a.length,c=0;c<f;c++){var h;if(h=a[c],h.match(/^[\w-]+$/)){var u=Ct.exec(h.toLowerCase());if(u==null)h="";else{if(h=u[2],h=h==null||h==""?"n":Et[h],u=u[1],u==null||u=="")u="4";else var g=St[u],u=g||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}}else h="";h&&r.push(h)}0<r.length&&(s=r),i.length==3&&(i=i[2],r=[],i=i?i.split(","):r,0<i.length&&(i=Z[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Z[o])&&(t.c[o]=i),i=0;i<s.length;i+=1)t.a.push(new p(o,s[i]))}}function tt(t,n){this.c=t,this.a=n}var bt={Arimo:!0,Cousine:!0,Tinos:!0};tt.prototype.load=function(t){var n=new k,e=this.c,i=new yt(this.a.api,this.a.text),o=this.a.families;jt(i,o);var s=new Tt(o);At(s),B(e,_t(i),D(n)),L(n,function(){t(s.a,s.c,bt)})};function nt(t,n){this.c=t,this.a=n}nt.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?b(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(i){if(i)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){i=e.Typekit.config.fn;for(var o=[],s=0;s<i.length;s+=2)for(var r=i[s],a=i[s+1],f=0;f<a.length;f++)o.push(new p(r,a[f]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch{}t(o)}},2e3):t([])};function it(t,n){this.c=t,this.f=n,this.a=[]}it.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(o,s){for(var r=0,a=s.fonts.length;r<a;++r){var f=s.fonts[r];i.a.push(new p(f.name,ut("font-weight:"+f.weight+";font-style:"+f.style)))}t(i.a)},b(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ct(this.c)+"/"+n+".js",function(o){o&&t([])})):t([])};var m=new J(window);m.a.c.custom=function(t,n){return new Y(n,t)},m.a.c.fontdeck=function(t,n){return new it(n,t)},m.a.c.monotype=function(t,n){return new Q(n,t)},m.a.c.typekit=function(t,n){return new nt(n,t)},m.a.c.google=function(t,n){return new tt(n,t)};var et={load:v(m.load,m)};O.exports?O.exports=et:(window.WebFont=et,window.WebFontConfig&&m.load(window.WebFontConfig))})()})(ot);var Wt=ot.exports;const Ot=Ft(Wt),Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));export{Pt as w};
