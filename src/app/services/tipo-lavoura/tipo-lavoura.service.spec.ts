import { TestBed } from '@angular/core/testing';

import { TipoLavouraService } from './tipo-lavoura.service';

describe('TipoLavouraService', () => {
  let service: TipoLavouraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoLavouraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
