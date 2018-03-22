import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(private auth: AuthService, private router: Router, public toastr: ToastsManager,
  vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  login() {
    this.auth.login(this.user)
    .subscribe(res => {
      this.user = res;
    });
  }

  // insert FB login

  // insert google login

    ngOnInit() {
  }
}
