import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibriComponent } from './lista-libri/lista-libri.component';
import { LibroService } from './service/libro.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListaLibriComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [LibroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
