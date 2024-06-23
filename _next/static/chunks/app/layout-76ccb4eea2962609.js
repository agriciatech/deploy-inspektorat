(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{2806:function(e,t,l){Promise.resolve().then(l.bind(l,3395))},3395:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return _}});var s=l(7437),a=l(2265),n=l(1444),i=l(4504),r=l(6804),o=l(1904),c=l(5574),u=l(1046);let d=(0,o.oM)({name:"navbar",initialState:{activeRoute:"Dashboard"},reducers:{setActiveRoute:(e,t)=>{console.log("Setting active route:",t.payload),e.activeRoute=t.payload}}}),{setActiveRoute:m}=d.actions;var x=d.reducer;let f={key:"root",storage:u.Z},h=(0,r.UY)({navbar:x}),v=(0,c.OJ)(f,h),g=(0,o.xC)({reducer:v,middleware:e=>e({serializableCheck:!1})}),b=(0,c.p5)(g);var p=function(e){let{children:t}=e;return(0,s.jsx)(n.zt,{store:g,children:(0,s.jsx)(i.r,{loading:null,persistor:b,children:t})})};l(3054);var j=l(6463),w=l(7261),y=l(7138);l(6964);var N=l(1827);l(3340);var F=()=>{let[e,t]=(0,a.useState)(!1),[l,s]=(0,a.useState)(!1);return{iconVariants:{open:{rotate:0,transition:{type:"spring",stiffness:260,damping:20}},closed:{rotate:180,transition:{type:"spring",stiffness:260,damping:20}}},toggleMenu:()=>{s(!l)},showMenu:l,setShowMenu:s,modal:{isVisible:e,setIsVisible:t,onClose:()=>t(!1)},visible:e,setVisible:t}},A=l(3580);l(4193);var k=l(361),R=()=>{var e;let[t,l]=(0,a.useState)([]),s=(0,j.useRouter)(),i=(0,n.I0)(),r=(0,j.usePathname)(),[o,c]=(0,a.useState)(0),[u,d]=(0,a.useState)(!1),x=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),f=e=>{let t=e.split("/");t.length>1&&t[1]?(i(m(x(t[1].replace(/[_]/g," ")))),localStorage.setItem("activeRoute",e)):(i(m("Dashboard")),localStorage.setItem("activeRoute","Dashboard"))},h=async()=>{await k.Z.get("/menu",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(e=>{l(e.data.data)}).catch(e=>{console.log(e),s.push("/login"),localStorage.removeItem("token")})};(0,a.useEffect)(()=>{let e=localStorage.getItem("activeRoute");e?f(e):f(r),h(),c(window.innerHeight);let t=()=>{c(window.innerHeight)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[r]);let v=(0,n.v9)(e=>{var t;return null===(t=e.navbar)||void 0===t?void 0:t.activeRoute}),g=null==t?void 0:t.map(e=>{var t;return{icon:e.icon,iconActive:e.active_icon,name:e.menu,link:e.path,subMenu:null===(t=e.SubMenu)||void 0===t?void 0:t.map(e=>({nama:e.subMenu,link:e.path}))}}),b=x((null===(e=r.split("/")[2])||void 0===e?void 0:e.replace(/_/g," "))||"");return{menu:g,activeRoute:v,pathName:r,patchRoute:f,secondSegment:b,extend:u,setExtend:d,innerHeight:o,setInnerHeight:c}},S=e=>{var t;let{isVisible:l,setIsVisible:a,onClose:n}=e;(0,j.useRouter)();let i=R();return F(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"".concat(l?" z-20  fixed lg:hidden flex w-full h-full overlow-hidden duration-500 flex-row backdrop-blur-sm justify-end ":" z-20 fixed w-[0] h-full md:hidden flex duration-500 justify-end "," mt-[10vh] "),children:[(0,s.jsx)("div",{onClick:()=>n(),className:"".concat(l?"bg-black md:w-full w-1/3 duration-500 ":" bg-black h-full w-0 duration-500 ","  bg-opacity-50 h-full ")}),(0,s.jsx)("div",{className:"".concat(l?" bg-white md:w-1/3 w-full pr-2 h-full flex border-tl-8 items-start justify-between duration-500 flex-col":" bg-white h-full w-0 flex duration-500 flex-col","   "),children:(0,s.jsxs)("div",{className:"".concat(l?"overflow-y-scroll":"hidden"," h-[85%] bottom-10 pt-5 md:pb-10 pb-0 flex items-start flex-col"),children:[null===(t=i.menu)||void 0===t?void 0:t.map((e,t)=>{var l,a,n,r,o;return(0,s.jsxs)("div",{className:"flex-col w-full flex justify-start items-center px-5 ",children:[(null===(l=e.subMenu)||void 0===l?void 0:l.length)==null||(null===(a=e.subMenu)||void 0===a?void 0:a.length)==0?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.default,{href:e.link,className:"".concat(e.name===i.activeRoute?"active flex w-full bg-[#F1F5FF] px-5 my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===i.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===i.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.default,{href:"".concat(e.link).concat((null==e?void 0:e.subMenu)&&(null===(n=e.subMenu[0])||void 0===n?void 0:n.link)),onClick:()=>{let t=i.activeRoute===e.name;i.setExtend(!!t&&!i.extend)},className:"".concat(e.name===i.activeRoute?"active flex w-full bg-[#F1F5FF] my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===i.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===i.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}),(null==e?void 0:e.subMenu)&&(null===(r=e.subMenu)||void 0===r?void 0:r.length)>0&&i.activeRoute===e.name&&(0,s.jsx)("div",{className:"duration-500 fade-in w-full border-l-4 border-[#408EFD]  flex flex-col",children:null===(o=e.subMenu)||void 0===o?void 0:o.map((t,l)=>(0,s.jsx)(y.default,{href:"".concat(e.link).concat(t.link),className:"w-full justify-start px-5 items-center flex py-2",children:(0,s.jsx)("p",{className:"".concat(t.nama===i.secondSegment?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:t.nama})},l))})]},t)}),(0,s.jsx)("div",{className:"w-full justify-start px-5 items-center flex py-2 ",children:(0,s.jsxs)(y.default,{href:"/login",onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("role"),A.Am.success("Berhasil Logout! | Terima kasih",{position:"top-right"})},className:"w-full text-[#A2A2A2] justify-start items-center  flex py-2",children:[" ",(0,s.jsx)("div",{children:(0,s.jsx)(w.Iw6,{className:"mr-2"})}),"Log Out"]})})]})})]})})},I=l(5027),E=l(5097),M=()=>{let e=R(),t=F();return(0,n.I0)(),console.log("ini active route",e.activeRoute),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{isVisible:t.modal.isVisible,setIsVisible:t.modal.setIsVisible,onClose:()=>t.modal.setIsVisible(!1)}),(0,s.jsx)("div",{className:"width p-7 fixed sm:ml-0 flex  h-[10vh] w-full border-b-[1px] border-[#A2A2A2] md:w-[100%]  bg-[#FFFFFF] z-10",children:(0,s.jsxs)("div",{className:" w-full flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("h5",{className:"text-[#408EFD] text-lg font-bold lg:flex hidden",children:"".concat(e.activeRoute," ").concat(null!==e.secondSegment?"| ".concat(e.secondSegment):"")}),(0,s.jsx)("div",{className:"lg:hidden flex justify-center items-center pr-3",children:(0,s.jsx)("img",{className:"w-10 h-10`",src:"/logo.png",loading:"lazy",alt:"logo"})}),(0,s.jsx)("div",{className:"lg:w-15 lg:hidden flex justify-center items-center",children:(0,s.jsx)("h3",{className:"text-2xl font-semibold",children:"SEBESI"})})]}),(0,s.jsx)("div",{className:"lg:flex hidden  justify-center items-center",children:(0,s.jsx)(y.default,{href:"/login",children:(0,s.jsx)(w.Iw6,{onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("role"),A.Am.success("Berhasil Logout! | Terima kasih",{position:"top-right"})},className:"w-6 h-6"})})}),(0,s.jsx)("div",{className:"lg:hidden flex flex-row  h-full justify-end items-center lg:w-3/4 w-1/2",children:(0,s.jsx)(N.E.div,{onClick:()=>{t.modal.setIsVisible(!t.modal.isVisible),t.toggleMenu()},className:"flex  items-center  cursor-pointer  p-2",variants:t.iconVariants,initial:!1,animate:t.showMenu?"open":"closed",children:!0==t.modal.isVisible?(0,s.jsx)(E.IOM,{className:"z-30 text-blue-500 w-9 h-9"}):(0,s.jsx)(I.vHB,{className:"z-30  text-blue-500 w-7 h-7"})})})]})})]})};l(2819);var C=()=>{var e;let t=R();return(0,s.jsxs)("div",{className:"lg:w-96 bg-[#FAFAFAF] lg:flex hidden flex-col duration-500 min-h-screen border-r-[1px] border-[#A2A2A2]",children:[(0,s.jsxs)("div",{className:"fixed w-full bg-[#FFFFFF] xl:w-[18rem] lg:w-[17rem] justify-start pl-7 flex h-[10vh]",children:[(0,s.jsx)("div",{className:" flex justify-center items-center pr-3",children:(0,s.jsx)("img",{className:"w-10 h-10`",src:"/logo.png",alt:"logo",loading:"lazy"})}),(0,s.jsx)("div",{className:"lg:w-15 flex justify-center items-center",children:(0,s.jsx)("h3",{className:"text-2xl font-semibold",children:"SEBESI"})})]}),(0,s.jsx)("div",{className:"overflow-y-auto w-full flex-col  pt-[10vh] pb-10  h-full",children:null===(e=t.menu)||void 0===e?void 0:e.map((e,l)=>{var a,n,i,r,o;return(0,s.jsxs)("div",{className:"flex-col flex justify-start items-center px-5 ",children:[(null===(a=e.subMenu)||void 0===a?void 0:a.length)==null||(null===(n=e.subMenu)||void 0===n?void 0:n.length)==0?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.default,{href:e.link,className:"".concat(e.name===t.activeRoute?"active flex w-full bg-[#F1F5FF] px-2 my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===t.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===t.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.default,{href:"".concat(e.link).concat((null==e?void 0:e.subMenu)&&(null===(i=e.subMenu[0])||void 0===i?void 0:i.link)),onClick:()=>{let l=t.activeRoute===e.name;t.setExtend(!!l&&!t.extend)},className:"".concat(e.name===t.activeRoute?"active flex w-full bg-[#F1F5FF] my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===t.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===t.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}),(null==e?void 0:e.subMenu)&&(null===(r=e.subMenu)||void 0===r?void 0:r.length)>0&&t.activeRoute===e.name&&(0,s.jsx)("div",{className:"duration-500 fade-in w-full border-l-4 border-[#408EFD]  flex flex-col",children:null===(o=e.subMenu)||void 0===o?void 0:o.map((l,a)=>(0,s.jsx)(y.default,{href:"".concat(e.link).concat(l.link),className:"w-full py-2 justify-start px-5 items-center flex py-2",children:(0,s.jsx)("p",{className:"".concat(l.nama===t.secondSegment?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:l.nama})},a))})]},l)})})]})};let z=e=>{let{children:t}=e,l=(0,j.usePathname)(),i=(0,n.I0)(),r=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),o=e=>{let t=e.split("/");t.length>1&&t[1]?(i(m(r(t[1].replace(/[_]/g," ")))),localStorage.setItem("activeRoute",e)):(i(m("Dashboard")),localStorage.setItem("activeRoute","/dashboard"))};(0,n.v9)(e=>{var t;return null===(t=e.navbar)||void 0===t?void 0:t.activeRoute}),(0,a.useEffect)(()=>{let e=localStorage.getItem("activeRoute");e?o(e):o(l)},[]),(0,a.useEffect)(()=>{o(l)},[l]);let c=["/forgot_password","/login"].includes(l);return(0,s.jsxs)("div",{className:"flex h-screen overflow-hidden w-full",children:[!c&&(0,s.jsx)(C,{}),(0,s.jsxs)("div",{className:"flex flex-col w-[100%] overflow-x-hidden",children:[!c&&(0,s.jsx)(M,{}),t]})]})};var V=l(8507);function _(e){let{children:t}=e;return(0,V.R)(),(0,a.useEffect)(()=>{let e=e=>{/Loading chunk [\d]+ failed/.test(e.message)&&confirm("Terjadi kesalahan saat memuat halaman. Apakah Anda ingin memuat ulang halaman?")&&window.location.reload()};return window.addEventListener("error",e),()=>{window.removeEventListener("error",e)}},[]),(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{children:[(0,s.jsx)(p,{children:(0,s.jsx)(z,{children:t})}),(0,s.jsx)(A.Ix,{})]})})}},8507:function(e,t,l){"use strict";l.d(t,{R:function(){return n}});var s=l(2265),a=l(6463);let n=()=>{let e=(0,a.useRouter)(),t=(0,a.usePathname)(),[l,n]=(0,s.useState)(!1);(0,s.useEffect)(()=>{n(!0)},[]),(0,s.useEffect)(()=>{l&&(null!==localStorage.getItem("token")?"/login"===t?e.push("/"):e.push(t):e.push("/login"))},[l,e,t])}},361:function(e,t,l){"use strict";l.d(t,{H:function(){return i}});var s=l(2126);let a="",n=s.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),i=()=>{let e=localStorage.getItem("token");e&&(a=e,n.defaults.headers.common.Authorization="Bearer ".concat(a))};n.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=n},3054:function(){},6964:function(){},2819:function(){},3340:function(){}},function(e){e.O(0,[392,5706,9212,5505,2126,9500,8811,8819,2971,7023,1744],function(){return e(e.s=2806)}),_N_E=e.O()}]);