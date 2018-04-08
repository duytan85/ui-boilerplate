const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanPlugin = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  target: 'node',
  node: {
    __dirname: false
  },
  entry: {
    server: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin(path.resolve('./dist/'), { root: path.resolve('../') }),
    new webpack.DefinePlugin({
      __DEV__: false,
      __SERVER__: true,
      __CLIENT__: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new Visualizer({
      filename: '../stats/bundles/server.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
