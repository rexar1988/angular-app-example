const angular = require("angular-eslint");
const eslint = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const stylisticJs = require("@stylistic/eslint-plugin-js");
const stylisticPlus = require("@stylistic/eslint-plugin-plus");
const stylisticTs = require("@stylistic/eslint-plugin-ts");

module.exports = tsEslint.config(
  {
    files: ["**/*.ts"],
    ignores: [
      "projects/**/*",
      "main.ts",
      "main.server.ts",
      "index.html"
    ],
    extends: [
      eslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/plus': stylisticPlus,
      '@stylistic/ts': stylisticTs,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/component-selector": [
        "error",
        {
          "type": "element",
          "prefix": "hlx",
          "style": "kebab-case"
        }
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          "type": "attribute",
          "prefix": [
            "hlx",
            "ng",
            "form"
          ],
          "style": "camelCase"
        }
      ],
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          "suffixes": [
            "Component",
            "View",
            "Dialog"
          ]
        }
      ],
      "@angular-eslint/component-max-inline-declarations": [
        "error",
        {
          "template": 20,
          "styles": 20,
          "animations": 20
        }
      ],
      "@angular-eslint/contextual-decorator": "error",
      "@angular-eslint/contextual-lifecycle": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-lifecycle-call": "error",
      "@angular-eslint/no-conflicting-lifecycle": "error",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/no-host-metadata-property": "error",
      "@angular-eslint/no-input-rename": "warn",
      "@angular-eslint/no-inputs-metadata-property": "error",
      "@angular-eslint/no-outputs-metadata-property": "error",
      "@angular-eslint/no-output-native": "error",
      "@angular-eslint/no-output-on-prefix": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/no-queries-metadata-property": "error",
      "@angular-eslint/prefer-output-readonly": "error",
      "@angular-eslint/relative-url-prefix": "error",
      "@angular-eslint/sort-ngmodule-metadata-arrays": "error",
      "@angular-eslint/use-component-selector": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "@ngrx/prefer-effect-callback-in-block-statement": "off",
      "@stylistic/js/array-bracket-newline": [
        "error",
        {
          "multiline": true
        }
      ],
      "@stylistic/js/array-bracket-spacing": [
        "error",
        "never",
        {
          "objectsInArrays": true,
          "arraysInArrays": true
        }
      ],
      "@stylistic/js/array-element-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/js/arrow-parens": [
        "error",
        "as-needed"
      ],
      "@stylistic/js/arrow-spacing": "error",
      "@stylistic/js/comma-style": [
        "error",
        "last"
      ],
      "@stylistic/js/computed-property-spacing": [
        "error",
        "never"
      ],
      "@stylistic/js/dot-location": [
        "error",
        "property"
      ],
      "@stylistic/js/eol-last": [
        "error",
        "always"
      ],
      "@stylistic/js/function-call-argument-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/js/function-paren-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/js/generator-star-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/js/implicit-arrow-linebreak": [
        "error",
        "beside"
      ],
      "@stylistic/js/jsx-quotes": ["error", "prefer-single"],
      "@stylistic/js/linebreak-style": ["error"],
      "@stylistic/js/max-len": [
        "error",
        {
          "ignoreStrings": true,
          "ignoreComments": true,
          "ignoreTemplateLiterals": true,
          "ignoreRegExpLiterals": true,
          "code": 120
        }
      ],
      "@stylistic/js/max-statements-per-line": [
        "error",
        {
          "max": 1
        }
      ],
      "@stylistic/js/multiline-comment-style": [
        "error",
        "bare-block"
      ],
      "@stylistic/js/multiline-ternary": [
        "error",
        "always-multiline"
      ],
      "@stylistic/js/new-parens": [
        "error",
        "never"
      ],
      "@stylistic/js/newline-per-chained-call": [
        "error",
        {
          "ignoreChainWithDepth": 3
        }
      ],
      "@stylistic/js/no-confusing-arrow": [
        "error",
        {
          "onlyOneSimpleParam": true
        }
      ],
      "@stylistic/js/no-floating-decimal": "error",
      "@stylistic/js/no-mixed-operators": "error",
      "@stylistic/js/no-mixed-spaces-and-tabs": "error",
      "@stylistic/js/no-multi-spaces": "error",
      "@stylistic/js/no-multiple-empty-lines": "error",
      "@stylistic/js/no-tabs": "error",
      "@stylistic/js/no-trailing-spaces": "error",
      "@stylistic/js/no-whitespace-before-property": "error",
      "@stylistic/js/nonblock-statement-body-position": [
        "error",
        "beside"
      ],
      "@stylistic/js/object-curly-newline": [
        "error",
        {
          "multiline": true,
          "consistent": true
        }
      ],
      "@stylistic/js/object-property-newline": "error",
      "@stylistic/js/one-var-declaration-per-line": "error",
      "@stylistic/js/operator-linebreak": [
        "error",
        "before"
      ],
      "@stylistic/js/padded-blocks": [
        "error",
        "never"
      ],
      "@stylistic/js/rest-spread-spacing": [
        "error",
        "never"
      ],
      "@stylistic/js/semi-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/js/semi-style": [
        "error",
        "last"
      ],
      "@stylistic/js/space-in-parens": [
        "error",
        "never"
      ],
      "@stylistic/js/space-unary-ops": "error",
      "@stylistic/js/spaced-comment": [
        "error",
        "always"
      ],
      "@stylistic/js/switch-colon-spacing": "error",
      "@stylistic/js/template-curly-spacing": "error",
      "@stylistic/js/template-tag-spacing": "error",
      "@stylistic/js/wrap-iife": [
        "error",
        "outside"
      ],
      "@stylistic/js/wrap-regex": "error",
      "@stylistic/js/yield-star-spacing": [
        "error",
        "after"
      ],
      "@stylistic/plus/indent-binary-ops": ["error", 2],
      "@stylistic/plus/type-generic-spacing": ["error"],
      "@stylistic/plus/type-named-tuple-spacing": ["error"],
      "@stylistic/ts/block-spacing": "error",
      "@stylistic/ts/brace-style": [
        "error",
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      "@stylistic/ts/comma-dangle": [
        "error",
        "always-multiline"
      ],
      "@stylistic/ts/comma-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/ts/function-call-spacing": [
        "error",
        "never"
      ],
      "@stylistic/ts/indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "VariableDeclarator": 2,
          "outerIIFEBody": 1,
          "MemberExpression": 1
        }
      ],
      "@stylistic/ts/key-spacing": "error",
      "@stylistic/ts/keyword-spacing": "error",
      "@stylistic/ts/lines-around-comment": [
        "warn"
      ],
      "@stylistic/ts/lines-between-class-members": [
        "error",
        "always",
        {
          "exceptAfterOverload": true,
          "exceptAfterSingleLine": true
        }
      ],
      "@stylistic/ts/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          },
          "multilineDetection": "brackets"
        }
      ],
      "@stylistic/ts/no-extra-parens": "error",
      "@stylistic/ts/no-extra-semi": "error",
      "@stylistic/ts/padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": [
            "*"
          ],
          "next": [
            "break",
            "block-like",
            "continue",
            "function",
            "if",
            "iife",
            "multiline-block-like",
            "multiline-expression",
            "return",
            "switch",
            "throw",
            "try",
            "while"
          ]
        }
      ],
      "@stylistic/ts/quote-props": [
        "error",
        "consistent"
      ],
      "@stylistic/ts/quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "@stylistic/ts/semi": "error",
      "@stylistic/ts/space-before-blocks": "error",
      "@stylistic/ts/space-before-function-paren": [
        "error",
        {
          "anonymous": "never",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      "@stylistic/ts/space-infix-ops": "error",
      "@stylistic/ts/type-annotation-spacing": [
        "error",
        {
          "after": true
        }
      ],
      "@typescript-eslint/adjacent-overload-signatures": "error",
      // "@typescript-eslint/await-thenable": "error",
      // "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      // "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowedNames": [
            "loadComponent",
            "loadChildren"
          ]
        }
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": "off",
          "overrides": {
            "methods": "no-public",
            "properties": "no-public",
            "parameterProperties": "no-public"
          }
        }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            "signature",
            "call-signature",
            "static-field",
            "decorated-field",
            "private-readonly-field",
            "#private-field",
            "protected-field",
            "public-field",
            "constructor",

            "decorated-get",
            "public-get",
            "public-set",

            "public-method",

            "protected-get",
            "protected-set",

            "protected-method",
            "private-get",
            "private-set",
            "private-method",
            "#private-get",
            "#private-set",
            "#private-method"
          ]
        }
      ],
      "@typescript-eslint/method-signature-style": [
        "error",
        "method"
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": [
            "variable"
          ],
          "format": [
            "UPPER_CASE",
            "strictCamelCase"
          ]
        },
        {
          "selector": [
            "objectLiteralProperty"
          ],
          "format": null,
          "filter": {
            "regex": "^[A-Z]$",
            "match": false
          }
        },
        {
          "selector": [
            "objectLiteralProperty"
          ],
          "format": [
            "camelCase",
            "snake_case"
          ]
        },
        {
          "selector": [
            "variable",
            "function",
            "parameter",
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor"
          ],
          "format": [
            "strictCamelCase"
          ]
        },
        {
          "selector": [
            "enumMember",
            "class",
            "interface",
            "enum"
          ],
          "format": [
            "StrictPascalCase"
          ]
        }
      ],
      "@typescript-eslint/no-array-constructor": "error",
      // "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      // "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-dupe-class-members": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      // "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          "allow": [
            "constructors"
          ]
        }
      ],
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          "ignoreRestArgs": true,
          "fixToUnknown": true
        }
      ],
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      // "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-invalid-this": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-loss-of-precision": "error",
      // "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      // "@typescript-eslint/no-misused-promises": "error",
      // "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-redeclare": "error",
      // "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-restricted-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      // "@typescript-eslint/no-throw-literal": "error",
      "@typescript-eslint/no-shadow": "error",
      // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      // "@typescript-eslint/no-unnecessary-condition": "error",
      // "@typescript-eslint/no-unnecessary-qualifier": "error",
      // "@typescript-eslint/no-unnecessary-type-arguments": "error",
      // "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      // "@typescript-eslint/no-unsafe-argument": "error",
      // "@typescript-eslint/no-unsafe-assignment": "error",
      // "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      // "@typescript-eslint/no-unsafe-member-access": "error",
      // "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      // "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-var-requires": "error",
      // "@typescript-eslint/non-nullable-type-assertion-style": "error",
      "@typescript-eslint/parameter-properties": [
        "error",
        {
          "allow": [
            "readonly",
            "public readonly",
            "private readonly",
            "protected readonly"
          ]
        }
      ],
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      // "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      //"@typescript-eslint/prefer-optional-chain": "error",
      // "@typescript-eslint/prefer-readonly": "error",
      // "@typescript-eslint/prefer-reduce-type-parameter": "error",
      // "@typescript-eslint/prefer-return-this-type": "error",
      // "@typescript-eslint/prefer-string-starts-ends-with": "error",
      // "@typescript-eslint/promise-function-async": [
      //   "error",
      //   {
      //     "checkArrowFunctions": false
      //   }
      // ],
      // "@typescript-eslint/require-await": "error",
      // "@typescript-eslint/restrict-template-expressions": "error",
      // "@typescript-eslint/restrict-plus-operands": "error",
      // "@typescript-eslint/return-await": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      // "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/typedef": "error",
      "@typescript-eslint/unified-signatures": "error",
      "array-callback-return": "error",
      "complexity": [
        "error",
        20
      ],
      "arrow-body-style": [
        "error",
        "as-needed"
      ],
      "block-scoped-var": "error",
      "consistent-return": "error",
      "consistent-this": "error",
      "constructor-super": "error",
      "curly": "error",
      "default-case-last": "error",
      "eqeqeq": "error",
      "for-direction": "error",
      "func-names": [
        "error",
        "as-needed"
      ],
      "getter-return": "error",
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "id-length": [
        "error",
        {
          "min": 3,
          "max": 35,
          "exceptions": [
            "x",
            "y",
            "z",
            "id",
            "me"
          ],
          "properties": "never"
        }
      ],
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-depth": [
        "error",
        {
          "max": 4
        }
      ],
      "max-lines": [
        "error",
        {
          "max": 550,
          "skipBlankLines": true,
          "skipComments": true
        }
      ],
      "max-lines-per-function": [
        "error",
        {
          "max": 300,
          "skipBlankLines": true,
          "skipComments": true
        }
      ],
      "max-nested-callbacks": [
        "error",
        5
      ],
      "max-params": [
        "error",
        5
      ],
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-console": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-div-regex": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-eq-null": "error",
      "no-ex-assign": "error",
      "no-extra-bind": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-label": "error",
      "no-eval": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-misleading-character-class": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "warn",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-native-nonconstructor": "error",
      "no-new-object": "error",
      "no-new-symbol": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal-escape": "error",
      "no-octal": "error",
      "no-obj-calls": "error",
      "no-param-reassign": "error",
      "no-promise-executor-return": "error",
      "no-proto": "error",
      "no-regex-spaces": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unneeded-ternary": "error",
      "no-underscore-dangle": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-private-class-members": "error",
      "no-useless-backreference": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "no-with": "error",
      "object-shorthand": "error",
      "operator-assignment": [
        "error",
        "always"
      ],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-exponentiation-operator": "warn",
      "prefer-named-capture-group": "error",
      "prefer-numeric-literals": "warn",
      "prefer-object-has-own": "warn",
      "prefer-object-spread": "warn",
      "prefer-promise-reject-errors": "warn",
      "prefer-regex-literals": "warn",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "radix": [
        "error",
        "always"
      ],
      "require-atomic-updates": "error",
      "require-unicode-regexp": "error",
      "require-yield": "error",
      "symbol-description": "warn",
      "unicode-bom": "error",
      "use-isnan": "error",
      "valid-typeof": "error"
    }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/attributes-order": [
        "error",
        {
          "order": [
            "TEMPLATE_REFERENCE",
            "STRUCTURAL_DIRECTIVE",
            "TWO_WAY_BINDING",
            "INPUT_BINDING",
            "ATTRIBUTE_BINDING",
            "OUTPUT_BINDING"
          ]
        }
      ],
      "@angular-eslint/template/cyclomatic-complexity": [
        "error",
        {
          "maxComplexity": 5
        }
      ],
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/button-has-type": "error",
      "@angular-eslint/template/conditional-complexity": [
        "error",
        { "maxComplexity": 5 }
      ],
      "@angular-eslint/template/elements-content": "off",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/label-has-associated-control": "off",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/prefer-self-closing-tags": "warn",
      "@angular-eslint/template/role-has-required-aria": "warn",
      "@angular-eslint/template/table-scope": "error",
      "@angular-eslint/template/valid-aria": "warn"
    }
  },
  {
    excludedFiles: ["*.spec.ts"],
    files: ["*.ts"],
    rules: {
      "max-statements": [
        "error",
        16
      ]
    }
  }
);
