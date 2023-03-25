import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book = { id: 0, title: '', category: '', author: '', pages: 0 };
  newBook: Book = { id: 0, title: '', category: '', author: '', pages: 0 };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(book: Book) {
    this.books.push(book);
    this.bookService.addBook(book);
    this.newBook = { id: 0, title: '', category: '', author: '', pages: 0 };
  }

  updateBook(book: Book) {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      this.bookService.updateBook(book);
    }
  }

  deleteBook(id: number) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
    this.bookService.deleteBook(id);
  }

  onCancel() {
    if (this.selectedBook) {
      this.selectedBook = new Book();
    }
  }
}
