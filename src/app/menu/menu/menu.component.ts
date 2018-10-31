import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home"),
    new Menu("Users"),
    new Menu("Vendors"),
    new Menu("Products"),
    new Menu("PurchaseRequests"),
    new Menu("LineItems"),
    new Menu("About")

  ]
  title: string = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.title);
  }

}
