import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { BookStoreMaterialModule } from './BookStoreMaterialModule';

import { AppComponent } from './app.component';
import { Safe } from './safe';

import {
  BookStoreService,
  MasterDetailComponent,
  ListComponent
} from './books';

@NgModule({
  declarations: [
    AppComponent,
    Safe,
    MasterDetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BookStoreMaterialModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
