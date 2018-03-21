import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  BASE_URL = environment.BASE_URL + 'api/auth';

  constructor(private http: Http) { }

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
      .map(res => {
        res.json();
        location.reload();
      })
      .catch(e => {
        return Observable.throw(e);
      });
  }

  logout() { // needs work to implement and show properly
    return this.http.post(`${this.BASE_URL}/logout`, {}, {withCredentials: true})
      .map(res => {
        res.json();
        location.reload();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
}
