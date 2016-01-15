var path = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

module.exports = {
	entry: {
		main: './site.jsx'
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'bundle.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	plugins: [
		new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
	]
};
