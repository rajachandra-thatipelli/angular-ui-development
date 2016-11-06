import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'registration-reactive-form',
  templateUrl: 'registration-reactive-form.component.html'
})
export class RegistrationReactiveFormComponent implements OnInit {

  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";

  registrationForm: FormGroup;

  ngOnInit () {

    this.registrationForm = new FormGroup({
      firstName: new FormControl('Shravan', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl(''),
        country: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit (formValue) {
    console.log(formValue);
    console.log(this.registrationForm.value)
  }
}