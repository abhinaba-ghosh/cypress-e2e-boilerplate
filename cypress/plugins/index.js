// cypress/plugins/index.js
/* eslint-disable */

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', { project: '../tsconfig.json' }]);

  on('file:preprocessor', cucumber(options));
  AllureWriter(on, config);
  return config;
};
