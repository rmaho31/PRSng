import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PurchaseRequestService } from '../../services/purchaserequest.service'
import { PurchaseRequest } from '../../classes/purchaserequest'

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {

  purchaserequest: PurchaseRequest = new PurchaseRequest();
  password2: String = "";

  constructor(private purchaserequestsvc: PurchaseRequestService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.purchaserequestsvc.add(this.purchaserequest)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/purchaserequests/list');
      })
  }
  

}
