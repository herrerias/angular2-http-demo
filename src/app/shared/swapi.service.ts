import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {SwapiBase} from "./swapi.model";
import {SearchResult} from "./search-result.model";

export const BASE_URL_API: string = 'http://swapi.co/api/';
const SEARCH_QUERY: string = '?search=';

@Injectable()
export class SwapiService {
  private http: Http;
  private data: SearchResult;

  constructor(http: Http) {
    this.http = http;
  }

  getHttp(): Http {
    return this.http;
  }

  getData(): SearchResult {
    return this.data;
  }

  setData(data: Object) {
    this.data = new SearchResult(data);
    console.log('raw data:', this.data);
  }

  search(urlBase: string, query: string): Observable<SearchResult> {
    let queryUrl: string = urlBase + SEARCH_QUERY + query;

    return this.http.get(queryUrl)
      .map((response: Response) => {
          this.data = response.json();
          return this.data;
        },
        (err: any) => {
          console.log("Error requesting API:", err);
        }
      );
  }

  getAll(url: string): Observable<SearchResult> {
    return this.http.get(BASE_URL_API + url)
      // calling .json() on the response to return data
      .map((response: Response) => response.json())
      // errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Request Swapi error'));
  }


  getPage(url: string): Observable<SearchResult> {
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Request Swapi error'));
  }
}
