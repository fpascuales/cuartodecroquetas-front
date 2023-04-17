import { TestBed } from '@angular/core/testing';

import { OrdersLastResolver } from './orders-last.resolver';

describe('OrdersLastResolver', () => {
  let resolver: OrdersLastResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrdersLastResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
