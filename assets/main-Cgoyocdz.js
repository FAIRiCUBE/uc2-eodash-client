import{as as o}from"./index-Js7Ha3yv.js";const i=window.eodashStore;let e="https://gtif-cerulean.github.io/catalog/cerulean/catalog.json";const a=new URLSearchParams(window.location.search);a.get("catalog")&&(e=e.replace("catalog/",`catalog/pr-preview/${a.get("catalog")}/`));const n={id:"template-id",stacEndpoint:"https://fairicube.github.io/uc2-eodash-catalog/uc2_fairicube_catalog/catalog.json",routes:[],brand:{name:"FAIRiCUBE UC2 Dashboard",font:{family:"Roboto"},logo:"logo_white.png",theme:{colors:{primary:"#0B4E73",secondary:"#0B4E73",background:"#fff",surface:"#fff"}}},template:{gap:6,background:{type:"internal",id:Symbol(),widget:{name:"EodashMap"}},widgets:[{id:Symbol(),type:"internal",title:"itemfilter",layout:{x:0,y:0,w:3,h:12},slidable:!1,widget:{name:"EodashItemFilter"}},{defineWidget:t=>t?{id:"Information",title:"Information",layout:{x:9,y:0,w:3,h:6},type:"web-component",widget:{link:async()=>await o(()=>import("./eox-stacinfo-BQCzsc5r.js"),[]),properties:{for:i.states.currentUrl,allowHtml:"true",styleOverride:`.single-property {columns: 1!important;}
                      h1 {margin:0px!important;font-size:16px!important;}
                      header h1:after {
                        content:' ';
                        display:block;
                        border:1px solid #d0d0d0;
                      }
                      h2 {font-size:15px}
                      h3 {font-size:14px}
                      summary {cursor: pointer;}
                      #properties li > .value { font-weight: normal !important;}
                      main {padding-bottom: 10px;}
                      .footer-container {line-height:1;}
                      .footer-container button {margin-top: -10px;}
                      .footer-container small {font-size:10px;line-height:1;}`,header:'["title"]',tags:'["themes"]',subheader:"[]",properties:'["satellite","sensor","agency","extent"]',featured:'["description","providers","assets","links"]',footer:'["sci:citation"]'},tagName:"eox-stacinfo"}}:null},{defineWidget:t=>t?{id:"Datepicker",type:"internal",layout:{x:5,y:10,w:1,h:1},title:"Datepicker",widget:{name:"EodashDatePicker"}}:null},{id:Symbol(),type:"internal",title:"Layer Control",layout:{x:0,y:6,w:3,h:6},widget:{name:"EodashLayerControl"}}]}};export{n as default};
