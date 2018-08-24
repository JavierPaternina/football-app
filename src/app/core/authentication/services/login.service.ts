import { Injectable } from '@angular/core';

import { LoginPage } from '../../../pages/login/login.page';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: LoginPage
})
export class LoginService {

  constructor(private afs: AngularFireAuth) { }

  loginApp(email: string, pass: string) {
    return this.afs.auth.signInWithEmailAndPassword(email, pass);
  }
}
