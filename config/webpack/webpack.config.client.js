const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    main: ['@babel/polyfill', './src/client.js']
  },
  output: {
    filename: isDev ? '[name].bundle.js' : '[name]-[hash].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: process.env.DEV_SERVER_PORT,
    hot: true,
    proxy: {
      '/': `http://localhost:${process.env.APP_PORT}`
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
    new webpack.DefinePlugin({
      __DEV__: isDev
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new AssetsPlugin({
      filename: 'asset-manifest.json',
      path: 'src',
      update: true,
      prettyPrint: true,
      keepInMemory: true
    }),
    ...(!isDev
      ? [
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: '../stats/client/report.html',
            generateStatsFile: true,
            statsFilename: '../stats/client/stats.json'
          })
        ]
      : [])
  ]
};
