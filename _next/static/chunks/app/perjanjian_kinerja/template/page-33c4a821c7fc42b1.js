(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9945],{8228:function(e,t,a){Promise.resolve().then(a.bind(a,602))},602:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=a(7437),s=a(2265);let l=()=>{let[e,t]=(0,s.useState)([]),[a,r]=(0,s.useState)("");return{detailTahun:e,setDetailTahun:t,detailUser:a,setDetailUser:r}};var n=a(361),c=()=>{let e=l(),t=async()=>{try{let t=await n.Z.get("/tahun",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});e.setDetailTahun(t.data.data)}catch(e){console.log("Error fetching users:",e)}},a=async()=>{try{let t=await n.Z.get("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});e.setDetailUser(t.data.name)}catch(e){console.log("Error fetching users:",e)}};return(0,s.useEffect)(()=>{t(),a()},[]),(0,r.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,r.jsx)("div",{className:"mt-[10vh] h-full overflow-y-auto w-full items-center flex justify-start pt-5 px-2 flex-col ",children:(0,r.jsx)("div",{className:"flex flex-col w-full bg-blue-600 p-3 rounded-xl text-white font-bold",children:(0,r.jsxs)("div",{className:"flex w-full justify-start",children:[" ",(0,r.jsx)("table",{className:"table-auto",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Periode"}),(0,r.jsx)("td",{className:"px-1",children:":"}),e.detailTahun.length>0&&(0,r.jsxs)(r.Fragment,{children:[e.detailTahun[0].tahun," ","s/d"," ",e.detailTahun[e.detailTahun.length-1].tahun]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Perangkat Daerah"}),(0,r.jsx)("td",{className:"",children:":"}),(0,r.jsx)("td",{children:e.detailUser})]})]})})]})})})})}},361:function(e,t,a){"use strict";a.d(t,{H:function(){return n}});var r=a(2126);let s="",l=r.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),n=()=>{let e=localStorage.getItem("token");e&&(s=e,l.defaults.headers.common.Authorization="Bearer ".concat(s))};l.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=l}},function(e){e.O(0,[2126,2971,7023,1744],function(){return e(e.s=8228)}),_N_E=e.O()}]);