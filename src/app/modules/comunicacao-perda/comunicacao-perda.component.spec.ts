import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoPerdaComponent } from './comunicacao-perda.component';

describe('ComunicacaoPerdaComponent', () => {
  let component: ComunicacaoPerdaComponent;
  let fixture: ComponentFixture<ComunicacaoPerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoPerdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoPerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
