"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var search_result_model_1 = require("./search-result.model");
exports.BASE_URL_API = 'http://swapi.co/api/';
var SEARCH_QUERY = '?search=';
var SwapiService = (function () {
    function SwapiService(http) {
        this.http = http;
    }
    SwapiService.prototype.getHttp = function () {
        return this.http;
    };
    SwapiService.prototype.getData = function () {
        return this.data;
    };
    SwapiService.prototype.setData = function (data) {
        this.data = new search_result_model_1.SearchResult(data);
        console.log('raw data:', this.data);
    };
    SwapiService.prototype.search = function (urlBase, query) {
        var _this = this;
        var queryUrl = urlBase + SEARCH_QUERY + query;
        return this.http.get(queryUrl)
            .map(function (response) {
            _this.data = response.json();
            return _this.data;
        }, function (err) {
            console.log("Error requesting API:", err);
        });
    };
    SwapiService.prototype.getAll = function () {
        return this.http.get(exports.BASE_URL_API + this.URL_SERVICE)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Request Swapi error'); });
    };
    SwapiService.prototype.getPage = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Request Swapi error'); });
    };
    SwapiService = __decorate([
        core_1.Injectable()
    ], SwapiService);
    return SwapiService;
}());
exports.SwapiService = SwapiService;
