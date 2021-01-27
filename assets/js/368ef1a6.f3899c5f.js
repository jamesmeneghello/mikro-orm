(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||d[O]||b;return a?r.a.createElement(j,i(i({ref:t},m),{},{components:a})):r.a.createElement(j,i({ref:t},m))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<b;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},301:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"migrationcommandfactory",title:"Class: MigrationCommandFactory",sidebar_label:"MigrationCommandFactory"},i={unversionedId:"api/classes/migrationcommandfactory",id:"version-4.3/api/classes/migrationcommandfactory",isDocsHomePage:!1,title:"Class: MigrationCommandFactory",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/migrationcommandfactory.md",slug:"/api/classes/migrationcommandfactory",permalink:"/docs/4.3/api/classes/migrationcommandfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/migrationcommandfactory.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611747804,sidebar_label:"MigrationCommandFactory",sidebar:"version-4.3/API",previous:{title:"Class: Migration",permalink:"/docs/4.3/api/classes/migration"},next:{title:"Class: MigrationGenerator",permalink:"/docs/4.3/api/classes/migrationgenerator"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"configureCreateCommand",id:"configurecreatecommand",children:[]},{value:"configureMigrationCommand",id:"configuremigrationcommand",children:[]},{value:"configureUpDownCommand",id:"configureupdowncommand",children:[]},{value:"create",id:"create",children:[]},{value:"getUpDownOptions",id:"getupdownoptions",children:[]},{value:"getUpDownSuccessMessage",id:"getupdownsuccessmessage",children:[]},{value:"handleCreateCommand",id:"handlecreatecommand",children:[]},{value:"handleListCommand",id:"handlelistcommand",children:[]},{value:"handleMigrationCommand",id:"handlemigrationcommand",children:[]},{value:"handlePendingCommand",id:"handlependingcommand",children:[]},{value:"handleUpDownCommand",id:"handleupdowncommand",children:[]}]},{value:"Object literals",id:"object-literals",children:[{value:"DESCRIPTIONS",id:"descriptions",children:[]}]}],m={toc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MigrationCommandFactory"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"configurecreatecommand"},"configureCreateCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"configureCreateCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Argv): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L57"}),"packages/cli/src/commands/MigrationCommandFactory.ts:57"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argv")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"configuremigrationcommand"},"configureMigrationCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"configureMigrationCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Argv, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"),"): Argv","<","{}>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L27"}),"packages/cli/src/commands/MigrationCommandFactory.ts:27"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argv")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Argv","<","{}>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"configureupdowncommand"},"configureUpDownCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"configureUpDownCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Argv, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L39"}),"packages/cli/src/commands/MigrationCommandFactory.ts:39"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argv")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"create"),"<","U>(",Object(b.b)("inlineCode",{parentName:"p"},"command"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"),"): CommandModule","<","unknown, U> & { builder: (args: Argv) => Argv","<","U> ; handler: (args: Arguments","<","U>) => Promise","<","void>  }"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L18"}),"packages/cli/src/commands/MigrationCommandFactory.ts:18"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," CommandModule","<","unknown, U> & { builder: (args: Argv) => Argv","<","U> ; handler: (args: Arguments","<","U>) => Promise","<","void>  }"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getupdownoptions"},"getUpDownOptions"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getUpDownOptions"),"(",Object(b.b)("inlineCode",{parentName:"p"},"flags"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#cliupdownoptions"}),"CliUpDownOptions"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L144"}),"packages/cli/src/commands/MigrationCommandFactory.ts:144"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"flags")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#cliupdownoptions"}),"CliUpDownOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getupdownsuccessmessage"},"getUpDownSuccessMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getUpDownSuccessMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"up",'"'," ","|"," ",'"',"down",'"',", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"),"): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L156"}),"packages/cli/src/commands/MigrationCommandFactory.ts:156"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"up",'"'," ","|"," ",'"',"down",'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migrateoptions"}),"MigrateOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlecreatecommand"},"handleCreateCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"handleCreateCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"migrator"),": Migrator, ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#options"}),"Options"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": Configuration): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L129"}),"packages/cli/src/commands/MigrationCommandFactory.ts:129"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrator")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlelistcommand"},"handleListCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"handleListCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"migrator"),": Migrator): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L119"}),"packages/cli/src/commands/MigrationCommandFactory.ts:119"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrator")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlemigrationcommand"},"handleMigrationCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"handleMigrationCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#options"}),"Options"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"),"): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L80"}),"packages/cli/src/commands/MigrationCommandFactory.ts:80"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlependingcommand"},"handlePendingCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"handlePendingCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"migrator"),": Migrator): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L110"}),"packages/cli/src/commands/MigrationCommandFactory.ts:110"))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrator")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handleupdowncommand"},"handleUpDownCommand"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"handleUpDownCommand"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#options"}),"Options"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"migrator"),": Migrator, ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"),"): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L103"}),"packages/cli/src/commands/MigrationCommandFactory.ts:103"))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments","<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrator")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#migratormethod"}),"MigratorMethod"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("h2",{id:"object-literals"},"Object literals"),Object(b.b)("h3",{id:"descriptions"},"DESCRIPTIONS"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"DESCRIPTIONS"),": object"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/MigrationCommandFactory.ts#L10"}),"packages/cli/src/commands/MigrationCommandFactory.ts:10"))),Object(b.b)("h4",{id:"properties"},"Properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"create")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Create new migration with current schema diff"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"down")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Migrate one step down"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"List all executed migrations"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"pending")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"List all pending migrations"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"up")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Migrate up to the latest version"')))))}l.isMDXComponent=!0}}]);