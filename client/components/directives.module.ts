import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';

import { AuthModule } from './auth/auth.module';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule , UIRouterModule.forChild(), AuthModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class DirectivesModule {};
