import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {SwapiService, BASE_URL_API} from "../shared/swapi.service";

const BASE_URL_PEOPLE: string = 'starships/';

@Injectable()
export class StarshipService extends SwapiService {

  constructor(http: Http) {
    super(http);
  }

  getBaseUrl(): string{
    return BASE_URL_API+BASE_URL_PEOPLE;
  }
}
