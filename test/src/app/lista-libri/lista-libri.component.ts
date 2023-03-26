import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  styleUrls: ['./lista-libri.component.css'],
})
export class ListaLibriComponent implements OnInit {
  libri!: Libro[];
  libroForm!: FormGroup;
  libroToEdit: Libro | null = null;
  isEdit: boolean = false;
  aggiungiForm: FormGroup;
  modificaForm: FormGroup;
  libroSelezionato: boolean = true;
  termineRicerca: string = '';
  libriFiltrati: Libro[] = this.libri;
  libroNonTrovato: boolean = false;
  testoRicerca = '';
  libro: any;

  constructor(private libroService: LibroService, private fb: FormBuilder) {
    this.aggiungiForm = this.fb.group({
      id: [null],
      titolo: ['', Validators.required],
      categoria: ['', Validators.required],
      autore: ['', Validators.required],
      numeroPagine: ['', Validators.required],
    });

    this.libroForm = this.fb.group({
      id: [null],
      titolo: ['', Validators.required],
      categoria: ['', Validators.required],
      autore: ['', Validators.required],
      numeroPagine: ['', Validators.required],
    });

    this.modificaForm = this.fb.group({
      id: [null],
      titolo: ['', Validators.required],
      categoria: ['', Validators.required],
      autore: ['', Validators.required],
      numeroPagine: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.libri = this.libroService.getLibri();
  }

  filtraLibri() {
    if (!this.termineRicerca || this.termineRicerca.length < 2) {
      this.libriFiltrati = [];
      this.libroNonTrovato = false;
      return;
    }

    const termine = this.termineRicerca.toLowerCase();

    this.libriFiltrati = this.libri.filter(
      (libro) =>
        libro.titolo.toLowerCase().includes(termine) ||
        libro.categoria.toLowerCase().includes(termine) ||
        libro.autore.toLowerCase().includes(termine)
    );

    this.cercaLibro();
  }

  cercaLibro() {
    if (this.libriFiltrati.length === 0) {
      this.libroNonTrovato = true;
    } else {
      this.libroNonTrovato = false;
    }
  }

  selezionaLibro(libro: Libro): void {
    this.isEdit = true;
    this.libroToEdit = libro;
    this.modificaForm.patchValue(libro);
    this.aggiungiForm.reset();
  }

  aggiungiLibro(): void {
    const libroEsistente = this.libri.find(
      (libro) => libro.id === this.libro.id
    );

    if (libroEsistente) {
      alert('Errore: esiste già un libro con lo stesso ID');
    } else {
      this.libri.push(this.libro);
      this.libro = {};
    }
  }

  modificaLibro(): void {
    const index = this.libri.findIndex(
      (libro) => libro.id === this.libroToEdit?.id
    );
    this.libri[index] = this.modificaForm.value;
    this.modificaForm.reset();
    this.isEdit = true;
    this.libroToEdit = null;
  }

  annullaModifica(): void {
    this.modificaForm.reset();
    this.aggiungiForm.reset();
    this.isEdit = false;
    this.libroToEdit = null;
  }

  modifica(libro: Libro): void {
    this.libroToEdit = libro;
    this.modificaForm.setValue({
      id: libro.id,
      titolo: libro.titolo,
      categoria: libro.categoria,
      autore: libro.autore,
      numeroPagine: libro.numeroPagine,
    });
    this.isEdit = true;
  }

  eliminaLibro(libroId: number): void {
    const index = this.libri.findIndex((libro) => libro.id === libroId);
    if (index !== -1) {
      this.libri.splice(index, 1);
    }
  }
}
