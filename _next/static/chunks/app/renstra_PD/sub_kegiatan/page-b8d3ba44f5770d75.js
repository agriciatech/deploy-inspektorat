(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1335],{5731:function(e,a,t){Promise.resolve().then(t.bind(t,2774))},2774:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return c}});var r=t(7437),s=t(361),l=t(681);t(8677);var n=t(2265);let i=()=>{let[e,a]=(0,n.useState)([]),[t,r]=(0,n.useState)(""),[l,i]=(0,n.useState)([]),[o,d]=(0,n.useState)(""),[c,u]=(0,n.useState)([]),[h,m]=(0,n.useState)([]),[p,x]=(0,n.useState)([]),[f,g]=(0,n.useState)([]),[w,j]=(0,n.useState)([]),[v,b]=(0,n.useState)([]),k=async()=>{try{let e=await s.Z.get("/formulir2/formulir-tujuan-indikator",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});if(200===e.status){let a=e.data.data,t=["KA1","KA2","T1","T2","T3","T4","T5"],r=["No","Indikator Sasaran Perangkat Daerah","Kondisi Akhir","Validasi","Catatan",...t.map(e=>"Tahun ".concat(a[e]))],s=["No","Program","Indikator Program","Target",...t.map(e=>"Tahun ".concat(a[e]))],l=["No","Kegiatan","Aksi",...t.map(e=>"Tahun ".concat(a[e]))];b(["No","Indikator Kegiatan"]),console.log("Updated Header Data:",r),j(r),g(s),x(l)}}catch(e){console.log("Error fetching users:",e)}};return(0,n.useEffect)(()=>{k()},[]),{detailTahun:e,headerDataIndikatorSasaranPD:w,setHeaderDataIndikatorSasaranPD:j,setDetailTahun:a,allSasaran:l,setAllSasaran:i,listSasaranPD:c,setListSasaranPD:u,detailUser:t,headerDataProgram:f,setHeaderDataProgram:g,sasaranSelected:o,setSasaranSelected:d,headerIndikatorSasaran:["No","Indikator Sasaran"],setDetailUser:r,headerSasaranPD:["No","Sasaran Perangkat Daerah"],listProgram:h,setListProgram:m,headerKegiatan:p,headerDataIndikatorKegiatan:v,setHeaderDataIndikatorKegiatan:b}};t(1050);var o=t(4421),d=t(7138);function c(){var e,a;let t=i(),c=async()=>{try{let e=await s.Z.get("/tahun",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t.setDetailTahun(e.data.data)}catch(e){console.log("Error fetching users:",e)}},u=async()=>{try{let e=await s.Z.get("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t.setDetailUser(e.data.name)}catch(e){console.log("Error fetching users:",e)}},h=async()=>{try{let e=await s.Z.get("/Sasaran",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t.setAllSasaran(e.data.data)}catch(e){console.log("Error fetching users:",e)}},m=async()=>{try{let e=await s.Z.get("/formulir7/view/".concat(t.sasaranSelected),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t.setListSasaranPD(e.data.data),t.setListProgram(e.data.program)}catch(e){console.log("Error fetching users:",e)}};console.log("ini saasaran",t.sasaranSelected),(0,n.useEffect)(()=>{c(),u(),h()},[]),(0,n.useEffect)(()=>{m()},[t.sasaranSelected]);let p=e=>{let{data:a}=e,s=t.headerDataIndikatorKegiatan.map((e,a)=>"no"===e.toLocaleLowerCase()?{name:e,wrap:!0,selector:(e,a)=>a+1}:"indikator kegiatan"===e.toLocaleLowerCase()?{name:e,wrap:!0,width:"50%",selector:e=>e.IndikatorKegiatan}:void 0);return(0,r.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,r.jsx)(l.ZP,{columns:s,data:a.IndikatorKegiatan||[],pagination:!0,customStyles:g,responsive:!0})})},x=t.headerDataProgram.map(e=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,width:"5%",cell:(e,a)=>(0,r.jsx)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:(0,r.jsx)("div",{className:"pr-5 ",children:a+1})})};case"program":return{name:e,wrap:!0,width:"20%",cell:e=>(0,r.jsx)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:(0,r.jsx)("div",{className:"pr-5 ",children:e.program})})};case"indikator program":return{name:e,wrap:!0,width:"20%",cell:e=>(0,r.jsx)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:(0,r.jsx)("div",{className:"pr-5 ",children:e.indikator_program})})};case"target":return{name:e,wrap:!0,width:"20%",cell:e=>(0,r.jsx)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:(0,r.jsx)("div",{className:"pr-5 ",children:e.target})})};default:let[a,t,s]=e.split(" ");return{name:(0,r.jsxs)("div",{className:"flex flex-col w-full items-start text-center",children:[(0,r.jsx)("div",{className:"header w-full",children:t}),(0,r.jsxs)("div",{className:"subHeader flex gap-10 justify-between w-full",children:[(0,r.jsx)("div",{className:"tahun text-center w-full",children:"Rp"}),(0,r.jsx)("div",{className:"tahun text-center w-full",children:"Target"})]})]}),wrap:!0,width:"15%",backgroundeColor:"white",cell:e=>{let a=e.ProgramTahunan.find(e=>e.tahun===t);return"Rp"==s?(0,r.jsx)("div",{children:a?a.rp:"-"}):(0,r.jsxs)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"pr-5 ",children:a?(0,o.b)(Number(a.rp)):"-"})," ",(0,r.jsx)("div",{children:a?a.Target:"-"})]})}}}}),f=t.headerIndikatorSasaran.map(e=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,selector:(e,a)=>a+1};case"indikator sasaran":return{name:e,wrap:!0,selector:e=>e.Indikator_sasaran}}}),g={headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},w=e=>{let{data:a}=e,s=t.headerDataIndikatorSasaranPD.map(e=>{if("no"===e.toLocaleLowerCase())return{name:e,wrap:!0,selector:(e,a)=>a+1};if("indikator sasaran perangkat daerah"===e.toLocaleLowerCase())return{name:e,wrap:!0,width:"20%",selector:e=>e.Indikator_sasaran_pd};if("kondisi akhir"===e.toLocaleLowerCase())return{name:e,wrap:!0,width:"10%",selector:e=>e.KondisiAkhir};{if("validasi"===e.toLocaleLowerCase())return{name:e,wrap:!0,cell:e=>(0,r.jsx)("div",{className:"flex flex-row items-center justify-start w-full",children:null===e.Validasi?(0,r.jsx)("div",{className:"p-2 my-2 bg-red-500 rounded-lg text-center text-white",children:"Tidak ada data"}):"".concat(e.Validasi)})};if("catatan"===e.toLocaleLowerCase())return{name:e,wrap:!0,cell:e=>(0,r.jsx)("div",{className:"flex flex-row items-center justify-center w-full",children:null===e.Catatan?(0,r.jsx)("div",{className:"p-2 bg-red-500 rounded-lg text-center text-white",children:"Tidak ada data"}):"".concat(e.Catatan)})};let a=e.replace("Tahun ","");return{name:e,wrap:!0,selector:e=>{let t=e.Tahunan.find(e=>e.tahun===a);return t?(0,r.jsx)("div",{children:t.Target}):"-"}}}});return(0,r.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,r.jsx)(l.ZP,{columns:s,data:a.IndikatorSasaranPD||[],pagination:!0,responsive:!0,customStyles:g})})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,r.jsxs)("div",{className:"mt-[10vh] h-full overflow-y-auto w-full items-center flex justify-start pt-5 px-2 flex-col ",children:[(0,r.jsx)("div",{className:"flex flex-col w-full bg-blue-600 p-3 rounded-xl text-white font-bold",children:(0,r.jsxs)("div",{className:"flex w-full justify-start",children:[" ",(0,r.jsx)("table",{className:"table-auto",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Periode"}),(0,r.jsx)("td",{className:"px-1",children:":"}),t.detailTahun.length>0&&(0,r.jsxs)(r.Fragment,{children:[t.detailTahun[0].tahun," ","s/d"," ",t.detailTahun[t.detailTahun.length-1].tahun]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Perangkat Daerah"}),(0,r.jsx)("td",{className:"",children:":"}),(0,r.jsx)("td",{children:t.detailUser})]})]})})]})}),(0,r.jsx)("div",{className:"mt-5 flex w-full py-2",children:(0,r.jsxs)("select",{id:"sasaranSelect",value:null!==(a=t.sasaranSelected)&&void 0!==a?a:"",className:"bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:e=>{t.setSasaranSelected(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Pilih Sasaran"}),null===(e=t.allSasaran)||void 0===e?void 0:e.map(e=>(0,r.jsx)("option",{value:e.Pk_Sasaran_Id,children:e.Sasaran},e.Pk_Sasaran_Id))]})}),""===t.sasaranSelected?(0,r.jsx)("div",{className:"mt-4 flex justify-start text-white font-medium text-lg items-center w-full bg-yellow-400 h-16 rounded-lg",children:(0,r.jsx)("h1",{className:"pl-5",children:"Silahkan pilih sasaran terlebih dahulu"})}):(0,r.jsxs)("div",{className:"mt-5 w-full py-2 px-5",style:{maxHeight:"800px",overflowY:"scroll"},children:[(0,r.jsx)("div",{className:"w-full rounded-lg",children:(0,r.jsxs)("div",{className:"datatables w-full mt-4 box-shadow-2xl rounded-lg",children:[(0,r.jsx)("span",{className:"font-bold p-2",children:"Sasaran"}),(0,r.jsx)(l.ZP,{columns:f,data:t.listSasaranPD||[],responsive:!0,highlightOnHover:!0,expandableRows:!0,pagination:!0,customStyles:g,expandableRowsComponent:e=>{let{data:a}=e,s=t.headerSasaranPD.map(e=>"no"===e.toLocaleLowerCase()?{name:e,wrap:!0,selector:(e,a)=>a+1}:"sasaran perangkat daerah"===e.toLocaleLowerCase()?{name:e,wrap:!0,selector:e=>e.sasaran_pd}:void 0);return(0,r.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,r.jsx)(l.ZP,{columns:s,data:a.ListSasaranPD||[],pagination:!0,expandableRows:!0,customStyles:g,responsive:!0,expandableRowsComponent:w})})}})]})}),(0,r.jsx)("div",{className:"w-full rounded-lg",children:(0,r.jsxs)("div",{className:"datatables w-full mt-4 box-shadow-2xl rounded-lg",children:[(0,r.jsx)("span",{className:"font-bold p-2",children:"Program"}),(0,r.jsx)(l.ZP,{columns:x,data:t.listProgram||[],responsive:!0,expandableRows:!0,pagination:!0,customStyles:g,expandableRowsComponent:e=>{let{data:a}=e,s=t.headerKegiatan.map((e,a)=>{if("no"===e.toLocaleLowerCase())return{name:e,wrap:!0,selector:(e,a)=>a+1};if("kegiatan"===e.toLocaleLowerCase())return{name:e,wrap:!0,selector:e=>e.Kegiatan};if("aksi"===e.toLocaleLowerCase())return{name:e,wrap:!0,width:"10%",cell:e=>(0,r.jsx)("div",{children:(0,r.jsx)(d.default,{className:"bg-blue-500 px-5 py-2 rounded-md text-white font-semibold",href:"/renstra_PD/sub_kegiatan/detail",onClick:()=>{var a;return localStorage.setItem("detailFormulasi",null===(a=e.Pk_Kegiatan_Id)||void 0===a?void 0:a.toString())},children:"Detail"})})};{let[a,t,s]=e.split(" ");return{name:(0,r.jsxs)("div",{className:"flex flex-col w-full items-start text-center",children:[(0,r.jsx)("div",{className:"header w-full",children:t}),(0,r.jsxs)("div",{className:"subHeader flex gap-10 justify-between w-full",children:[(0,r.jsx)("div",{className:"tahun text-center w-full",children:"Rp"}),(0,r.jsx)("div",{className:"tahun text-center w-full",children:"Target"})]})]}),wrap:!0,width:"20%",backgroundeColor:"white",cell:e=>{var a;let l=null===(a=e.ListDetailInfoIndikatorKegiatanTahun)||void 0===a?void 0:a.find(e=>e.tahun===t);return"Rp"==s?(0,r.jsx)("div",{children:l?null==l?void 0:l.rp:"-"}):(0,r.jsxs)("div",{className:"w-full border-[0.5px] border-slate-200 bg-white h-[103%] px-2 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"pr-5 ",children:l?(0,o.b)(Number(null==l?void 0:l.rp)):"-"})," ",(0,r.jsx)("div",{children:l?null==l?void 0:l.Target:"-"})]})}}}});return(0,r.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,r.jsx)(l.ZP,{columns:s,data:a.kegiatan||[],pagination:!0,expandableRows:!0,customStyles:g,responsive:!0,expandableRowsComponent:p})})}})]})})]})]})})})}},361:function(e,a,t){"use strict";t.d(a,{H:function(){return n}});var r=t(2126);let s="",l=r.Z.create({baseURL:"https://inspektorat-dev.agriciatech.com/api/v1"}),n=()=>{let e=localStorage.getItem("token");e&&(s=e,l.defaults.headers.common.Authorization="Bearer ".concat(s))};l.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=l},4421:function(e,a,t){"use strict";t.d(a,{J:function(){return s},b:function(){return r}});let r=e=>e.toLocaleString("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:2}).replace(/,00$/,""),s=e=>e?parseFloat(e.replace(/[^0-9,-]+/g,"").replace(",",".")):0},8677:function(){},1050:function(){}},function(e){e.O(0,[978,2126,6713,7138,2971,7023,1744],function(){return e(e.s=5731)}),_N_E=e.O()}]);