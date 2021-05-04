(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79050],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),m=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(l.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=n,N=d["".concat(l,".").concat(c)]||d[c]||k[c]||i;return a?r.createElement(N,p(p({ref:e},s),{},{components:a})):r.createElement(N,p({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88955:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return s}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),p={id:"core.serializationcontext",title:"Class: SerializationContext<T>",sidebar_label:"SerializationContext",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.serializationcontext",id:"version-4.5/api/classes/core.serializationcontext",isDocsHomePage:!1,title:"Class: SerializationContext<T\\>",description:"core.SerializationContext",source:"@site/versioned_docs/version-4.5/api/classes/core.serializationcontext.md",sourceDirName:"api/classes",slug:"/api/classes/core.serializationcontext",permalink:"/docs/api/classes/core.serializationcontext",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620110067,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"SerializationContext",frontMatter:{id:"core.serializationcontext",title:"Class: SerializationContext<T>",sidebar_label:"SerializationContext",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: RequestContext",permalink:"/docs/api/classes/core.requestcontext"},next:{title:"Class: ServerException",permalink:"/docs/api/classes/core.serverexception"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"path",id:"path",children:[]}]},{value:"Methods",id:"methods",children:[{value:"isMarkedAsPopulated",id:"ismarkedaspopulated",children:[]},{value:"leave",id:"leave",children:[]},{value:"visit",id:"visit",children:[]},{value:"propagate",id:"propagate",children:[]}]}],m={toc:l};function s(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".SerializationContext"),(0,i.kt)("p",null,"Helper that allows to keep track of where we are currently at when serializing complex entity graph with cycles.\nBefore we process a property, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"visit")," that checks if it is not a cycle path (but allows to pass cycles that\nare defined in populate hint). If not, we proceed and call ",(0,i.kt)("inlineCode",{parentName:"p"},"leave")," afterwards."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new SerializationContext"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"populate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#populateoptions"},(0,i.kt)("em",{parentName:"a"},"PopulateOptions")),"<T",">","[]): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<T",">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#populateoptions"},(0,i.kt)("em",{parentName:"a"},"PopulateOptions")),"<T",">","[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<T",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L15"},"packages/core/src/entity/EntityTransformer.ts:15")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"path"),": ","[",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("em",{parentName:"p"},"string"),"][]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L15"},"packages/core/src/entity/EntityTransformer.ts:15")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ismarkedaspopulated"},"isMarkedAsPopulated"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"isMarkedAsPopulated"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L63"},"packages/core/src/entity/EntityTransformer.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"leave"},"leave"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"leave"),"<U",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"U"))))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L34"},"packages/core/src/entity/EntityTransformer.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visit"},"visit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"visit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L19"},"packages/core/src/entity/EntityTransformer.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propagate"},"propagate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"propagate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"root"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">","): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"When initializing new context, we need to propagate it to the whole entity graph recursively."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L46"},"packages/core/src/entity/EntityTransformer.ts:46")))}s.isMDXComponent=!0}}]);