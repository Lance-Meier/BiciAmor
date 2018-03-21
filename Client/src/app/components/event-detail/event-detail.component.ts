import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [AuthService]
})
export class EventDetailComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }
  ngOnInit() {
  }

}
