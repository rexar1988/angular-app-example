const angularEslint =  require('angular-eslint');

module.exports = {
  files: ['**/*.html'],
  extends: [
    ...angularEslint.configs.templateAccessibility,
    ...angularEslint.configs.templateAll,
  ],
  rules: {
    '@angular-eslint/template/attributes-order': [
      'error',
      {
        'order': [
          'TEMPLATE_REFERENCE',
          'STRUCTURAL_DIRECTIVE',
          'TWO_WAY_BINDING',
          'INPUT_BINDING',
          'ATTRIBUTE_BINDING',
          'OUTPUT_BINDING',
        ],
      },
    ],
    '@angular-eslint/template/elements-content': 'warn',
    '@angular-eslint/template/i18n': 'off',
    '@angular-eslint/template/label-has-associated-control': 'off',
    '@angular-eslint/template/no-call-expression': 'off',
    '@angular-eslint/template/role-has-required-aria': 'warn',
    '@angular-eslint/template/valid-aria': 'warn',
  }
};
