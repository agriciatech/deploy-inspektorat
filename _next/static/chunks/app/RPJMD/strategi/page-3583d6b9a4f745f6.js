(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7150],{1058:function(e,t,a){Promise.resolve().then(a.bind(a,3072))},3072:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var l=a(7437),s=a(2265),i=a(2546),r=a(6215),n=a(5039),o=e=>{let{onChange:t,className:a}=e,[o,c,d]=(0,n.c)("/formulir1/",!1),[u,m]=(0,s.useState)([]),[x,f]=(0,s.useState)(null),[h,b]=(0,s.useState)([]),[j,p]=(0,s.useState)(null);return(0,s.useEffect)(()=>{o&&m(o.flatMap(e=>{var t;return null===(t=e.misis)||void 0===t?void 0:t.map(e=>({id_misi:e.id_misi,misi:e.misi}))}))},[o]),(0,s.useEffect)(()=>{if(null!==x&&o){let e=o.flatMap(e=>{var t;return null===(t=e.misis)||void 0===t?void 0:t.filter(e=>e.misi===x)});if(console.log("Selected Misi Data:",e),e.length>0){let t=e.flatMap(e=>(null==e?void 0:e.tujuans)?e.tujuans.map(e=>({id_tujuan:e.id_tujuan,tujuan:e.tujuan})):[]);console.log("Transformed Tujuan:",t),b(t)}else b([])}else b([])},[x,o]),(0,l.jsxs)("div",{className:"flex gap-3 ".concat(a),children:[(0,l.jsx)(r.Z,{dataComponent:(0,l.jsx)(i.Z,{label:"Pilih Misi",options:u,optionLabel:e=>null==e?void 0:e.misi,optionValue:e=>null==e?void 0:e.misi,onChange:e=>{t(e.target.value,"misi"),f(e.target.value)},defaultText:"Pilih Misi"}),text:"Memuat dropdown data Misi",error:d,loading:c}),(0,l.jsx)(r.Z,{dataComponent:(0,l.jsx)(i.Z,{label:"Pilih Tujuan",options:h,optionLabel:e=>e.tujuan,optionValue:e=>e.tujuan,onChange:e=>{t(e.target.value,"tujuan"),p(e.target.value)},defaultText:"Pilih Tujuan",disabled:!x}),text:"Memuat dropdown data tujuan by misi",error:d,loading:c})]})},c=a(681),d=a(7107),u=a(4200),m=a(9343),x=a(9938),f=e=>{let{row:t,onCloseModal:a}=e,[i,r]=(0,s.useState)("");(0,s.useEffect)(()=>{t&&t.strategy&&r(t.strategy)},[t]);let{register:n,handleSubmit:o,formState:{errors:c},reset:d}=(0,m.cI)(),u=async e=>{let t={strategi:e.strategi};await j(t),d(),a&&a()},[f,h,b,j]=(0,x.Y)("/Strategi/".concat(null==t?void 0:t.id_strategy),"put");return(0,s.useEffect)(()=>{h||b||!f||r(f.strategy)},[f,h,b]),(0,l.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,l.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:[(0,l.jsx)("h3",{children:"Anda yakin update data strategi ini?"}),(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full p-3",children:(0,l.jsxs)("form",{onSubmit:o(u),className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"strategi",className:"block mb-1 required",children:"Update strategi"}),(0,l.jsx)("input",{type:"text",id:"strategi",defaultValue:i,placeholder:"Tulis strategi anda...",...n("strategi",{required:"strategi is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(c.strategi?"border-red-500":"border-gray-300")}),c.strategi&&(0,l.jsx)("span",{className:"text-red-500 text-sm",children:c.strategi.message})]})}),(0,l.jsx)("button",{type:"submit",onClick:o(u),className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Ok"})]})})},h=a(7702),b=a(8079),j=e=>{var t,a,s;let i="/Strategi/".concat(null===(t=e.data)||void 0===t?void 0:t.id_strategy),[r,n,o,c]=(0,x.Y)(i,"delete"),d=async()=>{await c(i),e.onCloseModal&&e.onCloseModal()};return(0,l.jsxs)("div",{className:"flex relative justify-start pt-3 h-full items-start flex-col p-2",children:[(0,l.jsx)("div",{className:"w-full items-start flex justify-center",children:"Anda yakin akan delete strategi"}),(0,l.jsx)("p",{className:"w-full tex-center text-lg font-bold flex justify-center items-center",children:null===(a=e.data)||void 0===a?void 0:a.strategy}),(0,l.jsxs)("div",{className:"button flex gap-2 justify-center items-center w-full mt-6 pt-6 px-2",children:[(0,l.jsx)(h.Z,{text:"Ok",onClick:d}),(0,l.jsx)(b.Z,{text:"Batal",onClick:e.onCloseModal},null===(s=e.data)||void 0===s?void 0:s.id_strategy)]})]})},p=a(1641),g=e=>{let{Fk_Strategi_Id:t,onCloseModal:a}=e,{register:s,handleSubmit:i,formState:{errors:r},reset:n}=(0,m.cI)(),[o,,c,d]=(0,x.Y)("/ArahKebijakan","post"),u=async e=>{let l={arah_kebijakan:e.arah_kebijakan,Fk_Strategi_Id:t};await d(l),n(),a&&a()};return(0,l.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,l.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-center items-center w-full",children:[(0,l.jsx)("h3",{children:"Tambah Arah Kebijakan"}),(0,l.jsx)("div",{className:"konten flex flex-col justify-center items-center w-full p-3",children:(0,l.jsxs)("form",{onSubmit:i(u),className:"w-full flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"arah_kebijakan",className:"block mb-1 required",children:"Isi Arah Kebijakan"}),(0,l.jsx)("input",{type:"text",id:"arah_kebijakan",placeholder:"Tulis arah kebijakan anda...",...s("arah_kebijakan",{required:"arah kebijakan is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.arah_kebijakan?"border-red-500":"border-gray-300")}),r.arah_kebijakan&&(0,l.jsx)("span",{className:"text-red-500 text-sm",children:r.arah_kebijakan.message}),(0,l.jsx)("button",{type:"submit",className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Simpan"})]})})]})})},k=e=>{var t,a,s;let i="/ArahKebijakan/".concat(null===(t=e.data)||void 0===t?void 0:t.id_arah_Kebijakan),[r,n,o,c]=(0,x.Y)(i,"delete"),d=async()=>{await c(i),e.onCloseModal&&e.onCloseModal()};return(0,l.jsxs)("div",{className:"flex relative justify-start pt-3 h-full items-start flex-col p-2",children:[(0,l.jsx)("div",{className:"w-full items-start flex justify-center",children:"Anda yakin akan menghapus arah kebijakan"}),(0,l.jsx)("p",{className:"w-full tex-center text-lg font-bold flex justify-center items-center",children:null===(a=e.data)||void 0===a?void 0:a.ArahKebijakan}),(0,l.jsxs)("div",{className:"button flex gap-2 justify-center items-center w-full mt-6 pt-6 px-2",children:[(0,l.jsx)(h.Z,{text:"Ok",onClick:d}),(0,l.jsx)(b.Z,{text:"Batal",onClick:e.onCloseModal},null===(s=e.data)||void 0===s?void 0:s.id_indikator)]})]})},w=e=>{let{row:t,onCloseModal:a}=e,[i,r]=(0,s.useState)("");(0,s.useEffect)(()=>{t&&t.ArahKebijakan&&r(t.ArahKebijakan)},[t]);let{register:n,handleSubmit:o,formState:{errors:c},reset:d}=(0,m.cI)(),u=async e=>{let t={arah_kebijakan:e.arah_kebijakan};await j(t),d(),a&&a()},[f,h,b,j]=(0,x.Y)("/ArahKebijakan/".concat(null==t?void 0:t.id_arah_Kebijakan),"put");return(0,s.useEffect)(()=>{h||b||!f||r(f.ArahKebijakan)},[f,h,b]),(0,l.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,l.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:[(0,l.jsx)("h3",{children:"Anda yakin update data arah_kebijakan ini?"}),(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full p-3",children:(0,l.jsxs)("form",{onSubmit:o(u),className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"arah_kebijakan",className:"block mb-1 required",children:"Update arah_kebijakan"}),(0,l.jsx)("input",{type:"text",id:"arah_kebijakan",defaultValue:i,placeholder:"Tulis arah_kebijakan anda...",...n("arah_kebijakan",{required:"arah_kebijakan is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(c.arah_kebijakan?"border-red-500":"border-gray-300")}),c.arah_kebijakan&&(0,l.jsx)("span",{className:"text-red-500 text-sm",children:c.arah_kebijakan.message})]})}),(0,l.jsx)("button",{type:"submit",onClick:o(u),className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Simpan"})]})})},v=a(7863),y=a(8981),N=e=>{let{misi:t,strategy_id:a,arahKebijakan:i,onUpdateArahKebijakan:r}=e,[n,o]=(0,s.useState)(!1),[m,x]=(0,s.useState)(i);(0,s.useEffect)(()=>{x(i)},[i]);let[f,h]=(0,s.useState)(!1),[b,j]=(0,s.useState)(!1),[N,C]=(0,s.useState)(!1),[S,_]=(0,s.useState)(),A=()=>{h(!1),j(!1),C(!1),r()};return(0,l.jsxs)("div",{className:"flex pe-3 flex-col p-5 pt-3 gap-3 mt-5 pr-0",children:[(0,l.jsx)(d.Z,{isVisibleSmall:N,setIsVisibleSmall:C,onCloseSmall:()=>C(!1),title:"Update Data Arah Kebijakan",children:(0,l.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,l.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,l.jsx)(w,{row:S,onCloseModal:A})})})})}),(0,l.jsx)(u.Z,{isVisibleConfirm:b,setIsVisibleConfirm:j,onCloseConfirm:()=>j(!1),title:"Konfirmasi Delete Arah Kebijakan",children:(0,l.jsx)(k,{data:S,onCloseModal:A})}),(0,l.jsx)(d.Z,{isVisibleSmall:f,setIsVisibleSmall:h,onCloseSmall:()=>h(!1),title:"Tambah Arah Kebijakan Sasaran",children:(0,l.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,l.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,l.jsx)(g,{Fk_Strategi_Id:a,onCloseModal:A})})})})}),(0,l.jsx)("div",{className:"w-fit",children:(0,l.jsx)(p.Z,{text:"Arah Kebijakan",onClick:function(){h(!0)},className:"w-fit px-3 py-1",tooltip:"Tambah Arah Kebijakan Baru"})}),(0,l.jsx)("div",{className:"w-full",children:m&&m.length>0?(0,l.jsx)(c.ZP,{columns:[{name:"Nomor",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Aksi",cell:(e,t)=>(0,l.jsxs)("div",{className:"flex flex-row justify-start gap-2 w-full",children:[(0,l.jsx)(v.Z,{onClick:()=>{console.log("roww",e),_(e),j(!0)},tooltip:'Hapus Data Arah Kebijakan "'.concat(e.ArahKebijakan,'"')}),(0,l.jsx)(y.Z,{onClick:()=>{_(e),C(!0)},tooltip:'Edit Data Arah Kebijakan "'.concat(e.ArahKebijakan,'"')})]}),width:"10%",ignoreRowClick:!0},{name:"Arah Kebijakan",selector:e=>e.ArahKebijakan,sortable:!0,wrap:!0}],data:m,customStyles:{headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},responsive:!0,noDataComponent:"No arah kebijakan available",pagination:!0}):(0,l.jsx)("div",{children:"No arah kebijakan available"})})]})},C=e=>{let{misi:t,strategy:a,onUpdateData:i}=e,[r,n]=(0,s.useState)(!1),[o,m]=(0,s.useState)(!1),[x,h]=(0,s.useState)(!1),[b,p]=(0,s.useState)(),g=()=>{m(!1),h(!1),i(),n(!r)};return(0,l.jsxs)("div",{className:"flex pe-3 flex-col pt-3 gap-3 mt-3 pr-0 w-full",children:[(0,l.jsx)(d.Z,{isVisibleSmall:x,setIsVisibleSmall:h,onCloseSmall:()=>h(!1),title:"Update Data Strategi",children:(0,l.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,l.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,l.jsx)(f,{row:b,onCloseModal:g})})})})}),(0,l.jsx)(u.Z,{isVisibleConfirm:o,setIsVisibleConfirm:m,onCloseConfirm:()=>m(!1),title:"Konfirmasi Delete Startegi",children:(0,l.jsx)(j,{data:b,onCloseModal:g})}),(0,l.jsx)("div",{className:"w-full",children:a&&a.length>0?(0,l.jsx)(c.ZP,{columns:[{name:"No",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,wrap:!0,width:"7%"},{name:"Aksi",cell:(e,t)=>(0,l.jsxs)("div",{className:"flex flex-row justify-start w-full gap-2 ",children:[(0,l.jsx)(v.Z,{onClick:()=>{p(e),console.log("delete",e),m(!0)},tooltip:'Hapus Strategi "'.concat(e.strategy,'"')}),(0,l.jsx)(y.Z,{onClick:()=>{p(e),h(!0)},tooltip:'Edit Strategi "'.concat(e.strategy,'"')})]}),width:"7%",ignoreRowClick:!0},{name:"Nama Strategi",selector:e=>e.strategy,sortable:!0,wrap:!0}],data:a,pagination:!0,responsive:!0,customStyles:{headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:e=>{let{data:t}=e;return(0,l.jsx)(N,{misi:a.misi,strategy_id:t.id_strategy,arahKebijakan:t.list_arah_Kebijakan,onUpdateArahKebijakan:g})},noDataComponent:"No strategies available"}):(0,l.jsx)("div",{className:"text-center py-4",children:"No strategies available"})})]})},S=e=>{let{Fk_Sasaran_Id:t,onCloseModal:a}=e,{register:s,handleSubmit:i,formState:{errors:r},reset:n}=(0,m.cI)(),[o,,c,d]=(0,x.Y)("/Strategi","post"),u=async e=>{let l={strategi:e.strategi,Fk_Sasaran_Id:t};console.log("Post Data",l),await d(l),n(),a&&a()};return(0,l.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,l.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-center items-center w-full",children:[(0,l.jsx)("h3",{children:"Tambah Strategi"}),(0,l.jsx)("div",{className:"konten flex flex-col justify-center items-center w-full p-3",children:(0,l.jsxs)("form",{onSubmit:i(u),className:"w-full flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"strategi",className:"block mb-1 required",children:"Isi strategi"}),(0,l.jsx)("input",{type:"text",id:"strategi",placeholder:"Tulis strategi anda...",...s("strategi",{required:"strategi is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(r.strategi?"border-red-500":"border-gray-300")}),r.strategi&&(0,l.jsx)("span",{className:"text-red-500 text-sm",children:r.strategi.message}),(0,l.jsx)("button",{type:"submit",className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Ok"})]})})]})})};a(3519);var _=()=>{let[e,t]=(0,s.useState)(null),[a,i]=(0,s.useState)(null),[u,m]=(0,s.useState)(!1),[x,f,h]=(0,n.c)("/formulir3/search?misi=".concat(e,"&tujuan=").concat(a),!1,1e3,u),b=[{name:"Nomor",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Sasaran",selector:e=>e.indikator_tujuan,sortable:!0,wrap:!0},{name:"Tujuan",selector:e=>a,sortable:!0,wrap:!0},{name:"Misi",selector:t=>e,sortable:!0,wrap:!0}],[j,g]=(0,s.useState)(""),k=Array.isArray(x)?x.filter(e=>e.indikator_tujuan.toLowerCase().includes(j.toLowerCase())):[],[w,v]=(0,s.useState)(!1);function y(){v(!0)}let N=()=>{v(!1),m(!u)};return(0,l.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3",children:(0,l.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full",children:[(0,l.jsxs)("div",{className:"flex flex-col xl:flex-row justify-center items-end select-area bg-success w-full mb-5 gap-4 bg-blue-600 p-4 rounded-lg text-white",children:[(0,l.jsx)(o,{onChange:(e,a)=>{"misi"===a?(console.log(e),t(e)):"tujuan"===a&&(console.log(e),i(e))},className:"xl:w-[90%] w-full flex-col lg:flex-row"}),(0,l.jsxs)("div",{className:"sasaran-filter w-full ",children:[(0,l.jsx)("label",{htmlFor:"",children:"Cari Berdasarkan Sasaran"}),(0,l.jsx)("input",{type:"text",value:j,onChange:e=>{g(e.target.value)},placeholder:"Cari berdasarkan Sasaran",className:"p-2 w-full border rounded outline-1 outline-blue-600  flex justify-center text-black  items-center ",disabled:!a})]})]}),(0,l.jsx)(r.Z,{error:h,loading:f,text:"Loading data",dataComponent:(0,l.jsx)("div",{className:"w-full",children:k&&k.length>0?(0,l.jsx)(c.ZP,{columns:b,data:k,customStyles:{headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},expandableRows:!0,pagination:!0,responsive:!0,expandOnRowClicked:!0,expandableRowsComponent:t=>{let{data:a}=t;return(0,l.jsxs)("div",{className:"w-full p-5 pr-0",children:[(0,l.jsx)(d.Z,{isVisibleSmall:w,setIsVisibleSmall:v,onCloseSmall:()=>v(!1),title:"Tambah Strategi Sasaran",children:(0,l.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,l.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,l.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,l.jsx)(S,{Fk_Sasaran_Id:a.id_sasaran,onCloseModal:N})})})})}),(0,l.jsx)("div",{className:"w-fit",children:(0,l.jsx)(p.Z,{tooltip:"Tambah Strategi Baru",text:"Strategi",onClick:y,className:"px-3 py-1"})}),(0,l.jsx)(C,{misi:e,strategy:a.data_Strategy,onUpdateData:N})]})},progressPending:f,noDataComponent:"No sasaran available"}):(0,l.jsx)("div",{className:"bg-yellow-500 p-6 rounded-lg text-white text-md font-bold",children:"Data Kosong Atau Silakan pilih misi dan tujuan"})})})]})})}},1641:function(e,t,a){"use strict";var l=a(7437);a(2265);var s=a(3781),i=a(6408);t.Z=e=>{let{text:t,onClick:a,className:r,title:n,tooltip:o}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{"data-tooltip-id":o,"data-tooltip-content":o,children:(0,l.jsxs)("button",{className:"bg-transparent font-button  outline-2 transition-colors outline-none outline-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold rounded flex items-center gap-1 ".concat(r),type:"button",onClick:a,title:n||"Tambah Data",children:[(0,l.jsx)(s.B8K,{className:"font-bold"})," ",t]})}),(0,l.jsx)(i.u,{id:o,className:"tooltip"})]})}},7702:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{text:t,onClick:a,className:s}=e;return(0,l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(s),type:"button",onClick:a,children:t})}},8079:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{text:t,onClick:a,className:s}=e;return(0,l.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(s),type:"button",onClick:a,children:t})}},8981:function(e,t,a){"use strict";var l=a(7437);a(2265);var s=a(3781),i=a(6408);t.Z=e=>{let{onClick:t,className:a,tooltip:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{"data-tooltip-id":r,"data-tooltip-content":r,children:(0,l.jsx)("button",{type:"button",role:"button",onClick:t,children:(0,l.jsx)(s.Ph1,{className:"text-blue-600 hover:text-blue-800 transition-all ".concat(a),size:20})})}),(0,l.jsx)(i.u,{id:r,className:"tooltip"})]})}},7863:function(e,t,a){"use strict";var l=a(7437);a(2265);var s=a(3781),i=a(6408);t.Z=e=>{let{onClick:t,className:a,size:r,tooltip:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{"data-tooltip-id":n,"data-tooltip-content":n,children:(0,l.jsx)("button",{type:"button",role:"button",onClick:t,children:(0,l.jsx)(s.VgY,{className:"transition-all text-red-700 hover:text-red-800 ".concat(a),size:r||20})})}),(0,l.jsx)(i.u,{id:n,className:"tooltip"})]})}},6215:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{loading:t,error:a,dataComponent:s,text:i}=e;return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsx)("div",{className:"bg-slate-500 h-full min-h-[300px] text-white animate-pulse w-full text-sm p-2 rounded-lg flex justify-center items-center text-center mb-5",children:i||"Loading Data..."}):a?(0,l.jsxs)("div",{className:"text-red-700 font-bold text-lg",children:["Error: ",a.message]}):(0,l.jsx)(l.Fragment,{children:s})})}},2546:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{options:t,optionLabel:a,optionValue:s,onChange:i,defaultValue:r="",defaultText:n="Pilih ...",disabled:o,className:c,label:d}=e;return console.log("defaul value",r),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,l.jsx)("label",{htmlFor:n,children:d}),(0,l.jsxs)("select",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ".concat(c),onChange:i,defaultValue:r,disabled:o,id:n,children:[(0,l.jsx)("option",{value:"",disabled:!0,id:n,children:n}),null==t?void 0:t.map(e=>(0,l.jsx)("option",{value:s(e),children:a(e)},s(e)))]})]})}},4200:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(7437),s=a(2265),i=()=>{let[e,t]=(0,s.useState)(!1);return{modal:{isVisibleConfirm:e,setIsVisibleConfirm:t,onCloseConfirm:()=>t(!1)},visible:e,setVisible:t}},r=a(5097),n=e=>{let{isVisibleConfirm:t,setIsVisibleConfirm:a,onCloseConfirm:s,children:n,title:o,className:c}=e;return i(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"\n          ".concat(t?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,l.jsx)("div",{onClick:()=>s(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"}),(0,l.jsxs)("div",{className:" h-screen flex lg:w-[50%] w-full  flex-col justify-center ",children:[(0,l.jsx)("div",{onClick:()=>s(),className:"md:h-[50%] h-[50%] w-full"}),(0,l.jsxs)("div",{className:"h-[30%] relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,l.jsxs)("div",{onClick:()=>s(),className:"z-10 h-[10%] flex justify-between items-center p-5 cursor-pointer rounded-md bg-blue-500 text-white w-full ".concat(c),children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:o}),(0,l.jsx)(r.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,l.jsx)("div",{className:"overflow-y-auto",children:n})]}),(0,l.jsx)("div",{onClick:()=>s(),className:"md:h-[50%]  h-[50%]  w-full"})]}),(0,l.jsx)("div",{onClick:()=>s(),className:" h-screen flex lg:w-[50%] w-[5%]  md:w-[20%]"})]})})}},7107:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(7437),s=a(2265),i=()=>{let[e,t]=(0,s.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:t,onCloseSmall:()=>t(!1)},visible:e,setVisible:t}},r=a(5097),n=e=>{let{isVisibleSmall:t,setIsVisibleSmall:a,onCloseSmall:s,children:n,title:o}=e;return i(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"\n          ".concat(t?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,l.jsx)("div",{onClick:()=>s(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,l.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,l.jsx)("div",{onClick:()=>s(),className:"md:h-[20%] h-[10%]  w-full"}),(0,l.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,l.jsxs)("div",{onClick:()=>s(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:o}),(0,l.jsx)(r.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,l.jsx)("div",{className:"overflow-y-auto",children:n})]}),(0,l.jsx)("div",{onClick:()=>s(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,l.jsx)("div",{onClick:()=>s(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,t,a){"use strict";a.d(t,{H:function(){return r}});var l=a(2126);let s="",i=l.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),r=()=>{let e=localStorage.getItem("token");e&&(s=e,i.defaults.headers.common.Authorization="Bearer ".concat(s))};i.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=i},9938:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});var l=a(2265),s=a(361),i=a(3580);function r(e,t,a,r){let[n,o]=(0,l.useState)(a||null),[c,d]=(0,l.useState)(!1),[u,m]=(0,l.useState)(null),[x,f]=(0,l.useState)(null);return[n,c,u,async a=>{try{let l;d(!0);let n=localStorage.getItem("token"),c={Authorization:"Bearer ".concat(n)};switch(r&&(c["Content-Type"]="multipart/form-data"),t){case"post":l=await s.Z.post(e,a,{headers:c});break;case"put":l=await s.Z.put(e,a,{headers:c});break;case"delete":l=await s.Z.delete(e,{headers:c});break;default:throw Error("Unsupported HTTP method")}i.Am.success(l.data.message,{position:"top-right"}),o(l.data),console.log("response",l)}catch(e){console.log("error",e),i.Am.error(e.message,{position:"top-right"}),m(e)}finally{d(!1)}}]}},5039:function(e,t,a){"use strict";a.d(t,{c:function(){return i}});var l=a(2265),s=a(361);function i(e,t,a,i){let[r,n]=(0,l.useState)(),[o,c]=(0,l.useState)(!0),[d,u]=(0,l.useState)(null),[m,x]=(0,l.useState)();(0,l.useEffect)(()=>{null!=i&&x(i)},[i]);let f=async()=>{try{let t=localStorage.getItem("token"),a=await s.Z.get(e,{headers:{Authorization:"Bearer ".concat(t)}}),l=a.data.data?a.data.data:a.data;n(l),console.log(r)}catch(e){u(e)}finally{c(!1)}};return(0,l.useEffect)(()=>{f()},[m,e]),(0,l.useEffect)(()=>{if(t){let e=setInterval(f,a);return console.log("datasss",r),()=>clearInterval(e)}},[f,t,e]),[r,o,d]}},3519:function(){}},function(e){e.O(0,[3299,5706,1779,2126,6713,9343,9500,6408,2971,7023,1744],function(){return e(e.s=1058)}),_N_E=e.O()}]);