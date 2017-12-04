# Webpack 3.9.1 splitted config #

A splitted config files setup for webpack with angular.
By removing just a few files the setup is also usable for any other project.

Note that the html-loader does not support double quotes (") on image src attributes. Use single quotes (') to load image files.

# Dev vs Production #
Sourcemaps in dev are included in the .css file, whilst in production hidden version is used, which you can the for example deploy to rollbar

Production is also minified

# Startup #
After cloning run npm install to install the packages.

* for dev with server: npm run dev-server
* for dev without server just build: npm run dev
* for dev without server build & watch: npm run dev-watch
* for production: npm run production
