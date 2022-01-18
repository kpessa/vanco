"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{6393:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(7294);function r(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var a=function(){function e(e){for(var t in e)this[t]=e[t]}var t,n,l;return t=e,(n=[{key:"ke_eqn_suggested",get:function(){return this.bmi?this.bmi>=30?"Crass":"Matzke":""}},{key:"t1_2",get:function(){return this.ke?+(.693/this.ke).toFixed(1):""}},{key:"clvanco",get:function(){if(this.ke_eqn&&this.crcl){if("Matzke"===this.ke_eqn)return+(.06*(.689*this.crcl+3.66)).toFixed(1);if("Crass"===this.ke_eqn)return this.age&&this.scr&&this.genderToChar&&this.tbw?+(9.656-.078*this.age-2.009*this.scr+1.09*this.gender+.04*Math.pow(this.tbw,.75)).toFixed(1):""}return""}},{key:"ke",get:function(){return this.clvanco&&this.vd?+(this.clvanco/this.vd).toFixed(4):""}},{key:"genderToChar",get:function(){return 0===this.gender||1===this.gender?["F","M"][this.gender]:""}},{key:"heightToFeetInches",get:function(){if(this.height){var e=this.height/2.54;return Math.floor(e/12)+"'"+Math.round(e%12)+'"'}return""}},{key:"tbw",get:function(){return this.weight?this.weight:""}},{key:"wtInLbs",get:function(){return this.weight?Math.round(2.2*this.weight):""}},{key:"adjBW",get:function(){return this.tbw&&this.ibw?this.ibw+.4*(this.tbw-this.ibw):""}},{key:"wtUsed",get:function(){return this.tbw&&this.ibw?this.tbw_ibw>=1.2?this.adjBW:this.tbw<this.ibw?this.tbw:this.ibw:""}},{key:"calculated_crcl",get:function(){return this.age&&this.tbw&&this.ibw&&this.scr&&(0===this.gender||1===this.gender)?+((140-this.age)*this.wtUsed/this.scr/72*[.85,1][this.gender]).toFixed(2):""}},{key:"crcl",get:function(){return this.manual_crcl?this.manual_crcl:this.calculated_crcl?this.calculated_crcl:""}},{key:"bmi",get:function(){return this.height&&this.weight?+(this.weight/Math.pow(this.height/100,2)).toFixed(2):""}},{key:"tbw_ibw",get:function(){return this.weight&&this.ibw?+(this.weight/this.ibw).toFixed(2):""}},{key:"vd_kg_suggested",get:function(){return this.weight&&this.height&&this.bmi>=30?.5:.65}},{key:"vd",get:function(){return this.tbw&&this.vd_kg?+(this.tbw*this.vd_kg).toFixed(1):""}}])&&r(t.prototype,n),l&&r(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=function(e){var t=e.pt;return l.createElement("div",{style:{display:"flex",gap:"10px",backgroundColor:"#aaa",width:"100%",fontSize:"10px",padding:"10px"}},l.createElement("div",null,t.age&&l.createElement("p",null,"Age: ",t.age,t.genderToChar&&t.genderToChar),t.height&&l.createElement("p",null,"Ht: ",t.height," cm"),t.height&&l.createElement("p",null,"Ht: ",t.heightToFeetInches," ")),l.createElement("div",null,t.weight&&l.createElement("p",null,"Wt: ",t.wtInLbs," lbs"),t.weight&&l.createElement("p",null,"TBW: ",t.tbw," kg"),t.ibw&&l.createElement("p",null,"IBW: ",t.ibw," kg"),t.adjBW&&l.createElement("p",null,"AdjBW: ",t.adjBW," kg"),t.tbw_ibw&&l.createElement("p",null,"TBW/IBW: ",t.tbw_ibw),t.bmi&&l.createElement("p",null,"BMI: ",t.bmi)),l.createElement("div",null,t.scr&&l.createElement("p",null,"SCr: ",t.scr," mg/dL"),t.crcl&&l.createElement("p",null,"CrCl: ",t.crcl," mL/min"),t.wtUsed&&l.createElement("p",null,"WtUsed: ",t.wtUsed," kg")),l.createElement("div",null,t.ke_eqn&&l.createElement("p",null,"Eqn Used: ",t.ke_eqn),t.vd&&l.createElement("p",null,"Vd: ",t.vd," L"),t.ke&&l.createElement("p",null,"Ke: ",t.ke),t.t1_2&&l.createElement("p",null,"t1/2: ",t.t1_2," hrs"),t.clvanco&&l.createElement("p",null,"CLVanco: ",t.clvanco," L/hr")))},i=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box tbw_ibw"},l.createElement("h1",null,"Weight"),l.createElement("label",{htmlFor:"weight"},"Weight"),l.createElement("input",{id:"weight",onChange:function(e){return n(new a(Object.assign({},t,{weight:+e.target.value})))},type:"number",value:t.weight}),l.createElement("span",null,"kg"),l.createElement("br",null),l.createElement("label",{htmlFor:"ibw"},"IBW"),l.createElement("input",{id:"ibw",onChange:function(e){return n(new a(Object.assign({},t,{ibw:+e.target.value})))},type:"number",value:t.ibw}),l.createElement("span",null,"kg"),l.createElement("br",null),l.createElement("label",{htmlFor:"tbw_ibw"},"TBW/IBW"),l.createElement("input",{type:"text",id:"tbw_ibw",disabled:!0,value:t.tbw_ibw?t.tbw_ibw:""}))},u=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box scr"},l.createElement("h1",null,"SCr"),l.createElement("label",{htmlFor:"scr"},"SCr"),l.createElement("input",{id:"scr",onChange:function(e){return n(new a(Object.assign({},t,{scr:+e.target.value})))},type:"number",step:"0.1",value:t.scr}),l.createElement("span",null,"mg/dL"),t.scr<1&&l.createElement(l.Fragment,null,l.createElement("label",{htmlFor:"scr_bmi"},"BMI"),l.createElement("input",{id:"scr_bmi",disabled:!0,value:t.bmi?t.bmi:"waiting.."}),l.createElement("span",null,"kg/m",l.createElement("sup",null,"2")),t.bmi&&t.bmi<18.5&&l.createElement("pre",null,"underweight"),l.createElement("label",{htmlFor:"scr_age"},"Age"),l.createElement("input",{id:"scr_age",type:"number",disabled:!0,value:t.age}),l.createElement("span",null,"years"),t.age&&t.age>=65&&l.createElement("pre",{id:"age_warning"},"elderly"),l.createElement("label",{htmlFor:"adjusted_scr"},"Adjust SCr?"),l.createElement("input",{id:"adjusted_scr",type:"number",step:"0.1"}),l.createElement("span",null,"mg/dL")))},s=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box crcl"},l.createElement("h1",null,"CrCl"),l.createElement("label",{htmlFor:"crcl"},"CrCl"),l.createElement("input",{id:"crcl",onChange:function(e){return n(new a(Object.assign({},t,{manual_crcl:+e.target.value})))},type:"number",placeholder:"100",value:t.manual_crcl}),l.createElement("span",null,"mL/min"))},m=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box crcl_calculated"},l.createElement("h1",null,"CrCl Calculation"),l.createElement("label",{htmlFor:"age"},"Age"),l.createElement("input",{id:"age",onChange:function(e){return n(new a(Object.assign({},t,{age:+e.target.value})))},type:"number",placeholder:"",value:t.age}),l.createElement("span",null,"years"),l.createElement("br",null),l.createElement("label",{htmlFor:"height"},"Height"),l.createElement("input",{id:"height",onChange:function(e){return n(new a(Object.assign({},t,{height:+e.target.value})))},type:"number",placeholder:"",value:t.height}),l.createElement("span",null,"cm"),l.createElement("br",null),l.createElement("label",{htmlFor:"gender"},"Gender"),l.createElement("select",{id:"gender",onChange:function(e){return n(new a(Object.assign({},t,{gender:+e.target.value})))},value:t.gender},l.createElement("option",{value:"-1"}," "),l.createElement("option",{value:"1"},"Male"),l.createElement("option",{value:"0"},"Female")),l.createElement("br",null),l.createElement("label",{htmlFor:"crcl_calulated"},"CrCl"),l.createElement("input",{id:"crcl_calculated",disabled:!0,value:t.calculated_crcl?t.calculated_crcl:"waiting .."}),l.createElement("span",null,"mL/min"))},h=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box vd"},l.createElement("h1",null,"Vd"),l.createElement("label",{htmlFor:"vd_kg"},"Vd/kg"),l.createElement("input",{id:"vd_kg",onChange:function(e){return n(new a(Object.assign({},t,{vd_kg:+e.target.value})))},type:"number",step:"0.05",placeholder:t.vd_kg_suggested,value:t.vd_kg}),l.createElement("span",null,"L/kg"),l.createElement("label",{htmlFor:"vd"},"V",l.createElement("sub",null,"d")),l.createElement("input",{id:"vd",value:t.vd,type:"number",disabled:!0}),l.createElement("span",null,"L"))},g=function(e){var t=e.pt,n=e.setPt;return l.createElement("div",{className:"box ke"},l.createElement("h1",null,"Ke"),l.createElement("label",{htmlFor:"ke_eqn"},"K",l.createElement("sub",null,"e"),"eqn"),l.createElement("select",{id:"ke_eqn",onChange:function(e){return n(new a(Object.assign({},t,{ke_eqn:e.target.value})))}},l.createElement("option",{value:"",disabled:!0,selected:!0},t.ke_eqn_suggested),l.createElement("option",{value:"Matzke"},"Matzke"),l.createElement("option",{value:"Crass"},"Crass")),l.createElement("label",{htmlFor:"cl_vanco"},"CLVanco"),l.createElement("input",{id:"cl_vanco",type:"number",disabled:!0,value:t.clvanco}),l.createElement("span",null,"L/hr"),l.createElement("label",{htmlFor:"ke"},"K",l.createElement("sub",null,"e")),l.createElement("input",{id:"ke",type:"number",placeholder:"",disabled:!0,value:t.ke}))};function d(){var e,t=(0,l.useState)(new a({})),n=t[0],r=t[1];return(0,l.useEffect)((function(){console.log(n)}),[n]),l.createElement("div",{className:"container"},l.createElement(c,{pt:n}),l.createElement("h1",null,"Vanco AUC Calculator"),l.createElement("div",{style:{display:"flex",gap:"4px"}},l.createElement("div",null,l.createElement(i,{pt:n,setPt:r}),(e=n.ibw_tbw&&n.ibw_tbw>1.2||n.scr&&n.scr<1,n.scr&&n.scr<1?l.createElement(l.Fragment,null,e&&l.createElement(m,{pt:n,setPt:r}),l.createElement(u,{pt:n,setPt:r})):l.createElement(l.Fragment,null,l.createElement(u,{pt:n,setPt:r}),e&&l.createElement(m,{pt:n,setPt:r}))),function(){if(n.scr&&n.scr>=1&&n.tbw_ibw&&n.tbw_ibw<1.2)return l.createElement(s,{pt:n,setPt:r})}()),l.createElement("div",null,n.weight&&n.crcl&&l.createElement(h,{pt:n,setPt:r}),n.crcl&&l.createElement(g,{pt:n,setPt:r}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-604adde62494e338ca69.js.map