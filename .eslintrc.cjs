module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:cypress/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
        'cypress/globals': true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'cypress',
  ],
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'arrow-parens': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-extra-parens': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
};
