export const angularRules = {
  '@angular-eslint/directive-selector': [
    'error',
    {
      type: 'attribute',
      prefix: 'showcase',
      style: 'camelCase',
    },
  ],
  '@angular-eslint/component-class-suffix': [
    'error',
    {
      suffixes: ['Component', 'View', 'Page'],
    }
  ],
  '@angular-eslint/component-selector': [
    'error',
    {
      type: 'element',
      prefix: 'showcase',
      style: 'kebab-case',
    },
  ],
};

export const angularTemplateRules = {
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
};
