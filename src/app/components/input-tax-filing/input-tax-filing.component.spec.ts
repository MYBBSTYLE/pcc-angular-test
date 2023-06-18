import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaxFilingComponent } from './input-tax-filing.component';

describe('InputTaxFilingComponent', () => {
  let component: InputTaxFilingComponent;
  let fixture: ComponentFixture<InputTaxFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTaxFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTaxFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
