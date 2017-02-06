import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../shared/people.service";
import * as moment from "moment";
import {SwapiBase} from "../../shared/swapi.model";

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html',
  styleUrls: ['people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  private loading: boolean;
  private next: string;
  private previous: string;
  private data: SwapiBase[];

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
          this.data = searchResults.results;
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
          this.data = searchResults.results;
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
