"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9195],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>l,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){return function(t){var n=l(t.components);return r.createElement(e,o({},t,{components:n}))}},l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63004:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>m,toc:()=>p,default:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"immutability",title:"Immutability"},s=void 0,m={unversionedId:"best-practices/immutability",id:"best-practices/immutability",isDocsHomePage:!1,title:"Immutability",description:"Components are essentially functions that receive data as parameters and are immutable (cannot be changed). When the props or state of a component change, the framework will create a new component instance with the updated information, because the previous component cannot be mutated.",source:"@site/../docs/best-practices/immutability.md",sourceDirName:"best-practices",slug:"/best-practices/immutability",permalink:"/docs/best-practices/immutability",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/best-practices/immutability.md",tags:[],version:"current",frontMatter:{id:"immutability",title:"Immutability"},sidebar:"mainSidebar",previous:{title:"Flipper Plugins",permalink:"/docs/devtools/flipper-plugins"},next:{title:"Props vs. State",permalink:"/docs/best-practices/props-vs-state"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Components are essentially functions that receive data as parameters and are immutable (cannot be changed). When the props or state of a component change, the framework will create a new component instance with the updated information, because the previous component cannot be mutated."),(0,o.mdx)("p",null,"While the component itself is immutable, it is easy to make it not thread safe by using mutable objects for props and state. Litho computes ",(0,o.mdx)("a",{parentName:"p",href:"/docs/asynchronous-layout"},"layout on a background thread"),", and if the objects that make up a component's props or state are mutated from another thread, then this may result in rendering different outputs for the same component."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Best Practice")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"You must keep your props and state either as primitive types which are inherently immutable, or if that's not possible, make sure that the objects that you are using are immutable."))))}u.isMDXComponent=!0}}]);