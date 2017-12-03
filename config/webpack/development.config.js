const webpackMerge = require('webpack-merge');
import { commonConfig } from './common.config';

export let developmentConfig;

developmentConfig = {
	devServer: {
		historyApiFallback: true,
		stats: {
			colors: true
		},
		progress: true
	}
};
developmentConfig = webpackMerge( commonConfig, developmentConfig );