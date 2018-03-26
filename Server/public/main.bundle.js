webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__ = __webpack_require__("./src/app/components/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_listing_listing_component__ = __webpack_require__("./src/app/components/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__ = __webpack_require__("./src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_event_detail_event_detail_component__ = __webpack_require__("./src/app/components/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_listing_detail_listing_detail_component__ = __webpack_require__("./src/app/components/listing-detail/listing-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_area_area_component__ = __webpack_require__("./src/app/components/area/area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_listing_service__ = __webpack_require__("./src/app/services/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__ = __webpack_require__("./src/app/services/checkIfLogged.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Imports





















// imports



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'event', component: __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__["a" /* EventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
    { path: 'event/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_event_detail_event_detail_component__["a" /* EventDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
    { path: 'listing', component: __WEBPACK_IMPORTED_MODULE_9__components_listing_listing_component__["a" /* ListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
    { path: 'listing/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_listing_detail_listing_detail_component__["a" /* ListingDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
    { path: 'area', component: __WEBPACK_IMPORTED_MODULE_15__components_area_area_component__["a" /* AreaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_listing_listing_component__["a" /* ListingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_listing_detail_listing_detail_component__["a" /* ListingDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_area_area_component__["a" /* AreaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_nav_nav_component__["a" /* NavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_22_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_19__services_listing_service__["a" /* ListingService */], __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_checkIfLogged_service__["a" /* EnterDetailsGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/area/area.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n}\n\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n}\n\nh2 {\n  font-size: 2.5em;\n  color: #f1f1f1;\n  text-align: center\n}\n\n.main-container, {\n  margin: 0;\n  padding: 0;\n}\n\n.heading {\n  margin: 0 0 -24px 0;\n  padding: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.8) no-repeat fixed center; \n}\n"

/***/ }),

/***/ "./src/app/components/area/area.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<div class=\"main-container\">\n  <div class=\"columns\">\n    <div class=\"column is-12\">\n      <div style=\"text-align:center\" class=\"heading\">\n        <br>\n        <h1>Local Bike Services</h1><br>\n        <h2>Click on the Map to View Places in a Different Area</h2>\n        <br>\n      </div>\n      <div>\n  </div>\n  <div>\n    <br>\n      <div #gmap style=\"width:100%;height:500px\" class=\"map\"></div>\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/components/area/area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaComponent = /** @class */ (function () {
    function AreaComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isTracking = false;
        this.mapProp = {
            center: new google.maps.LatLng(40.7831, -73.9712),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.placesList = [];
    }
    AreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
        this.findMe()
            .then(function () { return console.log('Working Correctly'); })
            .catch(function (err) { return _this.findNearby(); });
        this.findByClick();
        this.showPage();
    };
    AreaComponent.prototype.showPage = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (userLogged) {
            _this.user = userLogged;
        });
    };
    // Retrieve Initial Postion
    AreaComponent.prototype.showPosition = function (position) {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        var icon = {
            url: 'http://www.clker.com/cliparts/0/V/t/A/W/N/google-maps-gris-th.png',
            scaledSize: new google.maps.Size(30, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                label: 'You',
                icon: icon
            });
        }
        else {
            this.marker.setPosition(location);
        }
    };
    // Determine User Location and Pass to Map
    AreaComponent.prototype.findMe = function () {
        var _this = this;
        return new Promise(function (reject, resolve) {
            if (navigator.geolocation) {
                // asynchronous functionioning. this is why the .catch runs the function oninit!
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(_this.showPosition(position));
                });
            }
            else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    };
    // Drop Bike Shop Markers
    AreaComponent.prototype.createMarker = function (place) {
        var _this = this;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(place.geometry.viewport.f.f, place.geometry.viewport.b.b),
            map: this.map
        });
        google.maps.event.addListener(marker, 'click', function () {
            var placeDescription = "Name: " + place.name + "<br>\n          Open Now? : " + place.opening_hours.open_now + "<br>\n          Address: <a href='https://maps.google.com/?q=" + place.vicinity + "' target=\"_blank\">" + place.vicinity + "</a><br>\n          Rating: " + place.rating + "/5";
            _this.infoWindow.setContent(placeDescription);
            _this.infoWindow.maxWidth = 400;
            _this.infoWindow.open(_this.map, marker);
        });
        return marker;
    };
    AreaComponent.prototype.findNearby = function () {
        var _this = this;
        this.request = {
            location: { lat: this.currentLat, lng: this.currentLong },
            radius: 2000,
            type: 'bicycle_store'
        };
        this.infoWindow = new google.maps.InfoWindow();
        this.mapService = new google.maps.places.PlacesService(this.map);
        this.mapService.nearbySearch(this.request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.placesList.push(_this.createMarker(results[i]));
                }
            }
        });
    };
    AreaComponent.prototype.clearMarkers = function () {
        for (var _i = 0, _a = this.placesList; _i < _a.length; _i++) {
            var place = _a[_i];
            place.setMap(null);
        }
        this.placesList = [];
    };
    AreaComponent.prototype.findByClick = function () {
        var _this = this;
        google.maps.event.addListener(this.map, 'click', function (event) {
            var updatedRequest = {
                location: event.latLng,
                radius: 2000,
                type: 'bicycle_store'
            };
            _this.clearMarkers();
            _this.mapService.nearbySearch(updatedRequest, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        _this.placesList.push(_this.createMarker(results[i]));
                    }
                }
            });
        });
    };
    // Standard Logout Function
    AreaComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], AreaComponent.prototype, "gmapElement", void 0);
    AreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area',
            template: __webpack_require__("./src/app/components/area/area.component.html"),
            styles: [__webpack_require__("./src/app/components/area/area.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  color: #f1f1f1;\n}\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n\n}\nh2{\n  font-size: 2.5em;\n  color: #f1f1f1;\n  text-align: center;\n}\n.dashboard-main {\n  margin: 0 0 0 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.8) no-repeat fixed center; \n}\nsvg {\n  color: white;\n  font-size: 120px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.click-item{\n  background-color: rgba(252, 91, 93, 0.9);\n  padding: 80px 0 100px 0;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  border-top: 2px solid white;\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!user\"></app-login>\n<div *ngIf=\"user\" class=\"dashboard-main\">\n  \n  <br>\n  <div class=\"columns\">\n    <div class=\"column is-7 is-offset-3\">\n      <h1>What would you like to find?</h1>\n      <br>\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column click-item\">\n      <br>\n      <a [routerLink]=\"['event']\">\n        <i class=\"far fa-calendar-alt\"></i>\n        <br>\n        <br>\n        <h2>Local Events</h2>\n      </a>\n    </div>\n    <br>\n    <div class=\"column click-item\">\n      <br>\n      <a [routerLink]=\"['area']\">\n          <i class=\"fas fa-wrench\"></i>\n          <br>\n          <br>\n          <h2>Area Services and Businesses</h2>\n      </a>\n    </div>\n    <div class=\"column click-item\">\n      <br>\n      <a [routerLink]=\"['listing']\">\n          <i class=\"fas fa-dollar-sign\"></i>\n          <br>\n          <br>\n          <h2>Local User Listings</h2>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (userLogged) {
            _this.user = userLogged;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  event-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EventDetailComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__("./src/app/components/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/event-detail/event-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n  margin: 0 0 0 15%;\n}\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n  text-align: center\n\n}\n.heading-main {\n  background: rgba(0, 0, 0, 0.8) no-repeat fixed center; \n}"

/***/ }),

/***/ "./src/app/components/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column heading-main\">\n    <h1>Calender of Local Events</h1>\n    <br>\n    <br>\n    <br>\n    <h1>MOCK UP</h1>\n  </div>\n</div>\n<div *ngIf=\"!user\">\n  <h1>Forbidden</h1>\n  <a [routerLink]=\"['']\">Click here to Log In</a>\n</div>\n\n<img src=\"http://sendesignz.com/wp-content/uploads/2015/05/CLNDR.png\">"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EventComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (userLogged) {
            _this.user = userLogged;
        });
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/components/event/event.component.html"),
            styles: [__webpack_require__("./src/app/components/event/event.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/listing-detail/listing-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/listing-detail/listing-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listing-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/listing-detail/listing-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_service__ = __webpack_require__("./src/app/services/listing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingDetailComponent = /** @class */ (function () {
    function ListingDetailComponent(activatedRoute, listing, auth, router) {
        this.activatedRoute = activatedRoute;
        this.listing = listing;
        this.auth = auth;
        this.router = router;
        this.listingItem = {
            id: String
        };
    }
    ListingDetailComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    ListingDetailComponent.prototype.deleteListing = function () {
        this.listing.deleteListing(this.listingItem.id);
        this.router.navigate(['listing']);
    };
    ListingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.listing.getSingleListing(params['id'])
                .subscribe(function (singleItem) { return _this.listingItem = singleItem; });
        });
    };
    ListingDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing-detail',
            template: __webpack_require__("./src/app/components/listing-detail/listing-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/listing-detail/listing-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_listing_service__["a" /* ListingService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_listing_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListingDetailComponent);
    return ListingDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/listing/listing.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  color: #f1f1f1;\n}\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n\n}\nh2{\n  font-size: 2.5em;\n  color: #f1f1f1;\n  text-align: center;\n}\n.heading-main {\n  margin: 0;\n  padding: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.8) no-repeat fixed center; \n}\nsvg {\n  color: white;\n  font-size: 120px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.heading-listing, .card-container {\n  background-color: rgba(252, 91, 93, 0.9);\n  margin-bottom: -24px;\n}\n.listing-card{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  width: 85%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-left: 5%;\n}\n.card {\n  margin-bottom: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"columns\">\n    <div class=\"column\">\n      <div style=\"text-align:center\" class=\"heading-main\">\n        <br>\n        <h1>Local Listings and Announcements</h1>\n        <br>\n      </div>\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column is-half is-offset-one-quarter\">\n      <button class=\"button is-primary\">I have a new announcement</button><br><br>\n      <form>\n        <input class=\"input\" [(ngModel)]=\"newListing.name\" type=\"text\" placeholder=\"Name\" name=\"name\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newListing.description\" type=\"text\" placeholder=\"Description\" name=\"description\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newListing.price\" type=\"text\" placeholder=\"Price\" name=\"price\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newListing.location\" type=\"text\" placeholder=\"Location\" name=\"location\" required><br><br>\n        <label>Image for Listing</label><br><input [(ngModel)]=\"newListing.image\" type=\"file\" name=\"image\" disabled><br><br>\n        <button class=\"button is-success\"(click)=\"makeListing()\">Create Listing</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <div style=\"text-align:center\" class=\"heading-listing\">\n        <br>\n        <h1>Recent Listings</h1>\n        <br>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <br>\n    <div *ngFor=\"let listing of listings\" class=\"card listing-card\">\n        <div class=\"card-image\">\n          <figure class=\"image image is-256x256\">\n            <img src =\"https://dp.image-gmkt.com/dp2016/SG/GMKT.IMG/theme/2016/10/17/9beaa029-5434-496d-ba43-487e5b931202.png\" alt=\"listing image\">\n          </figure>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"media\">\n            <div class=\"media-content media-left\">\n              <a [href]=\"listing._id\"><p class=\"title is-2\">{{listing.name}}</p></a>\n              <br>\n              <p class=\"subtitle is-4\">Price: {{listing.price}}</p>\n              <p class=\"subtitle is-4\">Description: {{listing.description}}</p>\n              <p class=\"subtitle is-4\">Location: {{listing.location}}</p>\n              <a [href]=\"listing.createdBy\"><p class=\"subtitle is-4\">Created By: {{listing.createdBy}}</p></a><br>\n              <p class=\"subtitle is-4\"><time datetime=\"2016-1-1\">Created On: {{listing.created_at}}</time></p>\n            </div>\n            <div class=\"media-right\">\n                <figure class=\"image is-96x96\">\n                    <img src=\"https://azmeela.com/assets/img/user-160x160.jpg\" alt=\"user image\">\n                </figure>\n              </div>\n          </div>\n        </div>\n      </div>\n      <br>\n  </div>  \n\n"

/***/ }),

/***/ "./src/app/components/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_listing_service__ = __webpack_require__("./src/app/services/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = /** @class */ (function () {
    function ListingComponent(listingService, auth, router) {
        this.listingService = listingService;
        this.auth = auth;
        this.router = router;
        this.listings = [];
        this.newListing = {};
    }
    ListingComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    ListingComponent.prototype.makeListing = function () {
        this.listingService.makeListing(this.newListing)
            .subscribe(function (listing) {
            location.reload();
        });
    };
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getListings()
            .subscribe(function (res) { return _this.listings = res; });
    };
    ListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__("./src/app/components/listing/listing.component.html"),
            styles: [__webpack_require__("./src/app/components/listing/listing.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_listing_service__["a" /* ListingService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_listing_service__["a" /* ListingService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* Style the video: 100% width and height to cover the entire window */\nh1 {\n  font-size: 3.5em;\n}\nh2{\n  font-size: 2em;\n}\nh3{\n  font-size: 1.5em;\n}\n#myVideo {\n    position: absolute;\n    z-index: -2;\n    right: 0;\n    bottom: 0;\n    min-width: 100%; \n    min-height: 100%;\n}\n@media only screen and (max-width: 800px) {\n  #myVideo {\n    position: absolute;\n    z-index: -2;\n    right: 0;\n    bottom: 0;\n    min-width: 300%; \n    min-height: 100%;\n}\n}\n/* Add some content at the bottom of the video/page */\n.content {\n    position: absolute;\n    z-index: -1;\n    margin: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    color: #f1f1f1;\n    width: 100%;\n    height: 100%;\n    \n}\n.login-form{\n  position: absolute;\n  top: 100px;\n  width: 100%;\n}\n.light-text{\n  color: #f1f1f1;\n}\n/* Style the button used to pause/play the video */\n#myBtn {\n    width: 200px;\n    font-size: 18px;\n    padding: 10px;\n    border: none;\n    background: #000;\n    color: #fff;\n    cursor: pointer;\n}\n#myBtn:hover {\n    background: #ddd;\n    color: black;\n}\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The video -->\n<video controls autoplay muted loop id=\"myVideo\">\n    <source src=\"../../../assets/343014810.mp4\" type=\"video/mp4\" muted>\n  </video>\n  \n<!-- Optional: some overlay text to describe the video -->\n<div class=\"content\">\n  <div class=\"login-form\">\n    <div class=\"columns\">\n      <div class=\"column is-4 is-offset-1\">\n        <br>\n        <h1 class=\"light-text\">Bike-Amor</h1>\n        <h2 class=\"light-text\">Get pedaling: Find events and take part in your local cycling community</h2>\n      </div>\n      <div class=\"column is-one-quarter is-offset-2\">\n        <br>\n        <br>\n        <h2 class=\"light-text\">Log-In</h2>\n        <form>\n          <input class=\"input \" [(ngModel)]=\"user.email\" type=\"text\" placeholder=\"E-mail Address\" name=\"email\"><br><br>\n          <input class=\"input \" [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Password\" name=\"password\"><br><br>\n          <button class=\"button is-primary\" (click)=\"login()\">Enter Dashboard</button><br><br>\n        </form>\n      </div>\n      </div>\n      <div class=\"columns\">\n        <div class = \"column is-one-third is-offset-1\">\n          <h3 class=\"light-text\">Not a member of Bike-Amor yet?</h3>\n          <a [routerLink]=\"['/signup']\"><button class=\"button is-primary\">Sign Up</button></a>\n        </div>\n        <div class=\"column is-2 is-offset-2 social-button\">\n          <button class=\"button is-link\" (click)=\"facebookLogin()\">Log-In with Facebook</button><br>\n        </div>\n        <div class=\"column is-offset--1 social-button\">\n          <button class=\"button is-danger\" (click)=\"googleLogin()\">Log-In with Google</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.user = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user)
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    // insert FB login
    // insert google login
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-item img {\n  max-height: 6rem;\n}\n.about {\n  font-size: 1.5em;\n}"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n      <a class=\"navbar-item\" [routerLink]=\"['/']\">\n        <img src=\"https://www.shareicon.net/download/2016/08/02/805657_sport_512x512.png\" alt=\"bike-icon\"/>\n      </a>\n      <div class=\"navbar-start\">\n          <a class=\"navbar-item\" [routerLink]=\"['about']\">\n            <p class=\"about\">About Us</p>\n          </a>\n        </div>\n      <!--<div class = \"navbar-burger\"></div>-->\n    </div>\n  <div *ngIf=\"user\" id=\"navMenu\" class=\"navbar-menu\">\n      <div *ngIf=\"user\" class=\"navbar-end\">\n        <div class=\"navbar-item\">\n          <div class=\"field is-grouped\">\n            <p class=\"control\">\n              <a (click)=\"logout()\" class=\"button is-dark\">\n                <span class=\"icon\">\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                </span>\n                \n                <span>\n                  Logout\n                </span>\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-dark\" [routerLink]=\"['../user', user._id]\">\n                <span class=\"icon\">\n                  <i class=\"fas fa-user\"></i>\n                </span>\n                <span>Profile</span>\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(auth, router, userService) {
        this.auth = auth;
        this.router = router;
        this.userService = userService;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (userLogged) {
            _this.user = userLogged;
        });
    };
    NavComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  color: #f1f1f1;\n}\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n\n}\nh2{\n  font-size: 2em;\n  color: #f1f1f1;\n}\nh3{\n  font-size: 1.5em;\n  color: #f1f1f1;\n}\nimg {\n  position: absolute;\n  top:0px;\n  z-index: -1;\n  height: 730px;\n  width:100%;\n  \n}\n.signup-main {\n  padding-bottom: 142px;\n  margin: 0 0 0 0;\n  position: relative;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.5) no-repeat fixed center; \n}"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<div class=\"main-container\">\n  <div class=\"columns signup-main\">\n    <div class=\"column is-half is-offset-one-quarter\">\n      <h1>Hello!</h1>\n      <h1>Account Creation</h1>\n      <br>\n      <form>\n        <input class=\"input\" [(ngModel)]=\"newUser.name\" type=\"text\" placeholder=\"What's Your Name?\" name=\"name\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newUser.email\" type=\"email\" placeholder=\"What's Your E-mail?\" name=\"email\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newUser.password\" type=\"password\" placeholder=\"Create Your Password\" name=\"password\" required><br><br>\n        <input class=\"input\" [(ngModel)]=\"newUser.password2\" type=\"password\" placeholder=\"Repeat Your Password\" name=\"password2\" required><br>\n        <br>\n        <button class=\"button is-primary\" (click)=\"signUp()\" *ngIf=\"newUser.password === newUser.password2\"> Create Account</button>\n        <button class=\"button is-primary\" *ngIf=\"newUser.password !== newUser.password2\" disabled>Passwords Must Match</button>\n      </form>\n    </div>\n  </div>\n  <img src=\"../../../assets/thumb-1920-280639.jpg\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.newUser = {
            name: name
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.auth.signUp(this.newUser)
            .subscribe(function (user) {
            _this.toastr.success("Welcome " + _this.newUser.name + "!", 'Success');
            setTimeout(function () { _this.router.navigate(['']); }, 500);
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['']);
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  color: #f1f1f1;\n}\nh1 {\n  font-size: 3.5em;\n  color: #f1f1f1;\n\n}\nh2{\n  font-size: 2em;\n  color: #f1f1f1;\n}\nh3{\n  font-size: 1.5em;\n  color: #f1f1f1;\n}\nimg {\n  position: absolute;\n  top:0px;\n  z-index: -1;\n  height: 730px;\n  width:100%;\n  \n}\n.user-main {\n  padding-bottom: 214px;\n  margin: 0 0 0 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.5) no-repeat fixed center; \n}"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\"> \n <div class=\"user-main\">\n    <div class=\"columns\">\n      <div class=\"column is-one-third is-offset-one-third\">\n        <br>\n        <br>\n        <br>\n        <br>\n        <h1>Hello {{user.name}}!</h1><br>\n        <form #myForm='ngForm' (ngSubmit)='updateUser(myForm)' novalidate>\n          <input class=\"input\" ngModel type=\"text\" placeholder=\"Update your name\" name=\"name\" ng-required=\"required\" required><br><br>\n          <input class=\"input\" ngModel type=\"email\" placeholder=\"Update your email\" name=\"email\" ng-required=\"required\" required><br><br>\n          <!-- <input ngModel type=\"password\" placeholder=\"Create Your New Password\" name=\"password\" required><br>\n          <input ngModel type=\"password\" placeholder=\"Repeat Your New Password\" name=\"password2\" required><br> -->\n          <input type='submit' class=\"button is-warning\" *ngIf=\"user.password === user.password2\" value='Update Profile'/>\n          <input type='submit' class=\"button is-warning\" *ngIf=\"user.password !== user.password2\" value='Passwords Must Match' disabled/>\n        </form>\n        <br>\n        <button class=\"button is-danger\" (click)=\"deleteUser()\">Delete My Profile</button>\n      </div>\n    </div>\n  </div>\n  <img src=\"../../../assets/thumb-1920-345366.jpg\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(activatedRoute, userService, auth, router, toastr, vcr) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.user = {
            name: String,
            email: String,
            password: String,
            image: String
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    // This function runs but doesn't delete the user from the DB. Fix this!!
    UserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.confirmStatus = confirm('Are you sure you want to delete your user?');
        if (this.confirmStatus) {
            this.userService.deleteUser(this.user._id);
            this.toastr.success("User updated!", 'Success');
            setTimeout(function () { _this.router.navigate(['']); }, 500);
        }
        else {
            return;
        }
    };
    // This Doesn't Function Correctly: Name is okay but email causes the user to fail out. Form
    // is also broken in fields so that they aren't required.
    UserComponent.prototype.updateUser = function (form) {
        var _this = this;
        this.userService.updateUser(this.user._id, form.value)
            .subscribe(function (res) {
            _this.toastr.success("User updated!", 'Success');
            setTimeout(function () { _this.router.navigate(['']); }, 500);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userService.getUser(params['id'])
                .subscribe(function (singleUser) { return _this.user = singleUser; });
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/components/user/user.component.html"),
            styles: [__webpack_require__("./src/app/components/user/user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + 'api/auth';
    }
    AuthService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e.json().message);
    };
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/signup", user, { withCredentials: true })
            .map(function (res) {
            res.json();
        })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user, { withCredentials: true })
            .map(function (res) {
            _this.toastr.success('Welcome!', 'Success');
            res.json();
            setTimeout(function () { location.reload(); }, 0);
        })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.BASE_URL + "/logout", {}, { withCredentials: true })
            .map(function (res) {
            res.json();
            location.reload();
        })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASE_URL + "/loggedin", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/checkIfLogged.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterDetailsGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnterDetailsGuardService = /** @class */ (function () {
    function EnterDetailsGuardService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + 'api/auth';
    }
    EnterDetailsGuardService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(e.json().message);
    };
    EnterDetailsGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/loggedin", { withCredentials: true })
            .map(function (res) {
            if (res) {
                return true;
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        })
            .catch(this.handleError);
    };
    EnterDetailsGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EnterDetailsGuardService);
    return EnterDetailsGuardService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + 'api/events';
    }
    EventService.prototype.getEvents = function () {
        return this.http.get("" + this.BASE_URL)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    EventService.prototype.makeEvent = function (event) {
        return this.http.post("" + this.BASE_URL, event)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    EventService.prototype.getSingleEvent = function (id) {
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    EventService.prototype.updateEvent = function (id, event) {
        return this.http.patch(this.BASE_URL + "/" + id, event)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    EventService.prototype.deleteEvent = function (id) {
        confirm('Are you sure you want to delete this event?');
        return this.http.delete(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/listing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + 'api/listings';
    }
    ListingService.prototype.getListings = function () {
        return this.http.get("" + this.BASE_URL)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    ListingService.prototype.makeListing = function (listing) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        return this.http.post("" + this.BASE_URL, listing, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    ListingService.prototype.getSingleListing = function (id) {
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    ListingService.prototype.updateListing = function (id, listing) {
        return this.http.patch(this.BASE_URL + "/" + id, listing)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    ListingService.prototype.deleteListing = function (id) {
        confirm('Are you sure you want to delete this listing?');
        return this.http.delete(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    ListingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = /** @class */ (function () {
    function UserService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + 'api/users';
    }
    UserService.prototype.getUser = function (id) {
        var _this = this;
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserService.prototype.updateUser = function (id, user) {
        var _this = this;
        return this.http.patch(this.BASE_URL + "/" + id, user, { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return this.http.delete(this.BASE_URL + "/" + id, { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (e) {
            _this.toastr.error(e._body);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(e);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASE_URL: 'https://bikeamor.herokuapp.com/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map