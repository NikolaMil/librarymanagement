import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AddBookComponent = class AddBookComponent {
    constructor(router, bookManagementService, categoryManagementService, languageManagementService, loginService) {
        this.router = router;
        this.bookManagementService = bookManagementService;
        this.categoryManagementService = categoryManagementService;
        this.languageManagementService = languageManagementService;
        this.loginService = loginService;
        this.user = null;
        this.isLoggedAsLibrarian = false;
        this.isLogged = false;
        this.addBookForm = {};
        this.loading = false;
        this.message = null;
        this.categories = [];
        this.languages = [];
    }
    ngOnInit() {
        this.getCategories();
        this.getLanguages();
        this.loading = false;
        if (sessionStorage.getItem('user') !== 'null') {
            this.user = JSON.parse(sessionStorage.getItem('user'));
            this.isLogged = true;
            if (this.user.roleName === 'Librarian') {
                this.isLoggedAsLibrarian = true;
            }
            else {
                this.isLoggedAsLibrarian = false;
            }
        }
        else if (this.loginService.getLogin()) {
            this.loginService.getLogin()
                .subscribe(data => {
                if (data.email != null) {
                    this.user = data;
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    sessionStorage.setItem('loginFailed', 'false');
                }
            }, () => {
                if (sessionStorage.getItem('user') === 'null') {
                    sessionStorage.setItem('loginFailed', 'true');
                }
            });
        }
        else {
            this.isLogged = false;
            this.router.navigate(['/login']);
        }
    }
    getCategories() {
        this.categoryManagementService.getCategories().subscribe(data => {
            this.categories = data;
        });
    }
    getLanguages() {
        this.languageManagementService.getLanguages().subscribe(data => {
            this.languages = data;
        });
    }
    getErrorMessage(message) {
        this.message = message;
        this.loading = false;
    }
    onSubmit() {
        this.bookManagementService.addBook(this.addBookForm)
            .subscribe(data => {
            this.message = data;
        }, error => {
            this.getErrorMessage(error.message);
        }, () => {
            if (this.message.includes('Success All was successful')) {
                this.loading = true;
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/add-book']));
            }
        });
    }
};
AddBookComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-book',
        templateUrl: 'add-book.component.html'
    })
], AddBookComponent);
export { AddBookComponent };
//# sourceMappingURL=add-book.component.js.map