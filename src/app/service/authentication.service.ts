import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    login(userInfo) {
        return this.http.post(environment.apiBaseUrl+'/login',userInfo);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('userId');

        return this.http.post(environment.apiBaseUrl+'/login',{});
    }
}