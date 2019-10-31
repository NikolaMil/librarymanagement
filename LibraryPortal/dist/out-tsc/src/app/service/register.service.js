import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/signup';
    }
    register(user) {
        return this.http.post(this.url, user);
    }
};
RegisterService = tslib_1.__decorate([
    Injectable()
], RegisterService);
export { RegisterService };
//# sourceMappingURL=register.service.js.map