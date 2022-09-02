const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {loader} = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
	entry: './src/scripts/pages/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "main.js",
	},
	mode: "development",
	devServer: {
		port: 8080,
		compress: true,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin()
	],
	module:  {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(woff|woff2|eot|tf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash][ext]'
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash][ext]'
				}
			},
			{
				test: /\.css$/,
				use:[
					MiniCssExtractPlugin.loader,
					{
						loader:'css-loader',
						options: {
						importLoaders: 1
						}
					},
					'postcss-loader'
				]
			}
		]
	}

}