import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let BookManagementService = class BookManagementService {
    constructor(http) {
        this.http = http;
        this.API = environment.serverUrl + '/api/books';
    }
    addBook(book) {
        return this.http.post(this.API, book);
    }
};
BookManagementService = tslib_1.__decorate([
    Injectable()
], BookManagementService);
export { BookManagementService };
//# sourceMappingURL=book-management.service.js.map