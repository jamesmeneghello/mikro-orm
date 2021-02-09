(window.webpackJsonp=window.webpackJsonp||[]).push([[1034],{1104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),b=(a(0),a(1256)),c={id:"knex.knex.asymmetricaggregation",title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",sidebar_label:"AsymmetricAggregation",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.asymmetricaggregation",id:"version-4.4/api/interfaces/knex.knex.asymmetricaggregation",isDocsHomePage:!1,title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",description:"Interface: AsymmetricAggregation",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.asymmetricaggregation.md",slug:"/api/interfaces/knex.knex.asymmetricaggregation",permalink:"/docs/api/interfaces/knex.knex.asymmetricaggregation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.asymmetricaggregation.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612881670,sidebar_label:"AsymmetricAggregation",sidebar:"version-4.4/API",previous:{title:"Interface: As<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.as"},next:{title:"Interface: BatchInsertBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.batchinsertbuilder"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],p={toc:m};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-asymmetricaggregationtrecord-tresult-tvalue"},"Interface: AsymmetricAggregation<TRecord, TResult, TValue",">"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".AsymmetricAggregation"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TValue")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"AsymmetricAggregation"))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly keyof ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"base"),">","[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\","> ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps","\\","> ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">, TUnionProps","\\","> : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, ",Object(b.b)("em",{parentName:"td"},"never"),", ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">, ",Object(b.b)("em",{parentName:"td"},"never"),"\\","> : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">","\\",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"readonly keyof ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">","[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1324"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TAliases, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": TAliases): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TAliases")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"Record"),"<",Object(b.b)("em",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"string")," ","\\")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\","> ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps","\\","> ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & { [k in string ","\\")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"aliases")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TAliases")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1327"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AsymmetricAggregation"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(b.b)("em",{parentName:"p"},"Readonly"),"<",Object(b.b)("em",{parentName:"p"},"Record"),"<",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">",">",")[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\","> ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps","\\","> ? ",Object(b.b)("em",{parentName:"td"},"true")," ",Object(b.b)("em",{parentName:"td"},"extends")," THasSelect ? ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps & ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">, TUnionProps","\\","> : ",Object(b.b)("em",{parentName:"td"},"DeferredKeySelection"),"<{}, ",Object(b.b)("em",{parentName:"td"},"never"),", ",Object(b.b)("em",{parentName:"td"},"true"),", {}, ",Object(b.b)("em",{parentName:"td"},"false"),", ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">, ",Object(b.b)("em",{parentName:"td"},"never"),"\\","> : ",Object(b.b)("em",{parentName:"td"},"Dict"),"<TValue","\\",">","\\",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"readonly (",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"Readonly"),"<",Object(b.b)("em",{parentName:"td"},"Record"),"<",Object(b.b)("em",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"td"},"any"),">",">",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1331"))}i.isMDXComponent=!0},1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=i(a),s=r,j=d["".concat(c,".").concat(s)]||d[s]||O[s]||b;return a?n.a.createElement(j,l(l({ref:t},p),{},{components:a})):n.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);