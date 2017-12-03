import { configPath } from '../../vars/paths.config';

export const typescriptAngularLoader = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					'awesome-typescript-loader?configFileName=' + configPath + '/tsconfig.json',
					'angular2-template-loader'
				]
			}
		]
	}
};