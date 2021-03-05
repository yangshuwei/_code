
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  mode:'development',
  devtool:'source-map',
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'app.js'
  },
  module:{
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
        test:'/\.css$/',use:['style-loader','css-loader']
      },
      
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./public/index.html',
    })
  ]
}