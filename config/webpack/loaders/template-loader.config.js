import { srcPath } from './../../vars/paths.config';

const HtmlWebpackPlugin = require('html-webpack-plugin');

export const templateLoader = {
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							root: srcPath,
							removeComments: true,
							collapseWhitespace: true,

							// angular 2 templates break if these are omitted
							removeAttributeQuotes: false,
							keepClosingSlash: true,
							caseSensitive: true,
							conservativeCollapse: true,
						}
					}
				]
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