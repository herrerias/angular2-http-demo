"use strict";
var people_list_component_1 = require("./people/people-list/people-list.component");
var starship_list_component_1 = require("./starships/starship-list/starship-list.component");
exports.appRoutes = [
    { path: '', redirectTo: 'people' },
    { path: 'people', component: people_list_component_1.PeopleListComponent },
    { path: 'starships', component: starship_list_component_1.StarshipListComponent }
];
