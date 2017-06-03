import { Component } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import {Inject, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { ItemPage } from '../pages/item/item';
import { ListPage } from '../pages/list/list';
import { ItemsService } from './ItemsService';

@Component({
  templateUrl: 'app.html'
})
export class OnlineStoreApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  itemCategories: Array<string>;
  isCategoriesShown: Boolean;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, itemsSvc : ItemsService) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'List', component: ListPage},
      { title: 'Cart', component: CartPage}
    ];

    this.itemCategories = itemsSvc.getCategories();
    this.isCategoriesShown = false;
  }

  openPage(pageTitle, params) {
    for (var i = 0; i < this.pages.length; i++){
      if (this.pages[i].title == pageTitle) {
        if (params) this.nav.setRoot(this.pages[i].component, params);
        else this.nav.setRoot(this.pages[i].component);
        break;
      }
    }
  }

  toggleCategoriesShow() {
    this.isCategoriesShown = !this.isCategoriesShown;
  };
}
