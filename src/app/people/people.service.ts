import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {SwapiService, BASE_URL_API} from "../shared/swapi.service";

const BASE_URL_PEOPLE: string = 'people/';

@Injectable()
export class PeopleService extends SwapiService {

  constructor(http: Http) {
    super(http);
  }

  getAll(): Object {
    this.getHttp().request(BASE_URL_API+BASE_URL_PEOPLE)
      .subscribe((res: Response) => {
        this.setData(res.json());
      });
    return this.getData();
  }

  getBaseUrl(): string{
    return BASE_URL_API+BASE_URL_PEOPLE;
  }
}
