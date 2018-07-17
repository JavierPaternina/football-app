import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Navigation } from '../../core/nav/navigationConfig';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle = 'Football-app';
  pageNavigation = Navigation.home;
  constructor(public navCtrl: NavController) {

  }

}
