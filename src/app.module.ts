import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PagesModule } from "./pages/pages.module";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		PagesModule,
		RouterModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }