(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95456],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60932:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a={title:"Smart query conditions"},c={unversionedId:"query-conditions",id:"version-2.7/query-conditions",isDocsHomePage:!1,title:"Smart query conditions",description:"When you want to make complex queries, you can easily end up with a lot of boilerplate code",source:"@site/versioned_docs/version-2.7/query-conditions.md",sourceDirName:".",slug:"/query-conditions",permalink:"/docs/2.7/query-conditions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/query-conditions.md",version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620110067,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Smart query conditions"},sidebar:"version-2.7/docs",previous:{title:"Smart Nested Populate",permalink:"/docs/2.7/nested-populate"},next:{title:"Using QueryBuilder",permalink:"/docs/2.7/query-builder"}},l=[],u={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you want to make complex queries, you can easily end up with a lot of boilerplate code\nfull of curly brackets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),(0,i.kt)("p",null,"For AND condition with single field, you can also do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),(0,i.kt)("p",null,"Another way to do this by including the operator in your keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id:in': [1, 2, 7] },\n  { 'id:nin': [3, 4] },\n  { 'id:gt': 5 },\n  { 'id:lt': 10 },\n  { 'id:gte': 7 },\n  { 'id:lte': 8 },\n  { 'id:ne': 9 },\n] });\n")),(0,i.kt)("p",null,"For comparison operators, you can also use their mathematical symbols:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id >': 5 },\n  { 'id <': 10 },\n  { 'id >=': 7 },\n  { 'id <=': 8 },\n  { 'id !=': 9 },\n] });\n")),(0,i.kt)("p",null,"There is also shortcut for ",(0,i.kt)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),(0,i.kt)("p",null,"For primary key lookup, you can provide the array directly to ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.find()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, [1, 2, 7]);\n")))}s.isMDXComponent=!0}}]);