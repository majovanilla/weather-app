!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var o=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function c(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var p=c(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:l,updater:g(u,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(e,t){var n,o,i;if(t.singleton){var a=m++;n=h||(h=d(t)),o=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=d(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);r[i].references--}for(var a=s(e,t),d=0;d<n.length;d++){var l=c(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}},function(e,t,n){var o=n(3),i=n(4),a=n(5);(t=o(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var r=i(a);t.push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-family:'Poppins', sans-serif;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{background:url("+r+") 0/100% 150% no-repeat;margin:auto}.main{width:80%;height:600px;margin:20% auto;display:flex;position:relative}.main-image{width:100%;min-height:100%;position:absolute;z-index:-1;top:0;left:0}.side-image{width:100%;min-height:100%;position:absolute;z-index:-1;top:0;left:0;filter:blur(3px)}.powered-by{position:absolute;top:35px;left:30px;font-size:.5rem}.current{width:70%;box-shadow:inset 5px -5px 15px rgba(0,0,0,0.5);display:flex;align-items:flex-end;padding:50px 50px;color:white;position:relative;overflow:hidden}.current aside{display:flex;align-items:flex-end;width:100%}.degrees{font-size:3rem;margin-right:30px}.data{flex-direction:column;margin-right:10px}.date-div{display:flex;justify-content:flex-start;font-size:0.8rem}.date{margin-left:10px}.city{width:100%;margin-bottom:5px;font-size:1.8rem}.icons{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.description{font-size:0.8rem}.icon{width:50%}.more-info{background:rgba(0,0,0,0.2);width:30%;box-shadow:inset 5px -5px 15px rgba(0,0,0,0.5);display:flex;flex-direction:column;position:relative;overflow:hidden;justify-content:space-around}.search{padding:20px 0;position:relative;display:flex;align-items:baseline}#search-bar,.forecast{border:none;border-bottom:1px solid rgba(221,220,220,0.8);margin:20px 20px 0;padding-bottom:5px}#search-bar{background:none;width:80%;color:rgba(221,220,220,0.8);font-size:1.3rem}#search-bar:focus{outline:none}.hidden{display:none !important}.error{border:red !important}.forecast{height:50%;display:flex;padding:20px 25px;margin-top:0;justify-content:space-around;flex-direction:column}.temp-div{display:flex;flex-direction:column;justify-content:space-around;align-items:center}.forecast-list{padding:0;display:flex;justify-content:space-between;flex-direction:column;width:100%;height:90%}.forecast-day{color:white;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:30px;align-items:center;justify-items:end}.day-date{align-self:center;justify-self:self-start}.day-icon{width:60%;align-self:center}.switch-temp{display:flex;margin-left:-85px}.switch{background:none;border:none;color:rgba(221,220,220,0.8);font-weight:bold}@media screen and (min-width: 1400px){.current{padding:50px 30px}}@media screen and (max-width: 960px){.current{padding:50px 35px}.degrees{margin-right:20px}.forecast{padding:20px 15px}}@media screen and (max-width: 920px){.current{padding:50px 15px}}@media screen and (max-width: 768px){.main{flex-direction:column;height:900px}.current{width:100%;height:30%;padding:40px 40px}.current aside{justify-content:space-around}.more-info{justify-content:space-around;padding:20px 40px;width:100%;height:60%}.powered-by{top:10px}.day-icon{width:30%}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var r,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"f4ea802cdd146da36007ab433ee0c2ce.svg"},function(e,t,n){"use strict";n.r(t);n(0);var o=n.p+"1e0a36395f4cd25a184dcc07214c19b9.jpg",i=n.p+"d7d2afc535f59630c34ff32c7d192596.jpg",a=n.p+"d81896897e7086d7b0b4a6ca363c1a58.jpg",r=n.p+"1582a227288d7dc99b2ed95182a9d3b2.jpg",c=n.p+"849cbd4d478faab465556539f22b0805.jpg",s=n.p+"8e299f99d9eb1a4e011afe3713c03ac5.jpg",d=n.p+"a452f2d524ae3202a9edf347f0571a14.jpg",l=n.p+"977afb93722aa0156cf35fc5736a0e91.jpg";const p={days:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},months:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sept",9:"Oct",10:"Nov",11:"Dec"},weatherPics:{200:{day:{src:i,alt:"Photo by Dan Meyers on Unsplash"},night:{src:n.p+"df9962b0771e9f200ad73b7ddd83d768.jpg",alt:"Photo by Florian Olivo on Unsplash"}},300:{day:{src:a,alt:"Photo by Brianna Santellan on Unsplash"},night:{src:n.p+"596b027fcb13e3a33db7587c0c153820.jpg",alt:"Photo by Ian Espinosa on Unsplash"}},500:{day:{src:r,alt:"Photo by Chandler Cruttenden on Unsplash"},night:{src:n.p+"5603a4a60ebc739c0c9f451bd564622a.jpg",alt:"Photo by Valentin Müller on Unsplash}"}},600:{day:{src:c,alt:"Photo by Chandler Cruttenden on Unsplash"},night:{src:n.p+"f033b7eaf9d047176b5e4578e88f0012.jpg",alt:"Photo by Aditya Vyas on Unsplash"}},700:{day:{src:s,alt:"Photo by Ricardo Gomez Angel on Unsplash"},night:{src:n.p+"c89598e469c7e6029de587120320abdc.jpg",alt:"Photo by Shapelined on Unsplash"}},800:{day:{src:d,alt:"Photo by Annie Spratt on Unsplash"},night:{src:n.p+"368d92745ef54d7cd8b656229eab7b5a.jpg",alt:"Photo by Jake weirick on Unsplash"}},801:{day:{src:l,alt:"Photo by Joonas Sild on Unsplash"},night:{src:n.p+"a2ef72c9ad0054bcf6df1c94f07d5f17.jpg",alt:"Photo by Anandu Vinod on Unsplash"}}}},u=(e,t="d")=>{const n=t.includes("d")?"day":"night";return"default"===e?o:800===e?p.weatherPics[800][n].src:e.toString().match(/8.[^0]/)?p.weatherPics[801][n].src:p.weatherPics[100*Math.floor(e/100)][n].src},f={mainBackground:document.querySelector(".main-image"),sideBackground:document.querySelector(".side-image"),forecast:document.querySelector(".forecast"),searchBar:document.getElementById("search-bar")},h=(e,t)=>{const n=document.querySelector(".description"),o=document.querySelector(".city"),i=document.querySelector(".time"),a=document.querySelector(".date"),r=document.querySelector(".icon"),c=document.querySelector(".degrees");f.mainBackground.src=u(e.code,e.icon).toString(),f.sideBackground.src=u(e.code,e.icon).toString();(()=>{c.textContent=`${e.temp.toFixed()}° `,n.textContent=e.description,o.textContent=`${e.city}, ${e.country}`;const t=(()=>{const t=new Date,n=t.getTime()+60*t.getTimezoneOffset()*1e3,o=1e3*e.timeOffset;return new Date(n+o)})(),s=p.days[t.getDay()],d=p.months[t.getMonth()],l=t.getDate(),u=t.getHours(),f=(t.getMinutes()<10?"0":"")+t.getMinutes();i.textContent=`${u}: ${f} `,a.textContent=`${s}, ${d} ${l} `,r.src=`http://openweathermap.org/img/wn/${e.icon}@2x.png`})(),(()=>{f.forecast.classList.remove("hidden");const e=document.querySelector(".forecast-list");e.innerHTML="",Object.keys(t).forEach(n=>{const o=document.createElement("li"),i=document.createElement("p"),a=document.createElement("img"),r=p.days[new Date(`${t[n].date} UTC`).getDay()],c=document.createElement("p");c.textContent=r,i.textContent=t[n].temp.toFixed()+"°",a.src=`http://openweathermap.org/img/wn/${t[n].icon}@2x.png`,o.classList.add("forecast-day"),i.classList.add("day-temp"),a.classList.add("day-icon"),c.classList.add("day-date"),o.append(c,i,a),e.append(o)})})()},m=e=>{const{city:t,country:n,units:o}=e,i=fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${t},${n}${"farenheit"===o?"&units=imperial":"&units=metric"}&APPID=092878e572bdc25b4b5bdea6cbd439db`,{mode:"cors"}),a=e=>{const t={dt:e.list[0].dt,date:e.list[0].dt_txt,timeOffset:e.city.timezone,description:e.list[0].weather[0].description,city:e.city.name,country:e.city.country,temp:e.list[0].main.temp,icon:e.list[0].weather[0].icon,code:e.list[0].weather[0].id},n={day1:{dt:e.list[8].dt,date:e.list[8].dt_txt,description:e.list[8].weather[0].description,temp:e.list[0].main.temp,icon:e.list[8].weather[0].icon},day2:{dt:e.list[16].dt,date:e.list[16].dt_txt,description:e.list[16].weather[0].description,temp:e.list[16].main.temp,icon:e.list[16].weather[0].icon},day3:{dt:e.list[24].dt,date:e.list[24].dt_txt,description:e.list[24].weather[0].description,temp:e.list[24].main.temp,icon:e.list[24].weather[0].icon},day4:{dt:e.list[32].dt,date:e.list[32].dt_txt,description:e.list[32].weather[0].description,temp:e.list[32].main.temp,icon:e.list[32].weather[0].icon}};h(t,n)};(()=>{const e=(()=>{const e=JSON.parse(localStorage.getItem(`${t}-${o}`));return e&&Date.now()-1e3*e.list[0].dt<18e5?e:(localStorage.removeItem(JSON.stringify(`${t}-${o}`)),!1)})(),n=i;e?a(e):n.then(e=>e.json()).then(e=>{"200"===e.cod?((e=>{localStorage.setItem(`${t}-${o}`,JSON.stringify(e))})(e),a(e)):alert("Location not found. Please search again")})})()};(()=>{const e=document.getElementById("search-bar"),t=document.querySelector(".switch-temp");f.forecast.classList.add("hidden"),f.mainBackground.src=u("default"),f.sideBackground.src=u("default");t.addEventListener("click",t=>{const n=t.target.id,o={city:e.value.match(/^(\w+ ?\w+[^,])/gi)[0].toLowerCase(),country:e.value.match(/\w+[^, ]$/gi)[0].toLowerCase(),units:n};m(o)})})()}]);