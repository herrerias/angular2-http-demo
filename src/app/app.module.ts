import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {SwapiService} from "./shared/swapi.service";
import {PeopleService} from "./people/people.service";
import { SearchBoxComponent } from './shared/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SwapiService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
