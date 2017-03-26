import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <input #text class="form-control mt-1"/>
      <button #btn class="btn primary mt-1">Show Message!</button>
      <p class="mt-1">{{message}}</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('btn') btn;
  @ViewChild('text') text;
  message: string;

  ngOnInit() {
    const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click')
      .map(event => 'Hello Angular, RxJS!');

    const textOb$ = Observable.fromEvent(this.text.nativeElement, 'change')
      .map(event => event.target.value);


    Observable.merge(btnOb$, textOb$)
      .subscribe(res => this.message = res);
  }
}