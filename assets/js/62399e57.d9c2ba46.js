(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(1052)),i={title:"Identity Map and Request Context"},l={unversionedId:"identity-map",id:"identity-map",isDocsHomePage:!1,title:"Identity Map and Request Context",description:"MikroORM uses identity map in background so you will always get the same instance of",source:"@site/docs/identity-map.md",slug:"/identity-map",permalink:"/docs/next/identity-map",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/identity-map.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614930069,sidebar:"docs",previous:{title:"Unit of Work and Transactions",permalink:"/docs/next/unit-of-work"},next:{title:"Entity References",permalink:"/docs/next/entity-references"}},s=[{value:"Forking Entity Manager",id:"forking-entity-manager",children:[]},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"requestcontext-helper-for-di-containers",children:[]},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",children:[{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",children:[]},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),Object(a.b)("p",null,"If you want to clear this identity map cache, you can do so via ",Object(a.b)("inlineCode",{parentName:"p"},"em.clear()")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"orm.em.clear();\n")),Object(a.b)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),Object(a.b)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const em = orm.em.fork();\n")),Object(a.b)("h2",{id:"requestcontext-helper-for-di-containers"},Object(a.b)("a",{name:"request-context"})," RequestContext helper for DI containers"),Object(a.b)("p",null,"If you use dependency injection container like ",Object(a.b)("inlineCode",{parentName:"p"},"inversify")," or the one in ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),Object(a.b)("p",null,"To solve this, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",Object(a.b)("inlineCode",{parentName:"p"},"node"),"'s Domain API in the\nbackground to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nas a middleware:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(a.b)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",Object(a.b)("inlineCode",{parentName:"p"},"queryParser")," or ",Object(a.b)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. "),Object(a.b)("p",null,"Later on you can then access the request scoped ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager")," via ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()"),".\nThis method is used under the hood automatically, so you should not need it. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()")," will return ",Object(a.b)("inlineCode",{parentName:"p"},"undefinded")," if the context was\nnot started yet.")),Object(a.b)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),Object(a.b)("p",null,"Imagine you will use single Identity Map throughout your application. It will be shared across\nall request handlers, that can possibly run in parallel. "),Object(a.b)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),Object(a.b)("p",null,"As there would be only one shared Identity Map, you can't just clear it after your request ends.\nThere can be another request working with it so clearing the Identity Map from one request could\nbreak other requests running in parallel. This will result in growing memory footprint, as every\nentity that became managed at some point in time would be kept in the Identity Map. "),Object(a.b)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),Object(a.b)("p",null,"Every entity has ",Object(a.b)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form. If you\nhave only one shared Identity Map, following situation may occur:"),Object(a.b)("p",null,"Let's say there are 2 endpoints"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),Object(a.b)("p",null,"Now when someone requests same book via both of those endpoints, you could end up with both\nreturning the same output:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"Book")," without populating its property ",Object(a.b)("inlineCode",{parentName:"li"},"author")," property"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"Book"),", this time with ",Object(a.b)("inlineCode",{parentName:"li"},"author")," populated"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",Object(a.b)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",Object(a.b)("inlineCode",{parentName:"li"},"author")," populated")),Object(a.b)("p",null,"This happens because the information about entity association being populated is stored in\nthe Identity Map. "))}u.isMDXComponent=!0}}]);