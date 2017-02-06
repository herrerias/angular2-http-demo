import {SwapiBase} from "../../shared/swapi.model";
import {Film} from "../../film/film.model";
import {Species} from "../../species/species.model";
import {Starship} from "../../starships/shared/starship.model";
import {Vehicle} from "../../vehicle/vehicle.model";

export class People extends SwapiBase{
  name: string; // The name of this person.
  birth_year: string; // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string; // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string; // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string; // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: string; // The height of the person in centimeters.
  mass: string; // The mass of the person in kilograms.
  skin_color: string; // The skin color of this person.
  homeworld: string; // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: string[]; // An array of film resource URLs that this person has been in.
  species: string[]; // An array of species resource URLs that this person belongs to.
  starships: string[]; // An array of starships resource URLs that this person has piloted.
  vehicles: string[]; // An array of vehicle resource URLs that this person has piloted.
  url: string; // the hypermedia URL of this resource.
  created: string; // the ISO 8601 date format of the time that this resource was created.
  edited: string;

  constructor(obj?: any) {
    super();
    this.name = obj && obj.name || null;
    this.birth_year = obj && obj.birth_year || null;
    this.eye_color = obj && obj.eye_color || null;
    this.gender = obj && obj.gender || null;
    this.hair_color = obj && obj.hair_color || null;
    this.height = obj && obj.height || null;
    this.mass = obj && obj.mass || null;
    this.skin_color = obj && obj.skin_color || null;
    this.homeworld = obj && obj.homeworld || null;
    this.films = obj && obj.films || null;
    this.species = obj && obj.species || null;
    this.starships = obj && obj.starships || null;
    this.vehicles = obj && obj.vehicles || null;
    this.url = obj && obj.url || null;
    this.created = obj && obj.created || null;
    this.edited = obj && obj.edited || null;
  }

}
