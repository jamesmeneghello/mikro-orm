(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var l=b.a.createContext({}),p=function(e){var t=b.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,j=m["".concat(r,".").concat(s)]||m[s]||O[s]||c;return n?b.a.createElement(j,o(o({ref:t},l),{},{components:n})):b.a.createElement(j,o({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<c;l++)r[l]=n[l];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},437:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),b=n(7),c=(n(0),n(1253)),r={id:"connection",title:"Class: Connection",sidebar_label:"Connection"},o={unversionedId:"api/classes/connection",id:"version-4.3/api/classes/connection",isDocsHomePage:!1,title:"Class: Connection",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/connection.md",slug:"/api/classes/connection",permalink:"/docs/4.3/api/classes/connection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/connection.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611747804,sidebar_label:"Connection",sidebar:"version-4.3/API",previous:{title:"Class: ConfigurationLoader",permalink:"/docs/4.3/api/classes/configurationloader"},next:{title:"Class: ConnectionException",permalink:"/docs/4.3/api/classes/connectionexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"options",id:"options",children:[]},{value:"platform",id:"platform",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"executeQuery",id:"executequery",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"logQuery",id:"logquery",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],l={toc:i};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Connection"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new Connection"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/connectionoptions"}),"ConnectionOptions"),", ",Object(c.b)("inlineCode",{parentName:"p"},"type?"),": ",'"',"read",'"'," ","|"," ",'"',"write",'"',"): ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/connection"}),"Connection")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L13"}),"packages/core/src/connections/Connection.ts:13"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/connectionoptions"}),"ConnectionOptions")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"',"read",'"'," ","|"," ",'"',"write",'"'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"write"')))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/connection"}),"Connection")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"client"},"client"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract")," ",Object(c.b)("strong",{parentName:"p"},"client"),": any"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L13"}),"packages/core/src/connections/Connection.ts:13"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"config"},"config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L15"}),"packages/core/src/connections/Connection.ts:15"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"metadata"},"metadata"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("strong",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L11"}),"packages/core/src/connections/Connection.ts:11"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"options"},"options"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/connectionoptions"}),"ConnectionOptions")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L16"}),"packages/core/src/connections/Connection.ts:16"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"platform"},"platform"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("strong",{parentName:"p"},"platform"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L12"}),"packages/core/src/connections/Connection.ts:12"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"type"),": ",'"',"read",'"'," ","|"," ",'"',"write",'"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L17"}),"packages/core/src/connections/Connection.ts:17"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"begin"},"begin"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"begin"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),"): Promise","<","unknown>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L48"}),"packages/core/src/connections/Connection.ts:48"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","unknown>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"close"},"close"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"close"),"(",Object(c.b)("inlineCode",{parentName:"p"},"force?"),": boolean): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L37"}),"packages/core/src/connections/Connection.ts:37"))),Object(c.b)("p",null,"Closes the database connection (aka disconnect)"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"force?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"commit"},"commit"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"commit"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),"): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L52"}),"packages/core/src/connections/Connection.ts:52"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"connect"},"connect"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"connect"),"(): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L27"}),"packages/core/src/connections/Connection.ts:27"))),Object(c.b)("p",null,"Establishes connection to database"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"execute"},"execute"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"execute"),"(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"params?"),": any[], ",Object(c.b)("inlineCode",{parentName:"p"},"method?"),": ",'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"',", ",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),"): Promise","<",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/queryresult"}),"QueryResult")," ","|"," any ","|"," any[]>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L60"}),"packages/core/src/connections/Connection.ts:60"))),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"params?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"method?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/queryresult"}),"QueryResult")," ","|"," any ","|"," any[]>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"executequery"},"executeQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"executeQuery"),"<","T>(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"cb"),": () => Promise","<","T>): Promise","<","T>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L89"}),"packages/core/src/connections/Connection.ts:89"))),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters-5"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cb")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"() => Promise","<","T>")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getclienturl"},"getClientUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getClientUrl"),"(): string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L74"}),"packages/core/src/connections/Connection.ts:74"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," string"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/connectionconfig"}),"ConnectionConfig")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L62"}),"packages/core/src/connections/Connection.ts:62"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/connectionconfig"}),"ConnectionConfig")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L42"}),"packages/core/src/connections/Connection.ts:42"))),Object(c.b)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," string"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isconnected"},"isConnected"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Abstract"),Object(c.b)("strong",{parentName:"p"},"isConnected"),"(): Promise","<","boolean>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L32"}),"packages/core/src/connections/Connection.ts:32"))),Object(c.b)("p",null,"Are we connected to the database"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","boolean>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"logquery"},"logQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"logQuery"),"(",Object(c.b)("inlineCode",{parentName:"p"},"query"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"took?"),": number): void"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L103"}),"packages/core/src/connections/Connection.ts:103"))),Object(c.b)("h4",{id:"parameters-6"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"query")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"took?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rollback"},"rollback"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"rollback"),"(",Object(c.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),"): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L56"}),"packages/core/src/connections/Connection.ts:56"))),Object(c.b)("h4",{id:"parameters-7"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setmetadata"},"setMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage"),"): void"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L81"}),"packages/core/src/connections/Connection.ts:81"))),Object(c.b)("h4",{id:"parameters-8"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setplatform"},"setPlatform"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setPlatform"),"(",Object(c.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),"): void"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L85"}),"packages/core/src/connections/Connection.ts:85"))),Object(c.b)("h4",{id:"parameters-9"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"platform")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," void"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transactional"},"transactional"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transactional"),"<","T>(",Object(c.b)("inlineCode",{parentName:"p"},"cb"),": (trx: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),") => Promise","<","T>, ",Object(c.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.3/api#transaction"}),"Transaction"),"): Promise","<","T>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/connections/Connection.ts#L44"}),"packages/core/src/connections/Connection.ts:44"))),Object(c.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters-10"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cb")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(trx: ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"),") => Promise","<","T>")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ctx?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#transaction"}),"Transaction"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"))}p.isMDXComponent=!0}}]);