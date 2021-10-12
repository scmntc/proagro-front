import {TestBed} from '@angular/core/testing';

import {ProdutorRuralService} from './produtor-rural.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ProdutorRuralService', () => {
  let service: ProdutorRuralService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(ProdutorRuralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
