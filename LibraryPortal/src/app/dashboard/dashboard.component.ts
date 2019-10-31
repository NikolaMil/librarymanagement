import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    user: User = null;
    member = false;

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() {
        if (sessionStorage.getItem('user') !== 'null') {
            this.user = JSON.parse(sessionStorage.getItem('user'));

            if (this.user.roleName === 'Member') {
                this.member = true;
            }
        } else if (this.loginService.getLogin()) {
             this.loginService.getLogin()
                .subscribe(
                    data => {
                        if (data.email != null) {
                            this.user = data;

                            if (data.roleName === 'Member') {
                                this.member = true;
                            }

                            sessionStorage.setItem('user', JSON.stringify(this.user));
                            sessionStorage.setItem('loginFailed', 'false');
                        }
                    },
                    () => {
                        if (sessionStorage.getItem('user') === 'null') {
                            sessionStorage.setItem('loginFailed', 'true');
                            this.router.navigate([`/login`]);
                        }
                    }
                );
        } else {
            this.router.navigate([`/login`]);
        }
    }
}
