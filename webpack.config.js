// const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
// const serverConfig = require('./webpack.server')

module.exports = merge(common, {
  mode: "development",
  devtool: 'eval-cheap-module-source-map',
  // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false'
  output: {
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
          'postcss-loader'
        ],
      },
    ]
  },
  devServer: {
    port: 8090,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    // writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {source: false}
    }),
  ],
  optimization: {
    minimize: true,
  },
})