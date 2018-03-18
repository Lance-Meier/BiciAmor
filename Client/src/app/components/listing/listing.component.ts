import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [AuthService, ListingService]
})
export class ListingComponent implements OnInit {
  listings: Array<any> = [];
  newListing = {};

  constructor(private listingService: ListingService, private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

  makeListing() {
    this.listingService.makeListing(this.newListing)
    .subscribe(listing => {
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
    this.listingService.getListings()
    .subscribe(res => this.listings = res);
    }
}
