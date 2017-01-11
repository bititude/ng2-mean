import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';

import { AdminComponent } from './admin.component';
import { STATES } from './admin.routes';
import { DirectivesModule } from '../../directives/directives.module'

@NgModule({
  imports: [
    CommonModule, 
  	UIRouterModule.forChild({
    	states: STATES
  	}),
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
