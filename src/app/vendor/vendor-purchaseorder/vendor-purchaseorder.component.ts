import { Component, OnInit } from '@angular/core';
import { LineItemService } from 'src/app/services/lineitem.service';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/classes/vendor';
import { LineItem } from 'src/app/classes/lineitem';

@Component({
  selector: 'app-vendor-purchaseorder',
  templateUrl: './vendor-purchaseorder.component.html',
  styleUrls: ['./vendor-purchaseorder.component.css']
})
export class VendorPurchaseOrderComponent implements OnInit {
  vendor: Vendor;
  lineitems: LineItem[];
  title: string = "Vendor Purchase Order";
  sortBy: string = 'id';
  direction: number = 1;
  totalPrice: number = 0;

  constructor(private lineitemsvc: LineItemService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.vendorsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        this.vendor = res.data;
      });
    this.lineitemsvc.getPrliVendor(this.route.snapshot.params.id)
      .subscribe(res => {
        this.lineitems = res.data;
        for (let li of res.data) {
          this.totalPrice += li.product.price * li.quantity;
        }
        if (this.totalPrice < 1000) {
          this.totalPrice *= .90 * 1.05;
        } else if (this.totalPrice < 5000) {
          this.totalPrice *= .80 * 1.05;
        } else {
          this.totalPrice *= .70 * 1.05;
        }
      });
  }

  setSortBy(column: string): void {
    this.sortBy = column;
    this.direction *= -1;
  }



}
