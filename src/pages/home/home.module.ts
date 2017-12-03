import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HomeRoutes } from "./home.routes";

@NgModule({
	imports: [ HomeRoutes ],
	declarations: [
		HomeComponent
	],
	exports: []
})
export class HomeModule {}