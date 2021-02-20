const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, './src/index.jsx')]
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

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
};