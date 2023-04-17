import { TestBed } from '@angular/core/testing';

import { TopCroquetasDataResolver } from './top-croquetas-data.resolver';

describe('TopCroquetasDataResolver', () => {
  let resolver: TopCroquetasDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TopCroquetasDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
