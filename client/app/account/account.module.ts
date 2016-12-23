import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

import { DirectivesModule } from '../../components/directives.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { STATES } from './account.routes'

@NgModule({
  imports: [FormsModule , UIRouterModule.forChild({
    states: STATES
  }), DirectivesModule],
  declarations: [LoginComponent, SignupComponent, SettingsComponent]
})
export class AccountModule {};
