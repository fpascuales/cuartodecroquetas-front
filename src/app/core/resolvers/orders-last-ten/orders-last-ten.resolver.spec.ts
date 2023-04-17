import { TestBed } from '@angular/core/testing';

import { OrdersLastTenResolver } from './orders-last-ten.resolver';

describe('OrdersDataResolver', () => {
  let resolver: OrdersLastTenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrdersLastTenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
