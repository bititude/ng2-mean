import { Component, OnInit } from '@angular/core';
import { StateService } from 'ui-router-ng2';

import { AuthService } from '../../../components/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };
  errors = { login: undefined };
  submitted = false;

  static parameters = [AuthService, StateService];
  constructor(private _AuthService: AuthService, private _StateService: StateService) {
  }

  login() {
    this.submitted = true;
    return this._AuthService.login({
      email: this.user.email,
      password: this.user.password
    }).then(() => {
      // Logged in, redirect to home
      this._StateService.go('main');
    }).catch(err => {
      this.errors.login = err.message;
    });
  }

}
