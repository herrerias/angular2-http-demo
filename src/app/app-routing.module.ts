import {Routes} from "@angular/router";
import {PeopleListComponent} from "./people/people-list/people-list.component";
import {StarshipListComponent} from "./starships/starship-list/starship-list.component";

export const routes: Routes = [
    {path: '', redirectTo: 'people', pathMatch:'full'},
    {path: 'people', component: PeopleListComponent},
    {path: 'starships', component: StarshipListComponent}
  ];
