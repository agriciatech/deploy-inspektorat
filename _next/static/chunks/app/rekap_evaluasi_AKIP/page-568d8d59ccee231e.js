(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{1928:function(e,t,a){Promise.resolve().then(a.bind(a,8956))},8956:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var l=a(7437),r=a(681),s=a(2265),n=a(361),i=()=>{let[e,t]=(0,s.useState)([]),[a,l]=(0,s.useState)([]),[r,i]=(0,s.useState)([]),[c,o]=(0,s.useState)([]),u=async()=>{try{let e=await n.Z.get("/tahun",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});if(t(e.data.data),console.log("tahun",e.data.data),200==e.status){let t=["No","Nama OPD",...e.data.data.map(e=>"Akumulasi Penilaian ".concat(e.tahun))];l(t)}}catch(e){console.log("Error fetching users:",e)}};return(0,s.useEffect)(()=>{u()},[]),{headerData:a,dataTable:r,setDataTable:i,record:c,setRecord:o}},c=a(3781),o=a(5922),u=a(7107),d=a(6215),f=a(2546),h=a(6212),m=()=>{let e=i(),[t,a]=(0,s.useState)(!1),[m,x,p]=(0,o.Y)("/tahun",!1),[g,b,w]=function(e,t,a,l){let[r,i]=(0,s.useState)(),[c,o]=(0,s.useState)(!0),[u,d]=(0,s.useState)(null),[f,h]=(0,s.useState)();(0,s.useEffect)(()=>{null!=l&&h(l)},[l]);let m=async()=>{try{let t=localStorage.getItem("token"),a=(await n.Z.get(e,{headers:{Authorization:"Bearer ".concat(t)}})).data.yearData;i(a)}catch(e){d(e)}finally{o(!1)}};return(0,s.useEffect)(()=>{m()},[f,e]),(0,s.useEffect)(()=>{if(t){let e=setInterval(m,1e3);return console.log("datasss",r),()=>clearInterval(e)}},[m,t]),[r,c,u]}("/inspeksis",!0,0,t),j=async()=>{try{let t=await n.Z.get("/inspeksis",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});e.setDataTable(t.data.data),e.setRecord(t.data.data)}catch(e){console.log("Error fetching users:",e)}};(0,s.useEffect)(()=>{j()},[]),(0,s.useEffect)(()=>{},[e.record]);let[v,y]=(0,s.useState)(null),[k,N,S]=(0,h.z)("generateinspeksiutama/".concat(v),!1,1e3,t),[O,E,P]=(0,h.z)("generateinspeksiexcel",!1,1e3,t),[C,I]=(0,s.useState)(!1),[A,z]=(0,s.useState)(!1),Z=[{name:"Nomor",selector:(e,t)=>(null!=t?t:0)+1,sortable:!0,wrap:!0,width:"10%"},{name:"Nama PD",selector:e=>e.namaOPD,sortable:!0,wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center py-2",children:[(0,l.jsx)("div",{className:"header w-full",children:"Kondisi Awal"}),(0,l.jsx)("div",{className:"subHeader flex gap-3 justify-between w-full",children:m.slice(0,2).map((e,t)=>(0,l.jsxs)("div",{className:"flex flex-col text-center justify-end items-center w-full mt-2",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:e.tahun}),(0,l.jsxs)("div",{className:"mt-2 nilai-kategori flex w-full gap-2 justify-between items-center text-center",children:[(0,l.jsx)("p",{className:"w-full",children:"Nilai"}),(0,l.jsx)("p",{className:"w-full",children:"Kategori"})]})]},t))})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-5 justify-between items-start  w-full text-center ",children:e.tahunData.slice(0,2).map((e,t)=>(0,l.jsxs)("div",{className:"flex text-center justify-end items-center w-full",children:[(0,l.jsx)("div",{className:"w-full",children:e.Inspeksi.nilai.toFixed(2)}),(0,l.jsx)("div",{className:"w-full",children:" "!==e.Inspeksi.kategori?e.Inspeksi.kategori:"..."})]},t))}),width:"20%",wrap:!0},{name:(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full justify-between items-start text-center ",children:[(0,l.jsx)("div",{className:"header w-full",children:"Target Capaian Kerja"}),(0,l.jsx)("div",{className:"subHeader flex gap-3 justify-between w-full",children:m.slice(2).map((e,t)=>(0,l.jsxs)("div",{className:"flex flex-col text-center justify-end items-center w-full mt-2",children:[(0,l.jsx)("div",{className:"tahun text-center w-full",children:e.tahun}),(0,l.jsxs)("div",{className:"mt-2 nilai-kategori flex w-full gap-2 justify-between items-center text-center",children:[(0,l.jsx)("p",{className:"w-full",children:"Nilai"}),(0,l.jsx)("p",{className:"w-full",children:"Kategori"})]})]},t))})]}),cell:e=>(0,l.jsx)("div",{className:"icon flex gap-5 justify-between items-start  w-full text-center ",children:e.tahunData.slice(2).map((e,t)=>(0,l.jsxs)("div",{className:"flex text-center justify-end items-center w-full",children:[(0,l.jsx)("div",{className:"w-full",children:e.Inspeksi.nilai.toFixed(2)}),(0,l.jsx)("div",{className:"w-full",children:" "!==e.Inspeksi.kategori?e.Inspeksi.kategori:"..."})]},t))}),width:"50%",wrap:!0}],D=(e,t)=>{y(parseInt(e.target.value,10))};return(0,s.useEffect)(()=>{void 0!==k&&window.open("".concat("https://inspektorat-be.agriciatech.com/docx","/").concat(k),"_blank")},[k,v]),console.log(e.record),(0,l.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0  ",children:(0,l.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex h-full flex-col ",children:[(0,l.jsx)(u.Z,{isVisibleSmall:C,setIsVisibleSmall:I,onCloseSmall:()=>I(!1),title:"Unduh Nota Rekapitulasi",children:(0,l.jsxs)("div",{className:"p-5 flex flex-col gap-3",children:[(0,l.jsxs)("p",{className:"p-2 font-bold text-center w-full",children:["Silakan Pilih Tahun Untuk Ekstrak Inspeksi Utama"," "]}),(0,l.jsx)(d.Z,{dataComponent:(0,l.jsx)(f.Z,{options:m,optionLabel:e=>e.tahun.toString(),defaultValue:"",optionValue:e=>e.Pk_Tahun_Id,onChange:e=>D(e,"tahun"),defaultText:"Pilih Tahun",label:"Pilih Tahun",className:"w-full"}),text:"Memuat dropdown data tahun...",error:p,loading:x})]})}),(0,l.jsxs)("div",{className:"lg:px-8 px-3 w-full h-full",children:[(0,l.jsx)("div",{className:"w-full justify-between items-center py-7 flex flex-row",children:(0,l.jsxs)("div",{className:"flex w-full flex-col xl:flex-row gap-3",children:[(0,l.jsxs)("div",{className:"relative bg-blue-500 w-full xl:w-[90%] p-10 px-4 rounded-md",children:[(0,l.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center p-7 pointer-events-none",children:(0,l.jsx)("svg",{className:"w-4 h-4  text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,l.jsx)("input",{type:"search",onChange:t=>{let{value:a}=t.target,l=e.dataTable.filter(e=>e.namaOPD.toLowerCase().includes(a.toLowerCase()));e.setRecord(l)},id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search..."})]}),(0,l.jsxs)("div",{className:"export-doc xl:w-[10%] bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-white flex flex-col justify-center items-center font-bold cursor-pointer transition-colors duration-300",onClick:function(){I(!0)},children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)(c.TQP,{className:"w-full",size:70})}),(0,l.jsx)("p",{className:"text-wrap text-center text-sm",children:"Exstrak Akumulasi"})]})]})}),(0,l.jsx)(r.ZP,{columns:Z,data:e.record,pagination:!0,subHeaderComponent:!0,responsive:!0,highlightOnHover:!0,customStyles:{headCells:{style:{backgroundColor:"#408EFD",color:"white","&:first-child":{borderTopLeftRadius:"1rem"},"&:last-child":{borderTopRightRadius:"1rem"}}}}}),(0,l.jsxs)("div",{className:"relative overflow-x-auto mt-5 font-bold mb-10",children:[(0,l.jsx)("p",{children:"Rata Rata Akumulasi Penilaian Evaluasi Akip "}),(0,l.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10",children:[(0,l.jsx)("thead",{className:"text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-blue-500",children:(0,l.jsx)("tr",{children:null==g?void 0:g.map(e=>(0,l.jsx)("th",{scope:"col",className:"px-6 py-3 text-center",children:e.tahun},e.tahunId))})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:null==g?void 0:g.map(e=>(0,l.jsx)("td",{className:"px-6 py-4 text-center",children:e.Average.toFixed(2)},e.tahunId))})})]})]})]})]})})}},6215:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{loading:t,error:a,dataComponent:r,text:s}=e;return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsx)("div",{className:"bg-slate-500 h-full min-h-[300px] text-white animate-pulse w-full text-sm p-2 rounded-lg flex justify-center items-center text-center mb-5",children:s||"Loading Data..."}):a?(0,l.jsxs)("div",{className:"text-red-700 font-bold text-lg",children:["Error: ",a.message]}):(0,l.jsx)(l.Fragment,{children:r})})}},2546:function(e,t,a){"use strict";var l=a(7437);a(2265),t.Z=e=>{let{options:t,optionLabel:a,optionValue:r,onChange:s,defaultValue:n="",defaultText:i="Pilih ...",disabled:c,className:o,label:u}=e;return console.log("defaul value",n),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,l.jsx)("label",{htmlFor:i,children:u}),(0,l.jsxs)("select",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ".concat(o),onChange:s,defaultValue:n,disabled:c,id:i,children:[(0,l.jsx)("option",{value:"",disabled:!0,id:i,children:i}),null==t?void 0:t.map(e=>(0,l.jsx)("option",{value:r(e),children:a(e)},r(e)))]})]})}},7107:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var l=a(7437),r=a(2265),s=()=>{let[e,t]=(0,r.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:t,onCloseSmall:()=>t(!1)},visible:e,setVisible:t}},n=a(5097),i=e=>{let{isVisibleSmall:t,setIsVisibleSmall:a,onCloseSmall:r,children:i,title:c}=e;return s(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"\n          ".concat(t?"z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm":"z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50  h-screen overlow-hidden   backdrop-blur-sm hidden","\n          "),children:[(0,l.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"}),(0,l.jsxs)("div",{className:" h-screen flex lg:w-[40%] w-full flex-col ",children:[(0,l.jsx)("div",{onClick:()=>r(),className:"md:h-[20%] h-[10%]  w-full"}),(0,l.jsxs)("div",{className:"h-full relative rounded-md bg-white w-full flex flex-col shadow-2xl shadow-black",children:[(0,l.jsxs)("div",{onClick:()=>r(),className:"z-10 h-[10%] flex justify-between items-center p-3 cursor-pointer rounded-md bg-blue-500 text-white w-full",children:[(0,l.jsx)("h2",{className:"text-lg font-bold",children:c}),(0,l.jsx)(n.bjh,{className:"h-7 w-7 bg-red-700 text-white p-1 rounded-full hover:shadow-lg hover:-rotate-12",title:"Tutup Modal"})]}),(0,l.jsx)("div",{className:"overflow-y-auto",children:i})]}),(0,l.jsx)("div",{onClick:()=>r(),className:"md:h-[20%] h-[10%]  w-full"})]}),(0,l.jsx)("div",{onClick:()=>r(),className:" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"})]})})}},361:function(e,t,a){"use strict";a.d(t,{H:function(){return n}});var l=a(2126);let r="",s=l.Z.create({baseURL:"https://inspektorat-be.agriciatech.com/api/v1"}),n=()=>{let e=localStorage.getItem("token");e&&(r=e,s.defaults.headers.common.Authorization="Bearer ".concat(r))};s.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=s},5922:function(e,t,a){"use strict";a.d(t,{Y:function(){return s}});var l=a(2265),r=a(361);function s(e,t,a){let[s,n]=(0,l.useState)([]),[i,c]=(0,l.useState)(!0),[o,u]=(0,l.useState)(null),[d,f]=(0,l.useState)();(0,l.useEffect)(()=>{null!=a&&f(a)},[a]);let h=async()=>{c(!0);try{let t=localStorage.getItem("token"),a=await r.Z.get(e,{headers:{Authorization:"Bearer ".concat(t)}});n(a.data.data),u(null)}catch(e){u(e)}finally{c(!1)}};return(0,l.useEffect)(()=>{if(t){let e=setInterval(h,1e3);return()=>{clearInterval(e)}}h()},[e,t]),(0,l.useEffect)(()=>{h()},[d]),[s,i,o]}},6212:function(e,t,a){"use strict";a.d(t,{z:function(){return s}});var l=a(2265);let r=a(2126).Z.create({baseURL:"https://inspektorat-be.agriciatech.com/docx/api/v1"});function s(e,t,a,s){let[n,i]=(0,l.useState)(),[c,o]=(0,l.useState)(!0),[u,d]=(0,l.useState)(null),[f,h]=(0,l.useState)();(0,l.useEffect)(()=>{null!=s&&h(s)},[s]);let m=async()=>{try{let t=localStorage.getItem("token"),a=await r.get(e,{headers:{Authorization:"Bearer ".concat(t)}}),l=a.data.data?a.data.data:a.data;i(l),console.log(n)}catch(e){d(e)}finally{o(!1)}};return(0,l.useEffect)(()=>{m()},[f,e]),(0,l.useEffect)(()=>{if(t){let e=setInterval(m,a);return console.log("datasss",n),()=>clearInterval(e)}},[m,t,e]),[n,c,u]}r.interceptors.request.use(e=>(e.headers.Accept="application/json",e))},1810:function(e,t,a){"use strict";a.d(t,{w_:function(){return u}});var l=a(2265),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=l.createContext&&l.createContext(r),n=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){var l,r;l=t,r=a[t],(l=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var l=a.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(l))in e?Object.defineProperty(e,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[l]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function u(e){return t=>l.createElement(d,i({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,a)=>l.createElement(t.tag,o({key:a},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var a,{attr:r,size:s,title:c}=e,u=function(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,n),d=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==s?l.createElement(s.Consumer,null,e=>t(e)):t(r)}}},function(e){e.O(0,[5706,1779,2126,6713,2971,7023,1744],function(){return e(e.s=1928)}),_N_E=e.O()}]);