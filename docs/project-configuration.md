# Project Configuration

## Build Tool

Vite

Vite is a next generation build tool, created using ESBuild an extremly fast javascript bundler, it provides all the benefits of CRA and can be extended using plugins defined in a `vite.config.js` file. The biggest advantage is the speed of building the app and in loading changes when developing new features.

## ESLint

ESlint is a linting tool for Javascript. By defining a specific set of configuartions in an `.eslintrc` file it helps to prevent developers making small mistakes in their code and enforces consistency across the codebase.

Recommended `.eslintrc` config setup

```
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/features/*/*'],
          },
        ],
        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',

        'react/react-in-jsx-scope': 'off',

        'jsx-a11y/anchor-is-valid': 'off',

        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
```

## Prettier

Prettier is tool for automatically formatting code. Like ESLint it enforces a consistent code style across the whole code base. You can define the rules you wish to use in an `.prettierrc` file.

Recommended `.prettierrc` file setup

```
{
  "singleQuote": true,
  "jsxSingleQuotes: true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 4,
  "useTabs": true
}
```

## Typescript

Javascript is a dynamically typed language, you can decalre a variable but you aren't required to define it, this has been known to lead to bugs, especially on larger projects with multiple developers. Typescript is a statcally typed language, it has a type system that is checked at compile time, the goal of Typescript is to help catch mistakes early through use of this type system. Typescript is a superset of Javascript and supports all the same features. For more information on Typescript and it's implementation here is a really solid [guide on using Typescript with React](https://react-typescript-cheatsheet.netlify.app/)

## Husky

Husky is used to execute git hooks and is a good way to run code validation before every commit, helping to make sure no faulty commits make there way into the repo and that the code is in the best possible state. Husky can be configured to run code linting, code formatting and type checking before it allows the code to be pushed.

## Absolute Imports

Absolute imports should be configured to allow developers to easily move files around and avoid unweildy import paths such as `../../../Component`. Using absolute imports, wherever you move a file the import remain intact.

To enable this in a typescript project (`tsconfig.json`) use the following code

```
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

Using a prefix such as `@/*` works very well it differs from other dependency modules so there is no confusion in what comes from `node_modules` and what is our source folder. That means that anything in the `src` folder can be accessed via `@`, e.g some file that lives in `src/components/MyComponent` can be accessed using `@/components/MyComponents`.

It is also possible to define multiple paths for various folders such as `@components`, `@features` etc
