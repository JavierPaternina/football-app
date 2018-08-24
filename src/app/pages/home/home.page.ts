import { NAVIGATION } from '../../shared/constants/navigation.constant';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  pageTitle = 'Football Teams';
  pageNavigation = NAVIGATION.home;
  constructor() {}
}
