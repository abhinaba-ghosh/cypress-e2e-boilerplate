module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    indent: 'off',

    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'simple-import-sort/sort': 'error',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true
        }
      }
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-return-await': 'error',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-nested-ternary': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true
      }
    ]
  }
};
