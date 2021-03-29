let path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
  mode: 'development',//开发模式
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    roules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
})