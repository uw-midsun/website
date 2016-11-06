"use strict";

var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'app-client.js'),
  devServer: {
    inline: true,
    port: 8080,
    contentBase: "src/static/",
    historyApiFallback: {
      index: '/index-static.html'
    }
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: path.join(__dirname, 'src'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};
