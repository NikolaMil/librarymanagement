import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
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
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    if (data.roleName === 'Member') {
                        this.member = true;
                    }
                }
            }, () => {
                if (sessionStorage.getItem('user') === 'null') {
                    this.member = false;
                }
                else {
                    this.member = true;
                }
            });
        }
        else {
            this.member = false;
        }
    }
    logout() {
        this.loginService.logout();
        this.router.navigate([`/login`]);
    }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: 'menu.component.html'
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map