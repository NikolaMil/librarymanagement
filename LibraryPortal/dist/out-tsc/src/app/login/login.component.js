import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.registerForm = {};
        this.loading = false;
        this.message = null;
    }
    ngOnInit() {
        sessionStorage.setItem('user', 'null');
        if (sessionStorage.getItem('loginFailed') === 'false' ||
            sessionStorage.getItem('loginFailed') == null) {
            this.message = null;
        }
        else {
            this.message = 'Invalid credentials';
        }
    }
    userLogin() {
        this.loading = true;
        this.loginService.login(this.registerForm.email, this.registerForm.password);
        this.router.navigate([`/home`]);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: 'login.component.html'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map