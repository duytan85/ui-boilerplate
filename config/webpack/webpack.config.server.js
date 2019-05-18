const webpack = require('webpack');
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
  resolve: {
    extensions: ['.js', '.jsx']
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
    new CleanPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new Visualizer({
      filename: '../stats/bundles/server.html'
    })
  ]
};
