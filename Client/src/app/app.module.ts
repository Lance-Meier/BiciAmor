// Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { ListingComponent } from './components/listing/listing.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';
import { AreaComponent } from './components/area/area.component';
import { NavComponent } from './components/nav/nav.component';

import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { ListingService} from './services/listing.service';
import { UserService } from './services/user.service';

import { EnterDetailsGuardService } from './services/checkIfLogged.service';

const routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full' },
  {path: '', component: DashboardComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'event', component: EventComponent, canActivate: [EnterDetailsGuardService]},
  {path: 'event/:id', component: EventDetailComponent, canActivate: [EnterDetailsGuardService]},
  {path: 'listing', component: ListingComponent, canActivate: [EnterDetailsGuardService]},
  {path: 'listing/:id', component: ListingDetailComponent, canActivate: [EnterDetailsGuardService]},
  {path: 'area', component: AreaComponent, canActivate: [EnterDetailsGuardService]},
  {path: 'user/:id', component: UserComponent, canActivate: [EnterDetailsGuardService]},
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent,
    ListingComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    EventDetailComponent,
    ListingDetailComponent,
    AreaComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, EventService, ListingService, UserService, EnterDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
