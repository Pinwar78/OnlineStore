import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ItemsService } from '../../app/ItemsService';
import { ItemPage } from '../item/item';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public chosenCategory: string;
  public items: Array<object>;
  public sortChoice: string;
  public sortBy: any;
  public sortReversed: Boolean;
  constructor(public navCtrl: NavController,public navParams: NavParams, public itemsSvc: ItemsService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.itemsSvc = itemsSvc;
    this.chosenCategory = this.navParams.data.category;
    this.items = this.itemsSvc.getItemsByCategory(this.chosenCategory);
  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  openItemPage(id){
    this.navCtrl.push(ItemPage, {id : id});
  }

  setSort($event){
    switch(this.sortChoice){
      case 'Name: Ascending':
        this.sortBy = ['brand', 'model'];
        this.sortReversed = false;
        break;
      case 'Name: Descending':
        this.sortBy = ['brand', 'model'];
        this.sortReversed = true;
        break;
      case 'Price: Low to High':
        this.sortBy = 'price';
        this.sortReversed = false;
        break;
      case 'Price: High to Low':
        this.sortBy  = 'price';
        this.sortReversed = true;
        break;
    }
  }
}
