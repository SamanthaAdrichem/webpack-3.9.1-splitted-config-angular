import { NgModule } from '@angular/core';
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";

@NgModule({
	imports: [
		HomeModule,
		AboutModule
	],
})
export class PagesModule { }