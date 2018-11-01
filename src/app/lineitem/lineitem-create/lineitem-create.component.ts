import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LineItemService } from '../../services/lineitem.service'
import { LineItem } from '../../classes/lineitem'

@Component({
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})

export class LineItemCreateComponent implements OnInit {

  lineitem: LineItem = new LineItem();
  password2: String = "";

  constructor(private lineitemsvc: LineItemService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.lineitemsvc.add(this.lineitem)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/lineitems/list');
      })
  }
  

}
