import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../app/Item';
import { ItemsService } from '../../app/ItemsService';
import { CartService } from '../../app/CartService';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  constructor(public navCtrl: NavController, public itemsSvc: ItemsService, public cartSvc: CartService) {
    this.navCtrl = navCtrl;
    this.itemsSvc = itemsSvc;
    this.cartSvc = cartSvc;
  }

  decrementQuantity(item){
    var selectedItem;
    for (var i = 0; i < this.cartSvc.getCartItems().length; i++){
      if (this.cartSvc[i] = item) selectedItem = this.cartSvc[i];
      break;
    }
    if (selectedItem.quantity > 1) selectedItem.quantity--;
  }

  incrementQuantity(item){
    var selectedItem;
    for (var i = 0; i < this.cartSvc.getCartItems().length; i++){
      if (this.cartSvc[i] = item) selectedItem = this.cartSvc[i];
      break;
    }
    selectedItem.quantity++;
  }
}
