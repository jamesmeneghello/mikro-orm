(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||u[s]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),c=(n(0),n(1051)),i={id:"knex.knex.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.onconflictquerybuilder",id:"version-4.4/api/interfaces/knex.knex.onconflictquerybuilder",isDocsHomePage:!1,title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",description:"Interface: OnConflictQueryBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.onconflictquerybuilder.md",slug:"/api/interfaces/knex.knex.onconflictquerybuilder",permalink:"/docs/api/interfaces/knex.knex.onconflictquerybuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.onconflictquerybuilder.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1614060614,sidebar_label:"OnConflictQueryBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig"},next:{title:"Interface: OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.oracledbconnectionconfig"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"ignore",id:"ignore",children:[]},{value:"merge",id:"merge",children:[]}]}],b={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-onconflictquerybuildertrecord-tresult"},"Interface: OnConflictQueryBuilder<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OnConflictQueryBuilder"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"TRecord"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"TResult"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OnConflictQueryBuilder"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"ignore"},"ignore"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"ignore"),"(): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:456"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"merge"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"merge"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data?"),": ",Object(c.b)("em",{parentName:"p"},"Readonly"),"<",Object(c.b)("em",{parentName:"p"},"Partial"),"<",Object(c.b)("em",{parentName:"p"},"AnyOrUnknownToOther"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},Object(c.b)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">","): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data?")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"Readonly"),"<",Object(c.b)("em",{parentName:"td"},"Partial"),"<",Object(c.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},Object(c.b)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:457"))}d.isMDXComponent=!0}}]);