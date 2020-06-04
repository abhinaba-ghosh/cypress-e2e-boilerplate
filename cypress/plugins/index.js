// cypress/plugins/index.js
/* eslint-disable */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const webpackPreprocessor = require('../../webpack.config');

module.exports = on => {
  on('file:preprocessor', webpackPreprocessor);
};

module.exports = (on, config) => {
  allureWriter(on, config);
};
