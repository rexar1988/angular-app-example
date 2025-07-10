export const stylisticRules = {
  '@stylistic/array-element-newline': [
    'error',
    'consistent',
  ],
  '@stylistic/arrow-parens': [
    'error',
    'as-needed',
  ],
  '@stylistic/brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: true,
    }
  ],
  '@stylistic/comma-dangle': [
    'error',
    'always-multiline'
  ],
  '@stylistic/object-curly-spacing': [
    'error',
    'always'
  ],
  '@stylistic/dot-location': [
    'error',
    'property',
  ],
  '@stylistic/function-call-argument-newline': [
    'error',
    'consistent',
  ],
  '@stylistic/function-paren-newline': [
    'error',
    'consistent',
  ],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  '@stylistic/indent': [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 2,
    },
  ],
  '@stylistic/indent-binary-ops': [
    'error',
    2,
  ],
  '@stylistic/linebreak-style': 'off',
  '@stylistic/lines-around-comment': 'warn',
  '@stylistic/max-len': [
    'error',
    {
      code: 140,
    }
  ],
  '@stylistic/lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterSingleLine: true,
    }
  ],
  '@stylistic/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }
  ],
  '@stylistic/multiline-comment-style': [
    'error',
    'bare-block',
  ],
  '@stylistic/multiline-ternary': [
    'error',
    'always-multiline',
  ],
  '@stylistic/new-parens': [
    'error',
    'never',
  ],
  '@stylistic/newline-per-chained-call': [
    'error',
    {
      ignoreChainWithDepth: 3,
    }
  ],
  '@stylistic/no-confusing-arrow': [
    'error',
    {
      onlyOneSimpleParam: true,
    }
  ],
  '@stylistic/operator-linebreak': [
    'error',
    'before',
  ],
  '@stylistic/padded-blocks': [
    'error',
    'never',
  ],
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['*'],
      next: [
        'break', 'block-like', 'continue', 'function', 'if', 'iife', 'multiline-block-like',
        'multiline-expression', 'return', 'switch', 'throw', 'try', 'while',
      ]
    }
  ],
  '@stylistic/quote-props': [
    'error',
    'consistent',
  ],
  '@stylistic/quotes': [
    'error',
    'single',
  ],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }
  ],
  '@stylistic/type-annotation-spacing': [
    'error',
    {
      after: true,
    },
  ],
}
