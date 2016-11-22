'use strict';

const webpack = require('webpack');

// Webpack is a module bundler for your JavaScript.
// Takes modules with dependencies and generates static assets representing those modules.
// In this file is where we declare our Webpack configuration

module.exports = {
  // Declare the project source folder
  // __dirname refers to the root of your project
  context: __dirname + '/src',

  // Entries are the starting points where Webpack starts to bundle.
  // Starting from the context folder, Webpack looks for entry filenames and reads the content.
  // Every import or require() dependency it finds as it parses the code,
  // it bundles for the final build (with their dependencies too).
  // Webpack will give each module a unique id and save all modules accessible by id in the bundle.js file.
  entry: {
    app: './app.js',
  },

  // Webpack bundles everything to the output.path folder,
  // naming it using the output.filename naming template
  output: {
    path: __dirname + '/dist/assets',
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },

  // Webpack actually has its own development server, so whether you’re developing
  // a static site or are just prototyping your front-end, it’s perfect for either.
  // From your terminal, just run webpack-dev-server
  devServer: {
    contentBase: __dirname + '/src',
  },
  devtool: 'source-map',

  // Webpack can work with virtually any file type, as long as we pass it
  // into JavaScript. We do that with Loaders.
  // A loader can refer to a preprocessor such as Sass, or a transpiler such as Babel.
  // On NPM, they’re usually named *-loader such as sass-loader or babel-loader.
  module: {
    rules: [
      // This looks for any file that ends in .js to be loaded via Babel.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // The following two statements set loaders for stylesheets bundling (CSS & SCSS).
      // CSS being bundled in with your JavaScript, and style-loader manually writes
      // your styles inside the <head> tag.
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      // Images, fonts and SVG support
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=[path][name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
    ],
  },
  // Define API_URL as a global constant on the project
  plugins: [
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify('https://foogl-api.herokuapp.com')
    })
  ]
};
