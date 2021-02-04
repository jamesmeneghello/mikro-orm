(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(1256)),i={title:"Frequently Asked Questions"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How can I synchronize my database schema with the entities?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/next/faq",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/faq.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1612406659},l=[{value:"How can I synchronize my database schema with the entities?",id:"how-can-i-synchronize-my-database-schema-with-the-entities",children:[]},{value:"I cannot run the CLI",id:"i-cannot-run-the-cli",children:[]},{value:"EntityManager does not have <code>createQueryBuilder()</code> method",id:"entitymanager-does-not-have-createquerybuilder-method",children:[]},{value:"How can I add columns to pivot table (M:N relation)",id:"how-can-i-add-columns-to-pivot-table-mn-relation",children:[]},{value:"You cannot call <code>em.flush()</code> from inside lifecycle hook handlers",id:"you-cannot-call-emflush-from-inside-lifecycle-hook-handlers",children:[]},{value:"Column is being created with JSON type while the TS type is <code>string/Date/number/...</code>",id:"column-is-being-created-with-json-type-while-the-ts-type-is-stringdatenumber",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"how-can-i-synchronize-my-database-schema-with-the-entities"},"How can I synchronize my database schema with the entities?"),Object(o.b)("p",null,"There are two ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/schema-generator"}),"Schema Generator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/migrations"}),"Migrations"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm schema:update --run\n")),Object(o.b)("h3",{id:"i-cannot-run-the-cli"},"I cannot run the CLI"),Object(o.b)("p",null,"Make sure you install ",Object(o.b)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally. If you want to have\nglobal installation, you will need to install driver packages globally too. "),Object(o.b)("h3",{id:"entitymanager-does-not-have-createquerybuilder-method"},"EntityManager does not have ",Object(o.b)("inlineCode",{parentName:"h3"},"createQueryBuilder()")," method"),Object(o.b)("p",null,"The method is there, the issue is in the TS type. "),Object(o.b)("p",null,"In v4 the ",Object(o.b)("inlineCode",{parentName:"p"},"core")," package, where ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager")," and ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository")," are\ndefined, is not dependent on knex, and therefore it cannot have a method\nreturning a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryBuilder"),". You need to import the SQL flavour of the EM\nfrom the driver package to access the ",Object(o.b)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The SQL flavour of EM is actually called ",Object(o.b)("inlineCode",{parentName:"p"},"SqlEntityManager"),", it is exported both under\nthis name and under ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { EntityManager } from '@mikro-orm/mysql'; // or any other SQL driver package\n\nconst em: EntityManager;\nconst qb = await em.createQueryBuilder(...);\n")),Object(o.b)("p",null,"Same applies for the ",Object(o.b)("inlineCode",{parentName:"p"},"aggregate()")," method in mongo driver:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { EntityManager } from '@mikro-orm/mongodb';\n\nconst em: EntityManager;\nconst ret = await em.aggregate(...);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The mongo flavour of EM is actually called ",Object(o.b)("inlineCode",{parentName:"p"},"MongoEntityManager"),", it is exported both under\nthis name and under ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),Object(o.b)("h3",{id:"how-can-i-add-columns-to-pivot-table-mn-relation"},"How can I add columns to pivot table (M:N relation)"),Object(o.b)("p",null,"You should model your M:N relation transparently, via 1:m and m:1 properties.\nMore about this can be found in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/composite-keys/#use-case-3-join-table-with-metadata"}),"Composite Keys section"),"."),Object(o.b)("h3",{id:"you-cannot-call-emflush-from-inside-lifecycle-hook-handlers"},"You cannot call ",Object(o.b)("inlineCode",{parentName:"h3"},"em.flush()")," from inside lifecycle hook handlers"),Object(o.b)("p",null,"You might see this validation error even if you do not use hooks. If that happens,\nthe reason is usually because you do not have ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/identity-map"}),"request context")," set up properly, and\nyou are reusing one ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager")," instance. "),Object(o.b)("h3",{id:"column-is-being-created-with-json-type-while-the-ts-type-is-stringdatenumber"},"Column is being created with JSON type while the TS type is ",Object(o.b)("inlineCode",{parentName:"h3"},"string/Date/number/...")),Object(o.b)("p",null,"You are probably using the default ",Object(o.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),", which does not\nsupport inferring property type when there is a property initializer. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Property()\nfoo = 'abc';\n")),Object(o.b)("p",null,"There are two ways around this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"use ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/metadata-providers/#tsmorphmetadataprovider"}),"TsMorphMetadataProvider")),Object(o.b)("li",{parentName:"ul"},"specify the type explicitly:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Property()\nfoo: string = 'abc';\n")))}u.isMDXComponent=!0}}]);