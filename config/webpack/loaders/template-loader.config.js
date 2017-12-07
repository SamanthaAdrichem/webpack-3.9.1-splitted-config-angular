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
			template: srcPath + '/index.html'
		})
	]
};
