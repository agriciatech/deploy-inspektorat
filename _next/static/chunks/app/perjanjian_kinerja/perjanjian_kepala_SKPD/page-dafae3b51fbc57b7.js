(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3923],{2189:function(e,a,t){Promise.resolve().then(t.bind(t,1341))},1341:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var s=t(7437),l=t(2265);let r=()=>{let[e,a]=(0,l.useState)([]),[t,s]=(0,l.useState)(""),[r,n]=(0,l.useState)([]),[i,o]=(0,l.useState)(["No","Sasaran Perangkat Daerah"]),[d,c]=(0,l.useState)(["No","Indikator Sasaran Perangkat Daerah","Target"]),[u,h]=(0,l.useState)("2020"),[m,b]=(0,l.useState)([]),[p,x]=(0,l.useState)(!1),[f,j]=(0,l.useState)(!1);return{detailTahun:e,popUpEdit:f,setPopUpEdit:j,popUpAdd:p,setPopUpAdd:x,dataPejabat:m,setDataPejabat:b,dataTable:r,setDataTable:n,headerDataSasaranPD:i,headerDataIndikatorSasaranPD:d,setHeaderDataIndikatorSasaranPD:c,setHeaderDataSasaranPD:o,setDetailTahun:a,tahunSelected:u,setTahunSelected:h,detailUser:t,setDetailUser:s}};t(1436);var n=t(361),i=t(681),o=t(710),d=t(5447),c=t(9343),u=t(3580);t(4193);let h=e=>{let{register:a,handleSubmit:t,formState:{errors:r},reset:i}=(0,c.cI)(),o=(0,l.useRef)(null),[h,m]=(0,l.useState)(""),b=async a=>{let{Fk_Tahun:t,nama:s,nip:l,jabatan:r}=a;console.log("data pejabat",a);let o=e.id_tahun;try{let a=await n.Z.post("/RsasaranPDTahun",{Fk_Tahun:o,jabatan:r,nip:l,nama:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("response",a.status),200===a.status&&(m(""),e.data(),u.Am.success("Data Pejabat Berhasil Dibuat!",{position:"top-right"}),e.setVisible(!1),i())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";m(e),u.Am.error(e,{position:"top-right"}),i()}else if(e.response&&403===e.response.status){let e="Gagal menambahkan Data Pejabat!";m(e),u.Am.error(e,{position:"top-right"}),i()}else{console.log("Status respons lainnya:",e.message);let a="Gagal membuat Data Pejabat!,  ".concat(e.message);m(a),u.Am.error(a,{position:"top-right"}),i()}}};return(0,l.useEffect)(()=>{o.current&&o.current.focus()},[]),(0,l.useEffect)(()=>{e.isVisible||i()},[e.isVisible,i]),(0,s.jsx)("div",{className:"w-full h-full  px-4",children:(0,s.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:t(b),children:[(0,s.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,s.jsx)("label",{htmlFor:"nama",className:"block mb-1 required",children:"Nama"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.nama?"border-red-500":"border-gray-300"),type:"text",id:"nama",...a("nama",{required:"Nama is required."}),placeholder:"Enter your Nama"}),r.nama&&(0,s.jsx)("p",{className:"text-red-500",children:r.nama.message}),(0,s.jsx)("label",{htmlFor:"Nip",className:"block mb-1 required",children:"NIP"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.nip?"border-red-500":"border-gray-300"),type:"text",id:"nip",...a("nip",{required:"NIP is required."}),placeholder:"Enter your NIP"}),r.nip&&(0,s.jsx)("p",{className:"text-red-500",children:r.nip.message}),(0,s.jsx)("label",{htmlFor:"Jabatan",className:"block mb-1 required",children:"Jabatan"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.jabatan?"border-red-500":"border-gray-300"),type:"text",id:"jabatan",...a("jabatan",{required:"Jabatan is required."}),placeholder:"Enter your Jabatan"}),r.jabatan&&(0,s.jsx)("p",{className:"text-red-500",children:r.jabatan.message})]}),(0,s.jsx)("div",{className:"py-5 flex flex-col",children:(0,s.jsx)(d.Z,{text:"Tambah Data Pejabat",className:"h-10"})})]})})},m=e=>{let{register:a,handleSubmit:t,formState:{errors:r},reset:i,setValue:o}=(0,c.cI)({defaultValues:{nama:"",nip:"",jabatan:""}});(0,l.useEffect)(()=>{var a,t,s;o("nama",null===(a=e.dataPejabat[0])||void 0===a?void 0:a.Nama),o("nip",null===(t=e.dataPejabat[0])||void 0===t?void 0:t.Nip),o("jabatan",null===(s=e.dataPejabat[0])||void 0===s?void 0:s.Jabatan)},[e.dataPejabat,o]);let h=(0,l.useRef)(null),[m,b]=(0,l.useState)(""),p=async a=>{var t,s;let{nama:l,nip:r,jabatan:o}=a;console.log(" Ini data pejabat data pejabat",null===(t=e.dataPejabat[0])||void 0===t?void 0:t.Id);try{let a=await n.Z.put("/RsasaranPDTahun/".concat(null===(s=e.dataPejabat[0])||void 0===s?void 0:s.Id),{jabatan:o,nip:r,nama:l},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("response",a.status),200===a.status&&(b(""),e.data(),u.Am.success("Data Pejabat Berhasil Diperbarui!",{position:"top-right"}),e.setVisible(!1),i())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";b(e),u.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal Memperbarui Data Pejabat!";b(e),u.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let a="Gagal Memperbarui Data Pejabat!,  ".concat(e.message);b(a),u.Am.error(a,{position:"top-right"})}}};return(0,l.useEffect)(()=>{h.current&&h.current.focus()},[]),(0,l.useEffect)(()=>{e.isVisible},[e.isVisible]),(0,s.jsx)("div",{className:"w-full h-full  px-4",children:(0,s.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:t(p),children:[(0,s.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,s.jsx)("label",{htmlFor:"nama",className:"block mb-1 required",children:"Nama"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.nama?"border-red-500":"border-gray-300"),type:"text",id:"nama",...a("nama",{required:"Nama is required."}),placeholder:"Enter your Nama"}),r.nama&&(0,s.jsx)("p",{className:"text-red-500",children:r.nama.message}),(0,s.jsx)("label",{htmlFor:"Nip",className:"block mb-1 required",children:"NIP"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.nip?"border-red-500":"border-gray-300"),type:"text",id:"nip",...a("nip",{required:"NIP is required."}),placeholder:"Enter your NIP"}),r.nip&&(0,s.jsx)("p",{className:"text-red-500",children:r.nip.message}),(0,s.jsx)("label",{htmlFor:"Jabatan",className:"block mb-1 required",children:"Jabatan"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.jabatan?"border-red-500":"border-gray-300"),type:"text",id:"jabatan",...a("jabatan",{required:"Jabatan is required."}),placeholder:"Enter your Jabatan"}),r.jabatan&&(0,s.jsx)("p",{className:"text-red-500",children:r.jabatan.message})]}),(0,s.jsx)("div",{className:"py-5 flex flex-col",children:(0,s.jsx)(d.Z,{text:"Edit Data Pejabat",className:"h-10"})})]})})};var b=()=>{var e,a,t,d,c;let u=r(),b={headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},p=async()=>{try{let e=await n.Z.get("/tahun",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});u.setDetailTahun(e.data.data)}catch(e){console.log("Error fetching users:",e)}},x=async()=>{try{let e=await n.Z.get("/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});u.setDetailUser(e.data.name)}catch(e){console.log("Error fetching users:",e)}},[f,j]=(0,l.useState)(1),g=async()=>{try{let e=await n.Z.get("/formulir9/view?tahun=".concat(u.tahunSelected),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});u.setDataPejabat([e.data.pejabat]),u.setDataTable(e.data.data),console.log("data pejabat",[e.data.pejabat])}catch(e){console.log("Error fetching users:",e)}},N=u.headerDataSasaranPD.map((e,a)=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,width:"10%",selector:(e,a)=>a+1};case"sasaran perangkat daerah":return{name:e,wrap:!0,selector:e=>e.SasaranPD}}});return(0,l.useEffect)(()=>{p(),x()},[]),(0,l.useEffect)(()=>{g()},[u.tahunSelected]),console.log("selected tahun",u.tahunSelected),console.log("selectedIdtHAUN",f),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{isVisibleSmall:u.popUpAdd,setIsVisibleSmall:u.setPopUpAdd,onCloseSmall:()=>u.setPopUpAdd(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Tambah Data Pejabat"}),(0,s.jsx)(h,{data:g,id_tahun:f,setVisible:u.setPopUpAdd,isVisible:u.popUpAdd})]})}),(0,s.jsx)(o.Z,{isVisibleSmall:u.popUpEdit,setIsVisibleSmall:u.setPopUpEdit,onCloseSmall:()=>u.setPopUpEdit(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit Data Pejabat"}),(0,s.jsx)(m,{data:g,dataPejabat:u.dataPejabat,setVisible:u.setPopUpEdit,isVisible:u.popUpEdit})]})}),(0,s.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,s.jsxs)("div",{className:"mt-[10vh] h-full overflow-y-auto w-full items-center flex justify-start pt-5 px-2 flex-col ",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full mb-1 bg-blue-600 p-3 rounded-xl text-white font-bold",children:[(0,s.jsxs)("div",{className:"flex w-full justify-start",children:[" ",(0,s.jsx)("table",{className:"table-auto",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Periode"}),(0,s.jsx)("td",{className:"px-1",children:":"}),u.detailTahun.length>0&&(0,s.jsxs)(s.Fragment,{children:[u.detailTahun[0].tahun," ","s/d"," ",u.detailTahun[u.detailTahun.length-1].tahun]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Perangkat Daerah"}),(0,s.jsx)("td",{className:"",children:":"}),(0,s.jsx)("td",{children:u.detailUser})]})]})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("select",{id:"tahunSelected",value:u.tahunSelected,className:"bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:e=>{let a=e.target.value,t=u.detailTahun.find(e=>e.tahun===a);t&&(u.setTahunSelected(a),j(t.Pk_Tahun_Id))},children:[(0,s.jsx)("option",{value:"",children:"Pilih Tahun"}),u.detailTahun.map(e=>(0,s.jsx)("option",{children:e.tahun},e.Pk_Tahun_Id))]})})]}),""!=u.tahunSelected&&(null===(e=u.dataPejabat[0])||void 0===e?void 0:e.Nama)!=null?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-row w-full my-2 bg-blue-600 p-3 rounded-xl justify-between text-white font-bold",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h3",{children:"Data Pejabat"})}),(0,s.jsxs)("div",{className:"flex w-full justify-start",children:[" ",(0,s.jsx)("table",{className:"table-auto",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Nama"}),(0,s.jsx)("td",{className:"px-1",children:":"}),(0,s.jsx)("td",{children:null===(a=u.dataPejabat[0])||void 0===a?void 0:a.Nama})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"NIP"}),(0,s.jsx)("td",{className:"px-1",children:":"}),(0,s.jsx)("td",{children:null===(t=u.dataPejabat[0])||void 0===t?void 0:t.Nip})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Jabatan"}),(0,s.jsx)("td",{className:"px-1",children:":"}),(0,s.jsx)("td",{children:null===(d=u.dataPejabat[0])||void 0===d?void 0:d.Jabatan})]})]})})]})]}),(0,s.jsx)("div",{className:"  justify-center flex items-center  p-2",children:(0,s.jsx)("div",{onClick:()=>{u.setPopUpEdit(!0)},className:"bg-blue-400 p-2 rounded-lg",children:"Edit Data Pejabat"})})]})}):""==u.tahunSelected&&(null===(c=u.dataPejabat[0])||void 0===c?void 0:c.Nama)==null?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("div",{className:"flex flex-row w-full my-2 bg-blue-600 p-3 rounded-xl text-white font-bold justify-between",children:[(0,s.jsx)("div",{children:"Data Pejabat Belum Diisi"}),(0,s.jsx)("div",{className:"bg-blue-400 rounded-lg p-2",onClick:()=>{u.setPopUpAdd(!0)},children:"Tambah Data Jabatan"})]}),(0,s.jsx)("div",{className:"flex flex-col w-full",children:(0,s.jsx)(i.ZP,{columns:N,data:(null==u?void 0:u.dataTable)||[],responsive:!0,expandableRows:!0,expandableRowsComponent:e=>{let{data:a}=e,t=u.headerDataIndikatorSasaranPD.map((e,a)=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,width:"10%",selector:(e,a)=>a+1};case"indikator sasaran perangkat daerah":return{name:e,wrap:!0,selector:e=>e.Indikator_sasaran_pd};case"target":return{name:e,wrap:!0,selector:e=>e.Target}}});return(0,s.jsx)("div",{style:{paddingTop:"10px",paddingLeft:"20px"},children:(0,s.jsx)(i.ZP,{columns:t,data:a.Indikator||[],pagination:!0,customStyles:b,responsive:!0})})},pagination:!0,customStyles:b})})]})})]})}},5447:function(e,a,t){"use strict";var s=t(7437);t(2265),a.Z=e=>{let{text:a,className:t}=e;return(0,s.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(t),type:"submit",children:a})}},6409:function(e,a,t){"use strict";var s=t(2265);a.Z=()=>{let[e,a]=(0,s.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:a,onCloseSmall:()=>a(!1)},visible:e,setVisible:a}}},710:function(e,a,t){"use strict";var s=t(7437),l=t(6409),r=t(5097);a.Z=e=>{let{isVisibleSmall:a,setIsVisibleSmall:t,onCloseSmall:n,children:i,title:o}=e;return(0,l.Z)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,s.jsx)("div",{onClick:()=>n(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,s.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,s.jsx)("div",{onClick:()=>n(),className:"md:h-[20%] h-[10%]  w-full"}),(0,s.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,s.jsxs)("div",{onClick:()=>n(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:o}),(0,s.jsx)(r.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,s.jsx)("div",{className:"overflow-y-auto",children:i})]}),(0,s.jsx)("div",{onClick:()=>n(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,s.jsx)("div",{onClick:()=>n(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,a,t){"use strict";t.d(a,{H:function(){return n}});var s=t(2126);let l="",r=s.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),n=()=>{let e=localStorage.getItem("token");e&&(l=e,r.defaults.headers.common.Authorization="Bearer ".concat(l))};r.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=r},4193:function(){},1436:function(){}},function(e){e.O(0,[396,7679,5706,2126,6713,9343,9500,2971,7023,1744],function(){return e(e.s=2189)}),_N_E=e.O()}]);