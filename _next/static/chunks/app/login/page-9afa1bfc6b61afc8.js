(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{6849:function(e,t,s){Promise.resolve().then(s.bind(s,9346))},6463:function(e,t,s){"use strict";var r=s(1169);s.o(r,"redirect")&&s.d(t,{redirect:function(){return r.redirect}}),s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSelectedLayoutSegment")&&s.d(t,{useSelectedLayoutSegment:function(){return r.useSelectedLayoutSegment}})},9346:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(7437),a=s(2265),n=s(9343),l=s(7138),o=s(5447),i=s(6463),c=s(3580);s(4193);var u=s(361),d=s(3781);function m(){let{register:e,handleSubmit:t,formState:{errors:s}}=(0,n.cI)(),m=(0,i.useRouter)(),[p,x]=(0,a.useState)(""),[g,f]=(0,a.useState)(!1),h=(0,a.useRef)(null);(0,a.useEffect)(()=>{h.current&&h.current.focus()},[]);let b=async e=>{(0,u.H)();let{username:t,password:s}=e;try{let t=await u.Z.post("/login",e);200===t.status&&(m.push("/"),x(""),c.Am.success("Login Sukses!",{position:"top-right"}),localStorage.setItem("token",t.data.accesstoken),localStorage.setItem("roleId",t.data.roleId),window.location.reload())}catch(e){if(e.response&&401===e.response.status){let e="Username atau password salah atau role belum diberikan admin, mohon konfirmasi ke admin untuk diberikan role terlebih dahulu";x(e),c.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="User tidak aktif atau user tidak memiliki role, silahkan hubungi admin";x(e),c.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let t="Login gagal!,  ".concat(e.message);x(t),c.Am.error(t,{position:"top-right"})}}};return(0,r.jsxs)("div",{className:"flex flex-col items-center w-100",children:[p&&(0,r.jsx)("p",{className:"message bg-red-400 text-white p-2 text-sm mb-3 rounded-lg text-center",children:p})," ",(0,r.jsxs)("form",{className:"flex flex-col gap-4 w-full",onSubmit:t(b),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"username",className:"block mb-1 required",children:"Username"}),(0,r.jsx)("input",{type:"text",id:"username",placeholder:"Enter your username",...e("username",{required:"Username is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(s.username?"border-red-500":"border-gray-300")}),s.username&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:s.username.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block mb-1 required",children:"Password"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:g?"text":"password",id:"password",placeholder:"Enter your password",...e("password",{required:"Password is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(s.password?"border-red-500":"border-gray-300")}),(0,r.jsx)("button",{type:"button",onClick:()=>f(!g),className:"absolute inset-y-0 right-0 flex items-center px-3 text-gray-600",children:g?(0,r.jsx)("span",{children:(0,r.jsx)(d.Jmv,{})}):(0,r.jsx)("span",{children:(0,r.jsx)(d.xt8,{})})})]}),s.password&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:s.password.message})]}),(0,r.jsxs)("div",{className:"button flex  gap-3 justify-between items-center",children:[(0,r.jsx)(o.Z,{text:"Login",className:""}),(0,r.jsx)("div",{className:"forgot-password-link",children:(0,r.jsx)(l.default,{href:"/forgot_password",children:(0,r.jsx)("p",{className:"text-primary-variant",children:"Forgot password?"})})})]})]})]})}var p=s(8507);function x(){return(0,p.R)(),(0,i.useRouter)(),(0,r.jsxs)("main",{className:"flex z-50 h-[100vh] flex-col lg:flex-row items-center justify-between",children:[(0,r.jsxs)("div",{className:"hidden image-login-page lg:w-[65%] h-full relative lg:flex justify-center",children:[(0,r.jsx)("img",{src:"/login-page.png",className:"bg-cover w-full",alt:"Background Inspektorat Lampung Selatan"}),(0,r.jsxs)("div",{className:"overlay absolute left-[10%] inset-0 flex flex-col justify-between p-16 xl:w-[80%] items-center",children:[(0,r.jsx)("header",{className:"heading",children:(0,r.jsx)("h1",{className:"text-white text-center bg-black p-8 rounded-[30px] bg-opacity-45 text-4xl font-bold font-poppins",children:"WELCOME TO SISTEM EVALUASI SAKIP BERBASIS APLIKASI"})}),(0,r.jsxs)("footer",{className:"footer text-white bg-black w-full flex justify-center items-center p-8 rounded-[30px] bg-opacity-45 gap-4 text-xl",children:[(0,r.jsx)("img",{src:"/lamsel.png",alt:"Logo Lampung Selatan",width:30}),(0,r.jsx)("h4",{children:"Inspektorat Lampung Selatan"})]})]})]}),(0,r.jsxs)("div",{className:"form-login w-full lg:w-[35%] h-full p-10 flex flex-col gap-8 relative items-center justify-center xl:justify-start",children:[(0,r.jsx)("div",{className:"background-image absolute inset-0 lg:hidden",children:(0,r.jsx)("img",{src:"/login-page.png",alt:"Background Inspektorat Lampung Selatan",className:"bg-cover"})}),(0,r.jsxs)("div",{className:"container-form flex flex-col gap-5 bg-white bg-opacity-90 p-5 rounded-md",children:[(0,r.jsxs)("div",{className:"heading-form-login inset-0 flex flex-col justify-center items-center gap-4 ",children:[(0,r.jsx)("img",{src:"/lamsel.png",alt:"Logo Lampung Selatan",width:100}),(0,r.jsx)("div",{className:"text-heading-form-login text-center text-xl ",children:(0,r.jsx)("h3",{children:"Inspektorat Lampung Selatan"})}),(0,r.jsx)("div",{className:"page-name",children:(0,r.jsx)("h4",{className:"text-primary-variant",children:"Log In"})})]}),(0,r.jsx)(m,{})]})]})]})}},5447:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{text:t,className:s}=e;return(0,r.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(s),type:"submit",children:t})}},8507:function(e,t,s){"use strict";s.d(t,{R:function(){return n}});var r=s(2265),a=s(6463);let n=()=>{let e=(0,a.useRouter)(),t=(0,a.usePathname)(),[s,n]=(0,r.useState)(!1);(0,r.useEffect)(()=>{n(!0)},[]),(0,r.useEffect)(()=>{s&&(localStorage.getItem("token")?"/login"===t&&e.push("/"):"/login"!==t&&e.push("/login"))},[s,e,t])}},361:function(e,t,s){"use strict";s.d(t,{H:function(){return l}});var r=s(2126);let a="",n=r.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),l=()=>{let e=localStorage.getItem("token");e&&(a=e,n.defaults.headers.common.Authorization="Bearer ".concat(a))};n.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=n}},function(e){e.O(0,[392,1779,2126,9343,9500,8811,2971,7023,1744],function(){return e(e.s=6849)}),_N_E=e.O()}]);