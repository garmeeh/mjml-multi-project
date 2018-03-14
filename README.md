# Multi Project Workflow - MJML

## Getting started:

```
git clone git@github.com:garmeeh/mjml-multi-project.git
yarn install
```

This will initialize the project with a sample project (cuppas).

## Commands available:

```
$ yarn compile
```

This will prompt you to pick a project that you would like to compile.

```
$ yarn compile-all
```

As the name suggests this will compile all of your projects. This is handy if you are integrating with a CI.

```
$ yarn watch
```

This will allow you to work on an individual project and it will auto compile your templates on file change/save.

## Adding a new project

To your another project to work on:

1.  Create a new folder at the root, using lowercase and no spaces
2.  In this folder you will need the following directories:

```
├── newproject/                     * new project
 |   ├── common                     * directory to hold partial includes for templates
 |   ├── COMPILED_TEMPLATES         * output folder for this projects templates (.html)
 |   ├── templates                  * mjml template files
```

3.  Add the project to the projects array in `projects.config.js`

**Project Structure**

```
mjml-multi-project/
 ├── cuppas/                        * example project
 |   ├── common                     * directory to hold partial includes for templates
 |   ├── COMPILED_TEMPLATES         * output folder for this projects templates (.html)
 |   ├── templates                  * mjml template files
 │
 ├── scripts/
 |   ├── index.js                   *
 |   ├── compile.js                 *
 │   ├── inquirer.js                *
 │   ├── publish.js                 *
 |   ├── watch.js                   *
 │
 ├── tools/                         * helper tools for running the project
 |   ├── logger.js                  * adds a touch of colour to console logs
 |
 ├── .babelrc                       * https://babeljs.io/docs/usage/babelrc/
 ├── .editorconfig                  * http://editorconfig.org/
 ├── .eslintrc                      * https://eslint.org/docs/user-guide/configuring
 ├── .gitignore                     * https://git-scm.com/docs/gitignore
 ├── package.json                   * https://docs.npmjs.com/files/package.json
 ├── projects.config.js             * Configuration file for this project
 └──
```

## TODO

* Add publish script which will give options of uploading templates to API
* Add tests for compile script
* Add CLI to create new projects

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/13333582?v=4" width="100px;"/><br /><sub><b>Gary Meehan</b></sub>](https://github.com/garmeeh)<br />[💬](#question-garmeeh "Answering Questions") [📝](#blog-garmeeh "Blogposts") [💻](https://github.com/garmeeh/mjml-multi-project/commits?author=garmeeh "Code") [🎨](#design-garmeeh "Design") [📖](https://github.com/garmeeh/mjml-multi-project/commits?author=garmeeh "Documentation") [💡](#example-garmeeh "Examples") [🤔](#ideas-garmeeh "Ideas, Planning, & Feedback") [🚇](#infra-garmeeh "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/garmeeh/mjml-multi-project/commits?author=garmeeh "Tests") [🔧](#tool-garmeeh "Tools") [✅](#tutorial-garmeeh "Tutorials") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!