# OpenLayers + Webpack

[![Travis CI Status](https://travis-ci.org/ahocevar/ol-webpack.svg?branch=master)](http://travis-ci.org/#!/ahocevar/ol-webpack)

This example demonstrates how the `ol` package can be used with webpack 2. It includes a full configuration for a dev environment, and an example (`main.js`) which also shows how to import third party libraries.

Clone the project.

    git clone git@github.com:ahocevar/ol-webpack.git

Install the project dependencies.

    cd ol-webpack
    npm install

Run automated tests.

    npm test

Start a debug server.

    npm start

Open `http://localhost:8080/` in your browser to see the app, or `http://localhost:8080/test/` to run the tests in the browser.

When happy with the result, create a bundle for the browser.

    npm run build

Preview the production application bundle in your browser.

    open index.html
