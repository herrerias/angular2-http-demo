import {Component, OnInit, Output, EventEmitter, ElementRef, Input} from '@angular/core';
import {SwapiService} from "./swapi.service";
import {Observable} from "rxjs";
import {SwapiBase} from "./swapi.model";
import {SearchResult} from "./search-result.model";

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBoxComponent implements OnInit {
  @Input() queryBase: string;
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult> = new EventEmitter<SearchResult>();

  constructor(public swapi: SwapiService, private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 2) // filter out if empty
      .debounceTime(250) // only once every 250ms
      .do(() => this.loading.next(true)) // enable loading and emit a true
      // search, discarding old events if new input comes in
      .map((query: string) => this.swapi.search(this.queryBase, query))
      .switch() //ignore all search events but the most recent
      // act on the return of the search, is an Observable[]
      .subscribe(
        (results: SearchResult) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );

  }

}
