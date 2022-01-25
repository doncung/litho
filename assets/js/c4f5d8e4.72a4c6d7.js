"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{41158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(87462),r=a(67294),o=a(86010),i=a(16823),l=a(36742),s=a(52263),m=a(44996);const c="heroBanner_Nujh",u="heroInner_3ab7",d="heroImage_2hQP",h="heroTitle_1Xlf",f="buttons_3wo7",g="button_2Ac-",p="featureContent_2bJw",y="featureText_2M_Q",E="darkFeature_74jo",v="lightFeature_1z38",b="featureBody_Q8Yx",w="featureTitle_3Dxg",U="featureImage_19Pb";var k=[{title:r.createElement(r.Fragment,null,"Declarative"),imageUrl:"images/home-code.png",description:r.createElement(r.Fragment,null,"Litho uses a declarative API to define UI components. You simply describe the layout for your UI based on a set of immutable inputs and the framework takes care of the rest. With code generation, Litho can perform optimisations for your UI under the hood, while keeping your code simple and easy to maintain."),dark:!1},{title:r.createElement(r.Fragment,null,"Asynchronous layout"),imageUrl:"images/home-async.png",description:r.createElement(r.Fragment,null,"Litho can measure and layout your UI ahead of time without blocking the UI thread. By decoupling its layout system from the traditional Android View system, Litho can drop the UI thread constraint imposed by Android."),dark:!0},{title:r.createElement(r.Fragment,null,"Flatter view hierarchies"),imageUrl:"images/home-flat-not-flat.png",description:r.createElement(r.Fragment,null,"Litho uses ",r.createElement("a",{href:"https://yogalayout.com/docs"},"Yoga")," for layout and automatically reduces the number of ViewGroups that your UI contains. This, in addition to Litho's text optimizations, allows for much smaller view hierarchies and improves both memory and scroll performance."),dark:!1},{title:r.createElement(r.Fragment,null,"Fine-grained recycling"),imageUrl:"images/home-incremental-mount.png",description:r.createElement(r.Fragment,null,"With Litho, each UI item such as text, image, or video is recycled individually. As soon as an item goes off screen, it can be reused anywhere in the UI and pieced together with other items to create new UI elements. Such recycling reduces the need of having multiple view types and improves memory usage and scroll performance."),dark:!0}];function I(e){var t=e.imageUrl,a=e.title,n=e.description,i=e.dark,l=(0,m.default)(t);return r.createElement("section",{className:(0,o.default)(i&&E,!i&&v)},r.createElement("div",{className:p},r.createElement("img",{className:U,src:l,alt:a}),r.createElement("div",{className:y},r.createElement("h3",{className:w},a),r.createElement("p",{className:b},n))))}const N=function(){var e=(0,s.default)().siteConfig,t=void 0===e?{}:e;return r.createElement(i.Z,{description:"Home page of Litho: A declarative UI framework for Android"},r.createElement("div",{className:c},r.createElement("div",{className:u},r.createElement("img",{className:d,src:(0,m.default)("images/logo.svg")}),r.createElement("div",{className:h},"Litho: "+t.tagline),r.createElement("div",{className:f},r.createElement(l.default,{className:(0,o.default)("button button--outline",g),to:(0,m.default)("docs/tutorial/project-setup")},"GET STARTED"),r.createElement(l.default,{className:(0,o.default)("button button--outline",g),to:(0,m.default)("docs/intro")},"LEARN MORE"),r.createElement(l.default,{className:(0,o.default)("button button--outline",g),to:(0,m.default)("docs/tutorial/overview")},"TUTORIAL")))),r.createElement("main",null,k&&k.length>0&&k.map((function(e,t){return r.createElement(I,(0,n.Z)({key:t},e))}))))}}}]);