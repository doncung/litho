"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4874],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){return function(t){var n=s(t.components);return o.createElement(e,r({},t,{components:n}))}},s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},33120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=n(44996),l=["components"],d={id:"yoga-playground",title:"Yoga Playground"},u=void 0,c={unversionedId:"mainconcepts/yoga-playground",id:"mainconcepts/yoga-playground",title:"Yoga Playground",description:"You can use the Yoga Playground to try different layout configurations and generate corresponding Litho code, as shown in the following screenshot.",source:"@site/../docs/mainconcepts/yoga-playground.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/yoga-playground",permalink:"/docs/mainconcepts/yoga-playground",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/yoga-playground.mdx",tags:[],version:"current",frontMatter:{id:"yoga-playground",title:"Yoga Playground"},sidebar:"mainSidebar",previous:{title:"Layout System with Flexbox",permalink:"/docs/mainconcepts/flexbox-yoga"},next:{title:"Flexbox Troubleshooting",permalink:"/docs/mainconcepts/troubleshooting"}},s={},m=[{value:"Android Views vs. Litho with Yoga",id:"android-views-vs-litho-with-yoga",level:2},{value:"Vertically stacked items",id:"vertically-stacked-items",level:3},{value:"Two items equally stretched horizontally",id:"two-items-equally-stretched-horizontally",level:3},{value:"Absolutely positioned items",id:"absolutely-positioned-items",level:3}],p={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.mdx)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.com/playground"},"Yoga Playground")," to try different layout configurations and generate corresponding Litho code, as shown in the following screenshot."),(0,r.mdx)("img",{src:(0,i.default)("/images/yoga-playground.png"),alt:"Yoga Playground",className:"white-background"}),(0,r.mdx)("h2",{id:"android-views-vs-litho-with-yoga"},"Android Views vs. Litho with Yoga"),(0,r.mdx)("p",null,"This section lists typical layout configurations in Android and how they translate to Litho with Yoga."),(0,r.mdx)("h3",{id:"vertically-stacked-items"},"Vertically stacked items"),(0,r.mdx)("p",null,"The following table shows vertically stacked items for Android Views and Litho with Yoga."),(0,r.mdx)("table",null,(0,r.mdx)("tr",null,(0,r.mdx)("th",null,"Android Views"),(0,r.mdx)("th",null,"Litho with Yoga")),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    <TextView\n        android:id="@+id/text1"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 1" />\n    <TextView\n        android:id="@+id/text2"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 2" />\n</LinearLayout>\n'))),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'Column {\n  child(Text(text = "Text 1"))\n  child(Text(text = "Text 2"))\n}\n'))))),(0,r.mdx)("h3",{id:"two-items-equally-stretched-horizontally"},"Two items equally stretched horizontally"),(0,r.mdx)("p",null,"To achieve an effect similar to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"LinearLayout")," with weights, Flexbox provides a concept called ",(0,r.mdx)("inlineCode",{parentName:"p"},"flexGrow(<weight>)"),", as featured in the following table."),(0,r.mdx)("table",null,(0,r.mdx)("tr",null,(0,r.mdx)("th",null,"Android Views"),(0,r.mdx)("th",null,"Litho with Yoga")),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="horizontal">\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/red"\n        android:layout_weight="1"/>\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/blue"\n        android:layout_weight="1"/>\n</LinearLayout>\n'))),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"Row {\n  child(Image(style = Style.flex(grow = 1f), drawable = ColorDrawable(Color.RED)))\n  child(Image(style = Style.flex(grow = 1f), drawable = ColorDrawable(Color.BLUE)))\n}\n"))))),(0,r.mdx)("h3",{id:"absolutely-positioned-items"},"Absolutely positioned items"),(0,r.mdx)("p",null,"If you'd like to overlay one view on top of the other, similar to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"FrameLayout"),", Flexbox can achieve that with ",(0,r.mdx)("inlineCode",{parentName:"p"},"positionType(ABSOLUTE)"),", as featured in the following table."),(0,r.mdx)("table",null,(0,r.mdx)("tr",null,(0,r.mdx)("th",null,"Android Views"),(0,r.mdx)("th",null,"Litho with Yoga")),(0,r.mdx)("tr",null,(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<FrameLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n    <ImageView\n        android:layout_width="100dp"\n        android:layout_height="100dp"\n        android:src="@drawable/some_big_image"/>\n    <TextView\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Overlaid text"/>\n</FrameLayout>\n'))),(0,r.mdx)("td",null,(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'Column {\n  child(Image(\n    style = Style.width(100.dp).height(100.dp),\n    drawable = drawableRes(R.drawable.some_big_image)))\n  child(Text(\n    style = Style.positionType(YogaPositionType.ABSOLUTE),\n    text = "Overlaid text"))\n}\n'))))))}y.isMDXComponent=!0}}]);