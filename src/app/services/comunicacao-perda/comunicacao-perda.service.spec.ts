import { TestBed } from '@angular/core/testing';

import { ComunicacaoPerdaService } from './comunicacao-perda.service';

describe('ComunicacaoPerdaService', () => {
  let service: ComunicacaoPerdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacaoPerdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
