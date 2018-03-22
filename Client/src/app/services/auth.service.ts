import { Injectable, ViewContainerRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class AuthService {

  BASE_URL = environment.BASE_URL + 'api/auth';

  constructor(private http: Http, public toastr: ToastsManager) {
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signUp(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user, {withCredentials: true})
    .map(res => {
      res.json();
    })
    .catch(e => {
      this.toastr.error(e._body);
      return Observable.throw(e);
    });
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials: true})
      .map(res => {
        this.toastr.success('Welcome!', 'Success');
        res.json();
        setTimeout (() => { location.reload(); }, 0);
      })
      .catch(e => {
        this.toastr.error(e._body);
        return Observable.throw(e);
      });
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {}, {withCredentials: true})
      .map(res => {
        res.json();
        location.reload();
      })
    .catch(e => {
      this.toastr.error(e._body);
      return Observable.throw(e);
    });
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => res.json())
      .catch(e => {
        return Observable.throw(e);
    });
  }
}
