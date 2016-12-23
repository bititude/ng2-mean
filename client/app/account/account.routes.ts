import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';

export const STATES = [{
  name: 'login',
  url: '/login',
  component: LoginComponent
}, {
  name: 'signup',
  url: '/signup',
  component: SignupComponent
}, {
  name: 'settings',
  url: '/settings',
  component: SettingsComponent,
  data: {
    authenticate: true
  }
}]