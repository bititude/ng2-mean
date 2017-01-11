import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongooseError } from './mongoose-error/mongoose-error.directive';
import { ValidateEmail } from './validate-email/validate-email.directive';
import { MatchControl } from './match-control/match-control.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [
  	MongooseError,
  	ValidateEmail,
  	MatchControl,
  ],
  exports: [
  	MongooseError,
  	ValidateEmail,
  	MatchControl,
  ]
})
export class DirectivesModule {};
