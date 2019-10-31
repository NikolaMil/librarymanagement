import { AddBookComponent } from './../add-book/add-book.component';
import { BookManagementService } from '../service/book-management.service';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { BookInfoComponent } from '../book-info/book-info.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ReservationManagementService } from '../service/reservation-management.service';
import { CategoryManagementService } from '../service/category-management';
import { LanguageManagementService } from '../service/language-management';
import { SearchBooksService } from '../service/search-books.service';
import { Book } from '../model/book';
import { User } from '../model/user';

import { Category } from '../model/category';
import { Language } from '../model/language';

import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Reservation } from '../model/reservation';
import { AddReservationComponent } from '../add-reservation/add-reservation.component';




@Component({
    selector: 'app-search-books',
    templateUrl: 'search-books.component.html',
    styleUrls: ['search-books.component.css']
})

export class SearchBooksComponent implements OnInit {

    displayedColumnsLibrarian: string[] = ['info', 'isbn', 'title', 'author', 'publishYear', 'edit'];
    displayedColumnsMember: string[] = ['info', 'title', 'author', 'reserve'];

    @Input() user: User;

    books: Book[] = [];

    booksTitle: Book[] = [];
    filteredTitles: Observable<Book[]>;
    titleCtrl = new FormControl();

    dataSource = new MatTableDataSource<Book>(this.books);
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    public loading = false;
    public totalRec: number;
    public page = 1;

    isMember: boolean;
    showMyContainer = false;
    public searchBookForm: any = {};

    public categories: Category[] = [];
    public languages: Language[] = [];

    constructor(
        private router: Router,
        private service: SearchBooksService,
        private bookManagementService: BookManagementService,
        public categoryManagementService: CategoryManagementService,
        public languageManagementService: LanguageManagementService,
        private reservationManagementService: ReservationManagementService,
        private dialog: MatDialog ) {}

    ngOnInit() {
        this.searchBooks();
        this.getCategories();
        this.getLanguages();
        this.getBooks();

        if (this.user == null) {
            if (sessionStorage.getItem('user') !== 'null') {
                this.user = JSON.parse(sessionStorage.getItem('user'));
            } else {
                this.router.navigate([`/login`]);
            }
        }

        this.filteredTitles = this.titleCtrl.valueChanges
            .pipe(
                startWith(''),
                map(title => title.length >= 3 ? this.filter(title) : [])
            );
    }

    getBooks() {
        this.service.getBooks().subscribe(
            data => {
                this.booksTitle = data;
            }
        );
    }

    filter(value: string): Book[] {
        const filterValue = value.toLowerCase();

        return this.booksTitle.filter(book => book.title.toLowerCase().indexOf(filterValue) === 0);
      }

    searchBooks() {
        this.service.searchBooks(this.searchBookForm).subscribe(
            (data: any[]) => {
                this.loading = true;
                this.books = data;
                this.dataSource = new MatTableDataSource(this.books);
                this.dataSource.paginator = this.paginator;
                this.totalRec = this.books.length;
            }
        );
    }

    onSubmit() {
        this.searchBooks();
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

    addBook() {
        this.router.navigate(['/add-book']);
    }

    callSearch() {
        if (this.bookManagementService.submitted) {
            this.searchBooks();
        }
    }

    clearFilters() {
        this.searchBookForm.title = '';
        this.searchBookForm.author = '';
        this.searchBookForm.publishYear = '';
        this.searchBookForm.category = '';
        this.searchBookForm.language = '';
    }

    onInfo(book: Book) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.bookManagementService.populateForm(book);
        this.dialog.open(BookInfoComponent, dialogConfig);
    }

    onEdit(book: Book) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.bookManagementService.populateForm(book);
        this.dialog.open(EditBookComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(() => {
            this.callSearch();
        });
    }

    onReserve(reservation: Reservation, userMembershipId, bookISBN) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '26%';
        this.reservationManagementService.populateAddReservationForm(reservation, userMembershipId, bookISBN);
        this.dialog.open(AddReservationComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(() => {
            this.callSearch();
        });
    }
}
