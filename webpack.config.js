const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
// const middleware = require('webpack-dev-middleware')
// const webpackConfig = require('./webpack.config');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: 'eval-cheap-module-source-map',
  entry: {
    main: [ path.resolve(__dirname, './src/index.jsx')]
  },
  // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false'
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

    ]
  },
  devServer: {
    port: 8090,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
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
}