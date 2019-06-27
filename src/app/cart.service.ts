import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  deleteItem(product) {
     var index = this.items.findIndex(function(item, i){
      return item.code === product.code
    });
    this.items.splice(index,1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}