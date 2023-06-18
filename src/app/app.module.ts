import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitTaxFilingPageComponent } from './pages/submit-tax-filing-page/submit-tax-filing-page.component';
import { InputTaxFilingComponent } from './components/input-tax-filing/input-tax-filing.component';
import { ReviewTaxFilingComponent } from './components/review-tax-filing/review-tax-filing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SubmitTaxFilingPageComponent,
    InputTaxFilingComponent,
    ReviewTaxFilingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
