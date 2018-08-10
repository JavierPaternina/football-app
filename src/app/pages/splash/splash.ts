import { LoginPage } from './../login/login';
import { Component} from "@angular/core";
import { NavController} from 'ionic-angular';


@Component({
  selector: "page-splash",
  templateUrl: "splash.html"
})

export class SplashPage {
  loginPage;
  signUp;
  constructor(public navCtrl: NavController) {

  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
}
