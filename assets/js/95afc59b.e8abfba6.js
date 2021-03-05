(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=l(n),s=r,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||i;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},629:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1052)),o={id:"knex.knex.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.migrationsource",id:"version-4.4/api/interfaces/knex.knex.migrationsource",isDocsHomePage:!1,title:"Interface: MigrationSource<TMigrationSpec>",description:"Interface: MigrationSource",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.migrationsource.md",slug:"/api/interfaces/knex.knex.migrationsource",permalink:"/docs/api/interfaces/knex.knex.migrationsource",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.migrationsource.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614930069,sidebar_label:"MigrationSource",sidebar:"version-4.4/API",previous:{title:"Interface: Migration",permalink:"/docs/api/interfaces/knex.knex.migration"},next:{title:"Interface: Migrator",permalink:"/docs/api/interfaces/knex.knex.migrator"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"getMigration",id:"getmigration",children:[]},{value:"getMigrationName",id:"getmigrationname",children:[]},{value:"getMigrations",id:"getmigrations",children:[]}]}],p={toc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migrationsourcetmigrationspec"},"Interface: MigrationSource<TMigrationSpec",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MigrationSource"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"TMigrationSpec"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationSource"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getmigration"},"getMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:null},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2111"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrationname"},"getMigrationName"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrationName"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:null},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2110"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrations"},"getMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrations"),"(",Object(i.b)("inlineCode",{parentName:"p"},"loadExtensions"),": readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"loadExtensions")),Object(i.b)("td",{parentName:"tr",align:null},"readonly ",Object(i.b)("em",{parentName:"td"},"string"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2109"))}l.isMDXComponent=!0}}]);