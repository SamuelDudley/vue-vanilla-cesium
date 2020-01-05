'use strict'
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/event-framework'
  //   : '',
  // assetsDir: "dist",
  "configureWebpack": {
    output: {
      // path: path.resolve(__dirname, "Bundle"),
      // filename: "[name].bundle.js",
      // Needed to compile multiline strings in Cesium
      sourcePrefix: ''
      // libraryExport: 'default'
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
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('')
      })
    ],
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'css-loader',
              options: {
                  // minify loaded css
                  minimize: true
              }
            }
          ]
        },
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
    // optimization: {
    //   minimize: true,
    //   minimizer: [new UglifyJsPlugin()],
    //   splitChunks: {
    //     cacheGroups: {
    //       vendors: {
    //         name: `chunk-vendors`,
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         chunks: 'initial'
    //       },
    //       commons: {
    //         name: 'Cesium',
    //         test: /[\\/]node_modules[\\/]cesium/,
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // },
    // devServer: {
    //   // contentBase: path.join(__dirname, "dist"),
    //   staticOptions: {
    //     redirect: false
    //   }
    // }
  }
}