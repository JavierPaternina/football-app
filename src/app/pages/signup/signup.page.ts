import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../core/authentication/services/signup.service';

@Component({
  selector: 'ftb-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers: [SignupService]
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  pageTitle = 'Sign Up';

  constructor(public navCtrl: NavController, private fb: FormBuilder, private signupService: SignupService) {
    this.initForm();
  }

  initForm() {

    this.signupForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.min(6)])
      ],
      confirmPassword: [''],
      name: [''],

    });
  }
  signUp() {
    const formValues = this.signupForm.value;
    const signUpP =  this.signupService.signUpUser(formValues.email, formValues.password, formValues.name);
    console.log(signUpP);
  }
  ngOnInit() {
  }

}
