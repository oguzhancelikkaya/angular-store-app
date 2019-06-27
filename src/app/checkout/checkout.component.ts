import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products = products;
  items;
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
   }

  ngOnInit() {
  }

  deleteProduct(_product){
    this.cartService.deleteItem(_product);
   
  }

}