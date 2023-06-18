import { Component, OnInit } from '@angular/core';
import { DisplaytaxData } from 'src/app/interface/tax-filing';

@Component({
  selector: 'app-submit-tax-filing-page',
  templateUrl: './submit-tax-filing-page.component.html',
  styleUrls: ['./submit-tax-filing-page.component.css'],
})
export class SubmitTaxFilingPageComponent implements OnInit {
  detailTaxData!: DisplaytaxData;
  steps = ['Input Detail', 'Review&Confirm'];
  selectedStep = 0;

  constructor() {}

  ngOnInit(): void {}
  getDetailTaxData(data: DisplaytaxData) {
    this.detailTaxData = data;
    this.selectedStep = 1
  }
  getBackStep(backStep:number){
    this.selectedStep = backStep;
  }
}
