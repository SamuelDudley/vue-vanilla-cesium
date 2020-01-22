'use strict'
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
const cesiumThirdParty = '../Build/Cesium/ThirdParty'
const cesiumAssets = '../Build/Cesium/Assets'
const cesiumWidgets = '../Build/Cesium/Widgets'
const path = require('path')
const webpack = require('webpack')
const CopywebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-vanilla-cesium'
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

    node: {
        // Resolve node module use of fs
        fs: "empty",
        Buffer: false,
        http: "empty",
        https: "empty",
        zlib: "empty"
    },

    resolve: {
      mainFields: ['module', 'main']
    },

    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumAssets), to: 'Assets' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWidgets), to: 'Widgets' } ]),
      new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumThirdParty), to: 'ThirdParty'} ]),
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
          sideEffects: false,
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
      ? false
      : 'eval',

    optimization: {
      usedExports: true,
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
        cacheGroups: {
          vendors: {
            name: `chunk-vendors`,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'all'
          },
          commons: {
            name: 'Cesium',
            test: /[\\/]node_modules[\\/]cesium/,
            chunks: 'all'
          }
        }
      }
    }
  }
}