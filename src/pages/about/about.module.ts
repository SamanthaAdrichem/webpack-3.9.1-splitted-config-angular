import { NgModule } from '@angular/core';
import { AboutComponent } from "./about.component";
import { AboutRoutes } from "./about.routes";

@NgModule({
	imports: [ AboutRoutes ],
	declarations: [
		AboutComponent
	],
	exports: []
})
export class AboutModule {}