import { TestBed } from '@angular/core/testing';

import { CroquetasDataResolver } from './croquetas-data.resolver';

describe('CroquetasDataResolver', () => {
  let resolver: CroquetasDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CroquetasDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
