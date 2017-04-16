import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'bl-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  booksList: Book[] = [];
  selectedBook: Book;
  spinnerVisibility = 'block';

  constructor(private bookStoreService: BookStoreService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookStoreService
      .getBooks()
      .subscribe(res => {
        this.booksList = res;
        this.spinnerVisibility = 'none';
      });
  }

  deleteBook(id: number) {
    this.bookStoreService.deleteBook(id)
      .subscribe(result => {
        console.log(result);
        if (result.ok) {
          this.openSnackBar();
        }
        this.getBooks();
      });
  }

  openSnackBar() {
    this.snackBar.open('Book Deleted', 'CLOSE', {
      duration: 1000
    });
  }
}
