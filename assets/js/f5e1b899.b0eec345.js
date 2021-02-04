(window.webpackJsonp=window.webpackJsonp||[]).push([[1126],{1196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),b=(a(0),a(1256)),c={id:"core.commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.commitordercalculator",id:"api/classes/core.commitordercalculator",isDocsHomePage:!1,title:"Class: CommitOrderCalculator",description:"Class: CommitOrderCalculator",source:"@site/docs/api/classes/core.commitordercalculator.md",slug:"/api/classes/core.commitordercalculator",permalink:"/docs/next/api/classes/core.commitordercalculator",editUrl:null,version:"current",sidebar_label:"CommitOrderCalculator",sidebar:"API",previous:{title:"Class: Collection<T, O>",permalink:"/docs/next/api/classes/core.collection"},next:{title:"Class: Configuration<D>",permalink:"/docs/next/api/classes/core.configuration"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"nodes",id:"nodes",children:[]},{value:"sortedNodeList",id:"sortednodelist",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addDependency",id:"adddependency",children:[]},{value:"addNode",id:"addnode",children:[]},{value:"discoverProperty",id:"discoverproperty",children:[]},{value:"hasNode",id:"hasnode",children:[]},{value:"sort",id:"sort",children:[]},{value:"visit",id:"visit",children:[]},{value:"visitOpenNode",id:"visitopennode",children:[]}]}],l={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-commitordercalculator"},"Class: CommitOrderCalculator"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".CommitOrderCalculator"),Object(b.b)("p",null,"CommitOrderCalculator implements topological sorting, which is an ordering\nalgorithm for directed graphs (DG) and/or directed acyclic graphs (DAG) by\nusing a depth-first searching (DFS) to traverse the graph built in memory.\nThis algorithm have a linear running time based on nodes (V) and dependency\nbetween the nodes (E), resulting in a computational complexity of O(V + E)."),Object(b.b)("p",null,"Based on ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php"}),"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new CommitOrderCalculator"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.commitordercalculator"}),Object(b.b)("em",{parentName:"a"},"CommitOrderCalculator"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.commitordercalculator"}),Object(b.b)("em",{parentName:"a"},"CommitOrderCalculator"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"nodes"},"nodes"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"nodes"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")),">"),Object(b.b)("p",null,"Matrix of nodes, keys are provided hashes and values are the node definition objects."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L34"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sortednodelist"},"sortedNodeList"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"sortedNodeList"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Volatile variable holding calculated nodes during sorting process."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L37"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:37")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"adddependency"},"addDependency"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDependency"),"(",Object(b.b)("inlineCode",{parentName:"p"},"from"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"to"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"weight"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Adds a new dependency (edge) to the graph using their hashes."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"from")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"to")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L56"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:56")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"addnode"},"addNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Adds a new node to the graph, assigning its hash."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L49"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:49")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"discoverproperty"},"discoverProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"discoverProperty"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L60"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:60")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hasnode"},"hasNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hash"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Checks for node existence in graph."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hash")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L42"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sort"},"sort"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sort"),"(): ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Return a valid order list of all current nodes.\nThe desired topological sorting is the reverse post order of these searches."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L81"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:81")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visit"},"visit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Visit a given node definition for reordering."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L102"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:102")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"visitopennode"},"visitOpenNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"visitOpenNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")),", ",Object(b.b)("inlineCode",{parentName:"p"},"target"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")),", ",Object(b.b)("inlineCode",{parentName:"p"},"edge"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.edge"}),Object(b.b)("em",{parentName:"a"},"Edge")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Visits all target's dependencies if in cycle with given node"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"target")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.node"}),Object(b.b)("em",{parentName:"a"},"Node")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"edge")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.edge"}),Object(b.b)("em",{parentName:"a"},"Edge")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/f55c731/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L124"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:124")))}p.isMDXComponent=!0},1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),O=r,s=m["".concat(c,".").concat(O)]||m[O]||d[O]||b;return a?n.a.createElement(s,o(o({ref:t},l),{},{components:a})):n.a.createElement(s,o({ref:t},l))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);