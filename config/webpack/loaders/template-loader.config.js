import { srcPath } from './../../vars/paths.config';

const HtmlWebpackPlugin = require('html-webpack-plugin');

export const templateLoader = {
	plugins: [
		new HtmlWebpackPlugin({
			template: srcPath + '/index.ejs',
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