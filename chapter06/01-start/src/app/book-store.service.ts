import {Injectable} from '@angular/core';

import {Book} from './book';
import {BOOKS} from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = BOOKS;

  getBooks(): Book[] {
    return this.booksList;
  }

  getBook(isbn: number): Book {
    return this.booksList.find(book => book.isbn === isbn);
  }

  deleteBook(isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }

}
