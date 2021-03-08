
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConsolePlugin = require('./plugins/console-plugin');
const webpack = require('webpack');
const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smv = new speedMeasureWebpackPlugin();
module.exports=smv.wrap({
  devtool:false,
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'app.js'
  },
  resolve:{
    extensions:[".js",".jsx",".json",".css"],
    alias:{
      "bootstrap":path.resolve(__dirname,'node_modules/bootstrap/dist/bootstrap.css'),
      "jquery":path.resolve(__dirname,'node_modules/jquery/dist/jquery.min.js')
    },
    modules:[path.resolve(__dirname,'node_modules')]
  },
  module:{
    noParse:/jquery/,
    rules:[
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader:'babel-loader',
          options:{
            presets:["@babel/preset-env","@babel/preset-react"],
            plugins:[
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test:/\.css$/,use:['style-loader','css-loader']
      },
      
    ]
  },
  plugins:[
    // new HtmlWebpackPlugin({
    //   filename:'index.html',
    //   template:'./public/index.html',
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // new ConsolePlugin(),
    new webpack.IgnorePlugin(/\.\/locale/,/moment$/)
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    open:true,
    port:3001,
    hot:true,
    host:'0.0.0.0'
  }
})