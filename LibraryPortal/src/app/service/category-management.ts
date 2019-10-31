import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class CategoryManagementService {

    private url = environment.serverUrl + '/api/categories';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<any> {
        return this.http.get(this.url);
    }
}
