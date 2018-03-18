import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  BASE_URL = 'http://localhost:3000/api/auth';

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signUp(user) { // added to component
    return this.http.post(`${this.BASE_URL}/signup`, user, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      return Observable.throw(e);
    });
  }

  login(user) { // added to component
    return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(e => {
        return Observable.throw(e);
      });
  }

  logout() { // needs work to implement and show properly
    return this.http.post(`${this.BASE_URL}/logout`, {}, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
}
