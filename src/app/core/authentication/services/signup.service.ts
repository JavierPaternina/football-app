import { Injectable } from '@angular/core';
import { SignupPage } from '../../../pages/signup/signup.page';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: SignupPage
})
export class SignupService {


  constructor(private afs: AngularFireAuth) { }

  signUpUser(email: string, pass: string, name: string) {
    this.afs.auth.createUserWithEmailAndPassword(email, pass).then(() => {
      this.addDisplayName(name).then(() => {
        return this.afs.auth.currentUser;
      });



      // this.afs.auth.signOut();
    }).catch(error => {
      return error;
    });

  }
  private addDisplayName(name: string): any {
    return this.afs.auth.currentUser.updateProfile({ displayName: name, photoURL: null });
  }

}
