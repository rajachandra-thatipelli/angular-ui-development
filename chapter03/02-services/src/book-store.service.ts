import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = BOOKS;

  getBooks () {
    return this.booksList;
  }

  getBook (isbn: number) {
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);
    return selectedBook[0];
  }

  deleteBook (isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}