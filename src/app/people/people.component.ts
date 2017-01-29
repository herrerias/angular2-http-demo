import {Component, OnInit} from '@angular/core';
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private data: Object;
  private loading: boolean;
  private results: Object[];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    console.log('BaseUrl', this.getBaseUrl());
  }

  makeRequest(): void {
    this.data = this.peopleService.getAll();
  }

  getBaseUrl(): string {
    return this.peopleService.getBaseUrl();
  }

  updateResults(results: Object[]): void {
    this.results = results;
    console.log("results:", this.results);
  }
}
