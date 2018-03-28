const webpack = require('webpack');
// const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const { NODE_ENV } = process.env;
const isDev = () =>
  (NODE_ENV === 'development');

module.exports = {
  mode: isDev() ? 'development' : 'production',
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
  ],
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      '/': 'http://localhost:3001'
    }
  }
};

// module.exports = {
//   devtool: 'source-map',
//   context: path.resolve('src'),
//   target: 'web',
//   mode: 'development',
//   entry: {
//     main: [
//       'webpack-dev-server/client?http://localhost:3000',
//       'webpack/hot/only-dev-server',
//       './client.js'
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, '../dist'),
//     publicPath: '/',
//     filename: '[name].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         include: [/src/],
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   },
//   plugins: [
//     new AssetsPlugin({
//       filename: 'asset-tags.json',
//       path: 'src',
//       update: true
//     }),
//     // new webpack.HotModuleReplacementPlugin(),
//     // new webpack.NamedModulesPlugin(),
//     // new webpack.optimize.OccurrenceOrderPlugin(),
//     // new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.DefinePlugin({
//       __DEV__: true,
//       __SERVER__: false,
//       __CLIENT__: true
//     })
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devServer: {
//     host: 'localhost',
//     port: 3000,
//     hot: true,
//     proxy: {
//       '/': 'http://localhost:3001'
//     }
//   }
// };
