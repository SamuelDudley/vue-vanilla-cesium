'use strict'
const cesiumSource = process.env.NODE_ENV === 'production'
  ? 'node_modules/cesium/Build/Cesium'
  : 'node_modules/cesium/Source';
const cesiumWorkers = process.env.NODE_ENV === 'production'
? 'Workers'
: '../Build/Cesium/Workers'; '../Build/Cesium/Workers';
const path = require('path');
const webpack = require('webpack');
const CopywebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/event-framework'
    : '/',

  "configureWebpack": {
    output: {
      filename: process.env.NODE_ENV === 'production'
        ? '[name].bundle.js'
        : '[name].js',
      libraryExport: 'default',
      // Needed to compile multiline strings in Cesium
      sourcePrefix: '' 
    },

    amd: {
      // Enable webpack-friendly use of require in Cesium
      toUrlUndefined: true
    },

    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },

    resolve: {
      alias: {
        // Cesium module name
        cesium: path.resolve('./', cesiumSource)
      }
    },

    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers'} ]),
      // Define relative base path in cesium for loading assets
      new webpack.DefinePlugin({ CESIUM_BASE_URL: JSON.stringify('') })
    ],

    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.(png|gif|jpg|jpeg|svg|xml|json|czml|glb)$/,
          use: [ 'url-loader' ]
        },
        {
          // Strip cesium pragmas
          test: /\.js$/,
          enforce: 'pre',
          include: path.resolve(__dirname, cesiumSource),
          use: [{
              loader: 'strip-pragma-loader',
              options: {
                  pragmas: {
                      debug: false
                  }
              }
          }]
        }
      ]
    },

    devtool: process.env.NODE_ENV === 'production'
      ? 'nosources-source-map'
      : 'eval',

    optimization: {
      minimize: process.env.NODE_ENV === 'production'
        ? true
        : false,
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: `chunk-vendors`,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          commons: {
            name: 'Cesium',
            test: /[\\/]node_modules[\\/]cesium/,
            chunks: 'all'
          }
        }
      }
    },
  }
}