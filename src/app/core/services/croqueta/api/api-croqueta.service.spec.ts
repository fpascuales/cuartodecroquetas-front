import { TestBed } from '@angular/core/testing';

import { ApiCroquetaService } from './api-croqueta.service';

describe('ApiCroquetaService', () => {
  let service: ApiCroquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCroquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
