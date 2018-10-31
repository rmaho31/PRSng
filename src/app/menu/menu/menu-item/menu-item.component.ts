import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../menu'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  private _items: any;

  public get items(): any {
    return this._items;
  }

  @Input() public set items(menu: any) {
    this._items = [{route: "/" + menu.title.toLocaleLowerCase() + "/list", display: menu.title.toLocaleLowerCase(), title: "List"},
                   {route: "/" + menu.title.toLocaleLowerCase() + "/create", display: menu.title.toLocaleLowerCase(), title: "Create"}]
  }


  @Input() menu: Menu;
  constructor() { }

  ngOnInit() {
  }

}
