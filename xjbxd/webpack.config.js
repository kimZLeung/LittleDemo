var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [
    	"webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:8080",
    	'./app.jsx'
	],
	output: {
		filename: 'bundleApp.js'
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react'] // 可以把ES6和JSX语法转换过来
			}
		}, {
			test: /\.css$/,
			loader: 'style!css?modules'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new OpenBrowserPlugin({
		// 	url: 'http://localhost:8080/tdApp.html'
		// })
	]
}