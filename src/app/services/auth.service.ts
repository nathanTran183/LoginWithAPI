import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  token: string;

  constructor(private http: Http) {
    var user = JSON.parse(localStorage.getItem('user'));
    this.token = user && user.token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:4040/api/auth/login', JSON.stringify({ username: username, password: password }), options)
      .map((response: Response) => {
        //login successful
        let token = response.json() && response.json().token;
        let user = response.json() && response.json().user;        
        if (token) {
          localStorage.setItem('user', JSON.stringify({ user: user, token: token }));
          // console.log(localStorage.removeItem('user'));
          return true;
        }
        else {
          return false;
        }
      })
      .catch((error:any) => {
        return Observable.throw(error.json().message || 'Server error');
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('user');
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}