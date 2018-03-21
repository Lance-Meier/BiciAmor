import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login(this.user)
    .subscribe(res => {
      this.user = res;
      this.router.navigate(['']);
    });
  }

  // insert FB login

  // insert google login

    ngOnInit() {
      document.querySelector('video').defaultPlaybackRate = 0.5;
  }
}
