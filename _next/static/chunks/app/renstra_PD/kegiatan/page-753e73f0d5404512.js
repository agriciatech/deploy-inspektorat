(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8664],{9283:function(e,a,t){Promise.resolve().then(t.bind(t,2167))},2167:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var l=t(7437),s=t(2265);let n=()=>{{let e=window.localStorage.getItem("roleId");return null!==e?e:(console.error("roleId tidak tersedia di local storage"),null)}};var r=t(5039),i=t(2546),o=t(6215),c=t(5922),d=e=>{let{onChange:a}=e;localStorage.getItem("roleId");let[t,n,d]=(0,c.Y)("/formulir1/",!1),[u,f]=(0,s.useState)(null),[x,m]=(0,s.useState)(null),[h,j]=(0,s.useState)(null),[p,w]=(0,s.useState)(null),[v,g]=(0,s.useState)(null),[b,N]=(0,s.useState)(),[S,k]=(0,s.useState)(),[y,I]=(0,s.useState)();(0,s.useEffect)(()=>{if(void 0!==h&&P){var e;let a=null===(e=P.ListTujuan)||void 0===e?void 0:e.find(e=>e.Pk_Tujuan_Id===h);k(null==a?void 0:a.list_kondisi_indikator_tujuan)}if(void 0!==p&&h){let e=null==S?void 0:S.find(e=>e.PK_Indikator_Tujuan_Id===p);I(null==e?void 0:e.ListSasaran)}void 0!==v&&console.log("sasaran ID",v)},[u,x,h,p,y,v]);let[P,_,T]=(0,r.c)("/formulir4/view/".concat(x),!1);console.log("form 4",P);let D=(e,l)=>{let s=parseInt(e.target.value,10);if("visi"===l){f(s);let e=null==t?void 0:t.find(e=>e.id_visi===s);N(e&&e.misis||[]),a(s,l)}else"misi"===l?(m(s),a(s,l)):"tujuan"===l?(j(s),a(s,l)):"indikator_tujuan"===l?(w(s),a(s,l)):"sasaran_indikator_tujuan"===l&&(g(s),a(s,l))};return(0,l.jsxs)("div",{className:"flex gap-3 ",children:[(0,l.jsx)(o.Z,{dataComponent:(0,l.jsx)(i.Z,{options:t,optionLabel:e=>e.visi,optionValue:e=>e.id_visi,onChange:e=>D(e,"visi"),defaultText:"Pilih Visi"}),text:"Memuat Data Visi...",error:d,loading:n}),(0,l.jsx)(o.Z,{dataComponent:(0,l.jsx)(i.Z,{disabled:!u,options:b,optionLabel:e=>e.misi,optionValue:e=>e.id_misi,onChange:e=>D(e,"misi"),defaultText:"Pilih Misi"}),text:"Memuat Data Misi...",error:d,loading:n}),(0,l.jsx)(o.Z,{dataComponent:(0,l.jsx)(i.Z,{disabled:!x,options:null==P?void 0:P.ListTujuan,optionLabel:e=>e.tujuan,optionValue:e=>e.Pk_Tujuan_Id,onChange:e=>D(e,"tujuan"),defaultText:"Pilih Tujuan"}),text:"Memuat Data Tujuan...",error:d,loading:n}),(0,l.jsx)(o.Z,{dataComponent:(0,l.jsx)(i.Z,{disabled:!h,options:S,optionLabel:e=>e.indikator_tujuan,optionValue:e=>e.PK_Indikator_Tujuan_Id,onChange:e=>D(e,"indikator_tujuan"),defaultText:"Pilih Indikator Tujuan"}),text:"Memuat Data Indikator Tujuan...",error:d,loading:n}),(0,l.jsx)(o.Z,{dataComponent:(0,l.jsx)(i.Z,{disabled:!p,options:y,optionLabel:e=>e.Sasaran,optionValue:e=>e.Pk_Sasaran_Id,onChange:e=>D(e,"sasaran_indikator_tujuan"),defaultText:"Pilih Sasaran Indikator Tujuan"}),text:"Memuat Data Sasaran Indikator Tujuan...",error:d,loading:n})]})};t(8677);var u=t(681),f=t(361),x=t(4421),m=()=>{var e,a;let[t,i]=(0,s.useState)(""),[o,c]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=n();null!==e&&(i(e),c(!o))},[]);let[m,h,j]=(0,r.c)("/users/22",!1,1e3,o),[p,w]=(0,s.useState)(null),[v,g,b]=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],[l,n]=(0,s.useState)(),[r,i]=(0,s.useState)(!1),[o,c]=(0,s.useState)(null),[d,u]=(0,s.useState)();(0,s.useEffect)(()=>{null!=t&&u(t)},[t]);let x=async()=>{try{let a=localStorage.getItem("token"),t=(await f.Z.get(e,{headers:{Authorization:"Bearer ".concat(a)}})).data;n(t)}catch(e){c(e)}finally{i(!1)}};return(0,s.useEffect)(()=>{x()},[d,e]),(0,s.useEffect)(()=>{if(a){let e=setInterval(x,5e3);return()=>clearInterval(e)}},[x,a]),[l,r,o]}("/formulir6/view/".concat(p),!1,o);console.log("core 6 ggg",v);let N={headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},S=[{name:"Nomor",selector:(e,a)=>(null!=a?a:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Indikator Sasaran",selector:e=>e.Indikator_sasaran_pd,sortable:!0,wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center ",children:[(0,l.jsx)("div",{className:"header w-full",children:"Target Capaian Kerja"}),(0,l.jsxs)("div",{className:"subHeader flex gap-3 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2022"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2023"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2024"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2025"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2026"})]})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-5 justify-between items-start  w-full text-center ",children:e.Tahunan.slice(2).map((e,a)=>(0,l.jsx)("div",{className:"flex flex-col text-center justify-end items-center w-full",children:(0,l.jsx)("div",{className:"w-full",children:e.Target})},a))}),width:"50%",wrap:!0}],k=[{name:"Nomor",selector:(e,a)=>(null!=a?a:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Indikator Sasaran",selector:e=>e.Indikator_sasaran,sortable:!0,wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center ",children:[(0,l.jsx)("div",{className:"header w-full",children:"Target Capaian Kerja"}),(0,l.jsxs)("div",{className:"subHeader flex gap-3 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2022"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2023"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2024"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2025"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2026"})]})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-5 justify-between items-start  w-full text-center ",children:e.KondisiIndikator.kondisi.slice(2).map((e,a)=>(0,l.jsx)("div",{className:"flex flex-col text-center justify-end items-center w-full",children:(0,l.jsx)("div",{className:"w-full",children:e.Target})},a))}),width:"50%",wrap:!0}],y=[{name:"Nomor",selector:(e,a)=>(null!=a?a:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Program",selector:e=>e.Program,sortable:!0,wrap:!0},{name:"Indikator Program",selector:e=>e.IndikatorProgram,sortable:!0,wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center",children:[(0,l.jsx)("div",{className:"header w-full",children:"Kondisi Awal"}),(0,l.jsxs)("div",{className:"subHeader flex gap-3 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun w-full",children:"2020"}),(0,l.jsx)("div",{className:"tahun w-full",children:"2021"})]})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-3 justify-between items-start  w-full text-center",children:e.ProgramTahunan.slice(0,2).map((e,a)=>(0,l.jsx)("div",{className:"w-full",children:e.Target},a))}),width:"15%",wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center ",children:[(0,l.jsx)("div",{className:"header w-full",children:"Target Capaian Kerja"}),(0,l.jsxs)("div",{className:"subHeader flex gap-3 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2022"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2023"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2024"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2025"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2026"})]})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-3 justify-between items-start  w-full text-center",children:e.ProgramTahunan.slice(2).map((e,a)=>(0,l.jsx)("div",{className:"flex flex-col text-center justify-end items-center w-full",children:(0,l.jsx)("div",{className:"w-full",children:(0,x.b)(Number(e.Rp))})},a))}),width:"50%",wrap:!0}],I=[{name:"Tahunr",selector:(e,a)=>e.Tahun,sortable:!0,wrap:!0,width:"10%"},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center ",children:[(0,l.jsx)("div",{className:"header w-full",children:"Target Capaian Kerja"}),(0,l.jsxs)("div",{className:"subHeader flex gap-3 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2022"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2023"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2024"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2025"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"2026"})]})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-3 justify-between items-start  w-full text-center",children:e.Target}),width:"50%",wrap:!0}];return(0,l.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3",children:(0,l.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full gap-3",children:[(0,l.jsxs)("div",{className:"information flex flex-col w-full bg-blue-600 p-3 rounded-xl text-white font-bold",children:[(0,l.jsxs)("div",{className:"periode flex w-full",children:[(0,l.jsx)("p",{className:"w-[20%]",children:"Periode"}),(0,l.jsx)("p",{className:"",children:": "}),(0,l.jsx)("p",{className:"px-2",children:"2020 s/d 2026"})]}),(0,l.jsxs)("div",{className:"periode flex w-full",children:[(0,l.jsx)("p",{className:"w-[20%]",children:"Perangkat Daerah"}),(0,l.jsx)("p",{className:"",children:": "}),(0,l.jsx)("p",{className:"px-2",children:null==m?void 0:m.name})]})]}),(0,l.jsx)("div",{className:"flex flex-col select-area bg-success w-full mb-5",children:(0,l.jsx)(d,{onChange:(e,a)=>{"sasaran_indikator_tujuan"===a&&(console.log("sasaran",e),w(e))}})}),v?(0,l.jsxs)("div",{className:"w-full rounded-lg",children:[(0,l.jsxs)("section",{className:"datatables w-full mt-4 box-shadow-2xl rounded-lg",children:[(0,l.jsx)("span",{className:"font-bold p-2",children:"Sasaran"}),(0,l.jsx)(u.ZP,{columns:k,data:null!==(e=null==v?void 0:v.data)&&void 0!==e?e:[],expandableRows:!0,responsive:!0,pagination:!0,customStyles:N,expandableRowsComponent:e=>{let{data:a}=e;return(0,l.jsx)("div",{className:"w-full p-5 pr-0",children:(null==a?void 0:a.ListSasaranPD)&&a.ListSasaranPD.length>0?a.ListSasaranPD.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"font-bold py-2 ",children:["Nama Sasaran PD : ",e.Sasaran_pd]}),(0,l.jsx)(u.ZP,{columns:S,data:(null==e?void 0:e.ListIndikatorSasaranPD)?e.ListIndikatorSasaranPD:[],customStyles:N,expandableRows:!0,expandableRowsComponent:e=>{let{data:a}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("h1",{children:"tetst"})})},responsive:!0,pagination:!0,noDataComponent:"No data available for Kondisi Indikator Sasaran PD"})]},a)):(0,l.jsx)("p",{children:"No Sasaran PD available"})})},noDataComponent:"No data available for Tujuan"})]}),(0,l.jsxs)("section",{className:"datatables w-full mt-4 box-shadow-2xl rounded-lg",children:[(0,l.jsx)("span",{className:"font-bold p-2",children:"Program"}),(0,l.jsx)(u.ZP,{columns:y,data:null!==(a=null==v?void 0:v.program)&&void 0!==a?a:[],expandableRows:!0,responsive:!0,pagination:!0,customStyles:N,expandableRowsComponent:e=>{var a;let{data:t}=e;return(0,l.jsx)("div",{className:"w-full p-5 pr-0",children:(null==t?void 0:t.ProgramTahunan)&&t.ProgramTahunan.length>0?(0,l.jsx)(u.ZP,{columns:I,data:null!==(a=t.ProgramTahunan)&&void 0!==a?a:[],customStyles:N,responsive:!0,pagination:!0,noDataComponent:"No data available for Kondisi Indikator Sasaran PD"}):(0,l.jsx)("p",{children:"No Sasaran PD available"})})}})]})]}):(0,l.jsx)("div",{className:"bg-yellow-500 p-6 rounded-lg text-white text-md font-bold w-full",children:"Data Kosong Atau Silakan pilih Pilihan diatas"})]})})}},6215:function(e,a,t){"use strict";var l=t(7437);t(2265),a.Z=e=>{let{loading:a,error:t,dataComponent:s,text:n}=e;return(0,l.jsx)(l.Fragment,{children:a?(0,l.jsx)("div",{className:"bg-slate-500 h-full min-h-[300px] text-white animate-pulse w-full text-sm p-2 rounded-lg flex justify-center items-center text-center mb-5",children:n||"Loading Data..."}):t?(0,l.jsxs)("div",{className:"text-red-700 font-bold text-lg",children:["Error: ",t.message]}):(0,l.jsx)(l.Fragment,{children:s})})}},2546:function(e,a,t){"use strict";var l=t(7437);t(2265),a.Z=e=>{let{options:a,optionLabel:t,optionValue:s,onChange:n,defaultValue:r="",defaultText:i="Pilih ...",disabled:o,className:c,label:d}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,l.jsx)("label",{htmlFor:i,children:d}),(0,l.jsxs)("select",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ".concat(c),onChange:n,defaultValue:r,disabled:o,id:i,children:[(0,l.jsx)("option",{value:"",disabled:!0,id:i,children:i}),null==a?void 0:a.map(e=>(0,l.jsx)("option",{value:s(e),children:t(e)},s(e)))]})]})}},361:function(e,a,t){"use strict";t.d(a,{H:function(){return r}});var l=t(2126);let s="",n=l.Z.create({baseURL:"https://inspektorat-dev.agriciatech.com/api/v1"}),r=()=>{let e=localStorage.getItem("token");e&&(s=e,n.defaults.headers.common.Authorization="Bearer ".concat(s))};n.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=n},5922:function(e,a,t){"use strict";t.d(a,{Y:function(){return n}});var l=t(2265),s=t(361);function n(e,a,t){let[n,r]=(0,l.useState)([]),[i,o]=(0,l.useState)(!0),[c,d]=(0,l.useState)(null),[u,f]=(0,l.useState)();(0,l.useEffect)(()=>{null!=t&&f(t)},[t]);let x=async()=>{o(!0);try{let a=localStorage.getItem("token"),t=await s.Z.get(e,{headers:{Authorization:"Bearer ".concat(a)}});r(t.data.data),d(null)}catch(e){d(e)}finally{o(!1)}};return(0,l.useEffect)(()=>{if(a){let e=setInterval(x,1e3);return()=>{clearInterval(e)}}x()},[e,a]),(0,l.useEffect)(()=>{x()},[u]),[n,i,c]}},5039:function(e,a,t){"use strict";t.d(a,{c:function(){return n}});var l=t(2265),s=t(361);function n(e,a,t,n){let[r,i]=(0,l.useState)(),[o,c]=(0,l.useState)(!0),[d,u]=(0,l.useState)(null),[f,x]=(0,l.useState)();(0,l.useEffect)(()=>{null!=n&&x(n)},[n]);let m=async()=>{try{let a=localStorage.getItem("token"),t=await s.Z.get(e,{headers:{Authorization:"Bearer ".concat(a)}}),l=t.data.data?t.data.data:t.data;i(l),console.log(r)}catch(e){u(e)}finally{c(!1)}};return(0,l.useEffect)(()=>{m()},[f,e]),(0,l.useEffect)(()=>{if(a){let e=setInterval(m,t);return console.log("datasss",r),()=>clearInterval(e)}},[m,a]),[r,o,d]}},4421:function(e,a,t){"use strict";t.d(a,{J:function(){return s},b:function(){return l}});let l=e=>e.toLocaleString("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:2}).replace(/,00$/,""),s=e=>e?parseFloat(e.replace(/[^0-9,-]+/g,"").replace(",",".")):0},8677:function(){}},function(e){e.O(0,[1574,2126,6713,2971,7023,1744],function(){return e(e.s=9283)}),_N_E=e.O()}]);