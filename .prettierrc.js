module.exports = {
  printWidth: 80,
  // 使用单引号而非双引号；
  singleQuote: true,
  tabWidth: 2,
  proseWrap: 'never',
  // 在语句末尾添加分号；
  Semicolons: true,
  overrides: [{ files: '.prettierrc', options: { parser: 'json' } }],
};
