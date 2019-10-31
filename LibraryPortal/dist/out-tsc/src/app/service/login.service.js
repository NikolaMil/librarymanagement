import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/login';
        this.object = null;
    }
    login(email, password) {
        const objectBody = {
            'email': email,
            'password': password
        };
        this.object = this.http.post(this.url, objectBody);
    }
    getLogin() {
        return this.object;
    }
    logout() {
        this.object = null;
        sessionStorage.setItem('user', 'null');
    }
};
LoginService = tslib_1.__decorate([
    Injectable()
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map