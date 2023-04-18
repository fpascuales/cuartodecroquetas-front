import { TestBed } from '@angular/core/testing';

import { CroquetaDetailResolver } from './croqueta-detail.resolver';

describe('CroquetaDetailResolver', () => {
  let resolver: CroquetaDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CroquetaDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
