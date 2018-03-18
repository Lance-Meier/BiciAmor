import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
  newUser = {};

  constructor(private auth: AuthService, private router: Router) { }

  signUp() {
    this.auth.signUp(this.newUser)
    .subscribe(user => {
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['']);
  }
  }
}
