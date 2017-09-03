require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
const lost = require('lost');

const entryFolderPath = path.join(__dirname, 'src');
const entryFilePath = path.join(entryFolderPath, 'index.js');;

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    entryFilePath
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.ProvidePlugin({
      APP_NAME: 'SIMPLE_TASK_MANAGER',
    }),
    new ForceCaseSensitivityPlugin(),
    new HtmlWebpackPlugin({
      title: 'Task Management',
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
  devServer: {
    compress: true,
    port: 9000,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  },
};
