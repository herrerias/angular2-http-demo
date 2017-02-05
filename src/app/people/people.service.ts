import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {SwapiService, BASE_URL_API} from "../shared/swapi.service";
import {People} from "./people.model";
import {SearchResult} from "../shared/search-result.model";
import {Observable} from "rxjs";

const BASE_URL_PEOPLE: string = 'people/';

@Injectable()
export class PeopleService extends SwapiService {

  constructor(http: Http) {
    super(http);
  }

  getAll(): Observable<SearchResult>{
    return super.getAll(BASE_URL_PEOPLE);
  }

  getBaseUrl(): string {
    return BASE_URL_API + BASE_URL_PEOPLE;
  }
}
