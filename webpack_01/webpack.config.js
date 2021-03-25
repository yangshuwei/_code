
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConsolePlugin = require('./plugins/console-plugin');
const ClearWebpackExcludeDll = require('./plugins/clear-webpack-exclude-plugin')
const webpack = require('webpack');
const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smv = new speedMeasureWebpackPlugin();
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports=smv.wrap({
  devtool:false,
  entry:{
    app:'./src/index.js',
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].[hash].js',
    chunkFilename:'[name].js'
  },
  resolve:{
    extensions:[".js",".jsx",".json",".css"],
    alias:{
      "bootstrap":path.resolve(__dirname,'node_modules/bootstrap/dist/bootstrap.css'),
      "jquery":path.resolve(__dirname,'node_modules/jquery/dist/jquery.min.js')
    },
    modules:[path.resolve(__dirname,'node_modules')]
  },
  resolveLoader:{
    modules:[path.resolve(__dirname,'loaders'),path.resolve(__dirname,'node_modules')]
  },
  module:{
    noParse:/jquery/,
    rules:[
      // {
      //   loader:"thread-loader",
      //   options:{
      //     workers:3
      //   }
      // },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader:'babel-loader',
          options:{
            presets: [["@babel/preset-env",{"modules":false}],"@babel/preset-react"],
            plugins:[
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test:/\.css|.less$/,use:['style-loader','css-loader']
      },
      // {
      //   test:/\.png|jpg$/,
      //   use:{
      //     loader:'file-loader',
      //     options:{
      //       filename:'[hash].[ext]'
      //     }
      //   }
      // },
      {
        test:/\.png|jpg$/,
        use:{
          loader:'url-loader',
          options:{
            filename:'[hash].[ext]',
            limit:8*1024
          }
        }
      }
    ]
  },
  plugins:[
    // new HtmlWebpackPlugin({
    //   filename:'../dist/index.html',
    //   template:'./src/index.html',
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // // new ConsolePlugin(),
    // new webpack.IgnorePlugin(/\.\/locale/,/moment$/),
    // new webpack.DllReferencePlugin({
    //   manifest:require('./dist/utils.mainfest.json')
    // })
    // new CleanWebpackPlugin(),
    new ClearWebpackExcludeDll({
      exclude:['_dll_utils.js','utils.mainfest.json']
    })
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    open:true,
    port:3001,
    hot:true,
    host:'0.0.0.0'
  }
})