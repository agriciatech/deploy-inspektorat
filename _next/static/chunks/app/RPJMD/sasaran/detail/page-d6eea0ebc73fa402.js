(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3467],{8501:function(e,a,r){Promise.resolve().then(r.bind(r,4376))},4515:function(e,a,r){"use strict";var s=r(2265);a.Z=()=>{let[e,a]=(0,s.useState)(0),[r,t]=(0,s.useState)([]),[l,i]=(0,s.useState)(0),[o,n]=(0,s.useState)(0),[d,u]=(0,s.useState)(""),[c,m]=(0,s.useState)(""),[h,b]=(0,s.useState)(""),[p,f]=(0,s.useState)(""),[x,g]=(0,s.useState)([]),[k,I]=(0,s.useState)([]),[j,w]=(0,s.useState)(0),[y,S]=(0,s.useState)(0),[N,T]=(0,s.useState)(0),[v,_]=(0,s.useState)(!1),[F,D]=(0,s.useState)(!1),[A,q]=(0,s.useState)(!1),[E,V]=(0,s.useState)(!1),[C,K]=(0,s.useState)(!1),[Z,P]=(0,s.useState)(!1);return{dataIndikatorSasaran:p,setDataIndikatorSasaran:f,handleDeleteIndikatorSasaran:e=>{P(!0),T(e)},handleEditIndikatorSasaran:e=>{K(!0),T(e)},handleDeleteSasaran:e=>{q(!0),S(e)},nomor:l,setNomor:i,handleEditSasaran:e=>{D(!0),S(e)},dataSasaran:h,setDataSasaran:b,handleAddIndikatorSasaran:e=>{V(!0),S(e)},handleAddSasaran:e=>{_(!0),w(e)},idMisi:e,idIndikator:j,isVisibleDeleteModalIndikatorSasaran:Z,setIsVisibleDeleteModalIndikatorSasaran:P,isVisibleDeleteModalSasaran:A,setIsVisibleDeleteModalSasaran:q,isVisibleAddModalIndikatorSasaran:E,setIsVisibleAddModalIndikatorSasaran:V,isVisibleEditModalIndikatorSasaran:C,setIsVisibleEditModalIndikatorSasaran:K,setIdIndikator:w,idSasaran:y,setIdSasaran:S,idIndikatorSasaran:N,setIdIndikatorSasaran:T,isVisibleAddModalSasaran:v,setIsVisibleAddModalSasaran:_,isVisibleEditModalSasaran:F,setIsVisibleEditModalSasaran:D,headerDataSasaran:["No","Aksi","Sasaran","Tambah Sasaran"],headerDataIndikatorSasaran:["No","Aksi","Indikator Sasaran"],indikators:x,setIndikators:g,records:k,setRecords:I,setIdMisi:a,misi:r,dataMisi:c,headerDataIndikator:["No","Indikator","Tujuan","Misi","Tambah Indikator"],setDataMisi:m,setMisi:t,idTujuan:o,setIdTujuan:n,tujuan:d,setTujuan:u}}},4376:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return y}});var s=r(7437),t=r(681),l=r(361),i=r(2265),o=r(710),n=r(3051),d=r(1641),u=r(6356),c=r(4200),m=()=>{let[e,a]=(0,i.useState)([]),[r,s]=(0,i.useState)([]),[t,o]=(0,i.useState)([]),[n,d]=(0,i.useState)([]),[u,c]=(0,i.useState)([]),[m,h]=(0,i.useState)([]),[b,p]=(0,i.useState)(null),[f,x]=(0,i.useState)(0),[g,k]=(0,i.useState)(!1),[I,j]=(0,i.useState)(!1),[w,y]=(0,i.useState)(!1),[S,N]=(0,i.useState)(!1),[T,v]=(0,i.useState)(0),[_,F]=(0,i.useState)(0),[D,A]=(0,i.useState)(""),q=async()=>{try{let e=await l.Z.get("/formulir2/formulir-tujuan-indikator",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});if(200===e.status){let r=e.data.data,s=["Aksi","Satuan Indikator",...["KA1","KA2","T1","T2","T3","T4","T5"].map(e=>"Tahun ".concat(r[e]))];console.log("Updated Header Data:",s),a(s)}}catch(e){console.log("Error fetching users:",e)}};return(0,i.useEffect)(()=>{q()},[]),{handleEditIndikator:e=>{N(!0),v(e)},isVisibleEditIndikator:S,setIsVisibleEditIndikator:N,handleEditFormulasi:e=>{y(!0),x(e)},handleDeleteFormulasi:e=>{j(!0),x(e)},handleAddFormulir:()=>{k(!0)},isVisibleEditFormulasi:w,setIsVisibleEditFormulasi:y,isVisibleDeleteFormulasi:I,setIsVisibleDeleteFormulasi:j,isVisibleAddFormulasi:g,setIsVisibleAddFormulasi:k,nomor:_,setNomor:F,params:D,setParams:A,idFormulasi:f,setIdFormulasi:x,headerDataFormulasi:["No","Aksi","Formulasi","Deskripsi","Sumber Data","Periode Pengukuran"],recordFormulasi:b,setRecordFormulasi:p,dataTableFormulasi:m,setDataTableFormulasi:h,dataTableDetail:u,setDataTableDetail:c,recordDetail:n,setRecordDetail:d,dataTable:r,setDataTable:s,headerData:["Misi","Tujuan","Indikator Tujuan","Sasaran","Indikator Sasaran"],record:t,setRecord:o,headerDataDetail:e,setHeaderDataDetail:a}},h=r(4515),b=r(5447),p=r(9343),f=r(3580);r(4193),r(9071);let x=e=>{let{register:a,handleSubmit:r,formState:{errors:t},reset:o}=(0,p.cI)(),n=(0,i.useRef)(null);(0,i.useEffect)(()=>{n.current&&n.current.focus()},[]),console.log("SASARAN",e.Id_Sasaran);let[d,u]=(0,i.useState)(""),c=async a=>{let{formulasi_sasaran:r,Deskripsi:s,sumebr_data:t,priode_pengukuran:i,Fk_IndikatorSasaran_Id:n}=a;console.log("data",a);let d=parseInt(e.Id_Sasaran);try{let a=await l.Z.post("/FormulasiSasaran",{formulasi_sasaran:r,Deskripsi:s,sumebr_data:t,priode_pengukuran:i,Fk_IndikatorSasaran_Id:d},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(u(""),e.data(),f.Am.success("Indikator Berhasil Dibuat!",{position:"top-right"}),e.setVisible(!1),o())}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";u(e),f.Am.error(e,{position:"top-right"}),o()}else if(e.response&&403===e.response.status){let e="Gagal menambahkan Indikator!";u(e),f.Am.error(e,{position:"top-right"}),o()}else{console.log(e);let a="Gagal membuat indikator!,  ".concat(e.message);u(a),f.Am.error(a,{position:"top-right"}),o()}}};return(0,i.useEffect)(()=>{e.isVisible||o()},[e.isVisible,o]),(0,s.jsx)("div",{className:"w-full h-full  px-4",children:(0,s.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:r(c),children:[(0,s.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,s.jsx)("label",{htmlFor:"formulasi_sasaran",className:"block mb-2 required",children:"Formulasi Tujuan"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.formulasi_sasaran?"border-red-500":"border-gray-300"),type:"text",id:"formulasi_sasaran",...a("formulasi_sasaran",{required:"Formulasi Sasaran is required."}),placeholder:"Enter your Formulasi Sasasran"}),t.formulasi_sasaran&&(0,s.jsx)("p",{className:"text-red-500",children:t.formulasi_sasaran.message}),(0,s.jsx)("label",{htmlFor:"Deskripsi",className:"block mb-2 required",children:"Deskripsi"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.Deskripsi?"border-red-500":"border-gray-300"),type:"text",id:"Deskripsi",...a("Deskripsi",{required:"Deskripsi is required."}),placeholder:"Enter your Deskripsi"}),t.Deskripsi&&(0,s.jsx)("p",{className:"text-red-500",children:t.Deskripsi.message}),(0,s.jsx)("label",{htmlFor:"sumebr_data",className:"block mb-2 required",children:"Sumber Data"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.sumebr_data?"border-red-500":"border-gray-300"),type:"text",id:"sumebr_data",...a("sumebr_data",{required:"Sumber Data is required."}),placeholder:"Enter your Sumber Data"}),t.sumebr_data&&(0,s.jsx)("p",{className:"text-red-500",children:t.sumebr_data.message}),(0,s.jsx)("label",{htmlFor:"priode_pengukuran",className:"block mb-2 required",children:"Periode Pengukuran"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.priode_pengukuran?"border-red-500":"border-gray-300"),type:"text",id:"priode_pengukuran",...a("priode_pengukuran",{required:"Periode Pengukuran is required."}),placeholder:"Enter your Periode Pengukuran"}),t.priode_pengukuran&&(0,s.jsx)("p",{className:"text-red-500",children:t.priode_pengukuran.message}),(0,s.jsx)("input",{type:"hidden",id:"Fk_IndikatorSasaran_Id",value:e.Id_Sasaran,...a("Fk_IndikatorSasaran_Id")})]}),(0,s.jsx)("div",{className:"py-5 flex flex-col",children:(0,s.jsx)(b.Z,{text:"Tambah Formulasi",className:"h-10"})})]})})};var g=r(8079),k=r(7702);let I=e=>{console.log("yahaha",e.id);let a=async()=>{try{await l.Z.delete("/FormulasiSasaran/".concat(e.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(a=>{200===a.status&&(e.setVisible(!1),f.Am.success("Formulasi berhasil dihapus",{position:"top-right"}),e.data())})}catch(e){console.log(e),f.Am.error("Formulasi gagal dihapus",{position:"top-right"})}};return(0,s.jsx)("div",{className:"w-full py-10  h-full flex px-4",children:(0,s.jsxs)("div",{className:"relative  flex-col mt-[1rem]  w-full h-full bg-red-blue flex justify-center items-start",children:[(0,s.jsx)("h1",{className:"font-semibold text-lg",children:"Apakah anda yakin ingin menghapus formulasi sasaran nomor ".concat(e.nomor," ?")}),(0,s.jsxs)("div",{className:"pt-10 flex w-full justify-end  ",children:[(0,s.jsx)(k.Z,{onClick:a,text:"Hapus",className:"mr-2"}),(0,s.jsx)(g.Z,{onClick:()=>e.setVisible(!1),className:"text-white",text:"Batal"})]})]})})},j=e=>{let{register:a,handleSubmit:r,formState:{errors:t},setValue:o}=(0,p.cI)({defaultValues:{formulasi_sasaran:"",Deskripsi:"",sumebr_data:"",priode_pengukuran:""}}),n=async()=>{try{let a=await l.Z.get("/FormulasiSasaran/".concat(e.Id_Formulasi),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("edit formulasi",a.data.data),o("formulasi_sasaran",a.data.data.formulasi_sasaran),o("Deskripsi",a.data.data.deskripsi),o("sumebr_data",a.data.data.sumebr_data),o("priode_pengukuran",a.data.data.priode_pengukuran)}catch(e){console.error("Failed to fetch user data:",e)}};console.log("cekdata",e.Id_Formulasi),console.log("ceknOMOR",e.nomor),(0,i.useEffect)(()=>{n()},[e.Id_Formulasi,e.nomor,o]);let d=(0,i.useRef)(null);(0,i.useEffect)(()=>{d.current&&d.current.focus()},[]);let[u,c]=(0,i.useState)(""),m=async a=>{let{formulasi_sasaran:r,Deskripsi:s,sumebr_data:t,priode_pengukuran:i}=a;console.log("data",a);try{let a=await l.Z.put("/FormulasiSasaran/".concat(e.nomor),{formulasi_sasaran:r,Deskripsi:s,sumebr_data:t,priode_pengukuran:i},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(c(""),e.data(),f.Am.success("Indikator Berhasil Diperbarui!",{position:"top-right"}),e.setVisible(!1))}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),f.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal memperbarui Indikator!";c(e),f.Am.error(e,{position:"top-right"})}else{console.log(e);let a="Gagal memperbarui indikator!, ".concat(e.message);c(a),f.Am.error(a,{position:"top-right"})}}};return(0,i.useEffect)(()=>{e.isVisible},[e.isVisible]),(0,s.jsx)("div",{className:"w-full h-full px-4",children:(0,s.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:r(m),children:[(0,s.jsxs)("div",{className:"flex flex-col  flex-col-row",children:[(0,s.jsx)("label",{htmlFor:"formulasi_sasaran",className:"block mb-2 required",children:"Formulasi Sasaran"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.formulasi_sasaran?"border-red-500":"border-gray-300"),type:"text",id:"formulasi_sasaran",...a("formulasi_sasaran",{required:"Formulasi Sasaran is required."}),placeholder:"Enter your Formulasi Sasaran"}),t.formulasi_sasaran&&(0,s.jsx)("p",{className:"text-red-500",children:t.formulasi_sasaran.message}),(0,s.jsx)("label",{htmlFor:"Deskripsi",className:"block mb-2 required",children:"Deskripsi"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.Deskripsi?"border-red-500":"border-gray-300"),type:"text",id:"Deskripsi",...a("Deskripsi",{required:"Deskripsi is required."}),placeholder:"Enter your Deskripsi"}),t.Deskripsi&&(0,s.jsx)("p",{className:"text-red-500",children:t.Deskripsi.message}),(0,s.jsx)("label",{htmlFor:"sumebr_data",className:"block mb-2 required",children:"Sumber Data"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.sumebr_data?"border-red-500":"border-gray-300"),type:"text",id:"sumebr_data",...a("sumebr_data",{required:"Sumber Data is required."}),placeholder:"Enter your Sumber Data"}),t.sumebr_data&&(0,s.jsx)("p",{className:"text-red-500",children:t.sumebr_data.message}),(0,s.jsx)("label",{htmlFor:"priode_pengukuran",className:"block mb-2 required",children:"Periode Pengukuran"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:border-blue-500 ".concat(t.priode_pengukuran?"border-red-500":"border-gray-300"),type:"text",id:"priode_pengukuran",...a("priode_pengukuran",{required:"Periode Pengukuran is required."}),placeholder:"Enter your Periode Pengukuran"}),t.priode_pengukuran&&(0,s.jsx)("p",{className:"text-red-500",children:t.priode_pengukuran.message})]}),(0,s.jsx)("div",{className:"py-5 flex flex-col",children:(0,s.jsx)(b.Z,{text:"Edit Formulasi Indikator Sasaran",className:"h-10"})})]})})},w=e=>{let{register:a,handleSubmit:r,formState:{errors:t},setValue:o}=(0,p.cI)({defaultValues:{Satuan:"",IDIndikatorSasaran:e.Id_Indikator,IdKa1:"",IdKa2:"",IdT1:"",IdT2:"",IdT3:"",IdT4:"",IdT5:"",KA1:"",KA2:"",T1:"",T2:"",T3:"",T4:"",T5:""}});console.log("indikator sasaran",e.Id_Indikator);let n=async()=>{try{let a=(await l.Z.get("/formulir2/konsisi-indikator/".concat(e.Id_Indikator),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})).data;o("Satuan",a.satuan),o("IDIndikatorSasaran",e.Id_Indikator),o("KA1",a.kondisi[0].Target),o("IdKa1",a.kondisi[0].Pk_RIndikatorTujuanTahun_Id),o("KA2",a.kondisi[1].Target),o("IdKa2",a.kondisi[1].Pk_RIndikatorTujuanTahun_Id),o("T1",a.kondisi[2].Target),o("IdT1",a.kondisi[2].Pk_RIndikatorTujuanTahun_Id),o("T2",a.kondisi[3].Target),o("IdT2",a.kondisi[3].Pk_RIndikatorTujuanTahun_Id),o("T3",a.kondisi[4].Target),o("IdT3",a.kondisi[4].Pk_RIndikatorTujuanTahun_Id),o("T4",a.kondisi[5].Target),o("IdT4",a.kondisi[5].Pk_RIndikatorTujuanTahun_Id),o("T5",a.kondisi[6].Target),o("IdT5",a.kondisi[6].Pk_RIndikatorTujuanTahun_Id)}catch(e){console.error("Failed to fetch user data:",e)}};console.log(e.Id_Indikator),(0,i.useEffect)(()=>{n()},[e.Id_Indikator,o]);let d=(0,i.useRef)(null);(0,i.useEffect)(()=>{d.current&&d.current.focus()},[]);let[u,c]=(0,i.useState)(""),m=async a=>{let{Satuan:r,IDIndikatorSasaran:s,KA1:t,KA2:i,T1:o,T2:n,T3:d,T4:u,T5:m,IdKa1:h,IdKa2:b,IdT1:p,IdT2:x,IdT3:g,IdT4:k,IdT5:I}=a,j=parseInt(s.toString(),10),w=parseInt(t.toString(),10),y=parseInt(i.toString(),10),S=parseInt(o.toString(),10),N=parseInt(n.toString(),10),T=parseInt(d.toString(),10),v=parseInt(u.toString(),10),_=parseInt(m.toString(),10),F=parseInt(h.toString(),10),D=parseInt(b.toString(),10),A=parseInt(p.toString(),10),q=parseInt(x.toString(),10),E=parseInt(g.toString(),10),V=parseInt(k.toString(),10),C=parseInt(I.toString(),10);console.log("data",a);try{let a=await l.Z.put("/formulir2/konsisi-indikator/",{Satuan:r,IDIndikatorSasaran:j,ka1:w,ka2:y,t1:S,t2:N,t3:T,t4:v,t5:_,IdKa1:F,IdKa2:D,IdT1:A,IdT2:q,IdT3:E,IdT4:V,IdT5:C},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});200===a.status&&(console.log("response",a.status),c(""),e.data(),f.Am.success("Indikator sasaran berhasil diperbarui!",{position:"top-right"}),e.setVisible(!1))}catch(e){if(e.response&&401===e.response.status){let e="Unauthorized";c(e),f.Am.error(e,{position:"top-right"})}else if(e.response&&403===e.response.status){let e="Gagal memperbarui indikator sasaran!";c(e),f.Am.error(e,{position:"top-right"})}else{console.log(e);let a="Gagal memperbarui indikator sasaran!, ".concat(e.message);c(a),f.Am.error(a,{position:"top-right"})}}};return(0,i.useEffect)(()=>{e.isVisible},[e.isVisible]),(0,s.jsx)("div",{className:"w-full h-full px-4",children:(0,s.jsxs)("form",{className:"flex h-full pt-4 w-full justify-evenly flex-col",onSubmit:r(m),children:[(0,s.jsxs)("div",{className:"flex flex-col flex-col-row",children:[(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IDIndikatorSasaran?"border-red-500":"border-gray-300"),type:"hidden",value:e.Id_Indikator,id:"IDIndikatorSasaran",...a("IDIndikatorSasaran",{required:"IDIndikatorSasaran is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdKa1?"border-red-500":"border-gray-300"),type:"hidden",id:"IdKa1",...a("IdKa1",{required:"IdKa1 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdKa2?"border-red-500":"border-gray-300"),type:"hidden",id:"IdKa2",...a("IdKa2",{required:"IdKa2 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdT1?"border-red-500":"border-gray-300"),type:"hidden",id:"IdT1",...a("IdT1",{required:"IdT1 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdT2?"border-red-500":"border-gray-300"),type:"hidden",id:"IdT2",...a("IdT2",{required:"IdT2 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdT3?"border-red-500":"border-gray-300"),type:"hidden",id:"IdT3",...a("IdT3",{required:"IdT3 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdT4?"border-red-500":"border-gray-300"),type:"hidden",id:"IdT4",...a("IdT4",{required:"IdT4 is required."})}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.IdT5?"border-red-500":"border-gray-300"),type:"hidden",id:"IdT5",...a("IdT5",{required:"IdT5 is required."})}),(0,s.jsx)("label",{htmlFor:"satuan",className:"block mb-1 required",children:"Satuan"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.Satuan?"border-red-500":"border-gray-300"),type:"text",id:"satuan",...a("Satuan",{required:"Satuan is required."}),placeholder:"Enter your Satuan Indikator"}),t.Satuan&&(0,s.jsx)("p",{className:"text-red-500",children:t.Satuan.message}),(0,s.jsx)("label",{htmlFor:"KA1",className:"block mb-1 required",children:"Kondisi Awal 1"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.KA1?"border-red-500":"border-gray-300"),type:"text",id:"KA1",...a("KA1",{required:"Kondisi Awal 1 is required."}),placeholder:"Enter your Kondisi Awal 1 Indikator"}),t.KA1&&(0,s.jsx)("p",{className:"text-red-500",children:t.KA1.message}),(0,s.jsx)("label",{htmlFor:"KA2",className:"block mb-1 required",children:"Kondisi Awal 2"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.KA2?"border-red-500":"border-gray-300"),type:"text",id:"KA2",...a("KA2",{required:"Kondisi Awal 2 is required."}),placeholder:"Enter your Kondisi Awal 2 Indikator"}),t.KA2&&(0,s.jsx)("p",{className:"text-red-500",children:t.KA2.message}),(0,s.jsx)("label",{htmlFor:"T1",className:"block mb-1 required",children:"Tahun 1"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.T1?"border-red-500":"border-gray-300"),type:"text",id:"T1",...a("T1",{required:"Tahun 1 is required."}),placeholder:"Enter your Tahun 1 Indikator"}),t.T1&&(0,s.jsx)("p",{className:"text-red-500",children:t.T1.message}),(0,s.jsx)("label",{htmlFor:"T2",className:"block mb-1 required",children:"Tahun 2"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.T2?"border-red-500":"border-gray-300"),type:"text",id:"T2",...a("T2",{required:"Tahun 2 is required."}),placeholder:"Enter your Tahun 2 Indikator"}),t.T2&&(0,s.jsx)("p",{className:"text-red-500",children:t.T2.message}),(0,s.jsx)("label",{htmlFor:"T3",className:"block mb-1 required",children:"Tahun 3"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.T3?"border-red-500":"border-gray-300"),type:"text",id:"T3",...a("T3",{required:"Tahun 3 is required."}),placeholder:"Enter your Tahun 3 Indikator"}),t.T3&&(0,s.jsx)("p",{className:"text-red-500",children:t.T3.message}),(0,s.jsx)("label",{htmlFor:"T4",className:"block mb-1 required",children:"Tahun 4"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.T4?"border-red-500":"border-gray-300"),type:"text",id:"T4",...a("T4",{required:"Tahun 4 is required."}),placeholder:"Enter your Tahun 4 Indikator"}),t.T4&&(0,s.jsx)("p",{className:"text-red-500",children:t.T4.message}),(0,s.jsx)("label",{htmlFor:"T5",className:"block mb-1 required",children:"Tahun 5"}),(0,s.jsx)("input",{className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(t.T5?"border-red-500":"border-gray-300"),type:"text",id:"T5",...a("T5",{required:"Tahun 5 is required."}),placeholder:"Enter your Tahun 5 Indikator"}),t.T5&&(0,s.jsx)("p",{className:"text-red-500",children:t.T5.message})]}),(0,s.jsx)("div",{className:"py-5 flex flex-col",children:(0,s.jsx)(b.Z,{text:"Edit Indikator",className:"h-10"})})]})})};var y=()=>{var e,a,r;let b=m(),p=localStorage.getItem("detailFormulasi2");(0,h.Z)();let f=b.headerData.map(e=>{switch(e.toLowerCase()){case"misi":return{name:e,wrap:!0,selector:e=>e.misi};case"tujuan":return{name:e,wrap:!0,selector:e=>e.tujuan};case"indikator tujuan":return{name:e,wrap:!0,selector:e=>e.indikator_tujuan};case"sasaran":return{name:e,wrap:!0,selector:e=>e.sasaran};case"indikator sasaran":return{name:e,wrap:!0,selector:e=>e.indikator_sasaran};default:return null}}).filter(Boolean),g=b.headerDataFormulasi.map(e=>{switch(e.toLowerCase()){case"no":return{name:e,wrap:!0,selector:(e,a)=>a+1};case"aksi":return{name:e,cell:(e,a)=>(0,s.jsxs)("div",{className:"flex flex-row justify-around w-full",children:[(0,s.jsx)(n.AWu,{style:{cursor:"pointer"},className:"text-red-500 w-5 h-5",onClick:()=>[b.handleDeleteFormulasi(e.Pk_FormulasiSasaran_Id),b.setNomor(a+1)]}),(0,s.jsx)(u.zmo,{style:{cursor:"pointer",marginRight:"10px"},onClick:()=>[b.handleEditFormulasi(p),b.setParams(e.Pk_FormulasiSasaran_Id)],className:"text-blue-500 w-5 h-5"})]}),ignoreRowClick:!0,button:!0};case"formulasi":return{name:e,wrap:!0,selector:e=>e.formulasi_sasaran};case"deskripsi":return{name:e,wrap:!0,selector:e=>e.deskripsi};case"sumber data":return{name:e,wrap:!0,selector:e=>e.sumebr_data};case"periode pengukuran":return{name:e,wrap:!0,selector:e=>e.priode_pengukuran};default:return null}}).filter(Boolean),k=b.headerDataDetail.map(e=>{if("aksi"===e.toLocaleLowerCase())return{name:e,cell:e=>(0,s.jsx)("div",{className:"flex flex-row justify-around w-full",children:(0,s.jsx)(u.zmo,{style:{cursor:"pointer",marginRight:"10px"},onClick:()=>b.handleEditIndikator(p),className:"text-blue-500 w-5 h-5"})}),ignoreRowClick:!0,button:!0};if("satuan indikator"===e.toLocaleLowerCase())return{name:e,wrap:!0,selector:e=>(console.log("Row satuan value:",e.satuan),e.satuan)};{let a=e.replace("Tahun ","");return{name:e,wrap:!0,selector:e=>{let r=e.kondisi.find(e=>e.Tahun===a);return r?r.Target:"-"}}}}).filter(Boolean),y=async()=>{try{let e=await l.Z.get("/formulir2/information/".concat(p),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Fetch Data Response Informasi:",e.data),b.setDataTable([e.data]),b.setRecord([e.data])}catch(e){console.log("Error fetching users:",e)}},S={headCells:{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},cells:{style:{whiteSpace:"normal",wordWrap:"break-word",overflow:"visible"}},table:{style:{tableLayout:"fixed",width:"100%"}}},N=async()=>{try{let e=await l.Z.get("/formulir2/konsisi-indikator/".concat(p),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Fetch Data Detail Response:",e.data),b.setDataTableDetail([e.data]),b.setRecordDetail([e.data])}catch(e){console.log("Error fetching users:",e)}},T=async()=>{try{let e=await l.Z.get("/FormulasiSasaran/".concat(p),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});console.log("Fetch Data Formulasi Response:",e.data.data),b.setDataTableFormulasi(e.data.data),b.setRecordFormulasi(e.data.data)}catch(e){console.log("Error fetching users:",e)}};return console.log("id",p),(0,i.useEffect)(()=>{y(),N(),T()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{isVisibleSmall:b.isVisibleAddFormulasi,setIsVisibleSmall:b.setIsVisibleAddFormulasi,onCloseSmall:()=>b.setIsVisibleAddFormulasi(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Add Formulasi"}),(0,s.jsx)("div",{className:"w-full h-full ",children:(0,s.jsx)(x,{Id_Sasaran:p,data:T,setVisible:b.setIsVisibleAddFormulasi,isVisible:b.isVisibleAddFormulasi})})]})}),(0,s.jsx)(o.Z,{isVisibleSmall:b.isVisibleEditIndikator,setIsVisibleSmall:b.setIsVisibleEditIndikator,onCloseSmall:()=>b.setIsVisibleEditIndikator(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit Indikator"}),(0,s.jsx)("div",{className:"w-full h-full ",children:(0,s.jsx)(w,{Id_Indikator:p,data:N,setVisible:b.setIsVisibleEditIndikator,isVisible:b.isVisibleEditIndikator})})]})}),(0,s.jsx)(o.Z,{isVisibleSmall:b.isVisibleEditFormulasi,setIsVisibleSmall:b.setIsVisibleEditFormulasi,onCloseSmall:()=>b.setIsVisibleEditFormulasi(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Edit Formulasi"}),(0,s.jsx)("div",{className:"w-full h-full ",children:(0,s.jsx)(j,{Id_Formulasi:b.idFormulasi,data:T,nomor:b.params,setVisible:b.setIsVisibleEditFormulasi,isVisible:b.isVisibleEditFormulasi})})]})}),(0,s.jsx)(c.Z,{isVisibleConfirm:b.isVisibleDeleteFormulasi,setIsVisibleConfirm:b.setIsVisibleDeleteFormulasi,onCloseConfirm:()=>b.setIsVisibleDeleteFormulasi(!1),children:(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full  items-start flex-col",children:[(0,s.jsx)("div",{className:"w-full absolute items-start flex  justify-center",children:"Delete Formulasi"}),(0,s.jsx)("div",{className:"w-full h-full ",children:(0,s.jsx)(I,{id:b.idFormulasi,data:T,nomor:b.nomor,setVisible:b.setIsVisibleDeleteFormulasi,isVisible:b.isVisibleDeleteFormulasi})})]})}),(0,s.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0",children:(0,s.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex h-full flex-col",children:(0,s.jsxs)("div",{className:"lg:px-8 px-3 w-full h-full",children:[(0,s.jsx)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:(0,s.jsx)("h1",{className:"text-[#408EFD] text-xl font-semibold",children:"Information"})}),(0,s.jsx)(t.ZP,{columns:f,data:b.record,subHeaderComponent:!0,responsive:!0,customStyles:S,highlightOnHover:!0}),(0,s.jsx)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:(0,s.jsx)("h1",{className:"text-[#408EFD] text-xl font-semibold",children:"Kondisi Indikator"})}),(0,s.jsx)(t.ZP,{columns:k,data:b.recordDetail,subHeaderComponent:!0,responsive:!0,highlightOnHover:!0,customStyles:S}),(0,s.jsxs)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h1",{className:"text-[#408EFD] text-xl font-semibold",children:"Formulasi"})}),(null===(e=b.recordFormulasi)||void 0===e?void 0:e.Pk_FormulasiSasaran_Id)==0?(0,s.jsx)("div",{children:(0,s.jsx)(d.Z,{text:"Tambah Detail",onClick:()=>b.handleAddFormulir()})}):(0,s.jsx)(s.Fragment,{})]}),(null===(a=b.recordFormulasi)||void 0===a?void 0:a.Pk_FormulasiSasaran_Id)==null||(null===(r=b.recordFormulasi)||void 0===r?void 0:r.Pk_FormulasiSasaran_Id)==0?(0,s.jsx)("div",{className:"mt-4 flex justify-start text-white font-medium text-lg items-center w-full bg-yellow-400 h-16 rounded-lg",children:(0,s.jsx)("h1",{className:"pl-5",children:"Data Kosong, Silahkan tambahkan formulasi"})}):(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsx)(t.ZP,{columns:g,data:[b.recordFormulasi],subHeaderComponent:!0,responsive:!0,customStyles:S,highlightOnHover:!0})})]})})}),";"]})}},1641:function(e,a,r){"use strict";var s=r(7437);r(2265);var t=r(3781),l=r(6408);a.Z=e=>{let{text:a,onClick:r,className:i,title:o,tooltip:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{"data-tooltip-id":n,"data-tooltip-content":n,children:(0,s.jsxs)("button",{className:"bg-transparent font-button  outline-2 transition-colors outline-none outline-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold rounded flex items-center gap-1 ".concat(i),type:"button",onClick:r,title:o||"Tambah Data",children:[(0,s.jsx)(t.B8K,{className:"font-bold"})," ",a]})}),(0,s.jsx)(l.u,{id:n,className:"tooltip"})]})}},7702:function(e,a,r){"use strict";var s=r(7437);r(2265),a.Z=e=>{let{text:a,onClick:r,className:t}=e;return(0,s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(t),type:"button",onClick:r,children:a})}},8079:function(e,a,r){"use strict";var s=r(7437);r(2265),a.Z=e=>{let{text:a,onClick:r,className:t}=e;return(0,s.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(t),type:"button",onClick:r,children:a})}},5447:function(e,a,r){"use strict";var s=r(7437);r(2265),a.Z=e=>{let{text:a,className:r}=e;return(0,s.jsx)("button",{className:"bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors ".concat(r),type:"submit",children:a})}},4200:function(e,a,r){"use strict";r.d(a,{Z:function(){return o}});var s=r(7437),t=r(2265),l=()=>{let[e,a]=(0,t.useState)(!1);return{modal:{isVisibleConfirm:e,setIsVisibleConfirm:a,onCloseConfirm:()=>a(!1)},visible:e,setVisible:a}},i=r(5097),o=e=>{let{isVisibleConfirm:a,setIsVisibleConfirm:r,onCloseConfirm:t,children:o,title:n,className:d}=e;return l(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,s.jsx)("div",{onClick:()=>t(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"}),(0,s.jsxs)("div",{className:" h-screen flex lg:w-[50%] w-full  flex-col justify-center ",children:[(0,s.jsx)("div",{onClick:()=>t(),className:"md:h-[50%] h-[50%] w-full"}),(0,s.jsxs)("div",{className:"h-[30%] relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,s.jsxs)("div",{onClick:()=>t(),className:"z-10 h-[10%] flex justify-between items-center p-5 cursor-pointer rounded-md bg-blue-500 text-white w-full ".concat(d),children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:n}),(0,s.jsx)(i.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,s.jsx)("div",{className:"overflow-y-auto",children:o})]}),(0,s.jsx)("div",{onClick:()=>t(),className:"md:h-[50%]  h-[50%]  w-full"})]}),(0,s.jsx)("div",{onClick:()=>t(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"})]})})}},6409:function(e,a,r){"use strict";var s=r(2265);a.Z=()=>{let[e,a]=(0,s.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:a,onCloseSmall:()=>a(!1)},visible:e,setVisible:a}}},710:function(e,a,r){"use strict";var s=r(7437),t=r(6409),l=r(5097);a.Z=e=>{let{isVisibleSmall:a,setIsVisibleSmall:r,onCloseSmall:i,children:o,title:n}=e;return(0,t.Z)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"\n          ".concat(a?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,s.jsx)("div",{onClick:()=>i(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,s.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,s.jsx)("div",{onClick:()=>i(),className:"md:h-[20%] h-[10%]  w-full"}),(0,s.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,s.jsxs)("div",{onClick:()=>i(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:n}),(0,s.jsx)(l.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,s.jsx)("div",{className:"overflow-y-auto",children:o})]}),(0,s.jsx)("div",{onClick:()=>i(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,s.jsx)("div",{onClick:()=>i(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,a,r){"use strict";r.d(a,{H:function(){return i}});var s=r(2126);let t="",l=s.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),i=()=>{let e=localStorage.getItem("token");e&&(t=e,l.defaults.headers.common.Authorization="Bearer ".concat(t))};l.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),a.Z=l},4193:function(){},9071:function(){}},function(e){e.O(0,[3131,5706,1779,6051,522,2126,6713,9343,9500,6408,2971,7023,1744],function(){return e(e.s=8501)}),_N_E=e.O()}]);