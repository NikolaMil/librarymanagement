import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable()

export class BookManagementService {

    public API = environment.serverUrl + '/api/books';

    public submitted = false;

    constructor(private http: HttpClient) { }

    form: FormGroup = new FormGroup({
        id: new FormControl(null),
        isbn: new FormControl(''),
        title: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        language: new FormControl('', Validators.required),
        publishYear: new FormControl('', Validators.required),
        numberAvailable: new FormControl('', Validators.required),
        publisher: new FormControl('', Validators.required),
        image: new FormControl(''),
        summary: new FormControl(''),
      });

      initializeFormGroup() {
        this.form.setValue({
            title: '',
            author: '',
            category: '',
            language: '',
            publishYear: '',
            numberAvailable: '',
            publisher: '',
            image: '',
            summary: ''
        });
      }

    addBook(book: Book): Observable<any> {
        return this.http.post(this.API, book);
    }

    getBook(id: number): Observable<any> {
        return this.http.get(this.API + id);
    }

    editBook(book: Book): Observable<any> {
        return this.http.put<Book>(this.API + '/' + book.id, book);
    }

    populateForm(book: Book) {
        this.form.setValue(book);
    }
}
