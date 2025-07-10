export const typescriptRules = {
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/class-methods-use-this': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports'
    },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowedNames: ['loadComponent', 'loadChildren']
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public'
    },
  ],
  '@typescript-eslint/max-params': [
    'error',
    {
      max: 5,
    },
  ],
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: [
        'signature',
        'call-signature',

        'abstract-field',
        'static-field',
        '#private-field',
        'private-field',
        'protected-field',
        'public-field',
        'decorated-field',

        'constructor',

        'decorated-get',
        'decorated-set',

        'public-get',
        'public-set',

        'public-method',

        'protected-get',
        'protected-set',

        'protected-method',

        'private-get',
        'private-set',

        'private-method',

        '#private-get',
        '#private-set',

        '#private-method'
      ]
    },
  ],
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: ['variable'],
      format: ['UPPER_CASE', 'strictCamelCase']
    },
    {
      selector: ['objectLiteralProperty'],
      format: null,
      filter: {
        regex: '^[A-Z]$',
        match: false,
      },
    },
    {
      selector: ['objectLiteralProperty'],
      format: ['camelCase', 'snake_case'],
    },
    {
      selector: [
        'variable',
        'function',
        'parameter',
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor'
      ],
      format: ['strictCamelCase']
    },
    {
      selector: ['enumMember', 'class', 'interface', 'enum'],
      format: ['StrictPascalCase']
    }
  ],
  '@typescript-eslint/no-deprecated': 'warn',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['constructors'],
    }
  ],
  '@typescript-eslint/no-explicit-any': [
    'warn',
    {
      ignoreRestArgs: true,
      fixToUnknown: true
    }
  ],
  '@typescript-eslint/no-extraneous-class': [
    'error',
    {
      allowWithDecorator: true,
    },
  ],
  '@typescript-eslint/no-magic-numbers': [
    'warn',
    {
      detectObjects: false,
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      enforceConst: true,
      ignoreEnums: true,
    },
  ],
  '@typescript-eslint/parameter-properties': [
    'error',
    {
      allow: ['readonly', 'public readonly', 'private readonly', 'protected readonly'],
    },
  ],
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-promise-reject-errors': 'warn',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/promise-function-async': [
    'error',
    {
      checkArrowFunctions: false,
    },
  ],
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/unbound-method': [
    'error',
    {
      ignoreStatic: true,
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    'error',
    { argsIgnorePattern: '^_' },
  ],
};
