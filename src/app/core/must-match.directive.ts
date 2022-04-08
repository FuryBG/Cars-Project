import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSameValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true}]
})
export class MustMatchDirective implements Validator {
  @Input() appSameValue = '';
  @Input() name!: string;

  constructor(private form: NgForm) {}


  validate(control: AbstractControl): ValidationErrors | null {
    const otherControlValue = this.form.controls[this.appSameValue].value;

    return control.value !== otherControlValue ? {
      appSameValue: {
        [this.appSameValue]: otherControlValue,
        [this.name]: control.value
      }
    } : null

  }


}
