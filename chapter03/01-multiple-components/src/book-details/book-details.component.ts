import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  moduleId: module.id,
  selector: 'book-details',
  templateUrl: 'book-details.component.html'
})
export class BookDetailsComponent {

  @Input() book: Book;

  @Output() deleteBook = new EventEmitter();

  removeBook() {
    this.deleteBook.emit(this.book.isbn);
  }
}