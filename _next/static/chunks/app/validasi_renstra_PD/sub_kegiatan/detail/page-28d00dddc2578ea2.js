(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3682],{5307:function(e,a,t){Promise.resolve().then(t.bind(t,6811))},6811:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var l=t(7437),i=t(361),s=t(681),n=t(710),r=t(4421),d=t(6356),o=t(2265);let c=()=>{let[e,a]=(0,o.useState)([]),[t,l]=(0,o.useState)([]),[s,n]=(0,o.useState)([]),[r,d]=(0,o.useState)(0),[c,u]=(0,o.useState)(0),[h,m]=(0,o.useState)(0),[x,g]=(0,o.useState)(0),[f,b]=(0,o.useState)([]),[p,w]=(0,o.useState)(0),[j,v]=(0,o.useState)([]),[S,k]=(0,o.useState)([]);console.log("subKegitanEdit",f);let[N,K]=(0,o.useState)([]),[y,I]=(0,o.useState)(!1),[C,V]=(0,o.useState)(!1),[D,E]=(0,o.useState)(!1),[T,A]=(0,o.useState)(""),[F,R]=(0,o.useState)(!1),[Z,L]=(0,o.useState)(!1),[_,z]=(0,o.useState)(!1),B=async()=>{try{let e=await i.Z.get("/formulir2/formulir-tujuan-indikator",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});if(200===e.status){let t=e.data.data,i=["KA1","KA2","T1","T2","T3","T4","T5"],s=["Kegiatan",...i.map(e=>"Tahun ".concat(t[e]))],r=["No","Sub Kegiatan",...i.map(e=>"Tahun ".concat(t[e]))];K(r),n(["No","Indikator Sub Kegiatan","Aksi","Validasi","Catatan"]),l(s),a(["No","Indikator Kegiatan"])}}catch(e){console.log("Error fetching users:",e)}};return(0,o.useEffect)(()=>{B()},[]),{headerDataIndikatorKegiatan:e,setHeaderDataIndikatorKegiatan:a,kegiatan:j,setKegiatan:v,isVisibleAddIndikatorSubKegiatan:_,setIsVisibleAddIndikatorSubKegiatan:z,isVisibleEditSubKegiatan:Z,nomor:p,setNomor:w,setIsVisibleEditSubKegiatan:L,handleAddIndikatorSubKegiatan:e=>{z(!0),u(e)},isVisibleAddSubKegiatan:y,idSubKegiatan:c,setIdSubKegiatan:u,setIsVisibleAddSubKegiatan:I,idIndikatorKegiatan:r,setIdIndikatorKegiatan:d,subKegitanEdit:f,setSubKegiatanEdit:b,handleAddSubKegiatan:e=>{I(!0),g(e)},handleEditSubKegiatan:e=>{L(!0),u(e)},subKegiatan:S,idKegiatan:x,setIdKegiatan:g,headerDataKegiatan:t,isVisibleDeleteIndikatorSubKegiatan:C,setIsVisibleDeleteIndikatorSubKegiatan:V,setHeaderDataKegiatan:l,isVisibleEditIndikatorSubKegiatan:D,setIsVisibleEditIndikatorSubKegiatan:E,setSubKegiatan:k,headerDataIndikatorSubKegiatan:s,dataIndikatorSubKegiatan:T,setDataIndikatorSubKegiatan:A,handleDeleteIndikatorSubKegiatan:e=>{V(!0),m(e)},handleEditIndikatorSubKegiatan:e=>{E(!0),m(e)},headerDataSubKegiatan:N,setHeaderDataIndikatorSubKegiatan:n,isVisibleDeleteSubKegiatan:F,idIndikatorSubKegiatan:h,setIndikatorIdSubKegiatan:m,setIsVisibleDeleteSubKegiatan:R,handleDeleteSubKegiatan:e=>{R(!0),u(e)}}};var u=t(5447),h=t(9343),m=t(3580);t(4193),t(3519);let x=e=>{let{register:a,handleSubmit:t,formState:{errors:s},reset:n,setValue:r}=(0,h.cI)({defaultValues:{}});console.log("idKegiatan",e.idSubKegiatan),console.log("data edit",e.updated),(0,o.useEffect)(()=>{console.log("data edit",e.updated)},[e.idSubKegiatan,r]);let d=(0,o.useRef)(null),[c,x]=(0,o.useState)(""),g=async a=>{let{Validasi:t,Catatan:l,IndikatorSubKegiatanId:s}=a;try{let a=await i.Z.put("formulir7/indikator",{IndikatorSubKegiatanId:e.idSubKegiatan,Validasi:t,Catatan:l},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("response",a.status),200===a.status&&(x(""),e.data(),m.Am.success("Data Sub Kegiatan Berhasil Diperbarui!",{position:"top-right"}),e.setVisible(!1),n())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";x(e),m.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal menambahkan Sub Kegiatan!";x(e),m.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let a="Gagal membuat Sub Kegiatan!,  ".concat(e.message);x(a),m.Am.error(a,{position:"top-right"})}}};return(0,o.useEffect)(()=>{d.current&&d.current.focus()},[]),(0,o.useEffect)(()=>{e.isVisible||n()},[e.isVisible,n]),(0,l.jsx)("div",{className:"w-full h-full  px-4",children:(0,l.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:t(g),children:[(0,l.jsxs)("div",{className:"flex flex-col flex-col-row",children:[(0,l.jsx)("label",{htmlFor:"Validasi",className:"block mb-1 required",children:"Validasi"}),(0,l.jsxs)("select",{id:"Validasi",...a("Validasi",{required:!0}),className:"py-2 border border-slate-300 rounded-lg",children:[(0,l.jsx)("option",{value:"",children:"Pilih Status"}),(0,l.jsx)("option",{value:"1",children:"Validasi"}),(0,l.jsx)("option",{value:"0",children:"Belum Validasi"})]}),s.Validasi&&(0,l.jsx)("span",{className:"text-red-500",children:"Field ini diperlukan"}),(0,l.jsx)("label",{htmlFor:"Validasi",className:"block mb-1 required",children:"Catatan"}),(0,l.jsx)("input",{id:"Catatan",type:"text",placeholder:"Fill your catatan",...a("Catatan",{required:!0}),className:"py-2 border border-slate-300 rounded-lg"}),s.Catatan&&(0,l.jsx)("span",{className:"text-red-500",children:"Field ini diperlukan"})]}),(0,l.jsx)("div",{className:"py-5 flex flex-col",children:(0,l.jsx)(u.Z,{text:"Tambah Validasi Sub Kegiatan",className:"h-10"})})]})})};function g(){var e,a;let t=localStorage.getItem("detailFormulasi"),u=c(),h={headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},m=async()=>{try{let e=await i.Z.get("/formulir7/detail-head/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});u.setKegiatan([e.data.data]),console.log(e.data.data)}catch(e){console.log("Error fetching users:",e)}},g=async()=>{try{let e=await i.Z.get("/formulir7/detail-body/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});u.setSubKegiatan(e.data.data),console.log(e.data.data)}catch(e){console.log("Error fetching users:",e)}},f=null==u?void 0:null===(e=u.headerDataKegiatan)||void 0===e?void 0:e.map(e=>{if("kegiatan"===e.toLowerCase())return{name:e,wrap:!0,selector:e=>e.Kegiatan};{let[a,t,i]=e.split(" ");return{name:(0,l.jsxs)("div",{className:"flex flex-col w-full items-start text-center",children:[(0,l.jsx)("div",{className:"header w-full",children:t}),(0,l.jsxs)("div",{className:"subHeader flex gap-10 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"Rp"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"Target"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"Case"})]})]}),wrap:!0,width:"300px",backgroundColor:"white",cell:e=>{var a;let s=null===(a=e.ListDetailInfoIndikatorKegiatanTahun)||void 0===a?void 0:a.find(e=>e.tahun===t);return"Rp"===i?(0,l.jsx)("div",{children:s?s.rp:"-"}):(0,l.jsxs)("div",{className:"w-full bg-white h-[90%] flex px-2 items-center justify-between",children:[(0,l.jsx)("div",{className:"pr-5 ",children:s?(0,r.b)(Number(s.rp)):"-"}),(0,l.jsx)("div",{children:s?s.Target:"-"}),(0,l.jsx)("div",{children:s?s.Case:"-"})]})}}}}),b=null==u?void 0:null===(a=u.headerDataSubKegiatan)||void 0===a?void 0:a.map(e=>{let a=e=>{console.log("Selected Indikator Sasaran PD:",e),u.setSubKegiatanEdit([e])};switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,selector:(e,a)=>a+1};case"sub kegiatan":return{name:e,wrap:!0,width:"250px",selector:e=>e.SubKegiatan};case"aksi":return{name:e,wrap:!0,cell:(e,t)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.zmo,{onClick:()=>{u.handleEditSubKegiatan(e.Pk_Sub_Kegiatan_Id),a(e)},className:"text-blue-500  h-6 w-10"})})};default:let[t,i,s]=e.split(" ");return{name:(0,l.jsxs)("div",{className:"flex flex-col w-full items-start text-center",children:[(0,l.jsx)("div",{className:"header w-full",children:i}),(0,l.jsxs)("div",{className:"subHeader flex gap-10 justify-between w-full",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:"Rp"}),(0,l.jsx)("div",{className:"tahun text-center w-full",children:"Target"})]})]}),wrap:!0,width:"300px",backgroundeColor:"white",cell:e=>{var a;let t=null===(a=e.TahunDetailSubKegiatan)||void 0===a?void 0:a.find(e=>e.Tahun===i);return"Rp"==s?(0,l.jsx)("div",{children:t?t.Rp:"-"}):(0,l.jsxs)("div",{className:"w-full  bg-white h-[90%]   flex text-center items-center justify-around",children:[(0,l.jsx)("div",{className:"pr-5 ",children:t?(0,r.b)(Number(t.Rp)):"-"})," ",(0,l.jsx)("div",{children:t?t.Target:"-"})]})}}}});return(0,o.useEffect)(()=>{m(),g()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{isVisibleSmall:u.isVisibleEditIndikatorSubKegiatan,setIsVisibleSmall:u.setIsVisibleEditIndikatorSubKegiatan,onCloseSmall:()=>u.setIsVisibleEditIndikatorSubKegiatan(!1),children:(0,l.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,l.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Tambah Validasi Indikator Sub Kegiatan"}),(0,l.jsx)("div",{className:"w-full h-full ",children:(0,l.jsx)(x,{data:g,updated:u.subKegitanEdit,idSubKegiatan:u.idIndikatorSubKegiatan,setVisible:u.setIsVisibleEditSubKegiatan,isVisible:u.isVisibleEditIndikatorSubKegiatan})})]})}),(0,l.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,l.jsxs)("div",{className:"mt-[10vh] h-full overflow-y-auto w-full items-center flex justify-start pt-5 px-2 flex-col",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col",children:[(0,l.jsx)("h1",{className:"font-medium p-3 ",children:"Data Kegiatan"}),(0,l.jsx)(s.ZP,{columns:f,data:u.kegiatan||[],responsive:!0,expandableRows:!0,expandableRowsComponent:e=>{let{data:a}=e,t=u.headerDataIndikatorKegiatan.map((e,a)=>"no"===e.toLocaleLowerCase()?{name:e,wrap:!0,selector:(e,a)=>a+1}:"indikator kegiatan"===e.toLocaleLowerCase()?{name:e,wrap:!0,selector:e=>e.IndikatorKegiatan}:void 0);return(0,l.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,l.jsx)(s.ZP,{columns:t,data:a.ListDetailIndikatorKegiatan||[],pagination:!0,customStyles:h,responsive:!0})})},customStyles:h})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col",children:[(0,l.jsx)("h1",{className:"font-medium p-3 ",children:"Data Sub Kegiatan"}),(0,l.jsx)(s.ZP,{columns:b,data:u.subKegiatan||[],responsive:!0,customStyles:h,expandableRowsComponent:e=>{let{data:a}=e,t=u.headerDataIndikatorSubKegiatan.map(e=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,width:"25%",selector:(e,a)=>a+1};case"indikator sub kegiatan":return{name:e,wrap:!0,selector:e=>e.IndikatorSubKegiatan,sortable:!0,width:"25%"};case"validasi":return{name:e,wrap:!0,width:"25%",cell:e=>(0,l.jsx)("div",{className:"flex flex-row items-start justify-start text-center w-full",children:1==e.Validasi?(0,l.jsx)("div",{className:"p-2 bg-green-500 rounded-lg text-white",children:"Sudah Divalidasi"}):1!=e.Validasi&&null!=e.Catatan?(0,l.jsx)("div",{className:"p-2 bg-red-500 rounded-lg text-white",children:"Data Belum Divalidasi Dengan Catatan"}):(0,l.jsx)("div",{className:"p-2 bg-red-500 rounded-lg text-white",children:"Data Belum Divalidasi"})})};case"catatan":return{name:e,wrap:!0,width:"25%",cell:e=>(0,l.jsx)("div",{className:"flex flex-row items-center justify-start w-full",children:null===e.Catatan?(0,l.jsx)("div",{className:"p-2 bg-red-500 rounded-lg text-white",children:"Tidak ada data"}):"".concat(e.Catatan)})};case"aksi":return{name:e,wrap:!0,sortable:!0,width:"25%",cell:(e,a)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.zmo,{onClick:()=>{u.handleEditIndikatorSubKegiatan(e.Pk_Indikator_Sub_Kegiatan),u.setDataIndikatorSubKegiatan(e.IndikatorSubKegiatan)},className:"text-blue-500  h-6 w-10"})})}}});return(0,l.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,l.jsx)(s.ZP,{columns:t,data:a.IndikatorSubKegiatan||[],pagination:!0,customStyles:h,responsive:!0})})},expandableRows:!0})]})]})})]})}},5447:function(e,a,t){"use strict";var l=t(7437);t(2265),a.Z=e=>{let{text:a,className:t}=e;return(0,l.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(t),type:"submit",children:a})}},6409:function(e,a,t){"use strict";var l=t(2265);a.Z=()=>{let[e,a]=(0,l.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:a,onCloseSmall:()=>a(!1)},visible:e,setVisible:a}}},710:function(e,a,t){"use strict";var l=t(7437),i=t(6409),s=t(5097);a.Z=e=>{let{isVisibleSmall:a,setIsVisibleSmall:t,onCloseSmall:n,children:r,title:d}=e;return(0,i.Z)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,l.jsx)("div",{onClick:()=>n(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,l.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,l.jsx)("div",{onClick:()=>n(),className:"md:h-[20%] h-[10%]  w-full"}),(0,l.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,l.jsxs)("div",{onClick:()=>n(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:d}),(0,l.jsx)(s.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,l.jsx)("div",{className:"overflow-y-auto",children:r})]}),(0,l.jsx)("div",{onClick:()=>n(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,l.jsx)("div",{onClick:()=>n(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,a,t){"use strict";t.d(a,{H:function(){return n}});var l=t(2126);let i="",s=l.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),n=()=>{let e=localStorage.getItem("token");e&&(i=e,s.defaults.headers.common.Authorization="Bearer ".concat(i))};s.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=s},4421:function(e,a,t){"use strict";t.d(a,{J:function(){return i},b:function(){return l}});let l=e=>e.toLocaleString("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:2}).replace(/,00$/,""),i=e=>e?parseFloat(e.replace(/[^0-9,-]+/g,"").replace(",",".")):0},4193:function(){},3519:function(){}},function(e){e.O(0,[7679,5706,6051,2126,6713,9343,9500,2971,7023,1744],function(){return e(e.s=5307)}),_N_E=e.O()}]);