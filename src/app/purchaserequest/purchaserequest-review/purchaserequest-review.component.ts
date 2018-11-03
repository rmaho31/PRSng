import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from 'src/app/services/purchaserequest.service';
import { SystemService } from 'src/app/services/system.service';
import { PurchaseRequest } from 'src/app/classes/purchaserequest';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  purchaserequests: PurchaseRequest[];
  title: string = "PurchaseRequest List";
  sortBy: string = "id";

  constructor(private purchaserequestsvc: PurchaseRequestService,
    private systemsvc: SystemService) { }

  ngOnInit() {
    this.purchaserequestsvc.review(this.systemsvc.user).subscribe(res => {
      this.purchaserequests = res.data;
      console.log(this.systemsvc.user)
    }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
