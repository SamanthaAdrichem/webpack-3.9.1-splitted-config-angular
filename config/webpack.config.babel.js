import { APP_ENV } from './vars/environment.config';
import { developmentConfig } from './webpack/development.config';
import { productionConfig } from './webpack/production.config';

let config;

switch (APP_ENV)
{
	case 'production':
		config = productionConfig;
		break;

	default:
	case 'development':
		config = developmentConfig;
		break;
}

module.exports = config;