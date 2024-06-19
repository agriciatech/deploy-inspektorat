(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8392],{2158:function(e,t,l){Promise.resolve().then(l.bind(l,3302))},6463:function(e,t,l){"use strict";var s=l(1169);l.o(s,"usePathname")&&l.d(t,{usePathname:function(){return s.usePathname}}),l.o(s,"useRouter")&&l.d(t,{useRouter:function(){return s.useRouter}})},3302:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return K}});var s=l(7437),a=l(2265),n=l(2546),i=l(6215),o=l(5922),r=e=>{let{onChange:t}=e,l=localStorage.getItem("roleId"),[a,r,d]=(0,o.Y)("1"===l?"/users?role=OPD":"/evaluator",!1);return(0,s.jsx)("div",{className:"flex gap-3 ",children:(0,s.jsx)(i.Z,{error:d,loading:r,dataComponent:(0,s.jsx)(n.Z,{label:"Pilih Perangkat Daerah",options:a,optionLabel:e=>e.name.split(" ").map((e,t)=>0===t?e.charAt(0).toUpperCase()+e.slice(1):e).join(" "),optionValue:e=>e.Id,onChange:e=>{t(parseInt(e.target.value),"opd")},defaultText:"Pilih Perangkat Daerah"})})})},d=e=>{let{text:t,onClick:l,active:a,className:n}=e,i="transition-all bg-blue-500 font-button hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full ".concat(a?"bg-emerald-500 shadow-2xl opacity-100":""," focus:bg-emerald-500 ").concat(n);return(0,s.jsx)("button",{className:i,type:"button",role:"button",onClick:l,children:t})},c=l(681),u=l(3781),m=l(710),x=l(8507),f=()=>{let[e,t,l]=(0,o.Y)("/predikat",!1,!1);return(0,s.jsx)("div",{className:"w-full rounded-2xl",children:(0,s.jsx)(c.ZP,{columns:[{name:"Predikat",selector:e=>e.predikat,sortable:!0,wrap:!0,width:"20%"},{name:"Nilai",selector:e=>e.nilai,sortable:!0,width:"20%",wrap:!0},{name:"Penjelasan",selector:e=>e.penjelasan,sortable:!0,wrap:!0,width:"60%"}],data:e,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0,customStyles:{headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}}})})},h=l(6408),p=e=>{let{onClick:t,className:l,title:a,tooltip:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{"data-tooltip-id":n,"data-tooltip-content":n,children:(0,s.jsx)("button",{type:"button",role:"button",onClick:t,className:"rounded-full bg-blue-500 h-max p-1 hover:bg-blue-700 transition-all ".concat(l),title:a||"Add",children:(0,s.jsx)(u.B8K,{className:"text-white",size:16})})}),(0,s.jsx)(h.u,{id:n,className:"tooltip"})]})},j=l(9938),b=l(288),k=l(9343),g=e=>{let{Fk_Inspeksi:t,Fk_Komponen:l,onCloseModal:a}=e,{register:n,handleSubmit:i,formState:{errors:o},reset:r}=(0,k.cI)(),[d,,c,u]=(0,j.Y)("/rekomendasi","post"),m=async e=>{let s={Rekomendasi:e.rekomendasi,Fk_Inspeksi:t||0,Fk_Komponen:l};console.log("Post Data",s),await u(s),r(),a&&a()};return(0,s.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,s.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-center items-center w-full",children:[(0,s.jsx)("h3",{children:"Tambah Rekomendasi"}),(0,s.jsx)("div",{className:"konten flex flex-col justify-center items-center w-full p-3",children:(0,s.jsxs)("form",{onSubmit:i(m),className:"w-full flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"rekomendasi",className:"block mb-1 required",children:"Isi Rekomendasi"}),(0,s.jsx)("textarea",{rows:10,id:"rekomendasi",placeholder:"Tulis rekomendasi anda...",...n("rekomendasi",{required:"Rekomendasi is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(o.rekomendasi?"border-red-500":"border-gray-300")}),o.rekomendasi&&(0,s.jsx)("span",{className:"text-red-500 text-sm",children:o.rekomendasi.message}),(0,s.jsx)("button",{type:"submit",className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Ok"})]})})]})})},w=e=>{let{row:t,onCloseModal:l}=e,[n,i]=(0,a.useState)("");(0,a.useEffect)(()=>{t&&t.rekomendasi&&i(t.rekomendasi)},[t]);let{register:o,handleSubmit:r,formState:{errors:d},reset:c}=(0,k.cI)(),u=async e=>{let t={Rekomendasi:e.rekomendasi};await h(t),c(),l&&l()},[m,x,f,h]=(0,j.Y)("/rekomendasi/".concat(null==t?void 0:t.Id),"put");return(0,a.useEffect)(()=>{x||f||!m||i(m.Rekomendasi)},[m,x,f]),(0,s.jsx)("div",{className:"flex mt-2 w-full h-full justify-center items-center",children:(0,s.jsxs)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:[(0,s.jsx)("h3",{children:"Silakan Edit Rekomendasi Anda"}),(0,s.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full p-3",children:(0,s.jsxs)("form",{onSubmit:r(u),className:"w-full",children:[(0,s.jsx)("label",{htmlFor:"rekomendasi",className:"block mb-1 required",children:"rekomendasi"}),(0,s.jsx)("textarea",{rows:10,id:"rekomendasi",defaultValue:n,placeholder:"Tulis rekomendasi anda...",...o("rekomendasi",{required:"Rekomendasi is required."}),className:"border rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 ".concat(d.rekomendasi?"border-red-500":"border-gray-300")}),d.rekomendasi&&(0,s.jsx)("span",{className:"text-red-500 text-sm",children:d.rekomendasi.message})]})}),(0,s.jsx)("button",{type:"submit",onClick:r(u),className:"border bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Ok"})]})})},v=l(7702),N=l(8079),y=e=>{var t,l,a;let n="/rekomendasi/".concat(null===(t=e.data)||void 0===t?void 0:t.Id),[i,o,r,d]=(0,j.Y)(n,"delete"),c=async()=>{await d(n),e.onCloseModal&&e.onCloseModal()};return(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full items-start flex-col p-2",children:[(0,s.jsx)("div",{className:"w-full items-start flex justify-center",children:"Anda yakin akan menghapus rekomendasi"}),(0,s.jsx)("p",{className:"w-full tex-center text-lg font-bold flex justify-center items-center",children:null===(l=e.data)||void 0===l?void 0:l.rekomendasi}),(0,s.jsxs)("div",{className:"button flex gap-2 justify-end items-center w-full mt-6 pt-6 px-2",children:[(0,s.jsx)(v.Z,{text:"Ok",onClick:c}),(0,s.jsx)(N.Z,{text:"Batal",onClick:e.onCloseModal},null===(a=e.data)||void 0===a?void 0:a.Id)]})]})},S=l(4200),C=e=>{let{row:t,onCloseModal:l}=e,a="/rekomendasi/".concat(null==t?void 0:t.Id),n={Status:"Dikerjakan"},[i,o,r,d]=(0,j.Y)(a,"put"),c=async()=>{await d(n),l&&l()};return(0,s.jsxs)("div",{className:"flex relative justify-start pt-3 h-full items-start flex-col p-2",children:[(0,s.jsx)("div",{className:"w-full items-start flex justify-center",children:"Anda yakin akan konfirmasi rekomendasi dibawah telah dikerjakan?"}),(0,s.jsx)("p",{className:"w-full tex-center text-lg font-bold flex justify-center items-center",children:null==t?void 0:t.rekomendasi}),(0,s.jsxs)("div",{className:"button flex gap-2 justify-end items-center w-full mt-6 pt-6 px-2",children:[(0,s.jsx)(v.Z,{text:"Ok",onClick:c,className:"rounded-lg"}),(0,s.jsx)(N.Z,{text:"Batal",onClick:l,className:"rounded-lg"},null==t?void 0:t.Id)]})]})},P=l(361),R=l(5039),I=l(8981),Z=l(7863),E=l(4815),F=l(6212),K=()=>{let[e,t]=(0,a.useState)("");(0,a.useEffect)(()=>{{let e=window.localStorage.getItem("roleId");null!==e?t(e):console.error("roleId tidak tersedia di local storage")}},[]);let[l,n]=(0,a.useState)(!1),[h,k]=(0,a.useState)(),[v,N]=(0,a.useState)(),[K,T]=(0,a.useState)(),[V,_]=(0,a.useState)(!1),[A,D,O]=(0,o.Y)("/tahun",!1),[L,z,Y]=(0,R.c)("/users/".concat(h),!0,1e3),[M,q,H]=(0,o.Y)("/predikat",!1),[B,Q]=(0,a.useState)(),[U,G,J]=(0,R.c)("/inspeksis/".concat(h,"/").concat(B),!0,1e3,l),W=U?U.Id:null;(0,a.useEffect)(()=>{void 0===h||void 0===B?_(!0):(_(!1),console.log("inspeksi ID",W))},[h,B]);let[X,$,ee]=(0,R.c)("rekomendasi?inspeksi=".concat(W),!0,1e3,l),[et,el,es]=(0,F.z)("inspkesisgeneratepdf/".concat(W),!1,1e3,l),[ea,en,ei]=function(e,t){let[l,s]=(0,a.useState)(),[n,i]=(0,a.useState)(!0),[o,r]=(0,a.useState)(null),[d,c]=(0,a.useState)();return(0,a.useEffect)(()=>{null!=t&&c(t)},[t]),(0,a.useEffect)(()=>((async()=>{try{let t=localStorage.getItem("token"),l=(await P.Z.get(e,{headers:{Authorization:"Bearer ".concat(t)}})).data;s(l)}catch(e){r(e)}finally{i(!1)}})(),()=>{}),[e,d]),[l,n,o]}("components?inspeksi=".concat(W),l),[eo,er,ed]=(0,R.c)("components?inspeksi=".concat(W),!0,1e3,l),[ec,eu,em,ex]=(0,j.Y)("/inspeksis/".concat(W),"put"),[ef,eh]=(0,a.useState)(!1),[ep,ej]=(0,a.useState)(!1),[eb,ek]=(0,a.useState)(!1),[eg,ew]=(0,a.useState)(!1),[ev,eN]=(0,a.useState)(!1);(0,x.R)();let ey=[{name:"No",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,width:"10%"},{name:"Detail Catatan",selector:e=>e.Catatan.catatan,sortable:!0,wrap:!0}],eS=[{name:"No",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,width:"10%"},{name:"Aksi",cell:e=>(0,s.jsxs)("div",{className:"flex gap-2 text-xl cursor-pointer text-blue-700",children:[(0,s.jsx)(I.Z,{onClick:()=>{N(e),ek(!0),n(!l)},tooltip:"Edit Rekomendasi ".concat(e.rekomendasi)}),(0,s.jsx)(Z.Z,{tooltip:"Hapus Rekomendasi ".concat(e.rekomendasi),onClick:()=>{N(e),ew(!0),n(!l)}})]}),ignoreRowClick:!0,width:"20%"},{name:"Deskripsi Rekomendasi",selector:e=>e.rekomendasi,sortable:!0,wrap:!0,width:"auto"},{name:"Validasi",cell:e=>(0,s.jsx)("div",{className:"flex gap-2 ",children:e.status?(0,s.jsx)("div",{className:"text-sm bg-green-600 rounded-lg p-1 text-white",children:e.status}):(0,s.jsx)(E.Z,{onClick:()=>{N(e),eN(!0),n(!l)},tooltip:"Validasi rekomendasi telah dikerjakan",children:(0,s.jsx)(u.IQF,{className:"hover:text-blue-500 text-xl text-blue-800 cursor-pointer"})})}),ignoreRowClick:!0}],eC={headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}},eP=e=>{Q(e.Pk_Tahun_Id)},eR=(e,t)=>{ex({kategori:e.target.value})};console.log("dokumen",et);let eI=()=>{ej(!1),ek(!1),ew(!1),eN(!1),n(!l)},eZ=A.map(e=>(0,s.jsx)(d,{text:e.tahun,active:B===e.Pk_Tahun_Id,onClick:()=>eP(e)},e.Pk_Tahun_Id)),[eE,eF]=(0,a.useState)("");(0,a.useEffect)(()=>{eF((null==U?void 0:U.kategori)||"")},[U]);let eK=ea?ea.total:null,eT=ea?ea.data:null,[eV,e_]=(0,a.useState)();return(0,a.useEffect)(()=>{eT&&e_(!eT.flatMap(e=>[e.nilai,...e.SubKomponen.flatMap(e=>[e.Penilaian.nilai,...e.Keriteria.map(e=>e.KkeKeriteria.Kke.nilai)])]).includes(0))},[eT]),(0,s.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3 ",children:(0,s.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full gap-4",children:[(0,s.jsx)(m.Z,{isVisibleSmall:ef,setIsVisibleSmall:eh,onCloseSmall:()=>eh(!1),title:"Petunjuk Pemberian Predikat",children:(0,s.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,s.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,s.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,s.jsx)(f,{})})})})}),(0,s.jsx)(m.Z,{isVisibleSmall:ep,setIsVisibleSmall:ej,onCloseSmall:()=>ej(!1),title:"Tambah Rekomendasi",children:(0,s.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,s.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,s.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,s.jsx)(g,{Fk_Inspeksi:W,Fk_Komponen:K,onCloseModal:eI})})})})}),(0,s.jsx)(m.Z,{isVisibleSmall:eb,setIsVisibleSmall:ek,onCloseSmall:()=>ek(!1),title:"Edit Rekomendasi",children:(0,s.jsx)("div",{className:"flex mt-2 w-full h-full",children:(0,s.jsx)("div",{className:"content px-5 py-3 flex flex-col justify-start items-center w-full",children:(0,s.jsx)("div",{className:"konten flex flex-col justify-start items-center w-full",children:(0,s.jsx)(w,{row:v,onCloseModal:eI})})})})}),(0,s.jsx)(S.Z,{isVisibleConfirm:eg,setIsVisibleConfirm:ew,onCloseConfirm:()=>ew(!1),title:"Hapus Rekomendasi",className:"bg-red-800",children:(0,s.jsx)(y,{data:v,onCloseModal:eI})}),(0,s.jsx)(S.Z,{isVisibleConfirm:ev,setIsVisibleConfirm:eN,onCloseConfirm:()=>eN(!1),title:"Validasi Status Rekomendasi",children:(0,s.jsx)(C,{row:v,onCloseModal:eI})}),(0,s.jsx)("div",{className:"flex flex-col select-area bg-success w-full bg-blue-500 text-white p-4 py-5 rounded-lg shadow-xl",children:(0,s.jsx)(r,{onChange:(e,t)=>{"opd"===t&&k(e)}})}),(0,s.jsx)(i.Z,{loading:en,error:ei,dataComponent:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"komponen-penilaian items-center flex flex-col gap-3 p-4 px-3 justify-center rounded-md bg-white w-full mt-3 shadow-lg py-7",children:[V?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"title  fw-bold mb-2",children:(0,s.jsxs)("h2",{className:"font-bold text-center text-lg",children:["Hasil Evaluasi Akuntabilitas Kinerja"," ",L&&L.name," ","Kabupaten Lampung Selatan"]})})}),(0,s.jsx)("div",{className:"tahuns flex justify-center item-center w-full mb-2",children:(0,s.jsx)(i.Z,{loading:D,error:O,dataComponent:(0,s.jsx)("div",{className:"xl:flex grid grid-cols-3 gap-2 justify-center item-center",children:eZ})})})]})})}),V?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"info mt-5 p-5 bg-yellow-500 w-full text-white font-bold rounded-lg",children:(0,s.jsx)("p",{children:"Silakan pilih OPD dan Tahun"})})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{error:ei,loading:en,text:"Loading...",dataComponent:(0,s.jsx)(s.Fragment,{children:eV||null==eK?(0,s.jsxs)(s.Fragment,{children:[" ",V?(0,s.jsx)("div",{className:"info mt-5 p-5 bg-yellow-500 w-full text-white font-bold rounded-lg",children:(0,s.jsx)("p",{children:"Silakan pilih OPD dan Tahun"})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{error:ed,loading:er,dataComponent:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"rincian-komponen-penilaian items-start flex px-3 flex-col justify-between rounded-md bg-white w-full mt-3 p-3 shadow-lg",children:[(0,s.jsx)("div",{className:"heading mb-3 text-start fw-bold ",children:(0,s.jsx)("h6",{className:"font-bold text-lg",children:"Penilaian"})}),(0,s.jsxs)("div",{className:"table-container w-full xl:flex gap-3",children:[(0,s.jsx)("div",{className:"w-full xl:w-[60%] z-0",children:(0,s.jsx)(c.ZP,{className:"z-0",columns:[{name:"No",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,width:"10%"},{name:"Komponen/Sub Komponen/Kriteria",selector:e=>e.component,sortable:!0,wrap:!0},{name:"Bobot",selector:e=>e.bobot,sortable:!0,wrap:!0},{name:"Nilai",selector:e=>null!=e.nilai?e.nilai.toFixed(2):"0.00",sortable:!0,wrap:!0}],data:eT,responsive:!0,striped:!0,highlightOnHover:!0,customStyles:eC})}),(0,s.jsxs)("div",{className:"print mt-3 xl:mt-0 bg-slate-100 w-full xl:w-[20%] flex flex-col justify-start items-center rounded-xl rounded-tr-xl",children:[(0,s.jsx)("div",{className:"title bg-[#408EFD] text-white fs-1  fw-bold  h-[3.2rem] w-full text-center flex items-center justify-center text-wrap rounded-ss-xl rounded-tr-xl",children:(0,s.jsx)("span",{style:{fontSize:"12px"},className:"font-bold ",children:"Total Nilai / Predikat"})}),(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center p-3 gap-4 w-full",children:[(0,s.jsxs)("div",{className:"nilai_total bg-white rounded-lg p-3 flex flex-col text-center",children:[(0,s.jsx)("span",{className:"text-xl font-poppins",children:"Total"}),(0,s.jsx)("span",{className:"text-3xl font-bold",children:eV&&null!=eK?eK.toFixed(2):"0.00"})]}),(0,s.jsx)("div",{className:"predikat",children:(0,s.jsx)(b.Z,{disabled:"1"===e,options:M,optionLabel:e=>e.predikat,optionValue:e=>e.predikat,defaultValue:eE,onChange:e=>eR(e,0),defaultText:"Pilih Predikat..."},0)}),(0,s.jsxs)("div",{className:"bantuan text-sm flex gap-1 justify-center items-center cursor-help",onClick:function(){eh(!0)},children:[(0,s.jsx)(u.EfR,{})," Panduan Predikat"]})]})]}),(0,s.jsxs)("div",{className:"export-doc xl:w-[20%] bg-blue-500 hover:bg-blue-700 mt-3 xl:mt-0 p-3 rounded-xl text-white flex flex-col justify-center items-center font-bold cursor-pointer transition-colors duration-300",onClick:function(){window.open("".concat("https://inspektorat-be.agriciatech.com/docx","/").concat(et),"_blank")},children:[(0,s.jsx)("div",{className:"icon",children:(0,s.jsx)(u.TQP,{className:"w-full",size:120})}),(0,s.jsx)("p",{className:"text-wrap text-xl text-center",children:"Export Laporan KKE"})]})]})]}),(0,s.jsxs)("div",{className:"catatan-penilaian items-start flex px-3 flex-col justify-between rounded-md bg-white w-full mt-3 p-3 shadow-lg",children:[(0,s.jsx)("h1",{className:"font-bold text-center text-2xl w-full",children:"Catatan Penilaian"}),null==eo?void 0:eo.map((e,t)=>(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"w-full mb-5",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"heading mb-3 text-start fw-bold ",children:(0,s.jsx)("h6",{className:"font-bold text-lg",children:e.component})}),(0,s.jsx)("div",{className:"table-container w-full gap-3",children:(0,s.jsx)("div",{className:"w-full",children:e.SubKomponen.map((e,t)=>e.Keriteria&&e.Keriteria.length>0?(0,s.jsx)(c.ZP,{columns:ey,data:e.Keriteria,responsive:!0,pagination:!0,striped:!0,highlightOnHover:!0,customStyles:eC},t):(0,s.jsx)("div",{children:er?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsx)("p",{})},t))})})]},t)})},t))]})]})}),(0,s.jsx)(i.Z,{error:ee,loading:$,text:"Loading Rekomendasi...",dataComponent:(0,s.jsxs)("div",{className:"catatan-penilaian items-start flex px-3 flex-col justify-between rounded-md bg-white w-full mt-3 p-3 shadow-lg mb-5",children:[(0,s.jsx)("h1",{className:"font-bold text-center text-2xl w-full",children:"Rekomendasi"}),null==X?void 0:X.map((e,t)=>(0,s.jsxs)("div",{className:"w-full mb-5",children:[(0,s.jsx)("div",{className:"heading mb-3 text-start fw-bold ",children:(0,s.jsxs)("h6",{className:"font-bold text-lg flex gap-1 items-center",children:[e.component,(0,s.jsx)("span",{children:(0,s.jsx)(p,{onClick:()=>{T(t+1),ej(!0),n(!l)},tooltip:"Tambah Rekomendasi"})})]})}),(0,s.jsx)("div",{className:"table-container w-full xl:flex gap-3",children:(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)(c.ZP,{columns:eS,data:e.Rekomendasi,responsive:!0,striped:!0,highlightOnHover:!0,customStyles:eC})})})]},t))]},1)})]})]}):(0,s.jsx)("div",{className:" flex flex-col gap-3 justify-center items-center w-full",children:(0,s.jsx)("p",{className:"p-10 w-full bg-red-600 font-bold text-white text-center justify-center items-center text-xl",children:"Silakan Selesaikan Proses Lembar Kerja Evaluasi"})})})})})]})})}},8079:function(e,t,l){"use strict";var s=l(7437);l(2265),t.Z=e=>{let{text:t,onClick:l,className:a}=e;return(0,s.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full transition-all ".concat(a),type:"button",onClick:l,children:t})}},7863:function(e,t,l){"use strict";var s=l(7437);l(2265);var a=l(3781),n=l(6408);t.Z=e=>{let{onClick:t,className:l,size:i,tooltip:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{"data-tooltip-id":o,"data-tooltip-content":o,children:(0,s.jsx)("button",{type:"button",role:"button",onClick:t,children:(0,s.jsx)(a.VgY,{className:"transition-all text-red-700 hover:text-red-800 ".concat(l),size:i||20})})}),(0,s.jsx)(n.u,{id:o,className:"tooltip"})]})}},8507:function(e,t,l){"use strict";l.d(t,{R:function(){return n}});var s=l(2265),a=l(6463);let n=()=>{let e=(0,a.useRouter)(),t=(0,a.usePathname)(),[l,n]=(0,s.useState)(!1);(0,s.useEffect)(()=>{n(!0)},[]),(0,s.useEffect)(()=>{l&&(null!==localStorage.getItem("token")?"/login"===t?e.push("/"):e.push(t):e.push("/login"))},[l,e,t])}},6212:function(e,t,l){"use strict";l.d(t,{z:function(){return n}});var s=l(2265);let a=l(2126).Z.create({baseURL:"https://inspektorat-be.agriciatech.com/docx/api/v1"});function n(e,t,l,n){let[i,o]=(0,s.useState)(),[r,d]=(0,s.useState)(!0),[c,u]=(0,s.useState)(null),[m,x]=(0,s.useState)();(0,s.useEffect)(()=>{null!=n&&x(n)},[n]);let f=async()=>{try{let t=localStorage.getItem("token"),l=await a.get(e,{headers:{Authorization:"Bearer ".concat(t)}}),s=l.data.data?l.data.data:l.data;o(s),console.log(i)}catch(e){u(e)}finally{d(!1)}};return(0,s.useEffect)(()=>{f()},[m,e]),(0,s.useEffect)(()=>{if(t){let e=setInterval(f,l);return console.log("datasss",i),()=>clearInterval(e)}},[f,t,e]),[i,r,c]}a.interceptors.request.use(e=>(e.headers.Accept="application/json",e))}},function(e){e.O(0,[5706,1779,2126,6713,9343,9500,6408,9707,2971,7023,1744],function(){return e(e.s=2158)}),_N_E=e.O()}]);