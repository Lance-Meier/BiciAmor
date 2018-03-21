import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService, UserService]
})
export class NavComponent implements OnInit {
  user: any;

  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.auth.isLoggedIn()
    .subscribe(userLogged => {
      this.user = userLogged;
    });
  }

  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }

}
