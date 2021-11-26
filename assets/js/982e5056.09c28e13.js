"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[915],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=u(t.components);return o.createElement(e,a({},t,{components:n}))}},u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>i});var o=n(52263),r=n(13919);function a(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(82924);const a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(24544),i=n(7694),s=n(13618),l="0.41.1",c="0.41.2-SNAPSHOT",p="0.9.0",u="0.46.0",d=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,u).trim(),m=(0,d.Z)().isDarkTheme?s.Z:i.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},55929:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>h});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(44996),s=n(75960),l=["components"],c={id:"event-handler-testing",title:"Event Handler Testing"},p=void 0,u={unversionedId:"testing/event-handler-testing",id:"testing/event-handler-testing",isDocsHomePage:!1,title:"Event Handler Testing",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/testing/event-handler-testing.mdx",sourceDirName:"testing",slug:"/testing/event-handler-testing",permalink:"/docs/testing/event-handler-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/event-handler-testing.mdx",tags:[],version:"current",frontMatter:{id:"event-handler-testing",title:"Event Handler Testing"},sidebar:"mainSidebar",previous:{title:"Matching @InjectProp",permalink:"/docs/testing/injectprop-matching"},next:{title:"Testing Sections",permalink:"/docs/testing/sections-testing"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"What to test for",id:"what-to-test-for",children:[],level:2},{value:"Testing handler presence",id:"testing-handler-presence",children:[],level:2},{value:"Next",id:"next",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),(0,a.mdx)("p",null,"This document provides a quick example of how to write tests for your event\nhandlers. You should be familiar with ",(0,a.mdx)("a",{parentName:"p",href:"subcomponent-testing"},"TestSpecs"),"\nbefore diving into this topic."),(0,a.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.mdx)("p",null,"The package is shipped as a separate module. It is available via maven as\n",(0,a.mdx)("inlineCode",{parentName:"p"},"com.facebook.litho:litho-testing"),". To include it in your gradle build, add this\nline to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,a.mdx)(s.Z,{language:"groovy",code:"\ntestImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n",mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"what-to-test-for"},"What to test for"),(0,a.mdx)("p",null,"We are going to work with this spec in our example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class LearningStateComponentSpec {\n\n  @PropDefault static final boolean canClick = true;\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n    ComponentContext c,\n    StateValue<Integer> count) {\n\n    count.set(0);\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n    ComponentContext c,\n    @Prop(optional = true) boolean canClick,\n    @State Integer count) {\n\n    return Text.create(c)\n        .text("Clicked " + count + " times.")\n        .textSizeDip(50)\n        .clickHandler(canClick ? LearningStateComponent.onClick(c) : null)\n        .backgroundRes(android.R.color.holo_blue_light)\n        .alignSelf(STRETCH)\n        .paddingDip(BOTTOM, 20)\n        .paddingDip(TOP, 40)\n        .build();\n  }\n\n  @OnUpdateState\n  static void incrementClickCount(StateValue<Integer> count) {\n    count.set(count.get() + 1);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c) {\n    LearningStateComponent.incrementClickCount(c);\n  }\n}\n')),(0,a.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"300px"},(0,a.mdx)("source",{type:"video/mp4",src:(0,i.default)("/videos/state_taps.mp4")})),(0,a.mdx)("p",null,"When testing event handlers, it is important to remember what you actually want\nto validate in your unit test. You may be getting this inkling to ensure that a\nclick event you issue triggers the callback you pass in as your prop. ",(0,a.mdx)("em",{parentName:"p"},"When you\ndo this, you are actually testing the framework.")," This is not what you want to\nspend your time on. While writing high-level end-to-end tests ensuring that your\ntouch events have the right effects, this is not what you should concern\nyourself with for unit tests."),(0,a.mdx)("h2",{id:"testing-handler-presence"},"Testing handler presence"),(0,a.mdx)("p",null,"Instead, let's focus on the actual logic that we have in our spec. Whether or\nnot we have a click handler depends on the prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"canClick"),". It is very common\nfor handlers to be set conditionally based on a prop. In our test, we are going\nto limit ourselves to checking if a handler is set or not. For that we can use\nthe TestSpec matchers we have learned about before."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(LithoTestRunner.class)\npublic class LearningStateComponentSpecTest {\n  @Rule public ComponentsRule mComponentsRule = new ComponentsRule();\n\n  @Test\n  public void testComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(true)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>notNullValue(null)).build())\n    );\n  }\n\n  @Test\n  public void testNoComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(false)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>nullValue(null)).build())\n    );\n  }\n}\n")),(0,a.mdx)("p",null,"As you can see here, we can match against a click handler just like any other\nprop set on a sub-component. Matching against a specific instance of an\n",(0,a.mdx)("inlineCode",{parentName:"p"},"EventHandler")," is currently not supported."),(0,a.mdx)("h2",{id:"next"},"Next"),(0,a.mdx)("p",null,"Either head back to the ",(0,a.mdx)("a",{parentName:"p",href:"testing-overview"},"testing overview")," or\ncontinue with the next section, ",(0,a.mdx)("a",{parentName:"p",href:"espresso-testing"},"Espresso"),"."))}h.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>i});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),i={Prism:o.default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?l({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,m=t[i],h=n[i][a];if("string"==typeof h?(m=i>0?m:["plain"],d=h):(m=u(m,h.type),h.alias&&(m=u(m,h.alias)),d=h.content),"string"==typeof d){var g=d.split(c),y=g.length;s.push({types:m,content:g[0]});for(var v=1;v<y;v++)p(s),l.push(s=[]),s.push({types:m,content:g[v]})}else i++,t.push(m),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return p(s),l}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);