import { Component } from '@angular/core';

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ftb-footer',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  text: string;

  constructor() {
    console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
  }

}
