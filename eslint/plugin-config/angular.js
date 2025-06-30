const angularEslint = require('angular-eslint');
const tsParser = require("@typescript-eslint/parser")
const ignores = require('../ignores.js');
const globals = require("globals");

module.exports = {
  files: ['**/*.ts'],
  extends: [...angularEslint.configs.tsAll],
  ignores,
  processor: angularEslint.processInlineTemplates,
  languageOptions: {
    globals: globals.browser,
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      projectService: true,
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    '@angular-eslint/no-developer-preview': 'warn',
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'showcase',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'showcase',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/component-class-suffix': [
      'error',
      {
        suffixes: ['']
      }
    ],
    '@angular-eslint/directive-class-suffix': [
      'error',
      {
        suffixes: ['']
      }
    ],
    '@angular-eslint/use-injectable-provided-in': 'off',
  },
};
