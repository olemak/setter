const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
 // entry: './index.js',
  entry: {
    js: './index.js',
    css: './style/index.css'
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'index.[name]'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    hot: true
  },
   module: {
     rules: [
       {
         test: /\.scss|.css$/,
         use: [
           'style-loader', 'css-loader'
     //      { loader: 'css-loader', options: { importLoaders: 1 } },
     //      'postcss-loader'
         ]
       }
     ]
   },
   plugins: [
      new HtmlWebpackPlugin({
        title: '[setter]'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
};