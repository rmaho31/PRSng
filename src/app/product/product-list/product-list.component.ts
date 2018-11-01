import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';
import { SortPipe } from '../../pipe/sort.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  title: string = "Product List";
  sortBy: string = "id";

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(res => {
                                  this.products = res.data;
      }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}