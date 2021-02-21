const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = './src';
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {'index': './src/index.js'},
  output: {
    path: '/dist',
    filename: '[name].js'
//    filename: 'main.js',
    //path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: __dirname + '/dist',
    inline: true,
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({ filename:'css/main.css' }),
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              // プリセットを指定することで、ES2020 を ES5 に変換
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: 3,
              }
            ]
          ],
        }
      }],
      exclude: /node_modules/
    },
    {
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
    },
    {
      test: /\.html$/,
      loader: "html-loader"
    }]
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
}
