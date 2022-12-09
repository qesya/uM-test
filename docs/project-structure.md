# Project Structure

The majority of the code lives in the `src` folder and is structured as follows:

```sh
src
|
+-- assets          # assets folder can contain all the static files used in the app such as images, fonts etc
|
+-- components      # shared components used across the whole application
|
+-- config          # global configuration settings are exported from here and used in the app
|
+-- features        # feature based modules
|
+-- hooks           # shared custom hooks used across the application
|
+-- lib             # re-exporting different libraries preconfigured for the application
|
+-- providers       # all of the applications providers
|
+-- routes          # routes configuration
|
+-- stores          # global state stores
|
+-- test            # test utilities and mock server
|
+-- types           # base types used across the application
|
+-- utils           # shared utility functions
```

The simplest and most maintainable way to scale an application is to keep most of the code inside the `features` folder. Every `feature` folder should contain domain specific code for a given feature, this allows us to keep functionalities scoped to a feature and not mix it's declartions with things shared across the whole app. This is much easier to maintain than a flat folder structure with many files.

```sh
src/features/MyNewFeature
|
+-- api             # exported API requests specific to a feature
|
+-- assets          # assests folder containing all static assets for a specific feature
|
+-- components      # components scoped to a specific feature
|
+-- hooks           # hooks scoped to a specific feature
|
+-- routes          # route components for a specific feature
|
+-- stores          # state stores for a specific feature
|
+-- types           # typescript types for TS specific feature domain
|
+-- utils           # utility functions for a specific feature
|
+-- index.ts        # entry point for the feature, it should serve as the public API of the given feature and exports everything
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature

Example of a features `index.ts` file

```
export * from './types';

export * from './api/getUser';
export * from './api/getUsers';
export * from './api/updateUser`';
```

You should only import stuff from other features  by using:

`import {MyNewComponent} from '@/features/MyNewFeature'`

and not

`import {MyNewComponent} from  '@features/MyNewFeature/components/MyNewComponent'`

This can also be configured in ESLint with the following rule

```
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

Think of a feature as a library or a module that is self-contained but can expose different parts to other features via its entry point.