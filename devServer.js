var webpack = require("webpack");
var merge = require('webpack-merge')
var WebpackDevServer = require("webpack-dev-server");

var config = require("./webpack.config.base.js");

Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = [
	  "webpack/hot/dev-server",
	  "webpack-dev-server/client?http://localhost:8080/"
  ].concat(config.entry[name])
})


config.plugins = (config.plugins || []).concat(new webpack.HotModuleReplacementPlugin());



var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	hot: true,
	historyApiFallback: false,
	contentBase: config.output.path,
	publicPath:config.output.publicPath
});
server.listen(8080);

