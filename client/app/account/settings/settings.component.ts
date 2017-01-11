import { Component } from '@angular/core';

import { AuthService } from '../../../components/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
	user = {
		oldPassword: '',
		newPassword: '',
		cpassword: ''
	}
	submitted: boolean;
	message: string;
	errors = {};

  constructor(private _AuthService: AuthService) { }

  changePassword(form) {
  	this.submitted = true;

  	this._AuthService.changePassword(this.user.oldPassword, this.user.newPassword)
  	.then(() => {
  		this.message = 'Password successfully changed';
  	})
  	.catch(err => {
  		form.controls['oldPassword'].setErrors({mongoose: true});
  		this.errors['oldPassword'] = 'Incorrect password';
  	})
  }  
}
