import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatalogo } from './card-catalogo';

describe('CardCatalogo', () => {
  let component: CardCatalogo;
  let fixture: ComponentFixture<CardCatalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCatalogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCatalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
