import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVentas } from './tabla-ventas';

describe('TablaVentas', () => {
  let component: TablaVentas;
  let fixture: ComponentFixture<TablaVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
