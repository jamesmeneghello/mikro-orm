(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=p(a),O=n,s=o["".concat(c,".").concat(O)]||o[O]||j[O]||b;return a?r.a.createElement(s,m(m({ref:t},i),{},{components:a})):r.a.createElement(s,m({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},849:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"core.namingstrategy",title:"Interface: NamingStrategy",sidebar_label:"NamingStrategy",custom_edit_url:null,hide_title:!0},m={unversionedId:"api/interfaces/core.namingstrategy",id:"api/interfaces/core.namingstrategy",isDocsHomePage:!1,title:"Interface: NamingStrategy",description:"Interface: NamingStrategy",source:"@site/docs/api/interfaces/core.namingstrategy.md",slug:"/api/interfaces/core.namingstrategy",permalink:"/docs/next/api/interfaces/core.namingstrategy",editUrl:null,version:"current",sidebar_label:"NamingStrategy",sidebar:"API",previous:{title:"Interface: MikroORMOptions<D>",permalink:"/docs/next/api/interfaces/core.mikroormoptions"},next:{title:"Interface: Node",permalink:"/docs/next/api/interfaces/core.node"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],i={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-namingstrategy"},"Interface: NamingStrategy"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".NamingStrategy"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"NamingStrategy"))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/core.abstractnamingstrategy"}),Object(b.b)("em",{parentName:"a"},"AbstractNamingStrategy")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"classtomigrationname"},"classToMigrationName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"classToMigrationName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"timestamp"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a migration name. This name should allow ordering."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L16"}),"packages/core/src/naming-strategy/NamingStrategy.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"classtotablename"},"classToTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"classToTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a table name for an entity class"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L11"}),"packages/core/src/naming-strategy/NamingStrategy.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getclassname"},"getClassName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getClassName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"file"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"separator?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a name of the class based on its file name"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"separator?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L6"}),"packages/core/src/naming-strategy/NamingStrategy.ts:6")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumnname"},"joinColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a join column name for a property"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L31"}),"packages/core/src/naming-strategy/NamingStrategy.ts:31")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinKeyColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"composite?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return the foreign key column name for the given parameters"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"referencedColumnName?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"composite?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L41"}),"packages/core/src/naming-strategy/NamingStrategy.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"jointablename"},"joinTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"joinTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sourceEntity"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"targetEntity"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a join table name"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sourceEntity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"targetEntity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L36"}),"packages/core/src/naming-strategy/NamingStrategy.ts:36")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"propertyToColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return a column name for a property"),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L21"}),"packages/core/src/naming-strategy/NamingStrategy.ts:21")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"referenceColumnName"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Return the default reference column name"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/naming-strategy/NamingStrategy.ts#L26"}),"packages/core/src/naming-strategy/NamingStrategy.ts:26")))}p.isMDXComponent=!0}}]);