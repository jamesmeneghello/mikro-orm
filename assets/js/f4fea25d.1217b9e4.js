(window.webpackJsonp=window.webpackJsonp||[]).push([[1116],{1186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(1253)),o={title:"Creating Custom Driver"},s={unversionedId:"custom-driver",id:"version-3.6/custom-driver",isDocsHomePage:!1,title:"Creating Custom Driver",description:"If you want to use database that is not currently supported, you can implement your own driver.",source:"@site/versioned_docs/version-3.6/custom-driver.md",slug:"/custom-driver",permalink:"/docs/3.6/custom-driver",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/custom-driver.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611747804,sidebar:"version-3.6/docs",previous:{title:"Usage with JavaScript",permalink:"/docs/3.6/usage-with-js"},next:{title:"Using Multiple Schemas",permalink:"/docs/3.6/multiple-schemas"}},c=[{value:"Platform",id:"platform",children:[]},{value:"SchemaHelper",id:"schemahelper",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Driver",id:"driver",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nTo do so, you will need to design 4 classes:"),Object(i.b)("h2",{id:"platform"},"Platform"),Object(i.b)("p",null,"Platform is a class that provides information about available features of given driver: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Platform } from 'mikro-orm';\n\nexport class MyCustomPlatform extends Platform {\n  \n  protected readonly schemaHelper: MyCustomSchemaHelper;\n\n  // here you can override default settings\n  usesPivotTable(): boolean;\n  supportsTransactions(): boolean;\n  supportsSavePoints(): boolean;\n  getNamingStrategy(): { new (): NamingStrategy; };\n  getIdentifierQuoteCharacter(): string;\n  getParameterPlaceholder(index?: number): string;\n  usesReturningStatement(): boolean;\n  normalizePrimaryKey<T = number | string>(data: IPrimaryKey): T;\n  denormalizePrimaryKey(data: IPrimaryKey): IPrimaryKey;\n  getSerializedPrimaryKeyField(field: string): string;\n\n}\n")),Object(i.b)("h2",{id:"schemahelper"},"SchemaHelper"),Object(i.b)("p",null,"Part of platform is a ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaHelper"),", that provides information about how to build schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SchemaHelper } from 'mikro-orm';\n\nexport class MyCustomSchemaHelper extends SchemaHelper {\n  \n  // here you can override default settings\n  getIdentifierQuoteCharacter(): string;\n  getSchemaBeginning(): string;\n  getSchemaEnd(): string;\n  getSchemaTableEnd(): string;\n  getAutoIncrementStatement(meta: EntityMetadata): string;\n  getPrimaryKeySubtype(meta: EntityMetadata): string;\n  getTypeDefinition(prop: EntityProperty, types?: Record<string, string>, lengths?: Record<string, number>): string;\n  getUnsignedSuffix(prop: EntityProperty): string;\n  supportsSchemaConstraints(): boolean;\n  supportsSchemaMultiAlter(): boolean;\n  supportsSequences(): boolean;\n  quoteIdentifier(field: string): string;\n  dropTable(meta: EntityMetadata): string;\n  indexForeignKeys(): boolean;\n\n}\n")),Object(i.b)("h2",{id:"connection"},"Connection"),Object(i.b)("p",null,"Next part is connection wrapper, that will be responsible for querying the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Connection } from 'mikro-orm';\n\nexport class MyCustomConnection extends Connection {\n  \n  // implement abstract methods\n  connect(): Promise<void>;\n  isConnected(): Promise<boolean>;\n  close(force?: boolean): Promise<void>;\n  getDefaultClientUrl(): string;\n  execute(query: string, params?: any[], method?: 'all' | 'get' | 'run'): Promise<QueryResult | any | any[]>;\n\n}\n")),Object(i.b)("h2",{id:"driver"},"Driver"),Object(i.b)("p",null,"Last part is driver, that is responsible for using the connection to persist changes to\ndatabase. If you are building SQL driver, it might be handy to extend ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractSqlDriver"),",\nif not, extend ",Object(i.b)("inlineCode",{parentName:"p"},"DatabaseDriver")," abstract class. "),Object(i.b)("p",null,"If you want to have absolute control, you can implement the whole driver yourself via\n",Object(i.b)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { DatabaseDriver } from 'mikro-orm';\n\nexport class MyCustomDriver extends DatabaseDriver {\n\n  // initialize connection and platform\n  protected readonly connection = new MyCustomConnection(this.config);\n  protected readonly platform = new MyCustomPlatform;\n\n  // and implement abstract methods\n  find<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, populate?: string[], orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]>;\n  findOne<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | string, populate: string[]): Promise<T | null>;\n  nativeInsert<T extends AnyEntityType<T>>(entityName: string, data: EntityData<T>): Promise<QueryResult>;\n  nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey, data: EntityData<T>): Promise<QueryResult>;\n  nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey): Promise<QueryResult>;\n  count<T extends AnyEntity>(entityName: string, where: FilterQuery<T>): Promise<number>;\n\n}\n")))}m.isMDXComponent=!0},1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(y,s(s({ref:t},l),{},{components:n})):a.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);