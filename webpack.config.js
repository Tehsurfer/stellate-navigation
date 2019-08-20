var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "none",
  entry: {
    "build": "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    library: 'StellateNav',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
  ]
};