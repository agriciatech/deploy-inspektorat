(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6408],{6800:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=l(t,r));return t}(r)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()},6408:function(e,t,r){"use strict";r.d(t,{u:function(){return eS}});var o=r(2265);let n=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function f(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(f(e))?"y":"x"}function h(e){return e.replace(/start|end/g,e=>u[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>a[e])}function g(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function _(e,t,r){let o,{reference:n,floating:l}=e,i=y(t),c=m(y(t)),s=v(c),a=f(t),u="y"===i,d=n.x+n.width/2-l.width/2,h=n.y+n.height/2-l.height/2,w=n[s]/2-l[s]/2;switch(a){case"top":o={x:d,y:n.y-l.height};break;case"bottom":o={x:d,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:h};break;case"left":o={x:n.x-l.width,y:h};break;default:o={x:n.x,y:n.y}}switch(p(t)){case"start":o[c]-=w*(r&&u?-1:1);break;case"end":o[c]+=w*(r&&u?-1:1)}return o}let E=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:l=[],platform:i}=r,c=l.filter(Boolean),s=await (null==i.isRTL?void 0:i.isRTL(t)),a=await i.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=_(a,o,s),f=o,p={},m=0;for(let r=0;r<c.length;r++){let{name:l,fn:v}=c[r],{x:y,y:h,data:w,reset:g}=await v({x:u,y:d,initialPlacement:o,placement:f,strategy:n,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=h?h:d,p={...p,[l]:{...p[l],...w}},g&&m<=50&&(m++,"object"==typeof g&&(g.placement&&(f=g.placement),g.rects&&(a=!0===g.rects?await i.getElementRects({reference:e,floating:t,strategy:n}):g.rects),{x:u,y:d}=_(a,f,s)),r=-1)}return{x:u,y:d,placement:f,strategy:n,middlewareData:p}};async function x(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),v=g(m),y=c[p?"floating"===f?"reference":"floating":f],h=b(await l.getClippingRect({element:null==(r=await (null==l.isElement?void 0:l.isElement(y)))||r?y:y.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),w="floating"===f?{...i.floating,x:o,y:n}:i.reference,_=await (null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),E=await (null==l.isElement?void 0:l.isElement(_))&&await (null==l.getScale?void 0:l.getScale(_))||{x:1,y:1},x=b(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:_,strategy:s}):w);return{top:(h.top-x.top+v.top)/E.y,bottom:(x.bottom-h.bottom+v.bottom)/E.y,left:(h.left-x.left+v.left)/E.x,right:(x.right-h.right+v.right)/E.x}}async function S(e,t){let{placement:r,platform:o,elements:n}=e,l=await (null==o.isRTL?void 0:o.isRTL(n.floating)),i=f(r),c=p(r),s="y"===y(r),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,m=d(t,e),{mainAxis:v,crossAxis:h,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&"number"==typeof w&&(h="end"===c?-1*w:w),s?{x:h*u,y:v*a}:{x:v*a,y:h*u}}let A=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,o;let{x:n,y:l,placement:i,middlewareData:c}=t,s=await S(t,e);return i===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:n+s.x,y:l+s.y,data:{...s,placement:i}}}}};function T(e){return k(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function O(e){var t;return null==(t=(k(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function k(e){return e instanceof Node||e instanceof R(e).Node}function L(e){return e instanceof Element||e instanceof R(e).Element}function C(e){return e instanceof HTMLElement||e instanceof R(e).HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof R(e).ShadowRoot)}function D(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function $(e){let t=I(),r=H(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function I(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function j(e){return["html","body","#document"].includes(T(e))}function H(e){return R(e).getComputedStyle(e)}function W(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function B(e){if("html"===T(e))return e;let t=e.assignedSlot||e.parentNode||N(e)&&e.host||O(e);return N(t)?t.host:t}function M(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let n=function e(t){let r=B(t);return j(r)?t.ownerDocument?t.ownerDocument.body:t.body:C(r)&&D(r)?r:e(r)}(e),l=n===(null==(o=e.ownerDocument)?void 0:o.body),i=R(n);return l?t.concat(i,i.visualViewport||[],D(n)?n:[],i.frameElement&&r?M(i.frameElement):[]):t.concat(n,M(n,[],r))}function z(e){let t=H(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=C(e),l=n?e.offsetWidth:r,c=n?e.offsetHeight:o,s=i(r)!==l||i(o)!==c;return s&&(r=l,o=c),{width:r,height:o,$:s}}function F(e){return L(e)?e:e.contextElement}function P(e){let t=F(e);if(!C(t))return s(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:l}=z(t),c=(l?i(r.width):r.width)/o,a=(l?i(r.height):r.height)/n;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}let V=s(0);function q(e){let t=R(e);return I()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:V}function K(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let l=e.getBoundingClientRect(),i=F(e),c=s(1);t&&(o?L(o)&&(c=P(o)):c=P(e));let a=(void 0===(n=r)&&(n=!1),o&&(!n||o===R(i))&&n)?q(i):s(0),u=(l.left+a.x)/c.x,d=(l.top+a.y)/c.y,f=l.width/c.x,p=l.height/c.y;if(i){let e=R(i),t=o&&L(o)?R(o):o,r=e,n=r.frameElement;for(;n&&o&&t!==r;){let e=P(n),t=n.getBoundingClientRect(),o=H(n),l=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;u*=e.x,d*=e.y,f*=e.x,p*=e.y,u+=l,d+=i,n=(r=R(n)).frameElement}}return b({width:f,height:p,x:u,y:d})}let X=[":popover-open",":modal"];function Y(e){return X.some(t=>{try{return e.matches(t)}catch(e){return!1}})}function Z(e){return K(O(e)).left+W(e).scrollLeft}function G(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=R(e),o=O(e),n=r.visualViewport,l=o.clientWidth,i=o.clientHeight,c=0,s=0;if(n){l=n.width,i=n.height;let e=I();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,s=n.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,r);else if("document"===t)o=function(e){let t=O(e),r=W(e),o=e.ownerDocument.body,n=l(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=l(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),c=-r.scrollLeft+Z(e),s=-r.scrollTop;return"rtl"===H(o).direction&&(c+=l(t.clientWidth,o.clientWidth)-n),{width:n,height:i,x:c,y:s}}(O(e));else if(L(t))o=function(e,t){let r=K(e,!0,"fixed"===t),o=r.top+e.clientTop,n=r.left+e.clientLeft,l=C(e)?P(e):s(1),i=e.clientWidth*l.x;return{width:i,height:e.clientHeight*l.y,x:n*l.x,y:o*l.y}}(t,r);else{let r=q(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return b(o)}function U(e,t){return C(e)&&"fixed"!==H(e).position?t?t(e):e.offsetParent:null}function J(e,t){let r=R(e);if(!C(e)||Y(e))return r;let o=U(e,t);for(;o&&["table","td","th"].includes(T(o))&&"static"===H(o).position;)o=U(o,t);return o&&("html"===T(o)||"body"===T(o)&&"static"===H(o).position&&!$(o))?r:o||function(e){let t=B(e);for(;C(t)&&!j(t);){if($(t))return t;t=B(t)}return null}(e)||r}let Q=async function(e){let t=this.getOffsetParent||J,r=this.getDimensions;return{reference:function(e,t,r){let o=C(t),n=O(t),l="fixed"===r,i=K(e,!0,l,t),c={scrollLeft:0,scrollTop:0},a=s(0);if(o||!o&&!l){if(("body"!==T(t)||D(n))&&(c=W(t)),o){let e=K(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else n&&(a.x=Z(n))}return{x:i.left+c.scrollLeft-a.x,y:i.top+c.scrollTop-a.y,width:i.width,height:i.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}},ee={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,l="fixed"===n,i=O(o),c=!!t&&Y(t.floating);if(o===i||c&&l)return r;let a={scrollLeft:0,scrollTop:0},u=s(1),d=s(0),f=C(o);if((f||!f&&!l)&&(("body"!==T(o)||D(i))&&(a=W(o)),C(o))){let e=K(o);u=P(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+d.x,y:r.y*u.y-a.scrollTop*u.y+d.y}},getDocumentElement:O,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e,c=[..."clippingAncestors"===r?function(e,t){let r=t.get(e);if(r)return r;let o=M(e,[],!1).filter(e=>L(e)&&"body"!==T(e)),n=null,l="fixed"===H(e).position,i=l?B(e):e;for(;L(i)&&!j(i);){let t=H(i),r=$(i);r||"fixed"!==t.position||(n=null),(l?!r&&!n:!r&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||D(i)&&!r&&function e(t,r){let o=B(t);return!(o===r||!L(o)||j(o))&&("fixed"===H(o).position||e(o,r))}(e,i))?o=o.filter(e=>e!==i):n=t,i=B(i)}return t.set(e,o),o}(t,this._c):[].concat(r),o],s=c[0],a=c.reduce((e,r)=>{let o=G(t,r,i);return e.top=l(o.top,e.top),e.right=n(o.right,e.right),e.bottom=n(o.bottom,e.bottom),e.left=l(o.left,e.left),e},G(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:J,getElementRects:Q,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=z(e);return{width:t,height:r}},getScale:P,isElement:L,isRTL:function(e){return"rtl"===H(e).direction}},et=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:r,y:o,placement:i}=t,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...u}=d(e,t),p={x:r,y:o},v=await x(t,u),h=y(f(i)),w=m(h),g=p[w],b=p[h];if(c){let e="y"===w?"top":"left",t="y"===w?"bottom":"right",r=g+v[e],o=g-v[t];g=l(r,n(g,o))}if(s){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",r=b+v[e],o=b-v[t];b=l(r,n(b,o))}let _=a.fn({...t,[w]:g,[h]:b});return{..._,data:{x:_.x-r,y:_.y-o}}}}},er=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,o,n,l,i;let{placement:c,middlewareData:s,rects:a,initialPlacement:u,platform:g,elements:b}=t,{mainAxis:_=!0,crossAxis:E=!0,fallbackPlacements:S,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:R=!0,...O}=d(e,t);if(null!=(r=s.arrow)&&r.alignmentOffset)return{};let k=f(c),L=f(u)===u,C=await (null==g.isRTL?void 0:g.isRTL(b.floating)),N=S||(L||!R?[w(u)]:function(e){let t=w(e);return[h(e),t,h(t)]}(u));S||"none"===T||N.push(...function(e,t,r,o){let n=p(e),l=function(e,t,r){let o=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(r)return t?n:o;return t?o:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(f(e),"start"===r,o);return n&&(l=l.map(e=>e+"-"+n),t&&(l=l.concat(l.map(h)))),l}(u,R,T,C));let D=[u,...N],$=await x(t,O),I=[],j=(null==(o=s.flip)?void 0:o.overflows)||[];if(_&&I.push($[k]),E){let e=function(e,t,r){void 0===r&&(r=!1);let o=p(e),n=m(y(e)),l=v(n),i="x"===n?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=w(i)),[i,w(i)]}(c,a,C);I.push($[e[0]],$[e[1]])}if(j=[...j,{placement:c,overflows:I}],!I.every(e=>e<=0)){let e=((null==(n=s.flip)?void 0:n.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:j},reset:{placement:t}};let r=null==(l=j.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:l.placement;if(!r)switch(A){case"bestFit":{let e=null==(i=j.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(r=e);break}case"initialPlacement":r=u}if(c!==r)return{reset:{placement:r}}}return{}}}},eo=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:o,placement:i,rects:c,platform:s,elements:a,middlewareData:u}=t,{element:f,padding:h=0}=d(e,t)||{};if(null==f)return{};let w=g(h),b={x:r,y:o},_=m(y(i)),E=v(_),x=await s.getDimensions(f),S="y"===_,A=S?"clientHeight":"clientWidth",T=c.reference[E]+c.reference[_]-b[_]-c.floating[E],R=b[_]-c.reference[_],O=await (null==s.getOffsetParent?void 0:s.getOffsetParent(f)),k=O?O[A]:0;k&&await (null==s.isElement?void 0:s.isElement(O))||(k=a.floating[A]||c.floating[E]);let L=k/2-x[E]/2-1,C=n(w[S?"top":"left"],L),N=n(w[S?"bottom":"right"],L),D=k-x[E]-N,$=k/2-x[E]/2+(T/2-R/2),I=l(C,n($,D)),j=!u.arrow&&null!=p(i)&&$!==I&&c.reference[E]/2-($<C?C:N)-x[E]/2<0,H=j?$<C?$-C:$-D:0;return{[_]:b[_]+H,data:{[_]:I,centerOffset:$-I-H,...j&&{alignmentOffset:H}},reset:j}}}),en=(e,t,r)=>{let o=new Map,n={platform:ee,...r},l={...n.platform,_c:o};return E(e,t,{...n,platform:l})};var el=r(6800),ei=r(357);/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/let ec={core:!1,base:!1};function es({css:e,id:t="react-tooltip-base-styles",type:r="base",ref:o}){var n,l;if(!e||"undefined"==typeof document||ec[r]||"core"===r&&void 0!==ei&&(null===(n=null==ei?void 0:ei.env)||void 0===n?void 0:n.REACT_TOOLTIP_DISABLE_CORE_STYLES)||"base"!==r&&void 0!==ei&&(null===(l=null==ei?void 0:ei.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===r&&(t="react-tooltip-core-styles"),o||(o={});let{insertAt:i}=o;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);let c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),ec[r]=!0}let ea=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:r=null,place:o="top",offset:n=10,strategy:l="absolute",middlewares:i=[A(Number(n)),er({fallbackAxisSideDirection:"start"}),et({padding:5})],border:c})=>e&&null!==t?r?(i.push(eo({element:r,padding:5})),en(e,t,{placement:o,strategy:l,middleware:i}).then(({x:e,y:t,placement:r,middlewareData:o})=>{var n,l;let i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(n=o.arrow)&&void 0!==n?n:{x:0,y:0},u=null!==(l=({top:"bottom",right:"left",bottom:"top",left:"right"})[r.split("-")[0]])&&void 0!==l?l:"bottom",d=0;if(c){let e=`${c}`.match(/(\d+)px/);d=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...c&&{borderBottom:c,borderRight:c},[u]:`-${4+d}px`},place:r}})):en(e,t,{placement:"bottom",strategy:l,middleware:i}).then(({x:e,y:t,placement:r})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:r})):{tooltipStyles:{},tooltipArrowStyles:{},place:o},eu=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ed=(e,t,r)=>{let o=null,n=function(...n){let l=()=>{o=null,r||e.apply(this,n)};r&&!o&&(e.apply(this,n),o=setTimeout(l,t)),r||(o&&clearTimeout(o),o=setTimeout(l,t))};return n.cancel=()=>{o&&(clearTimeout(o),o=null)},n},ef=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,ep=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((e,r)=>ep(e,t[r]));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!ef(e)||!ef(t))return e===t;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>ep(e[r],t[r]))},em=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;let t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(e=>{let r=t.getPropertyValue(e);return"auto"===r||"scroll"===r})},ev=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(em(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},ey="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,eh={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},ew=(0,o.createContext)({getTooltipData:()=>eh});function eg(e="DEFAULT_TOOLTIP_ID"){return(0,o.useContext)(ew).getTooltipData(e)}var eb={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},e_={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};let eE=({forwardRef:e,id:t,className:r,classNameArrow:i,variant:s="dark",anchorId:a,anchorSelect:u,place:d="top",offset:f=10,events:p=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:y,wrapper:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:_=!1,noArrow:E=!1,clickable:x=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:T=!1,openEvents:R,closeEvents:k,globalCloseEvents:L,imperativeModeOnly:C,style:N,position:D,afterShow:$,afterHide:I,content:j,contentWrapperRef:H,isOpen:W,defaultIsOpen:B=!1,setIsOpen:z,activeAnchor:P,setActiveAnchor:V,border:q,opacity:X,arrowColor:Y,role:Z="tooltip"})=>{var G;let U=(0,o.useRef)(null),J=(0,o.useRef)(null),Q=(0,o.useRef)(null),ee=(0,o.useRef)(null),et=(0,o.useRef)(null),[er,eo]=(0,o.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:d}),[en,ei]=(0,o.useState)(!1),[ec,es]=(0,o.useState)(!1),[eu,ef]=(0,o.useState)(null),em=(0,o.useRef)(!1),eh=(0,o.useRef)(null),{anchorRefs:ew,setActiveAnchor:eE}=eg(t),ex=(0,o.useRef)(!1),[eS,eA]=(0,o.useState)([]),eT=(0,o.useRef)(!1),eR=m||p.includes("click"),eO=eR||(null==R?void 0:R.click)||(null==R?void 0:R.dblclick)||(null==R?void 0:R.mousedown),ek=R?{...R}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!R&&eR&&Object.assign(ek,{mouseenter:!1,focus:!1,click:!0});let eL=k?{...k}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!k&&eR&&Object.assign(eL,{mouseleave:!1,blur:!1});let eC=L?{...L}:{escape:S||!1,scroll:A||!1,resize:T||!1,clickOutsideAnchor:eO||!1};C&&(Object.assign(ek,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(eL,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(eC,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),ey(()=>(eT.current=!0,()=>{eT.current=!1}),[]);let eN=e=>{eT.current&&(e&&es(!0),setTimeout(()=>{eT.current&&(null==z||z(e),void 0===W&&ei(e))},10))};(0,o.useEffect)(()=>{if(void 0===W)return()=>null;W&&es(!0);let e=setTimeout(()=>{ei(W)},10);return()=>{clearTimeout(e)}},[W]),(0,o.useEffect)(()=>{if(en!==em.current){if(et.current&&clearTimeout(et.current),em.current=en,en)null==$||$();else{let e=(e=>{let t=e.match(/^([\d.]+)(ms|s)$/);if(!t)return 0;let[,r,o]=t;return Number(r)*("ms"===o?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));et.current=setTimeout(()=>{es(!1),ef(null),null==I||I()},e+25)}}},[en]);let eD=e=>{eo(t=>ep(t,e)?t:e)},e$=(e=w)=>{Q.current&&clearTimeout(Q.current),ec?eN(!0):Q.current=setTimeout(()=>{eN(!0)},e)},eI=(e=g)=>{ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>{ex.current||eN(!1)},e)},ej=e=>{var t;if(!e)return;let r=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==r?void 0:r.isConnected))return V(null),void eE({current:null});w?e$():eN(!0),V(r),eE({current:r}),ee.current&&clearTimeout(ee.current)},eH=()=>{x?eI(g||100):g?eI():eN(!1),Q.current&&clearTimeout(Q.current)},eW=({x:e,y:t})=>{var r;ea({place:null!==(r=null==eu?void 0:eu.place)&&void 0!==r?r:d,offset:f,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:U.current,tooltipArrowReference:J.current,strategy:v,middlewares:y,border:q}).then(e=>{eD(e)})},eB=e=>{if(!e)return;let t={x:e.clientX,y:e.clientY};eW(t),eh.current=t},eM=e=>{var t;if(!en)return;let r=e.target;r.isConnected&&(null===(t=U.current)||void 0===t||!t.contains(r))&&([document.querySelector(`[id='${a}']`),...eS].some(e=>null==e?void 0:e.contains(r))||(eN(!1),Q.current&&clearTimeout(Q.current)))},ez=ed(ej,50,!0),eF=ed(eH,50,!0),eP=e=>{eF.cancel(),ez(e)},eV=()=>{ez.cancel(),eF()},eq=(0,o.useCallback)(()=>{var e,t;let r=null!==(e=null==eu?void 0:eu.position)&&void 0!==e?e:D;r?eW(r):b?eh.current&&eW(eh.current):(null==P?void 0:P.isConnected)&&ea({place:null!==(t=null==eu?void 0:eu.place)&&void 0!==t?t:d,offset:f,elementReference:P,tooltipReference:U.current,tooltipArrowReference:J.current,strategy:v,middlewares:y,border:q}).then(e=>{eT.current&&eD(e)})},[en,P,j,N,d,null==eu?void 0:eu.place,f,v,D,null==eu?void 0:eu.position,b]);(0,o.useEffect)(()=>{var e,t;let r=new Set(ew);eS.forEach(e=>{r.add({current:e})});let o=document.querySelector(`[id='${a}']`);o&&r.add({current:o});let i=()=>{eN(!1)},s=ev(P),u=ev(U.current);eC.scroll&&(window.addEventListener("scroll",i),null==s||s.addEventListener("scroll",i),null==u||u.addEventListener("scroll",i));let d=null;eC.resize?window.addEventListener("resize",i):P&&U.current&&(d=function(e,t,r,o){let i;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:f=!1}=o,p=F(e),m=s||a?[...p?M(p):[],...M(t)]:[];m.forEach(e=>{s&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let v=p&&d?function(e,t){let r,o=null,i=O(e);function s(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();let{left:f,top:p,width:m,height:v}=e.getBoundingClientRect();if(u||t(),!m||!v)return;let y=c(p),h=c(i.clientWidth-(f+m)),w={rootMargin:-y+"px "+-h+"px "+-c(i.clientHeight-(p+v))+"px "+-c(f)+"px",threshold:l(0,n(1,d))||1},g=!0;function b(e){let t=e[0].intersectionRatio;if(t!==d){if(!g)return a();t?a(!1,t):r=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{o=new IntersectionObserver(b,{...w,root:i.ownerDocument})}catch(e){o=new IntersectionObserver(b,w)}o.observe(e)}(!0),s}(p,r):null,y=-1,h=null;u&&(h=new ResizeObserver(e=>{let[o]=e;o&&o.target===p&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var e;null==(e=h)||e.observe(t)})),r()}),p&&!f&&h.observe(p),h.observe(t));let w=f?K(e):null;return f&&function t(){let o=K(e);w&&(o.x!==w.x||o.y!==w.y||o.width!==w.width||o.height!==w.height)&&r(),w=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;m.forEach(e=>{s&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==v||v(),null==(e=h)||e.disconnect(),h=null,f&&cancelAnimationFrame(i)}}(P,U.current,eq,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));let f=e=>{"Escape"===e.key&&eN(!1)};eC.escape&&window.addEventListener("keydown",f),eC.clickOutsideAnchor&&window.addEventListener("click",eM);let p=[],m=e=>{en&&(null==e?void 0:e.target)===P||ej(e)},v=e=>{en&&(null==e?void 0:e.target)===P&&eH()},y=["mouseenter","mouseleave","focus","blur"],h=["click","dblclick","mousedown","mouseup"];Object.entries(ek).forEach(([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:eP}):h.includes(e)&&p.push({event:e,listener:m}))}),Object.entries(eL).forEach(([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:eV}):h.includes(e)&&p.push({event:e,listener:v}))}),b&&p.push({event:"pointermove",listener:eB});let w=()=>{ex.current=!0},g=()=>{ex.current=!1,eH()};return x&&!eO&&(null===(e=U.current)||void 0===e||e.addEventListener("mouseenter",w),null===(t=U.current)||void 0===t||t.addEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{r.forEach(r=>{var o;null===(o=r.current)||void 0===o||o.addEventListener(e,t)})}),()=>{var e,t;eC.scroll&&(window.removeEventListener("scroll",i),null==s||s.removeEventListener("scroll",i),null==u||u.removeEventListener("scroll",i)),eC.resize?window.removeEventListener("resize",i):null==d||d(),eC.clickOutsideAnchor&&window.removeEventListener("click",eM),eC.escape&&window.removeEventListener("keydown",f),x&&!eO&&(null===(e=U.current)||void 0===e||e.removeEventListener("mouseenter",w),null===(t=U.current)||void 0===t||t.removeEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{r.forEach(r=>{var o;null===(o=r.current)||void 0===o||o.removeEventListener(e,t)})})}},[P,eq,ec,ew,eS,R,k,L,eR,w,g]),(0,o.useEffect)(()=>{var e,r;let o=null!==(r=null!==(e=null==eu?void 0:eu.anchorSelect)&&void 0!==e?e:u)&&void 0!==r?r:"";!o&&t&&(o=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);let n=new MutationObserver(e=>{let r=[],n=[];e.forEach(e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===t?r.push(e.target):e.oldValue===t&&n.push(e.target)),"childList"===e.type){if(P){let t=[...e.removedNodes].filter(e=>1===e.nodeType);if(o)try{n.push(...t.filter(e=>e.matches(o))),n.push(...t.flatMap(e=>[...e.querySelectorAll(o)]))}catch(e){}t.some(e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,P))&&(es(!1),eN(!1),V(null),Q.current&&clearTimeout(Q.current),ee.current&&clearTimeout(ee.current),!0)})}if(o)try{let t=[...e.addedNodes].filter(e=>1===e.nodeType);r.push(...t.filter(e=>e.matches(o))),r.push(...t.flatMap(e=>[...e.querySelectorAll(o)]))}catch(e){}}}),(r.length||n.length)&&eA(e=>[...e.filter(e=>!n.includes(e)),...r])});return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{n.disconnect()}},[t,u,null==eu?void 0:eu.anchorSelect,P]),(0,o.useEffect)(()=>{eq()},[eq]),(0,o.useEffect)(()=>{if(!(null==H?void 0:H.current))return()=>null;let e=new ResizeObserver(()=>{setTimeout(()=>eq())});return e.observe(H.current),()=>{e.disconnect()}},[j,null==H?void 0:H.current]),(0,o.useEffect)(()=>{var e;let t=document.querySelector(`[id='${a}']`),r=[...eS,t];P&&r.includes(P)||V(null!==(e=eS[0])&&void 0!==e?e:t)},[a,eS,P]),(0,o.useEffect)(()=>(B&&eN(!0),()=>{Q.current&&clearTimeout(Q.current),ee.current&&clearTimeout(ee.current)}),[]),(0,o.useEffect)(()=>{var e;let r=null!==(e=null==eu?void 0:eu.anchorSelect)&&void 0!==e?e:u;if(!r&&t&&(r=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),r)try{let e=Array.from(document.querySelectorAll(r));eA(e)}catch(e){eA([])}},[t,u,null==eu?void 0:eu.anchorSelect]),(0,o.useEffect)(()=>{Q.current&&(clearTimeout(Q.current),e$(w))},[w]);let eK=null!==(G=null==eu?void 0:eu.content)&&void 0!==G?G:j,eX=en&&Object.keys(er.tooltipStyles).length>0;return(0,o.useImperativeHandle)(e,()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}ef(null!=e?e:null),(null==e?void 0:e.delay)?e$(e.delay):eN(!0)},close:e=>{(null==e?void 0:e.delay)?eI(e.delay):eN(!1)},activeAnchor:P,place:er.place,isOpen:!!(ec&&!_&&eK&&eX)})),ec&&!_&&eK?o.createElement(h,{id:t,role:Z,className:el("react-tooltip",eb.tooltip,e_.tooltip,e_[s],r,`react-tooltip__place-${er.place}`,eb[eX?"show":"closing"],eX?"react-tooltip__show":"react-tooltip__closing","fixed"===v&&eb.fixed,x&&eb.clickable),onTransitionEnd:e=>{et.current&&clearTimeout(et.current),en||"opacity"!==e.propertyName||(es(!1),ef(null),null==I||I())},style:{...N,...er.tooltipStyles,opacity:void 0!==X&&eX?X:void 0},ref:U},eK,o.createElement(h,{className:el("react-tooltip-arrow",eb.arrow,e_.arrow,i,E&&eb.noArrow),style:{...er.tooltipArrowStyles,background:Y?`linear-gradient(to right bottom, transparent 50%, ${Y} 50%)`:void 0},ref:J})):null},ex=({content:e})=>o.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),eS=o.forwardRef(({id:e,anchorId:t,anchorSelect:r,content:n,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:_=!1,noArrow:E=!1,clickable:x=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:T=!1,openEvents:R,closeEvents:O,globalCloseEvents:k,imperativeModeOnly:L=!1,style:C,position:N,isOpen:D,defaultIsOpen:$=!1,disableStyleInjection:I=!1,border:j,opacity:H,arrowColor:W,setIsOpen:B,afterShow:M,afterHide:z,role:F="tooltip"},P)=>{let[V,q]=(0,o.useState)(n),[K,X]=(0,o.useState)(l),[Y,Z]=(0,o.useState)(u),[G,U]=(0,o.useState)(a),[J,Q]=(0,o.useState)(d),[ee,et]=(0,o.useState)(w),[er,eo]=(0,o.useState)(g),[en,ei]=(0,o.useState)(b),[ec,es]=(0,o.useState)(_),[ea,ed]=(0,o.useState)(f),[ef,ep]=(0,o.useState)(m),[em,ev]=(0,o.useState)(y),[ey,eh]=(0,o.useState)(null),[ew,eb]=(0,o.useState)(null),e_=(0,o.useRef)(I),{anchorRefs:eS,activeAnchor:eA}=eg(e),eT=e=>null==e?void 0:e.getAttributeNames().reduce((t,r)=>{var o;return r.startsWith("data-tooltip-")&&(t[r.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(r))&&void 0!==o?o:null),t},{}),eR=e=>{let t={place:e=>{Z(null!=e?e:u)},content:e=>{q(null!=e?e:n)},html:e=>{X(null!=e?e:l)},variant:e=>{U(null!=e?e:a)},offset:e=>{Q(null===e?d:Number(e))},wrapper:e=>{ed(null!=e?e:f)},events:e=>{let t=null==e?void 0:e.split(" ");ep(null!=t?t:m)},"position-strategy":e=>{ev(null!=e?e:y)},"delay-show":e=>{et(null===e?w:Number(e))},"delay-hide":e=>{eo(null===e?g:Number(e))},float:e=>{ei(null===e?b:"true"===e)},hidden:e=>{es(null===e?_:"true"===e)},"class-name":e=>{eh(e)}};Object.values(t).forEach(e=>e(null)),Object.entries(e).forEach(([e,r])=>{var o;null===(o=t[e])||void 0===o||o.call(t,r)})};(0,o.useEffect)(()=>{q(n)},[n]),(0,o.useEffect)(()=>{X(l)},[l]),(0,o.useEffect)(()=>{Z(u)},[u]),(0,o.useEffect)(()=>{U(a)},[a]),(0,o.useEffect)(()=>{Q(d)},[d]),(0,o.useEffect)(()=>{et(w)},[w]),(0,o.useEffect)(()=>{eo(g)},[g]),(0,o.useEffect)(()=>{ei(b)},[b]),(0,o.useEffect)(()=>{es(_)},[_]),(0,o.useEffect)(()=>{ev(y)},[y]),(0,o.useEffect)(()=>{e_.current!==I&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[I]),(0,o.useEffect)(()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===I,disableBase:I}}))},[]),(0,o.useEffect)(()=>{var o;let n=new Set(eS),l=r;if(!l&&e&&(l=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),l)try{document.querySelectorAll(l).forEach(e=>{n.add({current:e})})}catch(e){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}let i=document.querySelector(`[id='${t}']`);if(i&&n.add({current:i}),!n.size)return()=>null;let c=null!==(o=null!=ew?ew:i)&&void 0!==o?o:eA.current,s=new MutationObserver(e=>{e.forEach(e=>{var t;c&&"attributes"===e.type&&(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-"))&&eR(eT(c))})});return c&&(eR(eT(c)),s.observe(c,{attributes:!0,childList:!1,subtree:!1})),()=>{s.disconnect()}},[eS,eA,ew,t,r]),(0,o.useEffect)(()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),j&&!eu("border",`${j}`)&&console.warn(`[react-tooltip] "${j}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),H&&!eu("opacity",`${H}`)&&console.warn(`[react-tooltip] "${H}" is not a valid \`opacity\`.`)},[]);let eO=p,ek=(0,o.useRef)(null);if(i){let e=i({content:(null==ew?void 0:ew.getAttribute("data-tooltip-content"))||V||null,activeAnchor:ew});eO=e?o.createElement("div",{ref:ek,className:"react-tooltip-content-wrapper"},e):null}else V&&(eO=V);K&&(eO=o.createElement(ex,{content:K}));let eL={forwardRef:P,id:e,anchorId:t,anchorSelect:r,className:el(c,ey),classNameArrow:s,content:eO,contentWrapperRef:ek,place:Y,variant:G,offset:J,wrapper:ea,events:ef,openOnClick:v,positionStrategy:em,middlewares:h,delayShow:ee,delayHide:er,float:en,hidden:ec,noArrow:E,clickable:x,closeOnEsc:S,closeOnScroll:A,closeOnResize:T,openEvents:R,closeEvents:O,globalCloseEvents:k,imperativeModeOnly:L,style:C,position:N,isOpen:D,defaultIsOpen:$,border:j,opacity:H,arrowColor:W,setIsOpen:B,afterShow:M,afterHide:z,activeAnchor:ew,setActiveAnchor:e=>eb(e),role:F};return o.createElement(eE,{...eL})});"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||es({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||es({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})})}}]);