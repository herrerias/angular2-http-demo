import {Injectable} from '@angular/core';
import {SwapiService} from "../../shared/swapi.service";

@Injectable()
export class StarshipService extends SwapiService {
  URL_SERVICE: string = 'starships/';
}
