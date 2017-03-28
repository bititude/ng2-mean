# ng2-mean

A boilerplate for developing applications using Angular 2.0, Node.js, Express and MongoDB.This was generated with [angular-cli](https://github.com/angular/angular-cli) on client side.

## Development server

Use `git clone git@github.com:bititude/ng2-mean.git` to clone the app to your local server. 

Navigate to your project directory and run `npm install`.

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. Server will be running on `http://localhost:9000/` connected to client using proxy service. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the client. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. Then run `node server` to start running the project with `NODE_ENV=production` for production build. By default app will running on port `8080`.

## Running unit tests on server

Run `gulp` to execute the unit tests via [Mocha](https://mochajs.org/).

## Running end-to-end tests on client

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
