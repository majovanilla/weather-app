!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var n=a.p+"1e0a36395f4cd25a184dcc07214c19b9.jpg",r=a.p+"d7d2afc535f59630c34ff32c7d192596.jpg",c=a.p+"d81896897e7086d7b0b4a6ca363c1a58.jpg",o=a.p+"1582a227288d7dc99b2ed95182a9d3b2.jpg",s=a.p+"849cbd4d478faab465556539f22b0805.jpg",d=a.p+"8e299f99d9eb1a4e011afe3713c03ac5.jpg",i=a.p+"a452f2d524ae3202a9edf347f0571a14.jpg",l=a.p+"977afb93722aa0156cf35fc5736a0e91.jpg";const u={days:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},months:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sept",9:"Oct",10:"Nov",11:"Dec"},weatherPics:{200:{day:{src:r,alt:"Photo by Dan Meyers on Unsplash"},night:{src:a.p+"df9962b0771e9f200ad73b7ddd83d768.jpg",alt:"Photo by Florian Olivo on Unsplash"}},300:{day:{src:c,alt:"Photo by Brianna Santellan on Unsplash"},night:{src:a.p+"596b027fcb13e3a33db7587c0c153820.jpg",alt:"Photo by Ian Espinosa on Unsplash"}},500:{day:{src:o,alt:"Photo by Chandler Cruttenden on Unsplash"},night:{src:a.p+"5603a4a60ebc739c0c9f451bd564622a.jpg",alt:"Photo by Valentin Müller on Unsplash}"}},600:{day:{src:s,alt:"Photo by Chandler Cruttenden on Unsplash"},night:{src:a.p+"f033b7eaf9d047176b5e4578e88f0012.jpg",alt:"Photo by Aditya Vyas on Unsplash"}},700:{day:{src:d,alt:"Photo by Ricardo Gomez Angel on Unsplash"},night:{src:a.p+"c89598e469c7e6029de587120320abdc.jpg",alt:"Photo by Shapelined on Unsplash"}},800:{day:{src:i,alt:"Photo by Annie Spratt on Unsplash"},night:{src:a.p+"368d92745ef54d7cd8b656229eab7b5a.jpg",alt:"Photo by Jake weirick on Unsplash"}},801:{day:{src:l,alt:"Photo by Joonas Sild on Unsplash"},night:{src:a.p+"a2ef72c9ad0054bcf6df1c94f07d5f17.jpg",alt:"Photo by Anandu Vinod on Unsplash"}}}},p=e=>{const t=(new Date).getHours(),a=e.toString();let r,c;switch(c=t>=6&&t<=18?"day":"night",a){case(a.match(/8../)||{}).input:r=u.weatherPics[801][c].src;break;case(a.match(/2../)||{}).input:r=u.weatherPics[200][c].src;break;case(a.match(/3../)||{}).input:r=u.weatherPics[300][c].src;break;case(a.match(/5../)||{}).input:r=u.weatherPics[500].src;break;case(a.match(/6../)||{}).input:r=u.weatherPics[600][c].src;break;case(a.match(/7../)||{}).input:r=u.weatherPics[700][c].src;break;case(a.match(/8.[^0]/)||{}).input:r=u.weatherPics[800][c].src;break;default:r=n}return r},b=()=>{const e=document.querySelector(".main-image"),t=document.querySelector(".degrees"),a=document.querySelector(".description"),n=document.querySelector(".city"),r=document.querySelector(".time"),c=document.querySelector(".date"),o=document.querySelector(".icon"),s=document.querySelector(".forecast");s.classList.add("hidden");const d=document.querySelector(".forecast-list");return e.src=p("default"),{degSymbol:"°",mainBackground:e,temperature:t,description:a,city:n,time:r,date:c,icon:o,forecast:s,list:d}};b()}]);