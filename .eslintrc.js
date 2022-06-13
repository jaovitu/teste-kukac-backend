module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'no-promise-executor-return': 'off',
    'padded-blocks': 'off',
    'object-curly-newline': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    camelcase: 'off',
  },
};
