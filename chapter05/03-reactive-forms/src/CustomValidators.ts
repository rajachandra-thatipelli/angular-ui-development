import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  
  static passwordStrength (control: AbstractControl) {
    
    if (CustomValidators.isEmptyInputValue(control.value)) {
      return null;
    }

    if (!control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/)) {
      return {'weakPassword': true};
    }
  }
  
  static isEmptyInputValue (value) {
    return value == null || typeof value === 'string' && value.length === 0;
  }
}