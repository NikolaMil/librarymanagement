import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class LanguageManagementService {

    private url = environment.serverUrl + '/api/languages';

    constructor(private http: HttpClient) { }

    getLanguages(): Observable<any> {
        return this.http.get(this.url);
    }
}
