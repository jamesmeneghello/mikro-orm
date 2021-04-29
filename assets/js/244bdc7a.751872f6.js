(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},l=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),l=a,u=m["".concat(b,".").concat(l)]||m[l]||d[l]||c;return t?r.a.createElement(u,i(i({ref:n},p),{},{components:t})):r.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=l;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<c;p++)b[p]=t[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},201:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),c=(t(0),t(1026)),b={id:"knex.tabledifference",title:"Interface: TableDifference",sidebar_label:"TableDifference",custom_edit_url:null},i={unversionedId:"api/interfaces/knex.tabledifference",id:"api/interfaces/knex.tabledifference",isDocsHomePage:!1,title:"Interface: TableDifference",description:"Interface: TableDifference",source:"@site/docs/api/interfaces/knex.tabledifference.md",slug:"/api/interfaces/knex.tabledifference",permalink:"/docs/next/api/interfaces/knex.tabledifference",editUrl:null,version:"current",sidebar_label:"TableDifference",sidebar:"API",previous:{title:"Interface: Table",permalink:"/docs/next/api/interfaces/knex.table"}},o=[{value:"Properties",id:"properties",children:[{value:"addedColumns",id:"addedcolumns",children:[]},{value:"addedForeignKeys",id:"addedforeignkeys",children:[]},{value:"addedIndexes",id:"addedindexes",children:[]},{value:"changedColumns",id:"changedcolumns",children:[]},{value:"changedComment",id:"changedcomment",children:[]},{value:"changedForeignKeys",id:"changedforeignkeys",children:[]},{value:"changedIndexes",id:"changedindexes",children:[]},{value:"fromTable",id:"fromtable",children:[]},{value:"name",id:"name",children:[]},{value:"removedColumns",id:"removedcolumns",children:[]},{value:"removedForeignKeys",id:"removedforeignkeys",children:[]},{value:"removedIndexes",id:"removedindexes",children:[]},{value:"renamedColumns",id:"renamedcolumns",children:[]},{value:"renamedIndexes",id:"renamedindexes",children:[]}]}],p={toc:o};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-tabledifference"},"Interface: TableDifference"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".TableDifference"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"addedcolumns"},"addedColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"addedColumns"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(c.b)("em",{parentName:"a"},"Column")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L80"},"packages/knex/src/typings.ts:80")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"addedforeignkeys"},"addedForeignKeys"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"addedForeignKeys"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L88"},"packages/knex/src/typings.ts:88")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"addedindexes"},"addedIndexes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"addedIndexes"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(c.b)("em",{parentName:"a"},"Index")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L84"},"packages/knex/src/typings.ts:84")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"changedcolumns"},"changedColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"changedColumns"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.columndifference"},Object(c.b)("em",{parentName:"a"},"ColumnDifference")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L81"},"packages/knex/src/typings.ts:81")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"changedcomment"},"changedComment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"changedComment"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L78"},"packages/knex/src/typings.ts:78")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"changedforeignkeys"},"changedForeignKeys"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"changedForeignKeys"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L89"},"packages/knex/src/typings.ts:89")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"changedindexes"},"changedIndexes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"changedIndexes"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(c.b)("em",{parentName:"a"},"Index")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L85"},"packages/knex/src/typings.ts:85")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fromtable"},"fromTable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fromTable"),": ",Object(c.b)("em",{parentName:"p"},"DatabaseTable")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L79"},"packages/knex/src/typings.ts:79")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L77"},"packages/knex/src/typings.ts:77")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedcolumns"},"removedColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"removedColumns"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(c.b)("em",{parentName:"a"},"Column")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L82"},"packages/knex/src/typings.ts:82")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedforeignkeys"},"removedForeignKeys"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"removedForeignKeys"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L90"},"packages/knex/src/typings.ts:90")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedindexes"},"removedIndexes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"removedIndexes"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(c.b)("em",{parentName:"a"},"Index")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L86"},"packages/knex/src/typings.ts:86")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"renamedcolumns"},"renamedColumns"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"renamedColumns"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(c.b)("em",{parentName:"a"},"Column")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L83"},"packages/knex/src/typings.ts:83")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"renamedindexes"},"renamedIndexes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"renamedIndexes"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(c.b)("em",{parentName:"a"},"Index")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/typings.ts#L87"},"packages/knex/src/typings.ts:87")))}s.isMDXComponent=!0}}]);