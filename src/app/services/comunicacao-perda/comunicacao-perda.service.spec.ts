import {TestBed} from '@angular/core/testing';

import {ComunicacaoPerdaService} from './comunicacao-perda.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ComunicacaoPerdaService', () => {
  let service: ComunicacaoPerdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(ComunicacaoPerdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
