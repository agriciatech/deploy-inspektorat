(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6223],{4934:function(e,a,s){Promise.resolve().then(s.bind(s,2661))},4515:function(e,a,s){"use strict";var t=s(2265);a.Z=()=>{let[e,a]=(0,t.useState)(0),[s,r]=(0,t.useState)([]),[l,i]=(0,t.useState)(0),[n,o]=(0,t.useState)(0),[d,c]=(0,t.useState)(""),[u,m]=(0,t.useState)(""),[h,f]=(0,t.useState)(""),[b,x]=(0,t.useState)(""),[p,j]=(0,t.useState)([]),[g,S]=(0,t.useState)([]),[k,w]=(0,t.useState)(0),[y,I]=(0,t.useState)(0),[N,v]=(0,t.useState)(0),[V,A]=(0,t.useState)(!1),[T,C]=(0,t.useState)(!1),[_,E]=(0,t.useState)(!1),[M,q]=(0,t.useState)(!1),[D,Z]=(0,t.useState)(!1),[F,z]=(0,t.useState)(!1);return{dataIndikatorSasaran:b,setDataIndikatorSasaran:x,handleDeleteIndikatorSasaran:e=>{z(!0),v(e)},handleEditIndikatorSasaran:e=>{Z(!0),v(e)},handleDeleteSasaran:e=>{E(!0),I(e)},nomor:l,setNomor:i,handleEditSasaran:e=>{C(!0),I(e)},dataSasaran:h,setDataSasaran:f,handleAddIndikatorSasaran:e=>{q(!0),I(e)},handleAddSasaran:e=>{A(!0),w(e)},idMisi:e,idIndikator:k,isVisibleDeleteModalIndikatorSasaran:F,setIsVisibleDeleteModalIndikatorSasaran:z,isVisibleDeleteModalSasaran:_,setIsVisibleDeleteModalSasaran:E,isVisibleAddModalIndikatorSasaran:M,setIsVisibleAddModalIndikatorSasaran:q,isVisibleEditModalIndikatorSasaran:D,setIsVisibleEditModalIndikatorSasaran:Z,setIdIndikator:w,idSasaran:y,setIdSasaran:I,idIndikatorSasaran:N,setIdIndikatorSasaran:v,isVisibleAddModalSasaran:V,setIsVisibleAddModalSasaran:A,isVisibleEditModalSasaran:T,setIsVisibleEditModalSasaran:C,headerDataSasaran:["No","Aksi","Sasaran","Tambah Sasaran"],headerDataIndikatorSasaran:["No","Aksi","Indikator Sasaran"],indikators:p,setIndikators:j,records:g,setRecords:S,setIdMisi:a,misi:s,dataMisi:u,headerDataIndikator:["No","Indikator","Tujuan","Misi","Tambah Indikator"],setDataMisi:m,setMisi:r,idTujuan:n,setIdTujuan:o,tujuan:d,setTujuan:c}}},2661:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return N}});var t=s(7437),r=s(361),l=s(4515),i=s(7138),n=s(2265),o=s(6356),d=s(3051),c=s(681),u=s(8196),m=s(7107),h=s(5447),f=s(9343),b=s(3580);s(4193),s(9071);let x=e=>{let{register:a,handleSubmit:s,formState:{errors:l},reset:i}=(0,f.cI)(),o=(0,n.useRef)(null);(0,n.useEffect)(()=>{o.current&&o.current.focus()},[]);let[d,c]=(0,n.useState)(""),u=async a=>{let{sasaran:s,Fk_Indikator_tujuan_ID:t}=a;try{let a=await r.Z.post("/Sasaran",{sasaran:s,Fk_Indikator_tujuan_ID:parseInt(e.Id_Indikator)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(c(""),e.data(),b.Am.success("Sasaran Berhasil Dibuat!",{position:"top-right"}),e.setVisible(!1),i())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),b.Am.error(e,{position:"top-right"}),i()}else if(e.response&&403===e.response.status){let e="Gagal menambahkan Sasaran!";c(e),b.Am.error(e,{position:"top-right"}),i()}else{console.log("Status respons lainnya:",e.message);let a="Gagal membuat Sasaran!,  ".concat(e.message);c(a),b.Am.error(a,{position:"top-right"}),i()}}};return(0,n.useEffect)(()=>{e.isVisible||i()},[e.isVisible,i]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(u),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"sasaran",className:"block mb-1 required",children:"Sasaran"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.sasaran?"border-red-500":"border-gray-300"),type:"text",id:"sasaran",...a("sasaran",{required:"Sasaran is required."}),placeholder:"Enter your Sasaran"}),l.sasaran&&(0,t.jsx)("p",{className:"text-red-500",children:l.sasaran.message}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.Fk_Indikator_tujuan_ID?"border-red-500":"border-gray-300"),type:"hidden",value:e.Id_Indikator,id:"Fk_Indikator_tujuan_ID",...a("Fk_Indikator_tujuan_ID",{required:"Fk_Indikator_tujuan_ID is required."}),placeholder:"Enter your Id Indikator"})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Tambah Sasaran",className:"h-10"})})]})})},p=e=>{let{register:a,handleSubmit:s,formState:{errors:l},reset:i}=(0,f.cI)(),o=(0,n.useRef)(null);(0,n.useEffect)(()=>{o.current&&o.current.focus()},[]),console.log("tujuan",e.Id_Sasaran);let[d,c]=(0,n.useState)(""),u=async a=>{let{IndikatorSasaran:s,Satuan:t,KA1:l,KA2:n,T1:o,T2:d,T3:u,T4:m,T5:h,SasaranId:f}=a;console.log("data",a);let x=parseInt(l.toString(),10),p=parseInt(n.toString(),10),j=parseInt(o.toString(),10),g=parseInt(d.toString(),10),S=parseInt(u.toString(),10),k=parseInt(m.toString(),10),w=parseInt(h.toString(),10);try{let a=await r.Z.post("/formulir2/tujuan-indikator",{IndikatorSasaran:s,Satuan:t,KA1:x,KA2:p,T1:j,T2:g,T3:S,T4:k,T5:w,SasaranId:e.Id_Sasaran},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(c(""),e.data(),b.Am.success("Indikator Sasaran Berhasil Dibuat!",{position:"top-right"}),e.setVisible(!1),i())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),b.Am.error(e,{position:"top-right"}),i()}else if(e.response&&403===e.response.status){let e="Gagal menambahkan Indikator Sasaran!";c(e),b.Am.error(e,{position:"top-right"}),i()}else{console.log(e);let a="Gagal membuat indikator Sasaran!,  ".concat(e.message);c(a),b.Am.error(a,{position:"top-right"}),i()}}};return(0,n.useEffect)(()=>{e.isVisible||i()},[e.isVisible,i]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(u),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"IndikatorSasaran",className:"block mb-1 required",children:"Indikator Sasaran"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.IndikatorSasaran?"border-red-500":"border-gray-300"),type:"text",id:"IndikatorSasaran",...a("IndikatorSasaran",{required:"Indikator Tujuan is required."}),placeholder:"Enter your Indikator"}),l.IndikatorSasaran&&(0,t.jsx)("p",{className:"text-red-500",children:l.IndikatorSasaran.message}),(0,t.jsx)("label",{htmlFor:"Satuan",className:"block mb-1 required",children:"Satuan"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.Satuan?"border-red-500":"border-gray-300"),type:"text",id:"Satuan",...a("Satuan",{required:"Satuan is required."}),placeholder:"Enter your Satuan"}),l.Satuan&&(0,t.jsx)("p",{className:"text-red-500",children:l.Satuan.message}),(0,t.jsx)("label",{htmlFor:"KA1",className:"block mb-1 required",children:"Kondisi Awal 1"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.KA1?"border-red-500":"border-gray-300"),type:"number",id:"KA1",...a("KA1",{required:"Kondisi Awal1 is required."}),placeholder:"Enter your Kondisi Awal 1"}),l.KA1&&(0,t.jsx)("p",{className:"text-red-500",children:l.KA1.message}),(0,t.jsx)("label",{htmlFor:"KA2",className:"block mb-1 required",children:"Kondisi Awal 2"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.KA2?"border-red-500":"border-gray-300"),type:"number",id:"KA2",...a("KA2",{required:"Kondisi Awal 2 is required."}),placeholder:"Enter your Kondisi Awal 2"}),l.KA2&&(0,t.jsx)("p",{className:"text-red-500",children:l.KA2.message}),(0,t.jsx)("label",{htmlFor:"T1",className:"block mb-1 required",children:"Tahun 1"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.T1?"border-red-500":"border-gray-300"),type:"number",id:"T1",...a("T1",{required:"Tahun 1 is required."}),placeholder:"Enter your Tahun 1"}),l.T1&&(0,t.jsx)("p",{className:"text-red-500",children:l.T1.message}),(0,t.jsx)("label",{htmlFor:"T2",className:"block mb-1 required",children:"Tahun 2"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.T2?"border-red-500":"border-gray-300"),type:"number",id:"T2",...a("T2",{required:"Tahun 2 is required."}),placeholder:"Enter your KA2"}),l.T2&&(0,t.jsx)("p",{className:"text-red-500",children:l.T2.message}),(0,t.jsx)("label",{htmlFor:"T3",className:"block mb-1 required",children:"Tahun 3"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.T3?"border-red-500":"border-gray-300"),type:"number",id:"T3",...a("T3",{required:"Tahun 3 is required."}),placeholder:"Enter your Tahun 3"}),l.T3&&(0,t.jsx)("p",{className:"text-red-500",children:l.T3.message}),(0,t.jsx)("label",{htmlFor:"T4",className:"block mb-1 required",children:"Tahun 4"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.T4?"border-red-500":"border-gray-300"),type:"number",id:"T4",...a("T4",{required:"Tahun 4 is required."}),placeholder:"Enter your Tahun 4"}),l.T4&&(0,t.jsx)("p",{className:"text-red-500",children:l.T4.message}),(0,t.jsx)("label",{htmlFor:"T5",className:"block mb-1 required",children:"Tahun 5"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.T5?"border-red-500":"border-gray-300"),type:"number",id:"T5",...a("T5",{required:"Tahun 5 is required."}),placeholder:"Enter your Tahun 5"}),l.T5&&(0,t.jsx)("p",{className:"text-red-500",children:l.T5.message}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(l.SasaranId?"border-red-500":"border-gray-300"),type:"hidden",value:e.Id_Sasaran,id:"TujuanID",...a("SasaranId",{required:"SasaranId is required."}),placeholder:""})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Tambah Indikator",className:"h-10"})})]})})},j=e=>{let{register:a,handleSubmit:s,setValue:l,formState:{errors:i}}=(0,f.cI)({defaultValues:{sasaran:""}});l("sasaran",e.dataSasaran),(0,n.useEffect)(()=>{},[e.id,l]);let o=(0,n.useRef)(null);(0,n.useEffect)(()=>{o.current&&o.current.focus()},[]);let[d,c]=(0,n.useState)(""),u=async a=>{let{sasaran:s}=a;try{let a=await r.Z.put("/Sasaran/".concat(e.id),{sasaran:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(c(""),e.data(),b.Am.success("Sasaran Berhasil Diupdate!",{position:"top-right"}),e.setVisible(!1))}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),b.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal memperbarui data sasaran";c(e),b.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let a="Gagal membuat sasaran!,  ".concat(e.message);c(a),b.Am.error(a,{position:"top-right"})}}};return(0,n.useEffect)(()=>{e.isVisible},[e.isVisible]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(u),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"sasaran",className:"block mb-1 required",children:"Sasaran"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.sasaran?"border-red-500":"border-gray-300"),type:"text",id:"tujuan",...a("sasaran",{required:"sasaran is required."}),placeholder:"Enter your Sasaran"}),i.sasaran&&(0,t.jsx)("p",{className:"text-red-500",children:i.sasaran.message})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Edit Sasaran",className:"h-10"})})]})})};var g=s(4200),S=s(8079),k=s(7702);let w=e=>{console.log(e.id);let a=async()=>{try{await r.Z.delete("/Sasaran/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(a=>{200===a.status&&(e.setVisible(!1),b.Am.success("Sasaran berhasil dihapus",{position:"top-right"}),e.data())})}catch(e){console.log(e),b.Am.error("Sasaran gagal dihapus",{position:"top-right"})}};return(0,t.jsx)("div",{className:"w-full py-10  h-full flex px-4",children:(0,t.jsxs)("div",{className:"relative  flex-col mt-[1rem]  w-full h-full bg-red-blue flex justify-center items-start",children:[(0,t.jsx)("h1",{className:"font-semibold text-lg",children:"Apakah anda yakin ingin menghapus sasaran nomor ".concat(e.nomor," ?")}),(0,t.jsxs)("div",{className:"pt-10 flex w-full justify-end  ",children:[(0,t.jsx)(k.Z,{onClick:a,text:"Hapus",className:"mr-2"}),(0,t.jsx)(S.Z,{onClick:()=>e.setVisible(!1),className:"text-white",text:"Batal"})]})]})})},y=e=>{console.log("data delete",e.id);let a=async()=>{try{await r.Z.delete("/formulir2/indikator-sasaran/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(a=>{200===a.status&&(e.setVisible(!1),b.Am.success("Indikator Sasaran berhasil dihapus",{position:"top-right"}),e.data())})}catch(e){console.log(e),b.Am.error("Sasaran gagal dihapus",{position:"top-right"})}};return(0,t.jsx)("div",{className:"w-full py-10  h-full flex px-4",children:(0,t.jsxs)("div",{className:"relative  flex-col mt-[1rem]  w-full h-full bg-red-blue flex justify-center items-start",children:[(0,t.jsx)("h1",{className:"font-semibold text-lg",children:"Apakah anda yakin ingin menghapus indikator sasaran nomor ".concat(e.nomor," ?")}),(0,t.jsxs)("div",{className:"pt-10 flex w-full justify-end  ",children:[(0,t.jsx)(k.Z,{onClick:a,text:"Hapus",className:"mr-2"}),(0,t.jsx)(S.Z,{onClick:()=>e.setVisible(!1),className:"text-white",text:"Batal"})]})]})})},I=e=>{let{register:a,handleSubmit:s,setValue:l,formState:{errors:i}}=(0,f.cI)({defaultValues:{indikator_sasaran:""}});l("indikator_sasaran",e.dataIndikatorSasaran),(0,n.useEffect)(()=>{},[e.id,l]);let o=(0,n.useRef)(null);(0,n.useEffect)(()=>{o.current&&o.current.focus()},[]);let[d,c]=(0,n.useState)(""),u=async a=>{let{indikator_sasaran:s}=a;try{let a=await r.Z.put("/IndikatorSasaran/".concat(e.id),{indikator_sasaran:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(c(""),e.data(),b.Am.success("Indikator Sasaran Berhasil Diupdate!",{position:"top-right"}),e.setVisible(!1))}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),b.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal memperbarui data indikator sasaran";c(e),b.Am.error(e,{position:"top-right"})}else{console.log("Status respons lainnya:",e.message);let a="Gagal memperbarui indikator sasaran!,  ".concat(e.message);c(a),b.Am.error(a,{position:"top-right"})}}};return(0,n.useEffect)(()=>{e.isVisible},[e.isVisible]),(0,t.jsx)("div",{className:"w-full h-full  px-4",children:(0,t.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:s(u),children:[(0,t.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,t.jsx)("label",{htmlFor:"indikator sasaran",className:"block mb-1 required",children:"Indikator Sasaran"}),(0,t.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(i.indikator_sasaran?"border-red-500":"border-gray-300"),type:"text",id:"indikator sasaran",...a("indikator_sasaran",{required:"Indikator sasaran is required."}),placeholder:"Enter your Indikator Sasaran"}),i.indikator_sasaran&&(0,t.jsx)("p",{className:"text-red-500",children:i.indikator_sasaran.message})]}),(0,t.jsx)("div",{className:"py-5 flex flex-col",children:(0,t.jsx)(h.Z,{text:"Edit Indikator Sasaran",className:"h-10"})})]})})};var N=()=>{let e=(0,l.Z)(),[a,s]=(0,n.useState)([]),h=async()=>{try{let a=await r.Z.get("/formulir1/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Misi:",a.data.data),e.setMisi(a.data.data),b(a.data.data)}catch(e){console.log(e)}},f=async()=>{try{if(null!==e.idMisi){if(0!==e.idMisi){let a=await r.Z.get("/misi/".concat(e.idMisi),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});e.setDataMisi(a.data.misi)}else e.setDataMisi("")}}catch(e){console.log(e)}},b=e=>{let a=[];for(let s of e)if(s.misis)for(let e of s.misis)e.tujuans&&a.push(...e.tujuans);s(a)},S=e.headerDataIndikator.map(a=>"id"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.id_Indikator}:"no"===a.toLowerCase()?{name:a,wrap:!0,selector:(e,a)=>a+1}:"indikator"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.indikator_tujuan,sortable:!0}:"tujuan"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.Tujuan,sortable:!0}:"misi"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.misi,sortable:!0}:"tambah indikator"===a.toLowerCase()?{cell:a=>(0,t.jsx)("button",{onClick:()=>e.handleAddSasaran(a.id_Indikator),className:"bg-blue-500 text-white p-2 rounded-sm",children:"Tambah Sasaran"})}:void 0),k=a=>{let{data:s}=a,r=e.headerDataIndikatorSasaran.map(a=>"id"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.id_indikator}:"no"===a.toLowerCase()?{name:a,wrap:!0,selector:(e,a)=>a+1}:"aksi"===a.toLowerCase()?{name:a,cell:(a,s)=>(0,t.jsxs)("div",{className:"flex flex-row justify-around w-full",children:[(0,t.jsx)(i.default,{href:"/RPJMD/sasaran/detail",onClick:()=>localStorage.setItem("detailFormulasi2",a.id_indikator.toString()),children:(0,t.jsx)(u.ZbI,{style:{cursor:"pointer",marginRight:"10px"},className:"text-blue-500 w-5 h-5"})}),(0,t.jsx)(d.AWu,{style:{cursor:"pointer"},className:"text-red-500 w-5 h-5",onClick:()=>[e.handleDeleteIndikatorSasaran(a.id_indikator),e.setNomor(s+1)]}),(0,t.jsx)(o.zmo,{style:{cursor:"pointer",marginRight:"10px"},onClick:()=>[e.handleEditIndikatorSasaran(a.id_indikator),e.setDataIndikatorSasaran(a.indikator_Sasaran)],className:"text-blue-500 w-5 h-5"})]}),ignoreRowClick:!0,button:!0}:"indikator sasaran"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.indikator_Sasaran,sortable:!0}:void 0);return(0,t.jsx)("div",{style:{paddingLeft:"20px"},children:(0,t.jsx)(c.ZP,{columns:r,data:s.data_tujuan||[],pagination:!0,responsive:!0})})},N=async()=>{try{console.log("Fetching users...");let a=await r.Z.get("/formulir2/search?misi=".concat(e.dataMisi,"&tujuan=").concat(e.tujuan),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Response received:",a.data.data),e.setIndikators(a.data.data),console.log(a.data.data),e.setRecords(a.data.data)}catch(e){console.log("Error fetching users:",e)}};return(0,n.useEffect)(()=>{h()},[]),(0,n.useEffect)(()=>{N()},[e.dataMisi,e.tujuan]),(0,n.useEffect)(()=>{null!==e.idMisi&&f()},[e.idMisi]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Z,{isVisibleSmall:e.isVisibleAddModalSasaran,setIsVisibleSmall:e.setIsVisibleAddModalSasaran,onCloseSmall:()=>e.setIsVisibleAddModalSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Tambah Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(x,{data:N,Id_Indikator:e.idIndikator,setVisible:e.setIsVisibleAddModalSasaran,isVisible:e.isVisibleAddModalSasaran})})]})}),(0,t.jsx)(m.Z,{isVisibleSmall:e.isVisibleEditModalSasaran,setIsVisibleSmall:e.setIsVisibleEditModalSasaran,onCloseSmall:()=>e.setIsVisibleEditModalSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(j,{data:N,id:e.idSasaran,setVisible:e.setIsVisibleEditModalSasaran,isVisible:e.isVisibleEditModalSasaran,dataSasaran:e.dataSasaran})})]})}),(0,t.jsx)(m.Z,{isVisibleSmall:e.isVisibleAddModalIndikatorSasaran,setIsVisibleSmall:e.setIsVisibleAddModalIndikatorSasaran,onCloseSmall:()=>e.setIsVisibleAddModalIndikatorSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Tambah Indikator Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(p,{data:N,Id_Sasaran:e.idSasaran,setVisible:e.setIsVisibleAddModalIndikatorSasaran,isVisible:e.isVisibleAddModalIndikatorSasaran})})]})}),(0,t.jsx)(m.Z,{isVisibleSmall:e.isVisibleEditModalIndikatorSasaran,setIsVisibleSmall:e.setIsVisibleEditModalIndikatorSasaran,onCloseSmall:()=>e.setIsVisibleEditModalIndikatorSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit Indikator Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(I,{data:N,id:e.idIndikatorSasaran,setVisible:e.setIsVisibleEditModalIndikatorSasaran,isVisible:e.isVisibleEditModalIndikatorSasaran,dataIndikatorSasaran:e.dataIndikatorSasaran})})]})}),(0,t.jsx)(g.Z,{isVisibleConfirm:e.isVisibleDeleteModalSasaran,setIsVisibleConfirm:e.setIsVisibleDeleteModalSasaran,onCloseConfirm:()=>e.setIsVisibleDeleteModalSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Delete Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(w,{id:e.idSasaran,data:N,nomor:e.nomor,setVisible:e.setIsVisibleDeleteModalSasaran,isVisible:e.isVisibleDeleteModalSasaran})})]})}),(0,t.jsx)(g.Z,{isVisibleConfirm:e.isVisibleDeleteModalIndikatorSasaran,setIsVisibleConfirm:e.setIsVisibleDeleteModalIndikatorSasaran,onCloseConfirm:()=>e.setIsVisibleDeleteModalIndikatorSasaran(!1),children:(0,t.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,t.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Delete Indikator Sasaran"}),(0,t.jsx)("div",{className:"w-full h-full ",children:(0,t.jsx)(y,{id:e.idIndikatorSasaran,data:N,nomor:e.nomor,setVisible:e.setIsVisibleDeleteModalIndikatorSasaran,isVisible:e.isVisibleDeleteModalIndikatorSasaran})})]})}),(0,t.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,t.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex h-full flex-col",children:(0,t.jsxs)("div",{className:"lg:px-8 px-3 w-full h-full",children:[(0,t.jsx)("div",{className:"w-ful justify-start flex flex-row pt-5",children:(0,t.jsxs)("div",{className:"w-3/4 flex justify-between ",children:[(0,t.jsx)("div",{className:"w-3/6 flex pr-3 ",children:(0,t.jsxs)("select",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:a=>{let t=a.target.value;if(console.log("selected misi ID",t),e.setIdMisi("0"===t?0:parseInt(t)),"0"===t)b(e.misi),e.setDataMisi(""),e.setTujuan("");else{let a=[];for(let s of e.misi)if(s.misis){for(let e of s.misis)if(e.id_misi===parseInt(t)){e.tujuans&&a.push(...e.tujuans);break}}s(a)}},defaultValue:0,children:[(0,t.jsx)("option",{value:0,children:"Pilih Misi"}),e.misi.map(e=>e.misis?e.misis.map(e=>(0,t.jsx)("option",{value:e.id_misi,children:e.misi},e.id_misi)):null)]})}),(0,t.jsx)("div",{className:"w-3/6 flex",children:(0,t.jsxs)("select",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:a=>{let s=a.target.value;if(console.log("selected tujuan ID",s),e.setIdTujuan("0"===s?0:parseInt(s)),"0"===s){e.setTujuan("");return}for(let a of e.misi)if(a.misis){for(let t of a.misis)if(t.tujuans){for(let a of t.tujuans)if(a.id_tujuan===parseInt(s)){e.setTujuan(a.tujuan);return}}}},defaultValue:0,children:[(0,t.jsx)("option",{value:0,children:"Pilih Tujuan"}),a.map(e=>(0,t.jsx)("option",{value:e.id_tujuan,children:e.tujuan},e.id_tujuan))]})})]})}),null==e.records?(0,t.jsx)("div",{className:"mt-4 flex justify-start text-white font-medium text-lg items-center w-full bg-yellow-400 h-16 rounded-lg",children:(0,t.jsx)("h1",{className:"pl-5",children:"Data Kosong Atau Silakan pilih misi dan tujuan"})}):(0,t.jsx)(c.ZP,{columns:S,data:e.records,pagination:!0,expandableRows:!0,expandableRowsComponent:a=>{let{data:s}=a,r=e.headerDataSasaran.map(a=>"id"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.id_sasaran}:"no"===a.toLowerCase()?{name:a,wrap:!0,selector:(e,a)=>a+1}:"aksi"===a.toLowerCase()?{name:a,cell:(a,s)=>(0,t.jsxs)("div",{className:"flex flex-row justify-around w-full",children:[(0,t.jsx)(d.AWu,{style:{cursor:"pointer"},className:"text-red-500 w-5 h-5",onClick:()=>[e.handleDeleteSasaran(a.id_sasaran),e.setNomor(s+1)]}),(0,t.jsx)(o.zmo,{style:{cursor:"pointer",marginRight:"10px"},onClick:()=>[e.handleEditSasaran(a.id_sasaran),e.setDataSasaran(a.sasaran)],className:"text-blue-500 w-5 h-5"})]}),ignoreRowClick:!0,button:!0}:"sasaran"===a.toLowerCase()?{name:a,wrap:!0,selector:e=>e.sasaran,sortable:!0}:"tambah sasaran"===a.toLowerCase()?{cell:a=>(0,t.jsx)("button",{onClick:()=>e.handleAddIndikatorSasaran(a.id_sasaran),className:"bg-blue-500 text-white p-2 rounded-sm",children:"Tambah Indikator Sasaran"})}:void 0);return(0,t.jsx)("div",{style:{paddingLeft:"20px"},children:(0,t.jsx)(c.ZP,{columns:r,data:s.data_sasaran||[],pagination:!0,responsive:!0,expandableRows:!0,expandableRowsComponent:k})})},responsive:!0})]})})})]})}},7702:function(e,a,s){"use strict";var t=s(7437);s(2265),a.Z=e=>{let{text:a,onClick:s,className:r}=e;return(0,t.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(r),type:"button",onClick:s,children:a})}},8079:function(e,a,s){"use strict";var t=s(7437);s(2265),a.Z=e=>{let{text:a,onClick:s,className:r}=e;return(0,t.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(r),type:"button",onClick:s,children:a})}},5447:function(e,a,s){"use strict";var t=s(7437);s(2265),a.Z=e=>{let{text:a,className:s}=e;return(0,t.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(s),type:"submit",children:a})}},4200:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var t=s(7437),r=s(2265),l=()=>{let[e,a]=(0,r.useState)(!1);return{modal:{isVisibleConfirm:e,setIsVisibleConfirm:a,onCloseConfirm:()=>a(!1)},visible:e,setVisible:a}},i=s(5097),n=e=>{let{isVisibleConfirm:a,setIsVisibleConfirm:s,onCloseConfirm:r,children:n,title:o,className:d}=e;return l(),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,t.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"}),(0,t.jsxs)("div",{className:" h-screen flex lg:w-[50%] w-full  flex-col justify-center ",children:[(0,t.jsx)("div",{onClick:()=>r(),className:"md:h-[50%] h-[50%] w-full"}),(0,t.jsxs)("div",{className:"h-[30%] relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,t.jsxs)("div",{onClick:()=>r(),className:"z-10 h-[10%] flex justify-between items-center p-5 cursor-pointer rounded-md bg-blue-500 text-white w-full ".concat(d),children:[(0,t.jsx)("h2",{className:"text-lg font-bold",children:o}),(0,t.jsx)(i.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,t.jsx)("div",{className:"overflow-y-auto",children:n})]}),(0,t.jsx)("div",{onClick:()=>r(),className:"md:h-[50%]  h-[50%]  w-full"})]}),(0,t.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"})]})})}},7107:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var t=s(7437),r=s(2265),l=()=>{let[e,a]=(0,r.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:a,onCloseSmall:()=>a(!1)},visible:e,setVisible:a}},i=s(5097),n=e=>{let{isVisibleSmall:a,setIsVisibleSmall:s,onCloseSmall:r,children:n,title:o}=e;return l(),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,t.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,t.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,t.jsx)("div",{onClick:()=>r(),className:"md:h-[20%] h-[10%]  w-full"}),(0,t.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,t.jsxs)("div",{onClick:()=>r(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,t.jsx)("h2",{className:"text-lg font-bold",children:o}),(0,t.jsx)(i.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,t.jsx)("div",{className:"overflow-y-auto",children:n})]}),(0,t.jsx)("div",{onClick:()=>r(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,t.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,a,s){"use strict";s.d(a,{H:function(){return i}});var t=s(2126);let r="",l=t.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),i=()=>{let e=localStorage.getItem("token");e&&(r=e,l.defaults.headers.common.Authorization="Bearer ".concat(r))};l.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=l},9071:function(){}},function(e){e.O(0,[392,5706,6051,522,614,2126,6713,9343,9500,8811,2971,7023,1744],function(){return e(e.s=4934)}),_N_E=e.O()}]);