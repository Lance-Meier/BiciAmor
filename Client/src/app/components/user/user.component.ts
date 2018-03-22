import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AuthService, UserService]
})
export class UserComponent implements OnInit {
  user: any = {
    name: String,
    email: String,
    password: String,
    image: String
  };
  confirmStatus: Boolean;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
    private auth: AuthService, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }
  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }
  // This function runs but doesn't delete the user from the DB. Fix this!!

  deleteUser() {
    this.confirmStatus = confirm('Are you sure you want to delete your user?');
    if (this.confirmStatus) {
      this.userService.deleteUser(this.user._id);
      this.toastr.success(`User updated!`, 'Success');
      setTimeout (() => { this.router.navigate(['']); }, 500);
    } else {
      return;
    }
  }
  // This Doesn't Function Correctly: Name is okay but email causes the user to fail out. Form
  // is also broken in fields so that they aren't required.

  updateUser(form) {
    this.userService.updateUser(this.user._id, form.value)
    .subscribe(res => {
      this.toastr.success(`User updated!`, 'Success');
      setTimeout (() => { this.router.navigate(['']); }, 500);
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['id'])
      .subscribe(singleUser => this.user = singleUser);
    });
  }

}


