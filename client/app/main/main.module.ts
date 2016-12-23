import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

import { MainComponent } from './main.component';

export const STATES = [{ name: 'main', url: '/', component: MainComponent }];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    UIRouterModule.forChild({ states: STATES }),
  ],
  declarations: [MainComponent]
})
export class MainModule { }
