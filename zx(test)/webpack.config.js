
var path = require("path")
var webpack = require("webpack")

module.exports = {
	entry: [
		"webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:8080",
		"./lib/js/index.js"
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: __dirname + "img/",
		filename: "dist.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}