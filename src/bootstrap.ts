import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { APP_ENV } from './../config/vars/environment.config.js';

import { AppModule } from './app.module';

if (APP_ENV === 'production') {
	enableProdMode();
	console.log("production");
}

platformBrowserDynamic().bootstrapModule(AppModule);