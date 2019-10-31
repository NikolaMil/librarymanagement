import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SearchBooksComponent = class SearchBooksComponent {
    constructor(router, service, categoryManagementService, languageManagementService) {
        this.router = router;
        this.service = service;
        this.categoryManagementService = categoryManagementService;
        this.languageManagementService = languageManagementService;
        this.books = [];
        this.loading = false;
        this.page = 1;
        this.searchBookForm = {};
        this.categories = [];
        this.languages = [];
        this.showMyContainer = false;
    }
    ngOnInit() {
        this.searchBooks();
        this.getCategories();
        this.getLanguages();
        console.log(this.searchBookForm.role + '   init');
        if (this.user == null) {
            if (sessionStorage.getItem('user') !== 'null') {
                this.user = JSON.parse(sessionStorage.getItem('user'));
            }
            else {
                this.router.navigate([`/login`]);
            }
        }
    }
    getBooks() {
        this.service.getBooks().subscribe(data => {
        });
    }
    searchBooks() {
        console.log(this.searchBookForm.role + '   metod');
        this.service.searchBooks(this.searchBookForm).subscribe((data) => {
            this.loading = true;
            this.books = data;
            this.totalRec = this.books.length;
        });
    }
    onSubmit() {
        this.searchBooks();
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
    addBook() {
        this.router.navigateByUrl('/add-book');
    }
    clearFilters() {
        this.searchBookForm.title = '';
        this.searchBookForm.author = '';
        this.searchBookForm.publishYear = '';
        this.searchBookForm.category = '';
        this.searchBookForm.language = '';
    }
};
tslib_1.__decorate([
    Input()
], SearchBooksComponent.prototype, "user", void 0);
SearchBooksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-books',
        templateUrl: 'search-books.component.html',
        styleUrls: ['search-books.component.css']
    })
], SearchBooksComponent);
export { SearchBooksComponent };
//# sourceMappingURL=search-books.component.js.map