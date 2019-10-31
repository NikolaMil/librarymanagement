import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let SearchBooksService = class SearchBooksService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/books';
        this.searchUrl = environment.serverUrl + '/api/search-books';
        this.object = null;
    }
    getBooks() {
        return this.http.get(this.url);
    }
    searchBooks(searchBook) {
        return this.http.post(this.searchUrl, searchBook);
    }
};
SearchBooksService = tslib_1.__decorate([
    Injectable()
], SearchBooksService);
export { SearchBooksService };
//# sourceMappingURL=search-books.service.js.map