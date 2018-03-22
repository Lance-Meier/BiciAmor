import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class UserService {
  options: {withCredentials: true, Headers: 'Content-Type: application/json'};

  headers = new Headers({'Content-Type': 'application/json'});

  BASE_URL = environment.BASE_URL + 'api/users';

  constructor(private http: Http, public toastr: ToastsManager) { }

  getUser(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
    .map(res => res.json())
    .catch(e => {
      this.toastr.error(e._body);
      return Observable.throw(e);
    });
  }

  updateUser(id, user) {
    return this.http.patch(`${this.BASE_URL}/${id}`, user, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      this.toastr.error(e._body);
      return Observable.throw(e);
    });
  }

  deleteUser(id) {
    return this.http.delete(`${this.BASE_URL}/${id}`, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      this.toastr.error(e._body);
      return Observable.throw(e);
    });
  }


}
