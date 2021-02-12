(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(1048)),a={title:"Using JSON properties"},s={unversionedId:"json-properties",id:"version-4.4/json-properties",isDocsHomePage:!1,title:"Using JSON properties",description:"Defining JSON properties",source:"@site/versioned_docs/version-4.4/json-properties.md",slug:"/json-properties",permalink:"/docs/json-properties",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/json-properties.md",version:"4.4",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1613169218,sidebar:"version-4.4/docs",previous:{title:"Defining Entities via EntitySchema",permalink:"/docs/entity-schema"},next:{title:"Metadata Providers",permalink:"/docs/metadata-providers"}},p=[{value:"Defining JSON properties",id:"defining-json-properties",children:[]},{value:"Querying by JSON object properties",id:"querying-by-json-object-properties",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"defining-json-properties"},"Defining JSON properties"),Object(i.b)("p",null,"Each database driver behaves a bit differently when it comes to JSON properties.\nMikroORM tries to unify the experience via ",Object(i.b)("a",{parentName:"p",href:"/docs/custom-types#jsontype"},"JsonType"),".\nThis type will be also used if you specify ",Object(i.b)("inlineCode",{parentName:"p"},"type: 'json'"),". "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n  \n  @Property({ type: 'json', nullable: true })\n  meta?: { foo: string; bar: number };\n\n}\n")),Object(i.b)("h2",{id:"querying-by-json-object-properties"},"Querying by JSON object properties"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Support for querying by JSON object properties was added in v4.4.2")),Object(i.b)("p",null,"We can query by JSON object properties easily:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const b = await em.findOne(Book, {\n  meta: {\n    valid: true,\n    nested: { \n      foo: '123', \n      bar: 321, \n      deep: { \n        baz: 59,\n        qux: false,\n      },\n    },\n  },\n});\n")),Object(i.b)("p",null,"Will produce following query (in postgres):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"select \"e0\".* \nfrom \"book\" as \"e0\" \nwhere (\"meta\"->>'valid')::bool = true \n  and \"meta\"->'nested'->>'foo' = '123' \n  and (\"meta\"->'nested'->>'bar')::float8 = 321 \n  and (\"meta\"->'nested'->'deep'->>'baz')::float8 = 59 \n  and (\"meta\"->'nested'->'deep'->>'qux')::bool = false \nlimit 1\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"All drivers are currently supported (including sqlite and mongo). In postgres we\nalso try to cast the value if we detect number or boolean on the right-hand side.")))}l.isMDXComponent=!0}}]);