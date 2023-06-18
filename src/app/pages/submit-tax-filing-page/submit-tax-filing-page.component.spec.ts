import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTaxFilingPageComponent } from './submit-tax-filing-page.component';

describe('SubmitTaxFilingPageComponent', () => {
  let component: SubmitTaxFilingPageComponent;
  let fixture: ComponentFixture<SubmitTaxFilingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitTaxFilingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTaxFilingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
