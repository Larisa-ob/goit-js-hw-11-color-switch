(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,o){"use strict";o.r(e);o("Q1vi");var n=o("VYoj");o.n(n).a.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};o("wm5q");var r={timerStart:document.querySelector("button[data-action='start']"),timerStop:document.querySelector("button[data-action='stop']"),bodyColor:document.querySelector("body")},i=null,a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],s=a.length;r.timerStart.addEventListener("click",(function(t){if(console.log(i),i)return;t.preventDefault(),console.log("start ..."),i=setInterval((function(){var t,e,o,n,r=(o=a,t=0,e=s-1,n=Math.floor(Math.random()*(e-t+1)+t),o[n]);document.body.style.background=r}),1e3),r.timerStop.removeAttribute("disabled"),r.timerStart.setAttribute("disabled",!0)})),r.timerStop.addEventListener("click",(function(){i&&(clearInterval(i),i=null,console.log("setInterval stopped!"),r.timerStart.removeAttribute("disabled"),r.timerStop.setAttribute("disabled",!0))}))},wm5q:function(t,e,o){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.12ab5ff196357525d7e9.js.map