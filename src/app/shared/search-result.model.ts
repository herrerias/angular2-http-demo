import {SwapiBase} from "./swapi.model";

export class SearchResult {
  count: number;
  next: string;
  previous: string;
  results: SwapiBase[];

  constructor(obj?: any){
    this.count = obj && obj.count || null;
    this.next = obj && obj.next || null;
    this.previous = obj && obj.previous || null;
    this.results = obj && obj.results || null;
  }
}
