const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//提取CSS--初始化

const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html-通过模板
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');//wp dev ser 的时候，也写入

var conf = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module:{
  	rules:[
  		{
  			test:/\.vue$/,
  			loader:"vue-loader",
  			options:{
  				loaders:{
  					scss:ExtractTextPlugin.extract({//提取scss--loader
	  					use:'css-loader!sass-loader',
	  					fallback:'vue-style-loader'
	  				}),
	  				css:ExtractTextPlugin.extract({//提取CSS--loader
	  					use:'css-loader',
	  					fallback:'vue-style-loader'
	  				})
  				}
  			}
  		},
      {
        test:/.css$/,
        loader:"css-loader"
      },
  		{//生成html-通过模板
  			test:/\.html$/,
  			loader:"html-loader"
  		},
      {
        test: /\.(png|jpg|gif)$/, 
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
  	]
  },
  plugins: [
  	new ExtractTextPlugin({//提取CSS--执行
  		filename:"[name].[hash].css"
  	}),
  	new HtmlWebpackPlugin({//生成html-通过模板
  		template:"./src/index.html",
  		alwaysWriteToDisk: true	//for HtmlWebpackHarddiskPlugin
  	}),
  	new HtmlWebpackHarddiskPlugin()	//执行写入
  ],
  devtool: '#eval-source-map'
};

module.exports = conf;