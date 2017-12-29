const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

const plugins = [new webpack.optimize.ModuleConcatenationPlugin()]

module.exports = function webpackStuff(env) {
  if (env === 'production') plugins.push(new MinifyPlugin())

  return {
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
          // query: {
          //   presets: ['env'],
          //   plugins: []
          // }
          // include: [
          //   path.resolve(__dirname, './'),
          //   path.join('node_modules', 'cypress-hyperapp-unit-test', 'src')
          // ]
        }
      ]
    },
    plugins
  }
}
