const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin()
  ]
}