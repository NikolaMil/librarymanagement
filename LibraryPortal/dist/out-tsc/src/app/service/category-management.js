import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let CategoryManagementService = class CategoryManagementService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/categories';
    }
    getCategories() {
        return this.http.get(this.url);
    }
};
CategoryManagementService = tslib_1.__decorate([
    Injectable()
], CategoryManagementService);
export { CategoryManagementService };
//# sourceMappingURL=category-management.js.map