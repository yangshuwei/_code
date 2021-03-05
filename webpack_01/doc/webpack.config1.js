const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.[hash].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/'
  },
  module:{
    rules:[
      {
        test: '/\.js$/',
        exclude: "node_modules",
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legac": true }],
              ["@babel/plugin-proposal-class-propotices", { loose: true }]
            ]
          }
        }
        
      },
      {
        test:/\.css/,
        use:["style-loader","css-loader"]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(),
    
  ]
}