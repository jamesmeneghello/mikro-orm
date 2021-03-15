(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,u=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return r?a.a.createElement(u,p(p({ref:t},b),{},{components:r})):a.a.createElement(u,p({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},527:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1052)),i={id:"core.indexoptions",title:"Interface: IndexOptions<T>",sidebar_label:"IndexOptions",hide_title:!0},p={unversionedId:"api/interfaces/core.indexoptions",id:"version-4.4/api/interfaces/core.indexoptions",isDocsHomePage:!1,title:"Interface: IndexOptions<T>",description:"Interface: IndexOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.indexoptions.md",slug:"/api/interfaces/core.indexoptions",permalink:"/docs/api/interfaces/core.indexoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.indexoptions.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615844866,formattedLastUpdatedAt:"3/15/2021",sidebar_label:"IndexOptions",sidebar:"version-4.4/API",previous:{title:"Interface: IWrappedEntity<T, PK, P>",permalink:"/docs/api/interfaces/core.iwrappedentity"},next:{title:"Interface: InitOptions<T>",permalink:"/docs/api/interfaces/core.initoptions"}},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]},{value:"options",id:"options",children:[]},{value:"properties",id:"properties-1",children:[]},{value:"type",id:"type",children:[]}]}],b={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-indexoptionst"},"Interface: IndexOptions<T",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".IndexOptions"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"T")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(o.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions"},Object(o.b)("em",{parentName:"a"},"UniqueOptions")),"<T",">"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"IndexOptions")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions"},"UniqueOptions"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions#name"},"name")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Indexed.ts#L29"},"packages/core/src/decorators/Indexed.ts:29")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"options"},"options"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"options"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"any"),">"),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions"},"UniqueOptions"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions#options"},"options")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Indexed.ts#L31"},"packages/core/src/decorators/Indexed.ts:31")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"properties-1"},"properties"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"properties"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," keyof T ","|"," keyof T[]"),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions"},"UniqueOptions"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.uniqueoptions#properties"},"properties")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Indexed.ts#L30"},"packages/core/src/decorators/Indexed.ts:30")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/decorators/Indexed.ts#L35"},"packages/core/src/decorators/Indexed.ts:35")))}s.isMDXComponent=!0}}]);