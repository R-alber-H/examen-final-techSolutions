import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetodosPagos } from './metodos-pagos';

describe('MetodosPagos', () => {
  let component: MetodosPagos;
  let fixture: ComponentFixture<MetodosPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodosPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodosPagos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
