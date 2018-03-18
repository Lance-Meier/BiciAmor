import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router) { }
  BASE_URL = 'http://localhost:3000/api/users';

  getUser(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
    .map(res => res.json())
    .catch(e => {
      return Observable.throw(e);
    });
  }

  updateUser(id, user) {
    return this.http.patch(`${this.BASE_URL}/${id}`, user)
    .map(res => res.json())
    .catch(e => {
      return Observable.throw(e);
    });
  }

  deleteUser(id) {
    confirm('Are you sure you want to delete your user?');
    return this.http.delete(`${this.BASE_URL}/${id}`)
    .map(res => res.json())
    .catch(e => {
      return Observable.throw(e);
    });
  }


}
