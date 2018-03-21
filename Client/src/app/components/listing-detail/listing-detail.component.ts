import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ListingService } from '../../services/listing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
  providers: [AuthService, ListingService]
})
export class ListingDetailComponent implements OnInit {
  listingItem = {
    id: String
  };

  constructor(private activatedRoute: ActivatedRoute, private listing: ListingService,
    private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout()
      .subscribe(() => this.router.navigate(['']));
  }
  deleteListing() {
    this.listing.deleteListing(this.listingItem.id);
    this.router.navigate(['listing']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.listing.getSingleListing(params['id'])
      .subscribe(singleItem => this.listingItem = singleItem);
    });
  }

}
