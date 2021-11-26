"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4541],{3905:(n,e,t)=>{t.r(e),t.d(e,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},o.apply(this,arguments)}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),c=function(n){return function(e){var t=d(e.components);return a.createElement(n,o({},e,{components:t}))}},d=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=d(n.components);return a.createElement(l.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,r=n.parentName,l=m(n,["components","mdxType","originalType","parentName"]),c=d(t),p=i,u=c["".concat(r,".").concat(p)]||c[p]||h[p]||o;return t?a.createElement(u,s(s({ref:e},l),{},{components:t})):a.createElement(u,s({ref:e},l))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13919:(n,e,t)=>{function a(n){return!0===/^(\w*:|\/\/)/.test(n)}function i(n){return void 0!==n&&!a(n)}t.d(e,{b:()=>a,Z:()=>i})},44996:(n,e,t)=>{t.r(e),t.d(e,{useBaseUrlUtils:()=>o,default:()=>r});var a=t(52263),i=t(13919);function o(){var n=(0,a.default)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,o=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,m=o.absolute,l=void 0!==m&&m;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(s)return e+t;var c=t.startsWith(e)?t:e+t.replace(/^\//,"");return l?n+c:c}(o,t,n,e)}}}function r(n,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(n,e)}},36873:(n,e,t)=>{t.r(e),t.d(e,{frontMatter:()=>m,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>h});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(44996),s=["components"],m={id:"transition-choreography",title:"Customizing Transitions"},l=void 0,c={unversionedId:"animations/transition-choreography",id:"animations/transition-choreography",isDocsHomePage:!1,title:"Customizing Transitions",description:"After the Animation basics the next natural step would be to create more complex transition animations. Litho provides several APIs to customize many aspects of the transitions and how different components can be animated together.",source:"@site/../docs/animations/transition-choreography.mdx",sourceDirName:"animations",slug:"/animations/transition-choreography",permalink:"/docs/animations/transition-choreography",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-choreography.mdx",tags:[],version:"current",frontMatter:{id:"transition-choreography",title:"Customizing Transitions"},sidebar:"mainSidebar",previous:{title:"Animating All Layout",permalink:"/docs/animations/transition-all-layout"},next:{title:"Advanced: More ways to define transitions",permalink:"/docs/animations/transition-definitions"}},d=[{value:"Staggers, Sequences, and Parallel Sets",id:"staggers-sequences-and-parallel-sets",children:[],level:3},{value:"Animators",id:"animators",children:[],level:3},{value:"Transition end callback",id:"transition-end-callback",children:[],level:3}],p={toc:d};function h(n){var e=n.components,t=(0,i.Z)(n,s);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"After the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/animations/transition-basics"},"Animation basics")," the next natural step would be to create more complex transition animations. Litho provides several APIs to customize many aspects of the transitions and how different components can be animated together."),(0,o.mdx)("h3",{id:"staggers-sequences-and-parallel-sets"},"Staggers, Sequences, and Parallel Sets"),(0,o.mdx)("p",null,"Synchronising transitions objects can be done by wrapping them in one of the following animations sets: ",(0,o.mdx)("inlineCode",{parentName:"p"},"parallel"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"sequence")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"stagger"),". This transition sets can be nested within each other, e.g. you can have a stagger of parallel animation sets."),(0,o.mdx)("p",null,"Example using a ",(0,o.mdx)("inlineCode",{parentName:"p"},"stagger")," set to animate 3 different rectangles."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/StaggerTransitionComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/StaggerTransitionComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class StaggerTransitionComponentSpec {\n  private static final String YELLOW_KEY = "YELLOW_KEY";\n  private static final String BLUE_KEY = "BLUE_KEY";\n  private static final String PURPLE_KEY = "PURPLE_KEY";\n  private static final int PURPLE_COLOR = Color.rgb(144, 29, 191);\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean shown) {\n    return Row.create(c)\n        .heightPercent(100)\n        .child(\n            Row.create(c)\n                .child(\n                    SolidColor.create(c)\n                        .widthDip(90)\n                        .heightDip(40)\n                        .transitionKey(YELLOW_KEY)\n                        .color(Color.YELLOW))\n                .child(\n                    SolidColor.create(c)\n                        .widthDip(90)\n                        .heightDip(40)\n                        .transitionKey(BLUE_KEY)\n                        .color(Color.BLUE))\n                .child(\n                    SolidColor.create(c)\n                        .widthDip(90)\n                        .heightDip(40)\n                        .transitionKey(PURPLE_KEY)\n                        .color(PURPLE_COLOR)))\n        .clickHandler(StaggerTransitionComponent.onClickEvent(c))\n        .alignItems(shown ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.stagger(\n        100,\n        Transition.create(YELLOW_KEY).animate(AnimatedProperties.Y),\n        Transition.create(BLUE_KEY).animate(AnimatedProperties.Y),\n        Transition.create(PURPLE_KEY).animate(AnimatedProperties.Y));\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    StaggerTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> shown) {\n    shown.set(!shown.get());\n  }\n}\n')),(0,o.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,o.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/stagger.webm")}),(0,o.mdx)("p",null,"Your browser does not support the video element.")),(0,o.mdx)("p",null,"Sequences and staggers also support interrupting behavior, trying to preserve the guarantee that a component will never jump and will always end up in the correct final position."),(0,o.mdx)("p",null,"We can also use this sets to animate different properties of the same component, like in the following example."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/StaggerTransitionSameComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/StaggerTransitionSameComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class StaggerTransitionSameComponentSpec {\n  private static final String YELLOW_KEY = "YELLOW_KEY";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean shown) {\n    return Row.create(c)\n        .heightPercent(100)\n        .child(\n            Row.create(c)\n                .child(\n                    SolidColor.create(c)\n                        .widthDip(90)\n                        .heightDip(40)\n                        .transitionKey(YELLOW_KEY)\n                        .color(Color.YELLOW)))\n        .clickHandler(StaggerTransitionSameComponent.onClickEvent(c))\n        .justifyContent(shown ? YogaJustify.FLEX_END : YogaJustify.FLEX_START)\n        .alignItems(shown ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.stagger(\n        50,\n        Transition.create(YELLOW_KEY).animate(AnimatedProperties.Y),\n        Transition.create(YELLOW_KEY).animate(AnimatedProperties.X));\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    StaggerTransitionSameComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> shown) {\n    shown.set(!shown.get());\n  }\n}\n')),(0,o.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,o.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/stagger3.webm")}),(0,o.mdx)("p",null,"Your browser does not support the video element.")),(0,o.mdx)("h3",{id:"animators"},"Animators"),(0,o.mdx)("p",null,"Animators affect the rate in which we push new values to the animating components. An ",(0,o.mdx)("inlineCode",{parentName:"p"},"Animator")," can be added to any transition by using ",(0,o.mdx)("inlineCode",{parentName:"p"},".animator()")," builder setting.\nWe provide two animators (spring based ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.SpringTransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"SpringTransitionAnimator"))," and a general timing-based ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TimingTransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"TimingTransitionAnimator")),") that can be configured to cover most use cases. It is also possible to add a custom by implementing ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"Transition.TransitionAnimator")),".\nBy default, all transitions in Litho run by ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.SpringTransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"SpringTransitionAnimator"))," which is physics based and naturally interruptible. You can tune the parameters of this spring by creating another ",(0,o.mdx)("inlineCode",{parentName:"p"},"Animator")," using ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition.springWith()")," and pass custom tension and friction. . On the other hand, ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TimingTransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"TimingTransitionAnimator"))," provides more customisation as we can set a total time and an ",(0,o.mdx)("inlineCode",{parentName:"p"},"Interpolator"),". To do this we provide an easy builder ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition.timing()")," that received the total time and an optional ",(0,o.mdx)("inlineCode",{parentName:"p"},"Interpolator"),"."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.TimingTransitionAnimator.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"TimingTransitionAnimator"))," default interpolator is an ",(0,o.mdx)("inlineCode",{parentName:"p"},"AccelerateDecelerateInterpolator")," so keep in mind that adding this animator to only a few transitions in a set (like the example below) could create unwanted behavior."))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/ParallelTransitionWithAnimatorsComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/ParallelTransitionWithAnimatorsComponentSpec.java",start:"start",end:"end"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.parallel(\n      Transition.create(YELLOW_KEY)\n          .animate(AnimatedProperties.Y)\n          .animator(Transition.springWithConfig(120, 12)),\n      Transition.create(BLUE_KEY).animate(AnimatedProperties.Y).animator(Transition.timing(1000)),\n      Transition.create(PURPLE_KEY)\n          .animate(AnimatedProperties.Y)\n          .animator(Transition.timing(1000, new BounceInterpolator())));\n}\n")),(0,o.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},(0,o.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/stagger4.webm")}),(0,o.mdx)("p",null,"Your browser does not support the video element.")),(0,o.mdx)("h3",{id:"transition-end-callback"},"Transition end callback"),(0,o.mdx)("p",null,"A listener can be added to receive a callback when an individual transition has ended. This is done through the Litho event dispatcher. See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/events"},"Events overview"),".\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"TransitionEndEvent")," will be called with the transition key and the specific ",(0,o.mdx)("inlineCode",{parentName:"p"},"AnimatedProperty")," that has been animated for that key. If multiple ",(0,o.mdx)("inlineCode",{parentName:"p"},"AnimatedProperty"),"s are added to the same transition, and all of them run at the same time, a callback will be excecuted for each one of those.\nIn many cases this callback may be useful to loop animations by updating the tree. Many examples can be found in the Litho Sample app: ",(0,o.mdx)("inlineCode",{parentName:"p"},"API Demos"),"->",(0,o.mdx)("inlineCode",{parentName:"p"},"Animation Callbacks"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SequenceTransitionLoopComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/SequenceTransitionLoopComponentSpec.java",start:"start",end:"end"},"@OnEvent(TransitionEndEvent.class)\nstatic void onTransitionEndEvent(\n    ComponentContext c,\n    @FromEvent String transitionKey,\n    @FromEvent AnimatedProperty property,\n    @State boolean isLooping) {\n  SequenceTransitionLoopComponent.onUpdateState(c, false);\n}\n\n@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.sequence(\n      Transition.create(YELLOW_KEY).animate(AnimatedProperties.Y),\n      Transition.create(BLUE_KEY).animate(AnimatedProperties.Y),\n      Transition.create(PURPLE_KEY)\n          .animate(AnimatedProperties.Y)\n          .transitionEndHandler(SequenceTransitionLoopComponent.onTransitionEndEvent(c)));\n}\n")),(0,o.mdx)("p",null,"You can also add the transition end handler to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition.allLayout()")," and the same logic applies."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n    return Transition.allLayout().transitionEndHandler(MyComponentSpec.onTransitionEndEvent(c));\n}\n")))}h.isMDXComponent=!0}}]);