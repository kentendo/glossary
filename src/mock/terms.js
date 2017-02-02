import { sortByTitle } from '../util/sorts'

const terms = [
    {
        id: 0,
        expanded: false,
        title: 'HTML',
        subtitle: 'HyperText Markup Language',
        definition: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage.'
    },
    {
        id: 1,
        expanded: false,
        title: 'CSS',
        subtitle: 'Cascading Style Sheets',
        definition: 'Cascading Style Sheets (CSS) are a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
    },
    {
        id: 2,
        expanded: false,
        title: 'JS',
        subtitle: 'JavaScript AKA ECMAScript',
        definition: 'JavaScript (JS) is a lightweight, interpreted, programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB.'
    },
    {
        id: 3,
        expanded: false,
        title: 'DOM',
        subtitle: 'Document Object Model',
        definition: 'The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document as a tree.'
    },
    {
        id: 4,
        expanded: false,
        title: 'HTTP',
        subtitle: 'HyperText Transfer Protocol',
        definition: 'The HyperText Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web. HyperText is structured text that uses logical links (hyperlinks) between nodes containing text.'
    },
    {
        id: 5,
        expanded: false,
        title: 'XML',
        subtitle: 'Extensible Markup Language',
        definition: 'Extensible Markup Language (XML) is a simple, very flexible text format derived from SGML (ISO 8879). Originally designed to meet the challenges of large-scale electronic publishing, XML is also playing an increasingly important role in the exchange of a wide variety of data on the Web and elsewhere.'
    },
    {
        id: 6,
        expanded: false,
        title: 'JavaScript Frameworks',
        subtitle: '',
        definition: 'Angular, React, Redux, Backbone, Meteor, Ember, Dojo, jQuery, jQueryUI, Knockout, Vue, Yui'
    },
    {
        id: 7,
        expanded: false,
        title: 'Front-end Frameworks',
        subtitle: '',
        definition: 'Bootstrap, Semantic-UI, Foundation, Material UI, Materialize, Pure, Skeleton, UIKit, Milligram, Susy'
    },
    {
        id: 8,
        expanded: false,
        title: 'CSS Preprocessors',
        subtitle: '',
        definition: 'Sass, Less, Stylus, CSS-Crush, Myth, Rework, Clay, DtCSS, CSS Preprocessor, Switch CSS'
    },
    {
        id: 9,
        expanded: false,
        title: 'JavaScript Temlate Engines',
        subtitle: '',
        definition: 'Mustache, Handlebars, doT, Dust, EJS, Underscore, Jade, ECT, Template7, jTemplates'
    },
    {
        id: 10,
        expanded: false,
        title: 'CRM',
        subtitle: 'Customer Relationship Management',
        definition: 'Customer relationship management (CRM) is a term that refers to practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle, with the goal of improving business relationships with customers, assisting in customer retention and driving sales growth.'
    },
    {
        id: 11,
        expanded: false,
        title: 'CMS',
        subtitle: 'Content Management System',
        definition: 'A content management system (CMS) is a computer application that supports the creation and modification of digital content. It is often used to support multiple users working in a collaborative environment. AKA ( Wordpress, Drupal, Joomla, Expression Engine )'
    },
    {
        id: 12,
        expanded: false,
        title: 'PHP Frameworks',
        subtitle: '',
        definition: 'Laravel, Codeigniter, CakePHP, Symfony, Zend Framework, Phalcon, Yii, Aura, Slim, FuelPHP, PHPixie'
    },
    {
        id: 13,
        expanded: false,
        title: 'Python Frameworks',
        subtitle: '',
        definition: 'Django, Flask, Pyramid, Nagare, web2py, Bottle'
    },
    {
        id: 14,
        expanded: false,
        title: 'Node.js',
        subtitle: 'JaveScript for your server',
        definition: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.'
    },
    {
        id: 15,
        expanded: false,
        title: 'Bootstrap',
        subtitle: 'Designed for everyone, everywhere.',
        definition: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.'
    },
    {
        id: 16,
        expanded: false,
        title: 'Sass',
        subtitle: 'Syntactically Awesome Style Sheets',
        definition: 'An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.'
    },
    {
        id: 17,
        expanded: false,
        title: 'Less',
        subtitle: 'Extension to CSS',
        definition: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.'
    },
    {
        id: 18,
        expanded: false,
        title: 'Haml',
        subtitle: 'Describes HTML',
        definition: 'Haml is a markup language that’s used to cleanly and simply describe the HTML of any web document without the use of inline code. Haml functions as a replacement for inline page templating systems such as PHP, ASP, and ERB, the templating language used in most Ruby on Rails applications.'
    },
    {
        id: 19,
        expanded: false,
        title: 'CoffeeScript',
        subtitle: 'It\'s just JavaScript',
        definition: 'CoffeeScript is a little language that compiles into JavaScript.'
    },
    {
        id: 20,
        expanded: false,
        title: 'Dojo',
        subtitle: 'Dojo Toolkit',
        definition: 'A JavaScript toolkit that saves you time and scales with your development process. Provides everything you need to build a Web app. Language utilities, UI components, and more, all in one place, designed to work together perfectly.'
    },
    {
        id: 21,
        expanded: false,
        title: 'Apache Cordova',
        subtitle: 'Mobile apps with HTML, CSS & JS',
        definition: 'Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.'
    },
    {
        id: 22,
        expanded: false,
        title: 'Ionic',
        subtitle: 'Mobile apps with HTML, CSS, JS, and Angular',
        definition: 'The top open source framework for building amazing mobile apps. Ionic is the beautiful, free and open source mobile SDK for developing native and progressive web apps with ease.'
    },
    {
        id: 23,
        expanded: false,
        title: 'Bower',
        subtitle: 'A package manager for the web',
        definition: 'Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.'
    },
    {
        id: 24,
        expanded: false,
        title: 'Npm',
        subtitle: 'Build amazing things',
        definition: 'npm is the package manager for JavaScript. Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways.'
    },
    {
        id: 25,
        expanded: false,
        title: 'Yarn',
        subtitle: 'FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT.',
        definition: 'Ultra Fast. Yarn caches every package it downloads so it never needs to download it again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.'
    },
    {
        id: 26,
        expanded: false,
        title: 'Angular',
        subtitle: 'HTML enhanced for web apps!',
        definition: 'AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries.'
    },
    {
        id: 27,
        expanded: false,
        title: 'Ansible',
        subtitle: 'AUTOMATION FOR EVERYONE',
        definition: 'Deploy apps. Manage systems. Crush complexity. Ansible helps you build a strong foundation for DevOps.'
    },
    {
        id: 28,
        expanded: false,
        title: 'React',
        subtitle: 'A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES',
        definition: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
    {
        id: 29,
        expanded: false,
        title: 'Python',
        subtitle: 'Quick & Easy to Learn',
        definition: 'Python is a widely used high-level programming language used for general-purpose programming, created by Guido van Rossum and first released in 1991.'
    },
    {
        id: 30,
        expanded: false,
        title: 'PHP',
        subtitle: 'PHP: Hypertext Preprocessor',
        definition: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.'
    },
    {
        id: 31,
        expanded: false,
        title: 'ASP.NET Framework',
        subtitle: 'pronounced Ay Esss Peee dot net',
        definition: 'ASP.NET Web API is a framework that makes it easy to build HTTP services that reach a broad range of clients, including browsers and mobile devices. ASP.NET Web API is an ideal platform for building RESTful applications on the .NET Framework.'
    },
    {
        id: 32,
        expanded: false,
        title: 'React Native',
        subtitle: 'BUILD MOBILE APPS WITH REACT',
        definition: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.'
    },
    {
        id: 33,
        expanded: false,
        title: 'Chef',
        subtitle: 'Automate your infrastructure',
        definition: 'Whether you have five or five thousand servers, Chef lets you manage them all by turning infrastructure into code. Infrastructure described as code is flexible, versionable, human-readable, and testable.'
    },
    {
        id: 34,
        expanded: false,
        title: 'D3',
        subtitle: 'Data-Driven Documents',
        definition: 'D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.'
    },
    {
        id: 35,
        expanded: false,
        title: 'Highcharts',
        subtitle: 'Make your data come alive',
        definition: 'Highcharts makes it easy for developers to set up interactive charts in their web pages'
    },
    {
        id: 36,
        expanded: false,
        title: 'Chai',
        subtitle: 'Chai Assertion Library',
        definition: 'Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.'
    },
    {
        id: 37,
        expanded: false,
        title: 'Docker',
        subtitle: 'BUILD, SHIP, RUN',
        definition: 'Docker is the world’s leading software containerization platform. Docker containers wrap a piece of software in a complete filesystem that contains everything needed to run: code, runtime, system tools, system libraries – anything that can be installed on a server. This guarantees that the software will always run the same, regardless of its environment.'
    },
    {
        id: 38,
        expanded: false,
        title: 'Express',
        subtitle: 'Web framework for Node.js',
        definition: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
    },
    {
        id: 39,
        expanded: false,
        title: 'Grunt',
        subtitle: 'The JavaScript Task Runner',
        definition: 'Grunt is a JavaScript task runner, a tool used to automatically perform frequently used tasks such as minification, compilation, unit testing, linting, etc. It uses a command-line interface to run custom tasks defined in a file (known as a Gruntfile).'
    },
    {
        id: 40,
        expanded: false,
        title: 'Gulp',
        subtitle: 'The streaming build system.',
        definition: 'Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file ...'
    },
    {
        id: 41,
        expanded: false,
        title: 'Lodash',
        subtitle: 'JavaScript Utility Library',
        definition: 'A JavaScript utility library delivering consistency, modularity, performance, & extras. Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.'
    },
    {
        id: 42,
        expanded: false,
        title: 'Mocha',
        subtitle: 'simple, flexible, fun',
        definition: 'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.'
    },
    {
        id: 43,
        expanded: false,
        title: 'Modernizr',
        subtitle: 'the feature detection library for HTML5/CSS3',
        definition: 'Modernizr tells you what HTML, CSS and JavaScript features the user’s browser has to offer.'
    },
    {
        id: 44,
        expanded: false,
        title: 'TDD',
        subtitle: 'Test Driven Development',
        definition: 'Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements.'
    },
    {
        id: 45,
        expanded: false,
        title: 'Sinon.JS',
        subtitle: 'Test utilities',
        definition: 'Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.'
    },
    {
        id: 46,
        expanded: false,
        title: 'Nginx',
        subtitle: 'HTTP server and reverse proxy',
        definition: 'NGINX is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server. NGINX is known for its high performance, stability, rich feature set, simple configuration, and low resource consumption.'
    },
    {
        id: 47,
        expanded: false,
        title: 'Apache',
        subtitle: 'Apache HTTP Server Project',
        definition: 'The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP server for modern operating systems including UNIX and Windows. The goal of this project is to provide a secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards.'
    },
    {
        id: 48,
        expanded: false,
        title: 'MySQL',
        subtitle: 'The world\'s most popular open source database',
        definition: 'MySQL is the world\'s most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications.'
    },
    {
        id: 49,
        expanded: false,
        title: 'MongoDB',
        subtitle: 'for Giant Ideas',
        definition: 'MongoDB (from humongous) is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.'
    },
    {
        id: 50,
        expanded: false,
        title: 'Relational Databases',
        subtitle: 'SQLite, MySQL, MariaDB, MsSQL, Oracle, PostgreSQL',
        definition: 'A relational database is a digital database whose organization is based on the relational model of data, as proposed by E. F. Codd in 1970.[1] The various software systems used to maintain relational databases are known as a relational database management system (RDBMS). Virtually all relational database systems use SQL (Structured Query Language) as the language for querying and maintaining the database.'
    },
    {
        id: 51,
        expanded: false,
        title: 'NoSQL Databases',
        subtitle: 'MongoDB, Cassandra, Redis, DynamoDB, HBase, Neo4j',
        definition: 'A NoSQL (originally referring to "non SQL", "non relational" or "not only SQL")[1] database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases.'
    },
    {
        id: 52,
        expanded: false,
        title: 'HTML5',
        subtitle: 'audio, canvas, video, semantic, header, footer, nav ...',
        definition: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts: It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows more diverse and powerful Web sites and applications.'
    },
    {
        id: 53,
        expanded: false,
        title: 'ServerSide Rendering',
        subtitle: 'AKA Isomorphic AKA Universal JavaScript?',
        definition: 'The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests our app. With server-side rendering, your initial request loads the page, layout, CSS, JavaScript and content.'
    },
    {
        id: 54,
        expanded: false,
        title: 'Redux',
        subtitle: 'Predictable state container for JavaScript apps',
        definition: 'It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.'
    },
    {
        id: 55,
        expanded: false,
        title: 'AJAX',
        subtitle: 'Asynchronous JavaScript and XML',
        definition: 'In a nutshell, it is the use of the XMLHttpRequest object to communicate with server-side scripts. It can send as well as receive information in a variety of formats, including JSON, XML, HTML, and even text files.'
    },
    {
        id: 56,
        expanded: false,
        title: 'JSON',
        subtitle: 'JavaScript Object Notation',
        definition: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.'
    },
    {
        id: 57,
        expanded: false,
        title: 'JSON',
        subtitle: 'JavaScript Object Notation',
        definition: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.'
    },
    {
        id: 58,
        expanded: false,
        title: 'Webpack',
        subtitle: 'webpack module bundler',
        definition: 'Existing module bundlers are not well suited for big projects (big single page applications). The most pressing reason for developing another module bundler was Code Splitting and that static assets should fit seamlessly together through modularization. Webpack 2 has advanced features including tree shaking and route based code splitting.'
    },
    {
        id: 59,
        expanded: false,
        title: 'RequireJS',
        subtitle: 'A JAVASCRIPT MODULE LOADER',
        definition: 'RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node.'
    },
    {
        id: 60,
        expanded: false,
        title: 'ES6',
        subtitle: 'ES5, ES6, ES.Harmony, ES7, ES.Next',
        definition: 'Currently there are several proposals for new features or syntax to be added to JavaScript. These include decorators, async-await, and static class properties. These are often refered to as ES7, ES2016, or ES.Next features...'
    },
    {
        id: 61,
        expanded: false,
        title: 'Immutable',
        subtitle: 'Immutable collections for JavaScript',
        definition: 'Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic.'
    },
    {
        id: 62,
        expanded: false,
        title: 'TypeScript',
        subtitle: 'a language for application-scale JavaScript.',
        definition: 'TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.'
    },
    {
        id: 63,
        expanded: false,
        title: 'Flow',
        subtitle: 'A STATIC TYPE CHECKER FOR JAVASCRIPT',
        definition: 'Flow uses type inference to find bugs even without type annotations. It precisely tracks the types of variables as they flow through your program.'
    },
    {
        id: 64,
        expanded: false,
        title: 'REST',
        subtitle: 'Representational state transfer',
        definition: 'Representational state transfer (REST) or RESTful Web services are one way of providing interoperability between computer systems on the Internet. REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations.'
    },
    {
        id: 65,
        expanded: false,
        title: 'CRUD',
        subtitle: 'Create, read, update and delete',
        definition: 'In computer programming, create, read, update and delete[1] (as an acronym CRUD) are the four basic functions of persistent storage.[2] Alternate words are sometimes used when defining the four basic functions of CRUD, retrieve instead of read, modify instead of update, or destroy instead of delete.'
    },
    {
        id: 66,
        expanded: false,
        title: 'Markdown',
        subtitle: 'a text-to-HTML conversion tool for web writers',
        definition: 'Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name.'
    },
    {
        id: 67,
        expanded: false,
        title: 'Ruby on Rails',
        subtitle: 'full stack, Web application framework',
        definition: 'RoR home; full stack, Web application framework optimized for sustainable programming productivity, allows writing sound code by favoring convention over ...'
    },
    {
        id: 68,
        expanded: false,
        title: 'RubyGems',
        subtitle: 'gem hosting service',
        definition: 'RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them.'
    },
    {
        id: 69,
        expanded: false,
        title: 'SVG',
        subtitle: 'Scalable Vector Graphics',
        definition: 'Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.'
    },
    {
        id: 70,
        expanded: false,
        title: 'Socket.io',
        subtitle: 'real-time bidirectional event-based communication.',
        definition: 'Aims to make realtime apps possible in every browser and mobile device, blurring the differences between the different transport mechanisms.'
    },
    {
        id: 71,
        expanded: false,
        title: 'XSLT',
        subtitle: 'Extensible Stylesheet Language Transformations',
        definition: 'XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into other XML documents, or other formats such as HTML for web pages, plain text or XSL Formatting Objects, which may subsequently be converted to other formats, such as PDF, PostScript and PNG. XPath is a major element in the XSLT standard. XPath can be used to navigate through elements and attributes in an XML document.'
    },
    {
        id: 72,
        expanded: false,
        title: 'Meteor',
        subtitle: 'Build Apps With JavaScript',
        definition: 'Meteor, or MeteorJS, is a free and open-source JavaScript web framework written using Node.js. Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.'
    },
    {
        id: 73,
        expanded: false,
        title: 'Go',
        subtitle: 'golang',
        definition: 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.'
    },
    {
        id: 74,
        expanded: false,
        title: 'Middleware',
        subtitle: '"software glue"',
        definition: 'Middleware is a general term for software that serves to "glue together" separate, often complex and already existing, programs. Some software components that are frequently connected with middleware include enterprise applications and Web services.'
    },
    {
        id: 75,
        expanded: false,
        title: 'Express Middleware',
        subtitle: 'body-parser, compression, cookie-parser, serve-static ...',
        definition: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.'
    },
    {
        id: 76,
        expanded: false,
        title: 'Lua',
        subtitle: 'The Programming Language Lua',
        definition: 'Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.'
    },
    {
        id: 77,
        expanded: false,
        title: 'Dart',
        subtitle: 'Jump right in.',
        definition: 'Dart is an application programming language that’s easy to learn, easy to scale, and deployable everywhere. Google depends on Dart to make very large apps.'
    },
    {
        id: 78,
        expanded: false,
        title: 'Moment',
        subtitle: '',
        definition: 'Parse, validate, manipulate, and display dates in JavaScript.'
    },
    {
        id: 79,
        expanded: false,
        title: 'Protractor',
        subtitle: 'end to end testing for AngularJS',
        definition: 'Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.'
    },
    {
        id: 80,
        expanded: false,
        title: 'Protractor',
        subtitle: 'end to end testing for AngularJS',
        definition: 'Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.'
    },
    {
        id: 81,
        expanded: false,
        title: 'End to End Testing',
        subtitle: '',
        definition: 'Protractor, Nightwatch, Mocha, CasperJS'
    },
    {
        id: 82,
        expanded: false,
        title: 'Acceptance Testing',
        subtitle: '',
        definition: 'In engineering and its various subdisciplines, acceptance testing is a test conducted to determine if the requirements of a specification or contract are met. It may involve chemical tests, physical tests, or performance tests.'
    },
    {
        id: 83,
        expanded: false,
        title: 'Regression Testing',
        subtitle: '',
        definition: 'Regression testing is a type of software testing that verifies that software previously developed and tested still performs correctly even after it was changed or interfaced with other software. Changes may include software enhancements, patches, configuration changes, etc.'
    },
    {
        id: 84,
        expanded: false,
        title: 'Unit Testing',
        subtitle: '',
        definition: 'Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing can be done manually but is often automated.'
    },
    {
        id: 85,
        expanded: false,
        title: 'BDD',
        subtitle: 'Behavior-Driven Development',
        definition: 'BDD is largely facilitated through the use of a simple domain-specific language (DSL) using natural language constructs (e.g., English-like sentences) that can express the behavior and the expected outcomes.'
    },
    {
        id: 86,
        expanded: false,
        title: 'Flux',
        subtitle: 'APPLICATION ARCHITECTURE FOR BUILDING USER INTERFACES',
        definition: 'Flux is the application architecture that Facebook uses for building client-side web applications. It complements React\'s composable view components by utilizing a unidirectional data flow. It\'s more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.'
    },
    {
        id: 87,
        expanded: false,
        title: 'Linux',
        subtitle: 'an open-source operating system modelled on UNIX.',
        definition: 'Linux. It\'s been around since the mid \'90s, and has since reached a user-base that spans industries and continents. Linux is a Unix-like computer operating system assembled under the model of free and open-source software development and distribution. The defining component of Linux is the Linux kernel, an operating system kernel first released on September 17, 1991 by Linus Torvalds.'
    },
    {
        id: 88,
        expanded: false,
        title: 'Unix',
        subtitle: 'a widely used multiuser operating system.',
        definition: 'Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, developed starting in the 1970s at the Bell Labs research center'
    },
    {
        id: 89,
        expanded: false,
        title: 'CSS3',
        subtitle: 'Cascading Style Sheets',
        definition: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.'
    },
    {
        id: 90,
        expanded: false,
        title: 'DNS',
        subtitle: 'Domain Name System',
        definition: 'The Domain Name System (DNS) is a hierarchical decentralized naming system for computers, services, or any resource connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities.'
    },
    {
        id: 91,
        expanded: false,
        title: 'CDN',
        subtitle: 'Amazon Cloudfront, Akamai, MaxCDN, Rackspace, Cloudflare, EdgeCast',
        definition: 'A content delivery network (CDN) is a system of distributed servers (network) that deliver webpages and other Web content to a user based on the geographic locations of the user, the origin of the webpage and a content delivery server.'
    },
    {
        id: 92,
        expanded: false,
        title: 'Load Balancer',
        subtitle: '',
        definition: 'A load balancer is a device that acts as a reverse proxy and distributes network or application traffic across a number of servers. Load balancers are used to increase capacity (concurrent users) and reliability of applications.'
    },
    {
        id: 93,
        expanded: false,
        title: 'Platform as a Service',
        subtitle: 'PaaS, Cloud Development Platform, AWS, Google App Engine, Heroku ... ',
        definition: 'Platform as a service (PaaS) is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.'
    },
    {
        id: 94,
        expanded: false,
        title: 'Git',
        subtitle: '--everything-is-local',
        definition: 'Git (/ɡɪt/) is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for software development, but it can be used to keep track of changes in any files.'
    },
    {
        id: 95,
        expanded: false,
        title: 'Subversion',
        subtitle: 'Enterprise-class centralized version control for the masses',
        definition: 'Subversion is an open source version control system.'
    },
    {
        id: 96,
        expanded: false,
        title: 'Version Control',
        subtitle: '',
        definition: 'Git, Subversion, CVS, Mercurial'
    },
    {
        id: 97,
        expanded: false,
        title: 'UX',
        subtitle: 'User Experience',
        definition: 'User experience design (UX, UXD, UED or XD) is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction with the product.'
    },
    {
        id: 98,
        expanded: false,
        title: 'UI',
        subtitle: 'User Interface',
        definition: 'The means by which the user and a computer system interact, in particular the use of input devices and software.'
    },
    {
        id: 99,
        expanded: false,
        title: 'IoT',
        subtitle: 'Internet of Things',
        definition: 'The Internet of things (stylised Internet of Things or IoT) is the internetworking of physical devices, vehicles (also referred to as "connected devices" and "smart devices"), buildings, and other items—embedded with electronics, software, sensors, actuators, and network connectivity that enable these objects to collect and exchange data.'
    },
    {
        id: 100,
        expanded: false,
        title: 'SPA',
        subtitle: 'Single-page application',
        definition: 'A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.'
    },
    {
        id: 101,
        expanded: false,
        title: 'Web Browser',
        subtitle: 'Chrome, Firefox, Safari, Internet Explorer, Opera',
        definition: 'A web browser is a software application for retrieving, presenting and traversing information resources on the World Wide Web.'
    },
    {
        id: 102,
        expanded: false,
        title: 'Babel',
        subtitle: 'The compiler for writing next generation JavaScript',
        definition: 'Babel is a JavaScript compiler. Use next generation JavaScript, today.'
    },
    {
        id: 103,
        expanded: false,
        title: 'React Router',
        subtitle: 'A complete routing library for React.',
        definition: 'React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.'
    },
    {
        id: 104,
        expanded: false,
        title: 'CSS Modules',
        subtitle: '',
        definition: 'A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.'
    },
    {
        id: 105,
        expanded: false,
        title: 'Linting',
        subtitle: 'jslint, jshint, jscs, eslint',
        definition: 'A linting tool helps me avoid silly mistakes when writing JavaScript. Despite my many years of experience, I still type variable names incorrectly, make syntax errors and forget to handle my errors properly. A good linting tool, or a linter, will tell me about this before I waste my time—or worse, my client’s time. A good linting tool can also help make sure a project adheres to a coding standard. Airbnb has a very popular linting config.'
    },
    {
        id: 106,
        expanded: false,
        title: 'Hot Reloading',
        subtitle: '',
        definition: 'The idea behind hot reloading is to keep the app running and to inject new versions of the files that you edited at runtime. This way, you don\'t lose any of your state which is especially useful if you are tweaking the UI.'
    },
    {
        id: 107,
        expanded: false,
        title: 'Minification',
        subtitle: '',
        definition: 'Minification (also minimisation or minimization), in computer programming languages and especially JavaScript, is the process of removing all unnecessary characters from source code without changing its functionality.'
    },
    {
        id: 108,
        expanded: false,
        title: 'Promises',
        subtitle: 'available now, or in the future, or never',
        definition: 'The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject. Like throw in plain old JavaScript, it\'s customary, but not required, to reject with an Error object.'
    },
    {
        id: 109,
        expanded: false,
        title: 'Code Coverage',
        subtitle: 'Test Coverage, Istanbul',
        definition: 'In computer science, code coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs. A program with high code coverage, measured as a percentage, has had more of its source code executed during testing which suggests it has a lower chance of containing undetected software bugs compared to a program with low code coverage.'
    },
    {
        id: 110,
        expanded: false,
        title: 'Reselect',
        subtitle: 'Selector library for Redux',
        definition: 'Selectors can compute derived data, allowing Redux to store the minimal possible state.'
    },
    {
        id: 111,
        expanded: false,
        title: 'PostCSS',
        subtitle: 'Transforming styles with JS plugins',
        definition: 'PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.'
    }
];

export default terms.sort(sortByTitle);