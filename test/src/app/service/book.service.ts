import { Injectable } from '@angular/core';

interface books {
  id: number;
  title: string;
  category: string;
  author: string;
  pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: books[] = [
    {
      id: 1,
      title: 'Il Signore degli Anelli',
      category: 'Fantasy',
      author: 'J.R.R. Tolkien',
      pages: 1178,
    },
    {
      id: 2,
      title: 'Viaggio al centro della Terra',
      category: 'Avventura',
      author: 'Jules Verne',
      pages: 183,
    },
    {
      id: 3,
      title: 'Sapiens: Da animali a dei',
      category: 'Saggio',
      author: 'Yuval Noah Harari',
      pages: 443,
    },
    {
      id: 4,
      title: '1984',
      category: 'Saggio',
      author: 'George Orwell',
      pages: 328,
    },
    {
      id: 5,
      title: 'Il Nome del Vento',
      category: 'Fantasy',
      author: 'Patrick Rothfuss',
      pages: 662,
    },
    {
      id: 6,
      title: 'Cronache del ghiaccio e del fuoco',
      category: 'Fantasy',
      author: 'George R.R. Martin',
      pages: 694,
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }

  addBook(book: books) {
    this.books.push(book);
  }

  updateBook(book: books) {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter((b) => b.id !== id);
  }
}
