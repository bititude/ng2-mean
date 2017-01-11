import { Component } from '@angular/core';
import { TransitionService, StateService } from "ui-router-ng2";

import { AuthService } from '../components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(transitionService: TransitionService, authService: AuthService, stateService: StateService) {
		transitionService.onBefore({}, (transition) => {
			let next = transition.to()
			
			if (next.name === 'login' || next.name === 'signup') {
				authService.isLoggedIn()
				.then(is => {
					if (!is) return;
					transition.router.stateService.go('main');
				})
			}

			if (!next.data) return; 

			if(next.data.authenticate && typeof next.data.authenticate === 'string') {
				authService.hasRole(next.data.authenticate)
				.then(has => { 
					if(has) return; 
					authService.isLoggedIn()
					.then(is => {
						if (is) transition.router.stateService.go('main');
						transition.router.stateService.go('login');
					})
				})
			} else if(next.data.authenticate) {
				authService.isLoggedIn()
				.then(is => {
					if (is) return;
					transition.router.stateService.go('main');
				})
			}
			
		})
	}

}
