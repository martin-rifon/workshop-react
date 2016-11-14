'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist/assets',
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react', 'stage-0'] }
        }],
      },
      {
        test: /\.css$/,
        use: [
          ExtractTextPlugin.extract("css"),
          "css-loader"
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          ExtractTextPlugin.extract("css"),
          "css-loader",
          "sass-loader",
        ]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true,
    }),
  ],
};
