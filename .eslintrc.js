module.exports = {
  env: {
    'react-native/react-native': true,
    // 'jest/globals': true,
  },

  extends: ['airbnb', 'prettier'],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    project: './tsconfig.json',
  },

  rules: {
    'prettier/prettier': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
  },

  // overrides: [
  //   {
  //     files: ['./test/**'],
  //     rules: {
  //       'import/no-extraneous-dependencies': 'off',
  //       'import/prefer-default-export': 'off',
  //     },
  //   },
  // ],

  ignorePatterns: ['lib/', 'dist/', 'build/'],
};
