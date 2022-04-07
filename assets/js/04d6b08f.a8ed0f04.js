"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7408],{75960:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(87462),o=n(67294),r=n(24544),p=n(7694),s=n(13618),l="0.41.1",m="0.41.2-SNAPSHOT",i="0.9.0",d="0.46.0",u=n(85350);const c=function(e){var a=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,i).replace(/{{site.lithoSnapshotVersion}}/g,m).replace(/{{site.flipperVersion}}/g,d).trim(),c=(0,u.Z)().isDarkTheme?s.Z:p.Z;return o.createElement(r.ZP,(0,t.Z)({},r.lG,{code:n,language:a,theme:c}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,p=e.getTokenProps;return o.createElement("pre",{className:a,style:n},t.map((function(e,a){return o.createElement("div",r({line:e,key:a}),e.map((function(e,a){return o.createElement("span",p({token:e,key:a}))})))})))}))}},89963:(e,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>m,contentTitle:()=>i,metadata:()=>d,toc:()=>u,default:()=>x});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),p=n(55064),s=n(58215),l=(n(75960),["components"]),m={id:"spec-props",title:"Props in Specs"},i=void 0,d={unversionedId:"codegen/passing-data-to-components/spec-props",id:"codegen/passing-data-to-components/spec-props",isDocsHomePage:!1,title:"Props in Specs",description:"Litho uses a unidirectional data flow with immutable inputs. Following the name established by React, inputs to a Component are known as props.",source:"@site/../docs/codegen/passing-data-to-components/props.md",sourceDirName:"codegen/passing-data-to-components",slug:"/codegen/passing-data-to-components/spec-props",permalink:"/docs/codegen/passing-data-to-components/spec-props",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/passing-data-to-components/props.md",tags:[],version:"current",frontMatter:{id:"spec-props",title:"Props in Specs"},sidebar:"mainSidebar",previous:{title:"Mount Specs",permalink:"/docs/codegen/mount-specs"},next:{title:"TreeProps",permalink:"/docs/codegen/passing-data-to-components/treeprops"}},u=[{value:"Props Immutability",id:"props-immutability",children:[],level:2},{value:"How to use Props",id:"how-to-use-props",children:[{value:"Define Props on a Component",id:"define-props-on-a-component",children:[],level:3},{value:"Set Props on a Component",id:"set-props-on-a-component",children:[],level:3}],level:2},{value:"Optional Props and Prop Defaults",id:"optional-props-and-prop-defaults",children:[],level:2},{value:"Android Resources as Props",id:"android-resources-as-props",children:[],level:2},{value:"Variable Arguments in Props",id:"variable-arguments-in-props",children:[],level:2}],c={toc:u};function x(e){var a=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Litho uses a unidirectional data flow with immutable inputs. Following the name established by ",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"React"),", inputs to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Component")," are known as ",(0,r.mdx)("em",{parentName:"p"},"props"),"."),(0,r.mdx)("p",null,"In the Spec API, props for a given ",(0,r.mdx)("inlineCode",{parentName:"p"},"Component")," are the union of all arguments annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop"),". You can access the value of the props in all the methods that declare it as a ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," parameter. The same prop can be defined and accessed in multiple lifecycle methods. The annotation processor will ensure you're using consistent prop types and consistent annotation parameters across all the spec methods."),(0,r.mdx)("p",null,"In the Kotlin API, props are just ",(0,r.mdx)("inlineCode",{parentName:"p"},"val")," properties on a Component and can be accessed in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"render")," function and its hooks."),(0,r.mdx)("h2",{id:"props-immutability"},"Props Immutability"),(0,r.mdx)("p",null,"The props of a Component are read-only. The Component's parent passes down values for the props when it creates the Component and they cannot change throughout the lifecycle of the Component. If the props values must be updated, the parent has to create a new Component and pass down new values for the props."),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Props should be immutable. Due to background layout, props may be accessed on multiple threads. The immutability of props ensures that no thread safety issues can occur during the component's lifecycle."))),(0,r.mdx)("h2",{id:"how-to-use-props"},"How to use Props"),(0,r.mdx)("h3",{id:"define-props-on-a-component"},"Define Props on a Component"),(0,r.mdx)("p",null,"The way props are defined is shown in the following sample:"),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"Props are just ",(0,r.mdx)("inlineCode",{parentName:"p"},"val")," properties of a Component."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt start=start_simple_example end=end_simple_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt",start:"start_simple_example",end:"end_simple_example"},'class HelloComponent(private val name: String) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return Text(text = "Hello $name!")\n  }\n}\n'))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"Props are defined using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class FirstComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop String name) {\n    return Text.create(c).text("Hello " + name + "!").build();\n  }\n}\n')))),(0,r.mdx)("p",null,"The props parameters will hold the value passed down from the Component's parent when the Component was created (or their default values)."),(0,r.mdx)("p",null,"Props are defined and used the same way as in ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutSpec"),"s and ",(0,r.mdx)("inlineCode",{parentName:"p"},"MountSpec"),"s."),(0,r.mdx)("h3",{id:"set-props-on-a-component"},"Set Props on a Component"),(0,r.mdx)("p",null,"The following code shows how to set Props on a Component."),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"You can simply pass the prop by its name in the KComponent."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'KotlinApiComponent(name = "Linda")\n'))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"The annotation processor creates a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Builder")," class for your Component automatically, with setters, for each unique prop defined on the spec.\nYou pass down values for these props by calling the appropriate methods on the generated Component Builder:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'FirstComponent.create(c).name("Linda").build();\n')))),(0,r.mdx)("h2",{id:"optional-props-and-prop-defaults"},"Optional Props and Prop Defaults"),(0,r.mdx)("p",null,"Litho provides a way to mark props as optional and define their default values:"),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"In the Kotlin API, default values are always explicit because optional props are just normal constructor params with ",(0,r.mdx)("a",{parentName:"p",href:"https://kotlinlang.org/docs/functions.html#default-arguments"},"default arguments"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropDefaultKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropDefaultKComponent.kt",start:"start_example",end:"end_example"},'class PropDefaultKComponent(private val name: String = "John Doe") : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Text(text = "Hello $name!")\n  }\n}\n'))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"In the Spec API, you can mark a prop as optional by setting ",(0,r.mdx)("inlineCode",{parentName:"p"},"optional = true")," flag on its ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation, as seen in the example below.\nIt needs to be marked as such in all the methods that declare this prop, otherwise the annotation processor will throw an exception.\nBy default, if an optional prop's value is not provided when the component is created, a default value for its Java type is used (",(0,r.mdx)("inlineCode",{parentName:"p"},"null"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"0"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),")."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/OptionalPropComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/OptionalPropComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class OptionalPropComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop String name, @Prop(optional = true) @Nullable String location) {\n    if (location == null) {\n      return Text.create(c).text("Hello " + name + "!").build();\n    }\n\n    return Text.create(c).text("Hello " + name + " from " + location + "!").build();\n  }\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n      ComponentContext c, @Prop(optional = true) @Nullable String location) {\n    // ...\n  }\n}\n')),(0,r.mdx)("p",null,"Instead of using the Java defaults, you may want to define an explicit default value for an optional prop. To create that default value, declare a ",(0,r.mdx)("inlineCode",{parentName:"p"},"static final")," field with the same name and type as the original prop and mark it with the ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/annotations/PropDefault.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"@PropDefault"))," annotation, as shown in the following example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropDefaultComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropDefaultComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\nclass PropDefaultComponentSpec {\n\n  @PropDefault static final String name = "John Doe"; // default value for name\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop(optional = true) String name) {\n    return Text.create(c).text(name).build();\n  }\n}\n')))),(0,r.mdx)("h2",{id:"android-resources-as-props"},"Android Resources as Props"),(0,r.mdx)("p",null,"When creating layouts, it's common to use values from Android's resource system, such as dimensions, colours, strings, and so on. The Litho Spec API provides convenient ways to set prop values from Android resources using annotations, as shown in the following examples:"),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"Here, ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropWithoutResourceTypeKComponent")," is expected to take ",(0,r.mdx)("inlineCode",{parentName:"p"},"color")," as an integer, ",(0,r.mdx)("inlineCode",{parentName:"p"},"size")," in pixels, and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," string."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithoutResourceTypeKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithoutResourceTypeKComponent.kt",start:"start_example",end:"end_example"},'class PropWithoutResourceTypeKComponent(\n    private val name: CharSequence,\n    private val size: Dimen,\n    @ColorInt private val color: Int\n) : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Text(text = "Hello $name!", textSize = size, textColor = color)\n  }\n}\n')),(0,r.mdx)("p",null,"If you decide to set these props using resource values, it's recommended you do the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentKComponent.kt start=start_prop_without_resource_type_usage end=end_prop_without_resource_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentKComponent.kt",start:"start_prop_without_resource_type_usage",end:"end_prop_without_resource_type_usage"},"val res: Resources = context.getResources()\nreturn PropWithoutResourceTypeKComponent(\n    name = res.getString(R.string.name_string),\n    size = dimenRes(R.dimen.primary_text_size),\n    color = ContextCompat.getColor(context.getAndroidContext(), R.color.primaryColor))\n")),(0,r.mdx)("p",null,"But Litho provides a nicer way to provide prop values via resource ids."),(0,r.mdx)("p",null,"In the Kotlin API, there is no way to generate multiple variants of the same setter for a prop, but you can use helper functions to retrieve the value of a resource by its ID, for example ",(0,r.mdx)("inlineCode",{parentName:"p"},"stringRes()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"dimenRes()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorRes()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorAttr"),", and so on."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentKComponent.kt start=start_prop_with_resource_type_usage end=end_prop_with_resource_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentKComponent.kt",start:"start_prop_with_resource_type_usage",end:"end_prop_with_resource_type_usage"},"return PropWithResourceTypeKComponent(\n    name = stringRes(R.string.name_string),\n    size = dimenRes(R.dimen.primary_text_size),\n    color = colorRes(R.color.primaryColor))\n")),(0,r.mdx)("p",null,"Other supported functions are ",(0,r.mdx)("inlineCode",{parentName:"p"},"drawableRes()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"drawableAttr()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"drawableColor()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"colorAttr()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"intRes()"),". These can be found in the code under ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/litho-core-kotlin/src/main/kotlin/com/facebook/litho/Resources.kt"},(0,r.mdx)("inlineCode",{parentName:"a"},"Resources")))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"In the following example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropWithoutResourceTypeComponentSpec")," is expected to take ",(0,r.mdx)("inlineCode",{parentName:"p"},"color")," as an integer, ",(0,r.mdx)("inlineCode",{parentName:"p"},"size")," in pixels, and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," string."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithoutResourceTypeComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithoutResourceTypeComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\nclass PropWithoutResourceTypeComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop CharSequence name, @Prop int size, @Prop @ColorInt int color) {\n    return Text.create(c).text(name).textSizePx(size).textColor(color).build();\n  }\n}\n")),(0,r.mdx)("p",null,"If you decide to set these props using resource values, it's recommended you do the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentComponentSpec.java start=start_prop_without_resource_type_usage end=end_prop_without_resource_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentComponentSpec.java",start:"start_prop_without_resource_type_usage",end:"end_prop_without_resource_type_usage"},"final Resources res = c.getResources();\n\nreturn PropWithoutResourceTypeComponent.create(c)\n    .name(res.getString(R.string.name_string))\n    .size(res.getDimensionPixelSize(R.dimen.primary_text_size))\n    .color(ContextCompat.getColor(c.getAndroidContext(), R.color.primaryColor))\n    .build();\n")),(0,r.mdx)("p",null,"But Litho provides a nicer way to provide prop values via resource ids. You can add ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," parameter ",(0,r.mdx)("inlineCode",{parentName:"p"},"resType")," which then creates multiple builder methods on the component for the single prop."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithResourceTypeComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropWithResourceTypeComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\nclass PropWithResourceTypeComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop(resType = ResType.STRING) CharSequence name,\n      @Prop(resType = ResType.DIMEN_SIZE) int size,\n      @Prop(resType = ResType.COLOR) int color) {\n    return Text.create(c).text(name).textSizePx(size).textColor(color).build();\n  }\n}\n")),(0,r.mdx)("p",null,"With these params applied, for each resource prop ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropWithResourceTypeComponentSpec"),"'s builder will have not only the main setter (like ",(0,r.mdx)("inlineCode",{parentName:"p"},"name()"),"), but also its variants for resource ids with ",(0,r.mdx)("em",{parentName:"p"},"Res"),", ",(0,r.mdx)("em",{parentName:"p"},"Attr"),", ",(0,r.mdx)("em",{parentName:"p"},"Dip"),", ",(0,r.mdx)("em",{parentName:"p"},"Sp")," or ",(0,r.mdx)("em",{parentName:"p"},"Px")," suffixes, depending on prop's resource type (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"nameRes()")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"sizePx()"),")."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentComponentSpec.java start=start_prop_with_resource_type_usage end=end_prop_with_resource_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/PropResourceTypeParentComponentSpec.java",start:"start_prop_with_resource_type_usage",end:"end_prop_with_resource_type_usage"},"\nreturn PropWithResourceTypeComponent.create(c)\n    .nameRes(R.string.name_string)\n    .sizePx(10)\n    .sizeDip(10)\n    .colorAttr(android.R.attr.textColorTertiary)\n    .build();\n")),(0,r.mdx)("p",null,"Other supported resource types are ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.STRING_ARRAY"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.INT"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.INT_ARRAY"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.BOOL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.COLOR"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.DIMEN_OFFSET"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.FLOAT"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ResType.DRAWABLE"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"PropDefault")," also supports values from Resources by setting a ",(0,r.mdx)("inlineCode",{parentName:"p"},"resType")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"resId"),"."),(0,r.mdx)("p",null,"The following example shows how to define a ",(0,r.mdx)("inlineCode",{parentName:"p"},"PropDefault")," with a resource value:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@PropDefault(resType = ResType.DIMEN_SIZE, resId = R.dimen.vertical_spacing) static float spacingVertical;\n")))),(0,r.mdx)("h2",{id:"variable-arguments-in-props"},"Variable Arguments in Props"),(0,r.mdx)("p",null,"Sometimes, passing a list of items can be a bit painful as it requires the Developer to create a list structure, add all the items to it, then pass the list to the Component:"),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"In the Kotlin API, you can use the ",(0,r.mdx)("a",{parentName:"p",href:"https://kotlinlang.org/docs/functions.html#variable-number-of-arguments-varargs"},"variable number of arguments (varargs) modifier")," provided by the language itself to achieve this behaviour."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropKComponent.kt",start:"start_example",end:"end_example"},"class VariableArgumentPropKComponent(private vararg val names: String) : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Column() {\n      for (name in names) {\n        child(Text(text = name, textSize = 16.sp))\n      }\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"It can then be used as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentKComponent.kt start=start_var_arg_usage end=end_var_arg_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentKComponent.kt",start:"start_var_arg_usage",end:"end_var_arg_usage"},'return VariableArgumentPropKComponent("One", "Two", "Three", "Four")\n'))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"In the Spec API, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"varArg")," parameter in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation aims to make this a little easier, enabling you to set the Prop using multiple methods. You can set a list of strings by using a method named for the prop: ",(0,r.mdx)("inlineCode",{parentName:"p"},"names(...)"),".  Alternatively, you can set one or many individual strings using a method named for a value of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"varArg")," parameter in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation: ",(0,r.mdx)("inlineCode",{parentName:"p"},"name(...)"),", as shown in the following example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class VariableArgumentPropComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop(varArg = "name") List<String> names) {\n\n    final Column.Builder builder = Column.create(c);\n\n    for (String name : names) {\n      builder.child(Text.create(c).text(name).textSizeSp(16));\n    }\n\n    return builder.build();\n  }\n}\n')),(0,r.mdx)("p",null,"It can then be used as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentComponentSpec.java start=start_var_arg_usage end=end_var_arg_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentComponentSpec.java",start:"start_var_arg_usage",end:"end_var_arg_usage"},'return VariableArgumentPropComponent.create(c)\n    .name("One")\n    .name("Two")\n    .name("Three")\n    .names(Arrays.asList("Four", "Five", "Six"))\n    .build();\n')))),(0,r.mdx)("p",null,"Variable Arguments also work with Android resources as props:"),(0,r.mdx)(p.default,{groupId:"props_tab_group",defaultValue:"kotlin_props_tab",values:[{label:"Kotlin API",value:"kotlin_props_tab"},{label:"Spec API",value:"java_props_tab"}],mdxType:"Tabs"},(0,r.mdx)(s.default,{value:"kotlin_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"  In Kotlin, variable arguments can be used with Android resources by using the helper functions to resolve the value by resource ID. The following example shows how to provide multiple strings as props, mixing ",(0,r.mdx)("inlineCode",{parentName:"p"},"String")," variables and Android string resources:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentKComponent.kt start=start_var_arg_res_type_usage end=end_var_arg_res_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentKComponent.kt",start:"start_var_arg_res_type_usage",end:"end_var_arg_res_type_usage"},'return VariableArgumentPropKComponent(\n    "One", stringRes(R.string.app_name), stringRes(R.string.name_string))\n'))),(0,r.mdx)(s.default,{value:"java_props_tab",mdxType:"TabItem"},(0,r.mdx)("p",null,"  Given the following component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentWithResourceTypeSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentWithResourceTypeSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class VariableArgumentWithResourceTypeSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop(varArg = "name", resType = ResType.STRING) List<String> names) {\n\n    final Column.Builder builder = Column.create(c);\n\n    for (String name : names) {\n      builder.child(Text.create(c).text(name).textSizeSp(16));\n    }\n\n    return builder.build();\n  }\n}\n')),(0,r.mdx)("p",null,"  You can add multiple strings mixing ",(0,r.mdx)("inlineCode",{parentName:"p"},"String")," variables with Android string resources:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentComponentSpec.java start=start_var_arg_res_type_usage end=end_var_arg_res_type_usage",file:"sample/src/main/java/com/facebook/samples/litho/documentation/props/VariableArgumentPropParentComponentSpec.java",start:"start_var_arg_res_type_usage",end:"end_var_arg_res_type_usage"},'return VariableArgumentWithResourceType.create(c)\n    .name("One")\n    .nameRes(R.string.app_name)\n    .nameRes(R.string.name_string)\n    .build();\n')))))}x.isMDXComponent=!0}}]);