import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent,
		children: []
	}
];

export const HomeRoutes = RouterModule.forRoot( routes );