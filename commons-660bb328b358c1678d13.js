(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){if(e.constructor!==l.constructor)return!1;var o,c,u,s;if(Array.isArray(e)){if((o=e.length)!=l.length)return!1;for(c=o;0!=c--;)if(!a(e[c],l[c]))return!1;return!0}if(n&&e instanceof Map&&l instanceof Map){if(e.size!==l.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],l.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&l instanceof Set){if(e.size!==l.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(l)){if((o=e.length)!=l.length)return!1;for(c=o;0!=c--;)if(e[c]!==l[c])return!1;return!0}if(e.constructor===RegExp)return e.source===l.source&&e.flags===l.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===l.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===l.toString();if((o=(u=Object.keys(e)).length)!==Object.keys(l).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(l,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],l[u[c]]))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return he}});var r,i,a,l,o=n(5697),c=n.n(o),u=n(4839),s=n.n(u),f=n(2993),d=n.n(f),m=n(7294),p=n(6494),h=n.n(p),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(y).map((function(e){return y[e]})),"charset"),w="cssText",C="href",T="http-equiv",k="innerHTML",_="itemprop",O="name",A="property",S="rel",x="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F="defaultTitle",I="defer",L="encodeSpecialCharacters",M="onChangeClientState",N="titleTemplate",R=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),q=[y.NOSCRIPT,y.SCRIPT,y.STYLE],B="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,y.TITLE),n=Q(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,F);return t||r||void 0},J=function(e){return Q(e,M)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),l=0;l<a.length;l++){var o=a[l],c=o.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(o)||o!==k&&o!==w&&o!==_||(n=o)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),l=0;l<a.length;l++){var o=a[l],c=h()({},r[o],i[o]);r[o]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,l=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(y.BODY,r),ce(y.HTML,i),oe(f,d);var m={baseTag:ue(y.BASE,n),linkTags:ue(y.LINK,a),metaTags:ue(y.META,l),noscriptTags:ue(y.NOSCRIPT,o),scriptTags:ue(y.SCRIPT,u),styleTags:ue(y.STYLE,s)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),c(e,p,h)},le=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ce(y.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],a=[].concat(i),l=Object.keys(t),o=0;o<l.length;o++){var c=l[o],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(B):n.getAttribute(B)!==l.join(",")&&n.setAttribute(B,l.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],l=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(B,"true"),i.some((function(e,t){return l=t,n.isEqualNode(e)}))?i.splice(l,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=fe(n,r),[m.createElement(y.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),a=le(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Y(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===k||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),m.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===k||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",l=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(l?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,l=e.metaTags,o=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(y.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(b,i,r),link:de(y.LINK,a,r),meta:de(y.META,l,r),noscript:de(y.NOSCRIPT,o,r),script:de(y.SCRIPT,c,r),style:de(y.STYLE,u,r),title:de(y.TITLE,{title:f,titleAttributes:d},r)}},pe=s()((function(e){return{baseTag:$([C,P],e),bodyAttributes:Z(g,e),defer:Q(e,I),encode:Q(e,L),htmlAttributes:Z(b,e),linkTags:G(y.LINK,[S,C],e),metaTags:G(y.META,[O,E,T,A,_],e),noscriptTags:G(y.NOSCRIPT,[k],e),onChangeClientState:J(e),scriptTags:G(y.SCRIPT,[x,k],e),styleTags:G(y.STYLE,[w],e),title:V(e),titleAttributes:Z(v,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),he=(i=pe,l=a=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,l=e.nestedChildren;switch(r.type){case y.TITLE:return z({},i,((t={})[r.type]=l,t.titleAttributes=z({},a),t));case y.BODY:return z({},i,{bodyAttributes:z({},a)});case y.HTML:return z({},i,{htmlAttributes:z({},a)})}return z({},i,((n={})[r.type]=z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(K(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(m.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);he.renderStatic=he.rewind},4839:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var l=i.prototype;return l.UNSAFE_componentWillMount=function(){u.push(this),s()},l.componentDidUpdate=function(){s()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},l.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(f,"canUseDOM",o),f}}},6018:function(e,t,n){"use strict";n.d(t,{EK:function(){return w},j_:function(){return p},g2:function(){return h},Im:function(){return f},gX:function(){return c},Ke:function(){return b},q5:function(){return o},nw:function(){return v},P3:function(){return E},TZ:function(){return a},wA:function(){return m},Vd:function(){return g},vS:function(){return d}});var r,i=n(7294),a=function(e){var t,n=e.pt,r=e.setPt;return i.createElement(i.Fragment,null,i.createElement("h1",null,"Vanco AUC Calculator"),i.createElement("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"}},i.createElement("div",null,i.createElement(o,{pt:n,setPt:r}),i.createElement(c,{pt:n,setPt:r}),i.createElement(f,{pt:n,setPt:r})),i.createElement("div",null,i.createElement(d,{pt:n,setPt:r}),(t=n.tbw_ibw&&n.tbw_ibw>1.2||n.scr&&n.scr<1,n.scr&&n.scr<1?i.createElement(i.Fragment,null,t&&i.createElement(h,{pt:n,setPt:r}),i.createElement(m,{pt:n,setPt:r})):i.createElement(i.Fragment,null,i.createElement(m,{pt:n,setPt:r}),t&&i.createElement(h,{pt:n,setPt:r}))),function(){if(n.scr&&n.scr>=1&&n.tbw_ibw&&n.tbw_ibw<1.2)return i.createElement(p,{pt:n,setPt:r})}()),i.createElement("div",null,n.weight&&n.crcl&&i.createElement(g,{pt:n,setPt:r}),n.crcl&&i.createElement(b,{pt:n,setPt:r}))))},l=n(7917),o=function(e){e.pt;var t,n=e.setPt,r=(0,i.useRef)(null),a={width:"100%",textAlign:"left"};return"undefined"!=typeof window&&(t=(t=(t=localStorage.getItem("pts"))?JSON.parse(t):[]).map((function(e){return new l.v(e)}))),i.createElement("div",{className:"box load"},i.createElement("h1",null,"Load"),i.createElement("label",{style:a,htmlFor:"load"},"Load Patient:"),i.createElement("br",null),i.createElement("input",{style:a,id:"load",list:"patients"}),i.createElement("datalist",{id:"patients"},t.map((function(e,t){return i.createElement("option",{key:t,value:e.mrn},e.name)}))),i.createElement("button",{ref:r,style:{width:"100%",textAlign:"center"},onClick:function(e){return r=document.getElementById("load").value,void(-1===(i=t.findIndex((function(e){return String(e.mrn)===r||e.name===r})))?alert("Patient not found."):n(t[i]));var r,i}},"Load"))},c=function(e){var t=e.pt,n=e.setPt,r={width:"100%",textAlign:"left"},a={height:"28px"};return i.createElement("div",{className:"box tbw_ibw"},i.createElement("h1",null,"Identifiers"),i.createElement("div",{style:{display:"flex"}},i.createElement("div",null,i.createElement("label",{style:a,htmlFor:"mrn"},"MRN"),i.createElement("label",{style:a,htmlFor:"last-name"},"Last Name"),i.createElement("label",{style:a,htmlFor:"first-name"},"First Name")),i.createElement("div",null,i.createElement("input",{style:r,id:"mrn",onChange:function(e){return n(new l.v(Object.assign({},t,{mrn:e.target.value})))},value:t.mrn}),i.createElement("input",{style:r,id:"last-name",onChange:function(e){return n(new l.v(Object.assign({},t,{last_name:e.target.value})))},value:t.last_name}),i.createElement("input",{style:r,id:"first-name",onChange:function(e){return n(new l.v(Object.assign({},t,{first_name:e.target.value})))},value:t.first_name}))))},u=n(5785);var s={width:"100%",textAlign:"left"},f=function(e){var t,n,a=e.pt,o=e.setPt,c=[],f="Cellulitis, Skin and Soft Tissue Infection, SSTI, Pneumonia, PNA, Osteomyelitis, Meningitis, Bacteremia, Endocarditis, Sepsis".split(r||(t=[", "],n||(n=t.slice(0)),t.raw=n,r=t));if("undefined"!=typeof window){var d=localStorage.getItem("pts");c=(d=d?JSON.parse(d):[]).map((function(e){return e.provider})).filter((function(e){return""!==e})),f=(0,u.Z)(new Set([].concat((0,u.Z)(f),(0,u.Z)(d.map((function(e){return e.indication})).filter((function(e){return""!==e}))))))}return i.createElement("div",{className:"box diagnosis"},i.createElement("h1",null,"Diagnosis"),i.createElement("label",{style:s,htmlFor:"provider"},"Consulting Provider:"),i.createElement("br",null),i.createElement("input",{style:s,id:"provider",list:"providers-list",onChange:function(e){return o(new l.v(Object.assign({},a,{provider:e.target.value})))},value:a.provider}),i.createElement("datalist",{id:"providers-list"},c.map((function(e,t){return i.createElement("option",{key:t},e)}))),i.createElement("label",{style:s,htmlFor:"indication"},"Suspected Indication:"),i.createElement("br",null),i.createElement("input",{style:s,id:"indication",list:"indications-list",onChange:function(e){return o(new l.v(Object.assign({},a,{indication:e.target.value})))},value:a.indication}),i.createElement("datalist",{id:"indications-list"},f.map((function(e,t){return i.createElement("option",{key:t},e)}))))},d=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box tbw_ibw"},i.createElement("h1",null,"Weight"),i.createElement("label",{htmlFor:"weight"},"Weight"),i.createElement("input",{id:"weight",onChange:function(e){return n(new l.v(Object.assign({},t,{weight:+e.target.value})))},type:"number",value:t.weight}),i.createElement("span",null,"kg"),i.createElement("br",null),i.createElement("label",{htmlFor:"ibw"},"IBW"),i.createElement("input",{id:"ibw",onChange:function(e){return n(new l.v(Object.assign({},t,{ibw:+e.target.value})))},type:"number",value:t.ibw}),i.createElement("span",null,"kg"),i.createElement("br",null),i.createElement("label",{htmlFor:"tbw_ibw"},"TBW/IBW"),i.createElement("input",{type:"text",id:"tbw_ibw",disabled:!0,value:t.tbw_ibw?t.tbw_ibw:""}))},m=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box scr"},i.createElement("h1",null,"SCr"),i.createElement("label",{htmlFor:"scr"},"SCr"),i.createElement("input",{id:"scr",onChange:function(e){return n(new l.v(Object.assign({},t,{scr:+e.target.value})))},type:"number",step:"0.1",value:t.scr}),i.createElement("span",null,"mg/dL"),t.scr&&t.scr<1&&i.createElement(i.Fragment,null,i.createElement("label",{htmlFor:"scr_bmi"},"BMI"),i.createElement("input",{id:"scr_bmi",disabled:!0,value:t.bmi?t.bmi:"waiting.."}),i.createElement("span",null,"kg/m",i.createElement("sup",null,"2")),t.bmi&&t.bmi<18.5&&i.createElement("pre",null,"underweight"),i.createElement("label",{htmlFor:"scr_age"},"Age"),i.createElement("input",{id:"scr_age",type:"number",disabled:!0,value:t.age}),i.createElement("span",null,"years"),t.age&&t.age>=65&&i.createElement("pre",{id:"age_warning"},"elderly"),i.createElement("label",{htmlFor:"adjusted_scr"},"Adjust SCr?"),i.createElement("input",{id:"adjusted_scr",type:"number",step:"0.1"}),i.createElement("span",null,"mg/dL")))},p=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box crcl"},i.createElement("h1",null,"CrCl"),i.createElement("label",{htmlFor:"crcl"},"CrCl"),i.createElement("input",{id:"crcl",onChange:function(e){return n(new l.v(Object.assign({},t,{manual_crcl:+e.target.value})))},type:"number",placeholder:"100",value:t.manual_crcl}),i.createElement("span",null,"mL/min"))},h=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box crcl_calculated"},i.createElement("h1",null,"CrCl Calculation"),i.createElement("label",{htmlFor:"age"},"Age"),i.createElement("input",{id:"age",onChange:function(e){return n(new l.v(Object.assign({},t,{age:+e.target.value})))},type:"number",placeholder:"",value:t.age}),i.createElement("span",null,"years"),i.createElement("br",null),i.createElement("label",{htmlFor:"height"},"Height"),i.createElement("input",{id:"height",onChange:function(e){return n(new l.v(Object.assign({},t,{height:+e.target.value})))},type:"number",placeholder:"",value:t.height}),i.createElement("span",null,"cm"),i.createElement("br",null),i.createElement("label",{htmlFor:"gender"},"Gender"),i.createElement("select",{id:"gender",onChange:function(e){return n(new l.v(Object.assign({},t,{gender:+e.target.value})))},value:t.gender},i.createElement("option",{value:"-1"}," "),i.createElement("option",{value:"1"},"Male"),i.createElement("option",{value:"0"},"Female")),i.createElement("br",null),i.createElement("label",{htmlFor:"crcl_calulated"},"CrCl"),i.createElement("input",{id:"crcl_calculated",disabled:!0,value:t.calculated_crcl?t.calculated_crcl:"waiting .."}),i.createElement("span",null,"mL/min"))},g=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box vd"},i.createElement("h1",null,"Vd"),i.createElement("label",{htmlFor:"vd_kg"},"Vd/kg"),i.createElement("input",{id:"vd_kg",onChange:function(e){return n(new l.v(Object.assign({},t,{vd_kg:+e.target.value})))},type:"number",step:"0.05",placeholder:t.vd_kg_suggested,value:t.vd_kg}),i.createElement("span",null,"L/kg"),i.createElement("label",{htmlFor:"vd"},"V",i.createElement("sub",null,"d")),i.createElement("input",{id:"vd",value:t.vd,type:"number",disabled:!0}),i.createElement("span",null,"L"))},b=function(e){var t=e.pt,n=e.setPt;return i.createElement("div",{className:"box ke"},i.createElement("h1",null,"Ke"),i.createElement("label",{htmlFor:"ke_eqn"},"K",i.createElement("sub",null,"e"),"eqn"),i.createElement("select",{id:"ke_eqn",onChange:function(e){return n(new l.v(Object.assign({},t,{ke_eqn:e.target.value})))}},i.createElement("option",{value:"",disabled:!0}," "),i.createElement("option",{value:"Matzke"},"Matzke"),i.createElement("option",{value:"Crass"},"Crass")),i.createElement("label",{htmlFor:"cl_vanco"},"CLVanco"),i.createElement("input",{id:"cl_vanco",type:"number",disabled:!0,value:t.clvanco}),i.createElement("span",null,"L/hr"),i.createElement("label",{htmlFor:"ke"},"K",i.createElement("sub",null,"e")),i.createElement("input",{id:"ke",type:"number",placeholder:"",disabled:!0,value:t.ke}),i.createElement("label",{htmlFor:"t1_2"},"t",i.createElement("sub",null,"1/2")),i.createElement("input",{id:"t1_2",type:"number",placeholder:"",disabled:!0,value:t.t1_2}),i.createElement("span",null,"hrs"))},v=function(e){var t=e.pt,n=(e.setPt,[500,750,1e3,1250,1500,1750,2e3]);return i.createElement("div",null,i.createElement("h1",{style:{textAlign:"center"}},"Maintenance Dose Table"),i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null," "),n.map((function(e,t){return i.createElement("th",{key:t},e,"mg")})))),i.createElement("tbody",null,[6,8,12,18,24,36,48].map((function(e,r){return i.createElement("tr",{key:r},i.createElement("th",null,"Q",e,"H"),n.map((function(n,r){return i.createElement("td",{key:r,style:{textAlign:"center",backgroundColor:"lightgrey",padding:"3px"}},function(e,n){return t.popAUCRounded(e,n)>=400&&t.popAUCRounded(e,n)<=600?i.createElement(i.Fragment,null,t.ke&&t.vd&&i.createElement("p",null,t.popAUCRounded(e,n)),t.ke&&t.vd&&i.createElement("p",null,t.popTroughRounded(e,n)),i.createElement("p",null,(24*e/n/1e3).toFixed(1)),t.weight&&i.createElement("p",null,(e/t.weight).toFixed(1))):i.createElement(i.Fragment,null)}(n,e))})))})))))},y=n(5444),E=function(e){var t=e.pt,n=e.setPt,r=e.page,a=e.setPage;return i.createElement("div",{style:{marginTop:"1rem",display:"flex",gap:"5px",justifyContent:"center"}},i.createElement("button",Object.assign({onClick:function(){return a(r-1)}},0===r?{disabled:!0}:{}),"<<"," Back"),i.createElement("button",{onClick:function(){return(0,y.c4)("/")}},"Close"),i.createElement("button",{onClick:function(e){if(e.preventDefault(),"undefined"!=typeof window){var n=localStorage.getItem("pts"),r=(n=n?JSON.parse(n):[]).findIndex((function(e){return e.mrn===t.mrn||e.name===t.name}));-1===r?n.push(Object.assign({},t)):n[r]=Object.assign({},t),localStorage.setItem("pts",JSON.stringify(n)),alert((t.mrn?t.mrn+" - ":"")+t.name+" saved.")}else alert("Sorry, something went wrong. 😬")}},"Save"),i.createElement("button",{onClick:function(e){return n(new l.v),void(0,y.c4)("/newconsult/")}},"New"),i.createElement("button",Object.assign({onClick:function(){return a(r+1)}},1===r?{disabled:!0}:{}),"Next ",">>"))},w=function(){return i.createElement("div",{className:"flex-around"},i.createElement("button",{className:"lp-btn",onClick:function(){return(0,y.c4)("/newconsult/")}},"New Consult"),i.createElement("button",{className:"lp-btn"},"Post Levels"),i.createElement("button",{className:"lp-btn"},"Patient View"),i.createElement("button",{className:"lp-btn"},"Patient List"))}},7917:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{v:function(){return i}});var i=function(){function e(e){for(var t in this.popAUCRounded=function(e,t){return this.ke&&this.vd&&e&&t?10*Math.round(this.popAUC(e,t)/10):0},this.popAUC=function(e,t){if(this.ke&&this.vd&&e&&t){var n=this.popCeoi(e,t),r=this.popCmin(e,t);return((n+r)/2*(e/1e3)+(n-r)/this.ke)*(24/t)/1}return 0},this.popCmax=function(e,t){return this.ke&&this.vd&&e&&t?this.popCeoi(e,t)/Math.exp(-this.ke*e/1e3):0},this.popCeoi=function(e,t){return this.ke&&this.vd&&e&&t?e/this.vd/(1-Math.exp(-this.ke*t)):0},this.popTroughRounded=function(e,t){return Math.round(this.popTrough(e,t))},this.popTrough=function(e,t){return this.ke&&this.vd&&e&&t?this.popCmax(e,t)*Math.exp(-this.ke*(t-.5)):0},this.popCmin=function(e,t){return this.ke&&this.vd&&e&&t?this.popCmax(e,t)*Math.exp(-this.ke*t):0},this.mrn="",this.last_name="",this.first_name="",this.provider="",this.indication="",this.weight="",this.ibw="",this.scr="",this.age="",this.height="",this.gender="",this.manual_crcl="",this.vd_kg="",this.ke_eqn="",e)this[t]=e[t]}var t,n,i;return t=e,(n=[{key:"name",get:function(){return this.first_name&&this.last_name?this.last_name+", "+this.first_name:this.last_name?this.last_name:this.first_name?this.first_name:""}},{key:"ke_eqn_suggested",get:function(){return this.bmi?this.bmi>=30?"Crass":"Matzke":""}},{key:"t1_2",get:function(){return this.ke?+(.693/this.ke).toFixed(1):""}},{key:"matske",get:function(){return+(.06*(.689*this.crcl+3.66)).toFixed(1)}},{key:"crass",get:function(){return this.age&&this.scr&&this.genderToChar&&this.tbw?+(9.656-.078*this.age-2.009*this.scr+1.09*this.gender+.04*Math.pow(this.tbw,.75)).toFixed(1):0}},{key:"clvanco",get:function(){if((this.ke_eqn||this.ke_eqn_suggested)&&this.crcl){if("Matzke"===this.ke_eqn)return this.matske;if("Crass"===this.ke_eqn)return this.crass;if("Matzke"===this.ke_eqn_suggested)return this.matske;if("Crass"===this.ke_eqn_suggested)return this.crass}return""}},{key:"ke",get:function(){return this.clvanco&&this.vd?+(this.clvanco/this.vd).toFixed(4):""}},{key:"genderToChar",get:function(){return 0===this.gender||1===this.gender?["F","M"][this.gender]:""}},{key:"heightToFeetInches",get:function(){if(this.height){var e=this.height/2.54;return Math.floor(e/12)+"'"+Math.round(e%12)+'"'}return""}},{key:"tbw",get:function(){return this.weight?this.weight:""}},{key:"wtInLbs",get:function(){return this.weight?Math.round(2.2*this.weight):""}},{key:"adjBW",get:function(){return this.tbw&&this.ibw?this.ibw+.4*(this.tbw-this.ibw):""}},{key:"wtUsed",get:function(){return this.tbw&&this.ibw?this.tbw_ibw>=1.2?this.adjBW:this.tbw<this.ibw?this.tbw:this.ibw:""}},{key:"calculated_crcl",get:function(){return this.age&&this.tbw&&this.ibw&&this.scr&&(0===this.gender||1===this.gender)?+((140-this.age)*this.wtUsed/this.scr/72*[.85,1][this.gender]).toFixed(2):""}},{key:"crcl",get:function(){return this.manual_crcl?this.manual_crcl:this.calculated_crcl?this.calculated_crcl:""}},{key:"bmi",get:function(){return this.height&&this.weight?+(this.weight/Math.pow(this.height/100,2)).toFixed(2):""}},{key:"tbw_ibw",get:function(){return this.weight&&this.ibw?+(this.weight/this.ibw).toFixed(2):""}},{key:"vd_kg_suggested",get:function(){return this.weight&&this.height&&this.bmi>=30?.5:.65}},{key:"vd",get:function(){return this.tbw&&this.vd_kg?+(this.tbw*this.vd_kg).toFixed(1):""}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);
//# sourceMappingURL=commons-660bb328b358c1678d13.js.map