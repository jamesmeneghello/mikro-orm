(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},230:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1052)),c={id:"knex.querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType",hide_title:!0},i={unversionedId:"api/enums/knex.querytype",id:"version-4.4/api/enums/knex.querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration: QueryType",source:"@site/versioned_docs/version-4.4/api/enums/knex.querytype.md",slug:"/api/enums/knex.querytype",permalink:"/docs/api/enums/knex.querytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/knex.querytype.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615844866,formattedLastUpdatedAt:"3/15/2021",sidebar_label:"QueryType",sidebar:"version-4.4/API",previous:{title:"Enumeration: ReferenceType",permalink:"/docs/api/enums/core.referencetype"},next:{title:"Class: CLIConfigurator",permalink:"/docs/api/classes/cli.cliconfigurator"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],p={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enumeration-querytype"},"Enumeration: QueryType"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".QueryType"),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"count"},"COUNT"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"COUNT"),': = "COUNT"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L4"},"packages/knex/src/query/enums.ts:4")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"delete"},"DELETE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DELETE"),': = "DELETE"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L7"},"packages/knex/src/query/enums.ts:7")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"insert"},"INSERT"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"INSERT"),': = "INSERT"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L5"},"packages/knex/src/query/enums.ts:5")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"select"},"SELECT"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"SELECT"),': = "SELECT"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L3"},"packages/knex/src/query/enums.ts:3")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"truncate"},"TRUNCATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"TRUNCATE"),': = "TRUNCATE"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L2"},"packages/knex/src/query/enums.ts:2")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"update"},"UPDATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"UPDATE"),': = "UPDATE"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/query/enums.ts#L6"},"packages/knex/src/query/enums.ts:6")))}s.isMDXComponent=!0}}]);