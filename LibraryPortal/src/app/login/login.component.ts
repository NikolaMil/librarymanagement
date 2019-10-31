import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    registerForm: any = {};
    loading = false;
    message: string = null;

    constructor(private loginService: LoginService,
                private router: Router) { }

    ngOnInit() {
        sessionStorage.setItem('user', 'null');

        if (sessionStorage.getItem('loginFailed') === 'false' ||
            sessionStorage.getItem('loginFailed') == null) {
            this.message = null;
        } else {
             this.message = 'Invalid credentials';
        }
    }

    userLogin() {
        this.loading = true;
        this.loginService.login(this.registerForm.email, this.registerForm.password);
        this.router.navigate([`/home`]);
    }
}
