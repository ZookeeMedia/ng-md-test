import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[max]',
  // register validator in DI
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }]
})
export class MaxValidatorDirective {
  @Input() max: number;

  constructor() { }
  // Define validation logic
  validate(control: AbstractControl): ValidationErrors {
    const currentValue = control.value;
    const isValid = currentValue >= this.max;

    // return errors as an object
    return isValid ? null : {
      max: {
        valid: false
      }
    };
  }
}