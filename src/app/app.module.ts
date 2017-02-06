import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import {PeopleService} from "./people/shared/people.service";
import { SearchBoxComponent } from './shared/search-box.component';
import { FilmComponent } from './film/film.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PlanetComponent } from './planet/planet.component';
import {StarshipService} from "./starships/shared/starship.service";
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    SearchBoxComponent,
    FilmComponent,
    SpeciesComponent,
    StarshipListComponent,
    VehicleComponent,
    SpeciesComponent,
    StarshipListComponent,
    VehicleComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PeopleService, StarshipService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
