import { Component } from '@angular/core';

@Component({
  selector: 'display-data-app',
  template: `
    <h1 [textContent]="message"></h1>
    <input type="text" [value]="message"/>
  `
})
export class AppComponent {
  public message: string = 'Angular 2 – Property Binding Syntax';
}