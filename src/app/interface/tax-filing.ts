export interface OptionMonth {
  code: string;
  name: string;
  disable?: boolean;
}
export interface OptionRadio {
  code: string;
  name: string;
}
export interface TaxData {
  filingType: string
  month: string
  year: string
  saleAmount: number
  taxAmount: number
  surcharge?: number
  penalty?: number
  totalAmount?:number
  totalAll? : number
}
export interface DisplaytaxData {
  filingType: string
  month: string
  year: string
  saleAmount: string
  taxAmount: string
  surcharge?: string
  penalty?: string
  totalAmount?:string
  totalAll? : string
}
