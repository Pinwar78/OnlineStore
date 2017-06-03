import { Injectable } from '@angular/core'
@Injectable()
export class CartService{
  public cartItems: Array<object>;

  constructor(){
    this.cartItems = [];
  }

  getCartItems(){
    return this.cartItems;
  }

  addToCart(id, quantity){
    for (var i = 0; i < this.cartItems.length; i++){
      if (this.cartItems[i]['id'] == id) {
        this.cartItems[i]['quantity'] += quantity;
        return;
      };
    }
    this.cartItems.push({id: id, quantity: quantity});
  }

  removeFromCart(item){
      for (var i = 0; i < this.cartItems.length; i++){
        if (this.cartItems[i]['id'] == item.id) this.cartItems.splice(i, 1);
      }
    }
}
