import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../classes/purchaserequest';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  purchaserequest: PurchaseRequest;

  constructor(private route: ActivatedRoute,
    private purchaserequestsvc: PurchaseRequestService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.purchaserequestsvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.purchaserequest = res.data;
      })
  }

  remove(): void {
    this.purchaserequestsvc.remove(this.purchaserequest)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequests/list");
      });
  }

}
