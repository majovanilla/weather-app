!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="http://localhost:8080/",n(n.s=8)}([function(e,t,n){var o=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var p=s(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:l,updater:m(u,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,g=0;function m(e,t){var n,o,i;if(t.singleton){var a=g++;n=h||(h=d(t)),o=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=d(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);r[i].references--}for(var a=c(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}},function(e,t,n){var o=n(3),i=n(4),a=n(5),r=n(6);(t=o(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var s=i(a),c=i(r);t.push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-family:'Poppins', sans-serif;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{background:url("+s+") no-repeat;margin:20% auto 0}.main{width:60%;margin:20% auto;display:flex;position:relative}.main-image{position:absolute;top:0;left:0}.powered-by{position:absolute;top:20px;left:20px;font-size:.5rem}.current{width:70%;border:white solid 1px;display:flex;align-items:flex-end;padding:50px 50px;color:white;position:relative}.current aside{display:flex;align-items:flex-end;width:100%}.degrees{font-size:3rem;padding-right:30px}.data{display:flex;flex-direction:column;padding-right:30px}.date-div{display:flex;justify-content:space-between;font-size:0.8rem}.city{width:100%;margin-bottom:5px;font-size:1.8rem}.description{margin-top:-15px;font-size:0.8rem;width:70%}.icon{width:50%}.more-info{width:30%;border:white solid 1px;display:flex;flex-direction:column}.search{padding-top:20px;position:relative}#search-bar,.recent-search,.forecast{border:none;border-bottom:1px solid rgba(150,147,147,0.3);margin:20px 20px 0;padding-bottom:5px}#search-bar{background:none;width:60%}.search button{position:absolute;right:0;width:20%;height:100%;border:none;background:url("+c+") 0 10px/50% no-repeat;cursor:pointer}.hidden{display:none}.recent-search{height:25%}.forecast{display:flex;padding:20px 25px;margin-top:0}.temp-div{display:flex;justify-content:space-around;align-items:center}.forecast-list{padding:0;display:flex;flex-direction:column;justify-content:space-between;width:100%}.forecast-day{color:white;display:flex;justify-content:space-around;align-items:center}.day-date{width:30%}.day-icon{width:40%}@media screen and (max-width: 768px){.main{flex-direction:column}.current{width:100%;height:70%;padding:40px 40px}.main aside{width:100%;height:100%}.recent-search{display:none}.powered-by{top:10px}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var r,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="img/dark-background.svg"},function(e,t){e.exports="img/search-icon.png"},function(e,t){e.exports="img/default.jpg"},function(e,t,n){"use strict";n.r(t);n(0),n(7);const o={days:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},months:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sept",9:"Oct",10:"Nov",11:"Dec"},weatherPics:{200:{day:{src:"../img/2xx-day.jpg",alt:"Photo by Dan Meyers on Unsplash"},night:{src:"../img/2xx-night.jpg../img/2xx.jpg",alt:"Photo by Brianna Sante}llan on Unsplash"}},300:{day:{src:"../img/3xx-day.jpg",alt:"Photo by Florian Olivo on Unsplash"},night:{src:"../img/3xx-night.jpg",alt:"Photo by Ian Espinosa on Unsplash"}},500:{day:{src:"../img/5xx-day.jpg",alt:"Photo by sanjiv nayak on Unsplash"},night:{src:"../img/5xx-night.jpg",alt:"Photo by Valentin Müller on Unsplash}"}},700:{day:{src:"../img/7xx-day.jpg",alt:"Photo by Ricardo Gomez Angel on Unsplash"},night:{src:"../img/6xx-night.jpg",alt:"Photo by Aditya Vyas on Unsplash"}},800:{day:{src:"{require(../img/800-day.jpg)}",alt:"Photo by Annie Spratt on Unsplash"},night:{src:"../img/800-night.jpg",alt:"Photo by Jake weirick on Unsplash"}},801:{day:{src:"../img/80x-day.jpg",alt:"Photo by Joonas Sild on Unsplash"},night:{src:"../img/80x.jpg",alt:"Photo by Anandu Vinod on Unsplash"}}}},i=e=>{const{currentData:t,forecastData:n}=e,i=document.querySelector(".main-image");(()=>{i.src=(e=>{const t=(new Date).getHours();console.log(typeof t),console.log(typeof e);const n=e.toString();let i,a;switch(console.log(typeof n),t>=6&&t<7?(console.log("day if"),a="day"):t<6&&t>=7&&(console.log("night if"),a="night"),n){case"801":i=o.weatherPics[801][a].src;break;case/2../:i=o.weatherPics[200][a].src;break;case/3../:i=o.weatherPics[300][a].src;break;case/5../:console.log("entering 500 switch"),i=o.weatherPics[500].src;break;case/6../:i=o.weatherPics[600][a].src;break;case/7../:i=o.weatherPics[700][a].src;break;case/8.[^0]/:console.log("entering 800 switch"),i=o.weatherPics[800].day.src;break;default:i="../img/default.jpg"}return console.log("source final return: "+i),i})(t.code).toString();const e=document.querySelector(".degrees"),n=document.querySelector(".description"),a=document.querySelector(".city"),r=document.querySelector(".time"),s=document.querySelector(".date"),c=document.querySelector(".icon");e.textContent=`${t.temperature.toFixed()} ° `,n.textContent=t.description,a.innerHTML=t.city;const d=new Date(`${t.date} UTC`),l=o.days[new Date(`${t.date} UTC`).getDay()],p=o.months[new Date(`${t.date} UTC`).getMonth()],u=new Date(`${t.date} UTC`).getDay(),f=d.getHours(),h=(d.getMinutes()<10?"0":"")+d.getMinutes();r.innerHTML=`${f}: ${h} `,s.innerHTML=`${l}, ${p} ${u} `,c.src=`http://openweathermap.org/img/wn/${t.icon}@2x.png`})(),(()=>{const e=document.querySelector(".forecast-list");Object.keys(n).forEach(t=>{const i=document.createElement("li"),a=document.createElement("div"),r=document.createElement("p"),s=document.createElement("img"),c=o.days[new Date(`${n[t].date} UTC`).getDay()],d=document.createElement("p");r.textContent=n[t].temperature.toFixed()+"°",s.src=`http://openweathermap.org/img/wn/${n[t].icon}@2x.png`,d.textContent=c,i.classList.add("forecast-day"),r.classList.add("day-temp"),s.classList.add("day-icon"),d.classList.add("day-date"),a.classList.add("temp-div"),a.append(s),a.append(r),i.append(d),i.append(a),i.append(a),e.append(i)})})()};(e=>{const{city:t,state:n,unit:o}=e,a="http://api.openweathermap.org/data/2.5/forecast?q=",r="&APPID=092878e572bdc25b4b5bdea6cbd439db",s=fetch(`${a}${t},${n}&units=metric${r}`,{mode:"cors"}),c=fetch(`${a}${t},${n}&units=imperial${r}`,{mode:"cors"}),d=()=>{let e;const n=JSON.parse(localStorage.getItem(`${t}`));return n||(e="farenheit"===o?s:c,e.then(e=>e.json()).then(e=>{"200"===e.cod&&(e=>{localStorage.setItem(`${t}`,JSON.stringify(e))})(e)}).catch(alert("Please search again")))};i((()=>{const e=d();return{currentData:{dt:e.list[0].dt,date:e.list[0].dt_txt,description:e.list[0].weather[0].description,city:e.city.name,country:e.city.country,temperature:e.list[0].main.temp,icon:e.list[0].weather[0].icon,code:e.list[0].weather[0].id},forecastData:{day1:{dt:e.list[8].dt,date:e.list[8].dt_txt,description:e.list[8].weather[0].description,temperature:e.list[8].main.temp,icon:e.list[8].weather[0].icon},day2:{dt:e.list[16].dt,date:e.list[16].dt_txt,description:e.list[16].weather[0].description,temperature:e.list[16].main.temp,icon:e.list[16].weather[0].icon},day3:{dt:e.list[24].dt,date:e.list[24].dt_txt,description:e.list[24].weather[0].description,temperature:e.list[24].main.temp,icon:e.list[24].weather[0].icon},day4:{dt:e.list[32].dt,date:e.list[32].dt_txt,description:e.list[32].weather[0].description,temperature:e.list[32].main.temp,icon:e.list[32].weather[0].icon}}}})())})({city:"xalapa",state:"veracruz",unit:"celcius"})}]);