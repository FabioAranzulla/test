import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private libri: Libro[];

  constructor() {
    this.libri = [
      {
        id: 1,
        titolo: 'Il Signore degli Anelli',
        categoria: 'Fantasy',
        autore: 'J.R.R. Tolkien',
        numeroPagine: 1137,
      },
      {
        id: 2,
        titolo: 'Viaggio al centro della Terra',
        categoria: 'Avventura',
        autore: 'Jules Verne',
        numeroPagine: 277,
      },
      {
        id: 3,
        titolo: 'Le Avventure di Tom Sawyer',
        categoria: 'Avventura',
        autore: 'Mark Twain',
        numeroPagine: 224,
      },
      {
        id: 4,
        titolo: 'Il Codice da Vinci',
        categoria: 'Saggio',
        autore: 'Dan Brown',
        numeroPagine: 689,
      },
      {
        id: 5,
        titolo: 'Le Cronache di Narnia',
        categoria: 'Fantasy',
        autore: 'C.S. Lewis',
        numeroPagine: 746,
      },
    ];
  }

  getLibri(): Libro[] {
    return this.libri;
  }
}
