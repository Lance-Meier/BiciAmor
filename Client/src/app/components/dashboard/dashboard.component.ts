import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService]
})
export class DashboardComponent implements OnInit {
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
