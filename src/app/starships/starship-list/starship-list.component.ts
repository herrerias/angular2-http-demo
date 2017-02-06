import {Component, OnInit} from '@angular/core';
import {StarshipService} from "../shared/starship.service";
import * as moment from "moment";
import {SwapiBase} from "../../shared/swapi.model";

@Component({
  selector: 'app-starship-list',
  templateUrl: 'starship-list.component.html',
  styleUrls: ['starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  private loading: boolean;
  private next: string;
  private previous: string;
  private data: SwapiBase[];

  constructor(private starshipService: StarshipService) {
  }

  ngOnInit() {
    this.makeAllRequest();
  }

  makeAllRequest(): void {
    this.loading = true;
    this.starshipService.getAll()
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
        () => {
          this.loading = false;
        });
  }

  makePageRequest(url: string): boolean {
    this.starshipService.getPage(url)
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
        () => {
          this.loading = false;
        });
    return false;
  }

  getMoment(date: any): any {
    return moment(date).fromNow();
  }

}
