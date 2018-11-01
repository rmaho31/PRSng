import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { Product } from '../../classes/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.productsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.product = res.data;
        }
      })
  }

  save() {
    this.productsvc.change(this.product)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/products/list');
        }
      })
  }

}
