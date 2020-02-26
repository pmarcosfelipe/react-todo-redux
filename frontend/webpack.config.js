const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new ExtractTextPlugin('app.css')]
};
