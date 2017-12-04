const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

import { commonConfig } from './common.config';
import { srcPath } from "../vars/paths.config";

export let productionConfig;

productionConfig = {
	plugins: [
		new CopyWebpackPlugin([ { from: '.htaccess' } ], { context: srcPath } ),
		new webpack.LoaderOptionsPlugin({ minimize: true }),
		new UglifyJsPlugin({
			sourceMap: true
		})
	]
};

productionConfig  = webpackMerge( commonConfig, productionConfig );