(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{161:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(o),u=n,m=h["".concat(r,".").concat(u)]||h[u]||d[u]||i;return o?a.a.createElement(m,l(l({ref:t},p),{},{components:o})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},74:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return s}));var n=o(2),a=o(6),i=(o(0),o(161)),r={id:"tooltips",title:"Tooltips"},l={unversionedId:"tooltips",id:"tooltips",isDocsHomePage:!1,title:"Tooltips",description:"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy.",source:"@site/../docs/tooltips.md",slug:"/tooltips",permalink:"/docs/tooltips",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tooltips.md",version:"current"},c=[],p={rightToc:c};function s(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy."),Object(i.b)("p",null,"If you want to show an Android ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/widget/PopupWindow"}),"PopupWindow")," anchored on a component, you need to have access to the view wrapping that component to use it as an anchor. However, in Litho, most components won't be wrapped in views and even if they are you don't have access to them."),Object(i.b)("p",null,"Litho provides a utility class called ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/LithoTooltipController.html"}),"LithoTooltipController")," as a Tooltip API that allows you to show a tooltip anchored on a Component without dealing with view search."),Object(i.b)("p",null,"Here's how you'd use the Tooltip API to show a tooltip on a component 1. when that component becomes visible and 2. on a click event:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\npublic class TooltipTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle anchorHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Click to Trigger show tooltip")\n                .clickHandler(TooltipTriggerExampleComponent.onClick(c, anchorHandle)))\n        .child(Text.create(c).text("Tooltip anchor").handle(anchorHandle))\n        .visibleHandler(TooltipTriggerExampleComponent.onVisible(c, anchorHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c, @Param Handle anchorHandle) {\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  @OnEvent(VisibleEvent.class)\n  static void onVisible(ComponentContext c, @Param Handle anchorHandle) {\n    // Show a tooltip when the component becomes visible.\n    // NB: Incremental mount must be enabled for the component to receive visibility callbacks.\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  static void showToolTip(ComponentContext c, Handle anchorHandle) {\n    final LithoTooltip tooltip = /* Provide an implementation of LithoTooltip or PopupWindow */;\n    LithoTooltipController.showTooltipOnHandle(c, tooltip, anchorHandle);\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/LithoTooltip.html"}),"LithoTooltip")," is an interface that requires you to implement a method for showing a tooltip given a host view and the bounds of the anchor component relative to the host view. This enables you to use a custom tooltip implementation."),Object(i.b)("p",null,"The interface forces the implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"showLithoTooltip"),", a method that shows a tooltip given the bounds of the anchor Component inside a hosting view."),Object(i.b)("p",null,"For finding the component that is used as anchor, you need to specify a handle on the anchor component."),Object(i.b)("p",null,"For convenience, you can call ",Object(i.b)("inlineCode",{parentName:"p"},"LithoTooltipController.showTooltip")," on a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/widget/PopupWindow"}),"PopupWindow")," directly without having to create a ",Object(i.b)("inlineCode",{parentName:"p"},"LithoTooltip")," implementation yourself. By default it shows the tooltip as a dropdown with the specified offsets. The example above would change to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@OnEvent(VisibleEvent.class)\nstatic void onVisible(\n    ComponentContext c,\n    @Prop PopupWindow tooltip,\n    @State Handle anchorHandle) {\n  LithoTooltipController.showTooltipOnHandle(\n      c,\n      tooltip,\n      anchorHandle);\n}\n")),Object(i.b)("p",null,"At the moment the API only supports View tooltips. We might add Component tooltip support in the future if there's a need for it - contact us if that's the case for you."))}s.isMDXComponent=!0}}]);