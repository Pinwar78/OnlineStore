import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OnlineStoreApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { ItemPage } from '../pages/item/item';
import { ListPage } from '../pages/list/list';
import { ItemsService } from './ItemsService';
import { CartService } from './CartService';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    OnlineStoreApp,
    HomePage,
    CartPage,
    ItemPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    IonicModule.forRoot(OnlineStoreApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OnlineStoreApp,
    HomePage,
    CartPage,
    ItemPage,
    ListPage
  ],
  providers: [
    StatusBar,
    ItemsService,
    CartService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
