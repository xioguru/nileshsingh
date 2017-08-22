var webpack = require('webpack')

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
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
