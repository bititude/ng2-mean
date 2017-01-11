import { Component, OnInit } from '@angular/core';
import { StateService } from 'ui-router-ng2';
import { forEach } from 'lodash';

import { AuthService } from '../../../components/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	user = {
    name: '',
    email: '',
    password: ''
  };
  errors = {};
  submitted = false;

  static parameters = [AuthService, StateService];
  constructor(private _AuthService: AuthService, private _StateService: StateService) {
  }

  register(form) {
  	this.submitted = true;
  	return this._AuthService.createUser({
  		name: this.user.name,
  		email: this.user.email,
  		password: this.user.password
  	}).then(() => {
  		this._StateService.go('main')
  	}).catch(err => {
  		this.errors = {};

  		forEach(err.errors, (error, field) => {
        form.controls[field].setErrors({mongoose: true});
  		  this.errors[field] = error.message;
  		});
  	})
  }

}
