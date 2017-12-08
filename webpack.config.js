const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
});

const config = {
	entry: './src/index.js',
	output : {
		filename: 'bundle.js',
		path: path.resolve('dist')
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
	            query: {
					presets:['babel-preset-es2017', 'react']
		        }
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
	],
};

module.exports = config;