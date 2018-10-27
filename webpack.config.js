const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Fiber = require('fibers');

module.exports = {
	// devtool: "source-map", 
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js',
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	devServer: {
		filename: 'bundle.js',
		contentBase: './public',
		port: 3000
	},
	module: {
		rules: [ {
			test: /\.(js|jsx)$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		  },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					}, {
						loader: "sass-loader",
						options: {
							includePaths: ["src/assets/styles/_main.scss", "public/main.css"],
							outputStyle: 'compressed',
							fiber: Fiber
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}

		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new BrowserSyncPlugin({
			ui: false,
			host: 'localhost',
			port: 3000,
			files: ["./public/*.css", "./public/*.js", "./public/*.html"],
			server: {
				baseDir: ['public']
			},
			reload: false
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.(sa|sc|c)ss$/,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', {
					discardComments: {
						removeAll: true
					}
				}],
			},
			canPrint: true
		})
	]
}