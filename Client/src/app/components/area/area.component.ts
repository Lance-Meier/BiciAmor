import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { } from '@types/googlemaps';

const listMarkes = [];

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
    center: new google.maps.LatLng(40.7831, -73.9712),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  constructor(private auth: AuthService, private router: Router) { }

    // Retrieve Initial Postion
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
      // Determine User Location and Pass to Map
    findMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.showPosition(position);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    }



      // Drop Bike Shop Markers
    createMarker(place) {
        const marker =  new google.maps.Marker({
          position: new google.maps.LatLng(place.geometry.viewport.f.f, place.geometry.viewport.b.b),
          map: this.map
        });
    }

    findNearby() {
      const request = {
        location: {lat: this.currentLat, lng: this.currentLong},
        radius: 5000,
        type: 'bicycle_store'
      };
      const service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
            this.createMarker(results[i]);
          }
        }
      });
    }

    // Standard Logout Function
    logout() {
      this.auth.logout();
      this.router.navigate(['']);
    }
  // When the page loads, create the prop map, then set the browser position to the current position
  ngOnInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    this.findMe();
  }
}
