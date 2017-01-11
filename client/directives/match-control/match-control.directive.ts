import { Directive, ElementRef, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[matchControl][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchControl), multi: true }]
})
export class MatchControl implements Validator{

  constructor(@Attribute('matchControl') private matchControl: string) { }

  validate(c: AbstractControl): { [key: string]: any; } {
  	let v = c.value;
  	let e = c.root.get(this.matchControl)

  	return (e && v !== e.value) ? {
  		match: true
  	} : null;
  }
}
