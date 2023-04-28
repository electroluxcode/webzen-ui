// npm install babel-eslint --save
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    //   'plugin:vue/essential', //加了这个才能当作vue来进行解析，不然只会当成js来进行解析 eslint-plugin-react
  ],

  //不加这个会报错Parsing error: The keyword 'import' is reserved
  parserOptions: {
    // 指定解析器 parser
    ecmaVersion: 8,
    sourceType: 'module',
    // "parser": 'babel-eslint',
    // sourceType: 'module',
    // ecmaVersion: 12,
    // allowImportExportEverywhere: true, // 不限制eslint对import使用位置
  },
  settings: {},
  // 取消没必要的校验 0 是 不报错 ， 1是warn 2 是punishing

  // "off"或者0    //关闭规则关闭
  // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
  // "error"或者2    //把规则作为一个错误（退出代码触发时为1）
  rules: {
    // "camelcase": ["error", { "allow": ["aa_bb"] }],  // 属性名
    // "max-lines": ["error", {"max": 20, "skipComments": true}], // 每一个文件最多的行数
    // "no-console": 2,//禁止使用console

    // "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    // "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    // "no-multi-spaces": 1,//不能用多余的空格

    // "indent": [1, 4],//缩进风格 缩进四个空格
    // "max-lines-per-function": [0, { "max": 2 }], // 指定每个function最多多少行
    'no-unused-vars': 2, //没被使用
    'consistent-return': 0, // 有函数返回值
    'no-underscore-dangle': 0, // 不允许有下划线
    'no-plusplus': 1, // 不能用++
    'no-eval': 0, // 不能用eval
    'linebreak-style': [0, 'error', 'window'], // 换行风格
    camelcase: 'warn', //像是xx_xx这种会报错
  },
  // 这里可以配置具体后缀的规则
  overrides: [
    {
      files: ['*.js'],
      // extends: ['alloy'],
      rules: {
        'no-unused-vars': 0, //没被使用
      },
    },
  ],
};
