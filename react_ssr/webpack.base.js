let path = require('path');
module.exports = {
  mode: 'development',
  devtool:"source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
          ]
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}