import {SwapiBase} from "../../shared/swapi.model";

export class Starship extends SwapiBase{
  name : string; // The name of this starships. The common name, such as "Death Star".
  model : string; // The model or official name of this starships. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
  starship_class : string; // The class of this starships, such as "Starfighter" or "Deep Space Mobile Battlestation"
  manufacturer : string; // The manufacturer of this starships. Comma separated if more than one.
  cost_in_credits : string; // The cost of this starships new, in galactic credits.
  length : string; // The length of this starships in meters.
  crew : string; // The number of personnel needed to run or pilot this starships.
  passengers : string; // The number of non-essential people this starships can transport.
  max_atmosphering_speed : string; // The maximum speed of this starships in the atmosphere. "N/A" if this starships is incapable of atmospheric flight.
  hyperdrive_rating : string; // The class of this starships hyperdrive.
  MGLT : string; // The Maximum number of Megalights this starships can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
  cargo_capacity : string; // The maximum number of kilograms that this starships can transport.
  consumables : string  //  The maximum length of time that this starships can provide consumables for its entire crew without having to resupply.
  films: string[]; // An array of Film URL Resources that this starships has appeared in.
  pilots: string[]; // An array of People URL Resources that this starships has been piloted by.
  url : string; // the hypermedia URL of this resource.
  created : string; // the ISO 8601 date format of the time that this resource was created.
}
