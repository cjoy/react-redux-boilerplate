const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_FILE = path.join(__dirname, '/src/index.js');
const OUTPUT_FILE = path.join(__dirname, '/dist/');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
});

const config = {
	entry: [
		'babel-polyfill',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		ENTRY_FILE
	],
	output: {
		path: OUTPUT_FILE,
		filename: '[name].js',
	},
	devtool: 'source-map',
	module: {
		loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['babel-preset-es2017', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
			},
			{
				test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
				loader: 'file'
			},
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NamedModulesPlugin(),
	],
	devServer: {
		inline: true,
		hot: true,
	},
};

module.exports = config;
