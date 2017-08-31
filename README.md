# Rescue POC
Rescue POC is a single-page-app that utilizes Facebook's [React](https://facebook.github.io/react), and Google's [Material Design](https://material.io). It utilizes the latest [ECMAScript](https://github.com/lukehoban/es6features) standard, ES6, with [Babel](https://babeljs.io) transpilation tool, and [Webpack 2](https://webpack.github.io) module bundler.

### Core Libraries
* [React](https://facebook.github.io/react) is a declarative, efficient, and flexible JavaScript library for building user interfaces.
* [React Router](https://github.com/ReactTraining/react-router) is a declarative routing tool for React.
* [React Intl](https://github.com/yahoo/react-intl) provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.
* Component Libraries
  * [React-MDL](https://react-mdl.github.io/react-mdl) is a set of React components for Material Design Lite.
  * [Material-UI](http://www.material-ui.com) is a set of React components for Material Design Lite.
* [Redux](http://redux.js.org) is a predictable state container for JavaScript apps.
* [React Redux](https://github.com/reactjs/react-redux) helps with using Redux by mapping state to props and function props to dispatching actions.
* [Redux Form](http://redux-form.com) is a higher-order component using react-redux to keep form state in a Redux store.

## Setup Env
* Install [Node](https://nodejs.org/en/download/current).
* Install [YarnPKG](https://yarnpkg.com/en/docs/install).
* Install [Git](https://git-scm.com/downloads) and run these commands to configure it:
  * `> git config --global user.name "{FULL_NAME}"`
  * `> git config --global user.email {EMAIL}`
  * `> git config --global core.autocrlf false`.
  * Refer to [Advanced Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) for additional information.
* Setup [SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
* `git clone https://github.com/NNaidoo/rescue-poc.git`

### NPM Scripts
* `npm start`: install and deploy development server with hot-reload
* `npm run build`: install and deploy production distribution
* `npm run lint`: execute lint on source code with autofix
* `npm test`: execute unit tests with code coverage report

## Git
We utilizes industry best-practices with feature branch workflow via Github Flow. This allows us to accomplish fast-paced, high-quality, parallel development. Feature branch workflow aids our primary objectives, prioritizing user-centric ideals, that our stakeholders and end-users have directed, with stable and always deploy-able source code. For more information about the workflow see [Github Flow](https://guides.github.com/introduction/flow/).

#### Github Flow:
* Create the branch. Make sure it begins with the `feature/`, `hotfix/`, `bugfix/`, `semver/` prefix.
* Add commits
* Open a Pull Request
* Review & Collaborate changes
* Deploy and Test
* Merge

### Workflow Awareness
The following links provide enhanced awareness throughout the App Agile process:
* [Branch Status](https://github.com/NNaidoo/rescue-poc/branches)
* [Pull Request Status](https://github.com/NNaidoo/rescue-poc/pulls)
* [TravisCI Status](https://travis-ci.org/rescue-poc)


#### Merging from Master
Best practice is to perform merging when working tree is clean. Use caution to first commit any unfinished work still desired, or reset git working tree. Choose `> git stash` and save working tree until ready. Alternatively, reset working tree with `> git reset --hard`.

Staying up-to-date with the latest from `master` is beneficial to parallel development. Remote `master` represents the most stable and approved iteration of the product. When working in parallel development, updates to `master` may effect current implementation. Work with the latest from `master` by merging the latest from `master` into  `feature/{name}` as frequently as possible, but only when necessary.

#### Merging from Master Procedure
* `> git reset --hard` or `> git stash`
* `> git checkout master`
* `> git pull`
* `> git checkout "feature/{name}"`
* `> git merge master`
* No Conflicts: Auto-merge Successful
* Conflicts: Resolve Conflicts and run:
  * `> git add .`
  * `> git commit -m "merge master"`
  * `> git push`

#### Merging to Master
* Make sure your feature branch is not behind master. This may be viewed from the [Branch Status](https://github.com/NNaidoo/rescue-poc/branches) view in the Behind/Ahead column.
* Verify that your feature branch builds successfully on [TravisCI Status](https://travis-ci.org/rescue-poc).
* Check your coverage against master (also available on [TravisCI Status](https://travis-ci.org/rescue-poc). Make sure the coverage in your feature branch is greater than or equal to the coverage in master.
* Resolve or reply to all Pull Request comments.
* Use the Merge button on the Pull Request to merge back to master.
* Once the test is successful and no further changes needed for sign off delete the original feature branch.

## Unit Testing
* [Mocha](https://mochajs.org), is a test framework running on [node](http://nodejs.org) and the browser which runs tests serially, mapping uncaught exceptions to the correct test cases.
* [Chai](https://chaijs.com) is a [BDD](https://www.agilealliance.org/glossary/bdd)(Behavior Driven Development) / [TDD](https://en.wikipedia.org/wiki/Test-driven_development), assertion library for [node](http://nodejs.org) and the browser.
* [Sinon](https://sinonjs.org) test spies, stubs and mocks for JavaScript. Works with any unit testing framework.
* [EnzymeComponent](https://github.com/airbnb/enzyme) is a JavaScript testing utility for [React](https://facebook.github.io/react).

## ESLint
We use [Airbnb ESLint rules](https://github.com/airbnb/javascript) for lint/syntax errors, along with [prettier](https://github.com/prettier/prettier) for automated formatting and lint error fixing.

### Exceptions
* [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this) is not always needed in lifecycle/render methods.
* [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md) prevents characters that were meant as JSX escape characters.
* [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) forces .js as the extension for files with JSX.
* [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md) fixes a bug when using `PropTypes.shape`.
* [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) was allowed to be undefined early on.

## Atom
* Install [Atom](https://atom.io)
* Optional: Install Recommended [Packages](https://atom.io/packages)
* Optional: Disable packages for security guide lines and optimal performance

### Install Packages
Find [Packages](https://atom.io/packages) here. However, it is recommended to install packages directly from Atom Package Manager. It can be accessed via `ctrl/cmd+shift+p`. The following packages work with our ecosystem to provide additional awareness and advantages to development workflow:
* autoclose-html
* autocomplete-json
* autocomplete-modules
* busy-signal
* docblockr
* file-icons
* highlight-selected
* html-entities
* html-to-css
* html-to-javascript
* intentions
* language-babel
* linter
* linter-eslint
* linter-htmlhint
* linter-ui-default
* markdown-preview-enhanced
* pigments
* prettier-atom
* terminal-panel
* todo-show

### Disable Packages
Disabling these default packages will further enhance security and performance with Atom:
* about
* autocomplete-atom-api
* dev-live-reload
* encoding-selector
* exception-reporting
* metrics
* styleguide
* timecop
* welcome
