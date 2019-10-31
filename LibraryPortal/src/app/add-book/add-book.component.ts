import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookManagementService } from '../service/book-management.service';
import { CategoryManagementService } from '../service/category-management';
import { LanguageManagementService } from '../service/language-management';
import { Category } from '../model/category';
import { Language } from '../model/language';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-add-book',
    templateUrl: 'add-book.component.html'
})

export class AddBookComponent implements OnInit {

    user: User = null;
    isLoggedAsLibrarian = false;
    isLogged = false;

    addBookForm: any = {};
    loading = false;

    message: string = null;

    categories: Category[] = [];
    languages: Language[] = [];

    constructor(
        private router: Router,
        private bookManagementService: BookManagementService,
        private categoryManagementService: CategoryManagementService,
        private languageManagementService: LanguageManagementService,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.getCategories();
        this.getLanguages();
        this.loading = false;

        if (sessionStorage.getItem('user') !== 'null') {
            this.user = JSON.parse(sessionStorage.getItem('user'));

            this.isLogged = true;

            if (this.user.roleName === 'Librarian') {
                this.isLoggedAsLibrarian = true;
            } else {
                this.isLoggedAsLibrarian = false;
            }
        } else if (this.loginService.getLogin()) {
            this.loginService.getLogin()
                .subscribe(
                    data => {
                        if (data.email != null) {
                            this.user = data;
                            sessionStorage.setItem('user', JSON.stringify(this.user));
                            sessionStorage.setItem('loginFailed', 'false');
                        }
                    },
                    () => {
                        if (sessionStorage.getItem('user') === 'null') {
                            sessionStorage.setItem('loginFailed', 'true');
                        }
                    }
                );
        } else {
            this.isLogged = false;
            this.router.navigate(['/login']);
        }

    }

    getCategories() {
        this.categoryManagementService.getCategories().subscribe(
            data => {
                this.categories = data;
            }
        );
    }

    getLanguages() {
        this.languageManagementService.getLanguages().subscribe(
            data => {
                this.languages = data;
            }
        );
    }

    getErrorMessage(message: string) {
        this.message = message;
        this.loading = false;
    }

    onSubmit() {

        this.bookManagementService.addBook(this.addBookForm)
            .subscribe(
                data => {
                    this.message = data;
                },
                error => {
                    this.getErrorMessage(error.message);
                },
                () => {
                    if (this.message.includes('Success All was successful')) {
                        this.loading = true;
                        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                            this.router.navigate(['/add-book']));
                    }
                }
            );
    }
}
