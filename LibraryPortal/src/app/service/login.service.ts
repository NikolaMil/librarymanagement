import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {

    private url = environment.serverUrl + '/api/login';

    object: Observable<any> = null;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const objectBody = {
            'email': email,
            'password': password
        };
        this.object = this.http.post(this.url, objectBody);
    }

    getLogin(): Observable<any> {
        return this.object;
    }

    logout() {
        this.object = null;
        sessionStorage.setItem('user', 'null');
    }
}
