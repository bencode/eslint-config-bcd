exports = module.exports = require('eslint-config-bce');


Object.assign(exports, {
  parser: 'babel-eslint',

  plugins: [
    'react'
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true,
    mocha: true
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],
});


Object.assign(exports.rules, {
  // 方便import 语句对齐
  'no-multi-spaces': 0,

  // react
  'react/prop-types': 1,
  'react/display-name': 1
});
