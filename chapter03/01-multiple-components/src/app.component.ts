import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'books-list',
  templateUrl: 'src/app.component.html'
})
export class AppComponent {
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  getBookDetails (isbn: number) {
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);
    this.selectedBook = selectedBook[0];
  }

  deleteBook (isbn: number) {
    this.selectedBook = null;
    this.booksList = this.booksList.filter(book=>book.isbn !== isbn);
  }
}