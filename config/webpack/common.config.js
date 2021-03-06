const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

import { distPath, modulePath, rootPath, srcPath } from './../vars/paths.config';
import { APP_ENV } from './../vars/environment.config';
import { fileLoader } from './loaders/file-loader.config';
import { stylesLoader } from './loaders/styles-loader.config';
import { templateLoader } from './loaders/template-loader.config';
import { typescriptAngularLoader } from './loaders/typescript-angular-loader';

export let commonConfig;
let pathsToClean = [ 'dist' ];
let cleanOptions = {
	root: rootPath,
	verbose: true,
	dry: false
};

commonConfig = {
	devtool: APP_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
	entry: {
		app: srcPath + '/bootstrap.ts',
		polyfills: srcPath + '/polyfills.ts',
		vendor: srcPath + '/vendor.ts'
	},
	resolve: {
		modules: [ srcPath, modulePath ],
		extensions: ['.js', '.ts']
	},
	output: {
		path: distPath,
		publicPath: '/',
		filename: 'scripts/[name].js?[hash]',
		chunkFilename: '[id].chunk.js'
	},
	plugins: [
		new CleanWebpackPlugin( pathsToClean, cleanOptions ),
		new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, srcPath),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["polyfills", "vendor"],
			filename: "scripts/[name].js?[hash]",
			minChunks: Infinity
		})
	]
};

commonConfig = webpackMerge(
	commonConfig,
	fileLoader,
	stylesLoader,
	templateLoader,
	typescriptAngularLoader
);
