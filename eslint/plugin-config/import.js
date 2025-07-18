const importEslint = require('eslint-plugin-import');
const ignores = require('../ignores.js');

module.exports = {
  files: ['**/*.ts'],
  ignores,
  extends: [
    importEslint.flatConfigs.recommended,
    importEslint.flatConfigs.typescript,
  ],
  rules: {
    'import/no-deprecated': 'warn',
    'import/no-empty-named-blocks': 'error',
    'import/no-mutable-exports': 'error',
    // 'import/export': 'off',
    'import/no-unresolved': 'off',
  },
};
