import { Injectable } from '@angular/core';
import { SplashScreenPage } from '../../../pages/splash-screen/splash-screen.page';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: SplashScreenPage
})
export class LoginGoogleService {

  constructor(private afs: AngularFireAuth) { }
  signInGoogle() {
    return this.withGoogle(new firebase.auth.GoogleAuthProvider());
  }
  private withGoogle(provider: firebase.auth.AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afs.auth.signInWithPopup(provider);
    } else {
      this.afs.auth.signInWithRedirect(provider)
        .then(result => {
          return this.afs.auth.getRedirectResult().then(() => {
            console.log(result);
          })
            .catch(error => {
              console.log(error.message);
            });
        });
    }


  }
}
