(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{5809:function(e,t,s){Promise.resolve().then(s.bind(s,4318))},357:function(e,t,s){"use strict";var r,n;e.exports=(null==(r=s.g.process)?void 0:r.env)&&"object"==typeof(null==(n=s.g.process)?void 0:n.env)?s.g.process:s(8081)},8081:function(e){!function(){var t={229:function(e){var t,s,r,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{s="function"==typeof clearTimeout?clearTimeout:l}catch(e){s=l}}();var i=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?i=r.concat(i):u=-1,i.length&&m())}function m(){if(!c){var e=o(d);c=!0;for(var t=i.length;t;){for(r=i,i=[];++u<t;)r&&r[u].run();u=-1,t=i.length}r=null,c=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===l||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function x(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];i.push(new f(e,t)),1!==i.length||c||o(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=x,n.addListener=x,n.once=x,n.off=x,n.removeListener=x,n.removeAllListeners=x,n.emit=x,n.prependListener=x,n.prependOnceListener=x,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},s={};function r(e){var n=s[e];if(void 0!==n)return n.exports;var a=s[e]={exports:{}},l=!0;try{t[e](a,a.exports,r),l=!1}finally{l&&delete s[e]}return a.exports}r.ab="//";var n=r(229);e.exports=n}()},3902:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var r=s(7437),n=s(2265),a=s(9343),l=s(7138),o=s(5447),i=s(6463),c=s(3580);s(4193);var u=s(361),d=s(3781);function m(){let{register:e,handleSubmit:t,formState:{errors:s}}=(0,a.cI)(),m=(0,i.useRouter)(),[f,x]=(0,n.useState)(""),[p,h]=(0,n.useState)(!1),g=(0,n.useRef)(null);(0,n.useEffect)(()=>{g.current&&g.current.focus()},[]);let b=async e=>{(0,u.H)();let{username:t,password:s}=e;try{let t=await u.Z.post("/login",e);200===t.status&&(m.push("/"),x(""),c.Am.success("Login Sukses!",{position:"top-right"}),localStorage.setItem("token",t.data.accesstoken),localStorage.setItem("roleId",t.data.roleId))}catch(e){if(e.response&&401===e.response.status){let e="Username atau password salah atau role belum diberikan admin, mohon konfirmasi ke admin untuk diberikan role terlebih dahulu";x(e),c.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="User tidak aktif atau user tidak memiliki role, silahkan hubungi admin";x(e),c.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let t="Login gagal!,  ".concat(e.message);x(t),c.Am.error(t,{position:"top-right"})}}};return(0,r.jsxs)("div",{className:"flex flex-col items-center w-100",children:[f&&(0,r.jsx)("p",{className:"message bg-red-400 text-white p-2 text-sm mb-3 rounded-lg text-center",children:f})," ",(0,r.jsxs)("form",{className:"flex flex-col gap-4 w-full",onSubmit:t(b),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"username",className:"block mb-1 required",children:"Username"}),(0,r.jsx)("input",{type:"text",id:"username",placeholder:"Enter your username",...e("username",{required:"Username is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(s.username?"border-red-500":"border-gray-300")}),s.username&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:s.username.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block mb-1 required",children:"Password"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:p?"text":"password",id:"password",placeholder:"Enter your password",...e("password",{required:"Password is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(s.password?"border-red-500":"border-gray-300")}),(0,r.jsx)("button",{type:"button",onClick:()=>h(!p),className:"absolute inset-y-0 right-0 flex items-center px-3 text-gray-600",children:p?(0,r.jsx)("span",{children:(0,r.jsx)(d.Jmv,{})}):(0,r.jsx)("span",{children:(0,r.jsx)(d.xt8,{})})})]}),s.password&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:s.password.message})]}),(0,r.jsxs)("div",{className:"button flex  gap-3 justify-between items-center",children:[(0,r.jsx)(o.Z,{text:"Login",className:""}),(0,r.jsx)("div",{className:"forgot-password-link",children:(0,r.jsx)(l.default,{href:"/forgot_password",children:(0,r.jsx)("p",{className:"text-primary-variant",children:"Forgot password?"})})})]})]})]})}},4318:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var r=s(7437),n=s(273),a=s(6409),l=s(2265),o=s(1444),i=s(8507),c=e=>{let{title:t,value:s}=e;return(0,r.jsxs)("div",{className:"card_component bg-slate-100 p-8 rounded-lg flex flex-col justify-between items-center min-h-[6rem] min-w-[12rem] max-h-[12rem] max-w-[16rem] h-[12rem] w-[16rem] gap-4 border-blue-700 border-2 border-b-8 shadow-red-800 cursor-pointer hover:shadow-2xl transition duration-200 transform hover:scale-[1.01]",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{className:"text-xl text-center font-bold",children:t})}),(0,r.jsx)("div",{className:"value",children:(0,r.jsx)("h3",{className:"text-5xl font-bold text-center",children:s})})]})},u=()=>(0,r.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3 ",children:(0,r.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full p-3",children:[(0,r.jsxs)("div",{className:"card flex gap-5 justify-start items-center w-full h-full flex-col xl:flex-row",children:[(0,r.jsx)(c,{title:"Jumlah User",value:50}),(0,r.jsx)(c,{title:"Total Evaluasi Akip",value:40}),(0,r.jsx)(c,{title:"Telah Dievaluasi",value:40})]}),(0,r.jsxs)("div",{className:"logo flex flex-col gap-4 justify-center items-center xl:mt-10 mt-6 w-full",children:[(0,r.jsx)("img",{src:"./lamsel.png",alt:"Logo Lampung Selatan",width:120}),(0,r.jsx)("h2",{className:"text-bold rounded-lg p-2 bg-slate-200 text-center",children:"Pemerintahan Kabupaten Lampung Selatan"})]})]})}),d=s(6463),m=s(8978),f=s(3902);function x(){return(0,r.jsxs)("main",{className:"flex z-50 h-[100vh] flex-col lg:flex-row items-center justify-between",children:[(0,r.jsxs)("div",{className:"hidden image-login-page lg:w-[65%] h-full relative lg:flex justify-center",children:[(0,r.jsx)("img",{src:"/login-page.png",className:"bg-cover w-full",alt:"Background Inspektorat Lampung Selatan"}),(0,r.jsxs)("div",{className:"overlay absolute left-[10%] inset-0 flex flex-col justify-between p-16 xl:w-[80%] items-center",children:[(0,r.jsx)("header",{className:"heading",children:(0,r.jsx)("h1",{className:"text-white text-center bg-black p-8 rounded-[30px] bg-opacity-45 text-4xl font-bold font-poppins",children:"WELCOME TO SISTEM EVALUASI SAKIP BERBASIS APLIKASI"})}),(0,r.jsxs)("footer",{className:"footer text-white bg-black w-full flex justify-center items-center p-8 rounded-[30px] bg-opacity-45 gap-4 text-xl",children:[(0,r.jsx)("img",{src:"/lamsel.png",alt:"Logo Lampung Selatan",width:30}),(0,r.jsx)("h4",{children:"Inspektorat Lampung Selatan"})]})]})]}),(0,r.jsxs)("div",{className:"form-login w-full lg:w-[35%] h-full p-10 flex flex-col gap-8 relative items-center justify-center xl:justify-start",children:[(0,r.jsx)("div",{className:"background-image absolute inset-0 lg:hidden",children:(0,r.jsx)("img",{src:"/login-page.png",alt:"Background Inspektorat Lampung Selatan",className:"bg-cover"})}),(0,r.jsxs)("div",{className:"container-form flex flex-col gap-5 bg-white bg-opacity-90 p-5 rounded-md",children:[(0,r.jsxs)("div",{className:"heading-form-login inset-0 flex flex-col justify-center items-center gap-4 ",children:[(0,r.jsx)("img",{src:"/lamsel.png",alt:"Logo Lampung Selatan",width:100}),(0,r.jsx)("div",{className:"text-heading-form-login text-center text-xl ",children:(0,r.jsx)("h3",{children:"Inspektorat Lampung Selatan"})}),(0,r.jsx)("div",{className:"page-name",children:(0,r.jsx)("h4",{className:"text-primary-variant",children:"Log In"})})]}),(0,r.jsx)(f.Z,{})]})]})]})}var p=()=>{(0,i.R)(),(0,n.Z)(),(0,a.Z)();let e=(0,d.usePathname)(),t=(0,o.I0)(),s=(0,o.v9)(e=>e.reload.activeState);(0,l.useEffect)(()=>{!0==s&&"/"===e&&setTimeout(()=>{window.location.reload(),t((0,m.y0)(!1))},2e3)},[s,e,t]);let[c,f]=(0,l.useState)("");return((0,l.useEffect)(()=>{{let e=window.localStorage.getItem("roleId");null!==e?f(e):console.error("roleId tidak tersedia di local storage")}},[]),"1"===c||"2"===c)?(0,r.jsx)(u,{}):"3"===c?(0,r.jsx)(u,{}):"4"===c?(0,r.jsx)(u,{}):(0,r.jsx)(x,{})}},5447:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{text:t,className:s}=e;return(0,r.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(s),type:"submit",children:t})}},273:function(e,t,s){"use strict";var r=s(2265);t.Z=()=>{let[e,t]=(0,r.useState)(!1);return{modal:{isVisible:e,setIsVisible:t,onClose:()=>t(!1)},visible:e,setVisible:t}}},6409:function(e,t,s){"use strict";var r=s(2265);t.Z=()=>{let[e,t]=(0,r.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:t,onCloseSmall:()=>t(!1)},visible:e,setVisible:t}}},8507:function(e,t,s){"use strict";s.d(t,{R:function(){return a}});var r=s(2265),n=s(6463);let a=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),[s,a]=(0,r.useState)(!1);(0,r.useEffect)(()=>{a(!0)},[]),(0,r.useEffect)(()=>{s&&(null!==localStorage.getItem("token")?"/login"===t?e.push("/"):e.push(t):e.push("/login"))},[s,e,t])}},8978:function(e,t,s){"use strict";s.d(t,{y0:function(){return n}});let r=(0,s(9753).oM)({name:"reload",initialState:{activeState:!1},reducers:{setActiveReload:(e,t)=>{e.activeState=t.payload}}}),{setActiveReload:n}=r.actions;t.ZP=r.reducer},361:function(e,t,s){"use strict";s.d(t,{H:function(){return l}});var r=s(2126);let n="",a=r.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),l=()=>{let e=localStorage.getItem("token");e&&(n=e,a.defaults.headers.common.Authorization="Bearer ".concat(n))};a.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=a}},function(e){e.O(0,[392,1779,2126,9343,9500,8811,3213,2971,7023,1744],function(){return e(e.s=5809)}),_N_E=e.O()}]);