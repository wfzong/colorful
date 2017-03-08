var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base.js')

var webpackConfig = merge(baseWebpackConfig, {

  output: {
    //publicPath: 'http://img.bjcshy.com/vue',
  }

})

module.exports = webpackConfig