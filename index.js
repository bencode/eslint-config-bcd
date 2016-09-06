exports = module.exports = require('eslint-config-bce');


Object.assign(exports, {
  parser: 'babel-eslint',

  env: {
    node:true,
    browser: true,
    es6: true
  }
});


Object.assign(exports.rules, {
  // 方便import 语句对齐
  'no-multi-spaces': 0
});
