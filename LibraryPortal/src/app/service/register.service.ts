import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from '../model/userRegister';
import { environment } from './../../environments/environment';


@Injectable()

export class RegisterService {

    public url = environment.serverUrl + '/api/signup';

    constructor(private http: HttpClient) { }

    register(user: UserRegister): Observable<any> {

        return this.http.post(this.url, user);
    }
}
