import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'registration-form',
  templateUrl: 'registration-form.component.html'
})
export class RegistrationFormComponent {
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";

  onSubmit(formValue) {
    console.log(formValue);
  }
}