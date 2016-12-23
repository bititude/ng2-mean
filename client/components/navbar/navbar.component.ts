import { Component, OnInit } from '@angular/core';
import { StateService } from 'ui-router-ng2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isCollapsed = true;
  isAdmin = false;
  isLoggedIn = false;
  currentUser = {};
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  static parameters = [AuthService, StateService];
  constructor(private authService: AuthService, private stateService: StateService) {

    this.reset();

    this.authService.currentUserChanged.subscribe(user => {
      this.currentUser = user;
      this.reset();
    });
  }

  reset() {
    this.authService.isLoggedIn().then(is => {
      this.isLoggedIn = is;
    });
    this.authService.isAdmin().then(is => {
      this.isAdmin = is;
    });
    this.authService.getCurrentUser().then(user => {
      this.currentUser = user;
    });
  }

  logout() {
    let promise = this.authService.logout();
    this.stateService.go('login'); return promise;
  }

}
