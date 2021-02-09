(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=p(a),O=n,j=l["".concat(c,".").concat(O)]||l[O]||m[O]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},333:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext"},i={unversionedId:"api/classes/requestcontext",id:"version-4.3/api/classes/requestcontext",isDocsHomePage:!1,title:"Class: RequestContext",description:"For node 14 and above it is suggested to use AsyncLocalStorage instead,",source:"@site/versioned_docs/version-4.3/api/classes/requestcontext.md",slug:"/api/classes/requestcontext",permalink:"/docs/4.3/api/classes/requestcontext",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/requestcontext.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612881670,sidebar_label:"RequestContext",sidebar:"version-4.3/API",previous:{title:"Class: ReflectMetadataProvider",permalink:"/docs/4.3/api/classes/reflectmetadataprovider"},next:{title:"Class: ScalarCriteriaNode",permalink:"/docs/4.3/api/classes/scalarcriterianode"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"map",id:"map",children:[]},{value:"counter",id:"counter",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createAsync",id:"createasync",children:[]},{value:"createDomain",id:"createdomain",children:[]},{value:"currentRequestContext",id:"currentrequestcontext",children:[]},{value:"getEntityManager",id:"getentitymanager",children:[]}]}],o={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"For node 14 and above it is suggested to use ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," instead,"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/async-local-storage/"}),"https://mikro-orm.io/docs/async-local-storage/")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"RequestContext"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new RequestContext"),"(",Object(b.b)("inlineCode",{parentName:"p"},"map"),": Map","<","string, ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),">): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/requestcontext"}),"RequestContext")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L14"}),"packages/core/src/utils/RequestContext.ts:14"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"map")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Map","<","string, ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/requestcontext"}),"RequestContext")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"id"},"id"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"id"),": number = RequestContext.counter++"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L14"}),"packages/core/src/utils/RequestContext.ts:14"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"map"},"map"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"map"),": Map","<","string, ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L16"}),"packages/core/src/utils/RequestContext.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"counter"},"counter"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"counter"),": number = 1"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L13"}),"packages/core/src/utils/RequestContext.ts:13"))),Object(b.b)("h2",{id:"accessors"},"Accessors"),Object(b.b)("h3",{id:"em"},"em"),Object(b.b)("p",null,"\u2022 get ",Object(b.b)("strong",{parentName:"p"},"em"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L21"}),"packages/core/src/utils/RequestContext.ts:21"))),Object(b.b)("p",null,"Returns default EntityManager."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[], ",Object(b.b)("inlineCode",{parentName:"p"},"next"),": (...args: any[]) => void): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L28"}),"packages/core/src/utils/RequestContext.ts:28"))),Object(b.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"next")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...args: any[]) => void")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createasync"},"createAsync"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createAsync"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[], ",Object(b.b)("inlineCode",{parentName:"p"},"next"),": (...args: any[]) => Promise","<","void>): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L37"}),"packages/core/src/utils/RequestContext.ts:37"))),Object(b.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",Object(b.b)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"next")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...args: any[]) => Promise","<","void>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createdomain"},"createDomain"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"createDomain"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#ormdomain"}),"ORMDomain")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L60"}),"packages/core/src/utils/RequestContext.ts:60"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#ormdomain"}),"ORMDomain")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"currentrequestcontext"},"currentRequestContext"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"currentRequestContext"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/requestcontext"}),"RequestContext")," ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L47"}),"packages/core/src/utils/RequestContext.ts:47"))),Object(b.b)("p",null,"Returns current RequestContext (if available)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/requestcontext"}),"RequestContext")," ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentitymanager"},"getEntityManager"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getEntityManager"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name?"),": string): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/RequestContext.ts#L55"}),"packages/core/src/utils/RequestContext.ts:55"))),Object(b.b)("p",null,"Returns current EntityManager (if available)."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"default"')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"))}p.isMDXComponent=!0}}]);