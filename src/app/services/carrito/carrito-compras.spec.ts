import { TestBed } from '@angular/core/testing';

import { CarritoCompras } from './carrito-compras';

describe('CarritoCompras', () => {
  let service: CarritoCompras;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoCompras);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
