import { TestBed } from '@angular/core/testing';

import { CroquetaService } from './croqueta.service';

describe('CroquetaService', () => {
  let service: CroquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
