const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')




/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    open: true
  },
  plugins: [
/*    new webpack.ProgressPlugin(),*/
    new MiniCssExtractPlugin({ filename:'main.[contenthash].css' }),
    new HtmlWebpackPlugin()
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            // プリセットを指定することで、ES2020 を ES5 に変換
            "@babel/preset-env",
          ],
        }
      }]
    }, {
      test: /.(sa|sc|c)ss$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",

        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.html$/,
      loader: "html-loader"
    }]
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
}
