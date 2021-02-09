(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),l=n,d=m["".concat(o,".").concat(l)]||m[l]||s[l]||c;return r?a.a.createElement(d,b(b({ref:t},u),{},{components:r})):a.a.createElement(d,b({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=l;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},613:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(1256)),o={id:"querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType"},b={unversionedId:"api/enums/querytype",id:"version-4.3/api/enums/querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/querytype.md",slug:"/api/enums/querytype",permalink:"/docs/4.3/api/enums/querytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/querytype.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612881670,sidebar_label:"QueryType",sidebar:"version-4.3/API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/4.3/api/enums/queryordernumeric"},next:{title:"Enumeration: ReferenceType",permalink:"/docs/4.3/api/enums/referencetype"}},i=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"count"},"COUNT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"COUNT"),':  = "COUNT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L4"}),"packages/knex/src/query/enums.ts:4"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"DELETE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DELETE"),':  = "DELETE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L7"}),"packages/knex/src/query/enums.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insert"},"INSERT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"INSERT"),':  = "INSERT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L5"}),"packages/knex/src/query/enums.ts:5"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"select"},"SELECT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"SELECT"),':  = "SELECT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L3"}),"packages/knex/src/query/enums.ts:3"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"truncate"},"TRUNCATE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"TRUNCATE"),':  = "TRUNCATE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L2"}),"packages/knex/src/query/enums.ts:2"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"UPDATE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"UPDATE"),':  = "UPDATE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L6"}),"packages/knex/src/query/enums.ts:6"))))}p.isMDXComponent=!0}}]);