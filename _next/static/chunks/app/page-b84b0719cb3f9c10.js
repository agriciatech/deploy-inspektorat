(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{5809:function(e,t,l){Promise.resolve().then(l.bind(l,6584))},6463:function(e,t,l){"use strict";var s=l(1169);l.o(s,"redirect")&&l.d(t,{redirect:function(){return s.redirect}}),l.o(s,"usePathname")&&l.d(t,{usePathname:function(){return s.usePathname}}),l.o(s,"useRouter")&&l.d(t,{useRouter:function(){return s.useRouter}}),l.o(s,"useSelectedLayoutSegment")&&l.d(t,{useSelectedLayoutSegment:function(){return s.useSelectedLayoutSegment}})},6584:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var s=l(7437),r=l(273),a=l(6409),n=l(2265),u=l(6463),i=l(8507),o=e=>{let{title:t,value:l}=e;return(0,s.jsxs)("div",{className:"card_component bg-slate-100 p-8 rounded-lg flex flex-col justify-between items-center min-h-[6rem] min-w-[12rem] max-h-[12rem] max-w-[16rem] h-[12rem] w-[16rem] gap-4 border-blue-700 border-2 border-b-8 shadow-red-800 cursor-pointer hover:shadow-2xl transition duration-200 transform hover:scale-[1.01]",children:[(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h2",{className:"text-xl text-center font-bold",children:t})}),(0,s.jsx)("div",{className:"value",children:(0,s.jsx)("h3",{className:"text-5xl font-bold text-center",children:l})})]})},c=()=>(0,s.jsx)("main",{className:"flex bg-[#FAFAFA] w-full flex-col items-start justify-start m-0 p-3 ",children:(0,s.jsxs)("div",{className:"mt-[10vh] overflow-y-auto w-full items-start flex flex-col justify-center h-full p-3",children:[(0,s.jsxs)("div",{className:"card flex gap-5 justify-start items-center w-full h-full flex-col xl:flex-row",children:[(0,s.jsx)(o,{title:"Jumlah User",value:50}),(0,s.jsx)(o,{title:"Total Evaluasi Akip",value:40}),(0,s.jsx)(o,{title:"Telah Dievaluasi",value:40})]}),(0,s.jsxs)("div",{className:"logo flex flex-col gap-4 justify-center items-center xl:mt-10 mt-6 w-full",children:[(0,s.jsx)("img",{src:"./lamsel.png",alt:"Logo Lampung Selatan",width:120}),(0,s.jsx)("h2",{className:"text-bold rounded-lg p-2 bg-slate-200 text-center",children:"Pemerintahan Kabupaten Lampung Selatan"})]})]})}),m=()=>{(0,i.R)(),(0,r.Z)(),(0,a.Z)();let[e,t]=(0,n.useState)("");(0,n.useEffect)(()=>{{let e=window.localStorage.getItem("roleId");null!==e?t(e):console.error("roleId tidak tersedia di local storage")}},[]),(0,u.usePathname)(),u.redirect;let[l,o]=(0,n.useState)(!1);return((0,u.useSelectedLayoutSegment)(),(0,n.useEffect)(()=>{o(!0),l&&(o(!1),window.location.reload())},[l]),"3"===e)?(0,s.jsx)(c,{}):(0,s.jsx)("main",{className:"flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-center m-0  ",children:(0,s.jsx)("div",{className:"mt-[10vh] overflow-y-auto w-full items-center flex flex-col ",children:(0,s.jsx)(c,{})})})}},273:function(e,t,l){"use strict";var s=l(2265);t.Z=()=>{let[e,t]=(0,s.useState)(!1);return{modal:{isVisible:e,setIsVisible:t,onClose:()=>t(!1)},visible:e,setVisible:t}}},6409:function(e,t,l){"use strict";var s=l(2265);t.Z=()=>{let[e,t]=(0,s.useState)(!1);return{modal:{isVisibleSmall:e,setIsVisibleSmall:t,onCloseSmall:()=>t(!1)},visible:e,setVisible:t}}},8507:function(e,t,l){"use strict";l.d(t,{R:function(){return a}});var s=l(2265),r=l(6463);let a=()=>{let e=(0,r.useRouter)(),t=(0,r.usePathname)(),[l,a]=(0,s.useState)(!1);(0,s.useEffect)(()=>{a(!0)},[]),(0,s.useEffect)(()=>{l&&(null!==localStorage.getItem("token")?"/login"===t?e.push("/"):e.push(t):e.push("/login"))},[l,e,t])}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=5809)}),_N_E=e.O()}]);