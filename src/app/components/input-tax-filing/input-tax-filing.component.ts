import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionMonth, OptionRadio } from 'src/app/interface/tax-filing';
import { TaxFilingService } from 'src/app/service/tax-filing.service';

@Component({
  selector: 'app-input-tax-filing',
  templateUrl: './input-tax-filing.component.html',
  styleUrls: ['./input-tax-filing.component.css']
})
export class InputTaxFilingComponent implements OnInit {
  @Output() detailTaxData = new EventEmitter();

  taxData!: FormGroup;
  optionFilingType: OptionRadio[] = [];
  selectMonth: OptionMonth[] = []
  selectYear: string[] = [];
  cerrentMonth: string = ''
  cerrentYear:  string = ''

  constructor(private fb: FormBuilder, private taxFilingService : TaxFilingService) {}

  ngOnInit(): void {
    this.taxData = this.fb.group({
      filingType: ['0', [Validators.required]],
      month: [null, [Validators.required]],
      year: [null, [Validators.required]],
      saleAmount: [null, [Validators.required]],
      taxAmount: [null, [Validators.required]],
      surcharge: ["0.00"],
      penalty: ["0.00"],
      totalAmount: ["0.00"],
    });

    this.optionFilingType = this.taxFilingService.getFilingType();
    this.selectMonth = this.taxFilingService.getSelectMonth();
    this.cerrentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
    this.selectMonth.map((item)=>{
         item.disable = Number(item.code) > Number(this.cerrentMonth)? true : false;
    })
    this.cerrentYear = (new Date().getFullYear()).toString()
    for (var year = 2020; year <= Number(this.cerrentYear); year++) {
      this.selectYear.push(year.toString())
    }
  }

  submitForm(): void {
    if (this.taxData.valid) {
      this.detailTaxData.emit(this.taxData.value)
    } else {
      Object.values(this.taxData.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  getSaleAmount(name: string, value: any) {
    if (typeof value == 'number') {
      let decimal = value.toString().split('.')[1];
      if (decimal != undefined && decimal.length > 2) {
        this.taxData.controls['saleAmount'].setValue(value.toFixed(2));
      }
    }
  }
  setTotalAmount(numberSaleAmount : any, taxAmount: any) {
    this.setNumbertoCommaString('taxAmount', taxAmount);
    this.setNumbertoCommaString('penalty', 200.0);
    let surcharge = taxAmount + taxAmount * 0.01;
    this.setNumbertoCommaString('surcharge', surcharge);
    let totalAmount = taxAmount + 200 + surcharge;
    this.setNumbertoCommaString('totalAmount', totalAmount);
  }

  onFocusSaleAmount(value: any) {
    this.setStringToNumber('saleAmount', value);
  }
  onFocusTaxAmount(value: any) {
    this.setStringToNumber('taxAmount', value);
  }

  onBlurSaleAmount(value: any) {
    if (value) {
      this.setNumbertoCommaString('saleAmount', value);
      let taxAmount = (value * 0.07);
      if(this.taxData.controls['filingType'].value == '0'){
        this.setNumbertoCommaString('taxAmount', taxAmount);
      }else{
        this.setTotalAmount(value,taxAmount)
      }
    }
  }
  onBlurTaxAmount(value: any) {
    if (value) {
      let saleAmount = this.taxData.controls['saleAmount'].value.replaceAll(',','');
      let numberSaleAmount = parseFloat(saleAmount);
      let total =  (numberSaleAmount * 0.07)
      let numbervalue = value;
      if (numbervalue < total + 20 && numbervalue > total - 20) {
        if(this.taxData.controls['filingType'].value == '0'){
          this.setNumbertoCommaString('taxAmount', value);
        }else{
          this.setTotalAmount(numberSaleAmount, value)
        }
      } else {
        alert('Invalid Tax');
        this.setNumbertoCommaString('taxAmount', total);
        this.taxData.controls['surcharge'].setValue('0.00');
        this.taxData.controls['penalty'].setValue('0.00');
        this.taxData.controls['totalAmount'].setValue('0.00');
      }
    }
  }

  setStringToNumber(name: string, value: any) {
    if (value) {
      const element = document.querySelector(`input[formControlName=${name}]`) as HTMLInputElement;
      const type = element.getAttribute('type') === 'text' ? 'number' : 'text';
      element.setAttribute('type', type);
      let test = value.replaceAll(',', '');
      this.taxData.controls[name].setValue(test);
    }
  }
  setNumbertoCommaString(name: string, value: any) {
    if (value) {
      if (name == 'saleAmount' || name == 'taxAmount') {
        const element = document.querySelector(`input[formControlName=${name}]`) as HTMLInputElement;
        element.setAttribute('type', 'text');
      }
      let valueString = parseFloat(value).toLocaleString(undefined, {
        minimumFractionDigits: 2, maximumFractionDigits: 2,
      });

      let decimal = valueString.split('.');
      if (decimal.length == 2) {
        this.taxData.controls[name].setValue(valueString);
      } else {
        valueString = valueString + '.00';
        this.taxData.controls[name].setValue(valueString);
      }
    }
  }
}
