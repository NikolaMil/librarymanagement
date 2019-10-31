import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(router, 
    // tslint:disable-next-line: no-shadowed-variable
    RegisterService) {
        this.router = router;
        this.RegisterService = RegisterService;
        this.message = null;
        this.validationMessage = null;
        this.registerForm = {};
        this.loading = false;
    }
    ngOnInit() {
        sessionStorage.setItem('loginFailed', 'false');
    }
    onSubmit() {
        this.loading = true;
        this.registerForm.roleName = 'Member';
        this.RegisterService.register(this.registerForm)
            .subscribe(data => {
            this.message = data;
            this.validationMessage = data.substring(1, data.length - 1);
        }, error => {
            console.error(error);
            this.loading = false;
        }, () => {
            if (this.message.includes('Success All was successful')) {
                this.isRegistered = true;
                this.router.navigate(['/register']);
            }
            else {
                this.isRegistered = false;
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: 'register.component.html'
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map