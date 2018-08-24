import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginGoogleService } from '../../core/authentication/services/login-google.service';

@Component({
  selector: 'ftb-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  providers: [LoginGoogleService]
})
export class SplashScreenPage implements OnInit {
  loginPage;
  signUp;
  constructor(private navCtrl: NavController, private singInService: LoginGoogleService) { }
  goToLogin() {
    this.navCtrl.goForward('/login');
  }
  goToSignUp() {
    this.navCtrl.goForward('/signup');
  }
  signInGoogle() {
    this.singInService.signInGoogle().then(result => { console.log(result); }, error => { console.log(error); });
  }
  ngOnInit() { }
}
