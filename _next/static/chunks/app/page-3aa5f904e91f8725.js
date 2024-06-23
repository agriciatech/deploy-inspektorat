(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{5809:function(e,t,r){Promise.resolve().then(r.bind(r,6584))},357:function(e,t,r){"use strict";var n,l;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(l=r.g.process)?void 0:l.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,l=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a=[],u=!1,c=-1;function f(){u&&n&&(u=!1,n.length?a=n.concat(a):c=-1,a.length&&m())}function m(){if(!u){var e=i(f);u=!0;for(var t=a.length;t;){for(n=a,a=[];++c<t;)n&&n[c].run();c=-1,t=a.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}l.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new d(e,t)),1!==a.length||u||i(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=h,l.addListener=h,l.once=h,l.off=h,l.removeListener=h,l.removeAllListeners=h,l.emit=h,l.prependListener=h,l.prependOnceListener=h,l.listeners=function(e){return[]},l.binding=function(e){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw Error("process.chdir is not supported")},l.umask=function(){return 0}}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var l=n(229);e.exports=l}()},6584:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7437),l=r(2265),o=r(1444),s=r(6463),i=r(8507),a=e=>{let{title:t,value:r}=e;return(0,n.jsxs)("div",{className:"card_component bg-slate-100 p-8 rounded-lg flex flex-col justify-between items-center min-h-[6rem] min-w-[12rem] max-h-[12rem] max-w-[16rem] h-[12rem] w-[16rem] gap-4 border-blue-700 border-2 border-b-8 shadow-red-800 cursor-pointer hover:shadow-2xl transition duration-200 transform hover:scale-[1.01]",children:[(0,n.jsx)("div",{className:"title",children:(0,n.jsx)("h2",{className:"text-xl text-center font-bold",children:t})}),(0,n.jsx)("div",{className:"value",children:(0,n.jsx)("h3",{className:"text-5xl font-bold text-center",children:r})})]})},u=()=>(0,n.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3 ",children:(0,n.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full p-3",children:[(0,n.jsxs)("div",{className:"card flex gap-5 justify-start items-center w-full h-full flex-col xl:flex-row",children:[(0,n.jsx)(a,{title:"Jumlah User",value:50}),(0,n.jsx)(a,{title:"Total Evaluasi Akip",value:40}),(0,n.jsx)(a,{title:"Telah Dievaluasi",value:40})]}),(0,n.jsxs)("div",{className:"logo flex flex-col gap-4 justify-center items-center xl:mt-10 mt-6 w-full",children:[(0,n.jsx)("img",{src:"./lamsel.png",alt:"Logo Lampung Selatan",width:120}),(0,n.jsx)("h2",{className:"text-bold rounded-lg p-2 bg-slate-200 text-center",children:"Pemerintahan Kabupaten Lampung Selatan"})]})]})}),c=r(8831),f=()=>{(0,i.R)(),(0,s.usePathname)();let e=(0,o.I0)(),[t,r]=(0,l.useState)("");return((0,l.useEffect)(()=>{{let e=window.localStorage.getItem("roleId");null!==e?r(e):console.error("roleId tidak tersedia di local storage")}},[]),(0,l.useEffect)(()=>{e((0,c.wC)("Dashboard"))},[]),"3"===t)?(0,n.jsx)(u,{}):(0,n.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0  ",children:(0,n.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex flex-col "})})}},8507:function(e,t,r){"use strict";r.d(t,{R:function(){return o}});var n=r(2265),l=r(6463);let o=()=>{let e=(0,l.useRouter)(),t=(0,l.usePathname)(),[r,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{o(!0)},[]),(0,n.useEffect)(()=>{r&&(null!==localStorage.getItem("token")?"/login"===t?e.push("/"):e.push(t):e.push("/login"))},[r,e,t])}},8831:function(e,t,r){"use strict";r.d(t,{wC:function(){return l}});let n=(0,r(1904).oM)({name:"navbar",initialState:{activeRoute:"Dashboard"},reducers:{setActiveRoute:(e,t)=>{console.log("Setting active route:",t.payload),e.activeRoute=t.payload}}}),{setActiveRoute:l}=n.actions;t.ZP=n.reducer}},function(e){e.O(0,[6240,2971,7023,1744],function(){return e(e.s=5809)}),_N_E=e.O()}]);