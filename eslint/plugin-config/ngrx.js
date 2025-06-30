const ngrxEslint = require('@ngrx/eslint-plugin/v9');
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ['**/*.ts'],
    extends: [...ngrxEslint.configs.all],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {},
  },
  {
    files: ['**/*.effects.ts'],
    rules: {
      'arrow-body-style': 'off',
    },
  }
];
