"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4384],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>l});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),l=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),c=i,h=l["".concat(r,".").concat(c)]||l[c]||u[c]||o;return t?a.createElement(h,d(d({ref:n},m),{},{components:t})):a.createElement(h,d({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},751:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>m,toc:()=>l,default:()=>c});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],d={id:"transition-definitions",title:"Advanced: More ways to define transitions"},s=void 0,m={unversionedId:"animations/transition-definitions",id:"animations/transition-definitions",isDocsHomePage:!1,title:"Advanced: More ways to define transitions",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/animations/transition-definitions.md",sourceDirName:"animations",slug:"/animations/transition-definitions",permalink:"/docs/animations/transition-definitions",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-definitions.md",tags:[],version:"current",frontMatter:{id:"transition-definitions",title:"Advanced: More ways to define transitions"},sidebar:"mainSidebar",previous:{title:"Customizing Transitions",permalink:"/docs/animations/transition-choreography"},next:{title:"Advanced: Transitions key scoping",permalink:"/docs/animations/transition-key-types"}},l=[{value:"@State Arguments",id:"state-arguments",children:[],level:3},{value:"@Prop <code>Diff&lt;T&gt;</code> and @State <code>Diff&lt;T&gt;</code>",id:"prop-difft-and-state-difft",children:[],level:3},{value:"@OnUpdateStateWithTransition",id:"onupdatestatewithtransition",children:[],level:3}],p={toc:l};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"),(0,o.mdx)("p",{parentName:"div"},"T81099238"))),(0,o.mdx)("h3",{id:"state-arguments"},"@State Arguments"),(0,o.mdx)("p",null,"Litho allows ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," methods to take ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State")," arguments if the Transition definition should take value of the state into account."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateTransition\nstatic Transition onCreateTransition(\n      ComponentContext c, @State boolean animationsDisabled) {\n  if (animationsDisabled) {\n    return null;\n  }\n\n  return Transition.create("square").animate(AnimatedProperties.X);\n}\n')),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"In order to make this happen, the framework needs to postpone collection of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition"),"s until ",(0,o.mdx)("inlineCode",{parentName:"p"},"MountState")," (always on UI thread), while normally this would be done on ",(0,o.mdx)("inlineCode",{parentName:"p"},"LayoutState")," (which may be processed on a background thread)."))),(0,o.mdx)("h3",{id:"prop-difft-and-state-difft"},"@Prop ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Diff<T>")," and @State ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Diff<T>")),(0,o.mdx)("p",null,"If your transitions should depend not only on the actual (updated) value of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," or a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State"),", but rather ont the value change, you could use a generic ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Diff.html"},"Diff")," for arguments, so you get access to both previous and next ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," values."),(0,o.mdx)("p",null,"Here's how we could change one of our samples to only animate expanding, but not collapsing."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c, @Prop Diff<Boolean> expanded) {\n  boolean isExpanding = !expanded.getPrevious() && expanded.getNext();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")),(0,o.mdx)("h3",{id:"onupdatestatewithtransition"},"@OnUpdateStateWithTransition"),(0,o.mdx)("p",null,"To define transitions that should run conditionally under certain circumstances, you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTranstion")," method."),(0,o.mdx)("p",null,"It works as regular ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," methods, but also returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition")," that should be run whenever the method was invoked.\nAnother implementation for the above sample using ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTransition")," may look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(ClickEvent.class)\nstatic void onClick(ComponentContext c) {\n  MyComponent.toggleWithTransition(c);\n}\n\n@OnUpdateStateWithTransition\nstatic Transition toggle(StateValue<Boolean> expanded) {\n  expanded.set(!expanded.get()); // Updating state value\n\n  boolean isExpanding = expanded.get();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")))}c.isMDXComponent=!0}}]);