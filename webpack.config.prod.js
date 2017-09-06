require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const nodeHash = require('node-object-hash');

const entryFolderPath = path.join(__dirname, 'src');
const entryFilePath = path.join(entryFolderPath, 'index.js');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    entryFilePath
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
  },
  plugins: [
    new HardSourceWebpackPlugin({
      // Either an absolute path or relative to output.path.
      cacheDirectory: path.join(__dirname, 'node_modules/.cache/hard-source/[confighash]'),
      // Either an absolute path or relative to output.path. Sets webpack's
      // recordsPath if not already set.
      recordsPath: path.join(__dirname, 'node_modules/.cache/hard-source/[confighash]/records.json'),
      // Either a string value or function that returns a string value.
      configHash: nodeHash({ sort: false }).hash,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Lyearn',
      template: path.join(entryFolderPath, 'index.html'),
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js']
  },
};
