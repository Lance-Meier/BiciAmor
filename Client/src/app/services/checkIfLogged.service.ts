import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Injectable()
export class EnterDetailsGuardService implements CanActivate {
  BASE_URL = 'http://localhost:3000/api/auth';

  constructor(private http: Http, private router: Router) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  canActivate(): Observable <any> {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['']);
          return false;
        }
      })
      .catch(this.handleError);
  }
}
