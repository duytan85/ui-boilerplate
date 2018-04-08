const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

const isDevMode = () =>
  (process.env.NODE_ENV === 'development');

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
    filename: isDevMode() ? '[name].bundle.js' : '[name]-[hash].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
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
