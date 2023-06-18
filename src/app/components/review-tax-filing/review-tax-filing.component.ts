import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxData, DisplaytaxData } from 'src/app/interface/tax-filing';
import { TaxFilingService } from 'src/app/service/tax-filing.service';

@Component({
  selector: 'app-review-tax-filing',
  templateUrl: './review-tax-filing.component.html',
  styleUrls: ['./review-tax-filing.component.css'],
})
export class ReviewTaxFilingComponent implements OnInit {
  @Input() displayTaxData!: DisplaytaxData;
  @Output() backStep = new EventEmitter();

  taxData!: TaxData;

  displayMonth: string = '';

  constructor(private taxFilingService: TaxFilingService) {}

  ngOnInit(): void {
    this.displayTaxData = {
      filingType: '',
      month: '',
      year: '',
      saleAmount: '0.00',
      taxAmount: '0.00',
      surcharge: '0.00',
      penalty: '0.00',
      totalAmount: '0.00',
      totalAll: '0.00',
    };
  }
  ngOnChanges(): void {
    if (this.displayTaxData) {
      this.taxData = {
        filingType: this.displayTaxData.filingType,
        month: this.displayTaxData.month,
        year: this.displayTaxData.year,
        saleAmount: this.setNumber(this.displayTaxData.saleAmount),
        taxAmount: this.setNumber(this.displayTaxData.taxAmount),
        surcharge: this.setNumber(this.displayTaxData.surcharge),
        penalty: this.setNumber(this.displayTaxData.penalty),
        totalAmount: this.setNumber(this.displayTaxData.totalAmount),
      };
      const reducedValue = Object.values(this.taxData).reduce(
        (accumulator, currentValue) => {
          if (typeof currentValue === 'number') {
            return accumulator + currentValue;
          } else {
            return accumulator;
          }
        },
        0
      );
      this.taxData.totalAll = reducedValue;
      this.displayTaxData.totalAll = this.setCommaString(reducedValue);
      this.displayTaxData.filingType = this.taxFilingService.getFilingTypeName(this.displayTaxData.filingType);
      this.displayTaxData.month = this.taxFilingService.getMonthName(this.displayTaxData.month);
    }
  }

  setNumber(value: any): number {
    let saleAmount = value.replaceAll(',', '');
    let number = parseFloat(saleAmount);
    return number;
  }
  setCommaString(value: any): string {
    let valueString = parseFloat(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return valueString;
  }
  ConfirmForm() {
    alert('JSON\n' + JSON.stringify(this.taxData));
  }
  BackTo(){
    this.backStep.emit(0);
  }
}
