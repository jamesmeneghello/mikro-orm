(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),d=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=d(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),O=d(a),j=n,s=O["".concat(l,".").concat(j)]||O[j]||i[j]||r;return a?b.a.createElement(s,c(c({ref:t},m),{},{components:a})):b.a.createElement(s,c({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var m=2;m<r;m++)l[m]=a[m];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},584:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(8),r=(a(0),a(1048)),l={id:"knex.knex.select",title:"Interface: Select<TRecord, TResult>",sidebar_label:"Select",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.select",id:"version-4.4/api/interfaces/knex.knex.select",isDocsHomePage:!1,title:"Interface: Select<TRecord, TResult>",description:"Interface: Select",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.select.md",slug:"/api/interfaces/knex.knex.select",permalink:"/docs/api/interfaces/knex.knex.select",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.select.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613169218,sidebar_label:"Select",sidebar:"version-4.4/API",previous:{title:"Interface: SeederConfig<V>",permalink:"/docs/api/interfaces/knex.knex.seederconfig"},next:{title:"Interface: SocketConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.socketconnectionconfig"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-selecttrecord-tresult"},"Interface: Select<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Select"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",{parentName:"tr",align:null},"{}"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.aliasquerybuilder"},Object(r.b)("em",{parentName:"a"},"AliasQueryBuilder")),"<TRecord, TResult",">")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.columnnamequerybuilder"},Object(r.b)("em",{parentName:"a"},"ColumnNameQueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"Select")))),Object(r.b)("h2",{id:"callable"},"Callable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"(): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:969"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<TResult2, TInnerRecord, TInnerResult",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"subQueryBuilders"),": readonly ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"any"),"\\",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TInnerRecord")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TInnerResult")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"...subQueryBuilders")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ",Object(r.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:970"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<TResult2, TInnerRecord, TInnerResult",">","(",Object(r.b)("inlineCode",{parentName:"p"},"subQueryBuilders"),": readonly ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"any"),"\\",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TInnerRecord")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TInnerResult")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"subQueryBuilders")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ",Object(r.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:974"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(r.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.ref"},Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"...aliases")),Object(r.b)("td",{parentName:"tr",align:null},"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:917"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(r.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.ref"},Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"aliases")),Object(r.b)("td",{parentName:"tr",align:null},"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:928"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",{parentName:"tr",align:null},"(",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),">",")[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.ref"},Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"...aliases")),Object(r.b)("td",{parentName:"tr",align:null},"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:940"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",{parentName:"tr",align:null},"(",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),">",")[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, TRecord","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.ref"},Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"aliases")),Object(r.b)("td",{parentName:"tr",align:null},"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:952"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"**): ["),"QueryBuilder",Object(r.b)("em",{parentName:"p"},"](/docs/api/classes/knex.knex.querybuilder)<TRecord, "),"ArrayIfAlready",Object(r.b)("em",{parentName:"p"},"<TResult, "),"DeferredKeySelection",Object(r.b)("em",{parentName:"p"},"<TRecord, "),"string",Object(r.b)("em",{parentName:"p"},", "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"never*",">",">",">"),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",{parentName:"tr",align:null},"***")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"p"},"DeferredKeySelection"),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"never"),">",">",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1428"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<ColNameUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol")),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ColNameUT[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1434"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<ColNameUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-8"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol")),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ColNameUT[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1445"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-9"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("em",{parentName:"td"},"Partial"),"<",Object(r.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1456"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Select"),"<TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-10"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("em",{parentName:"td"},"Partial"),"<",Object(r.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",{parentName:"tr",align:null},"readonly ",Object(r.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1468"))}d.isMDXComponent=!0}}]);