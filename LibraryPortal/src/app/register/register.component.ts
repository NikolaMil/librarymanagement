import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../service/register.service';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {

    message: string = null;
    validationMessage: string = null;
    isRegistered: boolean;

    registerForm: any = {};
    loading = false;

    constructor(
        private router: Router,
        // tslint:disable-next-line: no-shadowed-variable
        private RegisterService: RegisterService
    ) { }

    ngOnInit() {
        sessionStorage.setItem('loginFailed', 'false');
    }

    onSubmit() {

        this.loading = true;

        this.registerForm.roleName = 'Member';

        this.RegisterService.register(this.registerForm)
            .subscribe(
                data => {
                    this.message = data;
                    this.validationMessage = data.substring(1, data.length - 1);
                },
                error => {
                    console.error(error);
                    this.loading = false;
                },
                () => {

                    if (this.message.includes('Success All was successful')) {
                        this.isRegistered = true;
                        this.router.navigate(['/register']);
                    } else {
                        this.isRegistered = false;
                        this.router.navigate(['/register']);
                    }
                }
        );

    }
}
