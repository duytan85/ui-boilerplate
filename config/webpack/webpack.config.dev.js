const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const { NODE_ENV } = process.env;
const isDevMode = () =>
  (NODE_ENV === 'development');

module.exports = {
  mode: isDevMode() ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    main: [
      'babel-polyfill',
      './src/client.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    proxy: {
      '/': 'http://localhost:3001'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [/src/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: 'asset-tags.json',
      path: 'src',
      update: true
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      __SERVER__: false,
      __CLIENT__: true
    })
  ]
};
