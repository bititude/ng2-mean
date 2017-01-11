import { Directive, ElementRef, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[mongooseError]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MongooseError), multi: true }]
})
export class MongooseError implements Validator {
	error: Boolean;

	constructor(el: ElementRef, c: AbstractControl) {
		c = new FormControl(el);
		el.nativeElement.onkeydown = () => {
			this.error = false;
			this.validate(c);
		}
	}

	validate(c: AbstractControl): { [key: string]: any; } {
		return this.error ? {
			mongoose: true
		} : null;
	}
}