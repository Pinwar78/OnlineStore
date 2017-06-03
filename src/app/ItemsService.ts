import { Injectable } from '@angular/core';
import { Item } from "./Item";
import { ITEMS } from './ItemData';

@Injectable()
export class ItemsService {
  getItems(){
    return ITEMS;
  }

  getItemsByCategory(category){
    var categoryItems = [];
    for (var i = 0; i < ITEMS.length; i++){
        if (ITEMS[i].category == category) categoryItems.push(ITEMS[i]);
      }
    return categoryItems;
  }

  getCategories(){
    var categories = [];
    for (var i = 0; i < ITEMS.length; i++){
      if (categories.indexOf(ITEMS[i].category) === -1) categories.push(ITEMS[i].category);
    }

    return categories;
  }

  getItem(id){
    var item = new Item;
    for (var i = 0; i < ITEMS.length; i++){
      if (ITEMS[i].id == id) {
        item = ITEMS[i];
        break;
      }
    }
    return item;
  }

  getSimilarItems(id, numOfItems){
    var similarItems = [];
    var max;
    if (numOfItems && numOfItems <= ITEMS.length) max = numOfItems;
    else max = ITEMS.length;
    for (var i = 0; i < ITEMS.length; i++){
      if (similarItems.length < max && ITEMS[i].category == this.getItem(id).category && ITEMS[i].id != id) similarItems.push(ITEMS[i]);
    }
    return similarItems;
  }
}
