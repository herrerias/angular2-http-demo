"use strict";
var SearchResult = (function () {
    function SearchResult(obj) {
        this.count = obj && obj.count || null;
        this.next = obj && obj.next || null;
        this.previous = obj && obj.previous || null;
        this.results = obj && obj.results || null;
    }
    return SearchResult;
}());
exports.SearchResult = SearchResult;
