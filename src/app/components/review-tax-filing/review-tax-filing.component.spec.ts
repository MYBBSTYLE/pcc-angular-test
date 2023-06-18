import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTaxFilingComponent } from './review-tax-filing.component';

describe('ReviewTaxFilingComponent', () => {
  let component: ReviewTaxFilingComponent;
  let fixture: ComponentFixture<ReviewTaxFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTaxFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTaxFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
