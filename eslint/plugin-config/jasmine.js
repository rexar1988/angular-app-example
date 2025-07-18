const jasmine = require('eslint-plugin-jasmine');

module.exports = {
  files: ['**/*.spec.ts'],
  extends: [jasmine.configs.recommended],
  plugins: { jasmine },
  rules: {
    'max-lines-per-function': 'off',
    'max-statements': ['error', 20],
    'jasmine/new-line-before-expect': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',
  },
};
