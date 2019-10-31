import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

    user: User = null;
    member = false;

    constructor(private loginService: LoginService, public router: Router) { }

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
                            sessionStorage.setItem('user', JSON.stringify(this.user));
                            if (data.roleName === 'Member') {
                                this.member = true;
                            }
                        }
                    },
                    () => {
                        if (sessionStorage.getItem('user') === 'null') {
                            this.member = false;
                        } else {
                        this.member = true;
                        }
                    }
            );
        } else {
            this.member = false;
        }
    }

    logout() {
        this.loginService.logout();
        this.router.navigate([`/login`]);
    }
}
