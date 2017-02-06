import {Injectable} from '@angular/core';
import {SwapiService} from "../../shared/swapi.service";

@Injectable()
export class PeopleService extends SwapiService {
  URL_SERVICE: string = 'people/';
}
