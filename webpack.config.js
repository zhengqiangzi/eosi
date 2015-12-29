var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry:{
   index:['es5-shim','es5-shim/es5-sham','./index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['', '.js','.css','.scss'],
    modulesDirectories:['node_modules','.','./lib','./stylesheets','./components'],//模块查找路径设置
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test:/\.css$/,
        loader:"style!css!autoprefixer"

      },
      {
        test:/\.png|\.jpg/,
        loader:"file"

      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
         $: 'jquery'
    })
  ]

}


