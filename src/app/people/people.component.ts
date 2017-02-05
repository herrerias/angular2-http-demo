import {Component, OnInit} from '@angular/core';
import {PeopleService} from "./people.service";
import {People} from "./people.model";
import * as moment from "moment";
import {SwapiBase} from "../shared/swapi.model";
import {SearchResult} from "../shared/search-result.model";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private loading: boolean;
  private next: string;
  private previous: string;
  private people: SwapiBase[];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.makeAllRequest();
  }

  makeAllRequest(): void {
    this.loading = true;
    this.peopleService.getAll()
      .subscribe(
        searchResults => {
          this.loading = false;
          this.next = searchResults.next;
          this.previous = searchResults.previous;
          this.people = searchResults.results;
        },
        err => {
          this.loading = false;
          console.log(err);
        },
        () =>{
          this.loading = false;
        });
  }

  makePageRequest(url: string): boolean{
    this.peopleService.getPage(url)
      .subscribe(
        searchResults => {
          this.loading = false;
          this.next = searchResults.next;
          this.previous = searchResults.previous;
          this.people = searchResults.results;
        },
        err => {
          this.loading = false;
          console.log(err);
        },
        () =>{
          this.loading = false;
        });
    return false;
  }

  getMoment(date: any): any {
    return moment(date).fromNow();
  }
}
