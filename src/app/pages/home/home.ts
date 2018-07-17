import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { Navigation } from '../../core/nav/navigationConfig';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle = 'Football-app';
  pageNavigation = Navigation.home;
  constructor(public navCtrl: NavController,menu:MenuController) {
    menu.enable(true);  
  }

}
