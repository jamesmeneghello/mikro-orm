(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1110:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||c;return t?o.a.createElement(f,a(a({ref:n},b),{},{components:t})):o.a.createElement(f,a({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var b=2;b<c;b++)i[b]=t[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),c=(t(0),t(1110)),i={id:"knex.knex-1.socketconnectionconfig",title:"Interface: SocketConnectionConfig",sidebar_label:"SocketConnectionConfig",custom_edit_url:null,hide_title:!0},a={unversionedId:"api/interfaces/knex.knex-1.socketconnectionconfig",id:"api/interfaces/knex.knex-1.socketconnectionconfig",isDocsHomePage:!1,title:"Interface: SocketConnectionConfig",description:"Interface: SocketConnectionConfig",source:"@site/docs/api/interfaces/knex.knex-1.socketconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.socketconnectionconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.socketconnectionconfig",editUrl:null,version:"current",sidebar_label:"SocketConnectionConfig",sidebar:"API",previous:{title:"Interface: Select<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.select"},next:{title:"Interface: Sql",permalink:"/docs/next/api/interfaces/knex.knex-1.sql"}},p=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"password",id:"password",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-socketconnectionconfig"},"Interface: SocketConnectionConfig"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".SocketConnectionConfig"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"database"},"database"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"database"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2073"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"debug"},"debug"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"debug"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2074"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"password"},"password"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"password"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2072"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"socketpath"},"socketPath"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"socketPath"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2070"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"user"},"user"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"user"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2071"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional"),Object(c.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2075"))}l.isMDXComponent=!0}}]);