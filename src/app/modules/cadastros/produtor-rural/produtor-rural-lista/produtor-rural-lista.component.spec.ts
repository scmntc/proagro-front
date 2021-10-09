import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorRuralListaComponent } from './produtor-rural-lista.component';

describe('ProdutorRuralListaComponent', () => {
  let component: ProdutorRuralListaComponent;
  let fixture: ComponentFixture<ProdutorRuralListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorRuralListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorRuralListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
