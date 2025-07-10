// @ts-check
const { ignores } = require('./eslint/ignores');

const eslint = require('@eslint/js');
const tsEslint = require('typescript-eslint');
const angular = require('angular-eslint');
const stylistic = require('@stylistic/eslint-plugin');
const perfectionist = require('eslint-plugin-perfectionist');
const jasmine = require('eslint-plugin-jasmine');
const importPlugin = require('eslint-plugin-import');
const boundariesPlugin = require('eslint-plugin-boundaries');

const { angularRules, angularTemplateRules} = require("./eslint/angular.plugin");
const { boundarySettings, boundaryRules } = require('./eslint/boundaries.plugin');
const { eslintRules } = require("./eslint/eslint.plugin");
const { stylisticRules } = require("./eslint/stylistic.plugin");
const { perfectionistRules } = require("./eslint/perfectionist.plugin");
const { typescriptRules } = require("./eslint/typescript.plugin");
const { importRules } = require("./eslint/import.plugin");
const { jasmineRules } = require("./eslint/jasmine.plugin");

module.exports = tsEslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      ...angular.configs.tsAll
    ],
    ignores,
    processor: angular.processInlineTemplates,
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...angularRules,
      ...eslintRules,
      ...typescriptRules,
    },
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.all,
      ...tsEslint.configs.stylistic,
    ],
  },
  {
    files: ['**/*.ts'],
    ignores,
    extends: [
      perfectionist.configs['recommended-alphabetical'],
    ],
    rules: {
      ...perfectionistRules,
    },
  },
  {
    files: ['**/*.ts'],
    ignores,
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      ...importRules,
    },
  },
  {
    files: ['**/*.ts'],
    ignores,
    extends: [
      stylistic.configs['disable-legacy'],
      stylistic.configs['all-flat'],
    ],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylisticRules,
    },
  },
  {
    files: ['**/*.ts'],
    ignores,
    extends: [boundariesPlugin.configs.strict],
    settings: {
      ...boundarySettings,
    },
    plugins: {
      'boundaries': boundariesPlugin,
    },
    rules: {
      ...boundaryRules,
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.tsAll,
      ...angular.configs.templateAll,
    ],
    rules: {
      ...angularTemplateRules,
    }
  },
  {
    files: ['**/*.spec.ts'],
    extends: [jasmine.configs.recommended],
    plugins: { jasmine },
    rules: {
      ...jasmineRules,
    }
  },
);
