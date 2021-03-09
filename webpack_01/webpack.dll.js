const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  devtool:false,
  entry:{
    utils: ['jquery', 'lodash']
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'_dll_[name].js',
    library:'_dll_[name]'
  },
  plugins:[
    new webpack.DllPlugin({
      name:'_dll_[name]',
      path:path.resolve(__dirname,'dist','[name].mainfest.json')
    })
  ]
}