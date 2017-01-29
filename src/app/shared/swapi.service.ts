import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export const BASE_URL_API: string = 'http://swapi.co/api/';
const SEARCH_QUERY: string = '?search=';

@Injectable()
export class SwapiService {
  private http: Http;
  private data: Object;

  constructor(http: Http) {
    this.http = http;
  }

  getHttp(): Http {
    return this.http;
  }

  getData(): Object {
    return this.data;
  }

  setData(data: Object) {
    this.data = data;
  }

  search(urlBase: string, query: string): Observable<Object[]> {
    let queryUrl: string = urlBase + SEARCH_QUERY + query;

    return this.http.get(queryUrl)
      .map((response: Response) => {
        console.log("raw response", response.json());
        return (<any>response.json());
      });
  }

}
