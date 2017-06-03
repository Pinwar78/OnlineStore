import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ItemsService } from '../../app/ItemsService';
import { ItemPage } from '../item/item';
import { ListPage } from '../list/list';
import { CartPage } from '../cart/cart'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public SliderImg: Array<string>;
  constructor(public navCtrl: NavController, public navParams : NavParams, public itemsSvc:ItemsService) {
    this.navCtrl = navCtrl;
    this.SliderImg = ['placeholder1.jpg','placeholder2.jpg', 'placeholder3.jpg'];
    this.itemsSvc = itemsSvc;
  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  openItemPage(id){
    this.navCtrl.push(ItemPage, {id : id});
  }

  openCategoryPage(category){
    this.navCtrl.push(ListPage, {category : category});
  }

}
