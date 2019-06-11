/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

const webpack = require('webpack');

const serverConfig = require('../config/webpack/webpack.config.server');
const clientConfig = require('../config/webpack/webpack.config.client');

const createBundle = (config) => {
  webpack(config).run((error, stats) => {
    if (error) {
      console.error(error.stack || error);

      if (error.details) {
        console.error(error.details);
      }
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    console.info(
      stats.toString({
        chunks: false,
        colors: true
      })
    );
  });
};

createBundle(serverConfig);
createBundle(clientConfig);
