import { srcPath } from './../../vars/paths.config';

const HtmlWebpackPlugin = require('html-webpack-plugin');

export const templateLoader = {
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [ 'html-loader?root=' + srcPath ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: srcPath + '/index.html',
			chunksSortMode: packageSort(['polyfills', 'vendor', 'app'])
		})
	]
};

function packageSort(packages) {
	return function sort(left, right) {
		let leftIndex = packages.indexOf(left.names[0]);
		let rightIndex = packages.indexOf(right.names[0]);

		if ( leftIndex < 0 || rightIndex < 0) {
			throw 'unknown package';
		}

		if (leftIndex > rightIndex){
			return 1;
		}
		return -1;
	}
}