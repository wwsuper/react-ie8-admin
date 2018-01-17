// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-unused-vars":0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-return-assign": 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    "keyword-spacing":0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": 0,
    // 强制在块之前使用一致的空格
    "space-before-blocks": [0, "always"],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi": 0,
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": [0, "always"],
    // 禁止不必要的分号
    "no-extra-semi": 0
  }
}
