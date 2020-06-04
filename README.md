# cy-fy

Cypress starter pack for UI and API automation testing. Simple and neat folder structure in combination with cucumber and typescript will help you write test faster.

## Get started

#### System Requirement

- Git (download form [here](https://git-scm.com/downloads))
- Node (download from [here](https://nodejs.org/en/download/))
- Java Run Time (download from [here](https://www.oracle.com/in/java/technologies/javase-downloads.html))
- Chrome, Firefox and Edge

#### Project setup

- Git clone the project
- install dependencies by `npm ci`

#### Test configuration setup

#### Test configuration

- UI test environment file is located at `config/ui.config.json`
- API test environment file is located at `config/api.config.json`

## Run Tests

#### Run UI test scenarios

```js
// this will clean and run the UI cucumber scenarios in headless mode
npm run cy:e2e

// At the time of develop test code, you may want to see and debug the execution
npm run cy:ui:dev
```

#### Run tests in multiple browsers

```js
// by-default test will be triggered in Electron
npm run cy:ui:run

// to run in chrome
npm run cy:ui:run -- --browser chrome

// to run in firefox
npm run cy:ui:run -- --browser firefox

// to run in edge
npm run cy:ui:run -- --browser edge
```

#### Run API test scenarios

```js
npm run cy:api
```

## Generate Reports

As this project deals with both API and UI, reports will be generated differently rather dumping everything into the same file.

```js
// to generate UI allure reports
npm run report:ui

// to generate API allure reports
npm run report:api
```

## Lint test codes

Linting is a great way to maintain coding standards and quality across the project. Here we use ESLint to ensure the same.

```js
npm run lint
```

## Folder structure

```bash
├── cypress
│   ├── fixtures
│   ├── integration
│   │  ├── api
│   │      ├── **/*.spec.ts
│   │  ├── ui
│   │      ├── pages
│   │      ├── specs
│   ├── plugins
│   ├── support
```

- _**fixures**_: fixtures are used as external pieces of static data that can be used by your tests. Read more [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Fixture-Files)
- _**plugins**_: plugin file contains the helper libraries to achieve a specific tasks. Different cypress plugins can be found [here](https://docs.cypress.io/plugins/index.html)
- _**support**_: By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file.
- _**integration**_: integration folder contains the actual tests. The ui test scenarios are stored in `ui` folder. `specs` folder contains all test files. `pages` folder contains all page actions. `api` folder contains all api test cases.

## Quick guide to write tests

## Generate reports

Reports will be generated separately for API and UI test cases but will have the same essence of Allure.

![allure-report](./docs/allure-report.png)
