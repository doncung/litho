"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2710],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>l});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(t),u=a,m=l["".concat(i,".").concat(u)]||l[u]||h[u]||o;return t?r.createElement(m,c(c({ref:n},d),{},{components:t})):r.createElement(m,c({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73267:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>d,toc:()=>l,default:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"services",title:"Advanced: Granular Dependency Injection"},s=void 0,d={unversionedId:"sections/services",id:"sections/services",isDocsHomePage:!1,title:"Advanced: Granular Dependency Injection",description:"Values such as @Prop flow through Sections before being rendered on screen. The Sections API sits between your data source and the UI Component to efficiently calculate the changesets you need to render your components. For better performance we should only do work at the layer where it is required.",source:"@site/../docs/sections/services.md",sourceDirName:"sections",slug:"/sections/services",permalink:"/docs/sections/services",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/services.md",tags:[],version:"current",frontMatter:{id:"services",title:"Advanced: Granular Dependency Injection"},sidebar:"mainSidebar",previous:{title:"Advanced: Prefetch and pagination",permalink:"/docs/sections/working-ranges"},next:{title:"Advanced: Mixing with Android Views",permalink:"/docs/sections/view-support"}},l=[{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[],level:3},{value:"Lifecycle of Services",id:"lifecycle-of-services",children:[],level:3}],level:2},{value:"Use of Services in context",id:"use-of-services-in-context",children:[],level:2}],p={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Values such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," flow through Sections before being rendered on screen. The Sections API sits between your data source and the UI Component to efficiently calculate the changesets you need to render your components. For better performance we should only do work at the layer where it is required."),(0,o.mdx)("p",null,"Thus, the data should ideally be fetched only in the Sections that use it. You need for those ",(0,o.mdx)("strong",{parentName:"p"},"data fetchers to be available throughout your Sections hierarchy")," without having to cumbersomely pass them through each of the layers, and even through ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSection")," that don't use it directly."),(0,o.mdx)("p",null,"This is where Services come in."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"Services are what sections use to control your data source imperatively. It is through the service APIs where the ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionLifecycle.html"},"SectionLifecycle")," can be made known outside of the hierarchy. This allows you to know when you should start fetching your data."),(0,o.mdx)("p",null,"Since a service is tied to a particular Section, this means it has access to all the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State")," and interacts with them. This also means that the service is able to respond to events such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnViewportChanged")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnRefresh"),", and call for a state update when new data arrives to allow the data to flow down the hierarchy."),(0,o.mdx)("h3",{id:"creation"},"Creation"),(0,o.mdx)("p",null,"Services are persisted across state updates and for however long the sections remain in the hierarchy. The first and only instance of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Service")," should be created in the lifecycle ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateService")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\npublic ServiceSectionSpec {\n  ...\n  @OnCreateService\n  static DataLoader onCreateServices(\n    SectionContext c,\n    @Prop Configuration config) {\n      return DataLoaderFactory.createLoader(config);\n  }\n}\n")),(0,o.mdx)("h3",{id:"lifecycle-of-services"},"Lifecycle of Services"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"@OnBindService")," is a callback that allows you to define how your service should interact with its section. This bridge can be used to pass the new set of data to the section whenever a fetch is completed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnBindService\nstatic void onBindService(\n  SectionContext c,\n  DataLoader service) {\n    service.registerEventLoader(ServiceSection.dataLoaded(c));\n}\n\n@OnEvent(YourData.class)\nstatic void dataLoaded(\n  SectionContext c,\n  @FromEvent Data data) {\n    ServiceSection.updateData(c, data);\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUnbindService")," provides the callback for you to clean up and undo anything you have done in ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnBindService"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnUnbindService\nstatic void onUnbindService(\n  SectionContext c,\n  DataLoader service) {\n    service.unregisterEventLoader();\n}\n")),(0,o.mdx)("p",null,"Both functions are called every time the section tree is updated by events such as a state update. These function receive the service created by ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateService")," as the second function parameter."),(0,o.mdx)("h2",{id:"use-of-services-in-context"},"Use of Services in context"),(0,o.mdx)("p",null,"As aforementioned, services are able to respond to Litho and Sections events such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnRefresh"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"}," @OnRefresh\n static void onRefresh(\n   SectionContext c,\n   DataLoader service) {\n     service.refreshData();\n }\n")),(0,o.mdx)("p",null,"or ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnViewportChanged"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"}," @OnViewportChanged\n static void onViewportChanged(\n   SectionContext c,\n   int firstVisibleIndex,\n   int lastVisibleIndex,\n   int totalCount,\n   int firstFullyVisibleIndex,\n   int lastFullyVisibleIndex,\n   DataLoader service) {\n     service.makeTailFetch();\n }\n")))}u.isMDXComponent=!0}}]);