var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: __dirname + '/src/js/main.js',
  output: {
    path: __dirname + '/build',
    filename : 'bundle.js'
  },
  devServer:{
    inline: true,
    contentBase: './',
    port: 8888
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets:['es2015']
        }
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ]
};
