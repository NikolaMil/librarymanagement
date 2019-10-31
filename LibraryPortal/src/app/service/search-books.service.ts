import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { SearchBook } from '../model/searchBook';

@Injectable()
export class SearchBooksService {

    private url = environment.serverUrl + '/api/books';
    private searchUrl = environment.serverUrl + '/api/search-books';

    constructor(private http: HttpClient) {}

    object: Observable<any> = null;

    getBooks(): Observable<any> {
        return this.http.get(this.url);
    }

    searchBooks(searchBook: SearchBook) {
        return this.http.post(this.searchUrl, searchBook);
    }
}
