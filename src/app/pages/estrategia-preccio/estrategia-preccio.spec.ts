import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaPreccio } from './estrategia-preccio';

describe('EstrategiaPreccio', () => {
  let component: EstrategiaPreccio;
  let fixture: ComponentFixture<EstrategiaPreccio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrategiaPreccio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrategiaPreccio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
