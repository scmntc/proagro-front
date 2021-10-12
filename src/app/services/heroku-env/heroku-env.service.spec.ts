import {TestBed} from '@angular/core/testing';

import {HerokuEnvService} from './heroku-env.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HerokuEnvService', () => {
  let service: HerokuEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HerokuEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
