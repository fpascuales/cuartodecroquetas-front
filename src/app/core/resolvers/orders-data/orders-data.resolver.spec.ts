import { TestBed } from '@angular/core/testing';

import { OrdersDataResolver } from './orders-data.resolver';

describe('OrdersDataResolver', () => {
  let resolver: OrdersDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrdersDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
