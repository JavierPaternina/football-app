import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ftb-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  passInvalid = false;
  emailInvalid = false;
  pageTitle = 'Login';
  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.min(6)])
      ]
    });
  }
  checkEmail() {
    if (this.loginForm.controls.email.value) {
      this.emailInvalid = false;
    }
  }
  checkPass() {
    if (this.loginForm.controls.password.value) {
      this.passInvalid = false;
    }
  }
  pop() {
    this.navCtrl.goBack('');
  }
  login() {
    if (this.loginForm.controls.email.invalid) {
      this.emailInvalid = true;
      console.log('Email is required');
      return;
    }
    if (this.loginForm.controls.password.invalid) {
      this.passInvalid = true;
      console.log('Pass is required');
      return;
    }
    this.navCtrl.goRoot('/home');
  }
  ngOnInit() {}
}
