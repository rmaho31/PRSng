import { Component, OnInit } from '@angular/core';
import { LineItemService } from '../../services/lineitem.service';
import { LineItem } from '../../classes/lineitem';
//import { SortPipe } from '@pipe/sort.pipe';

@Component({
  selector: 'app-lineitem-list',
  templateUrl: './lineitem-list.component.html',
  styleUrls: ['./lineitem-list.component.css']
})
export class LineItemListComponent implements OnInit {
  lineitems: LineItem[];
  title: string = "LineItem List";
  sortBy: string = "id";

  constructor(private lineitemSvc: LineItemService) { }

  ngOnInit() {
    this.lineitemSvc.list().subscribe(res => {
                                  this.lineitems = res.data;
      }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
