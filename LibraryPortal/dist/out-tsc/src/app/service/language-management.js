import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let LanguageManagementService = class LanguageManagementService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/languages';
    }
    getLanguages() {
        return this.http.get(this.url);
    }
};
LanguageManagementService = tslib_1.__decorate([
    Injectable()
], LanguageManagementService);
export { LanguageManagementService };
//# sourceMappingURL=language-management.js.map