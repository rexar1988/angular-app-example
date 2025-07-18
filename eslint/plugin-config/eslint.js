const eslint = require('@eslint/js');
const tsParser = require("@typescript-eslint/parser");
const globals = require('globals');
const ignores = require('../ignores.js');

module.exports = {
  files: ['**/*.ts'],
  extends: [eslint.configs.recommended],
  ignores,
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
    'complexity': ['error', 5],
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'func-names': ['error', 'as-needed'],
    'id-length': [
      'error',
      {
        min: 3,
        max: 35,
        exceptions: ['x', 'y', 'z', 'id'],
        properties: 'never'
      },
    ],
    'init-declarations': 'off',
    'max-lines': [
      'error',
      {
        max: 500,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', 5],
    'max-params': 'off',
    'new-cap': [
      'error',
      {
        capIsNewExceptions: [
          'Attribute',
          'Component',
          'ContentChild',
          'ContentChildren',
          'Directive',
          'Host',
          'HostBinding',
          'HostListener',
          'Inject',
          'Injectable',
          'Input',
          'NgModule',
          'Optional',
          'Output',
          'Pipe',
          'Self',
          'SkipSelf',
          'ViewChild',
          'ViewChildren',
        ]
      },
    ],
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-negated-condition': 'warn',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    /*
    todo: uncomment if needed
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'date-fns',
            message: 'Please use `modules/date` module instead',
          },
        ],
      },
    ],
    */
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'one-var': ['error', 'never'],
    'prefer-exponentiation-operator': 'warn',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'warn',
    'prefer-object-has-own': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'warn',
    'require-await': 'off',
    'sort-keys': 'off',
    'sort-imports': 'off',
    'symbol-description': 'warn',
  },
};
