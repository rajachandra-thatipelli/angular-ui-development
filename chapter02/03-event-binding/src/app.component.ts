import { Component } from '@angular/core';

@Component({
  selector: 'event-binding-app',
  template: `
    <p>{{message}}</p>
    <input type="text" (keypress)="showMessage($event)"/>
  `
})
export class AppComponent {
  public message: string = 'Angular 2 – Event Binding';

  showMessage(onKeyPressEvent) {
    this.message = onKeyPressEvent.target.value;
  }
}