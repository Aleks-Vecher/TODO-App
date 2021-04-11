const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {merge} = require('webpack-merge');
// const common = require('./webpack.common.js');

const serverConfig = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    main: path.resolve(__dirname, './src/server/index.js'),
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import','@loadable/babel-plugin']
          }
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          },
        }],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CleanWebpackPlugin(),
    new LoadablePlugin(),
    new webpack.DefinePlugin({
      BROWSER: JSON.stringify(false)
    })
  ]
}

const clientConfig = {
  mode: "development",
  devtool: 'eval-cheap-module-source-map',
  // entry: {
  //   main: path.resolve(__dirname, './src/TestComponent/Mains.jsx')
  // },
  entry: {
    main: path.resolve(__dirname, './src/index.jsx')

  },
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
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import', '@loadable/babel-plugin']
          }
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
          'postcss-loader'
        ],
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
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      BROWSER: JSON.stringify(true)
    })

  ],
  optimization: {
    minimize: true,
  },
}


module.exports = [serverConfig, clientConfig]