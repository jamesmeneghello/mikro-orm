(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=m(n),s=a,u=p["".concat(b,".").concat(s)]||p[s]||d[s]||c;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},903:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=(n(0),n(1253)),b={id:"debugcommand",title:"Class: DebugCommand",sidebar_label:"DebugCommand"},i={unversionedId:"api/classes/debugcommand",id:"version-4.3/api/classes/debugcommand",isDocsHomePage:!1,title:"Class: DebugCommand",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/debugcommand.md",slug:"/api/classes/debugcommand",permalink:"/docs/4.3/api/classes/debugcommand",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/debugcommand.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611747804,sidebar_label:"DebugCommand",sidebar:"version-4.3/API",previous:{title:"Class: DeadlockException",permalink:"/docs/4.3/api/classes/deadlockexception"},next:{title:"Class: DriverException",permalink:"/docs/4.3/api/classes/driverexception"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"describe",id:"describe",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handler",id:"handler",children:[]},{value:"checkPaths",id:"checkpaths",children:[]}]}],l={toc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"DebugCommand"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CommandModule")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"command"},"command"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"command"),': string = "debug"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/DebugCommand.ts#L9"}),"packages/cli/src/commands/DebugCommand.ts:9"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"describe"},"describe"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"describe"),': string = "Debug CLI configuration"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/DebugCommand.ts#L10"}),"packages/cli/src/commands/DebugCommand.ts:10"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"handler"},"handler"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"handler"),"(): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/DebugCommand.ts#L15"}),"packages/cli/src/commands/DebugCommand.ts:15"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"checkpaths"},"checkPaths"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"checkPaths"),"(",Object(c.b)("inlineCode",{parentName:"p"},"paths"),": string[], ",Object(c.b)("inlineCode",{parentName:"p"},"failedColor"),": ",'"',"red",'"'," ","|"," ",'"',"yellow",'"',", ",Object(c.b)("inlineCode",{parentName:"p"},"baseDir?"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"onlyDirectories?"),": boolean): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/DebugCommand.ts#L47"}),"packages/cli/src/commands/DebugCommand.ts:47"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"paths")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"failedColor")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"',"red",'"'," ","|"," ",'"',"yellow",'"'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"baseDir?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"onlyDirectories")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}m.isMDXComponent=!0}}]);