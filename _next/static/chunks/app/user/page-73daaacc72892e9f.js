(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3797],{1213:function(e,l,s){Promise.resolve().then(s.bind(s,6052))},6052:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return C}});var t=s(7437),a=s(2265),r=s(361),o=s(681),i=()=>({headerData:["Username","Nama","Email","Role","Aksi"]}),n=s(3051),c=s(6356),d=s(1641),u=s(7107),m=s(4200),h=s(5447),x=s(9343),f=s(3580);s(4193);var b=s(1942);s(4247);let p=e=>{let{register:l,handleSubmit:s,formState:{errors:o},reset:i}=(0,x.cI)(),n=(0,a.useRef)(null);(0,a.useEffect)(()=>{n.current&&n.current.focus()},[]);let[c,d]=(0,a.useState)(!1),[u,m]=(0,a.useState)([]),[p,g]=(0,a.useState)(""),w=async l=>{let{Username:s,Email:t,Password:a,Name:o,Fk_role:n}=l,c=parseInt(n);console.log(l);try{let l=await r.Z.post("/users",{Username:s,Name:o,Email:t,Password:a,Fk_role:c},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===l.status&&(g(""),e.data(),f.Am.success("Akun Berhasil Dibuat!",{position:"top-right"}),e.setVisible(!1),i())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";g(e),f.Am.error(e,{position:"top-right"}),i()}else if(e.response&&403===e.response.status){let e="User tidak aktif atau user tidak memiliki role, silahkan hubungi admin";g(e),f.Am.error(e,{position:"top-right"}),i()}else{console.log("Status respons lainnya:",e.message);let l="Gagal membuat akun!,  ".concat(e.message);g(l),f.Am.error(l,{position:"top-right"}),i()}}},j=async()=>{try{await r.Z.get("/roles",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(e=>{if(e.data&&Array.isArray(e.data.data)){let l=e.data.data;m(l),console.log("role",l)}console.log("role",e.data.data)})}catch(e){console.log(e)}};return(0,a.useEffect)(()=>{j(),e.isVisible||i()},[e.isVisible,i]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(w),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Username",className:"block mb-1 required",children:"Username"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.Username?"border-red-500":"border-gray-300"),type:"text",id:"Username",...l("Username",{required:"Username is required."}),placeholder:"Enter your username"}),o.Username&&(0,t.jsx)("p",{className:"text-red-500",children:o.Username.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Name",className:"block mb-1 required",children:"Name"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.Name?"border-red-500":"border-gray-300"),type:"text",id:"Name",...l("Name",{required:"Name is required."}),placeholder:"Enter your Name"}),o.Name&&(0,t.jsx)("p",{className:"text-red-500",children:o.Name.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"email",className:"block mb-1 required",children:"Email"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.Email?"border-red-500":"border-gray-300"),type:"text",id:"Email",...l("Email",{required:"Email is required."}),placeholder:"Enter your Email"}),o.Email&&(0,t.jsx)("p",{className:"text-red-500",children:o.Email.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Password",className:"block mb-1 required",children:"Password"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.Password?"border-red-500":"border-gray-300"),type:c?"text":"password",id:"Password",...l("Password",{required:"Password is required."}),placeholder:"Enter your Password"}),(0,t.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:c?(0,t.jsx)(b.tgn,{className:"w-4 h-4 cursor-pointer",onClick:()=>d(!1)}):(0,t.jsx)(b.dSq,{className:"w-4 h-4 cursor-pointer",onClick:()=>d(!0)})})]}),o.Password&&(0,t.jsx)("p",{className:"text-red-500",children:o.Password.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Fk_role",className:"block mb-1 required",children:"Role"}),(0,t.jsxs)("select",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.Fk_role?"border-red-500":"border-gray-300"),id:"Fk_role",...l("Fk_role",{required:"Role is required."}),children:[(0,t.jsx)("option",{value:"",children:"Pilih Role"}),u.map((e,l)=>(0,t.jsx)("option",{value:e.Pk_Role_Id,children:e.role},l))]}),o.Fk_role&&(0,t.jsx)("p",{className:"text-red-500",children:o.Fk_role.message})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Tambah User",className:"h-10"})})]})})},g=e=>{let{register:l,handleSubmit:s,setValue:o,formState:{errors:i},reset:n}=(0,x.cI)({defaultValues:{Username:"",Email:"",Name:"",Fk_role:""}});(0,a.useEffect)(()=>{(async()=>{try{let l=(await r.Z.get("/users/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})).data;o("Username",l.username),o("Email",l.email),o("Name",l.name),o("Fk_role","".concat(null==l.Fk_Role||""==l.Fk_Role?"Pilih Data":l.Fk_Role))}catch(e){console.error("Failed to fetch user data:",e)}})()},[e.id,o]);let c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current&&c.current.focus()},[]);let[d,u]=(0,a.useState)(!1),[m,b]=(0,a.useState)([]),[p,g]=(0,a.useState)(""),w=async l=>{let{Username:s,Email:t,Name:a,Fk_role:o}=l,i=parseInt(o);console.log(l);try{let l=await r.Z.put("/users/".concat(e.id),{Username:s,Email:t,Name:a,Fk_role:i},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===l.status&&(g(""),f.Am.success("Akun Berhasil Diupdate!",{position:"top-right"}),e.data(),e.setVisible(!1),n())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";g(e),f.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="User tidak aktif atau user tidak memiliki role, silahkan hubungi admin";g(e),f.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let l="Gagal membuat akun!,  ".concat(e.message);g(l),f.Am.error(l,{position:"top-right"})}}},j=async()=>{try{await r.Z.get("/roles",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(e=>{if(e.data&&Array.isArray(e.data.data)){let l=e.data.data;b(l),console.log("role",l)}console.log("role",e.data.data)})}catch(e){console.log(e)}};return(0,a.useEffect)(()=>{j()},[]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(w),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Username",className:"block mb-1 required",children:"Username"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.Username?"border-red-500":"border-gray-300"),type:"text",id:"Username",...l("Username",{required:"Username is required."}),placeholder:"Enter your username"}),i.Username&&(0,t.jsx)("p",{className:"text-red-500",children:i.Username.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Name",className:"block mb-1 required",children:"Name"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.Name?"border-red-500":"border-gray-300"),type:"text",id:"Name",...l("Name",{required:"Name is required."}),placeholder:"Enter your Name"}),i.Name&&(0,t.jsx)("p",{className:"text-red-500",children:i.Name.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"email",className:"block mb-1 required",children:"Email"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.Email?"border-red-500":"border-gray-300"),type:"text",id:"Email",...l("Email",{required:"Email is required."}),placeholder:"Enter your Email"}),i.Email&&(0,t.jsx)("p",{className:"text-red-500",children:i.Email.message})]}),(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"Fk_role",className:"block mb-1 required",children:"Role"}),(0,t.jsx)("select",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.Fk_role?"border-red-500":"border-gray-300"),id:"Fk_role",...l("Fk_role",{required:"Role is required."}),children:m.map((e,l)=>(0,t.jsx)("option",{value:e.Pk_Role_Id,children:e.role},l))}),i.Fk_role&&(0,t.jsx)("p",{className:"text-red-500",children:i.Fk_role.message})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Update User",className:"h-10"})})]})})};var w=s(8079),j=s(7702);let N=e=>{let[l,s]=(0,a.useState)("");console.log("yahaha",e.id);let o=async()=>{try{let l=await r.Z.get("/users/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});s(l.data.username),console.log("User berhasil diambil:",l.data.username)}catch(e){console.log("Gagal mengambil user:",e),s("")}},i=async()=>{try{await r.Z.delete("/users/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(l=>{200===l.status&&(e.setVisible(!1),f.Am.success("User berhasil dihapus",{position:"top-right"}),e.data())})}catch(e){console.log(e),f.Am.error("User gagal dihapus",{position:"top-right"})}};return(0,a.useEffect)(()=>{o()},[e.id]),(0,t.jsx)("div",{className:"w-full py-10  h-full flex px-4",children:(0,t.jsxs)("div",{className:"relative  flex-col mt-[1rem]  w-full h-full bg-red-blue flex justify-center items-start",children:[(0,t.jsx)("h1",{className:"font-semibold text-lg",children:"Apakah anda yakin ingin menghapus user ".concat(l," ?")}),(0,t.jsxs)("div",{className:"pt-10 flex w-full justify-end  ",children:[(0,t.jsx)(j.Z,{onClick:i,text:"Hapus",className:"mr-2"}),(0,t.jsx)(w.Z,{onClick:()=>e.setVisible(!1),className:"text-white",text:"Batal"})]})]})})};var v=s(1444),y=s(6463),k=s(8831),C=()=>{let[e,l]=(0,a.useState)(!1),[s,h]=(0,a.useState)(!1),[x,f]=(0,a.useState)(!1),b=i(),[w,j]=(0,a.useState)([]),[C,S]=(0,a.useState)([]),E=(0,y.usePathname)(),[F,U]=(0,a.useState)(0),[A,_]=(0,a.useState)(!1),q=(0,v.I0)(),Z=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),I=e=>{q((0,k.wC)(e))},R=()=>{let e=E.split("/");return e.length<3?null:Z(e[2].replace(/_/g," ").slice())},V=()=>{if("/"!==E){let e=E.split("/"),l=Z((e.length>1?e[1]:"/Dashboard").replace(/[_]/g," ").slice());I(l),console.log(l)}else I("Dashboard")};console.log("active",(0,v.v9)(e=>{var l;return null===(l=e.navbar)||void 0===l?void 0:l.activeRoute})),(0,a.useEffect)(()=>{V(),R(),U(window.innerHeight),console.log(window.innerHeight),console.log("yahaha",R());let e=()=>{U(window.innerHeight)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[E]);let z=b.headerData.map(e=>"id"===e.toLowerCase()?{name:e,wrap:!0,selector:e=>e.Id,sortable:!0}:"username"===e.toLowerCase()?{name:e,wrap:!0,selector:e=>e.username,sortable:!0}:"nama"===e.toLowerCase()?{name:e,wrap:!0,selector:e=>e.name,sortable:!0}:"email"===e.toLowerCase()?{name:e,wrap:!0,selector:e=>e.email,sortable:!0}:"role"===e.toLowerCase()?{name:e,wrap:!0,selector:e=>e.Role.role,sortable:!0}:"aksi"===e.toLowerCase()?{name:e,cell:e=>(0,t.jsxs)("div",{className:"flex flex-row justify-around w-full",children:[(0,t.jsx)(n.AWu,{style:{cursor:"pointer"},className:"text-red-500 w-5 h-5",onClick:()=>H(e.Id)}),(0,t.jsx)(c.zmo,{style:{cursor:"pointer",marginRight:"10px"},onClick:()=>P(e.Id),className:"text-blue-500 w-5 h-5"})]}),ignoreRowClick:!0,button:!0}:{name:e,wrap:!0,selector:l=>l[e.toLowerCase()],sortable:!0}),L=async()=>{try{console.log("Fetching users...");let e=await r.Z.get("/users",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Response received:",e.data.data),j(e.data.data),S(e.data.data)}catch(e){console.log("Error fetching users:",e)}},P=e=>{console.log("Edit user:",e),h(!0),D(e)},[B,D]=(0,a.useState)(0),H=e=>{console.log("Delete user:",e),f(!0),D(e)};return(0,a.useEffect)(()=>{L()},[]),(0,a.useEffect)(()=>{},[C]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Z,{isVisibleSmall:e,setIsVisibleSmall:l,onCloseSmall:()=>l(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Tambah User"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(p,{data:L,setVisible:l,isVisible:e})})]})}),(0,t.jsx)(u.Z,{isVisibleSmall:s,setIsVisibleSmall:h,onCloseSmall:()=>h(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit User"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(g,{id:B,data:L,setVisible:h,isVisible:s})})]})}),(0,t.jsx)(m.Z,{isVisibleConfirm:x,setIsVisibleConfirm:f,onCloseConfirm:()=>f(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Delete User"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(N,{id:B,data:L,setVisible:f,isVisible:x})})]})}),(0,t.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,t.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex h-full flex-col",children:(0,t.jsxs)("div",{className:"lg:px-8 px-3 w-full h-full",children:[(0,t.jsxs)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:[(0,t.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Search"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,t.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,t.jsx)("input",{type:"search",onChange:e=>{let{value:l}=e.target;S(w.filter(e=>e.username.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase())||e.Role.role.toLowerCase().includes(l.toLowerCase())))},id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search..."})]}),(0,t.jsx)(d.Z,{onClick:()=>{l(!e)},text:"Tambah User",className:"h-10"})]}),(0,t.jsx)(o.ZP,{columns:z,data:C||[],pagination:!0,responsive:!0,highlightOnHover:!0})]})})})]})}},1641:function(e,l,s){"use strict";var t=s(7437);s(2265);var a=s(3781),r=s(6408);l.Z=e=>{let{text:l,onClick:s,className:o,title:i,tooltip:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{"data-tooltip-id":n,"data-tooltip-content":n,children:(0,t.jsxs)("button",{className:"bg-transparent font-button  outline-2 transition-colors outline-none outline-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold rounded flex items-center gap-1 ".concat(o),type:"button",onClick:s,title:i||"Tambah Data",children:[(0,t.jsx)(a.B8K,{className:"font-bold"})," ",l]})}),(0,t.jsx)(r.u,{id:n,className:"tooltip"})]})}},7702:function(e,l,s){"use strict";var t=s(7437);s(2265),l.Z=e=>{let{text:l,onClick:s,className:a}=e;return(0,t.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(a),type:"button",onClick:s,children:l})}},8079:function(e,l,s){"use strict";var t=s(7437);s(2265),l.Z=e=>{let{text:l,onClick:s,className:a}=e;return(0,t.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(a),type:"button",onClick:s,children:l})}},5447:function(e,l,s){"use strict";var t=s(7437);s(2265),l.Z=e=>{let{text:l,className:s}=e;return(0,t.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(s),type:"submit",children:l})}},4200:function(e,l,s){"use strict";s.d(l,{Z:function(){return i}});var t=s(7437),a=s(2265),r=()=>{let[e,l]=(0,a.useState)(!1);return{modal:{isVisibleConfirm:e,setIsVisibleConfirm:l,onCloseConfirm:()=>l(!1)},visible:e,setVisible:l}},o=s(5097),i=e=>{let{isVisibleConfirm:l,setIsVisibleConfirm:s,onCloseConfirm:a,children:i,title:n,className:c}=e;return r(),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"\n          ".concat(l?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,t.jsx)("div",{onClick:()=>a(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"}),(0,t.jsxs)("div",{className:" h-screen flex lg:w-[50%] w-full  flex-col justify-center ",children:[(0,t.jsx)("div",{onClick:()=>a(),className:"md:h-[50%] h-[50%] w-full"}),(0,t.jsxs)("div",{className:"h-[30%] relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,t.jsxs)("div",{onClick:()=>a(),className:"z-10 h-[10%] flex justify-between items-center p-5 cursor-pointer rounded-md bg-blue-500 text-white w-full ".concat(c),children:[(0,t.jsx)("h2",{className:"text-lg font-bold",children:n}),(0,t.jsx)(o.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,t.jsx)("div",{className:"overflow-y-auto",children:i})]}),(0,t.jsx)("div",{onClick:()=>a(),className:"md:h-[50%]  h-[50%]  w-full"})]}),(0,t.jsx)("div",{onClick:()=>a(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"})]})})}},7107:function(e,l,s){"use strict";s.d(l,{Z:function(){return i}});var t=s(7437),a=s(2265),r=()=>{let[e,l]=(0,a.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:l,onCloseSmall:()=>l(!1)},visible:e,setVisible:l}},o=s(5097),i=e=>{let{isVisibleSmall:l,setIsVisibleSmall:s,onCloseSmall:a,children:i,title:n}=e;return r(),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"\n          ".concat(l?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,t.jsx)("div",{onClick:()=>a(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,t.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,t.jsx)("div",{onClick:()=>a(),className:"md:h-[20%] h-[10%]  w-full"}),(0,t.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,t.jsxs)("div",{onClick:()=>a(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,t.jsx)("h2",{className:"text-lg font-bold",children:n}),(0,t.jsx)(o.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,t.jsx)("div",{className:"overflow-y-auto",children:i})]}),(0,t.jsx)("div",{onClick:()=>a(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,t.jsx)("div",{onClick:()=>a(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},8831:function(e,l,s){"use strict";s.d(l,{wC:function(){return a}});let t=(0,s(1904).oM)({name:"navbar",initialState:{activeRoute:"Dashboard"},reducers:{setActiveRoute:(e,l)=>{console.log("Setting active route:",l.payload),e.activeRoute=l.payload}}}),{setActiveRoute:a}=t.actions;l.ZP=t.reducer},361:function(e,l,s){"use strict";s.d(l,{H:function(){return o}});var t=s(2126);let a="",r=t.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),o=()=>{let e=localStorage.getItem("token");e&&(a=e,r.defaults.headers.common.Authorization="Bearer ".concat(a))};r.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),l.Z=r},4193:function(){},4247:function(){}},function(e){e.O(0,[392,5706,1779,6051,522,7699,2126,6713,9343,9500,6408,6240,2971,7023,1744],function(){return e(e.s=1213)}),_N_E=e.O()}]);