const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

import { commonConfig } from './common.config';

export let productionConfig;

productionConfig = {
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true
		})
	]
};

productionConfig  = webpackMerge( commonConfig, productionConfig );