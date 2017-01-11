import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { STATES } from './account.routes';
import { DirectivesModule } from '../../directives/directives.module'

@NgModule({
  imports: [
  	CommonModule,
  	FormsModule , 
  	UIRouterModule.forChild({
    	states: STATES
  	}),
  	DirectivesModule],
  declarations: [LoginComponent, SignupComponent, SettingsComponent]
})
export class AccountModule {};
