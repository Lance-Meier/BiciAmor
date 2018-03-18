import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AuthService]
})

export class AreaComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  isTracking = false;
  currentLat: any;
  currentLong: any;
  marker: google.maps.Marker;
  mapProp = {
    center: new google.maps.LatLng(45.0037, -93.2527),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);


    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'You are here'
      });
    } else {
      this.marker.setPosition(location);
    }
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  ngOnInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    this.findMe();
  }
}
