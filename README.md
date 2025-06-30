## About

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular App Example

## Used Commands

- `ng lint`
- `ng g config karma`
- `ng generate environments`

## Package installation

### ESLint
- `npm i -D @eslint/js`
- `npm i -D eslint-plugin-jasmine`
- `npm i -D eslint-plugin-perfectionist`
- `npm i -D @stylistic/eslint-plugin`
- `npm i -D @typescript-eslint/parser`
- `npm i -D eslint-import-resolver-typescript`
- `npm i -D eslint-plugin-boundaries`
- `npm i -D eslint-plugin-import`

### Stylelint
- `npm i -D stylelint stylelint-config-standard-scss`
- `npm init stylelint`

### Compodoc
- `ng add @compodoc/compodoc`

### Husky
- `npm i -D husky`
- `npx husky init`

### Commitlint
- `npm i -D @commitlint/config-conventional @commitlint/cli`
- `echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.ts`

### NGRX

- `ng add @ngrx/store@latest`
- `ng add @ngrx/effects@latest`
- `ng add @ngrx/router-store@latest`
- `ng add @ngrx/component-store@latest`
- `ng add @ngrx/signals@latest`
- `ng add @ngrx/operators@latest`
- `ng add @ngrx/component@latest`
- `ng add @ngrx/store-devtools@latest`
- `ng add @ngrx/schematics@latest`
- `ng add @ngrx/eslint-plugin`

## Development

1. Go to `tsconfig.json` and check the `path` property
2. Change `$app` prefix to your prefix
3. If you change in `tsconfig.json` prefix `@app`, you also have to change it in `eslint.config.js` **on the line 452** to correctly identify internal packages
