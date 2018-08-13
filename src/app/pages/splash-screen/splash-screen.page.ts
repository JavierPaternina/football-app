import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'ftb-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss']
})
export class SplashScreenPage implements OnInit {
  loginPage;
  signUp;
  constructor(private navCtrl: NavController) {}
  goToLogin() {
    this.navCtrl.goForward('/login');
  }
  ngOnInit() {}
}
