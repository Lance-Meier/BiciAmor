import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
  newUser = {
    name
  };

  constructor(private auth: AuthService, private router: Router, public toastr: ToastsManager,
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  signUp() {
    this.auth.signUp(this.newUser)
    .subscribe(user => {
      this.toastr.success(`Welcome ${this.newUser.name}!`, 'Success');
      setTimeout (() => { this.router.navigate(['']); }, 500);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['']);
  }
  }
}
