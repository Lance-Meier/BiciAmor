import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class ListingService {
  options: {withCredentials: true, Headers: 'Content-Type: application/json'};

 headers = new Headers({'Content-Type': 'application/json'});

 BASE_URL = environment.BASE_URL + 'api/listings';

  constructor(private http: Http) { }

getListings() { // added to listing component: DONE
  return this.http.get(`${this.BASE_URL}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

makeListing(listing) { // make link on listing page: DONE
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers, withCredentials: true });
  return this.http.post(`${this.BASE_URL}`, listing, options)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

getSingleListing(id) { // listing detail oninit: DONE
  return this.http.get(`${this.BASE_URL}/${id}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

updateListing(id, listing) { //
  return this.http.patch(`${this.BASE_URL}/${id}`, listing)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

deleteListing(id) { // added to listing detail link: DONE
  confirm('Are you sure you want to delete this listing?');
  return this.http.delete(`${this.BASE_URL}/${id}`)
  .map(res => res.json())
  .catch(e => {
    return Observable.throw(e);
  });
}

}
