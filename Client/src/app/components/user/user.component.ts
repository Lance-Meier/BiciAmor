import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

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
    private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }
  deleteUser() {
    this.confirmStatus = confirm('Are you sure you want to delete your user?');
    if (this.confirmStatus) {
      this.userService.deleteUser(this.user._id);
      this.logout();
      this.router.navigate(['']);
    } else {
      return;
    }
  }
  updateUser(form) {
    this.userService.updateUser(this.user._id, form.value)
    .subscribe(res => {
      console.log(res);
    });
    location.reload();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['id'])
      .subscribe(singleUser => this.user = singleUser);
    });
  }

}


