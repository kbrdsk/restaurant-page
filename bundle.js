!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},a=[],o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,e),references:1}),a.push(d)}return a}function l(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function f(t,e,n){var a=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var h=null,v=0;function m(t,e){var n,a,o;if(e.singleton){var r=v++;n=h||(h=l(e)),a=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=l(e),a=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<n.length;a++){var o=c(n[a]);i[o].references--}for(var r=s(t,e),l=0;l<n.length;l++){var d=c(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=r}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=(i=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);a&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){var a=n(0),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);t.exports=o.locals||{}},function(t,e,n){var a=n(1),o=n(4),r=n(5);e=a(!1);var i=o(r);e.push([t.i,'body{\n\tdisplay: flex;\n\t\n\tjustify-content: center;\n\talign-items: center;\n\theight: calc(100vh - 40px);\n\twidth: calc(100vw - 40px);\n\tmin-width: 700px;\n\tmin-height: 700px;\n\tbackground-color: #fff;\n\tpadding: 20px;\n\tfont-family: Helvetica;\n}\n\nbody::after{\n\tcontent: "";\n\tbackground: url('+i+");\n\topacity: 0.15;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tz-index: -1;\n}\n\n/*header{\n\twidth: 100%;\n\theight: 100px;\n\tbackground-color: #31465a;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-image: url('../images/banner.jpg');\n}*/\n\n.page-title{\n\tfont-size: 65px;\n\tfont-weight: bold;\n\tcolor: #2d180f;\n\t/*-webkit-text-stroke: 1.5px #f5ebe5;*/\n\ttext-decoration: underline;\n}\n\nmain{\n\tdisplay: grid;\n\theight: 700px;\n\tgrid-template-columns: 110px 700px;\n\tgrid-gap: 20px;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";n.r(e),e.default=n.p+"ee501251a67b17f1526e21205c726e84.jpg"},function(t,e,n){var a=n(0),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);t.exports=o.locals||{}},function(t,e,n){(e=n(1)(!1)).push([t.i,".nav-container{\n\t/*background-color: #31465a;*/\n}\n\n.tab-nav{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder: 5px solid;\n\tborder-radius: 20px;\n\tborder-color: #b10207;\n\tbackground-color: #f5ebe5;\n\tcursor: pointer;\n\tmargin: 10px 0px;\n\topacity: 0.8;\n}\n\n/*.tab-nav:first-child{\n\tpadding-top: 5px;\n}\n\n.tab-nav:last-child{\n\tpadding-bottom: 5px;\n}*/\n\n.tab-nav[active=false]:hover{\n\tbackground-color: #f5ebe544;\n}\n\n.nav-icon{\n\theight: 45px;\n\twidth: 45px;\n\tmargin-top: 15px;\n\tfilter: invert(8%) sepia(9%) saturate(4612%) \n\thue-rotate(337deg) brightness(92%) contrast(93%);\n}\n\n.nav-title{\n\tmargin: 5px 0px 10px 0px;\n\tcolor: #2d180f;\n\tfont-weight: bold;\n}\n\n.tab-nav[active=true]{\n\tbackground-color: #2d180f;\n\topacity: 1;\n}\n\n.tab-nav[active=true]>.nav-title{\n\tcolor: #debdab;\n}\n\n.tab-nav[active=true]>.nav-icon{\n\tfilter: invert(90%) sepia(2%) saturate(4241%) \n\thue-rotate(318deg) brightness(88%) contrast(98%);\n}",""]),t.exports=e},function(t,e,n){var a=n(0),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);t.exports=o.locals||{}},function(t,e,n){(e=n(1)(!1)).push([t.i,".content-container{\n\tbackground-color: #b10207;\n\tborder-radius: 50px;\n\tpadding: 20px;\n\theight: calc(100% - 40px);\n\twidth: calc(100% - 40px);\n\tdisplay: flex;\n\tjustify-content: stretch;\n\topacity: 0.8;\n}\n\n.tab-content{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tpadding: 50px;\n\tborder-radius: 40px;\n\tbackground-color: #f5ebe5;\n\twidth: 100%;\n\tcolor: #2d180f;\n}\n\n.tab-content[active=false]{\n\tdisplay: none;\n}\n\n.tab-content > *{\n\tmargin: 15px;\n}\n\nh2 {\n\tfont-size: 50px;\n}\n\n.tab-content > p{\n\tfont-size: 20px;\n}\n\n.restaurant-name, h3{\n\tfont-size: 23px;\n\tfont-weight: bold;\n}\n\n.restaurant-url{\n\tfont-size: 15px;\n\tmargin: 7px 0px;\n}\n\n.takeout{\n\talign-items: flex-start;\n}\n\nli{\n\tmargin: 7px 0px;\n}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);n(2),n(6),n(8);var a=n.p+"78c6e0130d97818e36a1250201d74f20.svg",o=n.p+"2d048f16d228dc69d1942b64e31baa2f.svg",r=n.p+"776dfe92d3f7dbaaf0c8d2352aab869c.svg";let i=document.createElement("div");i.classList.add("home-content");let c=document.createElement("h2");c.textContent="Stay-Home Restaurant";let s=document.createElement("p");s.textContent="Seeing as we're home for the next little while, let's collect some of the best places to order delivery from as well as some of our favorite home recipes!",i.appendChild(c),i.appendChild(s);var l=i;let d=document.createElement("div");d.classList.add("takeout");var u=d;let p=[v("El Trompudo",h(3850,"San Pablo Dam Road","","El Sobrante","CA",94803),"https://www.allmenus.com/ca/el-sobrante/711514-el-trompudo/menu/","(877) 585-1085"),v("Pho Saigon Noodle & Grill",h(5047,"Appian Way","","El Sobrante","CA",94803),"https://www.doordash.com/store/pho-saigon-noodle-grill-el-sobrante-90193/en-US/?utm_campaign=gpa","(510) 222-2888")],f=t=>({displayName:x(t.name),displayAddress:y(t.address),displayPhone:w(t.phone),displayWebsiteURL:_(t.websiteURL)});for(let t of p)g(t,m(Object.keys(f(t))),f(t)),d.appendChild(t.display);function h(t="",e="",n="",a="",o="",r=""){return{street:e,number:t,suite:n,city:a,state:o,zip:r}}function v(t="",e="",n="",a=""){return{name:t,address:e,websiteURL:n,phone:a}}function m(t=["name","address","websiteURL"]){return{fields:t,createDisplay:function(e){if("displayableRestaurant"!==e.type)throw"Input must be of type displayableRestaurant";let n=document.createElement("div");n.classList.add("restaurant-listing");for(let a of t)e[a]&&n.appendChild(e[a]);return n}}}function b(t,e,n){let a=Object.create(Object.getPrototypeOf(t));Object.setPrototypeOf(t,Object.assign(a,{[e]:n}))}function g(t,e,n){for(let a of e.fields)b(t,a,n[a]);return t.type="displayableRestaurant",t.display=e.createDisplay(t),t}function x(t){let e=document.createElement("p");return e.textContent=t,e.classList.add("restaurant-name"),e}function y(t){let e=document.createElement("p"),n=C(" ",t.number,t.street),a=t.suite,o=C(" ",C(", ",t.city,t.state),t.zip);return e.textContent=C("\n",n,a,o),e.classList.add("restaurant-address"),e}function _(t){let e=document.createElement("a");return e.setAttribute("href",t),e.setAttribute("target","_blank"),e.textContent="Website",e.classList.add("restaurant-url"),e}function w(t){let e=document.createElement("p");return e.textContent=t,e.classList.add("restaurant-phone"),e}function C(t,...e){return e.filter(t=>t).join(t)}let j=document.createElement("div");var E=j;let L=document.createElement("h3");L.textContent="Some of our favorite recipes!";let S=document.createElement("ul"),k=[];for(let t=0;t<4;t++){let t=document.createElement("li");t.textContent="Some amazing recipe",k.push(t),S.appendChild(t)}j.appendChild(L),j.appendChild(S);class O{constructor(t="New Tab"){this._active=!1,this._navIcon=new Image,this._navIcon.classList.add("nav-icon"),this._navTitle=document.createElement("p"),this._navTitle.classList.add("nav-title"),this.title=t,this._nav=document.createElement("div"),this._nav.classList.add("tab-nav"),this._nav.appendChild(this._navIcon),this._nav.appendChild(this._navTitle),this._content=document.createElement("div"),this._content.classList.add("tab-content"),this.active=!1}set navIcon(t){this._navIcon.src=t}set active(t){this._nav.setAttribute("active",t),this._content.setAttribute("active",t),this._active=t}get navIcon(){return this._navIcon}set title(t){this._title=t,this._navTitle.textContent=t}get title(){return this._title}get content(){return this._content}set content(t){this._content=t,this._content.classList.add("tab-content"),this.active=!1}get nav(){return this._nav}}let M=document.querySelector("main"),T=document.querySelector("header"),R=document.createElement("p");R.classList.add("page-title"),R.textContent="",T.appendChild(R);let I=document.createElement("div");I.classList.add("nav-container");let A,z=document.createElement("div");z.classList.add("content-container");let N=[],P=[{icon:a,title:"Home",content:l},{icon:o,title:"Takeout",content:u},{icon:r,title:"Cooking",content:E}];for(let t=0;t<3;t++){let e=new O;N.push(e),e.navIcon=P[t].icon,e.title=P[t].title,e.content=P[t].content,e.nav.addEventListener("click",()=>U(e)),I.appendChild(e.nav),z.appendChild(e.content),0===t&&U(e)}function U(t){A&&(A.active=!1),t.active=!0,A=t}M.appendChild(I),M.appendChild(z)}]);