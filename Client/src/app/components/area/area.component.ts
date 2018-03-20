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
    center: new google.maps.LatLng(40.7831, -73.9712),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  placesList: Array <any> = [];
  infoWindow;
  request;
  mapService;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    this.findMe()
      .then(() => console.log('functioning correctly'))
      .catch(err => this.findNearby());
    this.findByClick();
  }

    // Retrieve Initial Postion
    showPosition(position) {
      this.currentLat = position.coords.latitude;
      this.currentLong = position.coords.longitude;
      const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.panTo(location);
      const icon = {
        url: 'http://www.clker.com/cliparts/0/V/t/A/W/N/google-maps-gris-th.png',
        scaledSize: new google.maps.Size(30, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (!this.marker) {
        this.marker = new google.maps.Marker({
          position: location,
          map: this.map,
          label: 'You',
          icon: icon
        });
      } else {
        this.marker.setPosition(location);
      }
    }
      // Determine User Location and Pass to Map
    findMe() {
      return new Promise ((reject, resolve) => {
        if (navigator.geolocation) {
          // asynchronous functionioning. this is why the .catch runs the function oninit!
          navigator.geolocation.getCurrentPosition((position) => {
            resolve (this.showPosition(position));
          });
        } else {
        reject('Geolocation is not supported by this browser.');
        }
      });
    }
      // Drop Bike Shop Markers
    createMarker(place) {
        const marker =  new google.maps.Marker({
          position: new google.maps.LatLng(place.geometry.viewport.f.f, place.geometry.viewport.b.b),
          map: this.map
        });
        google.maps.event.addListener(marker, 'click', () => {
          const placeDescription =
          `Name: ${place.name}<br>
          Open Now? : ${place.opening_hours.open_now}<br>
          Address: <a href='https://maps.google.com/?q=${place.vicinity}' target="_blank">${place.vicinity}</a><br>
          Rating: ${place.rating}/5`;
          this.infoWindow.setContent(placeDescription);
          this.infoWindow.maxWidth = 400;
          this.infoWindow.open(this.map, marker);
        });
        return marker;
    }
    findNearby() {
      this.request = {
        location: {lat: this.currentLat, lng: this.currentLong},
        radius: 2000,
        type: 'bicycle_store'
      };
      this.infoWindow = new google.maps.InfoWindow();
      this.mapService = new google.maps.places.PlacesService(this.map);
      this.mapService.nearbySearch(this.request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
            this.placesList.push(this.createMarker(results[i]));
          }
        }
      });
    }

    clearMarkers() {
      for (const place of this.placesList) {
        place.setMap(null);
      }
      this.placesList = [];
    }

    findByClick() {
      google.maps.event.addListener(this.map, 'click', (event) => {
        const updatedRequest = {
          location: event.latLng,
          radius: 2000,
          type: 'bicycle_store'
        };

        this.clearMarkers();

        this.mapService.nearbySearch(updatedRequest, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              this.placesList.push(this.createMarker(results[i]));
            }
          }
        });
      });
    }

    // Standard Logout Function
    logout() {
      this.auth.logout();
      this.router.navigate(['']);
    }

  // When the page loads, create the prop map, then set the browser position to the current position

}





