import { RouterModule, Routes} from "@angular/router";
import { AboutComponent } from "./about.component";

const routes: Routes = [
	{
		path: 'about',
		pathMatch: 'full',
		component: AboutComponent,
		children: []
	}
];

export const AboutRoutes = RouterModule.forRoot( routes );