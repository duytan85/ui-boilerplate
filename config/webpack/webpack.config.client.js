const webpack = require('webpack');
const nconf = require('nconf');
const AssetsPlugin = require('assets-webpack-plugin');

const isDevMode = () =>
  (process.env.NODE_ENV === 'development');

nconf.argv()
  .env()
  .file(`./config/env/${nconf.get('NODE_ENV')}.json`);

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
    port: nconf.get('DEV_SERVER_PORT'),
    hot: true,
    proxy: {
      '/': `http://localhost:${nconf.get('APP_PORT')}`
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
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