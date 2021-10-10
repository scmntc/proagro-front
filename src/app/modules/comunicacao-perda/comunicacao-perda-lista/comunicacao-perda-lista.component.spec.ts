import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoPerdaListaComponent } from './comunicacao-perda-lista.component';

describe('ComunicacaoPerdaListaComponent', () => {
  let component: ComunicacaoPerdaListaComponent;
  let fixture: ComponentFixture<ComunicacaoPerdaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoPerdaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoPerdaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
