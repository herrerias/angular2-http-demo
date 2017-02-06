"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var moment = require("moment");
var StarshipListComponent = (function () {
    function StarshipListComponent(starshipService) {
        this.starshipService = starshipService;
    }
    StarshipListComponent.prototype.ngOnInit = function () {
        this.makeAllRequest();
    };
    StarshipListComponent.prototype.makeAllRequest = function () {
        var _this = this;
        this.loading = true;
        this.starshipService.getAll()
            .subscribe(function (searchResults) {
            _this.loading = false;
            _this.next = searchResults.next;
            _this.previous = searchResults.previous;
            _this.data = searchResults.results;
        }, function (err) {
            _this.loading = false;
            console.log(err);
        }, function () {
            _this.loading = false;
        });
    };
    StarshipListComponent.prototype.makePageRequest = function (url) {
        var _this = this;
        this.starshipService.getPage(url)
            .subscribe(function (searchResults) {
            _this.loading = false;
            _this.next = searchResults.next;
            _this.previous = searchResults.previous;
            _this.data = searchResults.results;
        }, function (err) {
            _this.loading = false;
            console.log(err);
        }, function () {
            _this.loading = false;
        });
        return false;
    };
    StarshipListComponent.prototype.getMoment = function (date) {
        return moment(date).fromNow();
    };
    StarshipListComponent = __decorate([
        core_1.Component({
            selector: 'app-starship-list',
            templateUrl: 'starship-list.component.html',
            styleUrls: ['starship-list.component.css']
        })
    ], StarshipListComponent);
    return StarshipListComponent;
}());
exports.StarshipListComponent = StarshipListComponent;
