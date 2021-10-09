import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorRuralCadastroComponent } from './produtor-rural-cadastro.component';

describe('ProdutorRuralCadastroComponent', () => {
  let component: ProdutorRuralCadastroComponent;
  let fixture: ComponentFixture<ProdutorRuralCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorRuralCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutorRuralCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
