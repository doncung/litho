"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9950],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,f=p["".concat(l,".").concat(s)]||p[s]||u[s]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=["components"],i={id:"mountable-preallocation",title:"Content Pooling"},m=void 0,c={unversionedId:"mountablecomponents/mountable-preallocation",id:"mountablecomponents/mountable-preallocation",title:"Content Pooling",description:"When a Mountable Component is being mounted, its content (View or Drawable) needs to be either initialized or reused from the recycling pool. If the pool is empty, a new instance will be created at that time, which might keep the UI thread too busy and drop one or more frames. To mitigate that, the Litho framework can pre-allocate a few instances and put them in the recycling pool to improve performance.",source:"@site/../docs/mountablecomponents/mountable-preallocation.mdx",sourceDirName:"mountablecomponents",slug:"/mountablecomponents/mountable-preallocation",permalink:"/docs/mountablecomponents/mountable-preallocation",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mountablecomponents/mountable-preallocation.mdx",tags:[],version:"current",frontMatter:{id:"mountable-preallocation",title:"Content Pooling"}},p={},d=[{value:"Configuring pools",id:"configuring-pools",level:2},{value:"Pre-allocation example",id:"pre-allocation-example",level:2}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When a Mountable Component is being mounted, its content (View or Drawable) needs to be either initialized or reused from the recycling pool. If the pool is empty, a new instance will be created at that time, which might keep the UI thread too busy and drop one or more frames. To mitigate that, the Litho framework can pre-allocate a few instances and put them in the recycling pool to improve performance."),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Content pooling is especially recommended for Mountable Components that inflate a complex View, which is time-consuming to create from scratch.")),(0,a.mdx)("h2",{id:"configuring-pools"},"Configuring pools"),(0,a.mdx)("p",null,"In order to configure content pools, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Mountable.getContentAllocator()")," method should be overridden to return a bespoke ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/introduction-to-rendercore/#contentallocator"},"ContentAllocator")," implementation."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"ContentAllocator")," interface contains a few methods that should be overridden to configure the pool behaviour:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"canPreallocate()")," - enables pre-allocation for this Mountable Component (disabled by default)"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"poolSize()")," - defines the number of instances for the Litho framework to pre-allocate (default value is three)"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"createRecyclingPool()")," - can be overridden to create a custom pool (a default pool will be created if not overridden)"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"isRecyclingDisabled()")," - can be overridden to disable recycling for the mount content")),(0,a.mdx)("admonition",{type:"tip"},(0,a.mdx)("p",{parentName:"admonition"},"If creating new instances of the content is time-consuming but not very memory-consuming, it's recommended to keep the pool size high"),(0,a.mdx)("p",{parentName:"admonition"},"If there are memory concerns (especially for memory-consuming content), smaller pool sizes are recommended, or pooling can be disabled altogether by returning true from ",(0,a.mdx)("inlineCode",{parentName:"p"},"isRecyclingDisabled()"),".")),(0,a.mdx)("h2",{id:"pre-allocation-example"},"Pre-allocation example"),(0,a.mdx)("p",null,"In order for mount content to be pre-allocated, at least the ",(0,a.mdx)("inlineCode",{parentName:"p"},"canPreallocate()")," method should be overridden to return ",(0,a.mdx)("inlineCode",{parentName:"p"},"true"),". Override ",(0,a.mdx)("inlineCode",{parentName:"p"},"poolSize()")," to configure the amount of items in the pool, as shown in the example below:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewComponent.kt start=start_preallocation_example end=end_preallocation_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewComponent.kt",start:"start_preallocation_example",end:"end_preallocation_example"},"override fun canPreallocate(): Boolean = true\n\noverride fun poolSize(): Int {\n  return 10\n}\n")),(0,a.mdx)("p",null,"For the SimpleImageViewComponent example above, ten instances of ImageView will be created and pre-allocated in the recycling pool."))}u.isMDXComponent=!0}}]);