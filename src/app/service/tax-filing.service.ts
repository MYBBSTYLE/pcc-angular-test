import { Injectable } from '@angular/core';
import { OptionMonth, OptionRadio } from '../interface/tax-filing';

@Injectable({
  providedIn: 'root',
})
export class TaxFilingService {
  constructor() {}

  filingType: OptionRadio[] = [
    {
      code: '0',
      name: 'Ordinary Filing',
    },
    {
      code: '1',
      name: 'Additional Filing',
    },
  ];
  selectMonth: OptionMonth[] = [
    {
      code: '01',
      name: 'January',
    },
    {
      code: '02',
      name: 'February',
    },
    {
      code: '03',
      name: 'March',
    },
    {
      code: '04',
      name: 'April',
    },
    {
      code: '05',
      name: 'May',
    },
    {
      code: '06',
      name: 'June',
    },
    {
      code: '07',
      name: 'July',
    },
    {
      code: '08',
      name: 'August',
    },
    {
      code: '09',
      name: 'September',
    },
    {
      code: '10',
      name: 'October',
    },
    {
      code: '11',
      name: 'November',
    },
    {
      code: '12',
      name: 'December',
    },
  ];

  getFilingType(){
    return this.filingType;
  }
  getFilingTypeName(value: string): string{
    let result = this.filingType.find((item: OptionRadio) => item.code == value);
    return result ? result.name : value;
  }
  getSelectMonth() {
    return this.selectMonth;
  }
  getMonthName(value: string): string {
    let result = this.selectMonth.find((item: OptionMonth) => item.code == value);
    return result ? result.name : value;
  }
}
