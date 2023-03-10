module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration' | 'arrow-function'],
      },
    ],
  },
};
