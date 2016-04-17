'use strict';

// MODULES //

var path = require( 'path' );
var webpack = require( 'webpack' );


// CONFIG //

var config = {
	// Gives you sourcemaps without slowing down rebundling
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000/', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		path.join( __dirname, 'examples/main.js' )
	],
	output: {
		path: path.join( __dirname, 'examples' ),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [ 'react-hot', 'babel' ],
			include: [
				path.join( __dirname, 'src' ),
				path.join( __dirname, 'examples' )
			]
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	}
};


// EXPORTS //

module.exports = config;
