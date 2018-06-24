/**
 * Created by jeffersonmourak on 21/5/17.
 */
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var SRC_DIR = path.resolve(__dirname, 'src/');

var config = {
    resolve: {
      alias: {
        '@enums': path.resolve(SRC_DIR, 'enums'),
        '@components': path.resolve(SRC_DIR, 'components'),
        '@containers': path.resolve(SRC_DIR, 'containers'),
        '@reducers': path.resolve(SRC_DIR, 'reducers'),
        '@actions': path.resolve(SRC_DIR, 'actions'),
        '@configs': path.resolve(SRC_DIR, 'configs'),
        '@styles': path.resolve(SRC_DIR, 'styles')
      }
    },
    entry: {
      "TripReview": ['babel-polyfill' ,SRC_DIR + '/index.jsx'],
      "TripReview.min": ['babel-polyfill' ,SRC_DIR + '/index.jsx'],
    },
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : SRC_DIR,
                loader : 'babel-loader'
            },
            {
              test: /\.css/,
              loaders: ['style-loader', 'css-loader'],
              include: SRC_DIR
            }
        ]
    },
    devServer: {
      contentBase: __dirname,
      publicPath: '/dist/',
      compress: true,
      hot: true,
      port: 3000,
      watchContentBase: true,
      open: true,
      historyApiFallback: path.join(__dirname, 'index.html'),
    }
};

module.exports = config;
