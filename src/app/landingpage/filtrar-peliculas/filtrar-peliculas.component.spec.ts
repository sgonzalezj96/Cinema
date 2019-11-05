import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarPeliculasComponent } from './filtrar-peliculas.component';

describe('FiltrarPeliculasComponent', () => {
  let component: FiltrarPeliculasComponent;
  let fixture: ComponentFixture<FiltrarPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
