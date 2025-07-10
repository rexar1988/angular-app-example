export const boundarySettings = {
  'import/resolver': {
    'typescript': {
      'project': './tsconfig.json'
    }
  },
  'boundaries/elements': [
    {
      type: 'animation',
      pattern: '**/animations/**'
    },
    {
      type: 'component',
      pattern: '**/components/**'
    },
    {
      type: 'directive',
      pattern: '**/directives/**'
    },
    {
      type: 'environment',
      pattern: 'environments/*'
    },
    {
      type: 'module',
      pattern: '**/modules/**'
    },
    {
      type: 'pipe',
      pattern: '**/pipes/**'
    },
    {
      type: 'routing',
      pattern: '**/routing/**'
    },
    {
      type: 'service',
      pattern: '**/services/**'
    },
    {
      type: 'shared',
      pattern: '**/shared/**'
    },
    {
      type: 'state',
      pattern: '**/{state,states}/**'
    },
    {
      type: 'validator',
      pattern: '**/validator/**'
    },
  ],
}

export const boundaryRules = {
  'boundaries/element-types': [
    'error',
    {
      default: 'disallow',
      message: 'Type \'${file.type}\' is not allowed to import type \'${dependency.type}\'',
      rules: [
        {
          from: ['animation'],
          allow: [],
        },
        {
          from: ['environment'],
          allow: ['shared'],
        },
        {
          from: 'component',
          allow: ['animation', 'component', 'module', 'shared', 'state'],
          message: 'not allowed to import anything into \`animation\` entity',
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
          from: 'shared',
          allow: [],
          message: 'not allowed to import anything into \`shared\` folder',
        },
        {
          from: 'service',
          allow: ['module', 'shared', 'state'],
        },
        {
          from: ['state', 'validator'],
          allow: ['component', 'module', 'shared'],
        },
      ]
    }
  ],
  'boundaries/no-private': 'error',
}
