(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),s=n,j=m["".concat(c,".").concat(s)]||m[s]||O[s]||b;return a?r.a.createElement(j,p(p({ref:t},l),{},{components:a})):r.a.createElement(j,p({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"cli.clihelper",title:"Class: CLIHelper",sidebar_label:"CLIHelper",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/cli.clihelper",id:"api/classes/cli.clihelper",isDocsHomePage:!1,title:"Class: CLIHelper",description:"Class: CLIHelper",source:"@site/docs/api/classes/cli.clihelper.md",slug:"/api/classes/cli.clihelper",permalink:"/docs/next/api/classes/cli.clihelper",editUrl:null,version:"current",sidebar_label:"CLIHelper",sidebar:"API",previous:{title:"Class: CLIConfigurator",permalink:"/docs/next/api/classes/cli.cliconfigurator"},next:{title:"Class: AbstractNamingStrategy",permalink:"/docs/next/api/classes/core.abstractnamingstrategy"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dump",id:"dump",children:[]},{value:"dumpDependencies",id:"dumpdependencies",children:[]},{value:"dumpTable",id:"dumptable",children:[]},{value:"getConfigPaths",id:"getconfigpaths",children:[]},{value:"getConfiguration",id:"getconfiguration",children:[]},{value:"getDriverDependencies",id:"getdriverdependencies",children:[]},{value:"getModuleVersion",id:"getmoduleversion",children:[]},{value:"getNodeVersion",id:"getnodeversion",children:[]},{value:"getORM",id:"getorm",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-clihelper"},"Class: CLIHelper"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/cli"}),"cli"),".CLIHelper"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CLIHelper"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new CLIHelper"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.clihelper"}),Object(b.b)("em",{parentName:"a"},"CLIHelper"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/cli.clihelper"}),Object(b.b)("em",{parentName:"a"},"CLIHelper"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"dump"},"dump"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dump"),"(",Object(b.b)("inlineCode",{parentName:"p"},"text"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L42"}),"packages/cli/src/CLIHelper.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dumpdependencies"},"dumpDependencies"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dumpDependencies"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L55"}),"packages/cli/src/CLIHelper.ts:55")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dumptable"},"dumpTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dumpTable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"columns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"empty"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"rows"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[][]","  }): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ ",Object(b.b)("inlineCode",{parentName:"td"},"columns"),": ",Object(b.b)("em",{parentName:"td"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"td"},"empty"),": ",Object(b.b)("em",{parentName:"td"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"rows"),": ",Object(b.b)("em",{parentName:"td"},"string"),"[][]","  }")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L83"}),"packages/cli/src/CLIHelper.ts:83")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconfigpaths"},"getConfigPaths"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfigPaths"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L51"}),"packages/cli/src/CLIHelper.ts:51")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconfiguration"},"getConfiguration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfiguration"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L9"}),"packages/cli/src/CLIHelper.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getdriverdependencies"},"getDriverDependencies"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getDriverDependencies"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L33"}),"packages/cli/src/CLIHelper.ts:33")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmoduleversion"},"getModuleVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getModuleVersion"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L74"}),"packages/cli/src/CLIHelper.ts:74")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getnodeversion"},"getNodeVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getNodeVersion"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L29"}),"packages/cli/src/CLIHelper.ts:29")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorm"},"getORM"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getORM"),"(",Object(b.b)("inlineCode",{parentName:"p"},"warnWhenNoEntities?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"opts?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.mikroorm"}),Object(b.b)("em",{parentName:"a"},"MikroORM")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"warnWhenNoEntities?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"opts")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.mikroorm"}),Object(b.b)("em",{parentName:"a"},"MikroORM")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/3447039/packages/cli/src/CLIHelper.ts#L13"}),"packages/cli/src/CLIHelper.ts:13")))}o.isMDXComponent=!0}}]);