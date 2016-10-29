import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AppComponent, BookDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}