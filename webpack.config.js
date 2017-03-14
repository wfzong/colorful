var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base.js')


baseWebpackConfig.devtool = '#source-map'

var webpackConfig = merge(baseWebpackConfig, {

  output: {
    //publicPath: 'http://img.bjcshy.com/vue',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'//生产环境用压缩版本
    }
  },
  plugins: [
  	new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]


})



//console.log(webpackConfig)


module.exports = webpackConfig