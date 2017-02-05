import {SwapiBase} from "../shared/swapi.model";
import {People} from "../people/people.model";
import {Species} from "../species/species.model";
import {Starship} from "../starship/starship.model";
import {Vehicle} from "../vehicle/vehicle.model";
import {Planet} from "../planet/planet.model";

export class Film extends SwapiBase{
  title: string // The title of this film
  episode_id: number; // The episode number of this film.
  opening_crawl: string // The opening paragraphs at the beginning of this film.
  director: string // The name of the director of this film.
  producer: string // The name(s) of the producer(s) of this film. Comma separated.
  release_date: number // The ISO 8601 date format of film release at original creator country.
  species: Species[]; // An  of species resource URLs that are in this film.
  starships: Starship[];  // An  of starship resource URLs that are in this film.
  vehicles: Vehicle[];  // An  of vehicle resource URLs that are in this film.
  characters: People[];  // An  of people resource URLs that are in this film.
  planets: Planet[];  // An  of planet resource URLs that are in this film.
  url: string // the hypermedia URL of this resource.
  created: string // the ISO 8601 date format of the time that this resource was created.
  edited: string // the ISO 8601 date format of the time that this resource was edited.
}
