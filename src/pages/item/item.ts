import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ItemsService } from '../../app/ItemsService';
import { Item } from '../../app/Item';
import { CartService } from '../../app/CartService';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  public selectedItem: object;
  public selectedQuantity: number;
  public similarItems: Array<Item>;
  public isSpecsShown: Boolean;
  public isDescShown: Boolean;
  constructor(public navCtrl: NavController, public navParams : NavParams, public itemsSvc : ItemsService, public cartSvc : CartService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.itemsSvc = itemsSvc;
    this.selectedItem = itemsSvc.getItem(this.navParams.data.id);
    this.selectedQuantity = 1;
    this.similarItems = this.itemsSvc.getSimilarItems(this.selectedItem['id'], 4);
    this.isSpecsShown = false;
    this.cartSvc = cartSvc;
  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  decrementQuantity(){
    if (this.selectedQuantity > 1) this.selectedQuantity--;
  }

  incrementQuantity(){
    this.selectedQuantity++;
  }

  openItemPage(id){
    this.navCtrl.push(ItemPage, {id : id});
  }

  toggleSpecsShow(){
    this.isSpecsShown = !this.isSpecsShown;
  }

  toggleDescShow(){
    this.isDescShown = !this.isDescShown;
  }



}
