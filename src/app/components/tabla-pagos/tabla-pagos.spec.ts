import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPagos } from './tabla-pagos';

describe('TablaPagos', () => {
  let component: TablaPagos;
  let fixture: ComponentFixture<TablaPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPagos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
