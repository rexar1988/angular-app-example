const perfectionistEslint = require('eslint-plugin-perfectionist');
const ignores = require('../ignores.js');

module.exports = {
  files: ['**/*.ts'],
  ignores,
  extends: [
    perfectionistEslint.configs['recommended-alphabetical'],
  ],
  rules: {
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        newlinesBetween: 'ignore',
        internalPattern: ['^@app/'],
        groups: [
          'type',
          ['builtin', 'external'],
          ['internal-type', 'internal'],
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
      },
    ],
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-objects': 'off',
  },
};
