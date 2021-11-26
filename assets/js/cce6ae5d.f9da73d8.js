"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13919:(e,n,t)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>o})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>r});var a=t(52263),o=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(l)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+d:d}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},76656:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>p,toc:()=>m,default:()=>h});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(44996),l=t(44256),s=["components"],c={id:"start",title:"Basics: DiffSection and GroupSection"},d=void 0,p={unversionedId:"sections/start",id:"sections/start",isDocsHomePage:!1,title:"Basics: DiffSection and GroupSection",description:"The Sections API is a declarative, composable, and thread-safe API for writing highly-optimized list screens, built on top of Litho. It tries to address issues we've had at Facebook when writing complex lists, such as maintaining many view types, handling multiple data sources and composing lists together.",source:"@site/../docs/sections/start.mdx",sourceDirName:"sections",slug:"/sections/start",permalink:"/docs/sections/start",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/start.mdx",tags:[],version:"current",frontMatter:{id:"start",title:"Basics: DiffSection and GroupSection"},sidebar:"mainSidebar",previous:{title:"ComponentTree",permalink:"/docs/mainconcepts/coordinate-state-actions/componenttree"},next:{title:"Adding and adapting RecyclerCollection to your App",permalink:"/docs/sections/recycler-collection-component"}},m=[{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",children:[],level:2},{value:"DiffSection",id:"diffsection",children:[{value:"SingleComponentSection",id:"singlecomponentsection",children:[],level:3},{value:"DataDiffSection",id:"datadiffsection",children:[],level:3}],level:2},{value:"GroupSection",id:"groupsection",children:[],level:2},{value:"Putting all of the pieces together",id:"putting-all-of-the-pieces-together",children:[],level:2},{value:"Where to go next?",id:"where-to-go-next",children:[],level:2}],u={toc:m};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"The Sections API is a declarative, composable, and thread-safe API for writing highly-optimized list screens, built on top of Litho.")," It tries to address issues we've had at Facebook when writing complex lists, such as maintaining many view types, handling multiple data sources and composing lists together."),(0,i.mdx)("p",null,"While Litho Components are used for displaying pieces of UI, Sections are a way of composing data into a list of Litho Components or Views. If you visualize your screen as being a tree of components, the nodes for the root of the tree and the subtrees are Sections, while the leaves are Litho Components that represent individual items that will be displayed on screen."),(0,i.mdx)("img",{src:(0,r.default)("/images/sections-intro.png"),width:"800px"}),(0,i.mdx)("p",null,"Sections use the same hierarchical declarative data model as Components and under the hood transparently handle things like calculating minimal sets of changes for data updates and doing granular UI refreshes. As part of Litho, the Sections API shares the same main concepts such as annotation-based code generation, event handling, props and state updates. It is built on top of ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview"},"Android's ",(0,i.mdx)("inlineCode",{parentName:"a"},"RecyclerView")),"."),(0,i.mdx)("p",null,"In this document we'll walk you through the parts necessary to build a list: a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," for your layout, which sets several ",(0,i.mdx)("inlineCode",{parentName:"p"},"DiffSection")," that are either ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),", all contained inside ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSection")," hierarchies."),(0,i.mdx)("p",null,"If you have the time we recommend you also watch this Litho Lesson which covers the basics of how the diffing happens:"),(0,i.mdx)("div",{align:"center"},(0,i.mdx)("iframe",{"padding-top":"10px",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/-Ahskig2Lw0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.mdx)("h2",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),(0,i.mdx)("p",null,"You can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," as you would use any other component in the framework by building it and adding it as a child in your layout."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"RecyclerCollectionComponent.create(c)\n    .section(createGroupSection())\n    .build();\n")),(0,i.mdx)("p",null,"This is all you need to know about adding Sections to your layout for now. You can find an explanation of advanced use cases such as snapping and horizontal lists on the ",(0,i.mdx)("a",{parentName:"p",href:"recycler-collection-component"},"RecyclerCollectionComponent docs"),"."),(0,i.mdx)("h2",{id:"diffsection"},"DiffSection"),(0,i.mdx)("p",null,"Most lists are composed of groups of homogeneous items interleaved with one-off items. As an example, imagine a list of contacts sorted alphabetically and separated by headers indicating the first letter of the contact's name."),(0,i.mdx)("p",null,"Following this model the Sections API ships two ",(0,i.mdx)("inlineCode",{parentName:"p"},"DiffSectionSpec")," implementations that can be combined to represent the structure of nearly any surface: ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),"."),(0,i.mdx)("h3",{id:"singlecomponentsection"},"SingleComponentSection"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," is used to represent a ",(0,i.mdx)("strong",{parentName:"p"},"one-off row")," in a complex list. As the name suggests, you can use this Section to render a single Component which is passed to this Section as its only prop."),(0,i.mdx)("p",null,"One of the typical use cases of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," is to add a loading spinner at the end of a list:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"SingleComponentSection.create(c)\n    .component(Progress.create(c).build())\n    .build();\n")),(0,i.mdx)("p",null,"Or a header for your data:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'SingleComponentSection.create(c)\n    .component(Text.create(c).text("Friends").build())\n    .build();\n')),(0,i.mdx)("h3",{id:"datadiffsection"},"DataDiffSection"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is used to ",(0,i.mdx)("strong",{parentName:"p"},"represent a homogeneous list of ",(0,i.mdx)("em",{parentName:"strong"},"immutable")," data"),". The minimal information that you have to pass to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is the list of items that it needs to render and a callback for rendering each item in this list."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"DataDiffSection.<MyModel>create(c)\n    .data(ImmutableList.of(new MyModel(1), new MyModel(2), new MyModel(3)))\n    .renderEventHandler(MyGroupSection.onRenderEdge(c))\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is designed to efficiently render the parts of a surface that handle large flows of data. When an item at a certain position needs to be displayed on screen, the framework will check whether the model we have received in the new list of data changed since the last time we rendered it."),(0,i.mdx)("p",null,"If the data changed for the item in that position, the framework will dispatch a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," for that item and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," will use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," handler we passed as prop to create a Component for that item and display it."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(RenderEvent.class)\nstatic RenderInfo onRenderEdge(\n    SectionContext c,\n    @FromEvent MyModel model) {\n    return ComponentRenderInfo.create()\n        .component(MyModelItemComponent.create(c).item(model).build())\n        .build();\n}\n")),(0,i.mdx)("p",null,"By default ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," will detect data changes by checking instance equality and subsequently calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"equals")," on the objects in the data list."),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"You can visit the ",(0,i.mdx)("a",{parentName:"p",href:"best-practices"},"Best Practices and Performance")," documentation for a deep dive of how to build performant and accurate diffing, including diffing for classes where ",(0,i.mdx)("inlineCode",{parentName:"p"},"equals")," is not overwritten."))),(0,i.mdx)("h2",{id:"groupsection"},"GroupSection"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is used to ",(0,i.mdx)("strong",{parentName:"p"},"structure your Sections into a hierarchy"),", each one responsible for rendering its own chunk of data."),(0,i.mdx)("p",null,"Group section specs are classes annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@GroupSectionSpec"),". Implementing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is very simple: you only need to write one method annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateChildren"),". This method returns a tree of Sections that will have root in this ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),"."),(0,i.mdx)("p",null,"Let's have a look at how you would declare a simple list that contains a header followed by a list of ",(0,i.mdx)("inlineCode",{parentName:"p"},"String")," items:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass SimpleListSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop String headerTitle,\n      @Prop List<String> data) {\n    return Children.create()\n        .child(\n            SingleComponentSection.create(c)\n                .component(\n                    Text.create(c)\n                        .text(headerTitle)\n                        .build()))\n        .child(\n            DataDiffSection.<String>create(c)\n                .data(data)\n                .renderEventHandler(SimpleListSection.onRender(c)))\n        .build();\n  }\n\n  @OnEvent(RenderEvent.class)\n  static RenderInfo onRender(\n      SectionContext c,\n      @FromEvent String model) {\n    return ComponentRenderInfo.create()\n        .component(\n            Text.create(c)\n                .text(model)\n                .build())\n        .build();\n    }\n}\n")),(0,i.mdx)("h2",{id:"putting-all-of-the-pieces-together"},"Putting all of the pieces together"),(0,i.mdx)("p",null,"Imagine a surface that has multiple such subsections consisting of a header and list of Strings. An example could be a list of contacts grouped alphabetically, delimited by headers showing the first letter of the name. You can easily achieve that by creating a ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," that has a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleListSection")," child for every letter."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass ContactsSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop List<String> data) {\n\n    final Children.Builder builder = Children.create();\n\n    for(char firstLetter = 'A'; firstLetter <= 'Z'; firstLetter++) {\n        builder.child(\n            SimpleListSection.create(c)\n                .key(String.valueOf(firstLetter))\n                .headerTitle(String.valueOf(firstLetter))\n                .data(getItemsForLetter(firstLetter, data)));\n    }\n\n    return build.build();\n  }\n}\n")),(0,i.mdx)("p",null,"Below is a representation of the tree of Sections that has the root in ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContactsSectionSpec"),". Each node in the tree is a Section, and the leaves are Components that can be rendered on screen. Each one of the sections in the tree acts as a data source. Its responsibilities are to describe what data it needs and how that data should be rendered."),(0,i.mdx)("img",{src:(0,r.default)("/images/group-section-spec.png"),width:"800"}),(0,i.mdx)("p",null,"The Sections hierarchy becomes a data source for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", and we only have to pass the data that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContactsSection")," will use to create each ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleListSection"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    final ComponentContext c) {\n  return RecyclerCollectionComponent.create(c)\n    .section(\n        ContactsSection.create(new SectionContext(c))\n            .dataModel(ImmutableList.of("Andy", "Aziz", "Aditya", "Nico", "Sergey"))\n            .build())\n    .build();\n}\n')),(0,i.mdx)("p",null,"That is everything there is to most list you'll build. A small API surface for a lot of functionality! The complexity of handling operations on your list, such as inserts or removes, is hidden away and handled by the infrastructure."),(0,i.mdx)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,i.mdx)("p",null,"We suggest reading into ",(0,i.mdx)("a",{parentName:"p",href:"best-practices"},"Best Practices and Performance")," first. Afterwards you can head for one of the documents referring to advanced use cases your list may have, such as ",(0,i.mdx)("a",{parentName:"p",href:"recycler-collection-component"},"complex list layouts"),", ",(0,i.mdx)("a",{parentName:"p",href:"services"},"granular dependency injection"),", or ",(0,i.mdx)("a",{parentName:"p",href:"working-ranges"},"prefetch and pagination"),"."),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"If you find yourself in trouble, you can also check our internal wiki about ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/wiki/sr02b53q"},"debugging frequently reported issues with Flipper"),".")),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("div",null)))}h.isMDXComponent=!0}}]);