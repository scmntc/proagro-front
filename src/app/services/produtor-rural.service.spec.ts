import { TestBed } from '@angular/core/testing';

import { ProdutorRuralService } from './produtor-rural.service';

describe('ProdutorRuralService', () => {
  let service: ProdutorRuralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutorRuralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
