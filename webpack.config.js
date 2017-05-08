const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015']
          }
      },
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
       test: /\.png$/,
       loader: "url-loader?limit=100000"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ["style-loader", "css-loader", "sass-loader"]
      // }
      {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'sass-loader'],
       })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
