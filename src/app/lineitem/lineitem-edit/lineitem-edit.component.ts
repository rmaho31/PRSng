import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from '../../services/lineitem.service'
import { LineItem } from '../../classes/lineitem';

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineItemEditComponent implements OnInit {

  lineitem: LineItem;

  constructor(private lineitemsvc: LineItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.lineitemsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.lineitem = res.data;
        }
      })
  }

  save() {
    this.lineitemsvc.change(this.lineitem)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/lineitems/list');
        }
      })
  }

}
