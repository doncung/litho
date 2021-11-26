"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5529],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,f=d["".concat(a,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90369:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"faq",title:"FAQ"},s=void 0,c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Frequently Asked Questions",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"FAQ"}},d=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",children:[{value:"Using Litho with React Native",id:"using-litho-with-react-native",children:[],level:3},{value:"Forcing newer versions of the Support Library",id:"forcing-newer-versions-of-the-support-library",children:[],level:3},{value:"Could not initialize class com.facebook.yoga.YogaNode",id:"could-not-initialize-class-comfacebookyogayoganode",children:[],level:3},{value:"<code>@InjectProp</code> fails for generated components",id:"injectprop-fails-for-generated-components",children:[],level:3}],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.mdx)("h3",{id:"using-litho-with-react-native"},"Using Litho with React Native"),(0,i.mdx)("p",null,"React Native ships with its own version of Yoga which can cause conflicts when merging the\ndex files. In order to avoid this, you can instruct Gradle to exclude one of the Yoga modules."),(0,i.mdx)("p",null,"To do this, add a section like this to your Gradle file after the dependency declaration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-gradle"},"configurations.all {\n  exclude group: 'com.facebook.yoga', module: 'yoga'\n  exclude group: 'com.facebook.infer.annotation', module: 'infer-annotation'\n  exclude group: 'com.google.code.findbugs', module: 'jsr305'\n}\n")),(0,i.mdx)("p",null,"For more information, check out ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/issues/224"},"issue #224"),"."),(0,i.mdx)("h3",{id:"forcing-newer-versions-of-the-support-library"},"Forcing newer versions of the Support Library"),(0,i.mdx)("p",null,"If you want to override the version of the support library Litho requires, you can set\nthe overrides in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-gradle"},"configurations.all {\n  resolutionStrategy {\n    force 'com.android.support:appcompat-v7:26.+'\n    force 'com.android.support:support-compat:26.+'\n    force 'com.android.support:support-core-ui:26.+'\n    force 'com.android.support:support-annotations:26.+'\n    force 'com.android.support:recyclerview-v7:26.+'\n  }\n}\n")),(0,i.mdx)("h3",{id:"could-not-initialize-class-comfacebookyogayoganode"},"Could not initialize class com.facebook.yoga.YogaNode"),(0,i.mdx)("p",null,"If you are getting this error when running a Litho unit test, go through these steps:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Ensure Java 8 is correctly set up. If you are on a Mac, make sure that ",(0,i.mdx)("inlineCode",{parentName:"li"},"which java"),"\npoints to something like ",(0,i.mdx)("inlineCode",{parentName:"li"},"/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home/bin/java"),"\nand ",(0,i.mdx)("em",{parentName:"li"},"not")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"/usr/bin/java"),". Otherwise, update your ",(0,i.mdx)("inlineCode",{parentName:"li"},"$PATH")," accordingly.")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Buck")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Make sure your tests use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"litho_robolectric4_test")," which sets up the necessary dependencies on the native libraries."),(0,i.mdx)("li",{parentName:"ul"},"If your tests use PowerMock, use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"litho_robolectric4_powermock_test")," or set the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fork_mode")," manually to ",(0,i.mdx)("inlineCode",{parentName:"li"},"per_test")," which\nensures that class loaders aren't reused across threads."),(0,i.mdx)("li",{parentName:"ul"},"Try ",(0,i.mdx)("inlineCode",{parentName:"li"},"buck kill")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"buck clean"),"."),(0,i.mdx)("li",{parentName:"ul"},"If everything else fails, reboot.")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Gradle")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Follow the instructions under ",(0,i.mdx)("a",{parentName:"li",href:"/docs/testing/unit-testing#caveats"},"Unit Testing - Caveats")," for your setup."),(0,i.mdx)("li",{parentName:"ul"},"Relaunch the gradle daemon with ",(0,i.mdx)("inlineCode",{parentName:"li"},"./gradlew --stop"),".")),(0,i.mdx)("h3",{id:"injectprop-fails-for-generated-components"},(0,i.mdx)("inlineCode",{parentName:"h3"},"@InjectProp")," fails for generated components"),(0,i.mdx)("p",null,"When using parallel build systems like Buck, it can be difficult for the build\nsystem to determine the correct order to generate sources in. This can lead to\nessential type information being unavailable, making it impossible to determine\nthe fully qualified name. If a component A tries to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"@InjectProp")," for\nanother generated component B, this can fail if B is part of the same\ncompilation unit, but sits in a different package."),(0,i.mdx)("p",null,"The easiest workaround for this is to help the compiler by moving\neither the referencing or the referenced component into a separate build module.\nSplitting build modules by package is considered a good practice with Buck."))}p.isMDXComponent=!0}}]);