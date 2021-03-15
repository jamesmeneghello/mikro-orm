(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},b=Object.keys(e);for(r=0;r<b.length;r++)t=b[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)t=b[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),o=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=o(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,b=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,u=d["".concat(a,".").concat(m)]||d[m]||s[m]||b;return t?i.a.createElement(u,c(c({ref:n},l),{},{components:t})):i.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var b=t.length,a=new Array(b);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<b;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},711:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return o}));var r=t(3),i=t(8),b=(t(0),t(1052)),a={id:"knex.knex.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.mysqlconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MySqlConnectionConfig",description:"Interface: MySqlConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig.md",slug:"/api/interfaces/knex.knex.mysqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615844866,formattedLastUpdatedAt:"3/15/2021",sidebar_label:"MySqlConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex.mysqlaltercolumnbuilder"},next:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.onconflictquerybuilder"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:p};function o(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-mysqlconnectionconfig"},"Interface: MySqlConnectionConfig"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MySqlConnectionConfig"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"MySqlConnectionConfig")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mysql2connectionconfig"},Object(b.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"bignumberstrings"},"bigNumberStrings"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"bigNumberStrings"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"charset"},"charset"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"charset"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"database"},"database"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"database"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"datestrings"},"dateStrings"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"dateStrings"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"debug"},"debug"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"debug"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"decimalnumbers"},"decimalNumbers"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"decimalNumbers"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"flags"},"flags"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"flags"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"host"},"host"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"host"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1979"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"insecureauth"},"insecureAuth"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"insecureAuth"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"localaddress"},"localAddress"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"localAddress"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1981"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"password"},"password"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"password"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1984"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"port"},"port"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"port"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1980"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"queryformat"},"queryFormat"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"queryFormat"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"query"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"values"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"socketpath"},"socketPath"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"socketPath"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1982"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ssl"},"ssl"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"ssl"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mariasslconfiguration"},Object(b.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stringifyobjects"},"stringifyObjects"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"stringifyObjects"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"supportbignumbers"},"supportBigNumbers"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"supportBigNumbers"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"timezone"},"timezone"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"timezone"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trace"},"trace"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"trace"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"typecast"},"typeCast"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"typeCast"),": ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"user"},"user"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"user"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1983"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"expirationChecker"),":"))}o.isMDXComponent=!0}}]);