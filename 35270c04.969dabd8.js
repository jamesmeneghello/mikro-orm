(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(6),c=(a(0),a(807)),b={id:"requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext"},i={unversionedId:"api/classes/requestcontext",id:"version-4.2/api/classes/requestcontext",isDocsHomePage:!1,title:"Class: RequestContext",description:"For node 14 and above it is suggested to use AsyncLocalStorage instead,",source:"@site/versioned_docs/version-4.2/api/classes/requestcontext.md",slug:"/api/classes/requestcontext",permalink:"/docs/api/classes/requestcontext",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/requestcontext.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604964561,sidebar_label:"RequestContext",sidebar:"version-4.2/API",previous:{title:"Class: ReflectMetadataProvider",permalink:"/docs/api/classes/reflectmetadataprovider"},next:{title:"Class: ScalarCriteriaNode",permalink:"/docs/api/classes/scalarcriterianode"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"em",id:"em",children:[]},{value:"id",id:"id",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createAsync",id:"createasync",children:[]},{value:"currentRequestContext",id:"currentrequestcontext",children:[]},{value:"getEntityManager",id:"getentitymanager",children:[]}]}],o={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"For node 14 and above it is suggested to use ",Object(c.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," instead,"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/async-local-storage/"}),"https://mikro-orm.io/docs/async-local-storage/")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"RequestContext"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new RequestContext"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"),"): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/requestcontext"}),"RequestContext")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L13"}),"packages/core/src/utils/RequestContext.ts:13"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/requestcontext"}),"RequestContext")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"em"},"em"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L15"}),"packages/core/src/utils/RequestContext.ts:15"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"id"},"id"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"id"),": number = this.em.id"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L13"}),"packages/core/src/utils/RequestContext.ts:13"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"),", ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...args: any[]) => void): void"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L20"}),"packages/core/src/utils/RequestContext.ts:20"))),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...args: any[]) => void")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createasync"},"createAsync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"createAsync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"),", ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...args: any[]) => Promise","<","void>): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L31"}),"packages/core/src/utils/RequestContext.ts:31"))),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",Object(c.b)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...args: any[]) => Promise","<","void>")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"currentrequestcontext"},"currentRequestContext"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"currentRequestContext"),"(): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/requestcontext"}),"RequestContext")," ","|"," undefined"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L43"}),"packages/core/src/utils/RequestContext.ts:43"))),Object(c.b)("p",null,"Returns current RequestContext (if available)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/requestcontext"}),"RequestContext")," ","|"," undefined"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getentitymanager"},"getEntityManager"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getEntityManager"),"(): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/RequestContext.ts#L51"}),"packages/core/src/utils/RequestContext.ts:51"))),Object(c.b)("p",null,"Returns current EntityManager (if available)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")," ","|"," undefined"))}l.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,d=p["".concat(b,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);