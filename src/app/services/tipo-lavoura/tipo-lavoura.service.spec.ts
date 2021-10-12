import { TestBed } from '@angular/core/testing';

import { TipoLavouraService } from './tipo-lavoura.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('TipoLavouraService', () => {
  let service: TipoLavouraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(TipoLavouraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
