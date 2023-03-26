import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLibriComponent } from './lista-libri.component';

describe('ListaLibriComponent', () => {
  let component: ListaLibriComponent;
  let fixture: ComponentFixture<ListaLibriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLibriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
