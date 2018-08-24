import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../core/authentication/services/login.service';

@Component({
  selector: 'ftb-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginService]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  passInvalid = false;
  emailInvalid = false;
  pageTitle = 'Login';
  constructor(public navCtrl: NavController,
    private fb: FormBuilder,
    private singInService: LoginService) {
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
    const loginValues = this.loginForm.value;
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

    this.singInService.loginApp(loginValues.email, loginValues.password).then(user => {
      console.log(user);
    },
      error => {
        console.log(error);
      });
  }
  ngOnInit() { }
}
