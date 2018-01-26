import { srcPath } from './../../vars/paths.config';
import { configPath } from '../../vars/paths.config';

const cssOptions = {
	sourceMap: true
};

const postCssOptions = {
	config: {
		path: configPath + '/postcss.config.js',
		ctx: {
			autoprefixer: {
				browsers: [
					// for more see: https://github.com/ai/browserslist#queries
					'last 3 versions',
					'last 15 Chrome versions',
					'last 5 iOS versions',
					'last 5 Android versions',
				]
			}
		}
	},
	sourceMap: true
};

const sassOptions = {
	includePaths: [
		srcPath + '/styles'
	],
	sourceMap: true
};

export const stylesLoader = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'css-to-string-loader' },
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: cssOptions },
					{ loader: 'postcss-loader', options: postCssOptions },
					{ loader: 'sass-loader', options: sassOptions }
				]
			}
		]
	}
};
