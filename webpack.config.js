var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'vendor.js',
	minChunks: Infinity
});

module.exports = {
	entry: {
		vendor: ['react', 'react-dom'],
		app: './app'
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build/js')
	},
	plugins: [commonsPlugin],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};

