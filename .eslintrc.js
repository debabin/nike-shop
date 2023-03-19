module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['tsconfig.json']
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-shadow': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true
      }
    ],
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'sort-keys': [1, 'asc', { natural: true, allowLineSeparatedGroups: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: true
      }
    ],
    'import/order': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/export': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
};
