const path = require('path');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require('./webpack.common.js');
const proxyConf = require('../proxy.conf.json');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  devServer: {
    historyApiFallback: true,
    proxy: proxyConf
  }
});
