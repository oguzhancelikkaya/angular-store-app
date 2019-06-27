import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(_product){
    if(this.cartService.getItems().find(el => el.code === _product.code) !== undefined){
        window.alert('Already Added to cart');
      }
      else{
        _product.quantity = 1
        this.cartService.addToCart(_product);
        window.alert('Added to cart');
      }
  }

}