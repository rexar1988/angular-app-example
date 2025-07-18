const boundariesEslint = require('eslint-plugin-boundaries');
const ignores = require('../ignores.js');
const config = require("../config.js");
const { createLibPatternPaths, createExternalLibPaths } = require("../utils");

module.exports = {
  files: ['**/*.ts'],
  extends: [boundariesEslint.configs.strict],
  plugins: {
    'boundaries': boundariesEslint,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      }
    },
    "boundaries/ignore": [
      "src/server.ts",
      'src/main.ts',
      'src/main.server.ts',
      'src/app/app.config.ts',
      'src/app/app.config.server.ts',
      'src/app/app.routes.server.ts',
      '**/public-api.ts',
    ],
    'boundaries/elements': [
      {
        type: 'animation',
        pattern: 'animations/**'
      },
      {
        type: 'component',
        pattern: 'components/**',
      },
      {
        type: 'component',
        pattern: ['src/app/app.ts'],
        mode: "file"
      },
      {
        type: 'directive',
        pattern: 'directives/**'
      },
      {
        type: 'environment',
        pattern: [
          '**/environment.ts',
          '**/environment.*.ts',
        ],
        mode: "file",
      },
      {
        type: 'lib',
        pattern: createLibPatternPaths(config.libraries),
        mode: 'file'
      },
      {
        type: 'module',
        pattern: 'modules/**'
      },
      {
        type: 'pipe',
        pattern: 'pipes/**'
      },
      {
        type: 'routing',
        pattern: 'routing/**'
      },
      {
        type: 'routes',
        pattern: '*.routes.ts',
        mode: "file",
      },
      {
        type: 'service',
        pattern: 'services/**',
      },
      {
        type: 'shared',
        pattern: 'shared/**',
      },
      {
        type: 'state',
        pattern: '{state,states}/**'
      },
      {
        type: 'spec',
        pattern: '**/*.spec.ts',
        mode: "file",
      },
      {
        type: 'validator',
        pattern: 'validators/**'
      },
      {
        type: 'view',
        pattern: '*.view.ts',
        mode: "file",
      },
    ],
  },
  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        message: 'Type \'${file.type}\' is not allowed to import type \'${dependency.type}\'',
        rules: [
          {
            from: 'animation',
            allow: [],
          },
          {
            from: 'environment',
            allow: ['environment', 'shared'],
          },
          {
            from: ['component', 'view'],
            allow: ['animation', 'component', 'lib', 'module', 'pipe', 'shared', 'state'],
          },
          {
            from: 'directive',
            allow: ['component', 'directive', 'module', 'shared'],
          },
          {
            from: 'module',
            allow: ['component', 'directive', 'module', 'pipe', 'shared'],
          },
          {
            from: 'pipe',
            allow: ['component', 'directive', 'shared'],
          },
          {
            from: 'routing',
            allow: ['shared', 'store'],
          },
          {
            from: 'routes',
            allow: ['component', 'routing', 'service', 'state'],
          },
          {
            from: 'spec',
            allow: ['component', 'directive', 'module', 'pipe', 'service', 'view'],
          },
          {
            from: 'shared',
            allow: [],
          },
          {
            from: 'service',
            allow: ['environment', 'module', 'service', 'shared', 'state'],
          },
          {
            from: ['state', 'validator'],
            allow: ['component', 'module', 'service', 'shared'],
          },
        ]
      }
    ],
    'boundaries/no-private': [
      'warn',
      {
        allowUncles: true,
      },
    ],
    "boundaries/external": [
      'error',
      {
        default: "disallow",
        rules: [
          {
            from: '*',
            allow: ["@angular", "@angular/*"],
          },
          {
            from: ["component", "directive", "routes", "service", 'state', "view"],
            allow: [
              ...createExternalLibPaths(config.libraries),
              ...createExternalLibPaths(config.externalLibraries),
            ],
          },
        ],
      }
    ],
  },
};

