import { configPath } from '../../vars/paths.config';

export const typescriptAngularLoader = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: configPath + '/tsconfig.json',
						}
					},
					{ loader: 'angular2-template-loader' }
				]
			}
		]
	}
};