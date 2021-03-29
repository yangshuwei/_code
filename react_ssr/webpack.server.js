let path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');
module.exports = merge(base, {
  target: 'node',//打包的是服务器端node文件
  mode: 'development',//开发模式
  entry: path.resolve(__dirname, './src/server/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  module:{
    roules:[
      {
        test:/\.css$/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
        ]
      }
    ]
  }
})