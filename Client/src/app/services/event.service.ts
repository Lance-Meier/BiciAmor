import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class EventService {

  BASE_URL = environment.BASE_URL + 'api/events';

  constructor(private http: Http) { }

getEvents() {
  return this.http.get(`${this.BASE_URL}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

makeEvent(event) {
  return this.http.post(`${this.BASE_URL}`, event)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

getSingleEvent(id) {
  return this.http.get(`${this.BASE_URL}/${id}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

updateEvent(id, event) {
  return this.http.patch(`${this.BASE_URL}/${id}`, event)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

deleteEvent(id) {
  confirm('Are you sure you want to delete this event?');
  return this.http.delete(`${this.BASE_URL}/${id}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

}
