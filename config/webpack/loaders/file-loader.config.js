import { srcPath } from './../../vars/paths.config';

let extensionsToCopy = ['gif', 'jpg', 'jpeg', 'png', 'webp', 'mp3', 'ttf', 'eot', 'ogg', 'svg', 'woff', 'woff2', 'ico'];
let expression = new RegExp('\.(' + extensionsToCopy.join('|') + ')$');

export const fileLoader = {
	module: {
		rules: [
			{
				test: expression,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]?[hash]',
							context: srcPath
						}
					}
				]
			}
		]
	}
};