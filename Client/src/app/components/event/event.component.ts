import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [AuthService]
})
export class EventComponent implements OnInit {
  user: any;

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
    this.auth.isLoggedIn()
    .subscribe(userLogged => {
      this.user = userLogged;
    });
  }

}
