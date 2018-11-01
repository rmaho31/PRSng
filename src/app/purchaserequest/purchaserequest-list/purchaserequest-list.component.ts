import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../classes/purchaserequest';
import { SortPipe } from '../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  purchaserequests: PurchaseRequest[];
  title: string = "PurchaseRequest List";
  sortBy: string = "id";

  constructor(private purchaserequestSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.purchaserequestSvc.list().subscribe(res => {
                                  this.purchaserequests = res.data;
      }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
