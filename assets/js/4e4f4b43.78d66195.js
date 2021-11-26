"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9519],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){return function(n){var t=d(n.components);return a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),c=o,h=s["".concat(r,".").concat(c)]||s[c]||u[c]||i;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},72649:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>m,toc:()=>s,default:()=>c});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=["components"],l={id:"first-components",title:"Components and Props"},p=void 0,m={unversionedId:"tutorial/first-components",id:"tutorial/first-components",isDocsHomePage:!1,title:"Components and Props",description:"In this part of the tutorial, you'll learn the basic Litho building blocks, write a simple component,",source:"@site/../docs/tutorial/first-components.md",sourceDirName:"tutorial",slug:"/tutorial/first-components",permalink:"/docs/tutorial/first-components",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/first-components.md",tags:[],version:"current",frontMatter:{id:"first-components",title:"Components and Props"},sidebar:"mainSidebar",previous:{title:"Setting up the project",permalink:"/docs/tutorial/project-setup"},next:{title:"Adding State",permalink:"/docs/tutorial/adding-state"}},s=[{value:"Hello World!",id:"hello-world",children:[{value:"Key Points:",id:"key-points",children:[],level:4}],level:2},{value:"First Component Spec",id:"first-component-spec",children:[{value:"Key Points:",id:"key-points-1",children:[],level:4}],level:2},{value:"Introducing Layout",id:"introducing-layout",children:[{value:"Key Points:",id:"key-points-2",children:[],level:4}],level:2}],d={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this part of the tutorial, you'll learn the basic Litho building blocks, write a simple component,\nextend it to accept ",(0,i.mdx)("strong",{parentName:"p"},"props")," and get familiar with building layouts with Flexbox in Litho."),(0,i.mdx)("h2",{id:"hello-world"},"Hello World!"),(0,i.mdx)("p",null,'To display a "Hello World!" text on the screen with Litho you need to integrate Litho component\nhierarchy into your View hierarchy.'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/HelloWorldActivity.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/HelloWorldActivity.java",start:"start_example",end:"end_example"},'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n  super.onCreate(savedInstanceState);\n\n  ComponentContext c = new ComponentContext(this);\n  setContentView(LithoView.create(this, Text.create(c).text("Hello World!").build()));\n}\n')),(0,i.mdx)("h4",{id:"key-points"},"Key Points:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView"),": A hierarchy of Litho components is rendered using a LithoView"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Text.create(c)"),": This is how you create a component (using a generated builder), both built-in\nones and components you define yourself."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".text('Hello World!')"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"text")," is a ",(0,i.mdx)("strong",{parentName:"li"},"prop")," of the Text component \u2013 an input parameter to\nconfigure the component.")),(0,i.mdx)("p",null,"Ignore ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentContext")," for now, just know you need one to create a component."),(0,i.mdx)("h2",{id:"first-component-spec"},"First Component Spec"),(0,i.mdx)("p",null,"Welcome to your first Litho component spec! Previously you used a built-in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," component but now\nyou'll define your own. Like Text, your new component can also take ",(0,i.mdx)("strong",{parentName:"p"},"props"),". Props configure\na component."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/FirstComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/FirstComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class FirstComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop String name) {\n    return Text.create(c).text("Hello " + name + "!").build();\n  }\n}\n')),(0,i.mdx)("p",null,"To use your component, you can just replace the Text component from above with your component,\nsetting the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," prop:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/FirstComponentSpecActivity.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/FirstComponentSpecActivity.java",start:"start_example",end:"end_example"},'setContentView(LithoView.create(this, FirstComponent.create(c).name("Linda").build()));\n')),(0,i.mdx)("h4",{id:"key-points-1"},"Key Points:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@LayoutSpec"),": This annotation tells us that the class defines a component. ",(0,i.mdx)("strong",{parentName:"li"},"The name of your\ncomponent is the name of the spec minus 'Spec'.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@OnCreateLayout"),": The static method marked with this annotation returns what your component\nshould render. ",(0,i.mdx)("inlineCode",{parentName:"li"},"@LayoutSpec")," components delegate to other components, combining, configuring, and\nputting them into layouts. ",(0,i.mdx)("strong",{parentName:"li"},"Composition of components is a key Litho concept!")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@Prop"),": This defines a ",(0,i.mdx)("strong",{parentName:"li"},"prop")," for your component. It will automatically be added to your\ncomponent builder and is required for your component to be built.")),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Your component class is generated at build time via the annotation processor. To get proper IDE\nautocompletion without having to rebuild, make sure you've installed the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/devtools/android-studio-plugin"},"Litho Android Studio plugin"),"!"))),(0,i.mdx)("h2",{id:"introducing-layout"},"Introducing Layout"),(0,i.mdx)("p",null,"Enough of HelloWorlds \u2013 let's get to building our Instagram app!"),(0,i.mdx)("p",null,"You'll start with creating a component for an Instagram post and that requires layouting 2 images\nand a text in a particular way. Layouts in Litho are defined via the Flexbox API. You can read more\nabout different layouting options in ",(0,i.mdx)("a",{parentName:"p",href:"docs/mainconcepts/uicomposition/flexbox-yoga"},"Layout with Flexbox"),"\ndoc, but for now it's enough to know that the main Flexbox primitives are ",(0,i.mdx)("strong",{parentName:"p"},"Column")," and ",(0,i.mdx)("strong",{parentName:"p"},"Row"),",\nand they are used to arrange children vertically and horizontally, respectively."),(0,i.mdx)("p",null,"With their help a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Post")," component that will render the UI of an Instagram post will look like that:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/PostSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/PostSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class PostSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop String username, @Prop int avatarRes, @Prop int imageRes) {\n    return Column.create(c)\n        .child(\n            Row.create(c)\n                .child(Image.create(c).drawableRes(avatarRes))\n                .child(Text.create(c).text(username).textStyle(Typeface.BOLD)))\n        .child(\n            Image.create(c)\n                .drawableRes(imageRes)\n                .scaleType(ImageView.ScaleType.CENTER_CROP)\n                .aspectRatio(1))\n        .build();\n  }\n}\n")),(0,i.mdx)("p",null,"Though hierarchically components are placed correctly, this doesn't look nice, so, as a final touch\nlet's apply some flexbox styles:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/PostStyledSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/PostStyledSpec.java",start:"start_example",end:"end_example"},"@OnCreateLayout\nstatic Component onCreateLayout(\n    ComponentContext c, @Prop String username, @Prop int avatarRes, @Prop int imageRes) {\n  return Column.create(c)\n      .child(\n          Row.create(c)\n              .paddingDip(YogaEdge.ALL, 8)\n              .alignItems(YogaAlign.CENTER)\n              .child(\n                  Image.create(c)\n                      .drawableRes(avatarRes)\n                      .widthDip(36)\n                      .heightDip(36)\n                      .marginDip(YogaEdge.START, 4)\n                      .marginDip(YogaEdge.END, 8))\n              .child(Text.create(c).text(username).textStyle(Typeface.BOLD)))\n      .child(\n          Image.create(c)\n              .drawableRes(imageRes)\n              .scaleType(ImageView.ScaleType.CENTER_CROP)\n              .aspectRatio(1))\n      .build();\n}\n")),(0,i.mdx)("h4",{id:"key-points-2"},"Key Points:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Column")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Row"),": The key container types in Litho. They stack children vertically and\nhorizontally, respectively."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"paddingDip"),": This prop sets padding in Android dp units. ",(0,i.mdx)("inlineCode",{parentName:"li"},"padding")," along with ",(0,i.mdx)("inlineCode",{parentName:"li"},"margin"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"width"),"\nand ",(0,i.mdx)("inlineCode",{parentName:"li"},"height")," are some of many props where you will find variants like ",(0,i.mdx)("inlineCode",{parentName:"li"},"paddingRes"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"paddingPx"),",\nand ",(0,i.mdx)("inlineCode",{parentName:"li"},"paddingAttr")," that allow you to define it in different ways."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Image"),": Image is another built-in component that can render a drawable, and ",(0,i.mdx)("inlineCode",{parentName:"li"},"drawableRes")," is\nanother prop like padding that can accept a drawable in different ways.")))}c.isMDXComponent=!0}}]);