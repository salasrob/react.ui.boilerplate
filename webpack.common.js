const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: ['/node_modules'],
        use: [{ loader: 'babel-loader'
        ,options: {
          presets: [
            ['@babel/preset-env', {
              "targets": "defaults" 
            }],
            '@babel/preset-react'
          ]
                } }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
   	  }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
