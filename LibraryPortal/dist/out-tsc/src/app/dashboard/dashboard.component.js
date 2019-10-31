import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = null;
        this.member = false;
    }
    ngOnInit() {
        if (sessionStorage.getItem('user') !== 'null') {
            this.user = JSON.parse(sessionStorage.getItem('user'));
            if (this.user.roleName === 'Member') {
                this.member = true;
            }
        }
        else if (this.loginService.getLogin()) {
            this.loginService.getLogin()
                .subscribe(data => {
                if (data.email != null) {
                    this.user = data;
                    if (data.roleName === 'Member') {
                        this.member = true;
                    }
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    sessionStorage.setItem('loginFailed', 'false');
                }
            }, () => {
                if (sessionStorage.getItem('user') === 'null') {
                    sessionStorage.setItem('loginFailed', 'true');
                    this.router.navigate([`/login`]);
                }
            });
        }
        else {
            this.router.navigate([`/login`]);
        }
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: 'dashboard.component.html'
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map