(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8219],{6225:function(e,t,a){Promise.resolve().then(a.bind(a,9542))},9542:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),o=a(681),c=a(2265),s=()=>{let[e,t]=(0,c.useState)([]),[a,r]=(0,c.useState)([]),[o,s]=(0,c.useState)(!1),[n,l]=(0,c.useState)(!1),[i,d]=(0,c.useState)(!1),[u,h]=(0,c.useState)(!1);return{headerData:["No","Nama OPD","Menu","Create","Edit","Delete","View"],dataTable:e,setDataTable:t,record:a,setRecord:r,viewChecked:o,setViewChecked:s,createChecked:n,setCreateChecked:l,editChecked:i,setEditChecked:d,deleteChecked:u,setDeleteChecked:h}},n=a(361),l=()=>{let e=s(),t=e.headerData.map(t=>{let o="auto";if(t.length>15&&(o="".concat(8*t.length,"px")),"id"===t.toLocaleLowerCase())return{name:t,wrap:!0,selector:e=>e.Id};if("no"===t.toLocaleLowerCase())return{name:t,wrap:!0,selector:(e,t)=>t+1,sortable:!0,width:o};if("nama opd"===t.toLowerCase())return{name:t,wrap:!0,selector:e=>e.Role.role,sortable:!0,width:o};if("menu"===t.toLowerCase())return{name:t,wrap:!0,selector:e=>e.Menu.menu,sortable:!0,width:o};if("view"===t.toLowerCase())return{name:t,cell:t=>(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:1===t.viewed,onClick:()=>a(t.Id),onChange:()=>e.setViewChecked(1===t.viewed)})}),width:o};if("create"===t.toLowerCase())return{name:t,cell:t=>(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:1===t.created,onClick:()=>l(t.Id),onChange:()=>e.setCreateChecked(1===t.created)})}),width:o};if("edit"===t.toLowerCase())return{name:t,cell:t=>(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:1===t.updated,onClick:()=>i(t.Id),onChange:()=>e.setEditChecked(1===t.created)})}),width:o};else if("delete"===t.toLowerCase())return{name:t,cell:t=>(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:1===t.deleted,onClick:()=>d(t.Id),onChange:()=>e.setDeleteChecked(1===t.deleted)})}),width:o}}),a=async t=>{let a=!e.viewChecked;e.setViewChecked(a);try{let e=await n.Z.put("/rolemenus/".concat(t),{viewed:a?1:0},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200==e.status&&u(),console.log(e)}catch(e){console.error(e)}},l=async t=>{let a=!e.createChecked;e.setViewChecked(a);try{let e=await n.Z.put("/rolemenus/".concat(t),{created:a?1:0},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200==e.status&&u(),console.log(e)}catch(e){console.error(e)}},i=async t=>{let a=!e.editChecked;e.setEditChecked(a);try{let e=await n.Z.put("/rolemenus/".concat(t),{updated:a?1:0},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200==e.status&&u(),console.log(e)}catch(e){console.error(e)}},d=async t=>{let a=!e.deleteChecked;e.setViewChecked(a);try{let e=await n.Z.put("/rolemenus/".concat(t),{deleted:a?1:0},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200==e.status&&u(),console.log(e)}catch(e){console.error(e)}},u=async()=>{try{let t=await n.Z.get("/rolemenus/all",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});e.setDataTable(t.data.data),e.setRecord(t.data.data)}catch(e){console.log("Error fetching users:",e)}};return(0,c.useEffect)(()=>{u()},[]),(0,c.useEffect)(()=>{},[e.record]),(0,r.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0  ",children:(0,r.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex h-full flex-col ",children:(0,r.jsxs)("div",{className:"lg:px-8 px-3 w-full h-full",children:[(0,r.jsxs)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:[(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Search"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,r.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,r.jsx)("input",{type:"search",onChange:t=>{let{value:a}=t.target,r=e.dataTable.filter(e=>e.Role.role.toLowerCase().includes(a.toLowerCase()));e.setRecord(r)},id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search..."})]})]}),(0,r.jsx)(o.ZP,{columns:t,data:e.record,pagination:!0,subHeaderComponent:!0,responsive:!0,highlightOnHover:!0})]})})})}},361:function(e,t,a){"use strict";a.d(t,{H:function(){return s}});var r=a(2126);let o="",c=r.Z.create({baseURL:"https://inspektorat-dev.agriciatech.com/api/v1"}),s=()=>{let e=localStorage.getItem("token");e&&(o=e,c.defaults.headers.common.Authorization="Bearer ".concat(o))};c.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=c}},function(e){e.O(0,[2126,6713,2971,7023,1744],function(){return e(e.s=6225)}),_N_E=e.O()}]);