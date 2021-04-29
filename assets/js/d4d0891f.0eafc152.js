(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=o(a),s=n,O=i["".concat(c,".").concat(s)]||i[s]||d[s]||b;return a?r.a.createElement(O,m(m({ref:t},l),{},{components:a})):r.a.createElement(O,m({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},851:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(1026)),c={id:"knex.schemacomparator",title:"Class: SchemaComparator",sidebar_label:"SchemaComparator",custom_edit_url:null},m={unversionedId:"api/classes/knex.schemacomparator",id:"api/classes/knex.schemacomparator",isDocsHomePage:!1,title:"Class: SchemaComparator",description:"Class: SchemaComparator",source:"@site/docs/api/classes/knex.schemacomparator.md",slug:"/api/classes/knex.schemacomparator",permalink:"/docs/next/api/classes/knex.schemacomparator",editUrl:null,version:"current",sidebar_label:"SchemaComparator",sidebar:"API",previous:{title:"Class: QueryBuilder<T>",permalink:"/docs/next/api/classes/knex.querybuilder"},next:{title:"Class: SchemaGenerator",permalink:"/docs/next/api/classes/knex.schemagenerator"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compare",id:"compare",children:[]},{value:"diffColumn",id:"diffcolumn",children:[]},{value:"diffComment",id:"diffcomment",children:[]},{value:"diffForeignKey",id:"diffforeignkey",children:[]},{value:"diffIndex",id:"diffindex",children:[]},{value:"diffTable",id:"difftable",children:[]},{value:"hasSameDefaultValue",id:"hassamedefaultvalue",children:[]},{value:"isIndexFulfilledBy",id:"isindexfulfilledby",children:[]}]}],l={toc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-schemacomparator"},"Class: SchemaComparator"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".SchemaComparator"),Object(b.b)("p",null,"Compares two Schemas and return an instance of SchemaDifference."),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new SchemaComparator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlplatform"},Object(b.b)("em",{parentName:"a"},"AbstractSqlPlatform")),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.schemacomparator"},Object(b.b)("em",{parentName:"a"},"SchemaComparator"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlplatform"},Object(b.b)("em",{parentName:"a"},"AbstractSqlPlatform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.schemacomparator"},Object(b.b)("em",{parentName:"a"},"SchemaComparator"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L12"},"packages/knex/src/schema/SchemaComparator.ts:12")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compare"},"compare"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compare"),"(",Object(b.b)("inlineCode",{parentName:"p"},"fromSchema"),": ",Object(b.b)("em",{parentName:"p"},"DatabaseSchema"),", ",Object(b.b)("inlineCode",{parentName:"p"},"toSchema"),": ",Object(b.b)("em",{parentName:"p"},"DatabaseSchema"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.schemadifference"},Object(b.b)("em",{parentName:"a"},"SchemaDifference"))),Object(b.b)("p",null,"Returns a SchemaDifference object containing the differences between the schemas fromSchema and toSchema."),Object(b.b)("p",null,"The returned differences are returned in such a way that they contain the\noperations to change the schema stored in fromSchema to the schema that is\nstored in toSchema."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"fromSchema")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"DatabaseSchema"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"toSchema")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"DatabaseSchema"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.schemadifference"},Object(b.b)("em",{parentName:"a"},"SchemaDifference"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L23"},"packages/knex/src/schema/SchemaComparator.ts:23")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"diffcolumn"},"diffColumn"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"diffColumn"),"(",Object(b.b)("inlineCode",{parentName:"p"},"column1"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")),", ",Object(b.b)("inlineCode",{parentName:"p"},"column2"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")),"): ",Object(b.b)("em",{parentName:"p"},"Set"),"<string",">"),Object(b.b)("p",null,"Returns the difference between the columns\nIf there are differences this method returns field2, otherwise the boolean false."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"column1")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"column2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Set"),"<string",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L337"},"packages/knex/src/schema/SchemaComparator.ts:337")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"diffcomment"},"diffComment"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"diffComment"),"(",Object(b.b)("inlineCode",{parentName:"p"},"comment1?"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"comment2?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"comment1?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"comment2?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L371"},"packages/knex/src/schema/SchemaComparator.ts:371")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"diffforeignkey"},"diffForeignKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"diffForeignKey"),"(",Object(b.b)("inlineCode",{parentName:"p"},"key1"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(b.b)("em",{parentName:"a"},"ForeignKey")),", ",Object(b.b)("inlineCode",{parentName:"p"},"key2"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(b.b)("em",{parentName:"a"},"ForeignKey")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key1")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(b.b)("em",{parentName:"a"},"ForeignKey")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(b.b)("em",{parentName:"a"},"ForeignKey")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L314"},"packages/knex/src/schema/SchemaComparator.ts:314")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"diffindex"},"diffIndex"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"diffIndex"),"(",Object(b.b)("inlineCode",{parentName:"p"},"index1"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")),", ",Object(b.b)("inlineCode",{parentName:"p"},"index2"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Finds the difference between the indexes index1 and index2.\nCompares index1 with index2 and returns index2 if there are any differences or false in case there are no differences."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"index1")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"index2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L381"},"packages/knex/src/schema/SchemaComparator.ts:381")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"difftable"},"diffTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"diffTable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"fromTable"),": ",Object(b.b)("em",{parentName:"p"},"DatabaseTable"),", ",Object(b.b)("inlineCode",{parentName:"p"},"toTable"),": ",Object(b.b)("em",{parentName:"p"},"DatabaseTable"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"false")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},Object(b.b)("em",{parentName:"a"},"TableDifference"))),Object(b.b)("p",null,"Returns the difference between the tables fromTable and toTable.\nIf there are no differences this method returns the boolean false."),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"fromTable")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"DatabaseTable"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"toTable")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"DatabaseTable"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("inlineCode",{parentName:"p"},"false")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},Object(b.b)("em",{parentName:"a"},"TableDifference"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L109"},"packages/knex/src/schema/SchemaComparator.ts:109")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hassamedefaultvalue"},"hasSameDefaultValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasSameDefaultValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"from"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")),", ",Object(b.b)("inlineCode",{parentName:"p"},"to"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"from")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"to")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.column"},Object(b.b)("em",{parentName:"a"},"Column")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L422"},"packages/knex/src/schema/SchemaComparator.ts:422")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isindexfulfilledby"},"isIndexFulfilledBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isIndexFulfilledBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"index1"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")),", ",Object(b.b)("inlineCode",{parentName:"p"},"index2"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Checks if the other index already fulfills all the indexing and constraint needs of the current one."),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"index1")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"index2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/knex.index"},Object(b.b)("em",{parentName:"a"},"Index")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/adba723/packages/knex/src/schema/SchemaComparator.ts#L388"},"packages/knex/src/schema/SchemaComparator.ts:388")))}o.isMDXComponent=!0}}]);